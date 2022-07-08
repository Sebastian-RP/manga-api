//Diggy Diggy Hole - Wind rose

const UrlOfApi = 'https://api.jikan.moe/v3'
let urlFinal = ''
let urlFinal2 = ''
let urlGenre = '/search/anime?q=&page=1&rated=r17&genre=';

const fragmenteWithMangas = document.createDocumentFragment()
const mainWrapperListId = document.getElementById('main-wrapper-list-id')
const nameMangaSearchID = document.getElementById('name-manga-search')
const magnifyingGlassIconId = document.getElementById('magnifying-glass-icon-id')
const btnCategoriesId = document.getElementById('btn-categories-id')
const hideLeftBarId = document.getElementById('hide-left-bar-id')
const scrollerId = document.getElementById('scroller-id')

const BagTemporal = nameMangaSearchID.value
const remplaceEmptyEspaceBetterRead = BagTemporal.replace(/ /g,"%20");
let mangaSearched;
let SearchedNameCategoriesArray = [];

if (remplaceEmptyEspaceBetterRead) {
    mangaSearched = "/search/manga?q="+remplaceEmptyEspaceBetterRead+"&page=1";//url to get the object with de manga with similar name
    //un archivo aparte con una funcione que tome parametro y retorne el arreglo modificado, primeras shonen y asi
    let action = UrlOfApi+"/search/manga?q="+remplaceEmptyEspaceBetterRead+"&page=1&genre=1";
    let adventure = UrlOfApi+"/search/manga?q="+remplaceEmptyEspaceBetterRead+"&page=1&genre=2";
    let cars = UrlOfApi+"/search/manga?q="+remplaceEmptyEspaceBetterRead+"&page=1&genre=3";
    // let comedy = UrlOfApi+"/search/manga?q="+remplaceEmptyEspaceBetterRead+"&page=1&genre=4";
    let avanteGarde = UrlOfApi+"/search/manga?q="+remplaceEmptyEspaceBetterRead+"&page=1&genre=5";
    // let demons = UrlOfApi+"/search/manga?q="+remplaceEmptyEspaceBetterRead+"&page=1&genre=6";
    let mystery = UrlOfApi+"/search/manga?q="+remplaceEmptyEspaceBetterRead+"&page=1&genre=7";
    // let drama = UrlOfApi+"/search/manga?q="+remplaceEmptyEspaceBetterRead+"&page=1&genre=8";
    // let fantasy = UrlOfApi+"/search/manga?q="+remplaceEmptyEspaceBetterRead+"&page=1&genre=10";
    let game = UrlOfApi+"/search/manga?q="+remplaceEmptyEspaceBetterRead+"&page=1&genre=11";
    let historical = UrlOfApi+"/search/manga?q="+remplaceEmptyEspaceBetterRead+"&page=1&genre=13";
    let horror = UrlOfApi+"/search/manga?q="+remplaceEmptyEspaceBetterRead+"&page=1&genre=14";
    let kids = UrlOfApi+"/search/manga?q="+remplaceEmptyEspaceBetterRead+"&page=1&genre=15";
    let martialArts = UrlOfApi+"/search/manga?q="+remplaceEmptyEspaceBetterRead+"&page=1&genre=17";
    let mecha = UrlOfApi+"/search/manga?q="+remplaceEmptyEspaceBetterRead+"&page=1&genre=18";
    let samurai = UrlOfApi+"/search/manga?q="+remplaceEmptyEspaceBetterRead+"&page=1&genre=19";
    // let romance = UrlOfApi+"/search/manga?q="+remplaceEmptyEspaceBetterRead+"&page=1&genre=22";
    // let school = UrlOfApi+"/search/manga?q="+remplaceEmptyEspaceBetterRead+"&page=1&genre=23";
    let sciFi = UrlOfApi+"/search/manga?q="+remplaceEmptyEspaceBetterRead+"&page=1&genre=24";
    let shoujo = UrlOfApi+"/search/manga?q="+remplaceEmptyEspaceBetterRead+"&page=1&genre=25";
    let shounen = UrlOfApi+"/search/manga?q="+remplaceEmptyEspaceBetterRead+"&page=1&genre=27";
    let space = UrlOfApi+"/search/manga?q="+remplaceEmptyEspaceBetterRead+"&page=1&genre=29";
    let sports = UrlOfApi+"/search/manga?q="+remplaceEmptyEspaceBetterRead+"&page=1&genre=30";
    let superPower = UrlOfApi+"/search/manga?q="+remplaceEmptyEspaceBetterRead+"&page=1&genre=31";
    let vampire = UrlOfApi+"/search/manga?q="+remplaceEmptyEspaceBetterRead+"&page=1&genre=32";
    let sliceOfLife = UrlOfApi+"/search/manga?q="+remplaceEmptyEspaceBetterRead+"&page=1&genre=36";
    // let supernatural = UrlOfApi+"/search/manga?q="+remplaceEmptyEspaceBetterRead+"&page=1&genre=37";
    let military = UrlOfApi+"/search/manga?q="+remplaceEmptyEspaceBetterRead+"&page=1&genre=38";
    let police = UrlOfApi+"/search/manga?q="+remplaceEmptyEspaceBetterRead+"&page=1&genre=39";
    let psychological = UrlOfApi+"/search/manga?q="+remplaceEmptyEspaceBetterRead+"&page=1&genre=40";
    let seinen = UrlOfApi+"/search/manga?q="+remplaceEmptyEspaceBetterRead+"&page=1&genre=41";
    let josei = UrlOfApi+"/search/manga?q="+remplaceEmptyEspaceBetterRead+"&page=1&genre=42";
    let doujinshi = UrlOfApi+"/search/manga?q="+remplaceEmptyEspaceBetterRead+"&page=1&genre=43";

    SearchedNameCategoriesArray = [action, adventure, cars, avanteGarde, mystery, game, historical, horror, kids, martialArts, mecha, samurai, sciFi, shoujo, shounen, space, sports, superPower, vampire, sliceOfLife, military, police, psychological, seinen, josei, doujinshi];
}else{
    const arrayGenres = [15, 1, 15, 3, 15, 13, 15, 17, 15, 18, 15, 19, 15, 24, 31, 15]; //when load the page show one of this categories id, mi favorite is 15 
    let valueRandom = arrayGenres[Math.floor(Math.random()*(arrayGenres.length))];
    mangaSearched = `/search/manga?q=&page=2&genre=${valueRandom}&limit=48` //when I open the page, load cards
}

