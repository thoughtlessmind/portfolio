
const moveToAbout = () =>{
    document.getElementById('about').scrollIntoView(true)
}

const moveToWork = () =>{
    document.getElementById('work').scrollIntoView()
}


const options = {
    root: null,
    threshold: 0,
    rootMargin: "-150px"
}

const header = document.querySelector("header")
const sections = document.querySelectorAll(".section")
const mainSection = document.querySelector(".main-container")

const sectionOne = document.querySelector(".about-section");

const observer = new IntersectionObserver(function(entries, observer){
    entries.forEach(entry =>{
        entry.isIntersecting ? header.classList.remove("green-nav") : header.classList.add("green-nav")
        // console.log(entry.target, '-', entry.isIntersecting)
    });
}, options)

observer.observe(mainSection)
