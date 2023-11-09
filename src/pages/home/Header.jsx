import { useState } from 'react'
import Menu from '../../componets/header/Navigation'
import styles from '../../assets/style/header.module.css'
import MobileMenu from '../../componets/header/navigationMobile'

export default function Header() {
	const [translate, setTranslate] = useState('translateY(-100%)')
	const menuOpen = () => {
		if (translate == 'translateY(0)') {
			setTranslate('translateY(-100%)')
		} else {
			setTranslate('translateY(0)')
		}
	}
	return (
		<header className={styles.header}>
			<div className="wrapper">
				<div className="container">
					<div className={styles.inner}>
						<img src="logo.svg" alt="Cryptolly" className="logo" />
						<a href="#" className={styles.btn} id="btn" onClick={menuOpen}>
							<img src="menu.svg" alt="Menu" />
						</a>
						<Menu />
						<MobileMenu translate={translate} />
					</div>
				</div>
			</div>
		</header>
	)
}
