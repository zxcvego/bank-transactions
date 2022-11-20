import React, { useEffect, useState } from "react";
import styles from "./TransactionHistory.module.css";
import { TransactionDetails } from "../Content";
import SingleTransaction from "./singletransaction/SingleTransaction";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

enum RANGE_OPERATION {
	INCREASE,
	DECREASE,
}

const transactionsOnPage = 5;

const TransactionHistory = ({
	transactionDetails,
	filterVal,
	setCurrentBalance,
}: {
	transactionDetails: TransactionDetails[];
	filterVal: string;
	setCurrentBalance: React.Dispatch<React.SetStateAction<number>>;
}) => {
	const [startOfRange, setStartOfRange] = useState<number>(0);
	const [endOfRange, setEndOfRange] = useState<number>(5);

	const filterTransactions = () =>
		transactionDetails.filter((transaction: TransactionDetails) =>
			filterVal !== ""
				? transaction.beneficiary
						.toLowerCase()
						.includes(filterVal.toLowerCase())
				: transaction
		);
	const filteredTransactions: TransactionDetails[] = filterTransactions();

	const changeRange = (operation: RANGE_OPERATION) => {
		switch (operation) {
			case RANGE_OPERATION.INCREASE:
				setStartOfRange(startOfRange + 5);
				setEndOfRange(endOfRange + 5);
				break;
			case RANGE_OPERATION.DECREASE:
				setStartOfRange(startOfRange - 5);
				setEndOfRange(endOfRange - 5);
		}
	};

	const showPagination = () => {
		return (
			<>
				{startOfRange !== 0 && filterTransactions().length !== 0 ? (
					<FontAwesomeIcon
						icon={faArrowLeft}
						size="xs"
						onClick={() => changeRange(RANGE_OPERATION.DECREASE)}
					/>
				) : null}

				<p>{page}</p>
				{!(endOfRange + 1 > filterTransactions().length) ? (
					<FontAwesomeIcon
						icon={faArrowRight}
						size="xs"
						onClick={() => changeRange(RANGE_OPERATION.INCREASE)}
					/>
				) : null}
			</>
		);
	};

	useEffect(() => {
		const updateBalance = () => {
			let newBalance = 0;
			const copyOfTransactions = [...filteredTransactions];
			copyOfTransactions.forEach(
				(transaction: TransactionDetails) =>
					(newBalance = newBalance + transaction.amount)
			);
			setCurrentBalance(newBalance);
		};
		updateBalance();
	});

	const page =
		filterTransactions().length !== 0 ? endOfRange / transactionsOnPage : null;

	return (
		<section>
			<div className={styles.transactions}>
				<h1>Recent transactions</h1>
				<ul>
					{filteredTransactions
						.map((transaction: TransactionDetails) => (
							<li key={transaction.id}>
								<SingleTransaction {...transaction} />
							</li>
						))
						.slice(startOfRange, endOfRange)}
				</ul>
				<div className={styles.pagination}>{showPagination()}</div>
			</div>
		</section>
	);
};

export default TransactionHistory;
