import './UploadPage.scss';
import thumbnail from '../../assets/images/Upload-video-preview.jpg';
import { Link } from 'react-router-dom';


const UploadPage = () => {
  return ( 
    <section className='upload'>
      <h1 className='upload__title'>Upload Video</h1>
      <div>
        <p className='upload__label'>VIDEO THUMBNAIL</p>
        <img className='upload__thumbnail' src={thumbnail} alt='video thumbnail'/>
      </div>
      <form className='upload__form'>
        <div className='upload__input-container'>
          <label className='upload__label' htmlFor='title'>
            TITLE YOUR VIDEO
          </label>
          <input className='upload__input' name='title' placeholder='Add a title to your video'/>
        </div>
        <div className='upload__input-container'>
          <label className='upload__label' htmlFor='describe'>
            ADD A VIDEO DESCRIPTION
          </label>
          <input className='upload__input upload__input--height' name='describe' placeholder='Add a description to your video'/>
        </div>
        <Link to={'/'}>
          <button className='upload__cancel'>CANCEL</button>
        </Link>
        <button className='upload__button'>PUBLISH</button>
      </form>
      <Link to={'/'}>
        <button className='upload__cancel upload__cancel--mobile'>CANCEL</button>
      </Link>
    </section>
   );
}
 
export default UploadPage;