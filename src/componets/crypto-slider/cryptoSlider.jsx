import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import cryptoIdMappings from './crypto.data'
import 'swiper/css/pagination'
import 'swiper/css'
import styles from '../../assets/style/cryptoSlider.module.css'

export default () => {
	const [cryptoData, setCryptoData] = useState({})
	const fetchCryptoData = () => {
		const cryptoIds = Object.keys(cryptoIdMappings)
		const apiUrl = `https://api.coingecko.com/api/v3/simple/price?ids=${cryptoIds.join(
			','
		)}&vs_currencies=usd&include_24hr_change=true`

		axios
			.get(apiUrl)
			.then(response => {
				setCryptoData(response.data)
			})
			.catch(error => {
				console.error('Ошибка при загрузке данных о криптовалютах:', error)
			})
	}

	useEffect(() => {
		fetchCryptoData()
		const intervalId = setInterval(fetchCryptoData, 60000)
		return () => clearInterval(intervalId)
	}, [])

	return (
		<>
			<Swiper
				modules={[Autoplay, Pagination]}
				spaceBetween={24}
				slidesPerView={3.5}
				autoplay={{
					delay: 2500,
					disableOnInteraction: false,
				}}
				pagination={{
					clickable: true,
					dynamicBullets: true,
				}}
				grabCursor={true}
				speed={1000}
				loop={true}
			>
				{Object.entries(cryptoData).map(([cryptoId, data]) => {
					if (cryptoIdMappings[cryptoId]) {
						const abbreviation = cryptoIdMappings[cryptoId]
						const fullName =
							cryptoId.charAt(0).toUpperCase() +
							cryptoId.slice(1).replace(/-/g, ' ')
						const percent = data.usd_24h_change.toFixed(2) > 0
						const stylePercent = {
							color: percent ? '#11CABE' : '#FA2256',
						}
						return (
							<SwiperSlide
								key={cryptoId}
								style={{
									maxWidth: '346px',
								}}
							>
								<div className={styles.slide}>
									<div className={styles.top}>
										<img
											className={styles.icon}
											src={`${cryptoId}.svg`}
											alt={fullName}
										/>
										<p className={styles.percent} style={stylePercent}>
											<img
												src={percent ? 'arrowTop.svg' : 'arrowBot.svg'}
												alt={percent ? 'Arrow Top' : 'Arrow Bottom'}
											/>
											{data.usd_24h_change.toFixed(2)}%
										</p>
									</div>
									<div className={styles.bottom}>
										<div className={styles.price}>
											<p className={styles.fullName}>{fullName}</p>
											<p className={styles.priceItem}>
												USD{' '}
												{data.usd
													.toFixed(2)
													.replace(/\d(?=(\d{3})+\.)/g, '$&,')}
											</p>
										</div>
										<div className={styles.abbreviation}>
											<p>{abbreviation}</p>
										</div>
									</div>
								</div>
							</SwiperSlide>
						)
					}
					return null
				})}
			</Swiper>
		</>
	)
}
