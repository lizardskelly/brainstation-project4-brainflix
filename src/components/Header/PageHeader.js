import { Link } from 'react-router-dom';
import './PageHeader.scss';

const PageHeader = () => {
  return (  
      <header className='header'>
        <Link className='header__logo-link' to={'/'}>
          <img
            className='header__logo'
            src='http://localhost:8000/images/Brainflix-logo.svg'
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
            src='http://localhost:8000/images/Mohan-muruge.jpg'
            alt='user avatar'
          />
        </div>
        <Link className='header__button-link' to={'/upload'}>
          <button className='header__button'>UPLOAD</button>
        </Link>
        <img
          className='header__avatar'
          src='http://localhost:8000/images/Mohan-muruge.jpg'
          alt='user avatar'
        />
      </header>
  );
}
 
export default PageHeader;