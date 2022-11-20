import React from "react";
import styles from "./Balance.module.css";

const Balance = () => {
	return (
		<section>
			<div className={styles.balance}>
				<h1>Your balance:</h1>
				<p>999 PLN</p>
			</div>
		</section>
	);
};

export default Balance;
