import React,{useState} from "react";

function Search({onSearch}) {

  const [searchTerm, setSearchTerm] = useState('')

  function handleSearch(e){
    setSearchTerm(e.target.value);
    onSearch(e.target.value)
  }

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" value={searchTerm} onChange={handleSearch} />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
