const path = require('path');
const webpack = require('webpack');

const environment = process.env.NODE_ENV;

console.log('environment:::::', environment);

let ENVIRONMENT_VARIABLES = {
  'process.env.NODE_ENV': JSON.stringify('development'),
  'process.env.PORT': JSON.stringify('80'),
  'process.env.MONGO_URI': JSON.stringify('mongodb+srv://Indulge:Indulge1239@indulge.whxex.mongodb.net/Registration_Portal?retryWrites=true&w=majority'),
  'process.env.JWT_SECRET': JSON.stringify('3ef79f95a0b1faad1955ccfc8920b1cc1b2185ad02e932545f51cdac1915b7d9cb4fe7'),
  'process.env.JWT_EXPIRATION_MINUTES': JSON.stringify('10h'),
  'process.env.EMAIL_USERNAME': JSON.stringify('indulge1239@gmail.com'),
  'process.env.EMAIL_SERVICE': JSON.stringify('gmail'),
  'process.env.AUTH_TYPE': JSON.stringify('OAuth2'),
  'process.env.EMAIL_CLIENT_ID': JSON.stringify('403147936895-v7i6ojcl0s61ks6nt0vv2h0h6r4s2etd.apps.googleusercontent.com'),
  'process.env.EMAIL_CLIENT_SECRET': JSON.stringify('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'),
  'process.env.EMAIL_REDIRECT_URL': JSON.stringify('https://developers.google.com/oauthplayground'),
  'process.env.EMAIL_REFRESH_TOKEN': JSON.stringify('1//04yyMlW8BrMUNCgYIARAAGAQSNwF-L9Irqn6ete1It3ED7QO__0JJcV8ZbaNTJ-PyMVYCBMMRfGsQJNqv1hAa8KSE83B6kWW-gB8'),
  'process.env.UPLOAD_CLIENT_ID': JSON.stringify('729004042728-nkoj8322ugand7kcr9o9nt4fm7b1ra45.apps.googleusercontent.com'),
  'process.env.UPLOAD_CLIENT_SECRET': JSON.stringify('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'),
  'process.env.UPLOAD_REDIRECT_URI': JSON.stringify('https://developers.google.com/oauthplayground'),
  'process.env.UPLOAD_REFRESH_TOKEN': JSON.stringify('1//04MHUmXpxT2l9CgYIARAAGAQSNwF-L9IrVlIuCw0WIKDWdQ65d3aLoVXpveZ7UxPzVY1oVjEBdBjber7i7aoFaxWW6vHZsf1oFqM'),
  'process.env.PRIVATE_KEY': JSON.stringify('-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCyr4LHBI1qoVJu\nHHdKedTM4dF2Yl9D/wwWj8rhkx2k7Li6f2ZjZIHeu3iSHaA2+qn1snakL1JSYErc\nmJHs6S6rXEB0ISSaLyML2QpzTqX+aeTyDk3o0qiequRoo3HNrJ5283w4Y99y7+oG\nvF3IoOUQnBMugPD+J09bs+CMaz8Z4RP3cECyMMNiv1evrf7HvJOYrbRmuyJ+hQzK\nfbqRBaRvU6grvQHyuO2bl1HEP2hPNCC3Ur5pH8KvQ9OdjaNkWe+UAYOKTD3QnaR8\nJP6mBtqgjALflQ7dttmeW6NILGeuKplGUI698SUkZNMf0/QyZxdXiomnNcTUaHwi\nvxUAnd21AgMBAAECggEAAnysjSOUP6SGLAUrveF145zNrbWkeM2kd+3sF3lU43ZD\nWJ6BqNF9zev9u3Q7xiLKryJFl3cXJhFetApQQaQPORBcJKGky5vrWMoJD14hXlSl\nUfR+rhu8gBTbKqpXtlKi6VSYk9pZV6qyLwImgK6InFNnyvES1Elsx9ci7CFpVpgE\nOx05+t3pPG6ZaCc56O90pH2rhJ7a9b+3Dtm9hP1BFIXHL/phs/t0TIQLKFkJG1OJ\nKXILyehbY4Dx5pEHqybGICah17XAbXVp0sM7K6xhfrNaE/2S/LuoB9Qe3u1A+sFc\n+JYmyYp48ckBFtCnr1c+C58o7EZWp528Dq4oK9IiQwKBgQDwwXCqLKi/uPWn3j0t\nG2B0kTQ9Erc9UYDYRmvKlkOgUT1SnGWbuY1i22qcV3Wf17DRsEIGVo+5SMV0wuFh\nMJKFUYcY0HtVJMi79NibhYqEGMPhZMJAuUyCQ1XC8picIKExlAoiohSeIxG2AkCd\nubOSmRVgZQ/Cv/XiOrQuaOr1swKBgQC9//A4JmvfpMhIL++P0L3n8XMCNyTNYoZX\nQFl+NHLCdhBtq7bo83pTbJXDfOsNi64EhSjKDBEZe7q8uoLX7NZaJLQjoBA0J2jH\nXMO6q3yeQrDyGBXXFWg1ipj5iGMI90rllQ2USAmrXuOjIUu5osW++Gax9Bndy45u\nMhL83R769wKBgQDb2WlOnPWEDhyVrIXk2OkdyTMQyjR2VCT6WmQ4XTtn/IepFpRa\nvfh0W7VhCySoUEhxUykXrJgWNHPLieJR5A8Im0hoyoi1WZ/Ms2vRqQKyWgMVofMZ\nM5zAH0kDepENkWZhZbRTp/p35cJYmHn1Dg0DQ7OXkPHxf2XDrqO29awJrQKBgCz6\nG0mPftXQUkEUZ+dpiKsRcyJBH4snGZop94VysP/rpvPvRDtc98Yr3EAMoC/yst0L\nEJ7TwHCB47Ctji/DNvLb4XDVgUB3W8xl30efNL7aFr0YioMB5EtYZeIcMSV8NNSo\nNjC15OQWcFi7lwt4xsrwTo8ts7nXZ/4aCHind5/9AoGALhgF+soTrqHLWJ7WwW0F\nEUV2jsyxEyuNqksdaubDR6sKaSkSulZcLJZFwwoABLc8NccfiBkMtOYI5+VGVdEI\nX5TLoCEqLSbYGmCMV1YtZqcZqAlvqzadGsiffvmXm0GmnRckRGwigH+C5KC+PZcI\nV3eqKNc5tT9Fgc32jxvAsP4=\n-----END PRIVATE KEY-----\n'),
  'process.env.CLIENT_EMAIL': JSON.stringify('gsheets-service@gsheets-service-345905.iam.gserviceaccount.com'),
};

