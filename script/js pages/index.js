// navbar

// elements 
let navSecEl = document.createElement('section')
let navEl = document.createElement('nav')
let ulEl = document.createElement('ul')
let liEl = document.createElement('li')

// array of li 
let pages = ['About','Checkout','Modern Muse','Contact','Products']

// issue classes , id and content
navSecEl.classList.add('nav-section')
ulEl.setAttribute('id','list')

// pages funtion
pages.forEach((links) => {
    if(links == 'Modern Muse'){
    return ulEl.innerHTML += `<li><a href='../index.html'>Modern Muse</a></li>`
    }
    else{
    return ulEl.innerHTML += `<li><a href='../html/${links}.html'>${links}</a></li>`
    }
    
});

// appennding tags navbar
navSecEl.appendChild(navEl)
navEl.appendChild(ulEl)
ulEl.appendChild(liEl)
document.body.appendChild(navSecEl)

// body elements
let bgimg = document.getElementsByTagName('body')[0]
let mainEl = document.createElement('main')
let section1 = document.createElement('section')
let section2 = document.createElement('section')
let section3 = document.createElement('section')
let secH1El1 = document.createElement('h1')
let secPEl1 = document.createElement('p')
let secH1El2 = document.createElement('h1')
let secPEl2 = document.createElement('div')
let secH1El3 = document.createElement('h1')
let secPEl3 = document.createElement('p')

// added contet

// section 1
secH1El1.innerText += `Groomed To Perfection`
secPEl1.innerText += `Welcome to Modern Muse, where style meets confidence! Step into a world of empowerment and fashion that celebrates the unique and fabulous you. Let your wardrobe tell your story, and let the journey to self-expression begin! Happy shopping`

// section 2
secH1El2.innerText += `Partnered With`
secPEl2.innerHTML += `<img src="https://i.postimg.cc/T2Hq08db/Veg-News-Gucci-Logo.jpg" alt="gucci"><img src="https://i.postimg.cc/TP3nnGyB/fe2efc6ce83593ef1bb3875f97e9561e.jpg" alt="prada"><img src="https://i.postimg.cc/htLqVRF8/R.jpg" alt="versace">` 

// section 3
secH1El3.innerText += 
secPEl3.innerText

// issue classes , id and content
bgimg.setAttribute('id','bgimg')
mainEl.classList.add('main')
section1.setAttribute('class', 'sec-1')
secH1El1.classList.add('animate')
secH1El2.classList.add('animate')
secH1El3.classList.add('animate')
secPEl1.classList.add('animate')
secPEl2.classList.add('animate')
secPEl3.classList.add('animate')
section2.setAttribute('class', 'sec-2')
section3.setAttribute('class', 'sec-3')

// append body content
section1.appendChild(secH1El1)
section1.appendChild(secPEl1)
section2.appendChild(secH1El2)
section2.appendChild(secPEl2)
section3.appendChild(secH1El3)
section3.appendChild(secPEl3)
mainEl.appendChild(section1)
mainEl.appendChild(section2)
mainEl.appendChild(section3)
document.body.appendChild(mainEl)

// animations 

let sections = document.querySelectorAll('section');
    window.onscroll = () =>{
        sections.forEach(sec=> {
            let top = window.scrollY;
            let offset = sec.offsetTop;
            let height = sec.offsetHeight;

            if (top >= offset && top < offset + height) {
                sec.classList.add('show-animate');
            }
            else{
                sec.classList.remove('show-animate');
            }
        })
    }


// footer

// elements
let fterEl = document.createElement('footer')
let fterDivEl = document.createElement('div')
let fterDivEl1 = document.createElement('div')
let fterDivEl2 = document.createElement('div')
let fterDivEl3 = document.createElement('div')
let fterDivEl4 = document.createElement('div')
let fterDivEl5 = document.createElement('div')
let footerDivEl = document.createElement('div')


// issue classes , id and content
fterEl.classList.add('footer')
fterDivEl.classList.add('box1')
footerDivEl.classList.add('copywrite')

// footer bottom links

// first array
let ftrarr1 = [' Help ',' Email ',' FAQ ',' Product Care ', ' Stores ']
ftrarr1.forEach((footlink)=>{
    return fterDivEl1.innerHTML += `<p>${footlink}</p>`
})

// second array
let ftrarr2 = [' Services ',' Repairs ',' Persionalisation ',' Recomended Dry-cleaners ']
ftrarr2.forEach((footlink)=>{
    return fterDivEl2.innerHTML += `<p>${footlink}</p>`
})

// third array
let ftrarr3 = [' About Store ',' Fasion Shows ',' Arts and Culture ',' Latest News ', ' Careers ']
ftrarr3.forEach((footlink)=>{
    return fterDivEl3.innerHTML += `<p>${footlink}</p>`
})

// fourth array
let ftrarr4 = [' Connect ',' Follow Us ']
ftrarr4.forEach((footlink)=>{
    return fterDivEl4.innerHTML += `<p>${footlink}</p>`
})

// copywrite claim
    footerDivEl.innerHTML += `<p>2023 @ Modern Muse</p>`
    footerDivEl.innerHTML += `<p>J.Smith : Founder & C.E.O</p>`


// footer append
fterEl.appendChild(fterDivEl)
fterEl.appendChild(footerDivEl)
fterDivEl.appendChild(fterDivEl1)
fterDivEl.appendChild(fterDivEl2)
fterDivEl.appendChild(fterDivEl3)
fterDivEl.appendChild(fterDivEl4)
document.body.appendChild(fterEl)