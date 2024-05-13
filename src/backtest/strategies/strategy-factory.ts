import { LumpSumStrategy } from './lump-sum.strategy';
import { RebalanceStrategy } from './rebalance.strategy';
import { NonRebalanceStrategy } from './non-rebalance.strategy';

export class StrategyFactory {
  public static create(strategy: string) {
    switch (strategy) {
      case 'rebalance': return RebalanceStrategy;
      case 'lump-sum': return LumpSumStrategy;
      case 'non-rebalance': return NonRebalanceStrategy;
      default: return RebalanceStrategy;
    }
  }
}
