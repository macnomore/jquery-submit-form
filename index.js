let script = document.createElement("script");
script.src = "https://code.jquery.com/jquery-3.5.1.min.js";
script.type = "text/javascript";

$(document).ready(function() {
  $("#formButton").click(function() {
    $("#contactForm").toggle();
  });
});
