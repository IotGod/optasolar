# app
The Ethereum SOLA Token based token Ðapp for controlling your solar system, investing, and managing projects, made using the  Embark Framework, and Status.im, IPFS, and the Raiden Network. Runnng on EVM using Solidity smart contract scripting language.

## Dependencies

System dependencies:

Python NodeJS VirtualENV pip3 gcc

To build the project, you will need to install the following dependencies:
```npm install -g embark truffle ejs-cli```

You will now need to install µRaiden to connect to the Raiden Network and perform ERC20 token transactions off chain.

```virtualenv -p python3 env
. env/bin/activate
pip install microraiden

git clone git@github.com:raiden-network/microraiden.git
cd microraiden/
cd microraiden/microraiden/webui/microraiden
npm i && npm run build
```

## Compile Project

To compile the ejs templates, we need to use ```./do```

Next... you will want to connect to the blockchain to run the applications. Make sure you have Geth Installed [Installation Instructions](https://github.com/ethereum/go-ethereum/wiki/Building-Ethereum). Then, In a seperate session, use ```embark blockchain```

Next, run in another session, use ```embark run``` to run the platform. After this is launched, you can access everything at ```http://localhost:8000/```
