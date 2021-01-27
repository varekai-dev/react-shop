import React from 'react'
import { useContext } from 'react'
import { ShopContext } from '../context'

function BasketItem(props) {
	const { id, name, price, quantity, removeFromBasket = Function.prototype, background, changeQuantity = Function.prototype } = props

	const { example } = useContext(ShopContext)
	console.log(example)

	return (
		<li className="collection-item">
			<img src={background} alt={name} />
			<div className="collection-item__text" onClick={(e) => changeQuantity(e, id)}>
				{name} x <i className="material-icons remove">remove</i> {quantity} <i className="material-icons add">add</i> = {price * quantity} poitns
			</div>

			<span className="secondary-content">
				<i className="material-icons basket-delete" onClick={() => removeFromBasket(id)}>
					close
				</i>
			</span>
		</li>
	)
}

export default BasketItem
