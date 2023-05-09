// debe tener los 4 parametros para que sea un middlewares tipo error
function logErrors(err, req, res, next) {
  console.log(err);
  next(err);
}

// debe tener los 4 parametros para que sea un middlewares tipo error
function errorHandler(err, req, res, next) {
  res.status(500).json({
    message: err.message,
    stack: err.stack
  });
}

// debe tener los 4 parametros para que sea un middlewares tipo error
function boomErrorHandler(err, req, res, next) {
  if (err.isBoom) {
    const { output } = err;
    res.status(output.statusCode).json(output.payload);
  } else {
    next(err)
  }

}

module.exports = { logErrors, errorHandler, boomErrorHandler }
