# leveraged-investing-backtest

> 《槓桿 ETF 投資法：回測實證 00631L 槓桿投資策略》程式原始碼

## Installation

```sh
$ npm install
```

本程式使用富果行情 API 取得歷史股價資料。請在目錄下複製 `.env.example` 檔案並更名為 `.env`，然後加入環境變數設定富果行情 API 金鑰：

```
FUGLE_MARKETDATA_API_KEY=
```

## Usage

執行回測：

- 策略一：以 100％ 曝險投資 0050

```sh
$ npm start -- -- backtest 0050 -s lump-sum -start 2014-10-31 -end 2024-04-30
```

- 策略二：使用 50：50 配置法投資 00631L

```sh
$ npm start -- -- backtest 00631L -s non-rebalance -start 2014-10-31 -end 2024-04-30
```

- 策略三：使用 50：50 再平衡投資 00631L

```sh
$ npm start -- -- backtest 00631L -s rebalance -start 2014-10-31 -end 2024-04-30
```

## License

[MIT](LICENSE)
