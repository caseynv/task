import {Link} from 'react-router-dom'
import Buttonn from "./reusable/Buttonn";
import Left from "./reusable/Left";
import Button from "./reusable/Button";
import Coloredfont from './reusable/Coloredfont';


function Home() {
  return (
    <div className="h-screen md:grid grid-cols-12 items-center justify-center">
      <Left />

      <div className="right md:col-span-5 xs:col-span-12 px-10">
        <div className="right-1">
          <h3 className="text-2xl font-bold text-center">
            Your Money-Making machine in your pocket
          </h3>
          <div className="text-base text-slate-700 pt-4 text-center">
            By creating an account, you agree to your{" "}
            <Coloredfont
              text="Terms of Service "
              link="/#"
              text_color="#D22B2B"
            />
            and 
            <Coloredfont
              text=" Privacy Policy"
              link="/#"
              text_color="#D22B2B"
            />
          </div>
          <Buttonn
            text="Continue with Google"
            link="/#"
            color="#15317E"
            text_color="white"
          />
          <div className="flex py-4 w-full">
            <div className="h-6 w-full">
              <hr className="w-full mt-2.5 h-4" />
            </div>
            <p className="text-slate-500 mx-2">OR</p>
            <div className="h-6 w-full">
              <hr className="w-full mt-2.5" />
            </div>
          </div>
          <Button
            text="Create my account"
            text_color="white"
            link="/Signup"
            color="#D22B2B"
          />
          <Link className="pt-4" to="/Login">
            Login to my account
          </Link>
          <Button
            text="Browse courses"
            text_color="#D22B2B"
            link="/#"
            color="white"
            border_color="2px solid #D22B2B"
          />

        </div>
      </div>
    </div>
  );
}

export default Home;
