import clsx from 'clsx';
import styles from './Card.module.scss';
import { FunctionComponent, ReactNode } from 'react';

export type CardProps = {
	className?: string;
	children: ReactNode;
};

export const Card: FunctionComponent<CardProps> = ({
	className,
	children,
}: CardProps) => {
	return (
		<div className={clsx(styles.container, className, {})}>{children}</div>
	);
};
	