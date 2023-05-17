import { Link, NavLink } from "react-router-dom";
import Searchbar from "./Searchbar";
import logo from '../assets/SportsBiz-Today.png'
import { RiFileAddFill } from "react-icons/ri";
import { useContext } from "react";
import { SearchContext } from "../context/SearchContext";


function Header() {

    const {setQuery} = useContext(SearchContext)
    const resetQuery = () => {
        setQuery("")
    }

    return (
			<header>
				<Link to="/">
                <img src={logo} alt="logo" onClick={resetQuery}/>
                </Link>
				<div>
					<nav>
						<NavLink to="/">Home</NavLink>
						<NavLink to="/sports">Sports</NavLink>
						<NavLink to="/business">Business</NavLink>
						<NavLink to="/contact">Contact</NavLink>
						<NavLink to="/add-new">
							<RiFileAddFill />
						</NavLink>
					</nav>
					<Searchbar />
				</div>
			</header>
		);
}

export default Header;