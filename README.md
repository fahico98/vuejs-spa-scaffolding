**Question:** Do I need to call the `/sanctum/csrf-cookie` endpoint every time I make an unauthenticated request ?

**Response:** No, You only do that for any unauthenticated request that isn't a `GET`  request. For example: `POST` request to `/login`, `/register`, 
`/reset-password`.

Source [here](https://www.youtube.com/watch?v=2zKoS8GsKK8).