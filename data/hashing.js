const {SHA256} = require('crypto-js')
const jwt = require('jsonwebtoken')

msg = "My name is Reena"
hash = SHA256(msg).toString();

console.log("Massage: "+ msg)
console.log("Hash Value: "+hash)

token = jwt.sign('priti','123')
console.log("Encoded Data: ",token)
console.log(`Decoded data: ${jwt.verify(token,'123')}`)
//encode