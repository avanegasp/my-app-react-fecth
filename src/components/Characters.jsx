import React from "react";
import PropTypes from "prop-types"

const Characters = ({numIndex, img, name, specie, gender, locationName}) => (
	<div className="container-fluid d-flex align-items-center justify-content-center mt-5">
		<div className="card col-4">
			<img src={img} className="card-img-top" alt="..."/>
			<div className="card-body">
					<h5 className="card-title">{name}</h5>
					<p className="card-text">{specie}</p>
			</div>
			<ul className="list-group list-group-flush">
					<li key={numIndex} className="list-group-item">Gender: {gender}</li>
					<li className="list-group-item">Specie: {specie}</li>
					<li className="list-group-item">Location_Name: {locationName}</li>
			</ul>
		</div>
	</div>
)


Characters.propTypes = {
    numIndex: PropTypes.number,
    img: PropTypes.string,
    name: PropTypes.string,
    specie: PropTypes.string,
    gender: PropTypes.string,
    locationName: PropTypes.string
}

export default Characters;