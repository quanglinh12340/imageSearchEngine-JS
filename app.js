const searchForm = document.getElementById('search-form')
const searchBox = document.getElementById('search-box')
const searchResult = document.getElementById('search-result')
const showMoreBtn = document.getElementById('show-more-btn')

const accessKey = 'Wp-zhMSz1KEzhP62wQMFASp2DGJ6B8XOrqekqXtpmn8'
let page = 1

async function searchImage() {
    let keyword = searchBox.value
    const response = await fetch(`https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=Wp-zhMSz1KEzhP62wQMFASp2DGJ6B8XOrqekqXtpmn8&per_page=12`)
    const data = await response.json()

    const results = data.results

    if (page === 1) {
        searchResult.innerHTML = ''
    }

    results.map(result => {
        const image = document.createElement('img')
        image.src = result.urls.small
        const imageLink = document.createElement('a')
        imageLink.href = result.links.html

        imageLink.appendChild(image)
        searchResult.appendChild(imageLink)
    })
    showMoreBtn.style.display = 'block'
}

searchForm.addEventListener('submit', (e) => {
    e.preventDefault()
    searchImage()
})

showMoreBtn.addEventListener('click', () => {
    page++
    searchImage()
})