import axios from 'axios';

const fetchData = async () => {
    const requestData = await axios.get('/api');
    console.log(requestData)
    
}

export default fetchData