import React from 'react'
import WalletBalance from '../WalletBalance'
import styles from './sideBar.module.css'
const SideBar = ({ totalMinted }) => {
  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <div style={{ fontWeight: "800", fontSize: "18px" }}>
          Minting
        </div>
        <div style={{ color: "#01e1b4", fontSize: "17px", marginTop: "10px" }}>
          Your own NFTs
        </div>
      </div>
      <div className={styles.section}>

        <div style={{ color: "#979797", fontSize: "17px", marginTop: "10px" }}>
          <WalletBalance />
          <h5 style={{ marginTop: "10px" }}>Total minted : {totalMinted}</h5>
        </div>
      </div>
      <div className={styles.section}>

        <div style={{ color: "#979797", fontSize: "17px", marginTop: "10px" }}>
          Non-fungible tokens (NFTs) are assets that have been tokenized via a blockchain. They are assigned unique identification codes and metadata that distinguish them from other tokens.
        </div>
      </div>
    </div>
  )
}

export default SideBar