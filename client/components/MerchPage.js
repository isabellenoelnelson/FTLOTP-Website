import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchItems } from "../store/items";

class MerchPage extends Component {
	constructor() {
		super();

		this.state = {
			sort: "All",
		};

		this.handleChange = this.handleChange.bind(this);
	}

	componentDidMount() {
		this.props.fetchItems();
	}

	handleChange(evt) {
		this.setState({ sort: evt.target.value });
	}

	render() {
		const { sort } = this.state;
		const { handleChange } = this;

		const items = this.props.items.all.filter((item) => {
			if (sort === "All") return item;
			if (sort === "T-Shirt") return item.itemType === "T-Shirt";
			if (sort === "Tank Top") return item.itemType === "Tank Top";
		});

		return (
			<div className='container'>
				<div>
					<label htmlFor='itemFilter'>Filter by Item Type: </label>
					<select onChange={handleChange} value={sort} name='itemFilter'>
						<option>All</option>
						<option>T-Shirt</option>
						<option>Tank Top</option>
					</select>
				</div>
				<div className='album py-5 bg-light'>
					<div className='container'>
						<div className='row rows-cols-1 row-cols-sm-2 row-cols-md-3 g-3'>
							{items.map((item) => (
								<div className='col'>
									<div className='card shadow-sm'>
										<img src={item.imageURL} className='card-img-top' />
										<div className='card-body text-center'>
											<a href={item.itemURL} className='card-title'>
												<h3>{item.name}</h3>
											</a>
											<h6>${item.price}</h6>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

const mapState = (state) => {
	return {
		items: state.items,
	};
};

const mapDispatch = (dispatch) => {
	return {
		fetchItems: () => dispatch(fetchItems()),
	};
};

export default connect(mapState, mapDispatch)(MerchPage);
