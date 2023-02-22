import React, { useEffect, useState } from 'react'
import styles from './card.module.css'
import { ethers } from 'ethers';
import { showToastMessage } from '../notifications'
import { ToastContainer } from 'react-toastify'
const Card = ({ src, name, add, contract, tokenId, signer, getCount }) => {

  const contentId = "QmesCaTzj39MCn2FuR8Mid5n98vBy4PFzah65um9k6Gr7x";
  const [count, setCount] = useState(0);
  const metadataURI = `${contentId}/${count}.json`;
  const imageURI = `NFTs/${tokenId}.png`;
  const [isMinted, setIsMinted] = useState(false);
  useEffect(() => {
    getMintedStatus();
    Nftcount()
  }, [isMinted]);

  const getMintedStatus = async () => {
    const result = await contract.isContentOwned(metadataURI);
    setIsMinted(result);
    add = result
  };
  const Nftcount = async () => {
    const result = await contract.count();
    setCount(result);
  };


  const mintToken = async () => {
    const connection = contract.connect(signer);
    const addr = connection.address;
    const result = await contract.payToMint(addr, metadataURI, {
      value: ethers.utils.parseEther('0.05'),
    });

    showToastMessage("warning", "Minting NFT !", "15000")
    await result.wait();
    getMintedStatus();
    getCount();
  };

  async function getURI() {
    const uri = await contract.tokenURI(tokenId);
    showToastMessage("info", "URI : " + uri, "6000")
  }
  return (
    <div className={styles.container} style={{ cursor: add ? "pointer" : "" }} >
      {/* <ToastContainer id="toast-small" /> */}
      <div className={styles.nft} onClick={add ? mintToken : () => { }} >
        <img src={add ? src : imageURI} alt="NFT" />
      </div>
      <div className={styles.bottom}>
        <div className={styles.name}>{name}</div>
        {!add && <div className={styles.btn} onClick={() => { getURI() }}> details </div>}
      </div>
    </div>
  )
}

export default Card