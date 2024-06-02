const carousal = [
  {
    id: 1,
    background: "./assets/images/slider-1.jpg",
    logo: "",
    title: "Taste from italy",
    paragraph:
      "Who Needs a Boyfriend if there Pizza And Wifi are bot available",
    icon: [
      "./assets/icons/slider1-icon-1.png",
      "./assets/icons/slider1-icon-2.png",
      "./assets/icons/slider1-icon-3.png",
      "./assets/icons/slider1-icon-4.png",
    ],
  },
  {
    id: 2,
    background: "./assets/images/slider-2.jpg",
    logo: "./assets/images/alider-2-logo.png",
    title: "Make your Chocolate",
    paragraph:
      "You'll be surprised to see the Final results of your Creation & would crave for me",
    icon: [
      "./assets/icons/slider1-icon-1.png",
      "./assets/icons/slider1-icon-2.png",
      "./assets/icons/slider1-icon-3.png",
    ],
  },
  {
    id: 3,
    background: "./assets/images/slider-3.jpg",
    logo: "",
    title: "Hello & Wellcome",
    paragraph:
      "Coffee drinkers make better Lovers.Everything starts with a great Coffee",
    icon: [""],
  },
];

let background = document.querySelector(".carousel-container");
let previousBtn = document.querySelector(".previous-btn");
let nextBtn = document.querySelector(".next-btn");
let count = 0;
let interval;

const singleCarousel = (item, index) => {

  const carousalElement = `
    <div class="carousal" style="background-image: url(${item?.background}) !important;">
      <div class="carousal-content ${item.id === 2 ? "centered" : ""}">
        ${item.logo ? `<img class="logo-img" src="${item.logo}" />` : ""}
        <h2 class="heading">${item?.title}</h2>
        <p class="paragraph">
          ${item?.paragraph}
        </p>
        <div class="icons-container">
          ${
            item?.icon &&
            item?.icon
              .map((row) => `<img class="icon-img" src="${row}" />`)
              .join("")
          }
        </div>
      </div>
    </div>`;
  background.innerHTML = carousalElement;
};

const startAutoplay = () => {
  interval = setInterval(() => {
    count = (count + 1) % carousal.length;
    singleCarousel(carousal[count]);
  }, 5000);
};

const stopAutoplay = () => {
  clearInterval(interval);
};

document.addEventListener("DOMContentLoaded", () => {
  singleCarousel(carousal[count]);
  startAutoplay();
});

previousBtn.addEventListener("click", () => {
  stopAutoplay();
  count = (count - 1 + carousal.length) % carousal.length;
  singleCarousel(carousal[count]);
  startAutoplay();
});

nextBtn.addEventListener("click", () => {
  stopAutoplay();
  count = (count + 1) % carousal.length;
  singleCarousel(carousal[count]);
  startAutoplay();
});

