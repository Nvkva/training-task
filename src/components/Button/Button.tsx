import { ReactNode } from "react";
import { ButtonTag, ButtonType, ButtonVariant } from "./types";

export type ButtonProps = {
	type?: ButtonType;
	variant?: ButtonVariant;
	disabled?: boolean;
	waiting?: boolean;
	onClick?: () => void;
	className?: string;
	children?: ReactNode;
	href?: string;
	Tag?: ButtonTag;
};