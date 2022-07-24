import Head from 'next/head'
import styles from '../styles/contacts.module.css'
import { ListContacts } from '../components/itemList'
import { useState, useEffect } from 'react';

export default function Contacts() {
	const [lenguageID, setlenguageID] = useState(0);
	const text = [
		{
			lenguage: "EN",
			title: "Contacts",
		},
		{
			lenguage: "IT",
			title: "Contacts",
		}
	]

	const contactsList = [
		{
			name: "GitHub",
			username: "Zano_TN",
			link: "https://github.com/ZanoTN",
			icon: "/icon/social/github-dark.svg"
		},
		{
			name: "Gmail",
			username: "riccardo.zanotelli",
			link: "mailto:riccardo.zanotelli@gmail.com",
			icon: "/icon/social/gmail.svg"
		},
		{
			name: "Facebook",
			username: "Riccardo Zanotelli",
			link: "https://www.facebook.com/riccardo.zanotelli/",
			icon: "/icon/social/facebook.svg"
		},
		{
			name: "Instagram",
			username: "riccardo_zanotelli",
			link: "https://www.instagram.com/riccardo_zanotelli/",
			icon: "/icon/social/instagram.svg"
		},
		{
			name: "Twitter",
			username: "ZanoTN",
			link: "https://twitter.com/ZanoTN",
			icon: "/icon/social/twitter.svg"
		},
		{
			name: "Youtube",
			username: "Zano_TN",
			link: "https://www.youtube.com/channel/UC1uT2-2K9tzKm4ZjgbkiHSA",
			icon: "/icon/social/youtube.svg"
		},
		{
			name: "Twitch",
			username: "Zano_TN",
			link: "https://www.twitch.tv/zano_tn",
			icon: "/icon/social/twitch.svg"
		},
		{
			name: "Discord",
			username: "Zano_TN",
			link: "https://discordapp.com/users/Zano_TN#7569",
			icon: "/icon/social/discord.svg"
		}
	]

	useEffect(() => {
	})

	return (
		<div className={styles.container}>
			<Head>
				<title>Zano_TN - Contacts</title>
				<meta name="description" content="Website of Zano_TN" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className={styles.main}>
				<p className={styles.title}>
					<mark className={styles.titleMark}>{text[lenguageID].title}</mark>
				</p>
				<div id="contacts-list" className={styles.listContainer}>
					<ListContacts obj={contactsList} />
				</div>
			</main>
		</div>
	)
}