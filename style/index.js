var car = document.getElementById("car");
var bike = document.getElementById("bike");
var health = document.getElementById("health");
var life = document.getElementById("life");
var travel = document.getElementById("travel");
//banner
var carBanner = document.querySelector(".a_car_banner");
var bikeBanner = document.querySelector(".a_bike_banner");
var healthBanner = document.querySelector(".a_health_banner");
var lifeBanner = document.querySelector(".a_life_banner");
var travelBanner = document.querySelector(".a_travel_banner");

window.onload = function () {
  car.classList.add("active");
  //banner
  carBanner.classList.remove("d-none");
};
car.addEventListener("click", function (event) {
  bike.classList.remove("active");
  health.classList.remove("active");
  life.classList.remove("active");
  travel.classList.remove("active");
  car.classList.add("active");
  //banner
  bikeBanner.classList.add("d-none");
  carBanner.classList.remove("d-none");
  healthBanner.classList.add("d-none");
  lifeBanner.classList.add("d-none");
  travelBanner.classList.add("d-none");
});

bike.addEventListener("click", function (event) {
  bike.classList.add("active");
  health.classList.remove("active");
  life.classList.remove("active");
  travel.classList.remove("active");
  car.classList.remove("active");
  //banner
  bikeBanner.classList.remove("d-none");
  carBanner.classList.add("d-none");
  healthBanner.classList.add("d-none");
  lifeBanner.classList.add("d-none");
  travelBanner.classList.add("d-none");
});

health.addEventListener("click", function (event) {
  bike.classList.remove("active");
  health.classList.add("active");
  life.classList.remove("active");
  travel.classList.remove("active");
  car.classList.remove("active");
  //banner
  bikeBanner.classList.add("d-none");
  carBanner.classList.add("d-none");
  healthBanner.classList.remove("d-none");
  lifeBanner.classList.add("d-none");
  travelBanner.classList.add("d-none");
});

life.addEventListener("click", function (event) {
  bike.classList.remove("active");
  health.classList.remove("active");
  life.classList.add("active");
  travel.classList.remove("active");
  car.classList.remove("active");
  //banner
  bikeBanner.classList.add("d-none");
  carBanner.classList.add("d-none");
  healthBanner.classList.add("d-none");
  lifeBanner.classList.remove("d-none");
  travelBanner.classList.add("d-none");
});

travel.addEventListener("click", function (event) {
  bike.classList.remove("active");
  health.classList.remove("active");
  life.classList.remove("active");
  travel.classList.add("active");
  car.classList.remove("active");
  //banner
  bikeBanner.classList.add("d-none");
  carBanner.classList.add("d-none");
  healthBanner.classList.add("d-none");
  lifeBanner.classList.add("d-none");
  travelBanner.classList.remove("d-none");
});

// video section
// const crrentVideo = document.getElementById("a_current_video")
const currentVideo = document.getElementById("a_current_video");
const currentTitle = document.getElementById("currenttitle");
const videoList = document.getElementsByClassName("a_video");

for (let i = 0; i < videoList.length; i++) {
  const listSrc = videoList[i].children.item("div").children.item("div").children.item("video").src;
  const text = videoList[i].children.item("1").children.item("0").innerText;

  videoList[i].addEventListener("click", () => {
    currentVideo.src = listSrc;
    currentTitle.innerText = text;
    currentVideo.play();
  });
}

// array acko section
const ackoData = [
  {
    img: "/acko1.svg",
    title: "Incredibly low premiums",
    description:
      "Insuring things that matter to you shouldn’t come at a cost. That’s why when you buy from us, you get insurance that fits your pocket.",
  },
  {
    img: "/acko 2.svg",
    title: "Superquick and easy",
    description:
      "We’re easy, effortless and 100% digital. Forget paperwork, just access all our services with just a few clicks.",
  },
  {
    img: "/acko 2.svg",
    title: "Superquick and easy",
    description:
      "We’re easy, effortless and 100% digital. Forget paperwork, just access all our services with just a few clicks.",
  },
];

// a_acko
const ackoSection = document.getElementById("acko_section");

for (let i = 0; i < ackoData.length; i++) {
  // create div element
  const ackocard = document.createElement("div");
  ackocard.className = "col-12 col-lg-4";
  ackocard.style.padding = "30px";
  ackocard.style.marginTop = "20px";

  // create img tag
  const img = document.createElement("img");
  // add src attributes
  img.src = "/image" + ackoData[i].img;
  img.alt = "dynamic image";
  img.width = 120;
  img.style.marginBottom = "10px";

  //create h4 tag
  const h4 = document.createElement("h4");
  h4.innerText = ackoData[i].title;
  h4.style.fontSize = "18px";
  h4.style.padding = "10px 0px";

  //create p tag
  const p = document.createElement("p");
  p.innerText = ackoData[i].description;
  p.style.fontSize = "14px";
  p.style.lineHeight = "20px";

  // adding child to ackocard

  ackocard.appendChild(img);
  ackocard.appendChild(h4);
  ackocard.appendChild(p);

  ackoSection.appendChild(ackocard);
}

