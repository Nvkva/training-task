import clsx from 'clsx';
import styles from './Footer.module.scss';
import { Menu } from '@/components/Menu/Menu';

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

export function Footer({
	className,
	columns,
	copyright,
	sponsors,
	socialLinks,
}: FooterProps) {
	return (
		<footer className={clsx(styles.footer, className)} data-testid="Footer">
			<div className={styles.container}>
				<nav className={clsx(styles.sectionColumns, className)}>
					{columns.map((column, index) => (
						<div key={index} className={clsx(styles.column, className)}>
							<span className={clsx(styles.columnTitle, className)}>
								{column.columnTitle}
							</span>
							<Menu links={column.links} />
						</div>
					))}
				</nav>

				<div className={clsx(styles.partners, className)}>
					{sponsors && (
						<section className={styles.sponsors}>
							<Menu
								links={sponsors.map((sponsor) => ({
									url: sponsor.url,
									linkIcon: sponsor.logo,
								}))}
							></Menu>
						</section>
					)}

					{socialLinks && (
						<section className={clsx(styles.social, className)}>
								<Menu
								links={socialLinks.map((social) => ({
									url: social.url,
									linkIcon: social.icon,
									linkTitle: social.name,
								}))}
							></Menu>
						</section>
					)}
				</div>

				{copyright && (
					<div className={clsx(styles.copyright, className)}>
						<p>{copyright}</p>
					</div>
				)}
			</div>
		</footer>
	);
}
