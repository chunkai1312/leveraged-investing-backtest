import { Strategy, Context } from '@fugle/backtest';

export class LumpSumStrategy extends Strategy {
  init() {}

  next(ctx: Context) {
    if (ctx.index === 0) {
      const shares = Math.floor(this.equity / ctx.data.close);
      this.buy({ size: shares });
    }
  }
}
