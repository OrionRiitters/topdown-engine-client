import axios from 'axios';

export default {
    getInitialImages: async () => {
        const res = await axios.get('/api/');
        console.log(res);
        return res
    }
}
