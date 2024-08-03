import { useEffect, useState } from 'react'
import Headling from '../../components/Headling/Headling'
import Search from '../../components/Search/Search'
import { PREFIX } from '../../helpers/API'
import styles from './Menu.module.css'
import { Product } from '../../interfaces/product.interface'
import axios, { AxiosError } from 'axios'
import MenuList from './MenuList/MenuList'

export default function Menu() {

	const [products, setProducts] = useState<Product[]>([])
	const [isLoading, setIsLoading] = useState<boolean>(false)
	const [error, setError] = useState<string | undefined>()
	const [filter, setFilter] = useState<string>()

	useEffect(() => {
		getMenu(filter)
	}, [filter])

	const getMenu = async (name?: string) => {
		try {
			setIsLoading(true)
			const { data } = await axios.get<Product[]>(`${PREFIX}/products`, {
				params: {
					name
				}
			})
			setProducts(data)
			setIsLoading(false)
		} catch (e) {
			if (e instanceof AxiosError) setError(e.message)
			setIsLoading(false)
			return
		}
	}

	const updateFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFilter(e.target.value)
	}

	return <>
		<div className={styles['head']}>
			<Headling>Меню</Headling>
			<Search placeholder='Введите блюдо или состав' onChange={updateFilter}/>
		</div>
		<div>
			{error && <>{error}</>}
			{!isLoading && products.length > 0 && <MenuList products={products} />}
			{!isLoading && !products.length && <>Не найдено по запросу</>}
			{isLoading && <>Загружаем продукты...</>}
		</div>
	</>
}