import { Link } from 'react-router-dom';
import { Icon } from "@iconify/react";


const Buttonn = ({ text, link, color, text_color, border_color }) => {
  return (
    <div className="button py-4">
      <button
        className={"font-light flex text-base px-6 py-4 relative"}
        style={{
          backgroundColor: `${color ? color : ""}`,
          color: `${text ? text_color : ""}`,
          border: `${text ? border_color : ""}`,
        }}
      >
        <Icon icon="flat-color-icons:google" width="24" height="24" />
        {link && <Link className='pl-4' to={link}>{text}</Link>}
      </button>
    </div>
  );
};

export default Buttonn;
