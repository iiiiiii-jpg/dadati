function openForm() {
  document.getElementById("myForm").style.display = "block";
  }

  function closeForm() {
  document.getElementById("myForm").style.display = "none";
 }
 closeForm();

 sendchat=function () {
  //document.getElementById("myTextarea").value = "Fifth Avenue, New York City";

  msg= "chat"+ myname + ": " + document.getElementById("chatbox").value;
  //console.log(msg);
  message = new Paho.MQTT.Message(msg);
  message.destinationName = chattopic;  
  client.send(message);
  document.getElementById("chathistory").value = document.getElementById("chathistory").value+"\n"+"You" + ": " + document.getElementById("chatbox").value;
  document.getElementById("chathistory").scrollTop = document.getElementById("chathistory").scrollHeight;
  
  document.getElementById("chatbox").value="";


 }
 document.getElementById("chathistory").rows = "5";

