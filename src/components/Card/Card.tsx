import clsx from 'clsx';
import styles from './Card.module.scss';
import { FunctionComponent, ReactNode } from 'react';
import { Anchor } from '../Anchor/Anchor';

export type CardTag = keyof Pick<React.JSX.IntrinsicElements, "a" | "div">;

export type CardProps = {
	className?: string;
	children: ReactNode;
	Tag?: CardTag;
};

export const Card: FunctionComponent<CardProps> = ({
	className,
	children,
	Tag = 'div',
}: CardProps) => {
	const TagElement = (Tag === "a") ? Anchor : Tag;
	return (
		<TagElement className={clsx(styles.container, className, {})}>{children}</TagElement>
	);
};
