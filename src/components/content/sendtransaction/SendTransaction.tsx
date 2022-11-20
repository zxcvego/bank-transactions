import React from "react";
import styles from "./SendTransaction.module.css";
import FormInput from "./form/FormInput";

const SendTransaction = () => {
	return (
		<section>
			<div className={styles.form}>
				<h1>Send transaction</h1>
				<form>
					<div className={styles.inputs}>
						<div className={styles.row}>
							<FormInput name="Amount" maxLength={20} />
							<FormInput name="Account number" maxLength={20} />
						</div>
						<div className={styles.row}>
							<FormInput name="Address" maxLength={20} />
							<FormInput name="Description" maxLength={20} />
						</div>
					</div>
					<div className={styles.buttons}>
						<input type="button" value="CONFIRM" />
						<input type="button" value="CLEAR" />
					</div>
				</form>
			</div>
		</section>
	);
};

export default SendTransaction;
