import './App.svelte.css.proxy.js';
/* src/App.svelte generated by Svelte v3.38.3 */
import {
	SvelteComponent,
	add_flush_callback,
	add_render_callback,
	append,
	attr,
	bind,
	binding_callbacks,
	check_outros,
	component_subscribe,
	create_bidirectional_transition,
	create_component,
	destroy_component,
	detach,
	element,
	empty,
	globals,
	group_outros,
	init,
	insert,
	listen,
	mount_component,
	noop,
	safe_not_equal,
	set_store_value,
	space,
	transition_in,
	transition_out
} from "./_snowpack/pkg/svelte/internal.js";

const { window: window_1 } = globals;
import { onMount } from "./_snowpack/pkg/svelte.js";
import { quartInOut } from "./_snowpack/pkg/svelte/easing.js";
import { fade } from "./_snowpack/pkg/svelte/transition.js";
import IntervalTree from "./_snowpack/pkg/node-interval-tree.js";

import {
	bassVolumeCoefficient,
	trebleVolumeCoefficient,
	tempoCoefficient,
	playbackProgress,
	activeNotes,
	currentTick,
	rollMetadata,
	showKeyboard,
	overlayKeyboard
} from "./stores.js";

import { clamp } from "./utils.js";
import SamplePlayer from "./components/SamplePlayer.svelte.js";
import RollSelector from "./components/RollSelector.svelte.js";
import RollDetails from "./components/RollDetails.svelte.js";
import RollViewer from "./components/RollViewer.svelte.js";
import Keyboard from "./components/Keyboard.svelte.js";
import KeyboardControls from "./components/KeyboardControls.svelte.js";
import KeyboardShortcuts from "./components/KeyboardShortcuts.svelte.js";
import TabbedPanel from "./components/TabbedPanel.svelte.js";
import Notification, { notify } from "./ui-components/Notification.svelte.js";
import FlexCollapsible from "./ui-components/FlexCollapsible.svelte.js";
import catalog from "./assets/catalog.json.proxy.js";

