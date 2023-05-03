import {Component} from "react"

class ImageGalleryItem extends Component{
    state = {
        arrayPhotos:[],
    }

    componentDidUpdate(prevProps, prevState){
        if(prevProps.wordForUrl !== this.props.wordForUrl){
           const API_KEY = '35063138-0f7111e05497fae6e002d2e8a'
           const MAIN_URL = 'https://pixabay.com/api/'
        fetch('https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12')
            .then(result => result.json())
            .then(arrayPhotos => this.setState({arrayPhotos}))
            .catch(error => console.log(error))
        }
        console.log(this.state.arrayPhotos)
    }

    render(){
        return(
                <li className="gallery-item">
                <img src="" alt="" />
                </li>
        )
    }
} 
export default ImageGalleryItem

// fetch(`${MAIN_URL}?q=${this.props.wordForUrl}&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`)

