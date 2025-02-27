const express = require('express')
const path = require('path')
const compression = require('compression')
const app = express()
const PORT = process.env.PORT || 3000

//Routes
const indexRoute = require('./routes/index')
const aboutRoute = require('./routes/about')
const detailRoute = require('./routes/detail')

app.set('views', path.join(__dirname + '/views'))
app.set('view engine', 'ejs')
app.use(compression())
app.use(express.static(path.join(__dirname, '/public')))
//Setting cache header to enable public 10 minute cache
app.use((req, res, next) => {
	res.set('Cache-control', 'public, max-age=600')
	next()
})

app.use('/', indexRoute)
app.use('/book', detailRoute)
app.use('/about', aboutRoute)

// Catch 404 and forward to error handler
app.use(function (req, res, next) {
	res.status(404).render('error')
})

app.listen(PORT, () => console.log(`Listening on http://[::]:${PORT}`))
