import{d4 as M,c_ as h,dM as k,cO as V,c$ as c,de as F,dn as z,e8 as Y,dq as y,cZ as f,cV as S,cW as P,cX as B,cY as d,cN as R,dp as K,d0 as G,e9 as w,cG as D,cH as I,ea as E,d2 as L,d8 as W,cF as _,d9 as C,cM as A,da as T,cI as X,eb as q,d6 as Z}from"./index-p_Z8N9UO.js";const Q=M`
  div {
    width: 100%;
  }

  [data-ready='false'] {
    transform: scale(1.05);
  }

  @media (max-width: 430px) {
    [data-ready='false'] {
      transform: translateY(-50px);
    }
  }
`;var H=function(e,t,o,n){var r=arguments.length,i=r<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,o):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(r<3?s(i):r>3?s(t,o,i):s(t,o))||i);return r>3&&i&&Object.defineProperty(t,o,i),i};const N=600,j=360,J=64;let $=class extends h{constructor(){super(),this.bodyObserver=void 0,this.unsubscribe=[],this.iframe=document.getElementById("w3m-iframe"),this.ready=!1,this.unsubscribe.push(k.subscribeKey("open",t=>{t||this.onHideIframe()}),k.subscribeKey("shake",t=>{t?this.iframe.style.animation="w3m-shake 500ms var(--apkt-easings-ease-out-power-2)":this.iframe.style.animation="none"}))}disconnectedCallback(){var t;this.onHideIframe(),this.unsubscribe.forEach(o=>o()),(t=this.bodyObserver)==null||t.unobserve(window.document.body)}async firstUpdated(){var o;await this.syncTheme(),this.iframe.style.display="block";const t=(o=this==null?void 0:this.renderRoot)==null?void 0:o.querySelector("div");this.bodyObserver=new ResizeObserver(n=>{var s,a;const r=(s=n==null?void 0:n[0])==null?void 0:s.contentBoxSize,i=(a=r==null?void 0:r[0])==null?void 0:a.inlineSize;this.iframe.style.height=`${N}px`,t.style.height=`${N}px`,V.state.enableEmbedded?this.updateFrameSizeForEmbeddedMode():i&&i<=430?(this.iframe.style.width="100%",this.iframe.style.left="0px",this.iframe.style.bottom="0px",this.iframe.style.top="unset",this.onShowIframe()):(this.iframe.style.width=`${j}px`,this.iframe.style.left=`calc(50% - ${j/2}px)`,this.iframe.style.top=`calc(50% - ${N/2}px + ${J/2}px)`,this.iframe.style.bottom="unset",this.onShowIframe())}),this.bodyObserver.observe(window.document.body)}render(){return c`<div data-ready=${this.ready} id="w3m-frame-container"></div>`}onShowIframe(){const t=window.innerWidth<=430;this.ready=!0,this.iframe.style.animation=t?"w3m-iframe-zoom-in-mobile 200ms var(--apkt-easings-ease-out-power-2)":"w3m-iframe-zoom-in 200ms var(--apkt-easings-ease-out-power-2)"}onHideIframe(){this.iframe.style.display="none",this.iframe.style.animation="w3m-iframe-fade-out 200ms var(--apkt-easings-ease-out-power-2)"}async syncTheme(){const t=F.getAuthConnector();if(t){const o=z.getSnapshot().themeMode,n=z.getSnapshot().themeVariables;await t.provider.syncTheme({themeVariables:n,w3mThemeVariables:Y(n,o)})}}async updateFrameSizeForEmbeddedMode(){var n;const t=(n=this==null?void 0:this.renderRoot)==null?void 0:n.querySelector("div");await new Promise(r=>{setTimeout(r,300)});const o=this.getBoundingClientRect();t.style.width="100%",this.iframe.style.left=`${o.left}px`,this.iframe.style.top=`${o.top}px`,this.iframe.style.width=`${o.width}px`,this.iframe.style.height=`${o.height}px`,this.onShowIframe()}};$.styles=Q;H([y()],$.prototype,"ready",void 0);$=H([f("w3m-approve-transaction-view")],$);const ee=S`
  a {
    border: none;
    border-radius: ${({borderRadius:e})=>e[20]};
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: ${({spacing:e})=>e[1]};
    transition:
      background-color ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      box-shadow ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      border ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color, box-shadow, border;
  }

  /* -- Variants --------------------------------------------------------------- */
  a[data-type='success'] {
    background-color: ${({tokens:e})=>e.core.backgroundSuccess};
    color: ${({tokens:e})=>e.core.textSuccess};
  }

  a[data-type='error'] {
    background-color: ${({tokens:e})=>e.core.backgroundError};
    color: ${({tokens:e})=>e.core.textError};
  }

  a[data-type='warning'] {
    background-color: ${({tokens:e})=>e.core.backgroundWarning};
    color: ${({tokens:e})=>e.core.textWarning};
  }

  /* -- Sizes --------------------------------------------------------------- */
  a[data-size='sm'] {
    height: 24px;
  }

  a[data-size='md'] {
    height: 28px;
  }

  a[data-size='lg'] {
    height: 32px;
  }

  a[data-size='sm'] > wui-image,
  a[data-size='sm'] > wui-icon {
    width: 16px;
    height: 16px;
  }

  a[data-size='md'] > wui-image,
  a[data-size='md'] > wui-icon {
    width: 20px;
    height: 20px;
  }

  a[data-size='lg'] > wui-image,
  a[data-size='lg'] > wui-icon {
    width: 24px;
    height: 24px;
  }

  wui-text {
    padding-left: ${({spacing:e})=>e[1]};
    padding-right: ${({spacing:e})=>e[1]};
  }

  wui-image {
    border-radius: ${({borderRadius:e})=>e[3]};
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
    a[data-type='success']:not(:disabled):hover {
      background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
      box-shadow: 0px 0px 0px 1px ${({tokens:e})=>e.core.borderSuccess};
    }

    a[data-type='error']:not(:disabled):hover {
      background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
      box-shadow: 0px 0px 0px 1px ${({tokens:e})=>e.core.borderError};
    }

    a[data-type='warning']:not(:disabled):hover {
      background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
      box-shadow: 0px 0px 0px 1px ${({tokens:e})=>e.core.borderWarning};
    }
  }

  a[data-type='success']:not(:disabled):focus-visible {
    box-shadow:
      0px 0px 0px 1px ${({tokens:e})=>e.core.backgroundAccentPrimary},
      0px 0px 0px 4px ${({tokens:e})=>e.core.foregroundAccent020};
  }

  a[data-type='error']:not(:disabled):focus-visible {
    box-shadow:
      0px 0px 0px 1px ${({tokens:e})=>e.core.backgroundAccentPrimary},
      0px 0px 0px 4px ${({tokens:e})=>e.core.foregroundAccent020};
  }

  a[data-type='warning']:not(:disabled):focus-visible {
    box-shadow:
      0px 0px 0px 1px ${({tokens:e})=>e.core.backgroundAccentPrimary},
      0px 0px 0px 4px ${({tokens:e})=>e.core.foregroundAccent020};
  }

  a:disabled {
    opacity: 0.5;
  }
`;var g=function(e,t,o,n){var r=arguments.length,i=r<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,o):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(r<3?s(i):r>3?s(t,o,i):s(t,o))||i);return r>3&&i&&Object.defineProperty(t,o,i),i};const te={sm:"md-regular",md:"lg-regular",lg:"lg-regular"},ie={success:"sealCheck",error:"warning",warning:"exclamationCircle"};let l=class extends h{constructor(){super(...arguments),this.type="success",this.size="md",this.imageSrc=void 0,this.disabled=!1,this.href="",this.text=void 0}render(){return c`
      <a
        rel="noreferrer"
        target="_blank"
        href=${this.href}
        class=${this.disabled?"disabled":""}
        data-type=${this.type}
        data-size=${this.size}
      >
        ${this.imageTemplate()}
        <wui-text variant=${te[this.size]} color="inherit">${this.text}</wui-text>
      </a>
    `}imageTemplate(){return this.imageSrc?c`<wui-image src=${this.imageSrc} size="inherit"></wui-image>`:c`<wui-icon
      name=${ie[this.type]}
      weight="fill"
      color="inherit"
      size="inherit"
      class="image-icon"
    ></wui-icon>`}};l.styles=[P,B,ee];g([d()],l.prototype,"type",void 0);g([d()],l.prototype,"size",void 0);g([d()],l.prototype,"imageSrc",void 0);g([d({type:Boolean})],l.prototype,"disabled",void 0);g([d()],l.prototype,"href",void 0);g([d()],l.prototype,"text",void 0);l=g([f("wui-semantic-chip")],l);var oe=function(e,t,o,n){var r=arguments.length,i=r<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,o):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(r<3?s(i):r>3?s(t,o,i):s(t,o))||i);return r>3&&i&&Object.defineProperty(t,o,i),i};let U=class extends h{render(){return c`
      <wui-flex flexDirection="column" alignItems="center" gap="5" padding="5">
        <wui-text variant="md-regular" color="primary">Follow the instructions on</wui-text>
        <wui-semantic-chip
          icon="externalLink"
          variant="fill"
          text=${R.SECURE_SITE_DASHBOARD}
          href=${R.SECURE_SITE_DASHBOARD}
          imageSrc=${R.SECURE_SITE_FAVICON}
          data-testid="w3m-secure-website-button"
        >
        </wui-semantic-chip>
        <wui-text variant="sm-regular" color="secondary">
          You will have to reconnect for security reasons
        </wui-text>
      </wui-flex>
    `}};U=oe([f("w3m-upgrade-wallet-view")],U);const ne=S`
  :host {
    width: 100%;
  }

  button {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[4]};
    padding: ${({spacing:e})=>e[4]};
  }

  .name {
    max-width: 75%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      cursor: pointer;
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
      border-radius: ${({borderRadius:e})=>e[6]};
    }
  }

  button:disabled {
    opacity: 0.5;
    cursor: default;
  }

  button:focus-visible:enabled {
    box-shadow: 0 0 0 4px ${({tokens:e})=>e.core.foregroundAccent040};
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
  }
`;var v=function(e,t,o,n){var r=arguments.length,i=r<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,o):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(r<3?s(i):r>3?s(t,o,i):s(t,o))||i);return r>3&&i&&Object.defineProperty(t,o,i),i};let m=class extends h{constructor(){super(...arguments),this.name="",this.registered=!1,this.loading=!1,this.disabled=!1}render(){return c`
      <button ?disabled=${this.disabled}>
        <wui-text class="name" color="primary" variant="md-regular">${this.name}</wui-text>
        ${this.templateRightContent()}
      </button>
    `}templateRightContent(){return this.loading?c`<wui-loading-spinner size="lg" color="primary"></wui-loading-spinner>`:this.registered?c`<wui-tag variant="info" size="sm">Registered</wui-tag>`:c`<wui-tag variant="success" size="sm">Available</wui-tag>`}};m.styles=[P,B,ne];v([d()],m.prototype,"name",void 0);v([d({type:Boolean})],m.prototype,"registered",void 0);v([d({type:Boolean})],m.prototype,"loading",void 0);v([d({type:Boolean})],m.prototype,"disabled",void 0);m=v([f("wui-account-name-suggestion-item")],m);const re=S`
  :host {
    position: relative;
    width: 100%;
    display: inline-block;
  }

  :host([disabled]) {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .base-name {
    position: absolute;
    right: ${({spacing:e})=>e[4]};
    top: 50%;
    transform: translateY(-50%);
    text-align: right;
    padding: ${({spacing:e})=>e[1]};
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    border-radius: ${({borderRadius:e})=>e[1]};
  }
`;var x=function(e,t,o,n){var r=arguments.length,i=r<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,o):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(r<3?s(i):r>3?s(t,o,i):s(t,o))||i);return r>3&&i&&Object.defineProperty(t,o,i),i};let p=class extends h{constructor(){super(...arguments),this.disabled=!1,this.loading=!1}render(){return c`
      <wui-input-text
        value=${K(this.value)}
        ?disabled=${this.disabled}
        .value=${this.value||""}
        data-testid="wui-ens-input"
        icon="search"
        inputRightPadding="5xl"
        .onKeyDown=${this.onKeyDown}
      ></wui-input-text>
    `}};p.styles=[P,re];x([d()],p.prototype,"errorMessage",void 0);x([d({type:Boolean})],p.prototype,"disabled",void 0);x([d()],p.prototype,"value",void 0);x([d({type:Boolean})],p.prototype,"loading",void 0);x([d({attribute:!1})],p.prototype,"onKeyDown",void 0);p=x([f("wui-ens-input")],p);const se=S`
  wui-flex {
    width: 100%;
  }

  .suggestion {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[4]};
  }

  .suggestion:hover:not(:disabled) {
    cursor: pointer;
    border: none;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    border-radius: ${({borderRadius:e})=>e[6]};
    padding: ${({spacing:e})=>e[4]};
  }

  .suggestion:disabled {
    opacity: 0.5;
    cursor: default;
  }

  .suggestion:focus-visible:not(:disabled) {
    box-shadow: 0 0 0 4px ${({tokens:e})=>e.core.foregroundAccent040};
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  .suggested-name {
    max-width: 75%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  form {
    width: 100%;
    position: relative;
  }

  .input-submit-button,
  .input-loading-spinner {
    position: absolute;
    top: 22px;
    transform: translateY(-50%);
    right: 10px;
  }
`;var b=function(e,t,o,n){var r=arguments.length,i=r<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,o):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(r<3?s(i):r>3?s(t,o,i):s(t,o))||i);return r>3&&i&&Object.defineProperty(t,o,i),i};let u=class extends h{constructor(){super(),this.formRef=G(),this.usubscribe=[],this.name="",this.error="",this.loading=w.state.loading,this.suggestions=w.state.suggestions,this.profileName=D.state.profileName,this.onDebouncedNameInputChange=I.debounce(t=>{t.length<4?this.error="Name must be at least 4 characters long":E.isValidReownName(t)?(this.error="",w.getSuggestions(t)):this.error="The value is not a valid username"}),this.usubscribe.push(w.subscribe(t=>{this.suggestions=t.suggestions,this.loading=t.loading}),D.subscribeKey("profileName",t=>{this.profileName=t,t&&(this.error="You already own a name")}))}firstUpdated(){var t;(t=this.formRef.value)==null||t.addEventListener("keydown",this.onEnterKey.bind(this))}disconnectedCallback(){var t;super.disconnectedCallback(),this.usubscribe.forEach(o=>o()),(t=this.formRef.value)==null||t.removeEventListener("keydown",this.onEnterKey.bind(this))}render(){return c`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="4"
        .padding=${["1","3","4","3"]}
      >
        <form ${L(this.formRef)} @submit=${this.onSubmitName.bind(this)}>
          <wui-ens-input
            @inputChange=${this.onNameInputChange.bind(this)}
            .errorMessage=${this.error}
            .value=${this.name}
            .onKeyDown=${this.onKeyDown.bind(this)}
          >
          </wui-ens-input>
          ${this.submitButtonTemplate()}
          <input type="submit" hidden />
        </form>
        ${this.templateSuggestions()}
      </wui-flex>
    `}submitButtonTemplate(){const t=this.suggestions.find(n=>{var r,i;return((i=(r=n.name)==null?void 0:r.split("."))==null?void 0:i[0])===this.name&&n.registered});if(this.loading)return c`<wui-loading-spinner
        class="input-loading-spinner"
        color="secondary"
      ></wui-loading-spinner>`;const o=`${this.name}${W.WC_NAME_SUFFIX}`;return c`
      <wui-icon-link
        ?disabled=${!!t}
        class="input-submit-button"
        size="sm"
        icon="chevronRight"
        iconColor=${t?"default":"accent-primary"}
        @click=${()=>this.onSubmitName(o)}
      >
      </wui-icon-link>
    `}onNameInputChange(t){const o=E.validateReownName(t.detail||"");this.name=o,this.onDebouncedNameInputChange(o)}onKeyDown(t){t.key.length===1&&!E.isValidReownName(t.key)&&t.preventDefault()}templateSuggestions(){return!this.name||this.name.length<4||this.error?null:c`<wui-flex flexDirection="column" gap="1" alignItems="center">
      ${this.suggestions.map(t=>c`<wui-account-name-suggestion-item
            name=${t.name}
            ?registered=${t.registered}
            ?loading=${this.loading}
            ?disabled=${t.registered||this.loading}
            data-testid="account-name-suggestion"
            @click=${()=>this.onSubmitName(t.name)}
          ></wui-account-name-suggestion-item>`)}
    </wui-flex>`}isAllowedToSubmit(t){var r;const o=(r=t.split("."))==null?void 0:r[0],n=this.suggestions.find(i=>{var s,a;return((a=(s=i.name)==null?void 0:s.split("."))==null?void 0:a[0])===o&&i.registered});return!this.loading&&!this.error&&!this.profileName&&o&&w.validateName(o)&&!n}async onSubmitName(t){try{if(!this.isAllowedToSubmit(t))return;_.sendEvent({type:"track",event:"REGISTER_NAME_INITIATED",properties:{isSmartAccount:C(A.state.activeChain)===T.ACCOUNT_TYPES.SMART_ACCOUNT,ensName:t}}),await w.registerName(t),_.sendEvent({type:"track",event:"REGISTER_NAME_SUCCESS",properties:{isSmartAccount:C(A.state.activeChain)===T.ACCOUNT_TYPES.SMART_ACCOUNT,ensName:t}})}catch(o){X.showError(o.message),_.sendEvent({type:"track",event:"REGISTER_NAME_ERROR",properties:{isSmartAccount:C(A.state.activeChain)===T.ACCOUNT_TYPES.SMART_ACCOUNT,ensName:t,error:I.parseError(o)}})}}onEnterKey(t){if(t.key==="Enter"&&this.name&&this.isAllowedToSubmit(this.name)){const o=`${this.name}${W.WC_NAME_SUFFIX}`;this.onSubmitName(o)}}};u.styles=se;b([d()],u.prototype,"errorMessage",void 0);b([y()],u.prototype,"name",void 0);b([y()],u.prototype,"error",void 0);b([y()],u.prototype,"loading",void 0);b([y()],u.prototype,"suggestions",void 0);b([y()],u.prototype,"profileName",void 0);u=b([f("w3m-register-account-name-view")],u);const ae=M`
  .continue-button-container {
    width: 100%;
  }
`;var ce=function(e,t,o,n){var r=arguments.length,i=r<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,o):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(r<3?s(i):r>3?s(t,o,i):s(t,o))||i);return r>3&&i&&Object.defineProperty(t,o,i),i};let O=class extends h{render(){return c`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="6"
        .padding=${["0","0","4","0"]}
      >
        ${this.onboardingTemplate()} ${this.buttonsTemplate()}
        <wui-link
          @click=${()=>{I.openHref(q.URLS.FAQ,"_blank")}}
        >
          Learn more
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-link>
      </wui-flex>
    `}onboardingTemplate(){return c` <wui-flex
      flexDirection="column"
      gap="6"
      alignItems="center"
      .padding=${["0","6","0","6"]}
    >
      <wui-flex gap="3" alignItems="center" justifyContent="center">
        <wui-icon-box size="xl" color="success" icon="checkmark"></wui-icon-box>
      </wui-flex>
      <wui-flex flexDirection="column" alignItems="center" gap="3">
        <wui-text align="center" variant="md-medium" color="primary">
          Account name chosen successfully
        </wui-text>
        <wui-text align="center" variant="md-regular" color="primary">
          You can now fund your account and trade crypto
        </wui-text>
      </wui-flex>
    </wui-flex>`}buttonsTemplate(){return c`<wui-flex
      .padding=${["0","4","0","4"]}
      gap="3"
      class="continue-button-container"
    >
      <wui-button fullWidth size="lg" borderRadius="xs" @click=${this.redirectToAccount.bind(this)}
        >Let's Go!
      </wui-button>
    </wui-flex>`}redirectToAccount(){Z.replace("Account")}};O.styles=ae;O=ce([f("w3m-register-account-name-success-view")],O);export{$ as W3mApproveTransactionView,O as W3mRegisterAccountNameSuccess,u as W3mRegisterAccountNameView,U as W3mUpgradeWalletView};
