import React from 'react'

import './Theme.scss'

const Theme: React.FC = () => {

  const [theme, setTheme] = React.useState(false)

  React.useLayoutEffect(() => {
    document.body.setAttribute('data-theme', theme ? 'dark' : 'light')
  }, [theme])


  return (
    <div className='theme'>
      <label className='theme__label'>
        <input
          className='theme__checbox visually-hidden'
          type="checkbox"
          checked={theme}
          onChange={() => setTheme(!theme)}
        />
        <span />
        {theme ? 'Light' : 'Dark'} Mode
      </label>
    </div>
  )
}

export default Theme