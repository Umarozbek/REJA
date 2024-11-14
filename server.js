// console.log("Web serverni boshlash");
// const express = require("express");
// const app = express(); /// expresnijng app objectini yuboradi express serverini yuboradi
// const http = require("http");
// // //1 kirish kodlar
// app.use(express.static("public")); //css va imaglar turadi
// app.use(express.json()); /// kirib kelyotgan datani objectga ogdarib beradi
// app.use(express.urlencoded({extended: true })); // htmldan kelgan forumlarni neglekt qiladi agar buni yozmasak htmldan kelyotgan codelarni qabul qilmaydi vazifasi shu




//2SESSIONS bogliq kodlar

//3  VIEWS KODLAR
///BSSR BACKEND SERVER SITE RENDERINGNI TANLADIK  
// BU TRADITIONAL USUL BOLIB VIEW YASAYMIZ YANI BACKENDDA HTML YASHASH QISMI
// app.set("views", "views");
// app.set("view engine", "ejs");

/// BULARNI QILISHDAN ASOSIY MAQSAD BU BACKENDI ICHIDA FRONENDI YASAYMIZ



//4 ROUTERLAR BN ISHLASH  ROUTER KODALRINI BOLIMI
///
// app.get("/", function(req, res) {
//   res.end(" hello world by UMAR DEVELOPER");  
// });

// app.get("/gift", function(req, res) {
//     res.end(" SIZ SOVGALAR SAHIFASIDASIZ");  
//   });

// const server = http.createServer(app);
// let PORT = 4000;
// server.listen( PORT, function () {
// console.log(`This server is running successfully on  port: ${PORT}`);
// });


////// BSSR ==> BACKEND SERVER SITE RENDERING 
///// REACT YANI BURAKDA
///// GITDA ISHLADIK

//////////==============================/////////////////////////
/////////////////DARS 19 ///////////////////////////////////////
// app.post("/create-item", (req,res) => {
// console.log(req.body);
// res.json({test:"success"});
// });
// app.get('/', function (req, res) {
//     res.render("Harid")
// } ); 

// const server = http.createServer(app);
// let PORT = 3000;
// server.listen(PORT, function (){
//    console.log(`this server sucsesfully  running on port ${PORT}`) 
// });





//////////////////////////PORTFOLIO/////////////////////////////////////



/// REQUIRE QISMI

console.log("Web serverni boshlash");
const express = require("express");
const app = express(); /// expresnijng app objectini yuboradi express serverini yuboradi
const http = require("http");
const fs = require("fs");

let user;
fs.readFile("database/user.json", "utf8", (err, data) => {
 if (err) { 
    console.log("EROR:",err);
}
 else {
    user = JSON.parse(data);
 }
});

//1 kirish kodlar
app.use(express.static("public")); 
app.use(express.json()); 
app.use(express.urlencoded({extended: true })); 

//3 views qismi
app.set("views", "views");
app.set("view engine", "ejs");

// 4 routing qismi   

app.post("/create-item", (req,res) => {
   
    });

    app.get("/author", (req,res) => {
      res.render("author", {user: user });
    });
    app.get('/', function (req, res) {
        res.render("Harid")
    }); 
    
    const server = http.createServer(app);
    let PORT = 3000;
    server.listen(PORT, function (){
       console.log(`this server sucsesfully  running on port ${PORT}`) 
    });
    