import { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {SearchContext} from "../context/SearchContext"; 
import { GrSearch } from "react-icons/gr";



function Searchbar() {

    const navigate = useNavigate()
    
    const { query, setQuery } = useContext(SearchContext);
    console.log(query)

	const handleSubmit = (e) => {
        e.preventDefault()
        if(query === "") {
            alert("Please provide a search criteria")
        }
        navigate('/results')
    };

	return (
		<form onSubmit={handleSubmit}>
			<input type="text" id="search" placeholder="search" value={query} onChange={(e)=> setQuery(e.target.value)}/>
			<button type="submit"><GrSearch/></button>
		</form>
	);
}

export default Searchbar;
