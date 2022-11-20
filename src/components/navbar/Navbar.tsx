import React from "react";
import styles from "./Navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuildingColumns } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
	return (
		<header>
			<div className={styles.navbar}>
				<div className={styles["navbar-logo"]}>
					<FontAwesomeIcon icon={faBuildingColumns} size="4x" />
					<div className={styles["navbar-logo-title"]}>
						<p>Your Bank</p>
						<p>Transactions</p>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Navbar;
