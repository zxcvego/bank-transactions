import React from "react";
import styles from "./FormInput.module.css";

const FormInput = ({
	name,
	maxLength,
}: {
	name: string;
	maxLength: number;
}) => {
	return (
		<div className={styles.field}>
			<label>{`${name}:`}</label>
			<input type="text" placeholder={name} maxLength={maxLength} required />
		</div>
	);
};

export default FormInput;
