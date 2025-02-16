// Navigation bar that displays dynamically the data (passed down as prop) from the App.jsx file

import {Link} from "react-router-dom";

import styles from "./NavBar.module.css";

function NavBar ({data})
{
	return (
		<nav className={styles.container}>
			<Link
				to="/"
				className={styles.link}
			>
				Home
			</Link>

			{
				data.map(dataElement => (
					<Link
						key={dataElement.id}
						to={`/content/${dataElement.id}`}
						className={styles.link}
					>
						{dataElement.title}
					</Link>
				))
			}
		</nav>
	);
}

export default NavBar;
