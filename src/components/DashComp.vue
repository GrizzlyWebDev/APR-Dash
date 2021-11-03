<template>
<v-container class="my-5">

    <v-row>
      <v-col cols="12">
        <v-row>
          <v-col cols="12" md="6">
            <v-card
              class="card-gradient"
              dark
              color="#ffffff"
              elevation="10"
              :loading="loading"
            >
              <v-card-title class="headline font-weight-bold"
                >Price</v-card-title
              >
              <v-card-text class="c-card__text text-weight-600">${{
                current
              }}</v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" md="6">
            <v-card
              class="card-gradient"
              dark
              color="#ffffff"
              elevation="10"
              :loading="loading"
            >
              <v-card-title class="headline font-weight-bold"
                >Total Burned</v-card-title
              >
              <v-card-text class="c-card__text text-weight-600"
                >{{ burnt }} ({{ burntPerc }})
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" md="6">
            <v-card
              class="card-gradient"
              dark
              color="#ffffff"
              elevation="10"
              :loading="loading"
            >
              <v-card-title class="headline font-weight-bold"
                >Market Cap</v-card-title
              >
              <v-card-text class="c-card__text text-weight-600"
                >${{ cap }}
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" md="6">
            <v-card
              class="card-gradient"
              dark
              color="#ffffff"
              elevation="10"
              :loading="loading"
            >
              <v-card-title class="headline font-weight-bold"
                >Circulating Supply</v-card-title
              >
              <v-card-text class="c-card__text text-weight-600">{{
                circSup
              }}</v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" md="6">
            <v-card
              class="card-gradient"
              dark
              color="#ffffff"
              elevation="10"
              :loading="loadingShib"
            >
              <v-card-title class="headline font-weight-bold"
                >Total BUSD Rewarded 
                <v-spacer></v-spacer>
                <v-btn
                  color="white"
                  icon
                  href="https://bscscan.com/address/0xE57694B819E94A47345c9890d1ad6e9Ea6885f3e"
                  target="_blank"
                >
                  <v-icon>mdi-wallet-outline</v-icon>
                </v-btn>
              </v-card-title>
              <v-card-text class="c-card__text text-weight-600">${{
                balanceShib
              }}</v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" md="6">
            <v-card
              class="card-gradient"
              dark
              color="#ffffff"
              elevation="10"
              :loading="loadingLiq"
            >
              <v-card-title class="headline font-weight-bold"
                >Liquidity Pool Balance
                <v-spacer></v-spacer>
                <v-btn
                  color="white"
                  icon
                  href="https://bscscan.com/address/0xdD7ADC6554571771efC382C6420f96170491EacC"
                  target="_blank"
                >
                  <v-icon>mdi-wallet-outline</v-icon>
                </v-btn>
              </v-card-title>
              <v-card-text class="c-card__text text-weight-600">{{
                balanceLiq
              }}</v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
      <v-col col="12" lg="6">
        <v-card
          class="card-gradient"
          dark
          color="#ffffff"
          elevation="2"
          :loading="loadingMarket"
        >
          <v-card-title class="headline font-weight-bold"
            >Marketing Wallet Balance
            <v-spacer></v-spacer>
            <v-btn
              color="white"
              icon
              @click="fetchMarketing"
              :disabled="loadingMarket"
            >
              <v-icon>mdi-refresh</v-icon>
            </v-btn>
            <v-btn
              color="white"
              icon
              href="https://bscscan.com/address/0x19646DBC05bA6F7D3c950EAf4Fc7A615240582b7"
              target="_blank"
            >
              <v-icon>mdi-wallet-outline</v-icon>
            </v-btn>
          </v-card-title>
          <v-card-text class="c-card__text text-weight-600"
            >{{ balanceMarketing }}
          </v-card-text>
        </v-card>

        <h4 class="my-6">Marketing Wallet Transactions</h4>
        <v-data-table
          dark
          class="elevation-1 mytable"
          @click:row="handleClick"
          :items-per-page="6"
          fixed-header
          :loading="loadingMarket"
          :headers="headersMarketing"
          :items="marketingTxsData"
          :item-class="row_classes"
          :footer-props="{
            'items-per-page-options': [6],
          }"
        >
        </v-data-table>
      </v-col>
      <v-col col="12" lg="6">
        <v-card
          class="card-gradient"
          dark
          color="#ffffff"
          elevation="2"
          :loading="loadingDev"
        >
          <v-card-title class="headline font-weight-bold"
            >Dev Wallet Balance
            <v-spacer></v-spacer>
            <v-btn
              color="white"
              icon
              @click="fetchDev"
              :disabled="loadingDev"
            >
              <v-icon>mdi-refresh</v-icon>
            </v-btn>
            <v-btn
              color="white"
              icon
              href="https://bscscan.com/address/0xcBce3EB5273691A79D2f9b9f531359D75fDffFd9"
              target="_blank"
            >
              <v-icon>mdi-wallet-outline</v-icon>
            </v-btn>
          </v-card-title>
          <v-card-text class="c-card__text text-weight-600"
            >{{ balanceDev }}
          </v-card-text>
        </v-card>

        <h4 class="my-6">Dev Wallet Transactions</h4>
        <v-data-table
          dark
          class="elevation-1 mytable"
          @click:row="handleClick"
          :items-per-page="6"
          fixed-header
          :loading="loadingDev"
          :headers="headersMarketing"
          :items="DevTxsData"
          :item-class="row_classes"
          :footer-props="{
            'items-per-page-options': [6],
          }"
        >
        </v-data-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mdiInformationOutline } from "@mdi/js";


