import Promo from './screens/screen1'
import Privilege from './screens/screen2'
import Platform from './screens/screen3'
import Download from './screens/screen4'
import Start from './screens/screen5'

function Home() {
	return (
		<main className="main">
			<Promo />
			<Privilege />
			<Platform />
			<Download />
			<Start />
		</main>
	)
}

export default Home
