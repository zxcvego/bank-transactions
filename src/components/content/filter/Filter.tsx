import React from "react";
import styles from "./Filter.module.css";

const Filter = ({
	filterVal,
	setFilterVal,
}: {
	filterVal: string;
	setFilterVal: React.Dispatch<React.SetStateAction<string>>;
}) => {
	const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFilterVal(e.target.value);
	};

	return (
		<section>
			<div className={styles.filter}>
				<h1>Search by name</h1>
				<input
					placeholder="John Doe"
					maxLength={20}
					value={filterVal}
					onChange={handleOnChange}
				/>
			</div>
		</section>
	);
};

export default Filter;
