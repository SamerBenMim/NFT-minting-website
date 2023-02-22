const { ethers } = require("hardhat");

async function main() {
  const Nft = await ethers.getContractFactory("MyNft");
  const nft = await Nft.deploy();

  await nft.deployed();

  console.log(
    `Contract deployed to ${nft.address}`
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
