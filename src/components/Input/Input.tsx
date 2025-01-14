import styles from './Input.module.scss';
import clsx from 'clsx';
import {
	ChangeEvent,
	forwardRef,
	useEffect,
	useState,
} from 'react';

import { Icon } from '../Icon/Icon';

export interface InputProps {
	className?: string;
	type?: string;
	value?: string;
	onChange?: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
	name?: string;
	placeholder?: string;
	width?: string;
	readOnly?: boolean;
	isClearable?: boolean;
	Tag?: keyof React.JSX.IntrinsicElements;
}

function withType(
  defaultPlaceholder?: string,
	defaultTag?: keyof React.JSX.IntrinsicElements,
	defaultType?: string,
) {
	return forwardRef<HTMLInputElement | HTMLTextAreaElement, InputProps>(function Input(
		{
			value,
			onChange,
			type = defaultType,
			name,
			className,
			placeholder = defaultPlaceholder,
			width,
			readOnly,
			isClearable = true,
			Tag = defaultTag,
		},
	) {
		const [valueInput, setValueInput] = useState(value);

		const onInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
			setValueInput(e.target.value);
			onChange?.(e);
		};

		useEffect(() => {
			setValueInput(value || '');
		}, [value]);

		const handleClearClick = () => {
			setValueInput('');
		};

		return (
			<div className={clsx(styles.container, className)} style={{ width }}>
				{' '}
				{Tag === 'textarea' ? (
					<textarea
						value={valueInput}
						onChange={onInputChange}
						className={clsx(styles['input__field'])}
						name={name}
						placeholder={placeholder}
						readOnly={readOnly}
					/>
				) : (
					<input
						type={type}
						value={valueInput}
						onChange={onInputChange}
						className={clsx(styles['input__field'])}
						name={name}
						placeholder={placeholder}
						readOnly={readOnly}
					/>
				)}
				<div className={styles['input__controls']}>
					{isClearable && (
						<button
							type="button"
							onClick={handleClearClick}
							className={clsx(styles['input__button'], {
								[styles.hidden]: !valueInput,
							})}
						>
							<Icon name={'close'} size={24} color={'#A0ABB5'} />
						</button>
					)}
				</div>
			</div>
		);
	});
}

export const InputText = withType('Введите текст', 'textarea');

export const InputPassword = withType('Пароль', 'input', 'password');

export const InputEmail = withType('Электронная почта', 'input', 'email');