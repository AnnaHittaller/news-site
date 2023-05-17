import { useContext } from "react";
import Header from "./Header";
import { SearchContext } from "../context/SearchContext";

function ResultsPage() {

const {query} = useContext(SearchContext)

    return ( 
    <>
    <Header/>
    <h1>Search results for: {query}</h1>
    </> );
}

export default ResultsPage;