// array part
const footerData = [
  {
    title: "Products",
    navlinks: [
      "Motor Insurance",
      "Car Insurance",
      "Bike Insurance",
      "Health Insurance",
      "Travel Insurance",
      "International Travel Insurance",
      "Life Insurance",
      "Term Insurance",
      "Group Health Insurance",
    ],
  },
  {
    title: "Company",
    navlinks: [
      "About us",
      "Board of directors",
      "carres",
      "Media Kit",
      "All Resources",
      "Articals",
      "Ackology-The tech blog",
      "Partnership",
      "Sitemap",
    ],
  },
  {
    title: "Legal",
    navlinks: [
      "Whistleblower policy",
      "Public disclosure",
      "Financials & disclosures",
      "Privacy policy",
      "Terms & conditions",
      "Stewardship code",
      "Disclaimer",
      "Anti fraud policy",
      "Health underwriting philosophy",
    ],
  },
  {
    title: "Support",
    navlinks: [
      "About us",
      "Board of directors",
      "Bike Insurance",
      "Health Insurance",
      "Travel Insurance",
      "International Travel Insurance",
      "Life Insurance",
      "Term Insurance",
      "Group Health Insurance",
    ],
  },
  {
    title: "Car Insurance",
    navlinks: [
      "Car Insurance",
      "Comprehensive Car Insurance",
      "Third Party Car Insurance",
      "Own Damage Car Insurance",
      "Zero Depreciation Car Insurance",
      "Old Car Insurance",
      "EV Car Insurance",
      "Car Insurance Calculator",
      "Car Insurance Check",
      "Compare Car Insurance",
      "Pay As You Drive Car Insurance",
    ],
  },
  {
    title: "Bike Insurance",
    navlinks: [
      "Bike Insurance",
      "Scooter Insurance",
      "Comprehensive Bike Insurance",
      "Third Party Bike Insurance",
      "Used Bike Insurance",
      "EV Bike Insurance",
      "Own Damage Bike Insurance",
      "Bike Insurance Calculator",
      "Compare Bike Insurance",
    ],
  },
  {
    title: " Health Insurance",
    navlinks: [
      "Health Insurance",
      "Arogya Sanjeevani Policy",
      "COVID-19 Health Insurance",
      "Corona Kavach Policy",
      "Health Insurance Plans For Family",
      "Individual Health Insurance",
      "Cashless Health Insurance",
      "Women's Health Insurance",
      "Health Insurance For Parents",
      "Health Insurance For Children",
      "Health Insurance For Senior Citizens",
      "Health Insurance Premium Calculator",
      "Waiting period in health insurance",
      "Reimbursement Health Insurance",
      "Health Insurance Portability",
      "Super Top Up Health Insurance",
    ],
  },
  {
    title: "Group Health Insurance",
    navlinks: [
      "Corporate Health Insurance",
      "Group Health Insurance Add-ons",
      "Maternity Cover In Group Health Insurance",
    ],
  },
  {
    title: " Travel Insurance",
    navlinks: [
      "Travel Insurance",
      "International Travel Insurance",
      "USA Travel Insurance",
      "Schengen Travel Insurance",
      "Travel Insurance for Dubai",
      "Travel Insurance for Thailand",
    ],
  },
  {
    title: "Life Insurance",
    navlinks: [
      "Life Insurance",
      "Term Insurance",
      "Critical Illness Insurance",
      "Accidental Death Benefit Rider",
      "Disability Income Rider",
      "Life Insurance Riders In India",
    ],
  },
];

// footer navbar

const footerNavbar = document.getElementById("footer_navbar");

for (let i = 0; i < footerData.length; i++) {
  // create div for col-12 col-lg-3

  const div = document.createElement("div");
  // give class name to div
  div.className = "col-12 col-lg-3 mt-4";

  // create h5 tag

  const h5 = document.createElement("h5");
  h5.innerText = footerData[i].title;
  h5.style.marginLeft = " 30px";

  // create ul element

  const ul = document.createElement("ul");

  // loops start on the footerData

  for (let link = 0; link < footerData[i].navlinks.length; link++) {
    const li = document.createElement("li");
    const a = document.createElement("a");
    ul.appendChild(li);
    ul.style.listStyle = "none";
    li.appendChild(a);
    a.style.textDecoration = "none";
    a.style.color = "#000";
    a.href = "#";
    a.style.fontSize = "14px";
    a.innerText = footerData[i].navlinks[link];
  }
  div.appendChild(h5);
  div.appendChild(ul);
  footerNavbar.appendChild(div);
}
