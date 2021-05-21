import './PlaybackSettings.svelte.css.proxy.js';
/* src/components/PlaybackSettings.svelte generated by Svelte v3.29.4 */
import {
	SvelteComponent,
	add_flush_callback,
	append,
	attr,
	bind,
	binding_callbacks,
	component_subscribe,
	create_component,
	destroy_component,
	detach,
	element,
	init,
	insert,
	mount_component,
	safe_not_equal,
	set_data,
	space,
	text,
	transition_in,
	transition_out
} from "../_snowpack/pkg/svelte/internal.js";

import {
	volume,
	bassVolume,
	trebleVolume,
	tempoControl,
	playbackProgress
} from "../stores.js";

import RangeSlider from "../ui-components/RangeSlider.svelte.js";

function create_fragment(ctx) {
	let div5;
	let div0;
	let span0;
	let t5;
	let span1;
	let t6;
	let t7;
	let rangeslider0;
	let updating_value;
	let t8;
	let div1;
	let span2;
	let t10;
	let span3;
	let t11;
	let t12;
	let rangeslider1;
	let updating_value_1;
	let t13;
	let div2;
	let span4;
	let t15;
	let span5;
	let t16;
	let t17;
	let rangeslider2;
	let updating_value_2;
	let t18;
	let div3;
	let span6;
	let t24;
	let span7;
	let t25_value = (/*$tempoControl*/ ctx[4] * 100).toFixed(0) + "";
	let t25;
	let t26;
	let t27;
	let rangeslider3;
	let updating_value_3;
	let t28;
	let div4;
	let span8;
	let t30;
	let span9;
	let t31_value = (/*$playbackProgress*/ ctx[5] * 100).toFixed(2) + "";
	let t31;
	let t32;
	let t33;
	let rangeslider4;
	let current;

	function rangeslider0_value_binding(value) {
		/*rangeslider0_value_binding*/ ctx[6].call(null, value);
	}

	let rangeslider0_props = {
		min: "0",
		max: "4",
		step: ".1",
		name: "volume"
	};

	if (/*$volume*/ ctx[1] !== void 0) {
		rangeslider0_props.value = /*$volume*/ ctx[1];
	}

	rangeslider0 = new RangeSlider({ props: rangeslider0_props });
	binding_callbacks.push(() => bind(rangeslider0, "value", rangeslider0_value_binding));

	function rangeslider1_value_binding(value) {
		/*rangeslider1_value_binding*/ ctx[7].call(null, value);
	}

	let rangeslider1_props = {
		min: "0",
		max: "4",
		step: ".1",
		name: "bassVolume"
	};

	if (/*$bassVolume*/ ctx[2] !== void 0) {
		rangeslider1_props.value = /*$bassVolume*/ ctx[2];
	}

	rangeslider1 = new RangeSlider({ props: rangeslider1_props });
	binding_callbacks.push(() => bind(rangeslider1, "value", rangeslider1_value_binding));

	function rangeslider2_value_binding(value) {
		/*rangeslider2_value_binding*/ ctx[8].call(null, value);
	}

	let rangeslider2_props = {
		min: "0",
		max: "4",
		step: ".1",
		name: "trebleVolume"
	};

	if (/*$trebleVolume*/ ctx[3] !== void 0) {
		rangeslider2_props.value = /*$trebleVolume*/ ctx[3];
	}

	rangeslider2 = new RangeSlider({ props: rangeslider2_props });
	binding_callbacks.push(() => bind(rangeslider2, "value", rangeslider2_value_binding));

	function rangeslider3_value_binding(value) {
		/*rangeslider3_value_binding*/ ctx[9].call(null, value);
	}

	let rangeslider3_props = {
		min: "0.1",
		max: "4",
		step: ".001",
		name: "tempo"
	};

	if (/*$tempoControl*/ ctx[4] !== void 0) {
		rangeslider3_props.value = /*$tempoControl*/ ctx[4];
	}

	rangeslider3 = new RangeSlider({ props: rangeslider3_props });
	binding_callbacks.push(() => bind(rangeslider3, "value", rangeslider3_value_binding));

	rangeslider4 = new RangeSlider({
			props: {
				min: "0",
				max: "1",
				step: "0.001",
				value: /*$playbackProgress*/ ctx[5],
				name: "progress",
				mousewheel: false
			}
		});

	rangeslider4.$on("input", /*input_handler*/ ctx[10]);

	return {
		c() {
			div5 = element("div");
			div0 = element("div");
			span0 = element("span");
			span0.innerHTML = `Volume: <kbd class="svelte-1ms9wt8">[</kbd>↓ <kbd class="svelte-1ms9wt8">]</kbd>↑`;
			t5 = space();
			span1 = element("span");
			t6 = text(/*$volume*/ ctx[1]);
			t7 = space();
			create_component(rangeslider0.$$.fragment);
			t8 = space();
			div1 = element("div");
			span2 = element("span");
			span2.textContent = "Bass Volume:";
			t10 = space();
			span3 = element("span");
			t11 = text(/*$bassVolume*/ ctx[2]);
			t12 = space();
			create_component(rangeslider1.$$.fragment);
			t13 = space();
			div2 = element("div");
			span4 = element("span");
			span4.textContent = "Treble Volume:";
			t15 = space();
			span5 = element("span");
			t16 = text(/*$trebleVolume*/ ctx[3]);
			t17 = space();
			create_component(rangeslider2.$$.fragment);
			t18 = space();
			div3 = element("div");
			span6 = element("span");
			span6.innerHTML = `Tempo: <kbd class="svelte-1ms9wt8">w</kbd>↓ <kbd class="svelte-1ms9wt8">e</kbd>↑`;
			t24 = space();
			span7 = element("span");
			t25 = text(t25_value);
			t26 = text("%");
			t27 = space();
			create_component(rangeslider3.$$.fragment);
			t28 = space();
			div4 = element("div");
			span8 = element("span");
			span8.textContent = "Progress:";
			t30 = space();
			span9 = element("span");
			t31 = text(t31_value);
			t32 = text("%");
			t33 = space();
			create_component(rangeslider4.$$.fragment);
			attr(div0, "class", "control svelte-1ms9wt8");
			attr(div1, "class", "control svelte-1ms9wt8");
			attr(div2, "class", "control svelte-1ms9wt8");
			attr(div3, "class", "control svelte-1ms9wt8");
			attr(div4, "class", "control svelte-1ms9wt8");
			attr(div5, "id", "playback-settings");
			attr(div5, "class", "svelte-1ms9wt8");
		},
		m(target, anchor) {
			insert(target, div5, anchor);
			append(div5, div0);
			append(div0, span0);
			append(div0, t5);
			append(div0, span1);
			append(span1, t6);
			append(div0, t7);
			mount_component(rangeslider0, div0, null);
			append(div5, t8);
			append(div5, div1);
			append(div1, span2);
			append(div1, t10);
			append(div1, span3);
			append(span3, t11);
			append(div1, t12);
			mount_component(rangeslider1, div1, null);
			append(div5, t13);
			append(div5, div2);
			append(div2, span4);
			append(div2, t15);
			append(div2, span5);
			append(span5, t16);
			append(div2, t17);
			mount_component(rangeslider2, div2, null);
			append(div5, t18);
			append(div5, div3);
			append(div3, span6);
			append(div3, t24);
			append(div3, span7);
			append(span7, t25);
			append(span7, t26);
			append(div3, t27);
			mount_component(rangeslider3, div3, null);
			append(div5, t28);
			append(div5, div4);
			append(div4, span8);
			append(div4, t30);
			append(div4, span9);
			append(span9, t31);
			append(span9, t32);
			append(div4, t33);
			mount_component(rangeslider4, div4, null);
			current = true;
		},
		p(ctx, [dirty]) {
			if (!current || dirty & /*$volume*/ 2) set_data(t6, /*$volume*/ ctx[1]);
			const rangeslider0_changes = {};

			if (!updating_value && dirty & /*$volume*/ 2) {
				updating_value = true;
				rangeslider0_changes.value = /*$volume*/ ctx[1];
				add_flush_callback(() => updating_value = false);
			}

			rangeslider0.$set(rangeslider0_changes);
			if (!current || dirty & /*$bassVolume*/ 4) set_data(t11, /*$bassVolume*/ ctx[2]);
			const rangeslider1_changes = {};

			if (!updating_value_1 && dirty & /*$bassVolume*/ 4) {
				updating_value_1 = true;
				rangeslider1_changes.value = /*$bassVolume*/ ctx[2];
				add_flush_callback(() => updating_value_1 = false);
			}

			rangeslider1.$set(rangeslider1_changes);
			if (!current || dirty & /*$trebleVolume*/ 8) set_data(t16, /*$trebleVolume*/ ctx[3]);
			const rangeslider2_changes = {};

			if (!updating_value_2 && dirty & /*$trebleVolume*/ 8) {
				updating_value_2 = true;
				rangeslider2_changes.value = /*$trebleVolume*/ ctx[3];
				add_flush_callback(() => updating_value_2 = false);
			}

			rangeslider2.$set(rangeslider2_changes);
			if ((!current || dirty & /*$tempoControl*/ 16) && t25_value !== (t25_value = (/*$tempoControl*/ ctx[4] * 100).toFixed(0) + "")) set_data(t25, t25_value);
			const rangeslider3_changes = {};

			if (!updating_value_3 && dirty & /*$tempoControl*/ 16) {
				updating_value_3 = true;
				rangeslider3_changes.value = /*$tempoControl*/ ctx[4];
				add_flush_callback(() => updating_value_3 = false);
			}

			rangeslider3.$set(rangeslider3_changes);
			if ((!current || dirty & /*$playbackProgress*/ 32) && t31_value !== (t31_value = (/*$playbackProgress*/ ctx[5] * 100).toFixed(2) + "")) set_data(t31, t31_value);
			const rangeslider4_changes = {};
			if (dirty & /*$playbackProgress*/ 32) rangeslider4_changes.value = /*$playbackProgress*/ ctx[5];
			rangeslider4.$set(rangeslider4_changes);
		},
		i(local) {
			if (current) return;
			transition_in(rangeslider0.$$.fragment, local);
			transition_in(rangeslider1.$$.fragment, local);
			transition_in(rangeslider2.$$.fragment, local);
			transition_in(rangeslider3.$$.fragment, local);
			transition_in(rangeslider4.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(rangeslider0.$$.fragment, local);
			transition_out(rangeslider1.$$.fragment, local);
			transition_out(rangeslider2.$$.fragment, local);
			transition_out(rangeslider3.$$.fragment, local);
			transition_out(rangeslider4.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(div5);
			destroy_component(rangeslider0);
			destroy_component(rangeslider1);
			destroy_component(rangeslider2);
			destroy_component(rangeslider3);
			destroy_component(rangeslider4);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let $volume;
	let $bassVolume;
	let $trebleVolume;
	let $tempoControl;
	let $playbackProgress;
	component_subscribe($$self, volume, $$value => $$invalidate(1, $volume = $$value));
	component_subscribe($$self, bassVolume, $$value => $$invalidate(2, $bassVolume = $$value));
	component_subscribe($$self, trebleVolume, $$value => $$invalidate(3, $trebleVolume = $$value));
	component_subscribe($$self, tempoControl, $$value => $$invalidate(4, $tempoControl = $$value));
	component_subscribe($$self, playbackProgress, $$value => $$invalidate(5, $playbackProgress = $$value));
	let { skipToPercentage } = $$props;

	function rangeslider0_value_binding(value) {
		$volume = value;
		volume.set($volume);
	}

	function rangeslider1_value_binding(value) {
		$bassVolume = value;
		bassVolume.set($bassVolume);
	}

	function rangeslider2_value_binding(value) {
		$trebleVolume = value;
		trebleVolume.set($trebleVolume);
	}

	function rangeslider3_value_binding(value) {
		$tempoControl = value;
		tempoControl.set($tempoControl);
	}

	const input_handler = ({ target: { value } }) => skipToPercentage(value);

	$$self.$$set = $$props => {
		if ("skipToPercentage" in $$props) $$invalidate(0, skipToPercentage = $$props.skipToPercentage);
	};

	return [
		skipToPercentage,
		$volume,
		$bassVolume,
		$trebleVolume,
		$tempoControl,
		$playbackProgress,
		rangeslider0_value_binding,
		rangeslider1_value_binding,
		rangeslider2_value_binding,
		rangeslider3_value_binding,
		input_handler
	];
}

class PlaybackSettings extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, { skipToPercentage: 0 });
	}
}

export default PlaybackSettings;