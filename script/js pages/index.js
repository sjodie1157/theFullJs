
// navbar
// elements 
let navSecEl = document.createElement('section')
let navEl = document.createElement('nav')
let ulEl = document.createElement('ul')

// issue classes , id and content
let pages = ['About','Checkout','Modern Muse','Contact','Products']
navSecEl.setAttribute('id','nav-section')

// pages funtion
pages.forEach((links) => {
    if(links === 'Modern Muse'){
    return ulEl.innerHTML += `<a href='../index.html'>ModernMuse</a>`
    };
    return ulEl.innerHTML += `<a href='../html/${links.toLowerCase()}.html'>${links.toLowerCase()}</a>`
});

// appennding tags navbar
navSecEl.appendChild(navEl)
navEl.appendChild(ulEl)
document.body.appendChild(navSecEl)

// body content
let bgimg = document.getElementsByTagName('body')[0]
bgimg.setAttribute('id','bgimg')

// footer
// elements
let fterEl = document.createElement('footer')
let fterDivEl = document.createElement('div')
let fterDivEl1 = document.createElement('div')
let fterDivEl2 = document.createElement('div')
let fterDivEl3 = document.createElement('div')
let fterDivEl4 = document.createElement('div')
let fterPEl1 = document.createElement('p')
let fterPEl2 = document.createElement('p')
let fterPEl3 = document.createElement('p')
let fterPEl4 = document.createElement('p')

// issue classes , id and content
fterEl.setAttribute('id','footer')
fterDivEl.classList.add('box1')

// footer bottom links
// first array
let ftrarr1 = [' Email us ',' FAQ ',' Product Care ',' Stores ']
ftrarr1.forEach((footlink)=>{
    fterPEl1.innerText += `${footlink}`
})

// second array
let ftrarr2 = [' Repairs ',' Personalisation ',' Recommended Dry-cleaners',' Dry-cleaners ']
ftrarr2.forEach((footlink)=>{
    fterPEl1.innerText += `${footlink}`
})

// footer append
fterEl.appendChild(fterDivEl)
fterDivEl.appendChild(fterDivEl1)
fterDivEl.appendChild(fterDivEl2)
fterDivEl.appendChild(fterDivEl3)
fterDivEl.appendChild(fterDivEl4)
fterDivEl1.appendChild(fterPEl1)
fterDivEl2.appendChild(fterPEl2)
fterDivEl3.appendChild(fterPEl3)
fterDivEl4.appendChild(fterPEl4)
document.body.appendChild(fterEl)