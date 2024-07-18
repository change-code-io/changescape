import { createWalletClient, http, publicActions } from 'viem'
import { privateKeyToAccount } from 'viem/accounts'
import { optimismSepolia } from 'viem/chains'
import dotenv from 'dotenv'

// Load environment variables and create account
dotenv.config()
const account = privateKeyToAccount(process.env.PRIVATE_KEY)

// initialize client
const client = createWalletClient({
  account,
  chain: optimismSepolia,
  transport: http(),
}).extend(publicActions)

// chain connection check (public)
const blockNumber = await client.getBlockNumber()
console.log('Current block number:', blockNumber)