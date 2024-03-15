const root = document.querySelector(':root')
const rootStyle = getComputedStyle(root)
// const searchBtnColor = rootStyle.getPropertyValue('--p_op95_color')
// console.log(rootStyle)

const showSearchBtn = document.querySelector('.show_search')
const searchBar = document.querySelector('.search_bar')
const searchInput = document.querySelector('.search_input')
const searchCancelBtn = document.querySelector('.search-cancel-btn')
const accBtn = document.querySelector('.account.dropBtn')

// evenement sur la search bar pr la faire apparaitre et disparaitre

showSearchBtn.addEventListener('click', (e) => {
    searchBar.classList.toggle('search_bar_show')
    if(searchBar.classList.contains('search_bar_show')){
        showSearchBtn.querySelector('.bi-search-show').style.opacity = 0
        showSearchBtn.querySelector('.bi-search-hidden').style.opacity = 1
        showSearchBtn.querySelector('.show_search-btn').style.backgroundColor = rootStyle.getPropertyValue('--p_op95_color')
        searchBar.classList.add('boxShadow')
    }else{
        showSearchBtn.querySelector('.bi-search-hidden').style.opacity = 0
        showSearchBtn.querySelector('.bi-search-show').style.opacity = 1
        showSearchBtn.querySelector('.show_search-btn').style.backgroundColor = 'transparent'
        searchBar.classList.remove('boxShadow')
    }
})

// evenement sur le boutton account pr la fair apparaitre et disparaitre

accBtn.addEventListener(('click'), (e) => {
    accBtn.querySelector('.up_down_i').classList.toggle('active')

    e.currentTarget.nextElementSibling.classList.toggle('show_drop')

})

//script de la bar de recherche

searchBar.addEventListener('submit', (e) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const searchKeyWord = formData.get('search')
    console.log(searchKeyWord)
})

searchInput.addEventListener('input', (e) => {
   if(e.currentTarget.value.length > 0){
        searchCancelBtn.style.visibility = 'visible'
    }else{
        searchCancelBtn.style.visibility = 'hidden'
    }
})

searchCancelBtn.addEventListener('click', (e) => {
    searchInput.value = ''
    e.currentTarget.style.visibility = 'hidden'
    searchInput.focus()
})

// event sur le document
