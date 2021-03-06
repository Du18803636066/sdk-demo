// Required imports
import { ApiPromise, WsProvider } from "@polkadot/api";

async function main() {
  // Initialise the provider to connect to the local node
  const ZTGNET = 'wss://bp-rpc.zeitgeist.pm'
  const provider = new WsProvider(ZTGNET);

  // Create the API and wait until ready
  const api = await ApiPromise.create({ provider });

  // Retrieve the chain & node information information via rpc calls
  const [chain, nodeName, nodeVersion] = await Promise.all([
    api.rpc.system.chain(),
    api.rpc.system.name(),
    api.rpc.system.version(),
  ]);

  console.log(
    `You are connected to chain ${chain} using ${nodeName} v${nodeVersion}`
  );
}

main()
  .catch(console.error)
  .finally(() => process.exit());
