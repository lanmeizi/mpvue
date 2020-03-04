function createFly() {
  if (mpvuePlatform === 'wx') {
    const Fly = require('flyio/dist/npm/wx')
    return new Fly()
  }
  return null
}

function handleError(err) {
  console.log('err==>', err)
}

export function get(url, params = {}) {
  const fly = createFly()
  if (fly) {
    return new Promise((resolve, reject) => {
      fly.get(url, params).then(response => {
        console.log('response==>', response)
        resolve(response)
      }).catch(err => {
        handleError(err)
        reject(err)
      })
    })
  }
}

export function post(url, params = {}) {
  const fly = createFly()
  if (fly) {
    return new Promise((resolve, reject) => {
      fly.post(url, params).then(response => {
        console.log('response==>', response)
        resolve(response)
      }).catch(err => {
        handleError(err)
        reject(err)
      })
    })
  }
}
