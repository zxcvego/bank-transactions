import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styles from "./Loading.module.css";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const Loading = () => {
	return (
		<div className={styles.loading}>
			<FontAwesomeIcon className={styles.spinner} icon={faSpinner} size="6x" />
		</div>
	);
};
export default Loading;
