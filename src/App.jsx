import { useEffect, useMemo, useState} from "react";

//import thirdweb provider
import { useWeb3 } from "@3rdweb/hooks";

const App = () => {

  //Use connectWallet hook provided by thirdweb
  const { connectWallet, address, error, provider} = useWeb3();
  console.log("Wallet Address:", address);

  //Case User has not connected its wallet - ask him to connect it
  if(!address){
    return (
      <div className="landing">
        <h1>Welcome to MetaDAO</h1>
        <button onClick={() => connectWallet("injected")} className="btn-hero">
          Connect your wallet!
        </button>
      </div>
    );
  }

  //Case User has connected its wallet correctly
  return (
    <div className="landing">
      <h1>Congrats, wallet connected, get ready!</h1>
    </div>
  );
};

export default App;
