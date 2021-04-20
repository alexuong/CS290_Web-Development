/*
 * Write your server code in this file.
 *
 * name: Alexander Uong
 * email:uonga@oregonstate.edu
 */
//process.env.PORT || 4000;


var http = require('http');
var fs = require('fs');


var indexHTML;
var indexJS;
var styleCSS;
var errorHTML;

fs.readFile('public/index.html', 'utf8', function (err, fileContents) {		
	
	if (err) {
        	console.log("== Error reading file:", err);
    	}
   	else {
			
		indexHTML = fileContents;	
	}
});


fs.readFile('public/index.js', 'utf8', function (err, fileContents) {
    			
	if (err) {
        	console.log("== Error reading file:", err);
    	}
   	else {
			
		indexJS = fileContents;
	}
});


fs.readFile('public/style.css', 'utf8', function (err, fileContents) {
    			
	if (err) {
        	console.log("== Error reading file:", err);
    	}
   	else {
			
		styleCSS = fileContents;
	}
});


fs.readFile('public/404.html', 'utf8', function (err, fileContents) {
    			
	if (err) {
        	console.log("== Error reading file:", err);
    	}
   	else {
			
		errorHTML = fileContents;
	}
});




var server = http.createServer(function(request,response){
	if (request.url == '/index.html' || request.url == '/'){
		
		
		response.writeHead(200, {"Content-Type": "text/html"});  
       		response.write(indexHTML);  
        	response.end();  

	}
	else if (request.url == '/index.js'){
		response.writeHead(200, {"Content-Type": "application/javascript"});  
       		response.write(indexJS);  
		response.end();


	}
	else if (request.url == '/style.css'){
		response.writeHead(200, {"Content-Type": "text/css"});  
       		response.write(styleCSS);  
		
		response.end();


	}
	
	else if (request.url == '/404.html'){
		response.writeHead(200, {"Content-Type": "text/html"});  
       		response.write(errorHTML); 
		response.end();
		
	}else{
		response.writeHead(404, {"Content-Type": "text/html"});  
       		response.write(errorHTML); 
		response.end();

	}

});



if (process.env.PORT) {
   server.listen(process.env.PORT, function () {
        console.log("== Server is listening on environmental port");
    });
}

else {
    server.listen(3000, function () {
        console.log("Server is listening on 3000");

    });
}



