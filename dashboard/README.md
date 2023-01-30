# Dashboard Page

### Getting Started

`npm run dev or yarn dev`

open the [http://example.com:3083](http://example.com:3083/) with your browser to see the result.

## Configuration Options

- Create .env file

copy from .env.example

`
NEXT_PUBLIC_ROOT_URL="http://sub.example.com:3084"
JWT_SECRET="your jwt secret"
NEXT_PUBLIC_MAIN_DOMAIN_URL="http://example.com:3083"
`

- User can login from here `http://example.com:3083/login` and it will be direct to [Dashboard](http://sub.exmaple.com:3084)

- If user is already logged in than it will automatically redirect to Dashboard.
- if the user not logged in then the `dashboard` will automatically redirect to the `example.com` and the user should be login first from the example.com then it will redirect to the  `http://sub.example.com:3084` website.

## Authors

- [@Nikunj Maniya](https://github.com/nikmaniya/)
