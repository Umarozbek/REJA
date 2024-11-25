const http = require("http");
const mongodb = require("mongodb");

let db;
const connectionString = "mongodb+srv://gafurovich1881:iPXtbp0jXA4d8ZI1@cluster1.mawfn.mongodb.net/Reja"

mongodb.connect(
    connectionString, 
    {
        useNewUrlParser: true, 
        useUnifiedTopology: true,
    }, 
    (err, client) => {
    if (err) console.log("ERROR on connection MongoDB",err);
    
    else {
        console.log("MongoDB connection succeed");
        module.exports = client;

        const app = require("./app");
        const server = http.createServer(app);
        let PORT = 3000;
        server.listen(PORT, function () {
            console.log(`The server is running successfully on port: ${PORT}, http://localhost:${PORT}`);
        });
    }
});