const messages = JSON.parse(document.currentScript.getAttribute("messages"));
const messageType = JSON.parse(
  document.currentScript.getAttribute("messageType")
);

console.log(messages, messageType);

if (messages.length > 0) {
  const messagesSpot = createMessageSpot();
  const messagesList = createMessageList();

  for (const msg of messages) {
    const message = document.createElement("li");
    message.innerText = msg;
    messagesList.appendChild(message);
  }
  messagesSpot.appendChild(messagesList);
  document.body.appendChild(messagesSpot);
}

function createMessageSpot() {
  const messagesSpot = document.createElement("div");
  messagesSpot.setAttribute(
    "style",
    "fontSize:22px;margin:0px;display:flex;flex-direction:column;justify-content:center;align-items:center;"
  );
  return messagesSpot;
}

function createMessageList() {
  const color = messageType === "success" ? "#00b947" : "#ec484a";
  const backgroundColor = messageType === "success" ? "#a7f1bc" : "#FBDADB";
  const messagesList = document.createElement("ul");
  messagesList.setAttribute(
    "style",
    `margin:0px;padding:12px 20px 12px 37px;border-radius:5px;color:${color};background-color:${backgroundColor};`
  );
  return messagesList;
}
