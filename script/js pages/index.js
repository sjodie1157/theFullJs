
// navbar
// elements 
let navSecEl = document.createElement('section')
let navEl = document.createElement('nav')
let ulEl = document.createElement('ul')
let liEl = document.createElement('li')

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

// body content
let bgimg = document.getElementsByTagName('body')[0]
let mainEl = document.createElement('main')
let mainH1El = document.createElement('h1')
let mainPEl = document.createElement('P')

// issue classes , id and content
bgimg.setAttribute('id','bgimg')
mainEl.classList.add('main')
mainH1El.classList.add('animation')
mainPEl.classList.add('animation')

// append body content
mainEl.appendChild(mainH1El)
mainEl.appendChild(mainPEl)
document.body.appendChild(mainEl)
mainH1El.innerText = `Modern Muse`
mainPEl.innerText = `Welcome to Modern Muse! Where style meets confidence and every outfit tells a unique story. Step into a world of fashion that empowers you to express your individuality. Our curated collection awaits, ready to inspire your wardrobe journey. Enjoy the experience and embrace your fashion journey with us!`

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