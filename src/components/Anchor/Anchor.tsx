import { AnchorHTMLAttributes, MouseEvent } from 'react';

export type Link = string | ((event: MouseEvent<HTMLAnchorElement>) => void);

export type AnchorProps = Omit<
	AnchorHTMLAttributes<HTMLAnchorElement>,
	'link'
> & {
	link?: Link;
};
