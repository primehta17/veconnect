let http = require("http")
let server =http.createServer((req,res)=>{
    res.write("Hello form node")
    res.end()
})
server.listen(8081)
console.log("hello from console node port 8080")