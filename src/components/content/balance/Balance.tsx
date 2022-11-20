import React from "react";
import styles from "./Balance.module.css";

const Balance = ({ currentBalance }: { currentBalance: number }) => {
	return (
		<section>
			<div className={styles.balance}>
				<h1>Your balance:</h1>
				<p>{currentBalance.toFixed(2)} PLN</p>
			</div>
		</section>
	);
};

export default Balance;
