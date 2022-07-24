import Head from 'next/head'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import styles from '../styles/Home.module.css'

export default function Home() {
	const router = useRouter();
	const [lenguageID, setlenguageID] = useState(0);
	const text = [
		{
			lenguage: "EN",
			title: "Hi, I'm Zano_TN",
			description1: "Welcome to my website! My name is Riccardo Zanotelli, I live in Trento (Italy).",
			description2: "I am current study in University of Verona as programmer and a Volunteer Firefighter of V.V.F. Mattarello.",
			buttonContacts: "Contacts",
			buttonMore: "Other"
		},
		{
			lenguage: "IT",
			title: "Ciao, sono Zano_TN",
			description1: "",
			description2: "",
			buttonContacts: "Contatti",
			buttonMore: "Altro"
		}
	]

	useEffect(() => {

	},[]);

	return (
		<div className={styles.container}>
			<Head>
				<title>Zano_TN</title>
				<meta name="description" content="Website of Zano_TN" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className={styles.main}>
				<p className={styles.title}>
					<mark className={styles.titleMark}>{text[lenguageID].title}</mark>
				</p>
				<div className={styles.otherInfo}>
					<p className={styles.descriptionText}>{text[lenguageID].description1}</p>
					<p className={styles.descriptionText}>{text[lenguageID].description2}</p>
					<div className={styles.buttonDiv}>
						<button className={styles.button} onClick={() => router.push("/contacts")}>{text[lenguageID].buttonContacts}</button>
						<button className={styles.button} onClick={() => router.push("/other")}>{text[lenguageID].buttonMore}</button>
					</div>
				</div>
			</main>
		</div>
	)
}
