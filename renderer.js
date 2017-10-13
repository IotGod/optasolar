// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

function sendTx() {
  let myNotification = new Notification('SOLA Sent', {
  body: 'You sent 203.17 to "Hubot"'
})

myNotification.onclick = () => {
  console.log('Notification clicked')
}
}
