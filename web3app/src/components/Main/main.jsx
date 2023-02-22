import React, { useEffect, useState } from 'react'
import Card from '../Card/Card'
import styles from './main.module.css'
import { showToastMessage } from '../notifications'
import { ToastContainer } from 'react-toastify'

const Main = ({ signer, contract }) => {


    const [totalMinted, setTotalMinted] = useState(0);
    useEffect(() => {
        getCount();
    }, []);

    const getCount = async () => {
        const count = await contract.count();
        setTotalMinted(parseInt(count));
    };


    return (
        <div className={styles.container}>
            <ToastContainer className="toast-position" />
            
            <h2> My NFTs</h2>

            <div className={styles.content}>
                {
                    Array(totalMinted).fill(0).map((_, i) => (
                        <Card name={"#0x" + i + ".0"} src="https://www.usine-digitale.fr/mediatheque/7/4/5/001344547_896x598_c.png" tokenId={i} getCount={getCount} contract={contract} signer={signer} />
                    )
                    )
                }


                <Card add name={"Mint NFT"} src="https://thumbs.dreamstime.com/b/add-plus-icon-vector-best-gray-line-white-background-eps-134978537.jpg" tokenId={0} getCount={getCount} contract={contract} signer={signer}  />

            </div>
        </div>
    )
}

export default Main