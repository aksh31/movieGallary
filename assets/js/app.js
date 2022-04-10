let cl = console.log;

const showModal = document.getElementById("showModal");
const myModal = document.getElementById("myModal");
const backDrop = document.getElementById("backDrop");
const myClose = Array.from(document.querySelectorAll(".myClose"));
const title = document.getElementById("title");
const imgUrl = document.getElementById("imgUrl");
const rating = document.getElementById("rating");
const addMovie = document.getElementById("addMovie");
const myMovie = document.getElementById("myMovie");
let movieArray = [];

const onModalHandler = (eve) =>{
    toggleToShow();
}

const onCloseToHandler = (e) =>{
    toggleToShow();
}
function toggleToShow(){
    backDrop.classList.toggle("show");
    myModal.classList.toggle("show");
}

const getMovieInfo = (eve) =>{
    let obj = {
        title : title.value,
        imgUrl : imgUrl.value,
        rating : rating.value,
    }
    movieArray.push(obj);

    let result = '';
    movieArray.forEach(ele =>{
        result += 
        `<div class="col-md-4">
            <div class="card">
                <div class="card-body">
                    <h4>${ele.title}</h4>
                    <img src="${ele.imgUrl}" alt="myMovie">
                    <p>${ele.rating}/5</p>
                </div>
            </div>
        </div>`;
    })
    myMovie.innerHTML = result;
    title.value = '';
    imgUrl.value = '';
    rating.value = '';
    toggleToShow();
}


showModal.addEventListener("click", onModalHandler);

myClose.forEach(btn =>{
    btn.addEventListener("click", onCloseToHandler)
});

addMovie.addEventListener("click", getMovieInfo);