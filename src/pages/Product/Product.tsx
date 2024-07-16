import { Await, useLoaderData } from 'react-router-dom'
import { Product as ProductInterface } from '../../interfaces/product.interface'
import { Suspense } from 'react'

export default function Product() {

	const data = useLoaderData() as { data: ProductInterface }

	return <Suspense fallback={'Загрузка'}>
		<Await resolve={data.data}>{({ data }: { data: ProductInterface }) => (
			<>{data.name}</>
		)}</Await>
	</Suspense>
}