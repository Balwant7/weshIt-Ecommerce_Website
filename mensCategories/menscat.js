const productlist = document.querySelector("#list");

var storage = [
  {
    src: "../images/MensDenimJacket.jpg",
    name: "Jackets",
    des: "Wide range of styleish mens Jackets",
  },
  {
    src: "../images/mesnBeigeShirt.jpg",
    name: "Shirts",
    des: "Stylish shirts and for office and everyday wear",
  },
  {
    src: "../images/mensFloralTshirt.jpg",
    name: "Tshirts",
    des: "Comfy and Trending tshirts",
  },
  {
    src: "../images/mensShades.jpg",
    name: "Glasses",
    des: "check out new shades",
  },
  {
    src: "../images/mesnCatchain.jpg",
    name: "Jewellery",
    des: "Shining and stylish premium quality",
  },
  {
    src: "../images/shoes.jpg",
    name: "Shoes",
    des: "All types of shoes available check out",
  },
  {
    src: "../images/menscatblazer.jpg",
    name: "Blazer",
    des: "Styleish and Premium Quality",
  },
  {
    src: "../images/menscatBag.jpg",
    name: "Bags",
    des: "Office and everyday wear bags",
  },
];

function product() {
  storage.forEach((e) => {
    productlist.innerHTML += `<div class="col">
    <div class="card">
      <img
        src="${e.src}"
        class="card-img-top"
        alt="..."
      />
      <div class="card-body  p-0">
        <h5 class="card-title">${e.name}</h5>
        <p class="card-text">
         ${e.des}
        </p>
      </div>
    </div>
  </div>`;
  });
}

product();
