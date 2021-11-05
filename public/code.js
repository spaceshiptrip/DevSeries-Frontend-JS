let hostUrl = "http://localhost:5001";

let end_one = "/getSomeData";
let end_two = "/getSomeDataFromFile";

let requestUrl = hostUrl + end_two;

doFetch(requestUrl);

function doFetch(url) {
    var headers = {}

    fetch(url, {
        method: 'GET',
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: headers
    })
        .then(response => response.json())
        .then(data => updatePage(data.message))
}

function updatePage(response) {
    document.querySelector("#serverText").innerHTML = response;
}
