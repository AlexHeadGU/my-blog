import './Navigation.css'

import blogIcon from '../../../../assets/images/blog.svg'
import starIcon from '../../../../assets/images/star.svg'
import settingsIcon from '../../../../assets/images/settings.svg'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min'

export const Navigation = () => {
  return (
    <nav className='nav'>
      <NavLink to='/blog' activeClassName='active'>
        <img src={blogIcon} alt='Blog' />
        <span>Blog</span>
      </NavLink>
      <NavLink to='/favourite' activeClassName='active'>
        <img src={starIcon} alt='Star' />
        <span>Favourite</span>
      </NavLink>
      <NavLink to='/settings' activeClassName='active'>
        <img src={settingsIcon} alt='Settings' />
        <span>Settings</span>
      </NavLink>
    </nav>
  )
}
