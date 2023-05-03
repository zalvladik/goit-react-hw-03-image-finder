import {Component} from "react"
import components from './Components'
import './styles.css'
const {Searchbar,ImageGallery,ImageGalleryItem,Loader,Button,Modal} = components


class App extends Component{
  state = {
    searchValue:'',
   }

  searchFunc = async searchValue => {
    await this.setState({searchValue})
   }

  render(){
    return(
      <div className='container'>
      <Searchbar
      onSubmit = {this.searchFunc}
      /> 
      
      {this.state.searchValue &&
      <ImageGallery >
          <ImageGalleryItem
          wordForUrl = {this.state.searchValue}
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
