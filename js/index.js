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
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let headerImg = document.getElementById("cta-img");
headerImg.setAttribute("src", "img/header-img.png")

let middleImg = document.getElementById("middle-img");
middleImg.setAttribute("src", "img/mid-page-accent.jpg")

// Nav

let services = document.getElementsByTagName("a")[0];
services.innerHTML = "Services";
let product = document.getElementsByTagName("a")[1];
product.innerHTML = "Product";
let vision = document.getElementsByTagName("a")[2];
vision.innerHTML = "Vision";
let features = document.getElementsByTagName("a")[3];
features.innerHTML = "Features";
let about = document.getElementsByTagName("a")[4];
about.innerHTML = "About";
let contact = document.getElementsByTagName("a")[5];
contact.innerHTML = "Contact";

// New Element

let newLink = document.createElement('a');
newLink.href = "#";
newLink.textContent = "Home";
document.querySelector('nav').prepend(newLink);


// Mid

let h1Message = document.getElementsByTagName("h1")[0];
h1Message.innerHTML = "DOM is Awesome!";

let button = document.getElementsByTagName("button")[0];
button.innerHTML = "Get Started";

// Main Content

let featuresH4 = document.getElementsByTagName('h4')[0];
featuresH4.innerHTML = "Features";
let featureContent = document.getElementsByTagName('p')[0];
featureContent.innerHTML = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
let aboutH4 = document.getElementsByTagName('h4')[1];
aboutH4.innerHTML = "About";
let aboutContent = document.getElementsByTagName('p')[1];
aboutContent.innerHTML = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
let servicesH4 = document.getElementsByTagName('h4')[2];
servicesH4.innerHTML = "Services";
let servicesContent = document.getElementsByTagName('p')[2];
servicesContent.innerHTML = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
let productH4 = document.getElementsByTagName('h4')[3];
productH4.innerHTML = "Product"
let productContent = document.getElementsByTagName('p')[3];
productContent.innerHTML = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
let visionH4 = document.getElementsByTagName('h4')[4];
visionH4.innerHTML = "Vision";
let visionContent = document.getElementsByTagName('p')[4];
visionContent.innerHTML = "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

// Contact

let contactH4 = document.getElementsByTagName('h4')[5];
contactH4.innerHTML = "Contact";
let address = document.getElementsByTagName('p')[5];
address.innerHTML = "123 Way 456 Street Somewhere, USA";
let phone = document.getElementsByTagName('p')[6];
phone.innerHTML = "1 (888) 888-8888";
let email = document.getElementsByTagName('p')[7];
email.innerHTML = "sales@greatidea.io";

// Footer

let footer = document.getElementsByTagName('p')[8];
footer.innerHTML = "Copyright Great Idea! 2018"

// Green

document.querySelectorAll('nav a').forEach(element => element.style.color = "green");
