export default function Button(props) {
	return (
		<button
			style={{
				borderRadius: '100px',
				background:
					'linear-gradient(266deg, #246CF9 -0.27%, #1E68F6 -0.26%, #0047D0 98.59%)',
				padding: `${props.padding}`,
				fontSize: `${props.size}`,
				fontWeight: '600',
				fontFamily: 'Sofia Pro',
				color: '#fff',
			}}
		>
			{props.name}
		</button>
	)
}
