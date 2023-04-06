import { FaStar, FaCodeBranch, FaEye } from "react-icons/fa";

async function fetchRepo(name) {
  const response = await fetch(
    `https://api.github.com/repos/KaniewskiSoftware/${name}`
  );

  const repo = await response.json();
  return repo;
}
const Repo = async ({ name }) => {
  const repo = await fetchRepo(name);
  return (
    <>
      <h2>{repo.name}</h2>
      <p>{repo.description}</p>
      <div className="card-stats">
        <div className="card-stat">
          <FaStar />
          <span>{repo.stargazers_count} stars</span>
        </div>
        <div className="card-stat">
          <FaCodeBranch />
          <span>{repo.forks_count} stars</span>
        </div>
        <div className="card-stat">
          <FaEye />
          <span>{repo.watchers_count} stars</span>
        </div>
      </div>
    </>
  );
};

export default Repo;