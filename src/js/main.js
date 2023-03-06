import '../css/main.css'

import reques from './request'

import { updateUi } from './updadeUi'

import './filter'

import './/mode'
const API = 'https://restcountries.com/v3.1/all'

reques(API)
.then((data) => {
    updateUi(data);
})
.catch((err) => {
    alert(err.message);
})