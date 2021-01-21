import React, { useState, useEffect } from 'react'
import { API_KEY, API_URL } from '../config'
import Preloader from './Preloader'
import GoodsList from './GoodsList'
import Cart from './Cart'
import BasketList from './BasketList'
import Alert from './Alert'

function Shop() {
	const [goods, setGoods] = useState([])
	const [loading, setLoading] = useState(true)
	const [order, setOrder] = useState([])
	const [isBasketShow, setBasketShow] = useState(false)
	const [alertName, setAlertName] = useState('')

	const changeQuantity = (e, id) => {
		if (e.target.classList.contains('add')) {
			const newOrder = order.map((el) => {
				if (el.id === id) {
					const newQuantity = el.quantity + 1
					return {
						...el,
						quantity: newQuantity
					}
				} else {
					return el
				}
			})
			setOrder(newOrder)
		}
		if (e.target.classList.contains('remove')) {
			const newOrder = order.map((el) => {
				if (el.id === id) {
					const newQuantity = el.quantity - 1
					return {
						...el,
						quantity: newQuantity > 0 ? newQuantity : 0
					}
				} else {
					return el
				}
			})
			setOrder(newOrder)
		}
	}
	const addToBasket = (item) => {
		const itemIndex = order.findIndex((itemId) => itemId.id === item.id)
		if (itemIndex < 0) {
			const newItem = {
				...item,
				quantity: 1
			}
			setOrder([...order, newItem])
		} else {
			const newOrder = order.map((orderItem, index) => {
				if (index === itemIndex) {
					return {
						...orderItem,
						quantity: orderItem.quantity + 1
					}
				} else {
					return orderItem
				}
			})
			return setOrder(newOrder)
		}
		setAlertName(item.name)
	}
	const removeFromBasket = (itemId) => {
		const newOrder = order.filter((el) => {
			return el.id !== itemId
		})
		setOrder(newOrder)
	}
	const handleBasketShow = () => {
		setBasketShow(!isBasketShow)
	}
	const closeAlert = () => {
		setAlertName('')
	}
	useEffect(function getGoods() {
		fetch(API_URL, {
			headers: {
				Authorization: API_KEY
			}
		})
			.then((response) => response.json())
			.then((data) => {
				data.featured && setGoods(data.featured)
				setLoading(false)
			})
	}, [])

	return (
		<main className="container content">
			<Cart quantity={order.length} handleBasketShow={handleBasketShow} />
			{isBasketShow ? <BasketList handleBasketShow={handleBasketShow} order={order} removeFromBasket={removeFromBasket} changeQuantity={changeQuantity} /> : null}
			{loading ? <Preloader /> : <GoodsList goods={goods} addToBasket={addToBasket} />}
			{alertName && <Alert name={alertName} closeAlert={closeAlert} />}
		</main>
	)
}

export default Shop