const foodItem = [
  {
    id: 1,
    img: "./assets/images/section-5-food-item(1).jpg",
    foodTitle: "Multigrain Toast.",
    price: "$19.99",
    foodInfo: "CORN, BACON, TOMATO, CHEESE, ONLION",
    foodDescription:
      " Efficiently syndicate cross functional web-readiness before business niches. Uniquely reinvent ethical testing procedures before ethical leadership skills. Credibly maximize orthogonal e-services and technically sound communities. Seamlessly procrastinate holistic partnerships.Distinctively disseminate stand-alone process improvements after efficient total linkage. Efficiently syndicate.",
    button: "See More Details",
  },
  {
    id: 2,
    img: "./assets/images/section-5-food-item(2).jpg",
    foodTitle: "Prawn Mussels Plate.",
    price: "$11.59",
    foodInfo: "PRAWN, TOMATO, NOODLES",
    foodDescription:
      " Efficiently syndicate cross functional web-readiness before business niches. Uniquely reinvent ethical testing procedures before ethical leadership skills. Credibly maximize orthogonal e-services and technically sound communities. Seamlessly procrastinate holistic partnerships.Distinctively disseminate stand-alone process improvements after efficient total linkage. Efficiently syndicate.",
    button: "See More Details",
  },
  {
    id: 3,
    img: "./assets/images/section-5-food-item(3).jpg",
    foodTitle: "Black Jumbo Burger.",
    price: "$8.99",
    foodInfo: "CHICKEN PATTY, BEAN BREAD",
    foodDescription:
      " Efficiently syndicate cross functional web-readiness before business niches. Uniquely reinvent ethical testing procedures before ethical leadership skills. Credibly maximize orthogonal e-services and technically sound communities. Seamlessly procrastinate holistic partnerships.Distinctively disseminate stand-alone process improvements after efficient total linkage. Efficiently syndicate.",
    button: "See More Details",
  },
  {
    id: 4,
    img: "./assets/images/section-5-food-item(4).jpg",
    foodTitle: "Fried Chicken.",
    price: "$22.99",
    foodInfo: "CHICKEN, OLIVE OIL",
    foodDescription:
      " Efficiently syndicate cross functional web-readiness before business niches. Uniquely reinvent ethical testing procedures before ethical leadership skills. Credibly maximize orthogonal e-services and technically sound communities. Seamlessly procrastinate holistic partnerships.Distinctively disseminate stand-alone process improvements after efficient total linkage. Efficiently syndicate.",
    button: "See More Details",
  },
  {
    id: 5,
    img: "./assets/images/section-5-food-item(5).jpg",
    foodTitle: "Smoothie Fruit Bowl.",
    price: "$19.99",
    foodInfo: "RASPBERRIES, STRAWBERRIES, GRANOLA, BANANA",
    foodDescription:
      " Efficiently syndicate cross functional web-readiness before business niches. Uniquely reinvent ethical testing procedures before ethical leadership skills. Credibly maximize orthogonal e-services and technically sound communities. Seamlessly procrastinate holistic partnerships.Distinctively disseminate stand-alone process improvements after efficient total linkage. Efficiently syndicate.",
    button: "See More Details",
  },
  {
    id: 6,
    img: "./assets/images/section-5-food-item(6).jpg",
    foodTitle: "Margarita Pizza.",
    price: "$14.99",
    foodInfo: "WHEAT FLOUR, CHEESE, TOMATO, ONION",
    foodDescription:
      " Efficiently syndicate cross functional web-readiness before business niches. Uniquely reinvent ethical testing procedures before ethical leadership skills. Credibly maximize orthogonal e-services and technically sound communities. Seamlessly procrastinate holistic partnerships.Distinctively disseminate stand-alone process improvements after efficient total linkage. Efficiently syndicate.",
    button: "See More Details",
  },
  {
    id: 7,
    img: "./assets/images/section-5-food-item(7).jpg",
    foodTitle: "Macaroni Pasta.",
    price: "$11.99",
    foodInfo: "",
    foodDescription:
      " Efficiently syndicate cross functional web-readiness before business niches. Uniquely reinvent ethical testing procedures before ethical leadership skills. Credibly maximize orthogonal e-services and technically sound communities. Seamlessly procrastinate holistic partnerships.Distinctively disseminate stand-alone process improvements after efficient total linkage. Efficiently syndicate.",
    button: "See More Details",
  },
  {
    id: 8,
    img: "./assets/images/section-5-food-item(8).jpg",
    foodTitle: "Chicken with Fries.",
    price: "$33.99",
    foodInfo: "CHICKEN, POTATOES, BROCCOLIES",
    foodDescription:
      " Efficiently syndicate cross functional web-readiness before business niches. Uniquely reinvent ethical testing procedures before ethical leadership skills. Credibly maximize orthogonal e-services and technically sound communities. Seamlessly procrastinate holistic partnerships.Distinctively disseminate stand-alone process improvements after efficient total linkage. Efficiently syndicate.",
    button: "See More Details",
  },
  {
    id: 9,
    img: "./assets/images/section-5-food-item(9).jpg",
    foodTitle: "Chinese Noodle.",
    price: "$7.99",
    foodInfo: "NOODLES, CORNFLOWER, PRAWN",
    foodDescription:
      " Efficiently syndicate cross functional web-readiness before business niches. Uniquely reinvent ethical testing procedures before ethical leadership skills. Credibly maximize orthogonal e-services and technically sound communities. Seamlessly procrastinate holistic partnerships.Distinctively disseminate stand-alone process improvements after efficient total linkage. Efficiently syndicate.",
    button: "See More Details",
  },
];
let foodBtn = document.querySelectorAll(".food-menu-buttons");
foodBtn.forEach((buttons) => {
  buttons.addEventListener("click", (e) => {
    // console.log(e.target.id);
    let findItem = foodItem.find((food) =>{
    //  console.log(food.id)
    if(e.target.id == food.id){
      return food;
    }
    });
    // console.log(findItem)
    if(findItem){
      build(findItem);
    }
  });
});

