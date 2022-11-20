import React from "react";
import styles from "./SingleTransaction.module.css";
import { TransactionDetails } from "../../Content";

const SingleTransaction = ({
	amount,
	beneficiary,
	account,
	address,
	date,
	description,
}: TransactionDetails) => {
	return <div>{beneficiary}</div>;
};

export default SingleTransaction;
