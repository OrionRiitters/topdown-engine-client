import axios from 'axios';

export default {
    getInitialData: async () => {
        const res = await axios.get('/api');
        return res
    }
}
