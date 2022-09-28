fetch("./data.json")
.then(response => {
   return response.json();
})
.then(data => {
    console.log(data[0].name);
    console.log(data[0].overview.content);
});


// References
const img = document.querySelector(".main-content__img");
const imgGeology = document.querySelector(".main-content__img-geology");
const imgGeologyPlanet = document.querySelector(".main-content__img-geology-planet");
const imgGeologyPop = document.querySelector(".main-content__img-geology-pop");
const header = document.querySelector(".main-content__header");
const content = document.querySelector(".main-content__articles-desc");
const articleNav = document.querySelectorAll(".main-content__nav-item");
const tempStats = document.querySelectorAll(".stats__card-stat")





// Mobile-view Menu
document.querySelector(".navigation__logo").addEventListener("click", openMenu)
function openMenu() {
    if (document.querySelector(".navigation__links").style.display == "flex") {
        document.querySelector(".navigation__links").style.display = "none";
    } else {
        document.querySelector(".navigation__links").style.display = "flex";
    }
}
function normalizeMenu() {
    document.querySelector(".navigation__links").style.display = "flex";
}


var currentIndex = null;
function handlePlanetData(planetIndex) {
    clearActiveState()
    addActiveState(0)
    normalizeMenu()
    fetch("./data.json")
    .then(response => {
       return response.json();
    })
    .then(data => {
        document.querySelector(".navigation__links").style.display = "flex";
        currentIndex = planetIndex;
        header.innerHTML = data[planetIndex].name;
        content.innerHTML = data[planetIndex].overview.content;
        img.src = data[planetIndex].images.planet;
        imgGeology.classList.add("hidden");
        img.classList.remove("hidden");

        tempStats[0].innerHTML = data[planetIndex].rotation;
        tempStats[1].innerHTML = data[planetIndex].revolution;
        tempStats[2].innerHTML = data[planetIndex].radius;
        tempStats[3].innerHTML = data[planetIndex].temperature;
    });
}

function clearActiveState() {
    for (let i = 0; i < articleNav.length; i++) {
        articleNav[i].classList.remove("main-content__nav-item--active")
    }
}
function addActiveState(num) {
    articleNav[num].classList.add("main-content__nav-item--active");
}


function change2Overview() {
    if (currentIndex == null) {
        return;
    }
    clearActiveState()
    addActiveState(0)
    fetch("./data.json")
    .then(response => {
       return response.json();
    })
    .then(data => {
        content.innerHTML = data[currentIndex].overview.content;
        img.src = data[currentIndex].images.planet;
        imgGeology.classList.add("hidden");
        img.classList.remove("hidden");
        document.querySelector(".navigation__links").style.display = "flex";
    });
}
function change2Structure() {
    if (currentIndex == null) {
        return;
    }
    clearActiveState()
    addActiveState(1)
    fetch("./data.json")
    .then(response => {
       return response.json();
    })
    .then(data => {
        content.innerHTML = data[currentIndex].structure.content;
        img.src = data[currentIndex].images.internal;
        imgGeology.classList.add("hidden");
        img.classList.remove("hidden");
    });
}





function change2Geology() {
    if (currentIndex == null) {
        return;
    }
    clearActiveState()
    addActiveState(2)
    fetch("./data.json")
    .then(response => {
       return response.json();
    })
    .then(data => {
        content.innerHTML = data[currentIndex].geology.content;
        img.src = data[currentIndex].images.internal;
        imgGeology.classList.remove("hidden");
        img.classList.add("hidden");
        imgGeologyPlanet.src = data[currentIndex].images.planet;
        imgGeologyPop.src = data[currentIndex].images.geology;
    });
}
