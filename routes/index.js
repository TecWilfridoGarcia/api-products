const express = require('express')

const productRouter = require('./products.router')

function productApi(app) {
  const router = express.Router()
  app.use('/api/v1', router)
  router.use('/products', productRouter)
}

module.exports = productApi
