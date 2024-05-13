import { Module } from '@nestjs/common';
import { BacktestService } from './backtest.service';
import { BacktestCommand } from './backtest.command';

@Module({
  providers: [BacktestService, BacktestCommand]
})
export class BacktestModule {}
