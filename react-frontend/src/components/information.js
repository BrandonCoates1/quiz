import React from "react";
import { Link } from "react-router-dom";


const Information = ({ user }) => {
	return (
		<>
			<div className="info">
				<h1>Welcome to our website!</h1>
				<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique deleniti veritatis, esse quidem pariatur mollitia debitis atque non accusantium ducimus aliquam omnis eaque quo expedita sed dolore nobis doloremque corporis, minima, autem voluptate? Culpa eligendi iusto consequatur molestias, temporibus hic nulla velit sed. Tempora sequi fugiat harum sit incidunt perspiciatis necessitatibus ex iste, et, magnam asperiores id a. Veniam qui quo excepturi, laudantium provident architecto, sapiente rerum facere odit impedit magni? Id recusandae laborum odio voluptatem dolor distinctio saepe amet, magni perspiciatis! Minima inventore accusantium mollitia, eligendi, laborum magni ipsa quasi sint quas corporis molestiae! Aut similique adipisci quis impedit.</p>
				{user ? 
				<Link to="/quiz"><button type="button" className="login-button">Select a quiz</button></Link> : 
				<Link to="/login"><button type="button" className="login-button">Login to continue</button></Link>}
			</div>
		</>
	);
}

export default Information;