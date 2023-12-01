import React, { useContext, useState } from "react";
import GithubContext from "../../context/github/GithubContext";
import AlertContext from "../../context/alert/AlertContext";

function UserSearch() {
  // 검색어를 관리하는 상태
  const [text, setText] = useState("");

  // GithubContext에서 필요한 상태 및 함수들을 가져옵니다.
  const { users, searchUsers, clearUsers } = useContext(GithubContext);

  // AlertContext에서 setAlert 함수를 가져옵니다.
  const { setAlert } = useContext(AlertContext);

  // 입력값 변경 시 호출되는 핸들러
  const handleChange = (e) => {
    setText(e.target.value);
  };
  // 검색어 제출 시 호출되는 핸들러
  const handleSubmit = (e) => {
    e.preventDefault();

    if (text === "") {
      // 빈 입력값인 경우 경고를 설정합니다.
      setAlert("내용을 입력해주세요", "error");
    } else {
      // 검색어로 유저찾기
      searchUsers(text);
      // 검색 후 검색어 상태를 초기화 합니다.
      setText("");
    }
  };
  return (
    <div
      className="grid grid-cols-1 xl:grid-cols-2 
              lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8"
    >
      <div>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <div className="relative">
              <input
                type="text"
                className="w-full pr-40 bg-gray-200 input input-lg text-black"
                placeholder="Search"
                onChange={handleChange}
                value={text}
              />
              <button
                type="submit"
                className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg"
              >
                Go
              </button>
            </div>
          </div>
        </form>
      </div>
      {/* 사용자가 검색 결과가 있을 때 Clear 버튼을 표시합니다. */}
      {users.length > 0 && (
        <div>
          <button onClick={clearUsers} className="btn btn-ghost btn-lg">
            Clear
          </button>
        </div>
      )}
    </div>
  );
}
export default UserSearch;
