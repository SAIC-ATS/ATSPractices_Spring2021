(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{256:function(t,e,n){var content=n(268);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(68).default)("2f720020",content,!0,{sourceMap:!1})},267:function(t,e,n){"use strict";n(256)},268:function(t,e,n){(e=n(67)(!1)).push([t.i,"button[data-v-7e177a39]{outline:none}.highlight-underline[data-v-7e177a39]{--bg-opacity:1;background-color:#a01a58;background-color:rgba(160,26,88,var(--bg-opacity));position:absolute;bottom:-2px;height:2px;transition:left .15s,width .15s}.code-group[data-v-7e177a39]  pre[class*=language-]{border-top-left-radius:0;border-top-right-radius:0;margin-top:0}",""]),t.exports=e},288:function(t,e,n){"use strict";n.r(e);var o={data:function(){return{tabs:[],activeTabIndex:0}},watch:{activeTabIndex:function(t,e){this.switchTab(t)}},mounted:function(){this.tabs=this.$slots.default.filter((function(slot){return Boolean(slot.componentOptions)})).map((function(slot){return{label:slot.componentOptions.propsData.label,elm:slot.elm}})),this.$nextTick(this.updateHighlighteUnderlinePosition)},methods:{switchTab:function(i){this.tabs.forEach((function(t){t.elm.classList.remove("active")})),this.tabs[i].elm.classList.add("active")},updateTabs:function(i){this.activeTabIndex=i,this.updateHighlighteUnderlinePosition()},updateHighlighteUnderlinePosition:function(){var t=this.$refs.tabs[this.activeTabIndex];if(t){var e=this.$refs["highlight-underline"];e.style.left="".concat(t.offsetLeft,"px"),e.style.width="".concat(t.clientWidth,"px")}}}},r=(n(267),n(5)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"code-group"},[n("div",{staticClass:"rounded-t-md border-b-2 border-gray-700 px-2 bg-gray-800 text-sm text-white relative"},[t._l(t.tabs,(function(e,i){var label=e.label;return n("button",{key:label,ref:"tabs",refInFor:!0,staticClass:"px-4 py-3 text-gray-400 font-bold font-mono",class:[t.activeTabIndex===i&&"active"],on:{click:function(e){return t.updateTabs(i)}}},[t._v(t._s(label))])})),t._v(" "),n("span",{ref:"highlight-underline",staticClass:"highlight-underline"})],2),t._v(" "),t._t("default")],2)}),[],!1,null,"7e177a39",null);e.default=component.exports}}]);