import React from "react";
import styles from "./Filter.module.css";

const Filter = () => {
	return (
		<section>
			<div className={styles.filter}>
				<h1>Search by name</h1>
				<input placeholder="e.g. John Doe" maxLength={20} />
			</div>
		</section>
	);
};

export default Filter;
