var searchbar = document.querySelector("#exampleDataList");
var main = document.querySelector("main");
var searchbtn = document.querySelector("#searchbtntop");
const fetchdata = fetch("./mensShirt.json");

let ipvalue;

searchbtn.addEventListener("click", (e) => {
  var ipvalue = searchbar.value;
  //   console.log(ipvalue);

  if (ipvalue == "Shirt" || "shirt") {
    // displayShirt();
    fetchdata.then((x) => {
      let finaldata = x.json();
      console.log(finaldata);
      finaldata
        .then((data) => {
          data.forEach((element, index) => {
            let { src, itemname, desc, price } = element;

            main.innerHTML = `<div class="col">
                           <div class="card">
                             <img
                               src="${src}"
                               class="card-img-top"
                               alt="..."
                             />
                            <div class="card-body  p-0">
                               <h5 class="card-title">${itemname}</h5>
                               <p class="card-text">
                                ${desc}
                               </p>
                             </div>
                          </div>
                         </div>`;
          });
        })
        .catch((error) => console.log(error));
    });
  }
});

// async function displayShirt(productname) {
//   try {
//     let data = await window.fetch("./mensShirt.json");
//     let finaldata = await data.json();
//     console.log(finaldata);
//     finaldata.forEach((element,index) => {

//       console.log(element.src);
//     });
//     console.log(src);
//     main.innerHTML = `<div class="col">
//         <div class="card">
//           <img
//             src="${src}"
//             class="card-img-top"
//             alt="..."
//           />
//           <div class="card-body  p-0">
//             <h5 class="card-title">${itemname}</h5>
//             <p class="card-text">
//              ${desc}
//             </p>
//           </div>
//         </div>
//       </div>`;
//   } catch (error) {
//     console.log(error);
//   }
// }
