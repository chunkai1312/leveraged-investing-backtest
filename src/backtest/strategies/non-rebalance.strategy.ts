import { Strategy, Context } from '@fugle/backtest';

export class NonRebalanceStrategy extends Strategy {
  init() {}

  next(ctx: Context) {
    if (ctx.index === 0) {
      const amount = Math.floor(this.equity / 2);
      const shares = Math.floor(amount / ctx.data.close);
      this.buy({ size: shares });
    }
  }
}
