// console.log("FrontEnd JS ishga tushdi");

// function itemTemplate(item) {
//     return `<li class="list-group-item list-group-item-info d-flex align-items-center justify-content-between">
//                 <span class="item-text">${item.reja}</span>
//                 <div>
//                     <button data-id="${item._id}" class="edit-me btn btn-secondary btn-sm mr-1">
//                         O'zgartirish
//                     </button>
//                     <button data-id="${item._id}" class="delete-me btn btn-danger btn-sm">
//                         O'chirish
//                     </button>
//                 </div>
//             </li>`;
// }

// let createField = document.getElementById("create-field");


// //----- Add new item -----//

// document.getElementById("create-form").addEventListener("submit", function(e) {
//     e.preventDefault();

//     // Tradiotional emas MODERN Post bo'ldi
//     axios.post("/create-item", {reja: createField.value})
//     .then(response => {
//         document.getElementById("item-list").insertAdjacentHTML("beforeend", itemTemplate(response.data))
//         createField.value = "";
//         createField.focus();
//     })
//     .catch(err => {
//         console.log("Iltimos qayta urinib ko'ring!");
//     });
// });


// //----- Delete and Edit (update) item -----//

// document.addEventListener("click", function(e) {
//     // delete oper
//     if(e.target.classList.contains("delete-me")) {
//         if(confirm("Aniq o'chirmoqchimisiz?")) {
//             axios
//             .post("/delete-item", { id: e.target.getAttribute("data-id") })
//             .then((response) => {
//                 console.log(response.data);
//                 e.target.parentElement.parentElement.remove();
//             })
//             .catch((err) => {
//                 console.log("Iltimos qayta urinib ko'ring!");
//             });
//         }
//     }

//     // edit oper
//     if(e.target.classList.contains("edit-me")) {
//         let userInput = prompt("O'zgartirish kiriting", 
//             e.target.parentElement.parentElement
//             .querySelector(".item-text").innerHTML);
//         if (userInput) {
//             axios.post("/edit-item", {
//                 id: e.target.getAttribute("data-id"), 
//                 new_input: userInput,
//             }).then(response => {
//                 console.log(response.data);
//                 e.target.parentElement.parentElement.querySelector(
//                     ".item-text"
//                 ).innerHTML = userInput;
//             }).catch(err => {
//                 console.log("Iltimos qayta urinib ko'ring!");
//             });
//         }
//     }
// });

// //  delete
// document.getElementById("delete-all") // clean-all edi
//     .addEventListener("click", function () {
//         axios
//             .post("/delete-all", { delete_all: true })
//             .then(response => {
//                 alert(response.data);
//                 document.location.reload();
//             });
//     });



console.log("Frontend JavaScript ishga tushdi");

function itemTemplate(item) {
  return `<li class="list-group-item list-group-item-info d-flex align-items-center justify-content-between">
          <span class="item-text">${item.reja }</span>
          <div>
            <button data-id="${item._id}" class="edit-me btn btn-secondary btn-sm mr-1">
              Ozgartirish
            </button>
            <button data-id="${item._id}" class="delete-me btn btn-danger btn-sm">ochirish</button>
          </div>`;
}
/// create field ses
let createField = document.getElementById("create-field");


document.getElementById("create-form").addEventListener("submit", function(e){
  e.preventDefault();

  axios.post("/create-item", {reja: createField.value})
  .then((response) =>{
    document.getElementById("item-list").insertAdjacentHTML("beforeend", itemTemplate(response.data));
    createField.value = "",
    createField.focus();
  })
  .catch(err=> {
    console.log("Iltimos qaytadan harakat qiling");
  });
});

document.addEventListener("click", function(e){
   // delate operation
  console.log(e.target);
   if(e.target.classList.contains("delete-me")) {
    if(confirm("Aniq ochirmoqchimisiz?")) {
      axios.post("/delete-item",{id: e.target.getAttribute("data-id")})
      .then((response) =>{
        console.log(response.data);
        e.target.parentElement.parentElement.remove();
      })
      .catch((err) => {
        console.log("Iltimos qaytadan urinib ko'ring");
      });
    }
  }

//edit operation
 if(e.target.classList.contains("edit-me")) {
   alert("siz edit tugmasini bosdingiz");
  }
 let userInput = prompt("o'zgartirish kiriting", e.target.parentElement.parentElement.querySelector(".item-text").innerHTML);
 if(userInput) {
  axios
  .post("/edit-item",{id: e.target.getAttribute("data-id"), new_input: userInput})
  .then(response => {
    console.log(response);
    e.target.parentElement.parentElement.
    querySelector(".item-text").innerHTML = userInput;
  }).catch(err => {
  console.log("iltimos qaytadan harakat qiling");
  });
 }
});
// clean all ses
document.getElementById("clean-all")
    .addEventListener("click", function(){
  axios
    .post("/delete-all", {delete_all: true})
    .then((response) =>{
    alert(response.data.state);
    document.location.reload();
  });
});