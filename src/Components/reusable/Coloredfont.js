import { Link } from 'react-router-dom';

function Coloredfont({ text, link, text_color }){
    return (
      <>
        <span className="text-base"
            style={{
              color: `${text ? text_color : ""}`,
              }}
            >
            {link && <Link to={link}>{text}</Link>}
          
        </span>
      </>
    );
}

export default Coloredfont;