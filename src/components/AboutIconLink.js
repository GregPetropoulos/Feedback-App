import { FaQuestion } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const AboutIconLink = () => {
  return (
    <div className='about-link'>
      <Link to='/about'>
        <FaQuestion size={30} />
      </Link>
    </div>
  );
};

export default AboutIconLink;
// Cool things the Link can do with an object instead of plain string route, add query? params etc
// <Link to={{
//     pathname:'/about',
//     search:'?sort=name',
//     hash:'#hello'
// }}>
//         <FaQuestion size={30} />
//       </Link>
