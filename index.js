const moveToAbout = () => {
    document.getElementById('about').scrollIntoView(true)
}

const moveToWork = () => {
    document.getElementById('work').scrollIntoView()
}

const moveToTop = () => {
    document.getElementById('main-section').scrollIntoView(true)
    console.log('btn clicked')
}


const options = {
    root: null,
    threshold: 0,
    rootMargin: "-150px"
}

const header = document.querySelector("header")
const sections = document.querySelectorAll(".section")
const mainSection = document.querySelector(".main-container")

const bttWrapper = document.getElementById('bttBtn-wrapper')
const veganImage = document.getElementById('vegan-store-image')


veganImage.onclick = ()=>{
    window.open("https://thoughtlessmind.github.io/Vegan-store")
}


const sectionOne = document.querySelector(".about-section");
// bttWrapper.style.display = 'none'

const observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {

        if (entry.isIntersecting) {
            header.classList.remove("green-nav")
            bttWrapper.classList.add("btnWrapperHidden")
            bttWrapper.classList.remove("btnWrapperShow")
            veganImage.pause()
            
        } else{
            header.classList.add("green-nav")
            bttWrapper.classList.add("btnWrapperShow")
            veganImage.play()
        }

            
        // console.log(entry.target, '-', entry.isIntersecting)
    });
}, options)

observer.observe(mainSection)
