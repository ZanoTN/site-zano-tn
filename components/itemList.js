import styles from "../styles/itemList.module.css"
import { useRouter } from 'next/router'

export function ListContacts({obj}) {
	const router = useRouter();

	return (
		<div>
			{ obj.map((item) => {
				return (
					<div key={item.name} href={item.link} className={styles.box} onClick={() => router.push(item.link)}>
						<img src={item.icon} className={styles.img}/>
						<p className={styles.username}>{item.username}</p>
					</div>
				)
			})}
		</div>
	)
}
