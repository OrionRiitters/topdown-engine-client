import axios from 'axios';
import "core-js/stable";
import "regenerator-runtime/runtime";

const fetchData = async () => {
    const requestData = await axios.get('api');
    console.log(requestData)
    
}

const hey = fetchData()
console.log(hey)
console.log('as')