import Left from "./reusable/Left";
import Coloredfont from "./reusable/Coloredfont";
import { loginFields } from "./reusable/FormField";
import Input from "./reusable/Input";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";


const fields = loginFields;
let fieldsState = {};
fields.forEach((field) => (fieldsState[field.id] = ""));

function Login() {
  const [loginState, setloginState] = useState(fieldsState);
  const [error1, setError1] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setloginState({ ...loginState, [e.target.id]: e.target.value });
  };

  const handleSubmit = () => {
    
      fetch("https://62a485cc259aba8e10ea2e0b.mockapi.io/api/v1/users")
        .then((response) => response.json())
        .then((response) => {
          response.forEach((items) => {
            let item1 = items.Email;
            let item2 = items.Password;
            if (item1 === loginState.Email && item2 === loginState.Password) {
              localStorage.setItem("user-info", JSON.stringify(response));
              navigate("/Welcome");
            }
            else if (item1 !== loginState.Email && item2 === loginState.Password) {
              setError1("Invalid Email Provided");
            } else if (
              item1 === loginState.Email &&
              item2 !== loginState.Password
            ) {
              setError1("Server Error");
            } 
          })
        })
        .catch((err) => console.error(err));
    
  };

  return (
    <div className="h-screen md:grid grid-cols-12 items-center justify-center">
      <Left />

      <div className="right md:col-span-5 xs:col-span-12 px-2">
        <div className="right-1">
          <div className="top pt-4 w-4/5">
            <Link to="/">
              <Icon icon="clarity:times-line" width="30" height="30" />
            </Link>
            <p className="text-2xl font-bold pt-2">Login</p>
            {error1 && (
              <div className="rounded py-4 mt-4 w-full px-4 bg-red-300 text-black font-semibold">
                {error1}
              </div>
            )}
          </div>

          <form className="mt-4 w-4/5">
            <div className="">
              {fields.map((field) => (
                <Input
                  key={field.id}
                  handleChange={handleChange}
                  value={loginState[field.id]}
                  labelText={field.labelText}
                  labelFor={field.labelFor}
                  id={field.id}
                  name={field.name}
                  type={field.type}
                  isRequired={field.isRequired}
                  placeholder={field.placeholder}
                />
              ))}
            </div>
          </form>

          <div className="self-start pl-14 pb-8 w-2/3">
            <Coloredfont
              text="Forgot password?"
              link="/#"
              text_color="#D22B2B"
            />
          </div>

          <div className="button w-4/5 py-4">
            <button
              type="submit"
              className={
                "rounded-full w-full font-semibold text-xl px-6 py-4 relative"
              }
              onClick={handleSubmit}
              style={{
                backgroundColor: "#D22B2B",
                color: "white",
              }}
            >
              Login to your account
            </button>
          </div>

          <p className="pt-4">
            Don't own an account?{" "}
            <Coloredfont text="Sign Up" link="/Signup" text_color="#D22B2B" />
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
