import React from "react";
import Icom from "../icon/Icon";
import downArrow from '../../../assets/icon/down-arrow.svg'

import { IProps } from "./IDropdown";
import './Dropdown.scss'

const Dropdown: React.FC<IProps> = (props) => {
  const {
    list
  } = props

  const ref = React.useRef(null)
  const buttonRef = React.useRef(null)

  const [isOpen, setIsOpen] = React.useState(false)
  const [select, setSelect] = React.useState('Region')

  React.useEffect(() => {
    const closeDropdown = (e) => {
      if (ref.current && !ref.current.contains(e.target) && e.target !== buttonRef.current ) {
        setIsOpen(false)
      }
    }

    document.body.addEventListener('click', closeDropdown)

    return () => {
      document.body.removeEventListener('click', closeDropdown)
    }
  }, [])

  const selectItem = (item: string) => {
    setSelect(item)
  }

  return (
    <div  className="dropdown">
      <div className="dropdown__header">
        Filter by {select}
        <button ref={buttonRef} className="dropdown__button" onClick={() => setIsOpen(!isOpen)}>
          <Icom 
            className="dropdown__button-icon" 
            size={16} 
            icon={downArrow} 
          />
        </button>
      </div>

      {
        isOpen &&
        <div ref={ref} className="dropdown__main">
          <ul className="dropdown__list">
            {
              list.map(item => (
                <li key={item.id} className="dropdown__list-item">
                  <button 
                    className="dropdown__list-button"
                    onClick={() => selectItem(item.partWorld)}
                  >
                    {item.partWorld}
                  </button>
                </li>
              ))
            }
          </ul>
        </div>
      }
    </div>
  )
}

export default Dropdown