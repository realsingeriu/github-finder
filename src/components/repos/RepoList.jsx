import PropTypes from "prop-types";
import RepoItem from "./RepoItem";

function RepoList({ repos }) {
  return (
    <div className="rounded-lg shadow-lg card bg-base-100">
      <div className="card-body">
        <h2 className="text-3xl my-4 font-bold card-title">
          최근 리포 10개 표시
        </h2>
        {repos.map((repo) => (
          // key={repo.id} 를 추가하여 각 리포지토리에 고유한 키 할당
          <RepoItem key={repo.id} repo={repo} />
        ))}
      </div>
    </div>
  );
}

RepoList.propTypes = {
  repos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      // 다른 리포지토리 속성들을 여기에 추가할 수 있습니다.
    })
  ).isRequired,
};

export default RepoList;
