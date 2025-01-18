import { FunctionComponent } from "react";
import { AnchorProps } from "./Anchor";

export type LinkTag =
	| keyof Pick<React.JSX.IntrinsicElements, 'a'>
	| FunctionComponent<AnchorProps>;

export type AnchorContextType = {
	LinkElement?: FunctionComponent<AnchorProps>;
	ignoreFn?: (href: string) => boolean;
};

export type AnchorProviderProps = AnchorContextType & {
	children: React.ReactNode;
};

export function AnchorProvider({
	children,
	LinkElement,
	ignoreFn,
}: AnchorProviderProps) {
	return (
		<AnchorContext.Provider value={{ LinkElement, ignoreFn }}>
			{children}
		</AnchorContext.Provider>
	);
}
