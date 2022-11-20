import React from "react";
import styles from "./SingleTransaction.module.css";
import { TransactionDetails } from "../../Content";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faArrowTrendUp,
	faArrowTrendDown,
	faTrash,
} from "@fortawesome/free-solid-svg-icons";

const SingleTransaction = ({
	amount,
	beneficiary,
	account,
	address,
	date,
	description,
}: TransactionDetails) => {
	const dateObject = new Date(date);
	const month = Number(dateObject.getMonth()) + 1;
	const year = dateObject.getFullYear();
	const dateToView = `${month}.${year}`;

	const showTrendingArrow = () => {
		return amount > 0 ? (
			<FontAwesomeIcon
				className={`${styles.trend} ${styles["trend-up"]}`}
				icon={faArrowTrendUp}
				size="lg"
			/>
		) : (
			<FontAwesomeIcon
				className={`${styles.trend} ${styles["trend-down"]}`}
				icon={faArrowTrendDown}
				size="lg"
			/>
		);
	};

	return (
		<>
			<div className={styles.row}>
				{showTrendingArrow()}
				<div className={styles.container}></div>
				<div className={styles.left}>
					<div className={styles.top}>
						<p className={styles.name}>{beneficiary}</p>
						<p className={styles.date}>{dateToView}</p>
					</div>
					<p className={styles.information}>{address}</p>
					<p className={styles.information}>{description}</p>
				</div>

				<div className={styles.right}>
					<div className={styles.information}>
						<p>{account}</p>
					</div>

					<div className={styles.amount}>
						<p>{`${amount}`} PLN</p>
						<FontAwesomeIcon icon={faTrash} />
					</div>
				</div>
			</div>
		</>
	);
};

export default SingleTransaction;
