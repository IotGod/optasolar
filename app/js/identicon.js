var jazzicon = require('jazzicon')

var body = document.querySelector('body');

function generateIcon(accountParse,avatarSize) {
 var addr = accountParse.slice(2, 10);
  var seedOut = parseInt(addr, 16);

  var crazygringo = generateIdenticon(avatarSize, seedOut);
  return crazygringo;
}

  function fillAvatar() {
    document.getElementById("insert-avatar-48").innerHTML = generateIcon(web3.eth.coinbase,48);
}

fillAvatar();
