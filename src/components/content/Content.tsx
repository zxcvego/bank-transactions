import React from "react";
import Balance from "./balance/Balance";
import styles from "./Content.module.css";
import Filter from "./filter/Filter";
import SendTransaction from "./sendtransaction/SendTransaction";
import TransactionHistory from "./transactionshistory/TransactionHistory";

const Content = () => {
	return (
		<main>
			<div className={styles.container}>
				<div className={styles.top}>
					<div className={styles["top-left"]}>
						<Balance />
						<Filter />
					</div>
					<div className={styles["top-right"]}>
						<SendTransaction />
					</div>
				</div>
				<TransactionHistory />
			</div>
		</main>
	);
};

export default Content;
