import clsx from "clsx";
import { useTranslation } from "react-i18next";

export type TranslationKey =     "demo.welcomeUser"|
    "demo.logIn"|
    "demo.logOut"|
    "demo.signUp"|
    "main.title"|
    "main.description"|
    "main.applyVolunteer"|
    "main.volunteerMotivation"|
    "main.applyFund"|
    "main.fundMotivation";

export type TextProps = {
	className?: string;
	value: TranslationKey;
	Tag: keyof React.JSX.IntrinsicElements;
};
