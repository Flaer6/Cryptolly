import items from './header.data'
import styles from '../../assets/style/header.module.css'

export default function Menu() {
	const listItems = items.map(item => (
		<li className={styles.item}>
			<a key={item.id} href={item.link} className={styles.link}>
				{item.name}
			</a>
		</li>
	))
	return (
		<nav className={styles.menu}>
			<ul className={styles.list}>{listItems}</ul>
			<ul className={styles.buttons}>
				<li className={styles.signUp}>
					<a href="#">Sign In</a>
				</li>
				<li className={styles.getStarted}>
					<a href="#">Get Started</a>
				</li>
			</ul>
		</nav>
	)
}
