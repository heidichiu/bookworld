const environmentUrls = new Map();

environmentUrls.set("localhost", "http://localhost:8080");
environmentUrls.set("https://bookworld-client.herokuapp.com/", "https://bookworld-api.herokuapp.com/");

export default environmentUrls.get(window.location.hostname);
