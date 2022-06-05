import { Link } from 'react-router-dom';
import logo from '../../assets/images/BrainFlix-logo.svg';
import avatar from '../../assets/images/Mohan-muruge.jpg';
import './header.scss';

const Header = () => {
  return (  
      <header className='header'>
        <Link className='header__logo-link' to={'/'}>
          <img
            className='header__logo'
            src={logo}
            alt='brainflix logo'
          />
        </Link>
        <div className='header__search-container'>
          <input
            className='header__search'
            id='search'
            placeholder='Search'
          />
          <img
            className='header__avatar header__avatar--mobile'
            src={avatar}
            alt='user avatar'
          />
        </div>
        <Link className='header__button-link' to={'/upload'}>
          <button className='header__button'>UPLOAD</button>
        </Link>
        <img
          className='header__avatar'
          src={avatar}
          alt='user avatar'
        />
      </header>
  );
}
 
export default Header;