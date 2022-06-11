import { Icon } from "@iconify/react";

function Welcome() {
  return (
    <>
        <div className="welcome h-screen">
            <Icon
                icon="clarity:success-standard-line"
                color="green"
                width="200"
                height="200"
            />
            <div className="text-6xl pt-8">LOGGED IN!</div>
        </div>
    </>
  );
}

export default Welcome;
