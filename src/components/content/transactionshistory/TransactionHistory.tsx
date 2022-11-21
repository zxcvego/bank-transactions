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

const transactionsOnPage = 20;

const TransactionHistory = ({
	transactionDetails,
	setTransactionDetails,
	filterVal,
	setCurrentBalance,
}: {
	transactionDetails: TransactionDetails[];
	setTransactionDetails: React.Dispatch<
		React.SetStateAction<TransactionDetails[]>
	>;
	filterVal: string;
	setCurrentBalance: React.Dispatch<React.SetStateAction<number>>;
}) => {
	const [startOfRange, setStartOfRange] = useState<number>(0);
	const [endOfRange, setEndOfRange] = useState<number>(transactionsOnPage);

	const filterTransactions = () =>
		transactionDetails.filter((transaction: TransactionDetails) =>
			filterVal !== ""
				? transaction.beneficiary
						.toLowerCase()
						.includes(filterVal.toLowerCase())
				: transaction
		);

	const filteredTransactions = filterTransactions();

	useEffect(() => {
		const updateBalance = () => {
			setCurrentBalance(
				filteredTransactions.reduce((sum, { amount }) => sum + amount, 0)
			);
		};
		updateBalance();
	});

	useEffect(() => {
		setStartOfRange(0);
		setEndOfRange(transactionsOnPage);
	}, [filterVal]);

	const changeRange = (operation: RANGE_OPERATION) => {
		switch (operation) {
			case RANGE_OPERATION.INCREASE:
				setStartOfRange(startOfRange + transactionsOnPage);
				setEndOfRange(endOfRange + transactionsOnPage);
				break;
			case RANGE_OPERATION.DECREASE:
				setStartOfRange(startOfRange - transactionsOnPage);
				setEndOfRange(endOfRange - transactionsOnPage);
				break;
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

	const removeTransaction = (account: string) => {
		const transactionsCopy = [...transactionDetails];
		setTransactionDetails(
			transactionsCopy.filter((transaction) =>
				transaction.account === account ? null : transaction
			)
		);
	};

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
								<SingleTransaction
									{...transaction}
									removeTransaction={removeTransaction}
								/>
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
