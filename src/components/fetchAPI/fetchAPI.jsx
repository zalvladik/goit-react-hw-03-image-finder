let numberPage = 1;
let word = '';

function  fetchGallery (wordForUrl, button = false) {

        if(wordForUrl !== word){
            numberPage = 1;
        }
        if(button === true){
            numberPage = numberPage + 1
        }
    
        word = wordForUrl
        const API_KEY = '35063138-0f7111e05497fae6e002d2e8a'
        const MAIN_URL = 'https://pixabay.com/api/'
    return fetch(`${MAIN_URL}?q=${word}&page=${numberPage}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`).then(response =>  {
        if(response.ok){
            return response.json()
        }
    
        return Promise.reject(new Error('error'))
    }
    )
    
    }
 
    const api = {
        fetchGallery
    }


export default api