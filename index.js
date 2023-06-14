//this is not the production ready way to setup the http server because it will take a lot of effort to do this so we use third party(like using express framework) http server

//http module which is internally present in the nodeJs which is used to setup http server in order make http request
const http = require('http');


//using the create server function we can create a basic http server using http module this function returns a server object and takes a callback as an argument
//this function has just created the server we have not started it yet
const server = http.createServer(function listener(request, response){
    //this callback function is like a listener function that is going to collect every HTTP request that we will make to our server

    //request -> we will be able to see the details of the request -> object type
    //response -> we will be able to see the details of the response -> object type
    
    // console.log("request details", request);
    // console.log("response detaile", response);

    if(request.url == '/home') {
        // if we make a request to /home then this if block is going to execute
        console.log("welcome to home");

        // if we want to know type of request then we can use 
        console.log(request.method);
    }

    console.log("received request");
});


//To check whether this port is available , there is a linux command by which we can check

//any computer program that we execute in our computer becomes a process , if any external environment needs to communicate to the process , every process needs to 
// communicate via a port number , SO if we host this server on the internet then other computer may need our IP address to access the server BUt in that Ip address there 
// will be multiple process that is going on so to uniquely identify a particular process we will needport number
const PORT = 3000;


//to start the server

server.listen(PORT, function exec() {
    
    //once we successfully boot up the server on the given port, this callback will be executed

    console.log("server is running currently");
    
});


//go to chrome and type localhost:3000 to send the request to this server

//go to terminal and open this folder path and then write (node index.js)  it will show what is happening with the server

//by default jo bhi humara browser wo response ko in the form of html mai try karega likhne ka(except JSON file)



