const SearchBar = (props) => {
    const handleSearch = () => {
        props.setSearch()
    }
    return(
        <div>
            <input type="search" value={props.search} onChange={(e)=>props.setSearch(e.target.value)} />
            {/* <button type="button" onClick={handleSearch}>search</button> */}
        </div>
    )
}

export default SearchBar;