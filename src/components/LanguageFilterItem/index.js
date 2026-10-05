import './index.css'

const LanguageFilterItem = props => {
  const {languageDetails, isActive, onClickLanguage} = props
  const {id, language} = languageDetails

  const onClick = () => {
    onClickLanguage(id)
  }

  const activeClassName = isActive ? 'active-language' : ''

  return (
    <li className="language-filter-item">
      <button
        type="button"
        className={`language-button ${activeClassName}`}
        onClick={onClick}
      >
        {language}
      </button>
    </li>
  )
}

export default LanguageFilterItem
