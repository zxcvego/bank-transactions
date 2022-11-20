import React from "react";
import styles from "./FormInput.module.css";
import { FormInputI } from "../SendTransaction";
const FormInput = ({ label, type, value, setValue }: FormInputI) => {
	const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) =>
		setValue(e.target.value);

	return (
		<div className={styles.field}>
			<label>{`${label}:`}</label>
			<input
				type={type}
				min={0}
				step={0.01}
				value={value}
				onChange={handleOnChange}
				required
			/>
		</div>
	);
};

export default FormInput;
