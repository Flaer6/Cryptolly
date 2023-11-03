import Menu from '../../componets/header/Navigation'
import styles from '../../assets/style/header.module.css'

export default function Header() {
	return (
		<header className={styles.header}>
			<div className="container">
				<div className={styles.inner}>
					<img src="logo.svg" alt="Cryptolly" className="logo" />
					<Menu></Menu>
				</div>
			</div>
		</header>
	)
}
