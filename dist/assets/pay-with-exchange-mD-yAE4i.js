import{cV as P,cW as D,cX as E,cY as p,cZ as b,c_ as $,c$ as u,dp as k,cM as I,d6 as y,cI as x,cG as _,d7 as z,dq as d,cH as S}from"./index-p_Z8N9UO.js";import"./index-gYjC6e8b.js";import{E as a}from"./ExchangeController-BqB_-hsj.js";const L=P`
  button {
    border: none;
    border-radius: ${({borderRadius:t})=>t[20]};
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: ${({spacing:t})=>t[1]};
    transition:
      background-color ${({durations:t})=>t.lg}
        ${({easings:t})=>t["ease-out-power-2"]},
      box-shadow ${({durations:t})=>t.lg}
        ${({easings:t})=>t["ease-out-power-2"]};
    will-change: background-color, box-shadow;
  }

  /* -- Variants --------------------------------------------------------------- */
  button[data-type='accent'] {
    background-color: ${({tokens:t})=>t.core.backgroundAccentPrimary};
    color: ${({tokens:t})=>t.theme.textPrimary};
  }

  button[data-type='neutral'] {
    background-color: ${({tokens:t})=>t.theme.foregroundSecondary};
    color: ${({tokens:t})=>t.theme.textPrimary};
  }

  /* -- Sizes --------------------------------------------------------------- */
  button[data-size='sm'] {
    height: 24px;
  }

  button[data-size='md'] {
    height: 28px;
  }

  button[data-size='lg'] {
    height: 32px;
  }

  button[data-size='sm'] > wui-image,
  button[data-size='sm'] > wui-icon {
    width: 16px;
    height: 16px;
  }

  button[data-size='md'] > wui-image,
  button[data-size='md'] > wui-icon {
    width: 20px;
    height: 20px;
  }

  button[data-size='lg'] > wui-image,
  button[data-size='lg'] > wui-icon {
    width: 24px;
    height: 24px;
  }

  wui-text {
    padding-left: ${({spacing:t})=>t[1]};
    padding-right: ${({spacing:t})=>t[1]};
  }

  wui-image {
    border-radius: ${({borderRadius:t})=>t[3]};
    overflow: hidden;
    user-drag: none;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
    -ms-user-select: none;
  }

  /* -- States --------------------------------------------------------------- */
  @media (hover: hover) and (pointer: fine) {
    button[data-type='accent']:not(:disabled):hover {
      background-color: ${({tokens:t})=>t.core.foregroundAccent060};
    }

    button[data-type='neutral']:not(:disabled):hover {
      background-color: ${({tokens:t})=>t.theme.foregroundTertiary};
    }
  }

  button[data-type='accent']:not(:disabled):focus-visible,
  button[data-type='accent']:not(:disabled):active {
    box-shadow: 0 0 0 4px ${({tokens:t})=>t.core.foregroundAccent020};
  }

  button[data-type='neutral']:not(:disabled):focus-visible,
  button[data-type='neutral']:not(:disabled):active {
    box-shadow: 0 0 0 4px ${({tokens:t})=>t.core.foregroundAccent020};
  }

  button:disabled {
    opacity: 0.5;
  }
`;var g=function(t,e,o,i){var s=arguments.length,n=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,o):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,o,i);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(n=(s<3?r(n):s>3?r(e,o,n):r(e,o))||n);return s>3&&n&&Object.defineProperty(e,o,n),n};const T={sm:"sm-regular",md:"md-regular",lg:"lg-regular"};let h=class extends ${constructor(){super(...arguments),this.type="accent",this.size="md",this.imageSrc="",this.disabled=!1,this.leftIcon=void 0,this.rightIcon=void 0,this.text=""}render(){return u`
      <button ?disabled=${this.disabled} data-type=${this.type} data-size=${this.size}>
        ${this.imageSrc?u`<wui-image src=${this.imageSrc}></wui-image>`:null}
        ${this.leftIcon?u`<wui-icon name=${this.leftIcon} color="inherit" size="inherit"></wui-icon>`:null}
        <wui-text variant=${T[this.size]} color="inherit">${this.text}</wui-text>
        ${this.rightIcon?u`<wui-icon name=${this.rightIcon} color="inherit" size="inherit"></wui-icon>`:null}
      </button>
    `}};h.styles=[D,E,L];g([p()],h.prototype,"type",void 0);g([p()],h.prototype,"size",void 0);g([p()],h.prototype,"imageSrc",void 0);g([p({type:Boolean})],h.prototype,"disabled",void 0);g([p()],h.prototype,"leftIcon",void 0);g([p()],h.prototype,"rightIcon",void 0);g([p()],h.prototype,"text",void 0);h=g([b("wui-chip-button")],h);var v=function(t,e,o,i){var s=arguments.length,n=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,o):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,o,i);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(n=(s<3?r(n):s>3?r(e,o,n):r(e,o))||n);return s>3&&n&&Object.defineProperty(e,o,n),n};let f=class extends ${constructor(){super(...arguments),this.maxDecimals=void 0,this.maxIntegers=void 0}render(){return u`
      <wui-flex alignItems="center" gap="1">
        <wui-input-amount
          widthVariant="fit"
          fontSize="h2"
          .maxDecimals=${k(this.maxDecimals)}
          .maxIntegers=${k(this.maxIntegers)}
          .value=${this.amount?String(this.amount):""}
        ></wui-input-amount>
        <wui-text variant="md-regular" color="secondary">USD</wui-text>
      </wui-flex>
    `}};v([p({type:Number})],f.prototype,"amount",void 0);v([p({type:Number})],f.prototype,"maxDecimals",void 0);v([p({type:Number})],f.prototype,"maxIntegers",void 0);f=v([b("w3m-fund-input")],f);const R=P`
  .amount-input-container {
    border-radius: ${({borderRadius:t})=>t[6]};
    border-top-right-radius: 0;
    border-top-left-radius: 0;
    background-color: ${({tokens:t})=>t.theme.foregroundPrimary};
    padding: ${({spacing:t})=>t[1]};
  }

  .container {
    border-radius: 30px;
  }
`;var m=function(t,e,o,i){var s=arguments.length,n=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,o):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,o,i);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(n=(s<3?r(n):s>3?r(e,o,n):r(e,o))||n);return s>3&&n&&Object.defineProperty(e,o,n),n};const C=[10,50,100],j=6,N=10;let l=class extends ${constructor(){super(),this.unsubscribe=[],this.network=I.state.activeCaipNetwork,this.exchanges=a.state.exchanges,this.isLoading=a.state.isLoading,this.amount=a.state.amount,this.tokenAmount=a.state.tokenAmount,this.priceLoading=a.state.priceLoading,this.isPaymentInProgress=a.state.isPaymentInProgress,this.currentPayment=a.state.currentPayment,this.paymentId=a.state.paymentId,this.paymentAsset=a.state.paymentAsset,this.unsubscribe.push(I.subscribeKey("activeCaipNetwork",e=>{this.network=e,this.setDefaultPaymentAsset()}),a.subscribe(e=>{var i,s;this.exchanges=e.exchanges,this.isLoading=e.isLoading,this.amount=e.amount,this.tokenAmount=e.tokenAmount,this.priceLoading=e.priceLoading,this.paymentId=e.paymentId,this.isPaymentInProgress=e.isPaymentInProgress,this.currentPayment=e.currentPayment,this.paymentAsset=e.paymentAsset,e.isPaymentInProgress&&((i=e.currentPayment)==null?void 0:i.exchangeId)&&((s=e.currentPayment)==null?void 0:s.sessionId)&&e.paymentId&&this.handlePaymentInProgress()}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),a.reset()}async firstUpdated(){await this.getPaymentAssets(),this.paymentAsset||await this.setDefaultPaymentAsset(),a.setAmount(C[0]),await a.fetchExchanges()}render(){return u`
      <wui-flex flexDirection="column" class="container">
        ${this.amountInputTemplate()} ${this.exchangesTemplate()}
      </wui-flex>
    `}exchangesLoadingTemplate(){return Array.from({length:2}).map(()=>u`<wui-shimmer width="100%" height="65px" borderRadius="xxs"></wui-shimmer>`)}_exchangesTemplate(){return this.exchanges.length>0?this.exchanges.map(e=>u`<wui-list-item
              @click=${()=>this.onExchangeClick(e)}
              chevron
              variant="image"
              imageSrc=${e.imageUrl}
              ?loading=${this.isLoading}
            >
              <wui-text variant="md-regular" color="primary">
                Deposit from ${e.name}
              </wui-text>
            </wui-list-item>`):u`<wui-flex flexDirection="column" alignItems="center" gap="4" padding="4">
          <wui-text variant="lg-medium" align="center" color="primary">
            No exchanges support this asset on this network
          </wui-text>
        </wui-flex>`}exchangesTemplate(){return u`<wui-flex
      flexDirection="column"
      gap="2"
      .padding=${["3","3","3","3"]}
      class="exchanges-container"
    >
      ${this.isLoading?this.exchangesLoadingTemplate():this._exchangesTemplate()}
    </wui-flex>`}amountInputTemplate(){var e,o;return u`
      <wui-flex
        flexDirection="column"
        .padding=${["0","3","3","3"]}
        class="amount-input-container"
      >
        <wui-flex
          justifyContent="space-between"
          alignItems="center"
          .margin=${["0","0","6","0"]}
        >
          <wui-text variant="md-medium" color="secondary">Asset</wui-text>
          <wui-token-button
            data-testid="deposit-from-exchange-asset-button"
            flexDirection="row-reverse"
            text=${((e=this.paymentAsset)==null?void 0:e.metadata.symbol)||""}
            imageSrc=${((o=this.paymentAsset)==null?void 0:o.metadata.iconUrl)||""}
            @click=${()=>y.push("PayWithExchangeSelectAsset")}
            size="lg"
          >
          </wui-token-button>
        </wui-flex>
        <wui-flex
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          .margin=${["0","0","4","0"]}
        >
          <w3m-fund-input
            @inputChange=${this.onAmountChange.bind(this)}
            .amount=${this.amount}
            .maxDecimals=${j}
            .maxIntegers=${N}
          >
          </w3m-fund-input>
          ${this.tokenAmountTemplate()}
        </wui-flex>
        <wui-flex justifyContent="center" gap="2">
          ${C.map(i=>u`<wui-chip-button
                @click=${()=>a.setAmount(i)}
                type="neutral"
                size="lg"
                text=${`$${i}`}
              ></wui-chip-button>`)}
        </wui-flex>
      </wui-flex>
    `}tokenAmountTemplate(){var e;return this.priceLoading?u`<wui-shimmer
        width="65px"
        height="20px"
        borderRadius="xxs"
        variant="light"
      ></wui-shimmer>`:u`
      <wui-text variant="md-regular" color="secondary">
        ${this.tokenAmount.toFixed(4)} ${(e=this.paymentAsset)==null?void 0:e.metadata.symbol}
      </wui-text>
    `}async onExchangeClick(e){if(!this.amount){x.showError("Please enter an amount");return}await a.handlePayWithExchange(e.id)}handlePaymentInProgress(){var o,i;const e=I.state.activeChain;this.isPaymentInProgress&&((o=this.currentPayment)!=null&&o.exchangeId)&&((i=this.currentPayment)!=null&&i.sessionId)&&this.paymentId&&(a.waitUntilComplete({exchangeId:this.currentPayment.exchangeId,sessionId:this.currentPayment.sessionId,paymentId:this.paymentId}).then(s=>{s.status==="SUCCESS"?(x.showSuccess("Deposit completed"),e&&(_.fetchTokenBalance(),z.updateBalance(e))):s.status==="FAILED"&&x.showError("Deposit failed")}),x.showLoading("Deposit in progress..."),y.replace("Account"))}onAmountChange({detail:e}){a.setAmount(e?Number(e):null)}async getPaymentAssets(){this.network&&await a.getAssetsForNetwork(this.network.caipNetworkId)}async setDefaultPaymentAsset(){if(this.network){const e=await a.getAssetsForNetwork(this.network.caipNetworkId);e[0]&&a.setPaymentAsset(e[0])}}};l.styles=R;m([d()],l.prototype,"network",void 0);m([d()],l.prototype,"exchanges",void 0);m([d()],l.prototype,"isLoading",void 0);m([d()],l.prototype,"amount",void 0);m([d()],l.prototype,"tokenAmount",void 0);m([d()],l.prototype,"priceLoading",void 0);m([d()],l.prototype,"isPaymentInProgress",void 0);m([d()],l.prototype,"currentPayment",void 0);m([d()],l.prototype,"paymentId",void 0);m([d()],l.prototype,"paymentAsset",void 0);l=m([b("w3m-deposit-from-exchange-view")],l);const O=P`
  .contentContainer {
    height: 440px;
    overflow: scroll;
    scrollbar-width: none;
  }

  .contentContainer::-webkit-scrollbar {
    display: none;
  }

  wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: ${({borderRadius:t})=>t[3]};
  }
`;var A=function(t,e,o,i){var s=arguments.length,n=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,o):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,o,i);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(n=(s<3?r(n):s>3?r(e,o,n):r(e,o))||n);return s>3&&n&&Object.defineProperty(e,o,n),n};let w=class extends ${constructor(){super(),this.unsubscribe=[],this.assets=a.state.assets,this.search="",this.onDebouncedSearch=S.debounce(e=>{this.search=e}),this.unsubscribe.push(a.subscribe(e=>{this.assets=e.assets}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return u`
      <wui-flex flexDirection="column">
        ${this.templateSearchInput()} <wui-separator></wui-separator> ${this.templateTokens()}
      </wui-flex>
    `}templateSearchInput(){return u`
      <wui-flex gap="2" padding="3">
        <wui-input-text
          @inputChange=${this.onInputChange.bind(this)}
          class="network-search-input"
          size="sm"
          placeholder="Search token"
          icon="search"
        ></wui-input-text>
      </wui-flex>
    `}templateTokens(){const e=this.assets.filter(i=>i.metadata.name.toLowerCase().includes(this.search.toLowerCase())),o=e.length>0;return u`
      <wui-flex
        class="contentContainer"
        flexDirection="column"
        .padding=${["0","3","0","3"]}
      >
        <wui-flex justifyContent="flex-start" .padding=${["4","3","3","3"]}>
          <wui-text variant="md-medium" color="secondary">Available tokens</wui-text>
        </wui-flex>
        <wui-flex flexDirection="column" gap="2">
          ${o?e.map(i=>u`<wui-list-item
                    .imageSrc=${i.metadata.iconUrl}
                    ?clickable=${!0}
                    @click=${this.handleTokenClick.bind(this,i)}
                  >
                    <wui-text variant="md-medium" color="primary">${i.metadata.name}</wui-text>
                    <wui-text variant="md-regular" color="secondary"
                      >${i.metadata.symbol}</wui-text
                    >
                  </wui-list-item>`):u`<wui-flex
                .padding=${["20","0","0","0"]}
                alignItems="center"
                flexDirection="column"
                gap="4"
              >
                <wui-icon-box icon="coinPlaceholder" color="default" size="lg"></wui-icon-box>
                <wui-flex
                  class="textContent"
                  gap="2"
                  flexDirection="column"
                  justifyContent="center"
                >
                  <wui-text variant="lg-medium" align="center" color="primary">
                    No tokens found
                  </wui-text>
                </wui-flex>
                <wui-link @click=${this.onBuyClick.bind(this)}>Buy</wui-link>
              </wui-flex>`}
        </wui-flex>
      </wui-flex>
    `}onBuyClick(){y.push("OnRampProviders")}onInputChange(e){this.onDebouncedSearch(e.detail)}handleTokenClick(e){a.setPaymentAsset(e),y.goBack()}};w.styles=O;A([d()],w.prototype,"assets",void 0);A([d()],w.prototype,"search",void 0);w=A([b("w3m-deposit-from-exchange-select-asset-view")],w);export{w as W3mDepositFromExchangeSelectAssetView,l as W3mDepositFromExchangeView};
