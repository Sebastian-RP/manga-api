//Diggy Diggy Hole - Wind rose

const UrlOfApi = 'https://api.jikan.moe/v3'
var urlFinal = ''
let urlGenre = '/search/anime?q=&page=1&genre=';

const fragmenteWithMangas = document.createDocumentFragment()
const mainWrapperListId = document.getElementById('main-wrapper-list-id')
const nameMangaSearchID = document.getElementById('name-manga-search')
const magnifyingGlassIconId = document.getElementById('magnifying-glass-icon-id')
const hideLeftBarId = document.getElementById('hide-left-bar-id')
const scrollerId = document.getElementById('scroller-id')

magnifyingGlassIconId.addEventListener("click", ()=>{//search manga
        window.location.reload();
})//when you put the name of the manga

const BagTemporal = nameMangaSearchID.value
const remplaceEmptyEspaceBetterRead = BagTemporal.replace(/ /g,"%20");

let mangaSearched = "/search/manga?q="+remplaceEmptyEspaceBetterRead+"&page=1"//url to get the object with de manga with similar name
urlFinal = UrlOfApi+mangaSearched

scrollerId.addEventListener("click", (e)=>{//select genre
    let text =  e.target.value//take the value of the genre in the left-bar
    console.log(text);
    console.log(UrlOfApi+urlGenre+text);
    urlFinal = UrlOfApi+urlGenre+text
    
    pageLoaded(urlFinal)
    window.location.reload();
})

console.log("aca trataremos de: "+ urlFinal)

function pageLoaded(urlFinal){
    console.log("entramos y la url es"+urlFinal);
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
        const newNameManga = document.createElement('h2')
        newNameManga.innerHTML = `${individualManga.title}`
        //newElementManga.insertAdjacentHTML("afterbegin", `<img src="${individualManga.image_url}"></img>`)
        newElementManga.insertAdjacentElement("beforeend", newNameManga)
        newElementManga.setAttribute('id', "image-manga-id"+idClass)
        newElementManga.setAttribute('class', "image-manga")
        newNameManga.setAttribute('class', "name-individual-manga")

        newElementManga.style.position = "relative"
        newElementManga.style.backgroundImage = "url('"+individualManga.image_url+"')"
        //estilos del texto del nombre del manga
        newNameManga.style.position = "absolute"
        newNameManga.style.bottom = "0"
        newNameManga.style.left = "2%"
        newNameManga.style.color = "black"
        newNameManga.style.textShadow = "-1.5px 0 white, 0 1.5px white, 1.5px 0 white, 0 -1.5px white"

        newElementManga.appendChild(newNameManga)
        fragmenteWithMangas.appendChild(newElementManga)
    });
    mainWrapperListId.appendChild(fragmenteWithMangas)
})
.catch(err => console.log(err))
}
console.log("aca el final " + urlFinal);
pageLoaded(urlFinal)

//agregar la barra con los generos de manga, y al dar click te muestre ejemplos
//al dar click sobre la tarjeta te de info extra
//colocar algun tipo de contenido po defecto al abrir el sitio, podria hacerse usando un if
//el logo me redirija a la documentacion de la api
//podria hacer que al hacer hover muestre info extra