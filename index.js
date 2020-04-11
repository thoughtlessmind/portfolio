
const moveToAbout = () =>{
    document.getElementById('about').scrollIntoView(true)
}

const moveToWork = () =>{
    document.getElementById('work').scrollIntoView()
}

// window.addEventListener("scroll", (event)=>{
//     console.log("scrolled")
//     var scroll = this.scrollY
//     if(scroll > 20){
//         document.getElementById('about').scrollIntoView({
//             block: 'start',
//             behavior: 'smooth'
//         })
//     }
// })

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
        // if(!entry.isIntersecting){
        //     header.classList.toggle("green-nav")
        // }
        entry.isIntersecting ? header.classList.remove("green-nav") : header.classList.add("green-nav")
        console.log(entry.target, '-', entry.isIntersecting)
        // entry.target.classList.toggle('green-nav')
    });
}, options)

// observer.observe(sectionOne)

// sections.forEach(section =>{
//     observer.observe(section)
// })

observer.observe(mainSection)
