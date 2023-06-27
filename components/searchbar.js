const SearchBar = () => (
    <form action="/" method="get" >
        <input
            type="text"
            id="header-search"
            placeholder="Search "
            name="s" 
            className="mr-2 rounded mt-3"
        />
        <button type="submit" className="bg-blue-400">Search</button>
    </form>
);

export default SearchBar;