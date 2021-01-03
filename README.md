# Node.jsでJoiでパラメータのバリデーション

例えば、ユーザー登録におけるユーザー名、パスワードなどに何かしらの文字数の制約や禁則文字の条件をつけて、サーバーに渡ってきたパラメータがそれらの条件を満たしているのかのチェックはNode.jsでどうやるのだろうか？

そこで便利なのがオブジェクトのバリデーション用のJoiである。

https://github.com/hapijs/joi - Joi

このJoiというパッケージを使ってバリデーションする手順のサンプルである。

## 実行手順

```txt
$ npm run start

> node-joi@1.0.0 start
> node ./joi_test.mjs

-------------------------
checking payload1 ......
-------------------------
[
  {
    message: '"username" length must be at least 6 characters long',
    path: [ 'username' ],
    type: 'string.min',
    context: {
      limit: 6,
      value: 'me',
      encoding: undefined,
      label: 'username',
      key: 'username'
    }
  },
  {
    message: '"email" must be a valid email',
    path: [ 'email' ],
    type: 'string.email',
    context: {
      value: 'invalid_string',
      invalids: [Array],
      label: 'email',
      key: 'email'
    }
  }
]
-------------------------
checking payload2 ......
-------------------------
{ username: 'testisok', password: '12345678' }
-------------------------
checking payload3 ......
-------------------------
[
  {
    message: '"password" with value "12345a_5AB*678" fails to match the required pattern: /^[a-zA-Z_0-9]{8,30}$/',
    path: [ 'password' ],
    type: 'string.pattern.base',
    context: {
      name: undefined,
      regex: /^[a-zA-Z_0-9]{8,30}$/,
      value: '12345a_5AB*678',
      label: 'password',
      key: 'password'
    }
  }
]
```
