import Left from "./reusable/Left";
import Coloredfont from "./reusable/Coloredfont";
import { signupFields } from "./reusable/FormField";
import Input from "./reusable/Input";
import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";


const fields = signupFields;
let fieldsState = {};
fields.forEach((field) => (fieldsState[field.id] = ""));

function Signup(){

  const [signupState, setsignupState] = useState(fieldsState);
  const [error1, setError1] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setsignupState({ ...signupState, [e.target.id]: e.target.value });
  };

  const handleSubmit = () => {
    if (
      signupState.Email === "" ||
      signupState.Lastname === ""||
      signupState.Firstname  === "" ||
      signupState.Password === ""
    ) {
      setError1('Field(s)are required')
    }
    else{
      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(signupState),
      };

      fetch(
        "https://62a485cc259aba8e10ea2e0b.mockapi.io/api/v1/users",
        requestOptions
      ).then(async (response) => {
        const isJson = response.headers
          .get("content-type")
          ?.includes("application/json");
        const data = isJson && (await response.json());
        console.log(response);
        localStorage.setItem("user-info", JSON.stringify(response));
        navigate("/Welcome");
        // check for error response
        if (!response.ok) {
          // get error message from body or default to response status
          const error = (data && data.message) || response.status;
          console.error(error, response.status);
        }
      });
    }
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
              <p className="text-2xl font-bold pt-2">Sign Up</p>
            </div>
            {error1 && <div className="text-red-500">{error1}</div>}
            <form className="mt-4 w-4/5">
              <div className="">
                {fields.map((field) => (
                  <Input
                    key={field.id}
                    handleChange={handleChange}
                    value={signupState[field.id]}
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
                Create account
              </button>
            </div>
            <p className="pt-4">
              Already own an account?
              <Coloredfont text=" Log in" link="/Login" text_color="#D22B2B" />
            </p>
          </div>
        </div>
      </div>
    );
}

export default Signup;