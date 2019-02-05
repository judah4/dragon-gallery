# Dragons

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
docker build -t judah4/dragon-gallery:latest -t judah4/dragon-gallery:1.2.0 .
```

### Push To Docker Hub
```
docker push judah4/dragon-gallery:latest
```

### Run production
```
docker run -it -p 8080:8080 --rm --name dragon-gallery judah4/dragon-gallery
```

### Lints and fixes files
```
yarn run lint
```
