import clsx from 'clsx';
import { Anchor } from '../Anchor/Anchor';
import styles from './Menu.module.scss';
import { ReactNode } from 'react';

export type Link = {
	url: string;
	linkTitle?: string | ReactNode;
	linkIcon?: string | ReactNode;
}

export type MenuProps = {
	links: Link[];
	className?: string;
};

export const Menu = ({ links, className }: MenuProps) => {
	return (
		<ul className={clsx(styles.sectionLinks, className)}>
			{links.map((link, index) => (
				<li key={index} className={clsx(styles.linkItem, className)}>
					<Anchor href={link.url} className={clsx(styles.link, className)}>
						{link.linkIcon}
						<span>{link.linkTitle}</span>
					</Anchor>
				</li>
			))}
		</ul>
	);
};