if (environment === 'test') {
  ENVIRONMENT_VARIABLES = {
    'process.env.NODE_ENV': JSON.stringify('test'),
    'process.env.PORT': JSON.stringify('80'),
    'process.env.MONGO_URI': JSON.stringify('mongodb+srv://Indulge:Indulge1239@indulge.whxex.mongodb.net/Registration_Portal?retryWrites=true&w=majority'),
    'process.env.JWT_SECRET': JSON.stringify('3ef79f95a0b1faad1955ccfc8920b1cc1b2185ad02e932545f51cdac1915b7d9cb4fe7'),
  'process.env.JWT_EXPIRATION_MINUTES': JSON.stringify('10h'),
  'process.env.EMAIL_USERNAME': JSON.stringify('indulge1239@gmail.com'),
  'process.env.EMAIL_SERVICE': JSON.stringify('gmail'),
  'process.env.AUTH_TYPE': JSON.stringify('OAuth2'),
  'process.env.EMAIL_CLIENT_ID': JSON.stringify('403147936895-v7i6ojcl0s61ks6nt0vv2h0h6r4s2etd.apps.googleusercontent.com'),
  'process.env.EMAIL_CLIENT_SECRET': JSON.stringify('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'),
  'process.env.EMAIL_REDIRECT_URL': JSON.stringify('https://developers.google.com/oauthplayground'),
  'process.env.EMAIL_REFRESH_TOKEN': JSON.stringify('1//04yyMlW8BrMUNCgYIARAAGAQSNwF-L9Irqn6ete1It3ED7QO__0JJcV8ZbaNTJ-PyMVYCBMMRfGsQJNqv1hAa8KSE83B6kWW-gB8'),
  'process.env.UPLOAD_CLIENT_ID': JSON.stringify('729004042728-nkoj8322ugand7kcr9o9nt4fm7b1ra45.apps.googleusercontent.com'),
  'process.env.UPLOAD_CLIENT_SECRET': JSON.stringify('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'),
  'process.env.UPLOAD_REDIRECT_URI': JSON.stringify('https://developers.google.com/oauthplayground'),
  'process.env.UPLOAD_REFRESH_TOKEN': JSON.stringify('1//04MHUmXpxT2l9CgYIARAAGAQSNwF-L9IrVlIuCw0WIKDWdQ65d3aLoVXpveZ7UxPzVY1oVjEBdBjber7i7aoFaxWW6vHZsf1oFqM'),
  'process.env.PRIVATE_KEY': JSON.stringify('-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCyr4LHBI1qoVJu\nHHdKedTM4dF2Yl9D/wwWj8rhkx2k7Li6f2ZjZIHeu3iSHaA2+qn1snakL1JSYErc\nmJHs6S6rXEB0ISSaLyML2QpzTqX+aeTyDk3o0qiequRoo3HNrJ5283w4Y99y7+oG\nvF3IoOUQnBMugPD+J09bs+CMaz8Z4RP3cECyMMNiv1evrf7HvJOYrbRmuyJ+hQzK\nfbqRBaRvU6grvQHyuO2bl1HEP2hPNCC3Ur5pH8KvQ9OdjaNkWe+UAYOKTD3QnaR8\nJP6mBtqgjALflQ7dttmeW6NILGeuKplGUI698SUkZNMf0/QyZxdXiomnNcTUaHwi\nvxUAnd21AgMBAAECggEAAnysjSOUP6SGLAUrveF145zNrbWkeM2kd+3sF3lU43ZD\nWJ6BqNF9zev9u3Q7xiLKryJFl3cXJhFetApQQaQPORBcJKGky5vrWMoJD14hXlSl\nUfR+rhu8gBTbKqpXtlKi6VSYk9pZV6qyLwImgK6InFNnyvES1Elsx9ci7CFpVpgE\nOx05+t3pPG6ZaCc56O90pH2rhJ7a9b+3Dtm9hP1BFIXHL/phs/t0TIQLKFkJG1OJ\nKXILyehbY4Dx5pEHqybGICah17XAbXVp0sM7K6xhfrNaE/2S/LuoB9Qe3u1A+sFc\n+JYmyYp48ckBFtCnr1c+C58o7EZWp528Dq4oK9IiQwKBgQDwwXCqLKi/uPWn3j0t\nG2B0kTQ9Erc9UYDYRmvKlkOgUT1SnGWbuY1i22qcV3Wf17DRsEIGVo+5SMV0wuFh\nMJKFUYcY0HtVJMi79NibhYqEGMPhZMJAuUyCQ1XC8picIKExlAoiohSeIxG2AkCd\nubOSmRVgZQ/Cv/XiOrQuaOr1swKBgQC9//A4JmvfpMhIL++P0L3n8XMCNyTNYoZX\nQFl+NHLCdhBtq7bo83pTbJXDfOsNi64EhSjKDBEZe7q8uoLX7NZaJLQjoBA0J2jH\nXMO6q3yeQrDyGBXXFWg1ipj5iGMI90rllQ2USAmrXuOjIUu5osW++Gax9Bndy45u\nMhL83R769wKBgQDb2WlOnPWEDhyVrIXk2OkdyTMQyjR2VCT6WmQ4XTtn/IepFpRa\nvfh0W7VhCySoUEhxUykXrJgWNHPLieJR5A8Im0hoyoi1WZ/Ms2vRqQKyWgMVofMZ\nM5zAH0kDepENkWZhZbRTp/p35cJYmHn1Dg0DQ7OXkPHxf2XDrqO29awJrQKBgCz6\nG0mPftXQUkEUZ+dpiKsRcyJBH4snGZop94VysP/rpvPvRDtc98Yr3EAMoC/yst0L\nEJ7TwHCB47Ctji/DNvLb4XDVgUB3W8xl30efNL7aFr0YioMB5EtYZeIcMSV8NNSo\nNjC15OQWcFi7lwt4xsrwTo8ts7nXZ/4aCHind5/9AoGALhgF+soTrqHLWJ7WwW0F\nEUV2jsyxEyuNqksdaubDR6sKaSkSulZcLJZFwwoABLc8NccfiBkMtOYI5+VGVdEI\nX5TLoCEqLSbYGmCMV1YtZqcZqAlvqzadGsiffvmXm0GmnRckRGwigH+C5KC+PZcI\nV3eqKNc5tT9Fgc32jxvAsP4=\n-----END PRIVATE KEY-----\n'),
  'process.env.CLIENT_EMAIL': JSON.stringify('gsheets-service@gsheets-service-345905.iam.gserviceaccount.com'),
  };
} else if (environment === 'production') {
  ENVIRONMENT_VARIABLES = {
    'process.env.NODE_ENV': JSON.stringify('production'),
    'process.env.PORT': JSON.stringify('80'),
    'process.env.MONGO_URI': JSON.stringify('mongodb+srv://Indulge:Indulge1239@indulge.whxex.mongodb.net/Registration_Portal?retryWrites=true&w=majority'),
    'process.env.JWT_SECRET': JSON.stringify('3ef79f95a0b1faad1955ccfc8920b1cc1b2185ad02e932545f51cdac1915b7d9cb4fe7'),
  'process.env.JWT_EXPIRATION_MINUTES': JSON.stringify('10h'),
  'process.env.EMAIL_USERNAME': JSON.stringify('indulge1239@gmail.com'),
  'process.env.EMAIL_SERVICE': JSON.stringify('gmail'),
  'process.env.AUTH_TYPE': JSON.stringify('OAuth2'),
  'process.env.EMAIL_CLIENT_ID': JSON.stringify('403147936895-v7i6ojcl0s61ks6nt0vv2h0h6r4s2etd.apps.googleusercontent.com'),
  'process.env.EMAIL_CLIENT_SECRET': JSON.stringify('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'),
  'process.env.EMAIL_REDIRECT_URL': JSON.stringify('https://developers.google.com/oauthplayground'),
  'process.env.EMAIL_REFRESH_TOKEN': JSON.stringify('1//04yyMlW8BrMUNCgYIARAAGAQSNwF-L9Irqn6ete1It3ED7QO__0JJcV8ZbaNTJ-PyMVYCBMMRfGsQJNqv1hAa8KSE83B6kWW-gB8'),
  'process.env.UPLOAD_CLIENT_ID': JSON.stringify('729004042728-nkoj8322ugand7kcr9o9nt4fm7b1ra45.apps.googleusercontent.com'),
  'process.env.UPLOAD_CLIENT_SECRET': JSON.stringify('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'),
  'process.env.UPLOAD_REDIRECT_URI': JSON.stringify('https://developers.google.com/oauthplayground'),
  'process.env.UPLOAD_REFRESH_TOKEN': JSON.stringify('1//04MHUmXpxT2l9CgYIARAAGAQSNwF-L9IrVlIuCw0WIKDWdQ65d3aLoVXpveZ7UxPzVY1oVjEBdBjber7i7aoFaxWW6vHZsf1oFqM'),
  'process.env.PRIVATE_KEY': JSON.stringify('-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCyr4LHBI1qoVJu\nHHdKedTM4dF2Yl9D/wwWj8rhkx2k7Li6f2ZjZIHeu3iSHaA2+qn1snakL1JSYErc\nmJHs6S6rXEB0ISSaLyML2QpzTqX+aeTyDk3o0qiequRoo3HNrJ5283w4Y99y7+oG\nvF3IoOUQnBMugPD+J09bs+CMaz8Z4RP3cECyMMNiv1evrf7HvJOYrbRmuyJ+hQzK\nfbqRBaRvU6grvQHyuO2bl1HEP2hPNCC3Ur5pH8KvQ9OdjaNkWe+UAYOKTD3QnaR8\nJP6mBtqgjALflQ7dttmeW6NILGeuKplGUI698SUkZNMf0/QyZxdXiomnNcTUaHwi\nvxUAnd21AgMBAAECggEAAnysjSOUP6SGLAUrveF145zNrbWkeM2kd+3sF3lU43ZD\nWJ6BqNF9zev9u3Q7xiLKryJFl3cXJhFetApQQaQPORBcJKGky5vrWMoJD14hXlSl\nUfR+rhu8gBTbKqpXtlKi6VSYk9pZV6qyLwImgK6InFNnyvES1Elsx9ci7CFpVpgE\nOx05+t3pPG6ZaCc56O90pH2rhJ7a9b+3Dtm9hP1BFIXHL/phs/t0TIQLKFkJG1OJ\nKXILyehbY4Dx5pEHqybGICah17XAbXVp0sM7K6xhfrNaE/2S/LuoB9Qe3u1A+sFc\n+JYmyYp48ckBFtCnr1c+C58o7EZWp528Dq4oK9IiQwKBgQDwwXCqLKi/uPWn3j0t\nG2B0kTQ9Erc9UYDYRmvKlkOgUT1SnGWbuY1i22qcV3Wf17DRsEIGVo+5SMV0wuFh\nMJKFUYcY0HtVJMi79NibhYqEGMPhZMJAuUyCQ1XC8picIKExlAoiohSeIxG2AkCd\nubOSmRVgZQ/Cv/XiOrQuaOr1swKBgQC9//A4JmvfpMhIL++P0L3n8XMCNyTNYoZX\nQFl+NHLCdhBtq7bo83pTbJXDfOsNi64EhSjKDBEZe7q8uoLX7NZaJLQjoBA0J2jH\nXMO6q3yeQrDyGBXXFWg1ipj5iGMI90rllQ2USAmrXuOjIUu5osW++Gax9Bndy45u\nMhL83R769wKBgQDb2WlOnPWEDhyVrIXk2OkdyTMQyjR2VCT6WmQ4XTtn/IepFpRa\nvfh0W7VhCySoUEhxUykXrJgWNHPLieJR5A8Im0hoyoi1WZ/Ms2vRqQKyWgMVofMZ\nM5zAH0kDepENkWZhZbRTp/p35cJYmHn1Dg0DQ7OXkPHxf2XDrqO29awJrQKBgCz6\nG0mPftXQUkEUZ+dpiKsRcyJBH4snGZop94VysP/rpvPvRDtc98Yr3EAMoC/yst0L\nEJ7TwHCB47Ctji/DNvLb4XDVgUB3W8xl30efNL7aFr0YioMB5EtYZeIcMSV8NNSo\nNjC15OQWcFi7lwt4xsrwTo8ts7nXZ/4aCHind5/9AoGALhgF+soTrqHLWJ7WwW0F\nEUV2jsyxEyuNqksdaubDR6sKaSkSulZcLJZFwwoABLc8NccfiBkMtOYI5+VGVdEI\nX5TLoCEqLSbYGmCMV1YtZqcZqAlvqzadGsiffvmXm0GmnRckRGwigH+C5KC+PZcI\nV3eqKNc5tT9Fgc32jxvAsP4=\n-----END PRIVATE KEY-----\n'),
  'process.env.CLIENT_EMAIL': JSON.stringify('gsheets-service@gsheets-service-345905.iam.gserviceaccount.com'),
  };
}

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'api.bundle.js',
  },
  target: 'node',
  plugins: [
    new webpack.DefinePlugin(ENVIRONMENT_VARIABLES),
  ],
};