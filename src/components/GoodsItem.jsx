import React from 'react'

function GoodsItem(props) {
	const { id, name, description, price, full_background: background, addToBasket = Function.prototype } = props

	return (
		<div className="card" id={id}>
			<div className="card-image">
				<img src={background} alt={name} />
			</div>
			<div className="card-content">
				<span className="card-title">{name}</span>
				<p>{description}</p>
			</div>
			<div className="card-action">
				<button className="btn" onClick={() => addToBasket({ id, name, price, background })}>
					Buy
				</button>
				<span className="right" style={{ fontSize: '1.8rem' }}>
					{price} points
				</span>
			</div>
		</div>
	)
}

export default GoodsItem
