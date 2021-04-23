import './Keyboard.svelte.css.proxy.js';
/* src/components/Keyboard.svelte generated by Svelte v3.29.4 */
import {
	SvelteComponent,
	append,
	attr,
	destroy_each,
	detach,
	element,
	init,
	insert,
	noop,
	safe_not_equal,
	space,
	subscribe
} from "../_snowpack/pkg/svelte/internal.js";

function get_each_context_1(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[10] = list[i];
	return child_ctx;
}

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[7] = list[i];
	return child_ctx;
}

// (152:8) {#each key as _key}
function create_each_block_1(ctx) {
	let span;
	let span_title_value;
	let span_data_key_value;

	return {
		c() {
			span = element("span");
			attr(span, "title", span_title_value = /*_key*/ ctx[10].title);
			attr(span, "data-key", span_data_key_value = /*_key*/ ctx[10]["data-key"]);
			attr(span, "class", "svelte-1ped2ed");
		},
		m(target, anchor) {
			insert(target, span, anchor);
		},
		p: noop,
		d(detaching) {
			if (detaching) detach(span);
		}
	};
}

// (150:4) {#each keys as key}
function create_each_block(ctx) {
	let div;
	let t;
	let each_value_1 = /*key*/ ctx[7];
	let each_blocks = [];

	for (let i = 0; i < each_value_1.length; i += 1) {
		each_blocks[i] = create_each_block_1(get_each_context_1(ctx, each_value_1, i));
	}

	return {
		c() {
			div = element("div");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			t = space();
			attr(div, "class", "svelte-1ped2ed");
		},
		m(target, anchor) {
			insert(target, div, anchor);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(div, null);
			}

			append(div, t);
		},
		p(ctx, dirty) {
			if (dirty & /*keys*/ 2) {
				each_value_1 = /*key*/ ctx[7];
				let i;

				for (i = 0; i < each_value_1.length; i += 1) {
					const child_ctx = get_each_context_1(ctx, each_value_1, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block_1(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(div, t);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value_1.length;
			}
		},
		d(detaching) {
			if (detaching) detach(div);
			destroy_each(each_blocks, detaching);
		}
	};
}

function create_fragment(ctx) {
	let div1;
	let div0;
	let each_value = /*keys*/ ctx[1];
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	return {
		c() {
			div1 = element("div");
			div0 = element("div");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			attr(div0, "id", "keys");
			attr(div0, "class", "svelte-1ped2ed");
			attr(div1, "id", "keyboard");
			attr(div1, "class", "svelte-1ped2ed");
		},
		m(target, anchor) {
			insert(target, div1, anchor);
			append(div1, div0);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(div0, null);
			}
		},
		p(ctx, [dirty]) {
			if (dirty & /*keys*/ 2) {
				each_value = /*keys*/ ctx[1];
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(div0, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value.length;
			}
		},
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) detach(div1);
			destroy_each(each_blocks, detaching);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let $activeNotes,
		$$unsubscribe_activeNotes = noop,
		$$subscribe_activeNotes = () => ($$unsubscribe_activeNotes(), $$unsubscribe_activeNotes = subscribe(activeNotes, $$value => $$invalidate(5, $activeNotes = $$value)), activeNotes);

	$$self.$$.on_destroy.push(() => $$unsubscribe_activeNotes());
	let { keyCount = 88 } = $$props;
	let { activeNotes } = $$props;
	$$subscribe_activeNotes();
	const notes = ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"];
	const keys = [];
	let keyNumber = 1;
	let octave = 0;

	while (keyNumber <= keyCount) {
		for (let i = 0; i < notes.length; i += 1) {
			const note = notes[i];
			if (note === "C") octave += 1;
			if (keyNumber > keyCount) break;

			if (note.endsWith("#")) {
				keys[keys.length - 1].push({
					"data-key": keyNumber + 20,
					title: `${note}${octave}`
				});
			} else {
				keys.push([
					{
						"data-key": keyNumber + 20,
						title: `${note}${octave}`
					}
				]);
			}

			keyNumber += 1;
		}
	}

	$$self.$$set = $$props => {
		if ("keyCount" in $$props) $$invalidate(2, keyCount = $$props.keyCount);
		if ("activeNotes" in $$props) $$subscribe_activeNotes($$invalidate(0, activeNotes = $$props.activeNotes));
	};

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*$activeNotes*/ 32) {
			$: {
				document.querySelectorAll(".depressed").forEach(el => el.classList.remove("depressed"));
				$activeNotes.forEach(note => document.querySelector(`[data-key="${note}"]`)?.classList.add("depressed"));
			}
		}
	};

	return [activeNotes, keys, keyCount];
}

class Keyboard extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, { keyCount: 2, activeNotes: 0 });
	}
}

export default Keyboard;