import { useDispatch } from 'react-redux'
import { CartItemProps } from './CartItem.props'
import { AppDispatch } from '../../store/store'
import { cartAction } from '../../store/cart.slice'
import styles from './CartItem.module.css'

export default function CartItem(props: CartItemProps) {

	const dispatch = useDispatch<AppDispatch>()

	const increase = () => {
		dispatch(cartAction.add(props.id))
	}

	const decrease = () => {
		dispatch(cartAction.add(props.id))
	}

	const remove = () => {
		dispatch(cartAction.add(props.id))
	}

	return <div className={styles['item']}>
		<div className={styles['image']} style={{ backgroundImage: `url('${props.image}')` }}></div>
		<div className={styles['description']}>
			<div className={styles['name']}>{props.name}</div>
			<div className={styles['currency']}>{props.price}&nbsp;₽</div>
		</div>
		<div className={styles['actions']}>
			<button className={styles['button']} onClick={decrease}>
				<img src='' alt='Удалить из корзины' />
			</button>
			<div>{props.count}</div>
			<button className={styles['button']} onClick={increase}>
				<img src='' alt='Добавить в корзину' />
			</button>
			<button className={styles['button']} onClick={remove}>
				<img src='' alt='Удалить все' />
			</button>
		</div>
	</div>
}