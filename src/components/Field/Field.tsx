import { ChangeEvent, FunctionComponent, ReactNode, useEffect, useState } from 'react';
import styles from './Field.module.scss';
import clsx from 'clsx';

export type FieldProps = {
	className?: string;
	fieldText: string;
	type?: string;
	value?: string;
	onChange?: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
	name?: string;
	placeholder?: string;
	readOnly?: boolean;
};

export const Field: FunctionComponent<FieldProps> = ({
	className,
	fieldText,
	type,
	value,
	onChange,
	name,
	placeholder,
	readOnly,
}: FieldProps) => {

		const [valueInput, setValueInput] = useState(value);
	
			const onInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
				setValueInput(e.target.value);
				onChange?.(e);
			};
	
			useEffect(() => {
				setValueInput(value || '');
			}, [value]);
	
	return (
		<label className={`${styles.label} ${className}`}>
			<span>{fieldText}</span>
			<input
						type={type}
						value={valueInput}
						onChange={onInputChange}
						className={clsx(styles['input__field'])}
						name={name}
						placeholder={placeholder}
						readOnly={readOnly}
					/>
		</label>
	);
};
