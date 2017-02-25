var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var article={
    
  heading : 'Hey this is for article use' ,
  
  title   :  'Article |lav' ,
  content : `
            <p>
                This page is meant for article.This page is meant for article.This page is meant for article.
                This page is meant for article.This page is meant for article.This page is meant for article.
                This page is meant for article.This page is meant for article.This page is meant for article.
            </p>`
};



function createTemp(data){
    var title= data.title;
    var head= data.head;
    var content=data.content;
    
    var result= `<html>
    <head>
        <title>${title}</title>
        <link href="/ui/style.css" rel="stylesheet" />
    </head>

<body>
<div align="center" class="conatiner">    
        <div>
            <h1> ${head}</h1>
            <hr/>
            
        </div>
        <div>
            <a href="\"> Click here to go back</a>
        </div>
        
        <div>
           ${content}
           </div>
</div>    
</body>    
</html>`;
return result;
}







app.get('/article', function(req,res){
   res.send(createTemp(article));
});

app.get('/magic' , function(req,res){
   res.send('Magic tricks will be here'); 
});

app.get('/hacktut' , function (req,res){
    res.send('hacktut will be here');
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/ui/Untitled.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'Untitled.png'));
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
