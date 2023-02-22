import { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import { showToastMessage } from './notifications'
import { ToastContainer } from 'react-toastify'

function WalletBalance() {

  const [balance, setBalance] = useState(1);

  const getBalance = async () => {
    const [account] = await window.ethereum.request({ method: 'eth_requestAccounts' });
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const balance = await provider.getBalance(account);
    setBalance(ethers.utils.formatEther(balance));
    if (balance != 1)
      showToastMessage("success", "Connected to MetaMask", "20000")
  };
  useEffect(() => {
    <ToastContainer className="toast-position" />
    getBalance();
  }, []);
  return (
    <div>
      <h4 style={{ color: "#ffb552" }} >MetaMask</h4>
      <h5 style={{ marginTop: "10px" }}>Your Balance is : {(balance + "").substring(0, 5)} MATIC</h5>
    </div>
  );
};

export default WalletBalance;