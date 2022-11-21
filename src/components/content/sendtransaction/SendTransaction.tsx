import React, { useState } from "react";
import styles from "./SendTransaction.module.css";
import FormInput from "./form/FormInput";
import { TransactionDetails } from "../Content";
export interface FormInputI {
	name: string;
	label: string;
	type: string;
	value: string;
	setValue: React.Dispatch<React.SetStateAction<string>>;
}

const SendTransaction = ({
	transactionDetails,
	setTransactionDetails,
}: {
	transactionDetails: TransactionDetails[];
	setTransactionDetails: React.Dispatch<
		React.SetStateAction<TransactionDetails[]>
	>;
}) => {
	const [amountVal, setAmountVal] = useState("");
	const [accountVal, setAccountVal] = useState("");
	const [addressVal, setAddressVal] = useState("");
	const [descriptionVal, setDescriptionVal] = useState("");
	const [isFormValid, setIsFormValid] = useState<null | boolean>(null);

	const inputs = [
		{
			name: "amount",
			label: "Amount",
			type: "number",
			value: amountVal,
			setValue: setAmountVal,
		},
		{
			name: "account",
			label: "Account number",
			type: "text",
			value: accountVal,
			setValue: setAccountVal,
		},
		{
			name: "address",
			label: "Address",
			type: "text",
			value: addressVal,
			setValue: setAddressVal,
		},
		{
			name: "description",
			label: "Description",
			type: "text",
			value: descriptionVal,
			setValue: setDescriptionVal,
		},
	];

	const clearInputs = () => {
		setAmountVal("");
		setAccountVal("");
		setAddressVal("");
		setDescriptionVal("");
	};

	const validateForm = () => {
		if (isNaN(+accountVal)) return false;
		if (Number(amountVal) > 0) if (accountVal !== "") return true;
		return false;
	};

	const addTransaction = () => {
		const transaction: TransactionDetails = {
			id: transactionDetails.length,
			amount: Number(amountVal),
			beneficiary: "-",
			account: accountVal,
			address: addressVal,
			date: String(new Date()),
			description: descriptionVal,
		};
		const copyTransactions = [...transactionDetails];
		copyTransactions.unshift(transaction);
		setTransactionDetails(copyTransactions);
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const isFormValid = validateForm();
		if (!isFormValid) {
			setIsFormValid(false);
			return;
		}

		setIsFormValid(true);
		addTransaction();
		clearInputs();
	};

	const showSuccessAlert = () => {
		return (
			<div className={styles.alert} onClick={() => setIsFormValid(null)}>
				Success
			</div>
		);
	};

	const showFailureAlert = () => {
		return (
			<div className={styles.alert} onClick={() => setIsFormValid(null)}>
				<div>Try again</div>
			</div>
		);
	};

	return (
		<section>
			<div className={styles.form}>
				<h1>Send transaction</h1>
				<form onSubmit={handleSubmit}>
					<div className={styles.inputs}>
						{inputs.map((input, i: number) => (
							<FormInput key={i} {...input} />
						))}
					</div>
					<div className={styles.buttons}>
						<input type="submit" value="CONFIRM" />
						{isFormValid === null
							? null
							: isFormValid
							? showSuccessAlert()
							: showFailureAlert()}

						<input
							type="button"
							value="CLEAR"
							onClick={() => {
								clearInputs();
								setIsFormValid(null);
							}}
						/>
						<p></p>
					</div>
				</form>
			</div>
		</section>
	);
};

export default SendTransaction;
