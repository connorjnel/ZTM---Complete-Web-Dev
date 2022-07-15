import React from "react"; // import react itself
import "./Card.css"; // import app stylesheet

class Card extends React.Component {
	render() {
		return (
			<div className="bg-blue dib br3 pa3 ma2 grow bw2 shadow-5 tc">
				<img src={`https://robohash.org/${this.props.id}?200x200`} alt="robots" />
				<div>
					<h2>{this.props.name}</h2>
					<p>{this.props.email}</p>
				</div>
			</div>
		);
	}
}

export default Card;
