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


## Installation

### Prerequisite for Simple HTML / JavaScript Client
* To do development through Docker only:
  * [Docker](https://docs.docker.com/get-docker/)
* To do development outside of Docker containers:
  * nodejs: [binaries](https://nodejs.org/en/download/), [package managers](https://nodejs.org/en/download/package-manager/)

### Downloading this code from this repo
1. Create a directory to save the code:
   ```
   mkdir Workspace
   cd Workspace
   ```
2. Download this repo:
   ```
   git clone https://github.com/spaceshiptrip/DevSeries-Frontend-JS.git
   ```


## Build and Execute
* Change to the project directory
  ```
  cd DevSeries-Frontend-JS
  ```

### Building and Running with Docker
**Note: This is not necessary if you are not using Docker.**

* Build the docker container:
  ```
  docker build -t fe:dev .
  ```

* Run the app through the container:
  ```
  docker run -it --rm -v $(PWD):/app -v /app/node_modules -p 3000:3000 -e CHOKIDAR_USEPOLLING=true --name fe --rm fe:dev
  ```

### Non Dockerized Version
* Pre-requisites: 
  * nodejs
  
1. Install the app dependencies:
   ```
   yarn
   ```

2. Start the server:
   ```
   node index.js
   ```
   
3. Open browser to `http://localhost:3001`


## Stopping Server
* Dockerized version
  * Open a terminal prompt
  * If you used the run command listed above:
    ```
    docker stop fe
    ```
  * Replace `be` if you chose another name which can be found for port `3000`:
    ```
    docker ps
    ```
* Non Dockerized version
  * In the terminal running the server, press \<CTRL\>-c
  

## More Info
### Docker
The Docker run command:
```
docker run -it --rm -v $(PWD):/app -v /app/node_modules -p 3000:3000 -e CHOKIDAR_USEPOLLING=true --name fe --rm fe:dev
```
* -p 3000:3000
   * This redirects 3000 from your browser or external application to the container's port 3000 because the application is listening on port 3000
* --name fe
   * This is the simple name for the container, you can stop it with:
   ```
   docker stop fe
   ```
* --rm fe:dev
   * This is the name of the container you built from the first command
* -e CHOKIDAR_USEPOLLING=true
   * During development this allows you to hotswap code without having to rebuild/restart the docker container


### Server code
This is the front end doing a simple HTTP request to a `localhost` backend server.  It expects a JSON object with the following structure:
```
{
	"message": "Your Message Here",
	"ok": true
}
```

The client will update the webpage with the message found in JSON.


## DEBUG
```
docker run -it --rm  --entrypoint sh fe:dev
```

That will get you in the container shell and you can run the app manually to see the error message:
```
# docker run fe:dev
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

