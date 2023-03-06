import '../css/main.css'
import './mode'

import reques from './request'
import { createCountryInfo } from './updadeUi'

const queryString = window.location.search

const urlParams = new URLSearchParams(queryString)
const country = urlParams.get('country')
const countryAPI = `https://restcountries.com/v3.1/${country}`

reques(countryAPI)
.then((data) => {
    createCountryInfo(data[0])
})
.catch((err) => {
    alert(err.message)
})