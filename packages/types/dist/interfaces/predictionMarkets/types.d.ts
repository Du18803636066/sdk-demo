import type { Bytes, Enum, Option, Struct, u128, u16, u8 } from '@polkadot/types';
import type { AccountId, BlockNumber, Moment } from '@polkadot/types/interfaces/runtime';
import type { ITuple } from '@polkadot/types/types';
export interface Market extends Struct {
    readonly creator: AccountId;
    readonly creation: MarketCreation;
    readonly creator_fee: u8;
    readonly oracle: AccountId;
    readonly metadata: Bytes;
    readonly market_type: MarketType;
    readonly period: MarketPeriod;
    readonly scoring_rule: ScoringRule;
    readonly status: MarketStatus;
    readonly report: Option<Report>;
    readonly resolved_outcome: Option<OutcomeReport>;
    readonly mdm: MarketDisputeMechanism;
}
export interface MarketCreation extends Enum {
    readonly isPermissionless: boolean;
    readonly isAdvised: boolean;
    readonly type: 'Permissionless' | 'Advised';
}
export interface MarketDispute extends Struct {
    readonly at: BlockNumber;
    readonly by: AccountId;
    readonly outcome: OutcomeReport;
}
export interface MarketDisputeMechanism extends Enum {
    readonly isAuthorized: boolean;
    readonly asAuthorized: AccountId;
    readonly isCourt: boolean;
    readonly isSimpleDisputes: boolean;
    readonly type: 'Authorized' | 'Court' | 'SimpleDisputes';
}
export interface MarketId extends u128 {
}
export interface MarketPeriod extends Enum {
    readonly isBlock: boolean;
    readonly asBlock: ITuple<[BlockNumber, BlockNumber]>;
    readonly isTimestamp: boolean;
    readonly asTimestamp: ITuple<[Moment, Moment]>;
    readonly type: 'Block' | 'Timestamp';
}
export interface MarketStatus extends Enum {
    readonly isProposed: boolean;
    readonly isActive: boolean;
    readonly isSuspended: boolean;
    readonly isClosed: boolean;
    readonly isCollectingSubsidy: boolean;
    readonly isInsufficientSubsidy: boolean;
    readonly isReported: boolean;
    readonly isDisputed: boolean;
    readonly isResolved: boolean;
    readonly type: 'Proposed' | 'Active' | 'Suspended' | 'Closed' | 'CollectingSubsidy' | 'InsufficientSubsidy' | 'Reported' | 'Disputed' | 'Resolved';
}
export interface MarketType extends Enum {
    readonly isCategorical: boolean;
    readonly asCategorical: u16;
    readonly isScalar: boolean;
    readonly asScalar: ITuple<[u128, u128]>;
    readonly type: 'Categorical' | 'Scalar';
}
export interface OutcomeReport extends Enum {
    readonly isCategorical: boolean;
    readonly asCategorical: u16;
    readonly isScalar: boolean;
    readonly asScalar: u128;
    readonly type: 'Categorical' | 'Scalar';
}
export interface Report extends Struct {
    readonly at: BlockNumber;
    readonly by: AccountId;
    readonly outcome: OutcomeReport;
}
export interface ScoringRule extends Enum {
    readonly isCpmm: boolean;
    readonly isRikiddoSigmoidFeeMarketEma: boolean;
    readonly type: 'Cpmm' | 'RikiddoSigmoidFeeMarketEma';
}
export declare type PHANTOM_PREDICTIONMARKETS = 'predictionMarkets';
