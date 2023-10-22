import React from "react";
import Icom from "../subcomponents/icon/Icon";
import SearchIcon from '../../assets/icon/search.svg'

import { IProps } from "./ISearch";
import './Search.scss'

const Search: React.FC<IProps> = (props) => { 
  const {
    handleSearch
  } = props

  const [search, setSearch] = React.useState('')

  const changeSearch = (value) => {
    setSearch(value)
    handleSearch(value)
  }

  return (
    <div className="search">
      <button className="search__button">
        <Icom
          className="search__button-icon"
          size={24} 
          icon={SearchIcon}
        />
      </button>
      <input 
        type='search'
        className="search__input"
        value={search}
        onChange={(e) => changeSearch(e.target.value)}
        placeholder="Search for a country..." 
      />
    </div>
  )
}

export default Search