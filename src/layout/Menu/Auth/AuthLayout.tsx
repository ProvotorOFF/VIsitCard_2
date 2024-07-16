import styles from './AuthLayout.module.css'
import { Outlet } from 'react-router-dom'
import logo from '../../../assets/logo.svg'

export default function AuthLayout() {
	return <div className={styles.layout}>
		<div className={styles.logo}>
			<img src={logo} alt='Логотип компании' />
		</div>
		<div className={styles.content}>
			<Outlet />
		</div>
	</div>
}