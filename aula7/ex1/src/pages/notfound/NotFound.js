import notfoundImg from '../../images/notfound.gif';

import './NotFound.css'

const NotFound = () => {
  return(
    <div className='notfound'>
      <img src={notfoundImg} alt='error 404'/>
    </div>
  );
}

export default NotFound;