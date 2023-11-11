import styles from '../../../assets/style/screen1.module.css'
import Button from '../../../componets/buttons/button'
import Slider from '../../../componets/crypto-slider/cryptoSlider'
export default function Promo() {
	return (
		<section className={styles.promo}>
			<div className="container">
				<div className={styles.wrapper}>
					<div className={styles.inner}>
						<div className={styles.content}>
							<h1 className={styles.title}>
								A trusted and secure cryptocurrency exchange.
							</h1>
							<p className={styles.info}>
								Your guide to the world of an open financial system. Get started
								with the easiest and most secure platform to buy and trade
								cryptocurrency.
							</p>
							<Button
								name="Get Started Now"
								padding="18px 32px"
								size="18px"
							></Button>
						</div>
						<div className={styles.img}>
							<img src="promo.svg" alt="Image not found" />
						</div>
					</div>
				</div>
			</div>
			<Slider></Slider>
		</section>
	)
}
