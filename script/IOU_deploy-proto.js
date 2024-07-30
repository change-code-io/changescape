import { client, abi, bytecode } from './changescape_manager-proto.js'
import fs from 'fs/promises'
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';


// chain connection check (public)
async function checkChain() {
  const blockNumber = await client.getBlockNumber()
  console.log('Current block number:', blockNumber)
}

checkChain()

const token_cap = 1000n

// Deploy contract
async function deployContract() {
  try {
    const cap = token_cap * 10n ** 18n
    const hash = await client.deployContract({
      abi,
      bytecode,
      account: client.account,
      args: [cap],
    })
    console.log('Deployment transaction hash:', hash)
    
    // Wait for the transaction to be mined
    const receipt = await client.waitForTransactionReceipt({ hash })
    console.log('Contract deployed at:', receipt.contractAddress)
    
    // Store the contract address
    await fs.writeFile('contract-address.txt', receipt.contractAddress)
    console.log('Contract address stored in contract-address.txt')
    
  } catch (error) {
    console.error('Deployment failed:', error)
  }
}

// Run deployment
deployContract()