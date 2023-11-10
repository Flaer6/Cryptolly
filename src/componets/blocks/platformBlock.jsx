export default ({ srcImg, altImg, title, info }) => {
	return (
		<div
			style={{
				display: 'flex',
				alignItems: 'center',
				gap: '0 32px',
			}}
		>
			<img
				src={srcImg}
				alt={altImg}
				style={{
					display: window.innerWidth <= 400 ? 'none' : 'inline-block',
					width: '100%',
					maxHeight: '111px',
				}}
			/>
			<div>
				<p
					style={{
						color: '#FFF',
						fontFamily: 'Sofia Pro',
						fontSize: '25px',
						fontWeight: '700',
						lineHeight: '120%',
						paddingBottom: '8px',
					}}
				>
					{title}
				</p>
				<p>{info}</p>
			</div>
		</div>
	)
}
