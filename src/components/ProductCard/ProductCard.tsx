import styles from './ProductCard.module.css'
import { ProductCardProps } from './ProductCard.props'
import cartIcon from '../../assets/cart.svg'
import starIcon from '../../assets/star.svg'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../store/store'
import { cartAction } from '../../store/cart.slice'

export default function ProductCard(props: ProductCardProps) {

	const dispatch = useDispatch<AppDispatch>()

	const add = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault()
		dispatch(cartAction.add(props.id))
	}

	return (
		<Link to={`/product/${props.id}`} className={styles['link']}>
			<div className={styles['card']}>
				<div className={styles['head']} style={{ backgroundImage: `url('${props.image}')` }}>
					<div className={styles['price']}>
						{props.price}&nbsp;
						<span className={styles['currency']}>₽</span>
					</div>
					<button className={styles['add-to-cart']} onClick={add}>
						<img src={cartIcon} alt='Добавить в корзину' />
					</button>
					<div className={styles['rating']}>
						{props.rating}
						<img src={starIcon} alt='Иконка звезды' />
					</div>
				</div>
				<div className={styles['footer']}>
					<div className={styles['title']}>{props.name}</div>
					<div className={styles['description']}>{props.desription}</div>
				</div>
			</div>
		</Link>
	)
}