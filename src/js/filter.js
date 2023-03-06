
const searchFormEl = document.querySelector(`.search`)

searchFormEl.search.addEventListener(`input`, () => {
    const searchValue = searchFormEl.search.value.toLowerCase()
    const cardItem = document.querySelectorAll(`.cards__item`)
    const cardsTitle = document.querySelectorAll(`.cards__title`)
    cardsTitle.forEach((title, i) => {
        if(title.textContent.toLowerCase().includes(searchValue)){
            cardItem[i].style.display = `block`
        }else{
            cardItem[i].style.display = `none`
        }
    })
})

const searchSelect = document.querySelectorAll(`.search__select-list li`)
const searchSelectSpan = document.querySelector(`.search__select span`)
console.log(searchSelect);

import { updateUi } from './updadeUi'
import reques from './request'

searchSelect.forEach((li) => {
    li.addEventListener('click', () => {
        searchSelectSpan.textContent = li.textContent
        let filterAPI

        if(li.textContent == `All`){
            filterAPI = 'https://restcountries.com/v3.1/all'
        }else{
            filterAPI = `https://restcountries.com/v3.1/region/${li.textContent}`
        }
        reques(filterAPI)
        .then((data) => {
            updateUi(data)
        })
        .catch((err) => {
            alert(err.message)
        })
    })
})