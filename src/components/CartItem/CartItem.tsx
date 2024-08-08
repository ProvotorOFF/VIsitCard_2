import { useDispatch } from 'react-redux'
import { CartItemProps } from './CartItem.props'
import { AppDispatch } from '../../store/store'
import { cartAction } from '../../store/cart.slice'
import plus from '../../assets/plus.svg'
import minus from '../../assets/minus.svg'
import close from '../../assets/close.svg'
import styles from './CartItem.module.css'

export default function CartItem(props: CartItemProps) {

	const dispatch = useDispatch<AppDispatch>()

	const increase = () => {
		dispatch(cartAction.add(props.id))
	}

	const decrease = () => {
		dispatch(cartAction.decrease(props.id))
	}

	const remove = () => {
		dispatch(cartAction.remove(props.id))
	}

	return <div className={styles['item']}>
		<div className={styles['image']} style={{ backgroundImage: `url('${props.image}')` }}></div>
		<div className={styles['description']}>
			<div className={styles['name']}>{props.name}</div>
			<div className={styles['price']}>{props.price}&nbsp;₽</div>
		</div>
		<div className={styles['actions']}>
			<button className={styles['button']} onClick={decrease}>
				<img src={minus} alt='Удалить из корзины' />
			</button>
			<div className={styles['number']}>{props.count}</div>
			<button className={styles['button']} onClick={increase}>
				<img src={plus} alt='Добавить в корзину' />
			</button>
			<button className={styles['button']} onClick={remove}>
				<img src={close} alt='Удалить все' />
			</button>
		</div>
	</div>
}