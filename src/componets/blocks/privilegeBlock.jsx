import styles from '../../assets/style/screen2.module.css'

export default ({ src, title, info }) => {
	return (
		<div className={styles.privilegeBlock}>
			<img src={src} alt="icon" className={styles.icon} />
			<p className={styles.blockTitle}>{title}</p>
			<p className={styles.blockInfo}>{info}</p>
		</div>
	)
}
