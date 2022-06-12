import './UploadPage.scss';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { createRef } from 'react';

const serverHost = 'http://localhost:8000';

const UploadPage = ({ history }) => {
  const formRef = createRef();
  
  const publishVideo = () => {
    const form = formRef.current;
    axios.post(`${serverHost}/videos`, {
      title: form.title.value,
      channel: "PavelPavelton",
      image: form.thumbnail.src,
      description: form.describe.value
    })
    .then(response => {
      let id = response.data;
      history.push(`/video/${id}`);
    })
    .catch(error => {
      console.error(error.message)
    });
  };

  return ( 
    <section className='upload'>
      <h1 className='upload__title'>Upload Video</h1>
      <form ref={formRef}>
        <div className='upload__form-container'>
          <div className='upload__image-container'>
            <p className='upload__label'>VIDEO THUMBNAIL</p>
            <img className='upload__thumbnail' id='thumbnail' src='http://localhost:8000/images/Upload-video-preview.jpg' alt='video thumbnail'/>
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
          <button className='upload__button' type='button' onClick={publishVideo}>PUBLISH</button>
        </div>
      </form>
      <Link to={'/'}>
        <button className='upload__cancel upload__cancel--mobile'>CANCEL</button>
      </Link>
    </section>
   );
}
 
export default UploadPage;