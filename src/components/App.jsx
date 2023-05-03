import {Component} from "react"
import component from './Components'
import './styles.css'

const {Searchbar,ImageGallery,ImageGalleryItem,Loader,Button,Modal} = component


class App extends Component{
  state = {
    searchValue:'',
   }

  searchFunc = searchValue => {
    this.setState({searchValue})
    console.log('Поточне слово: ',this.state.searchValue)
   }

  render(){
    return(
      <div className='App'>
      <Searchbar
      onSubmit = {this.searchFunc}
      /> 
      
      {this.state.searchValue &&
      <ImageGallery >
          <ImageGalleryItem
          searchWord = {this.state.searchValue}
          />
      </ImageGallery>}
      
      <Loader/>
      <Button/>
      <Modal/>
      </div>
    )
  }
}

export default App