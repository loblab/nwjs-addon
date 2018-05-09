
const addon = require('./build/Release/hello');

$(document).ready(function() {

  $("#hello").click(function() {
    console.log(addon.hello());
    $("#message").append(addon.hello());
  });

  $("#bye").click(function() {
    console.log(addon.bye());
    $("#message").append(addon.bye());
  });

});

