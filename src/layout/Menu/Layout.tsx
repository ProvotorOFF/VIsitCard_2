import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import styles from './Layout.module.css'
import menuImg from '../../assets/menu-book.svg'
import cartImg from '../../assets/cart.svg'
import avatarImg from '../../assets/avatar-placeholder.png'
import logoutImg from '../../assets/logout.svg'
import Button from '../../components/Button/Button'
import cn from 'classnames'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../store/store'
import { getProfile, userActions } from '../../store/user.slice'
import { useEffect } from 'react'

export function Layout() {

	const navigate = useNavigate()
	const dispatch = useDispatch<AppDispatch>()
	const profile = useSelector((s: RootState) => s.user.profile)

	const logout = () => {
		dispatch(userActions.logout())
		localStorage.removeItem('jwt')
		navigate('/login')
	}

	useEffect(() => {
		dispatch(getProfile())
	}, [dispatch])

	return <div className={styles['layout']}>
		<div className={styles['sidebar']}>
			<div className={styles['user']}>
				<img src={avatarImg} alt='Аватар пользователя' className={styles['avatar']} />
				<div className={styles['name']}>{profile?.name}</div>
				<div className={styles['email']}>{profile?.email}</div>
			</div>
			<div className={styles['menu']}>
				<NavLink to='/' className={({isActive}) => cn(styles['link'], {[styles['active']] : isActive})}>
					<img src={menuImg} alt='Иконка меню' />
					Меню
				</NavLink>
				<NavLink to='/cart' className={({isActive}) => cn(styles['link'], {[styles['active']] : isActive})}>
					<img src={cartImg} alt='Иконка корзины' />
					Корзина
				</NavLink>
			</div>
			<Button className={styles['exit']} onClick={logout}>
				<img src={logoutImg} alt='Иконка выхода' />
				Выход
			</Button>
		</div>
		<div className={styles['content']}>
			<Outlet />
		</div>
	</div>
}