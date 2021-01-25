import React from "react";
import { Link } from "gatsby";
import queryString  from 'query-string';
import { Location } from '@reach/router';
import withLocation from "./withLocation";
import logoURL from "../assets/breathecode.32.png";

class Navbar extends React.Component {
	constructor() {
		super();
		this.state = {
			change: false,

		};
	}

	render() {
        const { pageContext, search } = this.props;
        const fromIframe = (search.plain === 'true' || search.fromIframe === 'true');

        if(fromIframe) return null;
		return (
				<nav className="navbar navbar-expand-lg navbar-light bg-light gradient">
					<Link to="/">
						<img
							className="navbar-brand mb-0"
							src={logoURL}
						/>
					</Link>
					<button
						className="navbar-toggler"
						type="button"
						aria-label="Toggle navigation"
						onClick={() => {
							this.setState({
								change: !this.state.change
							});
						}}>
						<span className="navbar-toggler-icon" />
					</button>

					<div
						className={`navbar-collapse collapse ${this.state.change && "show"}`}
						id="navbarSupportedContent">
						<ul className="navbar-nav mr-auto text-center">
							<li className="nav-item m-0">
								<a href="https://breatheco.de/aboutus" className="nav-link">
									<p className={`nav-link ${this.state.change && "border-bottom"}`}>
										About
									</p>
								</a>
							</li>
							<li className="nav-item m-0">
								<a href="https://breatheco.de/interactive-exercises" className="nav-link">
									<p className={`nav-link ${this.state.change && "border-bottom"}`} >
										Practice
									</p>
								</a>
							</li>
							<li className="nav-item m-0">
								<a href="https://breatheco.de/lessons" className="nav-link">
									<p className={`nav-link ${this.state.change && "border-bottom"}`} >
										Read
									</p>
								</a>
							</li>
							<li className="nav-item m-0">
								<a href="https://projects.breatheco.de" className="nav-link">
									<p className={`nav-link ${this.state.change && "border-bottom"}`}>
										Build
									</p>
								</a>
							</li>
						</ul>
						<form className="form-inline my-lg-0  d-flex justify-content-center">
							<a href="https://breatheco.de/contributing" className="nav-link btn btn-outline-success buttonHeight mr-2">
                                contribute
							</a>
							<a
								className="btn btn-outline-primary buttonHeight  px-5"

								href="https://student.breatheco.de/login"
							>login</a>
						</form>
					</div>
				</nav>
		);
	}
}

export default withLocation(Navbar)