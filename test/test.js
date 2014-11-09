var Browser = require("zombie");
var assert = require("assert");

browser = new Browser({ debug: true });
browser.on("error", function(err) {
  console.log("Error:", err);
});
browser.on("loaded", function() {
  console.log("Loaded:", browser.statusCode);
});
browser.visit("http://localhost/", function () {
    assert(browser.error == null);
    assert.ok(browser.success);
});
console.log('complete');
