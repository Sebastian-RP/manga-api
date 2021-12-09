//Diggy Diggy Hole - Wind rose

const UrlOfApi = 'https://api.jikan.moe/v3'
let urlFinal = ''
let urlFinal2 = ''
let urlGenre = '/search/anime?q=&page=1&genre=';

const fragmenteWithMangas = document.createDocumentFragment()
const mainWrapperListId = document.getElementById('main-wrapper-list-id')
const nameMangaSearchID = document.getElementById('name-manga-search')
const magnifyingGlassIconId = document.getElementById('magnifying-glass-icon-id')
const btnCategoriesId = document.getElementById('btn-categories-id')
const hideLeftBarId = document.getElementById('hide-left-bar-id')
const scrollerId = document.getElementById('scroller-id')

const BagTemporal = nameMangaSearchID.value
console.log("letras = "+ nameMangaSearchID.value);
const remplaceEmptyEspaceBetterRead = BagTemporal.replace(/ /g,"%20");

let mangaSearched = "/search/manga?q="+remplaceEmptyEspaceBetterRead+"&page=1"//url to get the object with de manga with similar name
urlFinal = UrlOfApi+mangaSearched

nameMangaSearchID.addEventListener("keydown", (e)=>{//when you you click de enterkey will search the name of manga in the searchBar
    if (e.keyCode === 13) {
        window.location.reload();
    }
})

magnifyingGlassIconId.addEventListener("click", (e)=>{//search manga
        window.location.reload();
})//when you put the name of the manga

window.addEventListener("KeyboardEvent" ,(e)=>{
    console.log("la tecla oprimida ="+ e.keyCode);
})

scrollerId.addEventListener("click", (e)=>{//select genre
    urlFinal2 = UrlOfApi+urlGenre+e.target.value
    let temporalflag = urlFinal2
    urlFinal2 = temporalflag
    pageLoaded(urlFinal2)
})

function pageLoaded(urlFinal){
    //urlFinal = "https://api.jikan.moe/v3/search/anime?q=&page=1&genre=41"
let idClass = 0;
fetch(urlFinal)
.then(Response => Response.json())
.then(data => {
    const listMangas = data.results
    console.log(listMangas);
    
    listMangas.forEach(individualManga => {
        idClass = idClass+1; //give a diferent id each manga card 
        const newElementManga = document.createElement('li')
        //const newImageManaga = document.createElement('img')
        const newNameManga = document.createElement('h1')
        newNameManga.innerHTML = `${individualManga.title}`
        //newElementManga.insertAdjacentHTML("afterbegin", `<img src="${individualManga.image_url}"></img>`)
        newElementManga.insertAdjacentElement("beforeend", newNameManga)
        newElementManga.setAttribute('id', "image-manga-id"+idClass)
        newElementManga.setAttribute('class', "image-manga")
        newNameManga.setAttribute('class', "name-individual-manga")
        newElementManga.style.backgroundImage = "url('"+individualManga.image_url+"')"
        newElementManga.appendChild(newNameManga)
        fragmenteWithMangas.appendChild(newElementManga)
        urlFinal = ''
    });
    //to avoid mixing mangas from previous genders with appendchild, I used a conditional where if there is a child deleted them and add the new children
    if (mainWrapperListId.childElementCount > 0) {
        while (mainWrapperListId.firstChild) {
            mainWrapperListId.removeChild(mainWrapperListId.firstChild);
        }
        mainWrapperListId.appendChild(fragmenteWithMangas)
    }else{
        mainWrapperListId.appendChild(fragmenteWithMangas)
        nameMangaSearchID.value = ''
    }
})
.catch(err => console.log("hay un problema "+err))
}
pageLoaded(urlFinal)

//---show genre bar when user click on button---
btnCategoriesId.addEventListener("click", (e)=>{
    e.preventDefault();
    hideLeftBarId.classList.toggle("show-left-bar")
})

//colocar algun tipo de contenido por defecto al abrir el sitio, podria hacerse usando un if
//podria hacer que al hacer hover muestre info extra