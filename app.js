/* References */
const figureOverview = document.querySelector(".overview");
const figureInternal = document.querySelector(".internal");
const figureGeology = document.querySelector(".geology");
const article01 = document.querySelector(".article-01");
const article02 = document.querySelector(".article-02");
const article03 = document.querySelector(".article-03");
const nav01 = document.querySelector(".nav-01");
const nav02 = document.querySelector(".nav-02");
const nav03 = document.querySelector(".nav-03");




/* Functions */
function removeActive() {
    figureOverview.classList.add("hidden");
    figureInternal.classList.add("hidden");
    figureGeology.classList.add("hidden");
    article01.classList.add("hidden");
    article02.classList.add("hidden");
    article03.classList.add("hidden");
    nav01.classList.remove("active");
    nav02.classList.remove("active");
    nav03.classList.remove("active");
    nav01.classList.remove("inactive");
    nav02.classList.remove("inactive");
    nav03.classList.remove("inactive");
}
function toggleArticle01() {
    removeActive()
    figureOverview.classList.remove("hidden");
    article01.classList.remove("hidden");
    nav01.classList.add("active");
    nav02.classList.add("inactive");
    nav03.classList.add("inactive");
}
function toggleArticle02() {
    removeActive()
    figureInternal.classList.remove("hidden");
    article02.classList.remove("hidden");
    nav01.classList.add("inactive");
    nav02.classList.add("active");
    nav03.classList.add("inactive");
}
function toggleArticle03() {
    removeActive()
    figureOverview.classList.remove("hidden");
    figureGeology.classList.remove("hidden");
    article03.classList.remove("hidden");
    nav01.classList.add("inactive");
    nav02.classList.add("inactive");
    nav03.classList.add("active");
}


nav01.addEventListener("click", toggleArticle01);
nav02.addEventListener("click", toggleArticle02);
nav03.addEventListener("click", toggleArticle03);
