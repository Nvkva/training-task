import { ReactNode } from "react";

export type MenuLink = {
	label: string | ReactNode;
	href: string;
};

export type HeaderProps = {
  className?: string;
	menu: MenuLink[];
	children?: ReactNode;
	isSticky?: boolean;
};
