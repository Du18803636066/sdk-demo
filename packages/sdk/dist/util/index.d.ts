import { ISubmittableResult } from "@polkadot/types/types";
import { SubmittableExtrinsic } from "@polkadot/api/types";
import { initIpfs } from "./ipfs";
import { initApi, signerFromSeed, unsubOrWarns, isValidAddress } from "./polkadot";
import { KeyringPairOrExtSigner, ExtSigner, AssetId } from "../types";
export { initApi, initIpfs, signerFromSeed, unsubOrWarns, isValidAddress };
export declare const changeEndianness: (string: any) => string;
export declare const isExtSigner: (signer: KeyringPairOrExtSigner) => signer is ExtSigner;
export declare const AssetIdFromString: (stringAsset: string | AssetId) => AssetId;
export declare const estimatedFee: (tx: SubmittableExtrinsic<"promise", ISubmittableResult>, address: string) => Promise<string>;
