import React, { useState, useContext } from "react";

import "./Dashboard.css";
import VerticalBar from "./VerticalBar";
import ViewTransaction from "./ViewTransaction";
import SendCrypto from "./SendCrypto";
import { FIL, vault } from "../../assets/Images";
import LoadingScreen from "./LoadingPage/LoadingScreen";
import { AuthContext } from "../../Authorisation/AuthContext";



const Dashboard = () => {

  const authContext = useContext(AuthContext); // Access the AuthContext here
  const authorizedPublicKey = authContext.publicKey;
  const [loading, setLoading] = useState(false);
  const [selectedOption, setSelectedOption] = useState("history");
  const [publicId, setPublicId] = useState(authorizedPublicKey); // Replace with actual user public ID
  const [accountBalance, setAccountBalance] = useState("0.00"); // Replace with actual account balance


  const renderView = () => {
    switch (selectedOption) {

      case "send":
        return <SendCrypto onClose={() => { setSelectedOption("") }} setLoading={setLoading} />;

      default:
        return null;
    }
  };

  return (

    <>{loading && <LoadingScreen />}
      <div className="dashboard">
        <VerticalBar
          selectedOption={selectedOption}
          onSelectOption={setSelectedOption}
        />
        <div className="fid-logo">

          <img src={vault} alt="VAULT" className="vault-image" />
          <img src={FIL} alt="FIL" className="fil-image" />
        </div>


        <div className="center-view">



          <main className="ml-16 px-8">
            <div className="border-b-2 text-sm flex gap-4 justify-center border-gray-300">
              <div className=" border-blue-500 p-4 relative flex flex-col items-center gap-2">
                <a href="#">
                  <img
                    src="https://cryptologos.cc/logos/ethereum-eth-logo.png"
                    alt="eth"
                    className="h-8 w-8"
                  />Ethereum
                </a>
                <div className="h-0.5 bg-blue-500 w-full absolute -bottom-[1px]"></div>
              </div>

              <div className=" border-blue-500 p-4 flex flex-col items-center gap-2">
                <a href="#">
                  <img
                    src="https://seeklogo.com/images/R/ripple-xrp-logo-E97D62205B-seeklogo.com.png"
                    alt="ripple"
                    className="h-8 w-8"
                  />Ripple
                </a>

              </div>
              <div className=" border-blue-500 p-4 flex flex-col items-center gap-2">
                <a href="#">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt-zKsVKrLYyTYtD4Sa6di4AQcticu-O5FnFVSiSm3_Q&s"
                    alt="bitcoin"
                    className="h-8 w-8"
                  />Bitcoin
                </a>

              </div>

              <div className=" border-blue-500 p-4 flex flex-col items-center gap-2">
                <a href="#"><img
                  src="https://seeklogo.com/images/N/nft-logo-6202DDD5FF-seeklogo.com.png"
                  alt=""
                  className="h-8 w-8"
                />NFT
                </a>
              </div>

              <div className=" border-blue-500 p-4 flex flex-col items-center gap-2 justify-center">
                <a href="#">
                  <img
                    src="https://www.citypng.com/public/uploads/preview/download-gold-token-medal-seal-illustration-png-11639415418bl6dsuicrt.png?v=2023051122"
                    alt=""
                    className="h-8 w-8"
                  />Token
                </a>
                {/* <button onClick={""}>Token</button> */}
              </div>


            </div>
          </main>



          <h2><b>User Public ID:</b> {publicId}</h2>
          <h3><b>Account Balance:</b> {accountBalance}</h3>

          <button
            type="button"
            className="crypto-button"
            onClick={() => {
              setSelectedOption("send");
            }}
          >
            Send Crypto
          </button>
          <div className="trans">
            <ViewTransaction />
          </div>
          {renderView()}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
