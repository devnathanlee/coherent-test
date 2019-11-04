const axios = require('axios')
const baseURL = 'https://newsapi.org/v2/'
const apiKey = '8f39bf186b434c36810f7c598682729c'

const request = axios.create({
    baseURL,
    timeout: 1000 * 20, // 20s
    headers: { 'Content-Type': 'application/json' }
})

const NewsAPI = {}

NewsAPI.getNewsList = function * (option) {
    const response = yield new Promise((resolve, reject) => {
        return request.get(`everything?apiKey=${apiKey}&sources=${option.sources}&pageSize=${option.pageSize}&page=${option.page}`).then((response) => {
            return resolve(response.data)
        }).catch((e) => {
            // TODO-N: handle the error
            return resolve(e)
        })
    })

    return response
}

module.exports = NewsAPI
