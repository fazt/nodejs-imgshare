# imgShare

imgShare is a web application to share images, comments, and more.

![](docs/screenshot1.png)

# Environment Variables

- `MONGODB_URI`, the mongodb database uri
- `PORT` the http server port. By default is `3000`

# Installation

```
git clone https://github.com/FaztTech/nodejs-imgshare
cd nodejs-imagshare
npm install
npm run build
npm start
```

# Docker

```
docker-compose build
```

```
docker-compose up
```

# Tutorials

- [Youtube (es)](https://youtu.be/TqC3e8nBycg)

# Improvements for the Future

- [x] Update with es6
- [x] add user authentication
- [ ] Update docker compose
- [ ] add input validation
- [ ] add cloud storage for assets
- [ ] update public/js/scripts.js with vanilla js
- [ ] provides an API for client consumption
- [ ] hide /profile view from not authenticated users
- [ ] validate routes just for authenticated users
- [ ] add google icons from google fonts

## Resources

- [Colors](https://www.color-hex.com/color-palette/26292)
