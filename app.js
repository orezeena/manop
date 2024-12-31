// modules 
const express = require('express'); 
const path = require('path');



const app = express();


// Middleware to parse JSON and URL-encoded data 
app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 

// Set the view engine to EJS
app.set('view engine', 'ejs');




// Set the views folder (optional, default is 'views')
app.set('views', path.join(__dirname, '/views'));



// Serve static files (like CSS, images, etc.) from the public folder
app.use(express.static(path.join(__dirname, '/views/public')));













// Define a basic route 
app.get('/', (req, res) => { 
    console.log('lets get the party started');
    
    res.render('index'); 
});
 //  route for the home page


app.get('/blog', (req, res) => { 
    res.render('blog'); 
});
app.get('/blogs', (req, res) => { 
    res.render('blogs'); 
});
app.get('/predev', (req, res) => { 
  
  res.render('predev'); 
});




app.get('/b', (req, res) => {
    // Data to send to the EJS template
    const data = {
      title: "Welcome Page",
      username: "John Doe",
      items: ['Apple', 'Banana', 'Orange']
    };
  
    // Render the 'index.ejs' template and pass the data object
    res.render('index', data);
  });
  
  // Example route for a 'about' page
  app.get('/about', (req, res) => {
    //const data = { title: "About Us", description: "This is the about page." };
    res.render('about');
  });

// Example route 
 app.get('/contact', (req, res) => {
    console.log('lets get the party contact');

    res.render('contact'); 
     }); 

    //  Dashboard route
    
 app.get('/dashboard', (req, res) => {
  
   res.render('dashboard/index'); 
       }); 

 app.get('/jobdetails', (req, res) => {
    
  res.render('dashboard/jobdetails'); 
         }); 
app.get('/courses', (req, res) => {
    
  res.render('dashboard/courses'); 
           });

app.get('/task', (req, res) => {
    
  res.render('dashboard/journal'); 
             });
             
 app.get('/books', (req, res) => {
    
  res.render('dashboard/books'); 
               });

 app.get('/habit', (req, res) => {
    
 res.render('dashboard/habit'); 
                 });

 app.get('/fashion', (req, res) => {
    
   res.render('dashboard/fashion'); 
                   });

 app.get('/trade', (req, res) => {
    
  res.render('dashboard/trade'); 
                     });

 app.get('/journal', (req, res) => {
  res.render('dashboard/task'); 
                       });





























 // 404 Middleware (for unmatched routes) 
 app.use((req, res, next) => { 
    res.status(404).json({ error: 'Route not found' });
 }); 
 
 
 // Error-handling middleware 
 app.use((err, req, res, next) => { 
    console.error(err.stack); 
res.status(500).json({ error: 'Something went wrong!' });
 }); 


// Start the server const 
PORT = process.env.PORT || 3000; 
app.listen(PORT, () => { 
    console.log(`Server is running on http://localhost:${PORT}`); 
});