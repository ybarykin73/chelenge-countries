import React from "react";
import Icom from "../subcomponents/icon/Icon";
import Input from "../subcomponents/input/Input";
import SearchIcon from '../../assets/icon/search.svg'

import './Search.scss'

const Search: React.FC = () => {
  const [search, setSearch] = React.useState('')

  const changeSearch = (value) => {
    setSearch(value)
  }

  return (
    <div className="search">
      <button className="search__button">
        <Icom 
          size={24} 
          icon={SearchIcon}
        />
      </button>
      <Input
      onChange={changeSearch}
        type='search' 
      />
    </div>
  )
}

export default Search