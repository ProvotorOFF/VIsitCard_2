import { useNavigate } from 'react-router-dom'
import pizza from '../../assets/pizza-checkout.jpeg'
import Button from '../../components/Button/Button'
import styles from './Success.module.css'

export default function Success() {

	const navigate = useNavigate()

	return (
		<div className={styles['success']}>
			<img src={pizza} alt='Изображение пиццы' />
			<div className={styles['text']}>Ваш заказ успешно оформлен!</div>
			<Button appearence='big' onClick={() => navigate('/')}>Сделать новый</Button>
		</div>
	)
}