const build = (builds) => {
  
  // console.log(builds);
    let img = document.querySelector('.food-img img')
    img.src = builds.img;
    // console.log(img)
    let foodTilte = document.querySelector('.food-title h1')
    foodTilte.innerText = builds.foodTitle;
    let price = document.querySelector('.food-price')
    price.innerHTML = builds.price;
    // console.log(price)
    document.querySelector('.food-info p').innerText = builds.foodInfo;
    document.querySelector('.food-description p').innerText = builds.foodDescription;
    document.querySelector('.menu-btn a').innerText = builds.button;
  };


  // desert
  const desertItem = [
    {
      id: 1,
      img: "./assets/images/dessert-img-1.jpg",
      desertTitle: "Chocolate Cupcakes.",
      desertprice: "$19.99",
      desertInfo: "CHOCOLATE, CARAMEL, HAZELNUT, COFFEE, STRAWBERRY",
      desertDescription:
        "Lorem ipsum dolor sit amet, consectetur. impedit commodi nobis doloremque quas consequuntur! and technically sound communities. Credibly maximize orthogonal e-services and technically sound communities. Seamlessly procrastinate holistic partnerships. Distinctively disseminate stand-alone.",
      button: "See More Details",
    },
    {
      id: 2,
      img: "./assets/images/dessert-img-2.jpg",
      desertTitle: "Caramel Cake.",
      desertprice: "$11.59",
      desertInfo: "EGG, CARAMEL",
      desertDescription:
        "Lorem ipsum dolor sit amet, consectetur. impedit commodi nobis doloremque quas consequuntur! and technically sound communities. Credibly maximize orthogonal e-services and technically sound communities. Seamlessly procrastinate holistic partnerships. Distinctively disseminate stand-alone..",
      button: "See More Details",
    },
    {
      id: 3,
      img: "./assets/images/dessert-img-3.jpg",
      desertTitle: "Choco Strawberry Waffle.",
      desertprice: "$8.99",
      desertInfo: "STRAWBERRY, CHOCOLATE SYRUP, VANILLA ICECREAM",
      desertDescription:
        "Lorem ipsum dolor sit amet, consectetur. impedit commodi nobis doloremque quas consequuntur! and technically sound communities. Credibly maximize orthogonal e-services and technically sound communities. Seamlessly procrastinate holistic partnerships. Distinctively disseminate stand-alone.",
      button: "See More Details",
    },
    {
      id: 4,
      img: "./assets/images/dessert-img-4.jpg",
      desertTitle: "Tuffle Cake.",
      desertprice: "$22.99",
      desertInfo: "",
      desertDescription:
        "Lorem ipsum dolor sit amet, consectetur. impedit commodi nobis doloremque quas consequuntur! and technically sound communities. Credibly maximize orthogonal e-services and technically sound communities. Seamlessly procrastinate holistic partnerships. Distinctively disseminate stand-alone.",
      button: "See More Details",
    },
    {
      id: 5,
      img: "./assets/images/dessert-img-5.jpg",
      desertTitle: "Chocolate Croissant.",
      desertprice: "$19.99",
      desertInfo: "CHOCOLATE SYRUP",
      desertDescription:
        "Lorem ipsum dolor sit amet, consectetur. impedit commodi nobis doloremque quas consequuntur! and technically sound communities. Credibly maximize orthogonal e-services and technically sound communities. Seamlessly procrastinate holistic partnerships. Distinctively disseminate stand-alone.",
      button: "See More Details",
    },
    {
      id: 6,
      img: "./assets/images/dessert-img-6.jpg",
      desertTitle: "Delicious Cookies.",
      desertprice: "$14.99",
      desertInfo: "",
      desertDescription:
        "Lorem ipsum dolor sit amet, consectetur. impedit commodi nobis doloremque quas consequuntur! and technically sound communities. Credibly maximize orthogonal e-services and technically sound communities. Seamlessly procrastinate holistic partnerships. Distinctively disseminate stand-alone.",
      button: "See More Details",
    },
    {
      id: 7,
      img: "./assets/images/dessert-img-7.jpg",
      desertTitle: "Strawberry Pastry.",
      desertprice: "$11.99",
      desertInfo: "",
      desertDescription:
        "Lorem ipsum dolor sit amet, consectetur. impedit commodi nobis doloremque quas consequuntur! and technically sound communities. Credibly maximize orthogonal e-services and technically sound communities. Seamlessly procrastinate holistic partnerships. Distinctively disseminate stand-alone.",
      button: "See More Details",
    },
    {
      id: 8,
      img: "./assets/images/dessert-img-8.jpg",
      desertTitle: "Fruity Bowl.",
      desertprice: "$33.99",
      desertInfo: "FRUITS, YOGURT, STRAWBERRIES, BANANA, CHERRIES",
      desertDescription:
        " Lorem ipsum dolor sit amet, consectetur. impedit commodi nobis doloremque quas consequuntur! and technically sound communities. Credibly maximize orthogonal e-services and technically sound communities. Seamlessly procrastinate holistic partnerships. Distinctively disseminate stand-alone.",
      button: "See More Details",
    },
    {
      id: 9,
      img: "./assets/images/dessert-img-9.jpg",
      desertTitle: "Jelly Cake.",
      desertprice: "$7.99",
      desertInfo: "NOODLES, CORNFLOWER, PRAWN",
      desertDescription:
        "  Lorem ipsum dolor sit amet, consectetur. impedit commodi nobis doloremque quas consequuntur! and technically sound communities. Credibly maximize orthogonal e-services and technically sound communities. Seamlessly procrastinate holistic partnerships. Distinctively disseminate stand-alone.",
      button: "See More Details",
    },
  ];
 let desertBtn = document.querySelectorAll('.desert-menu-buttons');
//  console.log(desertBtn);
desertBtn.forEach((D_buttons) => {
  D_buttons.addEventListener('click', (e) =>{
    // console.log(e.target.id);
    let findDesertItem = desertItem.find((desert) =>{
      if(e.target.id == desert.id){
        return desert;
      }
    });
    if(findDesertItem){
      desertBuild(findDesertItem);
    }
  });
});

const desertBuild = (sweetBuilds) =>{
  let desertimg = document.querySelector('.desert-img img')
  desertimg.src = sweetBuilds.img;
  let desertTitle = document.querySelector('.desert-title h1')
  // console.log(desertTitle)
  desertTitle.innerText = sweetBuilds.desertTitle;
  document.querySelector('.desert-price').innerText = sweetBuilds.desertprice;
  document.querySelector('.desert-info p').innerText = sweetBuilds.desertInfo;
  document.querySelector('.desert-description p').innerText = sweetBuilds.desertDescription;
}

document.addEventListener("DOMContentLoaded", function() {
  var toggleBtn = document.querySelector('.toggle-btn');
  var dropdown = document.querySelector('.mobile-dropdown');
  
  toggleBtn.addEventListener('click', function() {
      dropdown.classList.toggle('closed-menu');
  });
});