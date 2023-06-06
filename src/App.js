import {Component} from 'react'

import './App.css'

class App extends Component {
  state = {isSaved: true, inputText: ''}

  changeIsSaved = () => {
    this.setState(prevState => ({isSaved: !prevState.isSaved}))
  }

  onChangeInput = event => {
    this.setState({inputText: event.target.value})
  }

  render() {
    const {isSaved, inputText} = this.state
    return (
      <div className="app-container">
        <div className="editable-container">
          <h1 className="editable-container-heading">Editable Text Input</h1>
          <div className="input-container">
            {isSaved ? (
              <input
                className="input-element"
                type="text"
                value={inputText}
                onChange={this.onChangeInput}
              />
            ) : (
              <p className="text-paragraph">{inputText}</p>
            )}
            <button
              type="button"
              className="button"
              onClick={this.changeIsSaved}
            >
              {isSaved ? 'Save' : 'Edit'}
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default App
