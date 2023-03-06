const loaderEl = document.querySelector(`.loader`)

const loader = (info) => {
  if(info){
    loaderEl.classList.remove(`hidden`)
  }
  else{
    loaderEl.classList.add(`hidden`)
  }
}

export default loader