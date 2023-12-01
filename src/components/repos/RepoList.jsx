import PropTypes from "prop-types";

function RepoList({ repos }) {
  return (
    <div className="rounded-lg shadow-lg card bg-base-100">
      <div className="card-body">
        <h2 className="text-3xl my-4 font-bold card-title">
          최근 리포 10개 표시
        </h2>
        {repos.map((repo) => (
          // key={repo.id} 를 추가하여 각 리포지토리에 고유한 키 할당
          <li key={repo.id}>
            <a
              href={repo.html_url}
              target="_blank"
              rel="noreferrer"
              className="repo-link"
            >
              {repo.name}
            </a>
          </li>
        ))}
      </div>
    </div>
  );
}

RepoList.propTypes = {
  repos: PropTypes.array.isRequired,
};

export default RepoList;
