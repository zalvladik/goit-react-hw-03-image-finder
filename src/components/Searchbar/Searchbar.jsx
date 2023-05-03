import {Component} from "react"
import PropTypes from 'prop-types'

class Searchbar extends Component {
    state = {
      currentValue:'',
    }
    
    searchBarValue  =  (e) => {
        e.preventDefault()
        if(this.state.currentValue.trim() === ''){
          return alert('pls, write word')
       }
       
        this.props.onSubmit(this.state.currentValue)
        this.setState({currentValue:''})
    } 
    
    currentValue = e => {
        this.setState({currentValue : e.currentTarget.value.toLowerCase()})
    }

    render(){
    return(
        <header className="searchbar">
  <form onSubmit={this.searchBarValue} className="form">
    <button type="submit" className="button">
      <span className="button-label">Search</span>
    </button>

    <input
      className="input"
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
      value={this.state.currentValue}
      onChange={this.currentValue}
    />
  </form>
</header>
    )
}
}


Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}
export default Searchbar