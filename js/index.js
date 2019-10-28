const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2018"
  },
};


//begin header stuff
// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


//Here, we select ALL <a> tags nested inside a <nav> tag and put that into the newNav variable.
let newNav = document.querySelectorAll("nav a");

//Then, for each item (each <a> tag) in newNav, we add text to the element.
newNav.forEach((element, index) => {
  element.textContent = siteContent.nav[`nav-item-${index + 1}`];
});

//end of header stuff

//begin CTA section
//Changing h1 children of cta-text class to our h1 data.
document.querySelector(".cta-text h1").textContent = siteContent.cta.h1;

document.querySelector(".cta-text button").textContent = siteContent.cta.button;

document.querySelector("#cta-img").src = siteContent.cta["img-src"];

//end CTA section

//begin main-content section

// console.log(siteContent["main-content"]["features-content"]);

//start of top-content
document.querySelector(`.top-content .text-content:nth-of-type(1) h4`).textContent = siteContent["main-content"]["features-h4"];
document.querySelector(`.top-content .text-content:nth-of-type(1) p`).textContent = siteContent["main-content"]["features-content"];
document.querySelector(`.top-content .text-content:nth-of-type(2) h4`).textContent = siteContent["main-content"]["about-h4"];
document.querySelector(`.top-content .text-content:nth-of-type(2) p`).textContent = siteContent["main-content"]["about-content"];
//end of top-content

document.querySelector(`#middle-img`).src = siteContent["main-content"]["middle-img-src"];

//start of bottom-content

//services, product, vision
document.querySelector(`.bottom-content .text-content:nth-of-type(1) h4`).textContent = siteContent["main-content"]["services-h4"];
document.querySelector(`.bottom-content .text-content:nth-of-type(1) p`).textContent = siteContent["main-content"]["services-content"];
document.querySelector(`.bottom-content .text-content:nth-of-type(2) h4`).textContent = siteContent["main-content"]["product-h4"];
document.querySelector(`.bottom-content .text-content:nth-of-type(2) p`).textContent = siteContent["main-content"]["product-content"];
document.querySelector(`.bottom-content .text-content:nth-of-type(3) h4`).textContent = siteContent["main-content"]["vision-h4"];
document.querySelector(`.bottom-content .text-content:nth-of-type(3) p`).textContent = siteContent["main-content"]["vision-content"];

//end of bottom-content

//end main-content section

//start of contact section
//address, phone, email
document.querySelector(`.contact h4`).textContent = siteContent.contact["contact-h4"];

document.querySelector(`.contact p:nth-of-type(1)`).textContent = siteContent.contact.address;
document.querySelector(`.contact p:nth-of-type(2)`).textContent = siteContent.contact.phone;
document.querySelector(`.contact p:nth-of-type(3)`).textContent = siteContent.contact.email;

//end contact section

//begin footer
document.querySelector(`footer p`).textContent = siteContent.footer.copyright;
//end footer

//Item creation

//Establish frame of reference to toolbar
let parentButtons = document.querySelector(`nav`);
console.log(parentButtons);

//Create new elements
const newButtonBefore = document.createElement(`a`);
newButtonBefore.textContent = "Before";
newButtonBefore.href = "#";
parentButtons.prepend(newButtonBefore);

const newButtonAfter = document.createElement(`a`);
newButtonAfter.textContent = `After`;
newButtonAfter.href = "#";
parentButtons.appendChild(newButtonAfter);

