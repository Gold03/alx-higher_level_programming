/* fetches from https://fourtonfish.com/hellosalut/?lang=fr and displays the value 
of hello from that fetch in the HTML tag DIV#hello*/
$.getJSON("https://fourtonfish.com/hellosalut/?lang=fr", function(resp){
    $("#hello").text(resp.hello);
});
