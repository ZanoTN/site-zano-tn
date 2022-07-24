import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Other() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Zano_TN - Info</title>
				<meta name="description" content="Website of Zano_TN" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className={styles.main}>
				hello there
			</main>
		</div>
	)
}