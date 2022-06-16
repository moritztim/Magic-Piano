import { get } from "svelte/store";
import IntervalTree from "node-interval-tree";
import {
  activeNotes,
  rollPedalingOnOff,
  softOnOff,
  sustainOnOff,
  tempoCoefficient,
  useMidiTempoEventsOnOff,
  noteVelocitiesMap,
} from "../stores";

// Pedal event codes are identical for all expression boxes (because they are
// read by the MIDI sample player), so definitely should be superclassed.
const SOFT_PEDAL_MIDI = 67;
const SUSTAIN_PEDAL_MIDI = 64;

const getExpressionParams = () => {};

const buildTempoMap = (metadataTrack) => {
  const _tempoMap = new IntervalTree();
  let lastTempo = null;
  let lastTick = 0;

  metadataTrack
    .filter((event) => event.name === "Set Tempo")
    .forEach(({ tick, data: tempo }) => {
      if (tick === lastTick || tempo === lastTempo) {
        return;
      }
      if (lastTempo == null) {
        lastTempo = tempo;
        return;
      }
      _tempoMap.insert(lastTick, tick, lastTempo);
      lastTempo = tempo;
      lastTick = tick;
    });

  _tempoMap.insert(lastTick, Infinity, lastTempo);
  return _tempoMap;
};

const buildNoteVelocitiesMap = (midiSamplePlayer) => {
  const noteVelocities = {};

  const [, ...musicTracks] = midiSamplePlayer.events;

  musicTracks.forEach((track) => {
    track
      .filter(({ name, velocity }) => name === "Note on" && velocity > 1)
      .forEach(({ noteNumber, velocity, tick }) => {
        noteVelocities[tick] = noteVelocities[tick] || {};
        // midi-player-js converts velocity values to integers between 0 and
        // 99, which is problematic and probably should be changed via a fork.
        // But for now they need to be rescaled to be between 0 and 127 to
        // (almost) match the original velocity values in the expressive MIDI.
        noteVelocities[tick][noteNumber] = Math.round(
          (velocity / 100.0) * 127.0,
        );
      });
  });

  noteVelocitiesMap.set(noteVelocities);
};

const buildPedalingMap = (musicTracks) => {
  // where two or more "music tracks" exist, pedal events are expected to have
  //  been duplicated across tracks, so we read only from the first one.
  const eventsTrack = musicTracks[0];
  const _pedalingMap = new IntervalTree();
  const controllerEvents = eventsTrack.filter(
    (event) => event.name === "Controller Change",
  );

  const enterEvents = (eventNumber) => {
    let tickOn = false;
    controllerEvents
      .filter(({ number }) => number === eventNumber)
      .forEach(({ value, tick }) => {
        if (value === 0) {
          if (tickOn !== false) _pedalingMap.insert(tickOn, tick, eventNumber);
          tickOn = false;
        } else if (value === 127) {
          if (!tickOn) tickOn = tick;
        }
      });
  };

  enterEvents(SOFT_PEDAL_MIDI);
  enterEvents(SUSTAIN_PEDAL_MIDI);

  return _pedalingMap;
};

const buildNotesMap = (musicTracks) => {
  const _notesMap = new IntervalTree();
  musicTracks.forEach((track) => {
    const tickOn = {};
    track
      .filter((event) => event.name === "Note on")
      .forEach(({ noteNumber, velocity, tick }) => {
        if (velocity === 0) {
          if (noteNumber in tickOn) {
            _notesMap.insert(tickOn[noteNumber], tick, noteNumber);
            delete tickOn[noteNumber];
          }
        } else if (!(noteNumber in tickOn)) tickOn[noteNumber] = tick;
      });
  });
  return _notesMap;
};

const buildMidiEventHandler =
  (startNote, stopNote, noteVelocsMap, midiSamplePlayer) =>
  ({ name, value, number, noteNumber, velocity, data, tick }) => {
    if (name === "Note on") {
      if (velocity === 0) {
        stopNote(noteNumber);
      } else {
        const expressionizedVelocity =
          noteVelocsMap[tick]?.[noteNumber] || velocity;
        startNote(noteNumber, expressionizedVelocity);
        activeNotes.add(noteNumber);
      }
    } else if (name === "Controller Change" && get(rollPedalingOnOff)) {
      if (number === SUSTAIN_PEDAL_MIDI) {
        sustainOnOff.set(!!value);
      } else if (number === SOFT_PEDAL_MIDI) {
        softOnOff.set(!!value);
      }
    } else if (name === "Set Tempo" && get(useMidiTempoEventsOnOff)) {
      midiSamplePlayer.setTempo(data * get(tempoCoefficient));
    }
  };

export {
  buildTempoMap,
  buildPedalingMap,
  buildNotesMap,
  buildNoteVelocitiesMap,
  buildMidiEventHandler,
  getExpressionParams,
};
