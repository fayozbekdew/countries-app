const mode = document.querySelector(`.header__dark-mode`)
const modeText = document.querySelector(`.header__dark-mode span`)
console.log(modeText);
// const body = document.querySelector(`.body`)
const modeFromLocal = localStorage.getItem(`mode`) ? localStorage.getItem(`mode`) : null


if(modeFromLocal){
    document.body.classList.add(`dark-mode`)
}
mode.addEventListener('click', () => {
    document.body.classList.toggle(`dark-mode`)
    if(modeText.textContent == `Dark Mode`){
        modeText.textContent = `Light Mode`
    }
    else{
        modeText.textContent = `Dark Mode`
    }
    modeFromLocal ? localStorage.setItem(`mode`, ``) : localStorage.setItem(`mode`, `dark`) 
})