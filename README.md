<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



# Simple Frontend JS Application

This is a simple html/javascript front end application that renders a message from a server.  The server is currently hardcoded to `http://localhost:5001/` with a selection for two methods `getSomeData` and `getSomeDataFromFile`.

It is meant to run in parallel with the [Simple Backend Flask Application](https://github.com/spaceshiptrip/TechInterview-Backend)

## Install
If you do not want to run with Docker, skip this step

1. Build Dockerfile:
   ```
   docker build -t fe:dev .
   ```

## Execution
Dockerized version:
1. Run Dockerfile:
   ```
   docker run -it --rm -v $(PWD):/app -v /app/node_modules -p 3001:3000 -e CHOKIDAR_USEPOLLING=true --name fe --rm fejs:dev
   ```

Non Dockerized version:
1. Start the app:
   ```
   npm start
   ```
## Usage
1. Open browser to `http://localhost:3001`


## More Info
#### Docker
The Docker run command:
```
docker run -it --rm -v $(PWD):/app -v /app/node_modules -p 3001:3000 -e CHOKIDAR_USEPOLLING=true --name fe --rm fejs:dev
```
* -p 3001:3000
   * This redirects 3001 from your browser or external application to the container's port 3000 because the application is listening on port 3000
* --name fe
   * This is the simple name for the container, you can stop it with:
   ```
   docker stop fe
   ```
* --rm fejs:dev
   * This is the name of the container you built from the first command
* -e CHOKIDAR_USEPOLLING=true
   * During development this allows you to hotswap code without having to rebuild/restart the docker container


#### Server code
This is the front end doing a simple HTTP request to a `localhost` backend server.  It expects a JSON object with the following structure:
```
{
	"message": "Your Message Here",
	"ok": true
}
```

The client will update the webpage with the message found in JSON.


h1. DEBUG
```
docker run -it --rm  --entrypoint sh simple
```

That will get you in the container shell and you can run the app manually to see the error message:
```
# docker run simple
```



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/spaceshiptrip/DevSeries-Frontend-JS?style=for-the-badge
[contributors-url]: https://github.com/spaceshiptrip/TechInterview-Backend/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/spaceshiptrip/DevSeries-Frontend-JS?style=for-the-badge
[forks-url]: https://github.com/spaceshiptrip/TechInterview-Backend/network/members
[issues-shield]: https://img.shields.io/github/issues/spaceshiptrip/DevSeries-Frontend-JS?style=for-the-badge
[issues-url]: https://github.com/spaceshiptrip/TechInterview-Backend/issues
[license-shield]: https://img.shields.io/github/license/spaceshiptrip/DevSeries-Frontend-JS?style=for-the-badge
[license-url]: https://github.com/spaceshiptrip/DevSeries-Frontend-JS/blob/main/LICENSE
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/jaytorres-robotics/
[product-screenshot]: images/screenshot.png

