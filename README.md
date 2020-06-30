# imgShare
imgShare is a web application to share images, comments, and more.

![](docs/screenshot1.png)

# Environment Variables
* `MONGODB_URI`, the mongodb database uri
* `PORT` the http server port. By default is `3000`

# Docker
```
docker-compose build
```
```
docker-compose up
```

# Improvements for the Future
- Input Validation (to avoid XSS)
- User Authentication