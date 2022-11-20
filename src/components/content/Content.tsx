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
	const [filterVal, setFilterVal] = useState("");
	const [currentBalance, setCurrentBalance] = useState<number>(0);

	useEffect(() => {
		fetch(API_URL)
			.then((response) => response.json())
			.then((data) => {
				setTransactionDetails(data);
				setCurrentBalance(
					data.reduce(
						(sum: number, obj: TransactionDetails) => (sum = +obj.amount)
					)
				);
				setFetchingData(false);
			});
	}, []);
	console.log(typeof currentBalance);
	return (
		<main>
			<div className={styles.container}>
				<div className={styles.top}>
					<div className={styles["top-left"]}>
						<Balance currentBalance={currentBalance}/>
						<Filter filterVal={filterVal} setFilterVal={setFilterVal} />
					</div>
					<div className={styles["top-right"]}>
						<SendTransaction />
					</div>
				</div>
				{fetchingData ? null : (
					<TransactionHistory
						transactionDetails={transactionDetails}
						filterVal={filterVal}
					/>
				)}
			</div>
		</main>
	);
};

export default Content;
