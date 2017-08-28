var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool = require('pg').Pool;
var crypto = require('crypto');
var bodyParser = require('body-parser');
var config = {
    user: 'viswakanthreddy06',
    database: 'viswakanthreddy06',
    host: 'db.imad.hasura-app.io',
    port: '5432',
    password: process.env.DB_PASSWORD
};
var app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());

var articles = {
    'article-one' : {
    title : 'Article one i kanth',
    heading : 'Article one',
    date : 'sep14,2017',
    content : `
    <p>
    This is content of my first article.  This is content of my first article.  This is content of my first article.
      This is content of my first article.  This is content of my first article.
      </p>
      <p>
        This is content of my first article.  This is content of my first article.  This is content of my first article.
          This is content of my first article.  This is content of my first article.
          </p>
          <p>
            This is content of my first article.  This is content of my first article.  This is content of my first article.
              This is content of my first article.  This is content of my first article.
              </p>`
              },
              'article-two' : {
                title : 'Article two i kanth',
                heading : 'Article two',
                date : 'sep11,2017',
                content : 
                `<p>
                This is content of my second article.
                </p>`
              },
              'article-three' : {
                title : 'Article three i kanth',
                heading : 'Article three',
                date : 'sep9,2017',
                content : 
                `<p>
                This is content of my third article.
                </p>`
              }
};

                function createTemplate(data){
    var title=data.title;
    var date=data.date;
    var heading=data.heading;
    var content=data.content;
var htmlTemplate= `
<html>
<head>
    <title>
        ${title}
    </title>
         <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <div class = "container">
        <div>
            <a href="/">Home</a>
        </div>
        <hr/>
            <h3>
            ${heading}
            </h3>
            <div>
                ${date}
            </div>
            <div>
         ${content}
        </div>
    </div>
    </body>
    </html>
    `;
    return htmlTemplate;
    }
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
function hash (input,salt) {
    var hashed = crypto.pbkdf2Sync(input, salt, 10000, 512, 'sha512');
    return["pbkdf2","10000",salt,hashed.toString('hex')].join('$');
}
    //how to we create a hash
    
    app.get('/hash/:input', function(req,res) {
        var hashedString = hash(req.params.input, 'this-is-some-random-string');
        res.send(hashedString);
    });
    app.post('/create-user',function (req,res) {
    //username,password
    //{"username":"viswakanth","password":"password"}
    //json
    var username = req.body.username;
    var password = req.body.password;
    var salt = crypto.getRandomBytes(128).toString('hex');
    var dbString = hash(password,salt);
    pool.query('INSERT INTO "user"(username,password) VALUES($1,$2)',[username,dbString],function (err,result) {
        if (err) {
            res.status(500).send(err.tostring());
            } else {
                res.send('user succesfully created: ' + username);
            }
    });
    });
    
var pool=new Pool(config);
app.get('/test-db', function (req,res) {
    //make a select request
    //return a response with results
pool.query('SELECT * FROM test',function (req,res) {
    if (err) {
        res.status(500).send(err.toString());
        } else {
            res.send(JSON.stringify(result));
        }
});
});
var counter = 0;
app.get('/counter',function(req,res) {
    counter = counter + 1;
    res.send(counter.toString());
});

var names = [];
app.get('/submit-name/:name',function (req,res){ //URL:/submit-name?name=xxxxx
    //get the name from request
var name = req.query.name;
names.push(name);//concatenate to overall list of names
//json:javascript object notation
res.send(JSON.stringify(names));
});

app.get('/:articleName',function (req,res) {
    var articleName = req.query.articleName;
    res.send(createTemplate(articles[articleName]));
    });
 app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
    app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});
app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
    });
// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80
var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});