urlFinal = UrlOfApi+mangaSearched

nameMangaSearchID.addEventListener("keydown", (e)=>{//when you you click de enterkey will search the name of manga in the searchBar
    if (e.keyCode === 13) {
        window.location.reload();
    }
})

magnifyingGlassIconId.addEventListener("click", (e)=>{//search manga
        window.location.reload();
})//when you put the name of the manga

scrollerId.addEventListener("click", (e)=>{//select genre
    urlFinal2 = UrlOfApi+urlGenre+e.target.value
    let temporalflag = urlFinal2
    urlFinal2 = temporalflag
    pageLoaded(urlFinal2)
})

function pageLoaded(urlFinal){
    //urlFinal = "https://api.jikan.moe/v3/search/anime?q=&page=1&genre=41"
let idClass = 0;
let categoriesSearchedArray = [];

//condicional si hay elementos provenientes de la barra de busqueda, ejecute este fetch, y otro if si se enviaron datos desde ahí
if (remplaceEmptyEspaceBetterRead) {
    SearchedNameCategoriesArray.map(category => fetch(category)
    .then(Response => Response.json())
    .then(data => {
        if (data.results) {
            categoriesSearchedArray.push(...data.results);
        }
    })
    )
}

fetch(urlFinal)
.then(Response => Response.json())
.then(data => {
    let listMangas;
    if (categoriesSearchedArray[0]) {
        //delete that mangas
        listMangas = categoriesSearchedArray.filter((manga) => manga.title != "Devil Loli" || manga.title != "Oku made Ippai Aishite" || manga.title != "Yankee Girl no Namaiki Oppai ni Kachikomi!! Anthology Comic");
    }else{
        listMangas = data.results
    }
    console.log(listMangas);

    listMangas.forEach(individualManga => {
        idClass = idClass+1; //give a diferent id each manga card 
        const newElementManga = document.createElement('li')
        const newNameManga = document.createElement('h1')
        newNameManga.innerHTML = `${individualManga.title}`
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
