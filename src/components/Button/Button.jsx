import { Component } from 'react'
import './styles.css'
import photosAPI from '../fetchAPI/fetchAPI' 
import { toast } from 'react-toastify'
import PropTypes from 'prop-types'

class Button extends Component {
    moreGallery = () => {
        this.props.loadingToggle(true)
        setTimeout(() => {
            photosAPI.fetchGallery(this.props.wordForUrl, true)
            .then(JSONphotos => {if(JSONphotos.hits.length > 0){
                this.props.morePhotosArray(JSONphotos.hits)
                this.setState({flag:'normal'})
            }

            if(JSONphotos.hits.length === 0){
                toast.error('Pages run out', {
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
 render(){
    return(
        !this.props.didLoading &&
        <div className='containerButton'>
            <button disabled={this.props.didLoading} onClick={this.moreGallery} className="buttonLoadMore">Load More</button>
        </div>
    )
 }
}

Button.propTypes = {
    wordForUrl:PropTypes.string.isRequired,
    morePhotosArray:PropTypes.func.isRequired,
    loadingToggle:PropTypes.func.isRequired,
    didLoading:PropTypes.bool.isRequired,
}

export default Button

