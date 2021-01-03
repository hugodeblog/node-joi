import Joi from 'joi';

const schema = Joi.object().keys({
  username: Joi.string().alphanum().min(6).max(16).required(),
  email: Joi.string().email(),
  password: Joi.string().regex(/^[a-zA-Z_0-9]{8,30}$/).required()
})

// ユーザー名が短すぎる
// emailが適当な文字列すぎる
const payload1 = {
  username: 'me',
  email: 'invalid_string',　
  password: '12345678'
}

// emailはなくてもOK
const payload2 = {
  username: 'testisok',
  password: '12345678'
}

// passwordに使用不可な文字
const payload3 = {
  username: 'testisok',
  password: '12345a_5AB*678'
}

console.log('-------------------------');
console.log('checking payload1 ......');
console.log('-------------------------');
var {error, value} = schema.validate(payload1, { abortEarly: false })

if(error){
  console.log(error.details);
} else {
  console.log(value);
}

console.log('-------------------------');
console.log('checking payload2 ......');
console.log('-------------------------');
var {error, value} = schema.validate(payload2, { abortEarly: false })

if(error){
  console.log(error.details);
} else {
  console.log(value);
}

console.log('-------------------------');
console.log('checking payload3 ......');
console.log('-------------------------');
var {error, value} = schema.validate(payload3, { abortEarly: false })

if(error){
  console.log(error.details);
} else {
  console.log(value);
}
