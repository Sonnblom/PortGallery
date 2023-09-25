const exoress = require('express');
const bodyParser = require('body-parser');
const user = require('./models/user');
const app = express();



app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false}))

app.get('/',(req,res) => {
    res.render('register')
})

app.post('/register', (req, res) => {

})

app.listen(3000, ()=> {
    console.log('Server is running on port 3000')
})