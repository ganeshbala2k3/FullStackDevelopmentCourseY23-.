const http = require('http')
const file1 = require('fs')

function aboutpage(req,res)
{
    res.end("About page")
}
const server = http.createServer(
    (req,res)=>{
        if(req.url==='/')
        {
            res.end("Home page")
        }
        else if(req.url==='/about'){
            aboutpage(req,res)
        }
        else{
            res.statusCode=404
            res.end("Notfound")
        }
    }
)

server.listen(3000,()=>{
    console.log("Server is running at 3000 port")
})