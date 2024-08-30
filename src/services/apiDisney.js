const { default: axios } = require("axios");

const apiDiseny = axios.create({
    baseURL:'https://api.disneyapi.dev'



})

export default apiDiseny