function create_if_block_5(ctx) {
	let rolldetails;
	let t;
	let if_block_anchor;
	let current;
	rolldetails = new RollDetails({});
	let if_block = !/*holesByTickInterval*/ ctx[2].count && create_if_block_6(ctx);

	return {
		c() {
			create_component(rolldetails.$$.fragment);
			t = space();
			if (if_block) if_block.c();
			if_block_anchor = empty();
		},
		m(target, anchor) {
			mount_component(rolldetails, target, anchor);
			insert(target, t, anchor);
			if (if_block) if_block.m(target, anchor);
			insert(target, if_block_anchor, anchor);
			current = true;
		},
		p(ctx, dirty) {
			if (!/*holesByTickInterval*/ ctx[2].count) {
				if (if_block) {
					
				} else {
					if_block = create_if_block_6(ctx);
					if_block.c();
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				}
			} else if (if_block) {
				if_block.d(1);
				if_block = null;
			}
		},
		i(local) {
			if (current) return;
			transition_in(rolldetails.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(rolldetails.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			destroy_component(rolldetails, detaching);
			if (detaching) detach(t);
			if (if_block) if_block.d(detaching);
			if (detaching) detach(if_block_anchor);
		}
	};
}

// (253:8) {#if !holesByTickInterval.count}
function create_if_block_6(ctx) {
	let p;

	return {
		c() {
			p = element("p");

			p.innerHTML = `Note:<br/>Hole visualization data is not available for this roll at
            this time. Hole highlighting will not be enabled.`;

			attr(p, "class", "svelte-54l61l");
		},
		m(target, anchor) {
			insert(target, p, anchor);
		},
		d(detaching) {
			if (detaching) detach(p);
		}
	};
}

// (249:4) <FlexCollapsible id="left-sidebar" width="20vw">
function create_default_slot_1(ctx) {
	let rollselector;
	let updating_currentRoll;
	let t;
	let if_block_anchor;
	let current;

	function rollselector_currentRoll_binding(value) {
		/*rollselector_currentRoll_binding*/ ctx[19](value);
	}

	let rollselector_props = { rollListItems: /*rollListItems*/ ctx[8] };

	if (/*currentRoll*/ ctx[0] !== void 0) {
		rollselector_props.currentRoll = /*currentRoll*/ ctx[0];
	}

	rollselector = new RollSelector({ props: rollselector_props });
	binding_callbacks.push(() => bind(rollselector, "currentRoll", rollselector_currentRoll_binding));
	let if_block = /*appReady*/ ctx[1] && create_if_block_5(ctx);

	return {
		c() {
			create_component(rollselector.$$.fragment);
			t = space();
			if (if_block) if_block.c();
			if_block_anchor = empty();
		},
		m(target, anchor) {
			mount_component(rollselector, target, anchor);
			insert(target, t, anchor);
			if (if_block) if_block.m(target, anchor);
			insert(target, if_block_anchor, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const rollselector_changes = {};

			if (!updating_currentRoll && dirty[0] & /*currentRoll*/ 1) {
				updating_currentRoll = true;
				rollselector_changes.currentRoll = /*currentRoll*/ ctx[0];
				add_flush_callback(() => updating_currentRoll = false);
			}

			rollselector.$set(rollselector_changes);

			if (/*appReady*/ ctx[1]) {
				if (if_block) {
					if_block.p(ctx, dirty);

					if (dirty[0] & /*appReady*/ 2) {
						transition_in(if_block, 1);
					}
				} else {
					if_block = create_if_block_5(ctx);
					if_block.c();
					transition_in(if_block, 1);
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				}
			} else if (if_block) {
				group_outros();

				transition_out(if_block, 1, 1, () => {
					if_block = null;
				});

				check_outros();
			}
		},
		i(local) {
			if (current) return;
			transition_in(rollselector.$$.fragment, local);
			transition_in(if_block);
			current = true;
		},
		o(local) {
			transition_out(rollselector.$$.fragment, local);
			transition_out(if_block);
			current = false;
		},
		d(detaching) {
			destroy_component(rollselector, detaching);
			if (detaching) detach(t);
			if (if_block) if_block.d(detaching);
			if (detaching) detach(if_block_anchor);
		}
	};
}

// (261:4) {#if appReady}
function create_if_block_3(ctx) {
	let div;
	let rollviewer;
	let t0;
	let t1;
	let flexcollapsible;
	let current;

	rollviewer = new RollViewer({
			props: {
				imageUrl: /*currentRoll*/ ctx[0].image_url,
				holesByTickInterval: /*holesByTickInterval*/ ctx[2],
				skipToTick: /*skipToTick*/ ctx[10]
			}
		});

	let if_block = /*$showKeyboard*/ ctx[6] && /*$overlayKeyboard*/ ctx[7] && create_if_block_4(ctx);

	flexcollapsible = new FlexCollapsible({
			props: {
				id: "right-sidebar",
				width: "20vw",
				position: "left",
				$$slots: { default: [create_default_slot] },
				$$scope: { ctx }
			}
		});

	return {
		c() {
			div = element("div");
			create_component(rollviewer.$$.fragment);
			t0 = space();
			if (if_block) if_block.c();
			t1 = space();
			create_component(flexcollapsible.$$.fragment);
			attr(div, "id", "roll");
			attr(div, "class", "svelte-54l61l");
		},
		m(target, anchor) {
			insert(target, div, anchor);
			mount_component(rollviewer, div, null);
			append(div, t0);
			if (if_block) if_block.m(div, null);
			insert(target, t1, anchor);
			mount_component(flexcollapsible, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const rollviewer_changes = {};
			if (dirty[0] & /*currentRoll*/ 1) rollviewer_changes.imageUrl = /*currentRoll*/ ctx[0].image_url;
			if (dirty[0] & /*holesByTickInterval*/ 4) rollviewer_changes.holesByTickInterval = /*holesByTickInterval*/ ctx[2];
			rollviewer.$set(rollviewer_changes);

			if (/*$showKeyboard*/ ctx[6] && /*$overlayKeyboard*/ ctx[7]) {
				if (if_block) {
					if_block.p(ctx, dirty);

					if (dirty[0] & /*$showKeyboard, $overlayKeyboard*/ 192) {
						transition_in(if_block, 1);
					}
				} else {
					if_block = create_if_block_4(ctx);
					if_block.c();
					transition_in(if_block, 1);
					if_block.m(div, null);
				}
			} else if (if_block) {
				group_outros();

				transition_out(if_block, 1, 1, () => {
					if_block = null;
				});

				check_outros();
			}

			const flexcollapsible_changes = {};

			if (dirty[1] & /*$$scope*/ 2) {
				flexcollapsible_changes.$$scope = { dirty, ctx };
			}

			flexcollapsible.$set(flexcollapsible_changes);
		},
		i(local) {
			if (current) return;
			transition_in(rollviewer.$$.fragment, local);
			transition_in(if_block);
			transition_in(flexcollapsible.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(rollviewer.$$.fragment, local);
			transition_out(if_block);
			transition_out(flexcollapsible.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(div);
			destroy_component(rollviewer);
			if (if_block) if_block.d();
			if (detaching) detach(t1);
			destroy_component(flexcollapsible, detaching);
		}
	};
}

// (268:8) {#if $showKeyboard && $overlayKeyboard}
function create_if_block_4(ctx) {
	let div;
	let keyboard;
	let div_transition;
	let current;

	keyboard = new Keyboard({
			props: {
				keyCount: "88",
				activeNotes,
				startNote: /*startNote*/ ctx[4],
				stopNote: /*stopNote*/ ctx[5]
			}
		});

	return {
		c() {
			div = element("div");
			create_component(keyboard.$$.fragment);
			attr(div, "id", "keyboard-overlay");
			attr(div, "class", "svelte-54l61l");
		},
		m(target, anchor) {
			insert(target, div, anchor);
			mount_component(keyboard, div, null);
			current = true;
		},
		p(ctx, dirty) {
			const keyboard_changes = {};
			if (dirty[0] & /*startNote*/ 16) keyboard_changes.startNote = /*startNote*/ ctx[4];
			if (dirty[0] & /*stopNote*/ 32) keyboard_changes.stopNote = /*stopNote*/ ctx[5];
			keyboard.$set(keyboard_changes);
		},
		i(local) {
			if (current) return;
			transition_in(keyboard.$$.fragment, local);

			add_render_callback(() => {
				if (!div_transition) div_transition = create_bidirectional_transition(div, fade, {}, true);
				div_transition.run(1);
			});

			current = true;
		},
		o(local) {
			transition_out(keyboard.$$.fragment, local);
			if (!div_transition) div_transition = create_bidirectional_transition(div, fade, {}, false);
			div_transition.run(0);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(div);
			destroy_component(keyboard);
			if (detaching && div_transition) div_transition.end();
		}
	};
}

// (274:6) <FlexCollapsible id="right-sidebar" width="20vw" position="left">
function create_default_slot(ctx) {
	let tabbedpanel;
	let current;

	tabbedpanel = new TabbedPanel({
			props: {
				playPauseApp: /*playPauseApp*/ ctx[12],
				stopApp: /*stopApp*/ ctx[13],
				skipToPercentage: /*skipToPercentage*/ ctx[11]
			}
		});

	return {
		c() {
			create_component(tabbedpanel.$$.fragment);
		},
		m(target, anchor) {
			mount_component(tabbedpanel, target, anchor);
			current = true;
		},
		p: noop,
		i(local) {
			if (current) return;
			transition_in(tabbedpanel.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(tabbedpanel.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			destroy_component(tabbedpanel, detaching);
		}
	};
}

// (283:27) 
function create_if_block_2(ctx) {
	let keyboardcontrols;
	let current;
	keyboardcontrols = new KeyboardControls({ props: { outside: true } });

	return {
		c() {
			create_component(keyboardcontrols.$$.fragment);
		},
		m(target, anchor) {
			mount_component(keyboardcontrols, target, anchor);
			current = true;
		},
		p: noop,
		i(local) {
			if (current) return;
			transition_in(keyboardcontrols.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(keyboardcontrols.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			destroy_component(keyboardcontrols, detaching);
		}
	};
}

// (279:2) {#if $showKeyboard && !$overlayKeyboard}
function create_if_block_1(ctx) {
	let div;
	let keyboard;
	let div_transition;
	let current;

	keyboard = new Keyboard({
			props: {
				keyCount: "88",
				activeNotes,
				startNote: /*startNote*/ ctx[4],
				stopNote: /*stopNote*/ ctx[5]
			}
		});

	return {
		c() {
			div = element("div");
			create_component(keyboard.$$.fragment);
			attr(div, "id", "keyboard-container");
			attr(div, "class", "svelte-54l61l");
		},
		m(target, anchor) {
			insert(target, div, anchor);
			mount_component(keyboard, div, null);
			current = true;
		},
		p(ctx, dirty) {
			const keyboard_changes = {};
			if (dirty[0] & /*startNote*/ 16) keyboard_changes.startNote = /*startNote*/ ctx[4];
			if (dirty[0] & /*stopNote*/ 32) keyboard_changes.stopNote = /*stopNote*/ ctx[5];
			keyboard.$set(keyboard_changes);
		},
		i(local) {
			if (current) return;
			transition_in(keyboard.$$.fragment, local);

			add_render_callback(() => {
				if (!div_transition) div_transition = create_bidirectional_transition(div, /*slide*/ ctx[9], {}, true);
				div_transition.run(1);
			});

			current = true;
		},
		o(local) {
			transition_out(keyboard.$$.fragment, local);
			if (!div_transition) div_transition = create_bidirectional_transition(div, /*slide*/ ctx[9], {}, false);
			div_transition.run(0);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(div);
			destroy_component(keyboard);
			if (detaching && div_transition) div_transition.end();
		}
	};
}

// (286:2) {#if !appReady}
function create_if_block(ctx) {
	let div1;

	return {
		c() {
			div1 = element("div");

			div1.innerHTML = `<div><span></span>  <span></span>  <span></span>  <span></span>  <span></span></div>
      Loading resources...`;

			attr(div1, "id", "loading");
			attr(div1, "class", "svelte-54l61l");
		},
		m(target, anchor) {
			insert(target, div1, anchor);
		},
		d(detaching) {
			if (detaching) detach(div1);
		}
	};
}

function create_fragment(ctx) {
	let div1;
	let div0;
	let flexcollapsible;
	let t0;
	let t1;
	let current_block_type_index;
	let if_block1;
	let t2;
	let t3;
	let sampleplayer;
	let t4;
	let keyboardshortcuts;
	let t5;
	let notification;
	let current;
	let mounted;
	let dispose;

	flexcollapsible = new FlexCollapsible({
			props: {
				id: "left-sidebar",
				width: "20vw",
				$$slots: { default: [create_default_slot_1] },
				$$scope: { ctx }
			}
		});

	let if_block0 = /*appReady*/ ctx[1] && create_if_block_3(ctx);
	const if_block_creators = [create_if_block_1, create_if_block_2];
	const if_blocks = [];

	function select_block_type(ctx, dirty) {
		if (/*$showKeyboard*/ ctx[6] && !/*$overlayKeyboard*/ ctx[7]) return 0;
		if (!/*$showKeyboard*/ ctx[6]) return 1;
		return -1;
	}

	if (~(current_block_type_index = select_block_type(ctx, [-1, -1]))) {
		if_block1 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
	}

	let if_block2 = !/*appReady*/ ctx[1] && create_if_block(ctx);
	let sampleplayer_props = {};
	sampleplayer = new SamplePlayer({ props: sampleplayer_props });
	/*sampleplayer_binding*/ ctx[20](sampleplayer);
	keyboardshortcuts = new KeyboardShortcuts({});
	notification = new Notification({});

	return {
		c() {
			div1 = element("div");
			div0 = element("div");
			create_component(flexcollapsible.$$.fragment);
			t0 = space();
			if (if_block0) if_block0.c();
			t1 = space();
			if (if_block1) if_block1.c();
			t2 = space();
			if (if_block2) if_block2.c();
			t3 = space();
			create_component(sampleplayer.$$.fragment);
			t4 = space();
			create_component(keyboardshortcuts.$$.fragment);
			t5 = space();
			create_component(notification.$$.fragment);
			attr(div0, "class", "svelte-54l61l");
			attr(div1, "id", "app");
			attr(div1, "class", "svelte-54l61l");
		},
		m(target, anchor) {
			insert(target, div1, anchor);
			append(div1, div0);
			mount_component(flexcollapsible, div0, null);
			append(div0, t0);
			if (if_block0) if_block0.m(div0, null);
			append(div1, t1);

			if (~current_block_type_index) {
				if_blocks[current_block_type_index].m(div1, null);
			}

			append(div1, t2);
			if (if_block2) if_block2.m(div1, null);
			insert(target, t3, anchor);
			mount_component(sampleplayer, target, anchor);
			insert(target, t4, anchor);
			mount_component(keyboardshortcuts, target, anchor);
			insert(target, t5, anchor);
			mount_component(notification, target, anchor);
			current = true;

			if (!mounted) {
				dispose = listen(window_1, "popstate", /*popstate_handler*/ ctx[18]);
				mounted = true;
			}
		},
		p(ctx, dirty) {
			const flexcollapsible_changes = {};

			if (dirty[0] & /*holesByTickInterval, appReady, currentRoll*/ 7 | dirty[1] & /*$$scope*/ 2) {
				flexcollapsible_changes.$$scope = { dirty, ctx };
			}

			flexcollapsible.$set(flexcollapsible_changes);

			if (/*appReady*/ ctx[1]) {
				if (if_block0) {
					if_block0.p(ctx, dirty);

					if (dirty[0] & /*appReady*/ 2) {
						transition_in(if_block0, 1);
					}
				} else {
					if_block0 = create_if_block_3(ctx);
					if_block0.c();
					transition_in(if_block0, 1);
					if_block0.m(div0, null);
				}
			} else if (if_block0) {
				group_outros();

				transition_out(if_block0, 1, 1, () => {
					if_block0 = null;
				});

				check_outros();
			}

			let previous_block_index = current_block_type_index;
			current_block_type_index = select_block_type(ctx, dirty);

			if (current_block_type_index === previous_block_index) {
				if (~current_block_type_index) {
					if_blocks[current_block_type_index].p(ctx, dirty);
				}
			} else {
				if (if_block1) {
					group_outros();

					transition_out(if_blocks[previous_block_index], 1, 1, () => {
						if_blocks[previous_block_index] = null;
					});

					check_outros();
				}

				if (~current_block_type_index) {
					if_block1 = if_blocks[current_block_type_index];

					if (!if_block1) {
						if_block1 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
						if_block1.c();
					} else {
						if_block1.p(ctx, dirty);
					}

					transition_in(if_block1, 1);
					if_block1.m(div1, t2);
				} else {
					if_block1 = null;
				}
			}

			if (!/*appReady*/ ctx[1]) {
				if (if_block2) {
					
				} else {
					if_block2 = create_if_block(ctx);
					if_block2.c();
					if_block2.m(div1, null);
				}
			} else if (if_block2) {
				if_block2.d(1);
				if_block2 = null;
			}

			const sampleplayer_changes = {};
			sampleplayer.$set(sampleplayer_changes);
		},
		i(local) {
			if (current) return;
			transition_in(flexcollapsible.$$.fragment, local);
			transition_in(if_block0);
			transition_in(if_block1);
			transition_in(sampleplayer.$$.fragment, local);
			transition_in(keyboardshortcuts.$$.fragment, local);
			transition_in(notification.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(flexcollapsible.$$.fragment, local);
			transition_out(if_block0);
			transition_out(if_block1);
			transition_out(sampleplayer.$$.fragment, local);
			transition_out(keyboardshortcuts.$$.fragment, local);
			transition_out(notification.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(div1);
			destroy_component(flexcollapsible);
			if (if_block0) if_block0.d();

			if (~current_block_type_index) {
				if_blocks[current_block_type_index].d();
			}

			if (if_block2) if_block2.d();
			if (detaching) detach(t3);
			/*sampleplayer_binding*/ ctx[20](null);
			destroy_component(sampleplayer, detaching);
			if (detaching) detach(t4);
			destroy_component(keyboardshortcuts, detaching);
			if (detaching) detach(t5);
			destroy_component(notification, detaching);
			mounted = false;
			dispose();
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let $rollMetadata;
	let $currentTick;
	let $showKeyboard;
	let $overlayKeyboard;
	component_subscribe($$self, rollMetadata, $$value => $$invalidate(28, $rollMetadata = $$value));
	component_subscribe($$self, currentTick, $$value => $$invalidate(17, $currentTick = $$value));
	component_subscribe($$self, showKeyboard, $$value => $$invalidate(6, $showKeyboard = $$value));
	component_subscribe($$self, overlayKeyboard, $$value => $$invalidate(7, $overlayKeyboard = $$value));
	let appReady = false;
	let mididataReady;
	let metadataReady;
	let currentRoll;
	let previousRoll;
	let holesByTickInterval = new IntervalTree();
	let samplePlayer;
	let midiSamplePlayer;
	let pianoReady;
	let updatePlayer;
	let startNote;
	let stopNote;
	let pausePlayback;
	let startPlayback;
	let resetPlayback;

	const rollListItems = catalog.map(item => ({
		...item,
		_label: `${item.label.match(/^[\d.]+/)} ${item.title} [${item.label.replace(/^[\d.]+\s?/, "")}]`
	}));

	const slide = (node, { delay = 0, duration = 300 }) => {
		const o = parseInt(getComputedStyle(node).height, 10);

		return {
			delay,
			duration,
			css: t => `height: ${quartInOut(t) * o}px`
		};
	};

	const buildHolesIntervalTree = () => {
		const { FIRST_HOLE, holeData } = $rollMetadata;
		const firstHolePx = parseInt(FIRST_HOLE, 10);

		holeData.forEach(hole => {
			const { y: offsetY, h: height } = hole;
			const tickOn = offsetY - firstHolePx;
			const tickOff = offsetY + height - firstHolePx;
			holesByTickInterval.insert(tickOn, tickOff, hole);
		});
	};

	const skipToTick = tick => {
		if (tick < 0) pausePlayback();
		set_store_value(currentTick, $currentTick = tick, $currentTick);
		activeNotes.reset();
		updatePlayer(() => midiSamplePlayer.skipToTick($currentTick));
	};

	const skipToPercentage = percentage => skipToTick(midiSamplePlayer.totalTicks * percentage);

	const playPauseApp = () => {
		if (midiSamplePlayer.isPlaying()) {
			pausePlayback();
		} else {
			startPlayback();
		}
	};

	const stopApp = () => {
		pausePlayback();
		resetPlayback();
	};

	const resetApp = () => {
		mididataReady = false;
		$$invalidate(1, appReady = false);
		pausePlayback();
		resetPlayback();
		playbackProgress.reset();
		tempoCoefficient.reset();
		bassVolumeCoefficient.reset();
		trebleVolumeCoefficient.reset();
		$$invalidate(2, holesByTickInterval = new IntervalTree());
	};

	const loadRoll = roll => {
		mididataReady = fetch(`./assets/midi/${roll.druid}.mid`).then(mididataResponse => {
			if (mididataResponse.status === 200) return mididataResponse.arrayBuffer();
			throw new Error("Error fetching MIDI file! (Operation cancelled)");
		}).then(mididataArrayBuffer => {
			resetApp();
			midiSamplePlayer.loadArrayBuffer(mididataArrayBuffer);
		}).catch(err => {
			notify({
				title: "Error!",
				message: err,
				type: "error"
			});

			$$invalidate(0, currentRoll = previousRoll);
		});

		metadataReady = fetch(`./assets/json/${roll.druid}.json`).then(metadataResponse => {
			if (metadataResponse.status === 200) return metadataResponse.json();
			throw new Error("Error fetching metadata file! (Operation cancelled)");
		}).catch(err => {
			notify({
				title: "Error!",
				message: err,
				type: "error"
			});

			$$invalidate(0, currentRoll = previousRoll);
		});

		Promise.all([mididataReady, metadataReady, pianoReady]).then(([,metadataJson]) => {
			set_store_value(rollMetadata, $rollMetadata = { ...$rollMetadata, ...metadataJson }, $rollMetadata);
			if (metadataJson.holeData) buildHolesIntervalTree(metadataJson.holeData);
			$$invalidate(1, appReady = true);
			$$invalidate(15, previousRoll = currentRoll);
			const params = new URLSearchParams(window.location.search);

			if (params.has("druid") && params.get("druid") !== currentRoll.druid) {
				const url = new URL(window.location);
				url.searchParams.set("druid", currentRoll.druid);
				window.history.pushState({ roll: currentRoll }, "", url);
			}
		});
	};

	const setCurrentRollFromUrl = () => {
		const params = new URLSearchParams(window.location.search);

		if (params.has("druid")) {
			const druid = params.get("druid");
			const roll = rollListItems.find(r => r.druid === druid);

			if (roll !== undefined) {
				$$invalidate(0, currentRoll = roll);
			} else {
				notify({
					title: "DRUID not found!",
					message: "Please check the specified DRUID, or <a href='/'>click here to continue</a>.",
					type: "error",
					closable: false
				});
			}
		} else {
			$$invalidate(0, currentRoll = rollListItems[Math.floor(Math.random() * rollListItems.length)]);
		}
	};

	onMount(async () => {
		$$invalidate(16, { midiSamplePlayer, pianoReady, updatePlayer, startNote, stopNote, pausePlayback, startPlayback, resetPlayback } = samplePlayer, midiSamplePlayer, $$invalidate(4, startNote), $$invalidate(5, stopNote));
		setCurrentRollFromUrl();
	});

	const popstate_handler = ({ state }) => (state?.roll)
	? $$invalidate(0, currentRoll = state.roll)
	: setCurrentRollFromUrl();

	function rollselector_currentRoll_binding(value) {
		currentRoll = value;
		$$invalidate(0, currentRoll);
	}

	function sampleplayer_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			samplePlayer = $$value;
			$$invalidate(3, samplePlayer);
		});
	}

	$$self.$$.update = () => {
		if ($$self.$$.dirty[0] & /*currentRoll, previousRoll*/ 32769) {
			$: if (currentRoll !== previousRoll) loadRoll(currentRoll);
		}

		if ($$self.$$.dirty[0] & /*$currentTick, midiSamplePlayer*/ 196608) {
			$: playbackProgress.update(() => clamp($currentTick / midiSamplePlayer?.totalTicks, 0, 1));
		}
	};

	return [
		currentRoll,
		appReady,
		holesByTickInterval,
		samplePlayer,
		startNote,
		stopNote,
		$showKeyboard,
		$overlayKeyboard,
		rollListItems,
		slide,
		skipToTick,
		skipToPercentage,
		playPauseApp,
		stopApp,
		setCurrentRollFromUrl,
		previousRoll,
		midiSamplePlayer,
		$currentTick,
		popstate_handler,
		rollselector_currentRoll_binding,
		sampleplayer_binding
	];
}

class App extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, {}, [-1, -1]);
	}
}

export default App;