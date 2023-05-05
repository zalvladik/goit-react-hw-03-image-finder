import {Component} from "react"
import components from './Components'
import './styles.css'
import { ToastContainer } from 'react-toastify';
const {Searchbar,ImageGallery,ImageGalleryItem,Loader,Button,Modal} = components


class App extends Component{
  state = {
    searchValue:"",
    photosArray:[],
    didLoading:false,
    hrefBigPhoto:'',
   }

  searchFunc =  (searchValue) => {
      this.setState({searchValue})
      this.loadingToggle(true)
   }

  updatePhotosArray = (photosArray) =>{
     this.setState({photosArray})
     this.loadingToggle(false)
  }
  
  morePhotosArray = (photosArray) => {
    const prevState = this.state.photosArray
    const newState = photosArray
    this.setState({photosArray:[...prevState,...newState]})
    this.loadingToggle(false)
  }

  loadingToggle = (bool) =>{
    this.setState({didLoading:bool})
  }
  
  addHrefBigPhoto = (hrefBigPhoto) =>{
    this.setState({hrefBigPhoto})
  }
  
  render(){

    return(
      <div className='container'>
      <Searchbar
      onSubmit = {this.searchFunc}
      updatePhotosArray = {this.updatePhotosArray}
      didLoading = {this.state.didLoading}
      /> 
      
        <ImageGallery>
              <ImageGalleryItem
              wordForUrl = {this.state.searchValue}
              updatePhotosArray = {this.updatePhotosArray}
              photosArray = {this.state.photosArray}
              loadingToggle = {this.loadingToggle}
              addHrefBigPhoto = {this.addHrefBigPhoto}
              />
        </ImageGallery>
      
      {this.state.didLoading && 
      <Loader/>}

      {this.state.photosArray.length > 0 && 
        <Button
            wordForUrl = {this.state.searchValue}
            morePhotosArray = {this.morePhotosArray}
            loadingToggle = {this.loadingToggle}
            didLoading = {this.state.didLoading}
      />}
      <Modal
        hrefBigPhoto={this.state.hrefBigPhoto}
        addHrefBigPhoto = {this.addHrefBigPhoto}
      />
      <ToastContainer/>
      </div>
    )
  }
}

export default App
