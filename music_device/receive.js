// Create a client instance: Broker, Port, Websocket Path, Client ID

// Create a client instance
client = new Paho.MQTT.Client(broker, Number(port), clientid);

// set callback handlers
client.onConnectionLost = onConnectionLost;
client.onMessageArrived = onMessageArrived;

// connect the client
client.connect({onSuccess:onConnect});


// called when the client connects
function onConnect() {
  // Once a connection has been made, make a subscription and send a message.
  //console.log(" receiver onConnect");
  document.getElementById("status").innerHTML = 'Connected'
  client.subscribe(topic);
  client.subscribe(chattopic);

}

// called when the client loses its connection
function onConnectionLost(responseObject) {
  if (responseObject.errorCode !== 0) {
    //console.log("onConnectionLost:"+responseObject.errorMessage);
    document.getElementById("status").innerHTML = '<p style="color:red">Disconnected ?????</p>';
  }
}

// called when a message arrives
function onMessageArrived(message) {
  var msg=message.payloadString;
  //console.log("onMessageArrived:"+msg);
  if (msg=="play") {if (interact) playTrack(); }
  if (msg=="pause") {pauseTrack(); }
  //if (msg=="next") {nextTrack(); }
  //if (msg=="prev") {prevTrack(); }
  if (msg.indexOf("seek")==0) {
    //seekTo();
    curr_track.currentTime = msg.slice(4);
 }
 if (msg.indexOf("aseek")==0) {
  //console.log("hhhhhhhhhhhhh:"+isPlaying);
  if (!isPlaying && interact){ playTrack();}
  //console.log(Math.abs(curr_track.currentTime-msg.slice(5)));
  if (Math.abs(curr_track.currentTime-msg.slice(5))>3)  {curr_track.currentTime = msg.slice(5);
    //console.log(curr_track.currentTime+msg.slice(5));
  }
}
if (msg.indexOf("chat")==0)  {
if (msg.indexOf(myname)==4) { }
else{
  chatmsg = msg.slice(4);
  //console.log(chatmsg);
  document.getElementById("chathistory").value = document.getElementById("chathistory").value+"\n"+chatmsg;
  openForm();
  document.getElementById("chathistory").scrollTop = document.getElementById("chathistory").scrollHeight;
}
}

}
