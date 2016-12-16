const http = require('http');
const url = require('url')

const months = [
  "January", "February", "March",
  "April", "May", "June", "July",
  "August", "September", "October",
  "November", "December"
];

const timeStamp = {
  getTime: function(time) {
    let date = new Date(time);
    // Checks if time is a number, if it is, treat it as unix-time
    if (isNaN(time) == false)  {
      date = new Date(time * 1000);
      let natural = months[date.getMonth()] + " " + date.getDate() + ", " +
        date.getFullYear();
      return { "Unix": time, "Natural": natural }
    }
    let natural = months[date.getMonth()] + " " + date.getDate() + ", " +
      date.getFullYear();
    // if getTime returns null, return null for all objects
    if (!date.getTime()){
      return { "Natural": null, "Unix": null }
    }
    return {
      "Natural": natural,
      "Unix": date.getTime() / 1000,
    };
  }
}

const server = http.createServer(function(req, res) {
  let parsedUrl = url.parse(req.url, true)
  let resolved = timeStamp.getTime;
  let time = decodeURI(parsedUrl.path.slice(1)); // remove spaces and stuff from url
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(resolved(time)));
});
let port = process.env.PORT || 4000;
server.listen(port);
console.log("port" + port);
