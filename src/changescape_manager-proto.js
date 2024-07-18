import { createWalletClient } from 'viem'
import { optimismSepolia } from 'viem/chains'
import dotenv from 'dotenv'

// Load environment variables
dotenv.config()

const client = createWalletClient({
  chain: optimismSepolia,
  wallets: [process.env.PRIVATE_KEY],
})