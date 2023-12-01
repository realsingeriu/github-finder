import { useParams } from "react-router-dom";
import GithubContext from "../context/github/GithubContext";
import { useContext, useEffect } from "react";

function User() {
  const { user, getUser } = useContext(GithubContext);

  const params = useParams();

  useEffect(() => {
    getUser(params.login);
    // eslint-disable-next-line
  }, []);

  return (
    <h3>
      {user.login}, {user.id}
    </h3>
  );
}
export default User;
