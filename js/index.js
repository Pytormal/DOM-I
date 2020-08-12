const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png",
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",

    email: "sales@greatidea.io",
  },
  footer: {
    copyright: "Copyright Great Idea! 2018",
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute("src", siteContent["cta"]["img-src"]);

let midImg = document.getElementById("middle-img");
midImg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);


const navBar = document.querySelectorAll('nav a');
console.log(siteContent.nav["nav-item-1"])

navBar[0].textContent = siteContent.nav["nav-item-1"];
navBar[1].textContent = siteContent.nav["nav-item-2"];
navBar[2].textContent = siteContent.nav["nav-item-3"];
navBar[3].textContent = siteContent.nav["nav-item-4"];
navBar[4].textContent = siteContent.nav["nav-item-5"];
navBar[5].textContent = siteContent.nav["nav-item-6"];
// aTags.forEach(e => {
//   e.style.backgroundColor ="hotpink"
// })


const title = document.querySelector(".cta-text h1")
console.log(siteContent.cta.h1)

// title.textContent = siteContent.cta.h1 
title.textContent = siteContent["cta"]["h1"]

const button = document.querySelector(".cta-text button")
console.log(siteContent.cta.button)

button.textContent = siteContent['cta']['button']

const subTitle = document.querySelectorAll('.text-content h4')
console.log(subTitle)

subTitle[0].textContent = siteContent['main-content']['features-h4']
subTitle[1].textContent = siteContent['main-content']['about-h4']
subTitle[2].textContent = siteContent['main-content']['services-h4']
subTitle[3].textContent = siteContent['main-content']['product-h4']
subTitle[4].textContent = siteContent['main-content']['vision-h4']


const subContent = document.querySelectorAll('.text-content p')
console.log(subContent)

subContent[0].textContent = siteContent['main-content']['features-content']
subContent[1].textContent = siteContent['main-content']['about-content']
subContent[2].textContent = siteContent['main-content']['services-content']
subContent[3].textContent = siteContent['main-content']['product-content']
subContent[4].textContent = siteContent['main-content']['vision-content']

const contact = document.querySelector('.contact h4')
console.log(contact)

contact.textContent = siteContent['contact']['contact-h4']

const subContact = document.querySelectorAll('.contact p')
subContact[0].textContent = siteContent['contact']['address']
subContact[1].textContent = siteContent['contact']['phone']
subContact[2].textContent = siteContent['contact']['email']

const rightCopy = document.querySelector('footer p')
rightCopy.textContent = siteContent['footer']['copyright']
console.log(rightCopy)