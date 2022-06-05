import './UploadPage.scss';
import thumbnail from '../../assets/images/Upload-video-preview.jpg';
import { Link } from 'react-router-dom';


const UploadPage = () => {
  return ( 
    <section className='upload'>
      <h1 className='upload__title'>Upload Video</h1>
      <form>
        <div className='upload__form-container'>
          <div className='upload__image-container'>
            <p className='upload__label'>VIDEO THUMBNAIL</p>
            <img className='upload__thumbnail' src={thumbnail} alt='video thumbnail'/>
          </div>
          <div className='upload__input-container--display'>
          <div className='upload__input-container'>
            <label className='upload__label' htmlFor='title'>
              TITLE YOUR VIDEO
            </label>
            <input className='upload__input' name='title' placeholder='Add a title to your video'/>
          </div>
          <div className='upload__input-container upload__input-container--border'>
            <label className='upload__label' htmlFor='describe'>
              ADD A VIDEO DESCRIPTION
            </label>
            <input className='upload__input upload__input--describe' name='describe' placeholder='Add a description to your video'/>
          </div>
          </div>
        </div>
        <div className='upload__button-container'>
          <Link to={'/'}>
            <button className='upload__cancel'>CANCEL</button>
          </Link>
          <Link to={'/'}>
            <button className='upload__button' onClick={() => window.alert('Video uploaded! Press OK to continue.')}>PUBLISH</button>
          </Link>
        </div>
      </form>
      <Link to={'/'}>
        <button className='upload__cancel upload__cancel--mobile'>CANCEL</button>
      </Link>
    </section>
   );
}
 
export default UploadPage;