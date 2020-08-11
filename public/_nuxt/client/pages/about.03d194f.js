(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{438:function(e,t,n){"use strict";n.r(t);var r={components:{},data:function(){return{valid:!0,name:"",message:"",nameRules:[function(e){return!!e||"Name is required"},function(e){return e&&e.length<=45||"Name must be less than 45 characters"}],email:"",emailRules:[function(e){return!!e||"E-mail is required"},function(e){return/.+@.+/.test(e)||"E-mail must be valid"}],messageType:"",inputRules:[function(e){return!!e||"This field is required"},function(e){return e.length>=5||"Minimum length is 5 characters"}],items:["Personal","Official","Other"],checkbox:!1,loading:!1,snackbar:!1}},methods:{reset:function(){this.$refs.form.reset()},resetValidation:function(){this.$refs.form.resetValidation()}}},o=n(70),l=n(104),c=n.n(l),m=n(371),d=n(167),v=n(151),f=n(440),k=n(376),x=n(149),_=n(432),h=n(421),y=n(333),V=n(422),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-banner",{scopedSlots:e._u([{key:"actions",fn:function(){return[n("v-btn",{attrs:{text:"",color:"primary"}},[e._v("products")]),e._v(" "),n("v-btn",{attrs:{text:"",color:"warning"}},[e._v("contact us")])]},proxy:!0}])},[e._v("\n    order your foodstuff and get it delivered to your doorstep\n    ")]),e._v(" "),n("v-card",{staticClass:"mx-5 px-4 py-5 my-5"},[n("v-form",{ref:"form",staticClass:"container",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[n("v-text-field",{attrs:{counter:45,rules:e.nameRules,label:"Full Name","prepend-icon":"mdi-account",required:""},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),e._v(" "),n("v-text-field",{attrs:{rules:e.emailRules,label:"E-mail","prepend-icon":"mdi-email",required:""},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),e._v(" "),n("v-select",{attrs:{items:e.items,rules:[function(e){return!!e||"Type is required"}],label:"Message Type","prepend-icon":"mdi-comment",required:""},model:{value:e.messageType,callback:function(t){e.messageType=t},expression:"messageType"}}),e._v(" "),n("v-textarea",{attrs:{label:"Message","prepend-icon":"mdi-forum",rules:e.inputRules},model:{value:e.message,callback:function(t){e.message=t},expression:"message"}}),e._v(" "),n("v-checkbox",{attrs:{rules:[function(e){return!!e||"You must agree to continue!"}],label:"are you human?",required:""},model:{value:e.checkbox,callback:function(t){e.checkbox=t},expression:"checkbox"}}),e._v(" "),n("v-btn",{attrs:{disabled:!e.valid,color:"primary",loading:e.loading}},[e._v("Send")]),e._v(" "),n("v-btn",{attrs:{color:"error"},on:{click:e.reset}},[e._v("Reset")]),e._v(" "),n("v-btn",{attrs:{color:"secondary"},on:{click:e.resetValidation}},[e._v("Reset Validation")])],1),e._v(" "),n("v-snackbar",{attrs:{timeout:4e3,top:"",color:"grey darken-3 "},model:{value:e.snackbar,callback:function(t){e.snackbar=t},expression:"snackbar"}},[n("span",{staticClass:"orange--text"},[e._v("Awesome! your message has been sent.")]),e._v(" "),n("v-btn",{attrs:{color:"orange",text:""},on:{click:function(t){e.snackbar=!1}}},[n("v-icon",{staticClass:"orange--text"},[e._v("close")]),e._v("close\n      ")],1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;c()(component,{VBanner:m.a,VBtn:d.a,VCard:v.a,VCheckbox:f.a,VForm:k.a,VIcon:x.a,VSelect:_.a,VSnackbar:h.a,VTextField:y.a,VTextarea:V.a})}}]);