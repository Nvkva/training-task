import clsx from 'clsx';
import styles from './Text.module.scss';
import { useTranslation } from 'react-i18next';

const translationKey = [
	'demo.welcomeUser',
	'demo.logIn',
	'demo.logOut',
	'demo.signUp',
	'main.title',
	'main.description',
	'main.applyVolunteer',
	'main.volunteerMotivation',
	'main.applyFund',
	'main.fundMotivation',
] as const;
export type TranslationKey = (typeof translationKey)[number];

export const isTranslationKey = (x: any): x is TranslationKey => translationKey.includes(x);


export type TextProps = {
	className?: string;
	value: TranslationKey | string;
	Tag: keyof React.JSX.IntrinsicElements;
};

function withType(defaultTag: keyof React.JSX.IntrinsicElements) {
	const { t } = useTranslation();
	return function Text({ className, value, Tag = defaultTag }: TextProps) {
		return (
			<Tag className={clsx(styles.container, className)}>
				{isTranslationKey(value) ? t(value) : value}
			</Tag>
		);
	};
}

export const Text = withType('span');

export const Title = withType('h3');
