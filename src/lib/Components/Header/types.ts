import type { IconKey } from '$lib/iconMap';
import type {
	BooleanField,
	GroupField,
	ImageField,
	KeyTextField,
	LinkField
} from '@prismicio/client';

export type NavItemType = 'link' | 'dropdown';

export type DropdownItem = {
	label: KeyTextField;
	description?: KeyTextField;
	icon?: ImageField;
	link?: LinkField;
};

export type NavItem = {
	key?: KeyTextField;
	item_type?: NavItemType; // Select field
	label?: KeyTextField;
	link?: LinkField; // for item_type='link'
	dropdown_items?: GroupField<DropdownItem>; // for item_type='dropdown',
	icon: IconKey;
};

export interface NavHeader {
	app_name?: KeyTextField;
	logo?: ImageField;
	tagline?: KeyTextField;

	// new unified nav
	nav_items?: GroupField<NavItem>;

	// mobile behavior
	use_same_nav_for_mobile?: BooleanField;
	mobile_nav_items?: GroupField<NavItem>;

	// sign-in
	enable_sign_in?: BooleanField;
	sign_in_label?: KeyTextField;
	sign_in_link?: LinkField;
}