import {
  getBnbToUsd,
  getTokenBalanceWeb3,
  getTokenTotalSupply,
  getTokenToBnb,
  getBurnt,
  getShibTxs,
  getRewardTotal,
  inFlowTxs,
  outFlowTxs,
  convertDecimal,
} from "@/services/web3";

export default {
  data: () => ({
    infoIcon: mdiInformationOutline,
    headersMarketing: [
      {
        text: "Block",
        align: "start",
        sortable: false,
        value: "block",
      },
      { text: "Transaction amount", value: "transferAmount", align: "end" },
      { text: "Currency", value: "currency" },
      { text: "Date", value: "timestamp", align: "end" },
    ],
    burnt: 0,
    burntPerc: 0,
    balance: 0,
    balanceMarketing: 0,
    balanceDev: 0,
    balanceLiq: 0,
    balanceShib: 0,
    balanceShibUSD: 0,
    circSup: 0,
    loading: false,
    loadingMarket: false,
    loadingDev: false,
    loadingLiq: false,
    loadingShib: false,
    balanceUsd: 0,
    wallet: "0x35E583bD317D611b51FEdAaaedcaC4a4ECe6C711",
    earned: 0,
    earnedUsd: 0,
    cap: 0,
    current: 0,
    transactionBalance: null,
    txs: [],
    marketingTxsData: [],
    resetTxs: false,
  }),

  mounted() {
    this.wallet = "0x35E583bD317D611b51FEdAaaedcaC4a4ECe6C711";
    this.fetchData();
    this.fetchShib();
    this.fetchMarketing();
    this.fetchDev();
    this.fetchLiq();
  },
  created() {
    },
  methods: {
    row_classes(item) {
      return item.type;
    },
    handleClick(row) {
      window.open("https://bscscan.com/tx/" + row.hash);
    },
    async fetchShib() {
      this.loadingShib = true;
      let reward = await getShibTxs("0xE57694B819E94A47345c9890d1ad6e9Ea6885f3e");
               this.latestReward = (reward.data.data.ethereum.transfers[0].block.timestamp.time);
               let latestTxnHash = (reward.data.data.ethereum.transfers[0].transaction.hash);
               this.url = ("https://bscscan.com/tx/" + latestTxnHash);
             
             let totalShib = await getRewardTotal(reward);
             let balance = await getTokenBalanceWeb3(
              "0x35E583bD317D611b51FEdAaaedcaC4a4ECe6C711",
              this.wallet,
              9
            );
             let bnbToUsd = await getBnbToUsd();
             let pair = "0xdD7ADC6554571771efC382C6420f96170491EacC";
             let tokenToBnbResp = await getTokenToBnb(pair, balance);
             let tokenToBnb = tokenToBnbResp.price;
             let exchangeVal = tokenToBnbResp.exchangeVal;
             if (tokenToBnb == null) {
               return;
             }
             let tokenToUsd = tokenToBnb * bnbToUsd;
             let balanceUsd = (balance * tokenToUsd).toFixed(2);
             let exchangeValUsdt = exchangeVal * 0.98 * bnbToUsd;
             if (exchangeValUsdt > balanceUsd) {
               exchangeValUsdt = balanceUsd;
             }
             let ShibtoBNB = (tokenToBnb * bnbToUsd * 1).toFixed(10);
             this.balanceShibUSD = new Intl.NumberFormat("en-US", {style: "currency",currency: "USD",}).format(ShibtoBNB * totalShib);
             this.balanceShib = this.numberWithCommas(parseFloat(totalShib).toFixed(2));
      this.loadingShib = false;
    },
    async fetchData() {
        this.loading = true;
          let balance = await getTokenBalanceWeb3(
            "0x35E583bD317D611b51FEdAaaedcaC4a4ECe6C711",
            this.wallet,
            9
          );
          let earned = parseFloat(balance)
          let tokenData = await this.getTokenData(balance, earned);
          this.burnt = this.numberWithCommas(tokenData.burnt);
          this.burntPerc =
            parseFloat((tokenData.burnt / tokenData.supply) * 100).toFixed(2) +
            "%";
          this.cap = tokenData.cap;
          this.circSup = tokenData.circSup;
          this.current = tokenData.current;
          this.loading = false;
      },

    async fetchMarketing() {
      this.loadingMarket = true;
      let Marketing = await inFlowTxs(
        "0x19646DBC05bA6F7D3c950EAf4Fc7A615240582b7"
      );

        let marketingTxsData = [];
        Marketing.data.data.ethereum.transfers.map(async (mtxItem) => {
                  let mtxRow = {
                  type: "buy",
                  hash: mtxItem.transaction.hash,
                  transferAmount: this.numberWithCommas(parseFloat(mtxItem.amount).toFixed(2)),
                  timestamp: mtxItem.block.timestamp.time,
                  block: mtxItem.block.height,
                  currency: mtxItem.currency.symbol,
                }
                marketingTxsData.push(mtxRow);
              });
        let MarketingOut = await outFlowTxs(
         "0x19646DBC05bA6F7D3c950EAf4Fc7A615240582b7"
        );
              MarketingOut.data.data.ethereum.transfers.map(async (mtxItem) => {
                  let mtxRow = {
                  type: "sell",
                  hash: mtxItem.transaction.hash,
                  transferAmount: this.numberWithCommas(parseFloat(mtxItem.amount *-1).toFixed(2)),
                  timestamp: mtxItem.block.timestamp.time,
                  block: mtxItem.block.height,
                  currency: mtxItem.currency.symbol,
                }
                marketingTxsData.push(mtxRow);
              });
        let txsMTable = marketingTxsData.sort(function (a, b) {
          return new Date(b.timestamp) - new Date(a.timestamp);
        });
        this.marketingTxsData = txsMTable;
        let bnbToUsd = await getBnbToUsd();
        let MBalance = await this.axios({
          method: "get",
          url: "https://api.bscscan.com/api?module=account&action=balance&address=0x19646DBC05bA6F7D3c950EAf4Fc7A615240582b7&tag=latest&apikey=KHPI6CP43KFGJ8WD1EA1DVS824VJSA41UM",
        });
        MBalance = await convertDecimal(MBalance.data.result, 18).toFixed(2);
        let totalUsd = MBalance * bnbToUsd;
        this.balanceMarketing = new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(parseFloat(totalUsd).toFixed(2));
        this.loadingMarket = false;
    },
    async fetchDev() {
      this.loadingDev = true;
      let Dev = await inFlowTxs(
         "0xcBce3EB5273691A79D2f9b9f531359D75fDffFd9"
       );
      
        let DevTxsData = [];
        Dev.data.data.ethereum.transfers.map(async (txItem) => {
                 let txRow = {
                 type: "buy",
                 hash: txItem.transaction.hash,
                 transferAmount: this.numberWithCommas(parseFloat(txItem.amount).toFixed(2)),
                 timestamp: txItem.block.timestamp.time,
                 block: txItem.block.height,
                 currency: txItem.currency.symbol,
               }
               DevTxsData.push(txRow);
        });
      
      let DevOut = await outFlowTxs(
         "0xcBce3EB5273691A79D2f9b9f531359D75fDffFd9"
      );
        DevOut.data.data.ethereum.transfers.map(async (txItem) => {
                 let txRow = {
                 type: "sell",
                 hash: txItem.transaction.hash,
                 transferAmount: this.numberWithCommas(parseFloat(txItem.amount *-1).toFixed(2)),
                 timestamp: txItem.block.timestamp.time,
                 block: txItem.block.height,
                 currency: txItem.currency.symbol,
               }
               DevTxsData.push(txRow);
        });
      
        let txsTable = DevTxsData.sort(function (a, b) {
          return new Date(b.timestamp) - new Date(a.timestamp);
        });
        this.DevTxsData = txsTable;
        let busdBal = await this.axios({
          method: "get",
          url: "https://api.bscscan.com/api?module=account&action=tokenbalance&contractaddress=0xe9e7cea3dedca5984780bafc599bd69add087d56&address=0xcBce3EB5273691A79D2f9b9f531359D75fDffFd9&apikey=KHPI6CP43KFGJ8WD1EA1DVS824VJSA41UM",
          crossDomain: true,
        });
        busdBal = await convertDecimal(busdBal.data.result, 18).toFixed(2);

        let bnbToUsd = await getBnbToUsd();
        let charBalance = await this.axios({
          method: "get",
          url: "https://api.bscscan.com/api?module=account&action=balance&address=0xcBce3EB5273691A79D2f9b9f531359D75fDffFd9&tag=latest&apikey=KHPI6CP43KFGJ8WD1EA1DVS824VJSA41UM",
        });
        charBalance = await convertDecimal(charBalance.data.result, 18).toFixed(
          2
        );
        let totalUsd = +busdBal + charBalance * bnbToUsd;
        this.balanceDev = new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(parseFloat(totalUsd).toFixed(2));
        this.loadingDev = false;
      },
    
    async fetchLiq() {
      this.loadingLiq = true;
      let bnbToUsd = await getBnbToUsd();
      let LiqBalance = await this.axios({
        method: "get",
        url: "https://api.bscscan.com/api?module=account&action=tokenbalance&contractaddress=0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c&address=0xdD7ADC6554571771efC382C6420f96170491EacC&apikey=F2CUYABTDD659TAQK6C7634KQEIK9RXN9X",
      });
      LiqBalance = await convertDecimal(LiqBalance.data.result, 18).toFixed(2);
      let totalUsd = +LiqBalance * bnbToUsd;
      this.balanceLiq = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(parseFloat(totalUsd).toFixed(2));
      this.loadingLiq = false;
    },

    numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    async getTokenData(balance, earned) {
      let vm = this;
      let decimals = 9;

      let bnbToUsd = await getBnbToUsd();
      let token = "0x35E583bD317D611b51FEdAaaedcaC4a4ECe6C711";
      let pair = "0xdD7ADC6554571771efC382C6420f96170491EacC";
      let supply = await getTokenTotalSupply(token, decimals);

      let tokenToBnbResp = await getTokenToBnb(pair, balance);

      let tokenToBnb = tokenToBnbResp.price;
      let exchangeVal = tokenToBnbResp.exchangeVal;

      if (tokenToBnb == null) {
        return;
      }

      let tokenToUsd = tokenToBnb * bnbToUsd;

      let balanceUsd = (balance * tokenToUsd).toFixed(2);

      let exchangeValUsdt = exchangeVal * 0.98 * bnbToUsd;

      if (exchangeValUsdt > balanceUsd) {
        exchangeValUsdt = balanceUsd;
      }

      let exchangeValUsdtFormated = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(parseFloat(exchangeValUsdt).toFixed(2));

      let burnt = await getBurnt(token, decimals);
      let circSup = parseFloat(supply) - parseFloat(burnt);
      let cap =
        (parseFloat(supply) - parseFloat(burnt)) *
        parseFloat(tokenToBnb) *
        parseFloat(bnbToUsd);
      let earnedUsd = 0;
      if (earned) {
        earnedUsd = new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format((earned * tokenToUsd).toFixed(2));
      }

      return {
        decimals: decimals,
        balance: vm.numberWithCommas(balance),
        burnt: burnt,
        circSup: vm.numberWithCommas(parseFloat(circSup).toFixed(2)),
        earned: vm.numberWithCommas(parseFloat(earned).toFixed(3)),
        earnedNum: earned,
        earnedUsd: earnedUsd,
        currentBal: balance,
        exchangeValUsdt: exchangeValUsdtFormated,
        balanceUsd: new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(balanceUsd),
        balanceUsdNum: balanceUsd,
        current: (tokenToBnb * bnbToUsd * 1).toFixed(12),
        cap: vm.numberWithCommas(parseFloat(cap).toFixed(2)),
        address: token,
        supply: supply,
      };
    },
  },
};
</script>
