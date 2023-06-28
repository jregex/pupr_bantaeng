import Axios from 'axios'

const axios = Axios.create({
    baseURL: 'https://ticketorder.site/api',
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
    },
    withCredentials: true,
})

export default axios
