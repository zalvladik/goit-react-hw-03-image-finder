import { Component } from "react"
import { nanoid } from 'nanoid'
import photosAPI from '../fetchAPI/fetchAPI'
import './styles.css'
import { toast } from 'react-toastify';
import PropTypes from 'prop-types'

class ImageGalleryItem extends Component{
    state={
        flag: 'null',
    }

    componentDidUpdate (prevProps, prevState) {
        if(prevProps.wordForUrl !== this.props.wordForUrl){
            
            setTimeout(() =>{
                photosAPI.fetchGallery(this.props.wordForUrl)
            .then(JSONphotos => {
                if(JSONphotos.hits.length > 0){
                    this.props.updatePhotosArray(JSONphotos.hits)
                    this.setState({flag:'normal'})
                }

                if(JSONphotos.hits.length === 0){
                    toast.error('Please write correct request', {
                        position: "top-right",
                        autoClose: 2500,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                        });
                }
              })
              .catch(error => console.log(error))
              .finally(this.props.loadingToggle(false))
            }, 1000)
              
        }
    }
    
    openModal = e =>{
        const overlay = document.querySelector('.overlay') 
        const href = e.target.getAttribute('href')
        this.props.addHrefBigPhoto(href)
        overlay.classList.remove('is-hidden')
    }
    render(){
        if(this.state.flag === 'normal') {
            return this.props.photosArray && this.props.photosArray
            .map(photo =>
            <li onClick={this.openModal} key={nanoid()} id={photo.id} className="gallery-item">    
                <img 
                src={photo.webformatURL} 
                alt={photo.tags} 
                href={photo.largeImageURL}
                className='gallery-photo'/>
            </li>
            )
        } 
    }
} 

ImageGalleryItem.propTypes = {
    wordForUrl: PropTypes.string.isRequired,
    updatePhotosArray: PropTypes.func.isRequired,
    photosArray: PropTypes.array.isRequired,
    loadingToggle: PropTypes.func.isRequired,
    addHrefBigPhoto: PropTypes.func.isRequired,
}
export default ImageGalleryItem



