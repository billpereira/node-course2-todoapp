const bcrypt = require('bcryptjs')

var password = "123abc!"

bcrypt.genSalt(10,(err,salt)=>{
    bcrypt.hash(password,salt,(err,hash)=>{
        console.log(hash)
    })
})

var hashedPassword = '$2a$10$mK9vzlmix5EBfaKMsVkYseZaDMcxQlZK8jdUZ75YS78weMSefPbH.'

bcrypt.compare(password,hashedPassword,(err, res)=>{
    console.log(res);
    
})



// const jwt = require('jsonwebtoken')

// var data = {
//     id:10
// }

// var token = jwt.sign(data, '123abc')
// // jwt.verify

// console.log(token);

// var decoded = jwt.verify(token, '123abc')
// console.log(decoded);



// const {SHA256} = require('crypto-js')

// var message = 'I am user number 4'

// var hash = SHA256(message).toString();

// console.log(`Message: ${message}`);
// console.log(`Hash: ${hash}`);


// var data = {
//     id: 4
// };

// var token = {
//     data,
//     hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// }

// // token.data.id = 5;
// // token.hash = SHA256(JSON.stringify(token.data)).toString()

// var resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();

// if(resultHash === token.hash){
//     console.log('Data was not changed');
    
// }else {
//     console.log('Data was changed. Do not trust');
    
// }