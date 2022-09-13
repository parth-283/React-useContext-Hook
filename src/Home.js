import React, { useContext } from "react";
import { UserContext } from "./Contex";

function Home() {
  const { loginData } = useContext(UserContext);
  console.log(loginData);
  return (
    <>
      <div>HOme</div>
      <div>
        {" "}
        <UserContext.Consumer>
        {(context) => {
            console.log("context",context);
        }}
      </UserContext.Consumer>
      </div>
    </>
  );
}

export default Home;
