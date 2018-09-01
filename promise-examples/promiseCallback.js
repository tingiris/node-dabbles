//example function that supports both callback and promise requests

function doublePositiveOnly(x, callback) {
  const func = this.doublePositiveOnly

  if (callback === undefined) {
    return new Promise(function (resolve, reject) {
      func(x, function (err, result) {
        err ? reject(err) : resolve(result)
      })
    })
  }

  let error
  if (!x)
    error = new Error('x must be defined')
  if (typeof x !== 'number')
    error = new Error('x must be a number')
  if (x < 0)
    error = new Error('x must be positive')

  const double = error ? null : x * 2
  return callback(error, double)
}