
function getParams(){
  var idx = document.URL.indexOf('?');
  var params = new Array();
  if (idx != -1) {
      var pairs = document.URL.substring(idx+1, document.URL.length).split('&');
      for (var i=0; i<pairs.length; i++){
          nameVal = pairs[i].split('=');
          params[nameVal[0]] = nameVal[1];
      }
  }
  return params;
}
params = getParams();
code = unescape(params["psw"]);

var clientid= unescape(params["email"]);


if (clientid =="janardan18@receiver4" || clientid =="kapil@gmail.com" || clientid == "nitesh@gmail.com" || 
clientid == "nitesh2@gmail.com" || clientid == "kapil2@gmail.com" || clientid == "kapil3@gmail.com" ||clientid == "nitesh3@gmail.com") {  }
else {
  alert("Your clientID (email) is not registered.)"); 
  window.history.back();
  throw new Error("clientID wrong!");
}

var broker= "broker.hivemq.com";
var port=8000;
var topic="j1a2n3a4r5d6a7n8/lecture81/"+code;
var myname= unescape(params["myname"]);
var chattopic= "j1a2n3a4r5d6a7n8/chat81/"+code;

//console.log("clientid = " + clientid );
//console.log("topic = " + topic );
//console.log("myname = " + myname );