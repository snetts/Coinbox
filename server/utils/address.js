
const create = (client) => {
  if (!client) {
    let error = new Error('Wallet client required')
    return Promise.reject(error)
  }
  return new Promise((resolve, reject) => {
    client.createAddress({}, (err, address) => {
      if (err) return reject(err)
      return resolve(address)
    })
  })
}

const get = (client) => {
  if (!client) {
    let error = new Error('Wallet client required')
    return Promise.reject(error)
  }
  return new Promise((resolve, reject) => {
    client.getMainAddresses({}, (err, addresses) => {
      if (err) return reject(err)
      return resolve(addresses)
    })
  })
}

exports.create = create
exports.get = get
