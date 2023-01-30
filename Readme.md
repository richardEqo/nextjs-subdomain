### Introduction to the project

We have 2 different project 
- Laning page (http://example.com:3083/)
- Dashboard (http://sub.example.com:3084/)


User can login from `http://example.com:3083/login` here, After that it will redirect to Dashboard (http://sub.example.com:3084/).

Dashboard is protected with user auth, so whenever user come into `Dashboard` authentication is requrired. it will redirect to `example.com` is user come without authentication.


`npm run dev or yarn dev`

open the [Landing page](http://example.com:3083/) with your browser to see the result.


### Sub Domain changes

- Go to your `/etc/hosts` add below record

```
127.0.0.1    example.com
127.0.0.1    subdomain.example.com
```


## Authors

- [@Nikunj Maniya](https://github.com/nikmaniya/)


