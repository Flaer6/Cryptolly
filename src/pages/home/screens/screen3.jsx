import styles from '../../../assets/style/screen3.module.css'
import Block from '../../../componets/blocks/platformBlock'

export default function Platform() {
	return (
		<section className={styles.platform}>
			<div className="container">
				<div className={styles.inner}>
					<div className={styles.img}>
						<img src="planet.svg" alt="Planet" />
					</div>
					<div className={styles.content}>
						<h2 className={styles.title}>
							We are the most trusted cryptocurrency platform.
						</h2>
						<p className={styles.info}>
							We believe Cryptolly is here to stay — and that a future worth
							building is one which opens its doors and invites everyone in.
						</p>
						<div className={styles.box}>
							<Block
								srcImg="eye.svg"
								altImg="Eye"
								title="Clarity"
								info="We help you make sense of the coins, the terms, the dense charts and market changes."
							/>
							<Block
								srcImg="confidence.svg"
								altImg="Confidence"
								title="Confidence"
								info="Our markets are always up to date, sparking curiosity with real-world relevance."
							/>
							<Block
								srcImg="community.svg"
								altImg="Community"
								title="Community"
								info="We supports the crypto community, putting data in the hands which need it most."
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
