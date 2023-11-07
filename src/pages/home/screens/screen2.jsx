import styles from '../../../assets/style/screen2.module.css'
import Button from '../../../componets/buttons/button'
import Block from '../../../componets/blocks/privilegeBlock'

function Privilege() {
	return (
		<section className={styles.privilege}>
			<div className="container">
				<div className={styles.inner}>
					<div className={styles.left}>
						<Block
							src="manager.svg"
							title="Portfolio Manager"
							info="Buy and sell popular digital currencies, keep track of them in the one place."
						/>
						<Block
							src="secutity.svg"
							title="Vault protection"
							info="For added security, store your funds in a vault with time delayed withdrawals."
						/>
						<Block
							src="mobile.svg"
							title="Mobile Apps"
							info="Stay on top of the markets with the Cryptolly app for Android or iOS."
						/>
					</div>
					<div className={styles.right}>
						<h2 className={styles.title}>
							The most trusted cryptocurrency platform.
						</h2>
						<p className={styles.info}>
							Cryptolly has a variety of features that make it the best place to
							start trading
						</p>
						<Button padding="16px 32px" size="16px" name="Let’s Trade Now" />
					</div>
				</div>
			</div>
		</section>
	)
}

export default Privilege
