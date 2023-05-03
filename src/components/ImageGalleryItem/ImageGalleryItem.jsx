import {Component} from "react"
import { nanoid } from 'nanoid'
import './styles.css'

class ImageGalleryItem extends Component{
    state = {
        arrayPhotos:[],
    }

    componentDidUpdate (prevProps, prevState){
        if(prevProps.wordForUrl !== this.props.wordForUrl){
           const API_KEY = '35063138-0f7111e05497fae6e002d2e8a'
           const MAIN_URL = 'https://pixabay.com/api/'
        fetch('https://pixabay.com/api/?q=cat&page=1&key=35063138-0f7111e05497fae6e002d2e8a&image_type=photo&orientation=horizontal&per_page=12')
            .then(result => result.json())
            .then(arrayPhotos => this.setState({arrayPhotos:arrayPhotos.hits}))
            .catch(error => console.log(error))
        }
        console.log(this.state.arrayPhotos)
    }

    render(){

        const gallaryPhotos = this.state.arrayPhotos
        console.log(gallaryPhotos)
        return(
            gallaryPhotos.map(photo =>
                <li key={nanoid()} id={photo.id} className="gallery-item">
                    <img src={photo.previewURL} alt="" class='gallery-photo'/>
                </li>
                )
        )
    }
} 
export default ImageGalleryItem

// fetch(`${MAIN_URL}?q=${this.props.wordForUrl}&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`)

