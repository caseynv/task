import imguse from '../img/left-img.png';
function Left(){
    return (
        <div className="left h-full bg-black md:col-span-7">
            <img src={ imguse } alt="snippet of the courses"/>
            <h3 className="text-3xl text-center w-2/3 pt-6 text-white font-bold">
            Your Money-Making machine in your pocket
            </h3>
            <h6 className="text-xl text-gray-300 w-2/3 text-center pt-4">
            Gain Relevant Strategies & Global skills for Scaling, Wealth Creation
            and Financial Freedom.
            </h6>
        </div>
    );
}
export default Left;