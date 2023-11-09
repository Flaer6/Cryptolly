import styles from '../../../assets/style/screen4.module.css'
import Button from '../../../componets/buttons/downloadButton'

export default function Download() {
	return (
		<section className={styles.download}>
			<div className="container">
				<div className={styles.inner}>
					<div className={styles.img}>
						<img src="phone.svg" alt="Phone" />
					</div>
					<div className={styles.content}>
						<h2 className={styles.title}>
							Build your crypto portfolio anywhere.
						</h2>
						<p className={styles.info}>
							A powerful cryptocurrency exchange in your pocket. Buy, sell and
							trade crypto on the go.
						</p>
						<strong className={styles.text}>
							Get the Cryptolly Wallet Mobile App Now!
						</strong>
						<div className={styles.box}>
							<Button
								src="googlePlay.svg"
								title="GET IT ON"
								platform="Google Play"
							/>
							<Button
								src="appStore.svg"
								title="Download on the"
								platform="Download on the"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
