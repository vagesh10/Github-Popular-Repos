import {Component} from 'react'
import Loader from 'react-loader-spinner'

import LanguageFilterItem from '../LanguageFilterItem'
import RepositoryItem from '../RepositoryItem'

import './index.css'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

const githubReposApiUrl = 'https://apis.ccbp.in/popular-repos'

class GithubPopularRepos extends Component {
  state = {
    repositoriesList: [],
    activeLanguage: 'ALL',
    isLoading: false,
  }

  componentDidMount() {
    this.getRepositories()
  }

  getRepositories = async () => {
    const {activeLanguage} = this.state

    this.setState({isLoading: true})

    const response = await fetch(
      `${githubReposApiUrl}?language=${activeLanguage}`,
    )

    const data = await response.json()

    const updatedRepositories = data.popular_repos.map(eachRepo => ({
      id: eachRepo.id,
      name: eachRepo.name,
      issuesCount: eachRepo.issues_count,
      forksCount: eachRepo.forks_count,
      starsCount: eachRepo.stars_count,
      avatarUrl: eachRepo.avatar_url,
    }))

    this.setState({
      repositoriesList: updatedRepositories,
      isLoading: false,
    })
  }

  onClickLanguage = id => {
    this.setState(
      {
        activeLanguage: id,
      },
      this.getRepositories,
    )
  }

  renderLoader = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#0284c7" height={80} width={80} />
    </div>
  )

  renderRepositories = () => {
    const {repositoriesList} = this.state

    return (
      <ul className="repositories-list">
        {repositoriesList.map(eachRepo => (
          <RepositoryItem key={eachRepo.id} repositoryDetails={eachRepo} />
        ))}
      </ul>
    )
  }

  render() {
    const {repositoriesList, isLoading, activeLanguage} = this.state

    return (
      <div className="github-popular-repos-container">
        <h1 className="heading">Popular</h1>

        <ul className="language-filters-list">
          {languageFiltersData.map(eachLanguage => (
            <LanguageFilterItem
              key={eachLanguage.id}
              languageDetails={eachLanguage}
              isActive={activeLanguage === eachLanguage.id}
              onClickLanguage={this.onClickLanguage}
            />
          ))}
        </ul>

        {isLoading ? this.renderLoader() : this.renderRepositories()}
      </div>
    )
  }
}

export default GithubPopularRepos
