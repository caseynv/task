import { Link } from 'react-router-dom';

const Button = ({ text, link, color, text_color, border_color }) => {
  return (
    <div className="button py-4">
      <button type='submit'
        className={"rounded-full font-semibold text-xl px-6 py-4 relative"}
        style={{
          backgroundColor: `${color ? color : ""}`,
          color: `${text ? text_color : ""}`,
          border: `${text ? border_color : ""}`,
        }}
      >
        {link && <Link to={link}>{text}</Link>}
      </button>
    </div>
  );
};

export default Button;
