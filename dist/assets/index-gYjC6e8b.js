import{cV as d,cW as c,cX as f,cY as o,cZ as m,c_ as v,d0 as y,d1 as b,c$ as h,d2 as w,d3 as g}from"./index-p_Z8N9UO.js";const x=d`
  :host {
    position: relative;
    display: inline-block;
  }

  input {
    background: transparent;
    height: auto;
    box-sizing: border-box;
    color: ${({tokens:t})=>t.theme.textPrimary};
    font-feature-settings: 'case' on;
    font-size: var(--local-font-size);
    caret-color: ${({tokens:t})=>t.core.textAccentPrimary};
    line-height: 130%;
    letter-spacing: -1.28px;
    -webkit-appearance: none;
    -moz-appearance: textfield;
    padding: 0px;
    font-family: ${({fontFamily:t})=>t.mono};
  }

  :host([data-width-variant='auto']) input {
    width: 100%;
  }

  :host([data-width-variant='fit']) input {
    width: 1ch;
  }

  .wui-input-amount-fit-mirror {
    position: absolute;
    visibility: hidden;
    white-space: pre;
    font-size: var(--local-font-size);
    line-height: 130%;
    letter-spacing: -1.28px;
    font-family: ${({fontFamily:t})=>t.mono};
  }

  .wui-input-amount-fit-width {
    display: inline-block;
    position: relative;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input::placeholder {
    color: ${({tokens:t})=>t.theme.foregroundTertiary};
  }
`;var s=function(t,e,n,p){var r=arguments.length,a=r<3?e:p===null?p=Object.getOwnPropertyDescriptor(e,n):p,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(t,e,n,p);else for(var l=t.length-1;l>=0;l--)(u=t[l])&&(a=(r<3?u(a):r>3?u(e,n,a):u(e,n))||a);return r>3&&a&&Object.defineProperty(e,n,a),a};let i=class extends v{constructor(){super(...arguments),this.inputElementRef=y(),this.disabled=!1,this.value="",this.placeholder="0",this.widthVariant="auto",this.maxDecimals=void 0,this.maxIntegers=void 0,this.fontSize="h4"}firstUpdated(){this.resizeInput()}updated(){this.style.setProperty("--local-font-size",b.textSize[this.fontSize]),this.resizeInput()}render(){var e;return this.dataset.widthVariant=this.widthVariant,(e=this.inputElementRef)!=null&&e.value&&this.value&&(this.inputElementRef.value.value=this.value),this.widthVariant==="auto"?this.inputTemplate():h`
      <div class="wui-input-amount-fit-width">
        <span class="wui-input-amount-fit-mirror"></span>
        ${this.inputTemplate()}
      </div>
    `}inputTemplate(){return h`<input
      ${w(this.inputElementRef)}
      type="text"
      inputmode="decimal"
      pattern="[0-9,.]*"
      placeholder=${this.placeholder}
      ?disabled=${this.disabled}
      autofocus
      value=${this.value??""}
      @input=${this.dispatchInputChangeEvent.bind(this)}
    />`}dispatchInputChangeEvent(){this.inputElementRef.value&&(this.inputElementRef.value.value=g.maskInput({value:this.inputElementRef.value.value,decimals:this.maxDecimals,integers:this.maxIntegers}),this.dispatchEvent(new CustomEvent("inputChange",{detail:this.inputElementRef.value.value,bubbles:!0,composed:!0})),this.resizeInput())}resizeInput(){if(this.widthVariant==="fit"){const e=this.inputElementRef.value;if(e){const n=e.previousElementSibling;n&&(n.textContent=e.value||"0",e.style.width=`${n.offsetWidth}px`)}}}};i.styles=[c,f,x];s([o({type:Boolean})],i.prototype,"disabled",void 0);s([o({type:String})],i.prototype,"value",void 0);s([o({type:String})],i.prototype,"placeholder",void 0);s([o({type:String})],i.prototype,"widthVariant",void 0);s([o({type:Number})],i.prototype,"maxDecimals",void 0);s([o({type:Number})],i.prototype,"maxIntegers",void 0);s([o({type:String})],i.prototype,"fontSize",void 0);i=s([m("wui-input-amount")],i);
