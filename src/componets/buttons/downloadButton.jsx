export default ({ src, title, platform }) => {
	return (
		<a
			href="#"
			style={{
				padding: '16px 32px',
				borderRadius: '100px',
				border: '1px solid #FFF',
				display: 'inline-flex',
				alignItems: 'center',
				gap: '24px',
			}}
		>
			<img src={src} alt={platform} />
			<span style={{}}>
				<p
					style={{
						color: '#FFF',
						fontFamily: 'Inter',
						fontSize: '12px',
						fontWeight: '400',
						lineHeight: '150%',
					}}
				>
					{title}
				</p>
				<p
					style={{
						color: '#FFF',
						fontFamily: 'Sofia',
						lineHeight: '120%',
					}}
				>
					{platform}
				</p>
			</span>
		</a>
	)
}
