import React, { useEffect, useState } from "react";
import Balance from "./balance/Balance";
import styles from "./Content.module.css";
import Filter from "./filter/Filter";
import SendTransaction from "./sendtransaction/SendTransaction";
import TransactionHistory from "./transactionshistory/TransactionHistory";

export interface TransactionDetails {
	id: number;
	amount: number;
	beneficiary: string;
	account: string;
	address: string;
	date: string;
	description: string;
}

const API_URL = "http://localhost:3001/transactions";

const Content = () => {
	const [transactionDetails, setTransactionDetails] = useState<
		TransactionDetails[]
	>([]);
	const [fetchingData, setFetchingData] = useState<boolean>(true);

	useEffect(() => {
		fetch(API_URL)
			.then((response) => response.json())
			.then((data) => {
				setTransactionDetails(data);
				setFetchingData(false);
			});
	}, []);

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
				{fetchingData ? null : (
					<TransactionHistory transactionDetails={transactionDetails} />
				)}
			</div>
		</main>
	);
};

export default Content;
