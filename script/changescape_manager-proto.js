import { createWalletClient, http, publicActions } from 'viem'
import { privateKeyToAccount } from 'viem/accounts'
import { optimismSepolia } from 'viem/chains'
import dotenv from 'dotenv'
import { readFileSync } from 'fs'
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// Load environment variables and create account
dotenv.config()
const account = privateKeyToAccount(process.env.PRIVATE_KEY)

// initialize client
const client = createWalletClient({
  account,
  chain: optimismSepolia,
  transport: http(),
}).extend(publicActions)

// Read ABI and bytecode
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const contractArtifact = JSON.parse(readFileSync(join(__dirname, '../out/IOU_proto.sol/IOU_proto.json'), 'utf8'))
const abi = contractArtifact.abi
const bytecode = contractArtifact.bytecode.object

export { client, abi, bytecode }