const express = require('express'),
      bodyParser = require('body-parser'),
      session = require('express-session'),
      cors = require('cors')
      checkUserSession = require('./middleware/checkUserSession')

const app = express()
app.use(bodyParser.json())
app.use(cors())

//Setup session here
app.use(session({
    secret: 'heiasdfffj',
    resave: false,
    saveUninitialized: true
}))

//Setup middleware here
app.use(checkUserSession)

//Setup register endpoint here
app.post('/api/register', (req, res) => {
    req.session.user.username = req.body.username
    req.session.user.password = req.body.password
    res.status(200).send(req.session.user)
})



port = 3500
app.listen(port, () => {console.log(`Server listening on port ${port}`)})