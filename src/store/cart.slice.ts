import { createSlice, PayloadAction } from '@reduxjs/toolkit'


export interface CartItem {
    id: number
    count: number
}

export interface CartState {
    items: CartItem[]
}

const initialState: CartState = {
	items: []
}

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		add: (state, action: PayloadAction<number>) => {
			const existed = state.items.find(i => i.id == action.payload)
			if (!existed) state.items.push({ id: action.payload, count: 1 })
			else existed.count++
		}
	}
})

export default cartSlice.reducer
export const cartAction = cartSlice.actions