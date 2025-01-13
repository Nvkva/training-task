export interface LinkTo {
	linkTitle: string;
	url: string;
}

export interface Column {
	columnTitle: string;
	links: LinkTo[];
}

export interface Sponsor {
	name: string;
	logo: React.ReactNode;
	url: string;
}

export interface SocialLink {
	icon: React.ReactNode;
	name?: string;
	url: string;
}

export type FooterProps = {
	className?: string;
	columns: Column[];
	copyright?: string;
	sponsors?: Sponsor[];
	socialLinks?: SocialLink[];
};
