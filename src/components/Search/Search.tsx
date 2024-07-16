import cn from 'classnames'
import styles from './Search.module.css'
import { forwardRef } from 'react'
import { SearchProps } from './Search.props'
import search from '../../assets/search.svg'

const Search = forwardRef<HTMLInputElement, SearchProps>(function Input({ className, isValid = true, ...props }, ref) {
	return (
		<div className={styles['input-wrapper']}>
			<input {...props} ref={ref}
				className={cn(className, styles['input'], className,
					{
						[styles.invalid]: !isValid
					})} />
			<img className={styles['icon']} src={search} alt='Иконка лупы' />
		</div>

	)
})

export default Search