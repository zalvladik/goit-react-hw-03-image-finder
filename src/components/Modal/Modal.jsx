import { Component } from "react"
import PropTypes from 'prop-types'
import './styles.css'

class Modal extends Component{
    
    closeModalFunc = e => {
        if(e.currentTarget === e.target){
            const modal = document.querySelector('.overlay')
            modal.classList.add('is-hidden')
            this.props.addHrefBigPhoto('')
        }
    }

    render(){
        return(
            <div onClick={this.closeModalFunc}className ="overlay is-hidden">
                <div className ="modal">
                    <img src={this.props.hrefBigPhoto} alt="" className='modalPhoto' />
                </div>
            </div>
        )
    }
}

Modal.propTypes = {
    hrefBigPhoto: PropTypes.string.isRequired,
    addHrefBigPhoto: PropTypes.func.isRequired,
}

export default Modal