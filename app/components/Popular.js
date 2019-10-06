import React from 'react'
import Proptypes from 'prop-types'

function LanguagesNav({selected, onUpdateLanguage}) {
    const languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python']

    return (
      <ul className='flex-center'>
        {languages.map((language) => (
          <li key={language}>
            <button 
            onClick={()=> onUpdateLanguage(language)} 
            className='btn-clear nav-link'
            style={language === selected ? {color:'#f00'} : null}>
              {language}
            </button>
          </li>
        ))}
      </ul>
    )
}

LanguagesNav.proptypes = {
    selected: Proptypes.string.isRequired,
    onUpdateLanguage: Proptypes.func.isRequired
}

export default class Popular extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        selectedLanguage: 'All'
    }

    this.updateLanguage = this.updateLanguage.bind(this)

  }
  updateLanguage(selectedLanguage) {
    this.setState({
        selectedLanguage
    })
  }
  render() {
    const {selectedLanguage} = this.state

    return (
        <React.Fragment>
            <LanguagesNav 
            selected={selectedLanguage}
            onUpdateLanguage = {this.updateLanguage} 
            />
        </React.Fragment>
    )
  }
}