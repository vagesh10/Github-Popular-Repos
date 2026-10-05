import './index.css'

const RepositoryItem = props => {
  const {repositoryDetails} = props

  const {name, issuesCount, forksCount, starsCount, avatarUrl} =
    repositoryDetails

  return (
    <li className="repository-item">
      <img src={avatarUrl} alt={name} className="repository-image" />

      <h2 className="repository-name">{name}</h2>

      <div className="repository-info">
        <img
          src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
          alt="stars"
          className="icon"
        />
        <p>{starsCount} stars</p>
      </div>

      <div className="repository-info">
        <img
          src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
          alt="forks"
          className="icon"
        />
        <p>{forksCount} forks</p>
      </div>

      <div className="repository-info">
        <img
          src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
          alt="open issues"
          className="icon"
        />
        <p>{issuesCount} open issues</p>
      </div>
    </li>
  )
}

export default RepositoryItem
