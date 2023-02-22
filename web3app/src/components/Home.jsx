import WalletBalance from './WalletBalance';
import { useEffect, useState } from 'react';

import { ethers } from 'ethers';
import MyNft from '../../../artifacts/contracts/MyNft.sol/MyNft.json';
import Navbar from './Navbar/Navbar';
import SideBar from './SideBar/SideBar';
import Main from './Main/main';

const contractAddress = '0xe72DA30852F24BbaD4D1CAd51bA47e5354C05CE8';

const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner();
const contract = new ethers.Contract(contractAddress, MyNft.abi, signer);


function Home() {
  const [totalMinted, setTotalMinted] = useState(0);
  useEffect(() => {
    getCount();

  }, []);

  const getCount = async () => {
    const count = await contract.count();
    setTotalMinted(parseInt(count));
  };



  return (
    <>
      <Navbar />
      <img className="menu" src="https://cdn1.iconfinder.com/data/icons/heroicons-ui/24/menu-512.png" alt="" />
      <div style={{ display: "flex", height: "100%" }}>
        <SideBar totalMinted = {totalMinted} />
        <Main signer={signer} contract={contract} />
      </div>

    </>
  );
}




export default Home;