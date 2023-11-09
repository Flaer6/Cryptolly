import styles from '../../../assets/style/screen5.module.css'
import Button from '../../../componets/buttons/button'

export default function Start() {
	return (
		<section className={styles.start}>
			<div className="container">
				<div className={styles.inner}>
					<p className={styles.subtitle}>
						Ready to start trading cryptocurrency?
					</p>
					<h2 className={styles.title}>
						New users can earn up to $80 in crypto rewards.
					</h2>
					<form className={styles.form} action="#">
						<input
							className={styles.input}
							type="email"
							placeholder="Enter your email address"
						/>
						<Button padding="16px 32px" size="16px" name="Get Started" />
					</form>
				</div>
			</div>
		</section>
	)
}
