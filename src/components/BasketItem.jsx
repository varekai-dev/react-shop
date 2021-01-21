import React from 'react'

function BasketItem(props) {
	const { id, name, price, quantity, removeFromBasket = Function.prototype } = props
	return (
		<li className="collection-item">
			{name} x{quantity} = {price}
			<span className="secondary-content">
				<i className="material-icons basket-delete" onClick={() => removeFromBasket(id)}>
					close
				</i>
			</span>
		</li>
	)
}

export default BasketItem
