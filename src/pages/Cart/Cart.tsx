import { useSelector } from 'react-redux'
import Headling from '../../components/Headling/Headling'
import { RootState } from '../../store/store'
import CartItem from '../../components/CartItem/CartItem'
import { useEffect, useState } from 'react'
import { Product } from '../../interfaces/product.interface'
import axios from 'axios'
import { PREFIX } from '../../helpers/API'
import styles from './Cart.module.css'

export default function Cart() {

	const items = useSelector((s: RootState) => s.cart.items)
	const [cartProducts, setCartProducts] = useState<Product[]>([])

	const getItem = async (id: number) => {
		const { data } = await axios.get<Product>(`${PREFIX}/products/${id}`)
		return data
	}

	const loadAllItems = async () => {
		const res = await Promise.all(items.map(i => getItem(i.id)))
		
		setCartProducts(res)
	}

	useEffect(() => {
		loadAllItems()
		
	}, [items])

	return <>
		<Headling className={styles['headling']}>Корзина</Headling>
		{items.map(i => {
			const product = cartProducts.find(p => p.id == i.id)
			return product && <CartItem key={i.id} count={i.count} {...product} />
		})}
	</>
}