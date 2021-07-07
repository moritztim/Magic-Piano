import './RollSelector.svelte.css.proxy.js';
/* src/components/RollSelector.svelte generated by Svelte v3.38.3 */
import {
	SvelteComponent,
	add_flush_callback,
	bind,
	binding_callbacks,
	create_component,
	destroy_component,
	init,
	mount_component,
	safe_not_equal,
	transition_in,
	transition_out
} from "../_snowpack/pkg/svelte/internal.js";

import FilteredSelect from "../ui-components/FilteredSelect.svelte.js";
import catalog from "../assets/catalog.json.proxy.js";

function create_fragment(ctx) {
	let filteredselect;
	let updating_selectedItem;
	let current;

	function filteredselect_selectedItem_binding(value) {
		/*filteredselect_selectedItem_binding*/ ctx[2](value);
	}

	let filteredselect_props = {
		items: /*listItems*/ ctx[1],
		labelFieldName: "_label",
		searchFieldName: "_label",
		postMarkup: func
	};

	if (/*currentRoll*/ ctx[0] !== void 0) {
		filteredselect_props.selectedItem = /*currentRoll*/ ctx[0];
	}

	filteredselect = new FilteredSelect({ props: filteredselect_props });
	binding_callbacks.push(() => bind(filteredselect, "selectedItem", filteredselect_selectedItem_binding));

	return {
		c() {
			create_component(filteredselect.$$.fragment);
		},
		m(target, anchor) {
			mount_component(filteredselect, target, anchor);
			current = true;
		},
		p(ctx, [dirty]) {
			const filteredselect_changes = {};

			if (!updating_selectedItem && dirty & /*currentRoll*/ 1) {
				updating_selectedItem = true;
				filteredselect_changes.selectedItem = /*currentRoll*/ ctx[0];
				add_flush_callback(() => updating_selectedItem = false);
			}

			filteredselect.$set(filteredselect_changes);
		},
		i(local) {
			if (current) return;
			transition_in(filteredselect.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(filteredselect.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			destroy_component(filteredselect, detaching);
		}
	};
}

const func = str => str.replace(/^\d+|\[[^\]]+\]$/g, "<small>$&</small>");

function instance($$self, $$props, $$invalidate) {
	const listItems = catalog.map(item => ({
		...item,
		_label: `${item.label.match(/^\d+/)} ${item.title} [${item.label.replace(/^\d*\s?/, "")}]`
	}));

	let { currentRoll = listItems[Math.floor(Math.random() * catalog.length)] } = $$props;

	function filteredselect_selectedItem_binding(value) {
		currentRoll = value;
		$$invalidate(0, currentRoll);
	}

	$$self.$$set = $$props => {
		if ("currentRoll" in $$props) $$invalidate(0, currentRoll = $$props.currentRoll);
	};

	return [currentRoll, listItems, filteredselect_selectedItem_binding];
}

class RollSelector extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, { currentRoll: 0 });
	}
}

export default RollSelector;