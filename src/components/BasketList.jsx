import React from 'react'
import BasketItem from './BasketItem'

function BasketList(props) {
	const { order = [], handleBasketShow = Function.prototype, removeFromBasket = Function.prototype, changeQuantity = Function.prototype } = props
	const totalPrice = order.reduce((sum, el) => {
		return sum + el.price * el.quantity
	}, 0)
	return (
		<ul className="collection basket-list">
			<li className="collection-item active">Basket</li>
			{order.length ? order.map((item) => <BasketItem key={item.id} {...item} removeFromBasket={removeFromBasket} changeQuantity={changeQuantity} />) : <li className="collection-item">Basket is Empty</li>}
			<li className="collection-item price">Total price: {totalPrice} points</li>
			<li className="collection-item order ">
				<button className="secondary-content btn">Order</button>
			</li>

			<i className="material-icons basket-close" onClick={handleBasketShow}>
				close
			</i>
		</ul>
	)
}

export default BasketList
