import { Component } from "react"
import { nanoid } from 'nanoid'
import './styles.css'
import PropTypes from 'prop-types'

class ImageGalleryItem extends Component{
    
    openModal = e =>{
        const href = e.target.getAttribute('href')
        this.props.toggleModal()
        this.props.addHrefBigPhoto(href)
    }

    render(){
        
            return(
                this.props.photosArray && this.props.photosArray
            .map(photo =>
            <li onClick={this.openModal} key={nanoid()} id={photo.id} className="gallery-item">    
                <img 
                src={photo.webformatURL} 
                alt={photo.tags} 
                href={photo.largeImageURL}
                className='gallery-photo'/>
            </li>
            )
            )
        
    }
} 

ImageGalleryItem.propTypes = {
    photosArray: PropTypes.array.isRequired,
    addHrefBigPhoto: PropTypes.func.isRequired,
    toggleModal: PropTypes.func.isRequired,
}
export default ImageGalleryItem



