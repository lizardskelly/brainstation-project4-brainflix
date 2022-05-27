import logo from '../../assets/images/BrainFlix-logo.svg'
import avatar from '../../assets/images/Mohan-muruge.jpg'

const Header = () => {
  return (  
    <>
      <header
        className='header'
      >
        <img
          className="header__logo"
          src={logo}
        />
        <input
          className='header__search'
          id='search'
          placeholder='Search'
        ></input>
        <button
          className='header__button'
        >
          UPLOAD
        </button>
        <img
          className='header__avatar'
          src={avatar}
        />
      </header>
    </>
  );
}
 
export default Header;