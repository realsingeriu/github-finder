import { useContext, useEffect, useState } from "react";

import Spinner from "../layout/Spinner";
import UserItem from "./UserItem";
import GithubContext from "../../context/github/GithubContext";

function UserResults() {
  const { users, loading } = useContext(GithubContext);
  // const [users, setUsers] = useState([]);
  // const [loaing, setLoading] = useState(true); // 시작시 깃허브에서 데이터를 자겨옴(작업중 true)

  // useEffect(() => {
  //   fetchUsers();
  // }, []); //앱 시작시 실행됨

  // const fetchUsers = async () => {
  //   //console.log(`${import.meta.env.VITE_GITHUB_URL}/users`);
  //   const response = await fetch(`${GITHUB_URL}/users`, {
  //     headers: {
  //       Authorization: `token ${GITHUB_TOKEN}`,
  //     },
  //   });
  //   const data = await response.json();

  // setUsers(data);
  // setLoading(false); // 데이터 로딩 완료
  // };

  if (!loading) {
    return (
      <div className="grid grid-cols-1 gap-8 md:gird-cols-2 xl:grid-cols-4 lg:grid-cols-3">
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  } else {
    return <Spinner />;
  }
}

export default UserResults;
