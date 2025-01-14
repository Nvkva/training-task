import clsx from "clsx";
import { FunctionComponent, ReactNode } from "react";

export type FieldProps = {
  className?: string;
  children: ReactNode;
};

export const Field: FunctionComponent<FieldProps> = ({
	className,
	children,
}: FieldProps) => {
	return (
		<div className={clsx(className, {})}>{children}</div>
	);
};
