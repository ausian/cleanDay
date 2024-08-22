import { useContext  } from "react";
import GlobalContext from "../../context/globalContext";

const My = () => {

    const {
        userDataTG
      } = useContext(GlobalContext);

  return (
    <div>
      <h1>User Profile</h1>
      {userDataTG?.first_name && (
        <p>First Name: {userDataTG.first_name}</p>
      )}
      {userDataTG?.last_name && (
        <p>Last Name: {userDataTG.last_name}</p>
      )}
      {userDataTG?.username && (
        <p>Username: {userDataTG.username}</p>
      )}
    </div>
  );
};

export default My;
