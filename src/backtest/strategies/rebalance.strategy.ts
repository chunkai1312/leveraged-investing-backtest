import { Strategy, Context } from '@fugle/backtest';

export class RebalanceStrategy extends Strategy {
  init() {}

  next(ctx: Context) {
    if (ctx.index === 0) {
      const amount = Math.floor(this.equity / 2);
      const shares = Math.floor(amount / ctx.data.close);
      this.buy({ size: shares });
    } else {
      const position = (this.position.size * ctx.data.close) / this.equity;
      if (position > 0.6 || position < 0.4) {
        const amount = Math.floor(this.equity / 2);
        const shares = Math.floor(amount / ctx.data.close);
        const size = Math.abs(this.position.size - shares);
        if (this.position.size < shares) this.buy({ size });
        if (this.position.size > shares) this.sell({ size });
      }
    }
  }
}
