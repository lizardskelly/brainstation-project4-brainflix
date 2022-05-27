import logo from '../../assets/images/BrainFlix-logo.svg';
import avatar from '../../assets/images/Mohan-muruge.jpg';
import './header.scss';

const Header = () => {
  return (  
    <>
      <header
        className='header'
      >
        <img
          className='header__logo'
          src={logo}
          alt='brainflix logo'
        />
        <div
          className='header__search-container'
        >
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
        <button
          className='header__button'
        >
          UPLOAD
        </button>
        <img
          className='header__avatar'
          src={avatar}
          alt='user avatar'
        />
      </header>
    </>
  );
}
 
export default Header;