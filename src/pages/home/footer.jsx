import styles from '../../assets/style/footer.module.css'
import Button from '../../componets/buttons/button'

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<div className="container">
				<div className={styles.inner}>
					<div className={styles.contacts}>
						<div className={styles.logo}>
							<img src="logo.svg" alt="Cryptolly" />
							<p className={styles.text}>Your best crypto partner.</p>
						</div>
						<ul className={styles.contactList}>
							<li className={styles.contactItem}>
								<a href="#" className={styles.contactLink}>
									<img src="linked.svg" alt="linked" />
								</a>
							</li>
							<li className={styles.contactItem}>
								<a href="#" className={styles.contactLink}>
									<img src="facebook.svg" alt="facebook" />
								</a>
							</li>
							<li className={styles.contactItem}>
								<a href="#" className={styles.contactLink}>
									<img src="instagram.svg" alt="instagram" />
								</a>
							</li>
						</ul>
					</div>
					<ul className={styles.list}>
						<li className={styles.title}>Quick Links.</li>
						<li className={styles.item}>
							<a href="#">Buy/Sell</a>
						</li>
						<li className={styles.item}>
							<a href="#">Trade Now</a>
						</li>
						<li className={styles.item}>
							<a href="#">Pricing</a>
						</li>
					</ul>
					<div className={styles.start}>
						<p className={styles.title}>Submit for updates.</p>
						<p className={styles.info}>
							Subscribe to get update and notify our exchange and products
						</p>
						<form className={styles.form} action="#">
							<input
								className={styles.input}
								type="email"
								placeholder="Enter your email address"
							/>
							<Button padding="16px 32px" size="16px" name="Send" />
						</form>
					</div>
				</div>
				<div className={styles.copyright}>
					<div className={styles.copyText}>
						Cryptolly ©. All rights reserved.
					</div>
					<div className={styles.policy}>
						<a href="#">Term of Service</a>
						<a href="#">Privacy Policy</a>
					</div>
				</div>
			</div>
		</footer>
	)
}
