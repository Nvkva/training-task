import { ReactNode } from 'react';
import { ButtonTag, ButtonType, ButtonVariant } from './types';
import styles from './Button.module.scss';
import { Anchor } from '../Anchor/Anchor';
import clsx from 'clsx';
import { Icon } from '@/ui';

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

function withTag(defaultTag: ButtonTag = 'button') {
	return function Button({
		type = ButtonType.Button,
		variant = ButtonVariant.Primary,
		disabled = false,
		waiting = false,
		onClick,
		className,
		children,
		href,
		Tag = defaultTag,
	}: ButtonProps) {
		const TagElement = Tag === 'a' ? Anchor : Tag;

		return (
			<TagElement
				type={Tag === 'button' ? type : undefined}
				href={Tag === 'a' ? href : undefined}
				className={clsx(styles.button, styles[variant], className, {
					[styles.disabled]: disabled,
					[styles.waiting]: waiting,
				})}
				onClick={onClick}
				disabled={disabled}
			>
				{waiting && <Icon name="loader" />}
				{children}
			</TagElement>
		);
	};
}

export const Button = withTag();

export const ButtonLink = withTag('a');
