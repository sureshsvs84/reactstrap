(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{251:function(e,a,t){"use strict";var l=t(1),s=t(6),n=t(43),r=t(0),i=t.n(r),c=t(7),o=t.n(c),m=t(36),u=t.n(m),f=t(37),d=t(52),h={children:o.a.node,className:o.a.string,closeClassName:o.a.string,closeAriaLabel:o.a.string,cssModule:o.a.object,color:o.a.string,fade:o.a.bool,isOpen:o.a.bool,toggle:o.a.func,tag:f.p,transition:o.a.shape(d.a.propTypes),innerRef:o.a.oneOfType([o.a.object,o.a.string,o.a.func])},p={color:"success",isOpen:!0,tag:"div",closeAriaLabel:"Close",fade:!0,transition:Object(n.a)({},d.a.defaultProps,{unmountOnExit:!0})};function g(e){var a=e.className,t=e.closeClassName,r=e.closeAriaLabel,c=e.cssModule,o=e.tag,m=e.color,h=e.isOpen,p=e.toggle,g=e.children,E=e.transition,b=e.fade,k=e.innerRef,y=Object(s.a)(e,["className","closeClassName","closeAriaLabel","cssModule","tag","color","isOpen","toggle","children","transition","fade","innerRef"]),v=Object(f.l)(u()(a,"alert","alert-"+m,{"alert-dismissible":p}),c),O=Object(f.l)(u()("close",t),c),N=Object(n.a)({},d.a.defaultProps,E,{baseClass:b?E.baseClass:"",timeout:b?E.timeout:0});return i.a.createElement(d.a,Object(l.a)({},y,N,{tag:o,className:v,in:h,role:"alert",innerRef:k}),p?i.a.createElement("button",{type:"button",className:O,"aria-label":r,onClick:p},i.a.createElement("span",{"aria-hidden":"true"},"\xd7")):null,g)}g.propTypes=h,g.defaultProps=p,a.a=g},286:function(e,a,t){"use strict";t.r(a);var l=t(11),s=t(12),n=t(14),r=t(13),i=t(16),c=t(15),o=t(0),m=t.n(o),u=t(41),f=t(42),d=t(44),h=t(46),p=t(45),g=t(251),E=function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(n.a)(this,Object(r.a)(a).call(this,e))).state={visible:!0},t.onDismiss=t.onDismiss.bind(Object(i.a)(t)),t}return Object(c.a)(a,e),Object(s.a)(a,[{key:"onDismiss",value:function(){this.setState({visible:!1})}},{key:"render",value:function(){return m.a.createElement("div",{className:"animated fadeIn"},m.a.createElement(u.a,null,m.a.createElement(f.a,{xs:"12",md:"6"},m.a.createElement(d.a,null,m.a.createElement(h.a,null,m.a.createElement("i",{className:"fa fa-align-justify"}),m.a.createElement("strong",null,"Alerts"),m.a.createElement("div",{className:"card-header-actions"},m.a.createElement("a",{href:"https://reactstrap.github.io/components/alerts/",rel:"noreferrer noopener",target:"_blank",className:"card-header-action"},m.a.createElement("small",{className:"text-muted"},"docs")))),m.a.createElement(p.a,null,m.a.createElement(g.a,{color:"primary"},"This is a primary alert \u2014 check it out!"),m.a.createElement(g.a,{color:"secondary"},"This is a secondary alert \u2014 check it out!"),m.a.createElement(g.a,{color:"success"},"This is a success alert \u2014 check it out!"),m.a.createElement(g.a,{color:"danger"},"This is a danger alert \u2014 check it out!"),m.a.createElement(g.a,{color:"warning"},"This is a warning alert \u2014 check it out!"),m.a.createElement(g.a,{color:"info"},"This is a info alert \u2014 check it out!"),m.a.createElement(g.a,{color:"light"},"This is a light alert \u2014 check it out!"),m.a.createElement(g.a,{color:"dark"},"This is a dark alert \u2014 check it out!")))),m.a.createElement(f.a,{xs:"12",md:"6"},m.a.createElement(d.a,null,m.a.createElement(h.a,null,m.a.createElement("i",{className:"fa fa-align-justify"}),m.a.createElement("strong",null,"Alerts"),m.a.createElement("small",null," use ",m.a.createElement("code",null,".alert-link")," to provide links")),m.a.createElement(p.a,null,m.a.createElement(g.a,{color:"primary"},"This is a primary alert with ",m.a.createElement("a",{href:"#",className:"alert-link"},"an example link"),". Give it a click if you like."),m.a.createElement(g.a,{color:"secondary"},"This is a secondary alert with ",m.a.createElement("a",{href:"#",className:"alert-link"},"an example link"),". Give it a click if you like."),m.a.createElement(g.a,{color:"success"},"This is a success alert with ",m.a.createElement("a",{href:"#",className:"alert-link"},"an example link"),". Give it a click if you like."),m.a.createElement(g.a,{color:"danger"},"This is a danger alert with ",m.a.createElement("a",{href:"#",className:"alert-link"},"an example link"),". Give it a click if you like."),m.a.createElement(g.a,{color:"warning"},"This is a warning alert with ",m.a.createElement("a",{href:"#",className:"alert-link"},"an example link"),". Give it a click if you like."),m.a.createElement(g.a,{color:"info"},"This is a info alert with ",m.a.createElement("a",{href:"#",className:"alert-link"},"an example link"),". Give it a click if you like."),m.a.createElement(g.a,{color:"light"},"This is a light alert with ",m.a.createElement("a",{href:"#",className:"alert-link"},"an example link"),". Give it a click if you like."),m.a.createElement(g.a,{color:"dark"},"This is a dark alert with ",m.a.createElement("a",{href:"#",className:"alert-link"},"an example link"),". Give it a click if you like."))))),m.a.createElement(u.a,null,m.a.createElement(f.a,{xs:"12",md:"6"},m.a.createElement(d.a,null,m.a.createElement(h.a,null,m.a.createElement("i",{className:"fa fa-align-justify"}),m.a.createElement("strong",null,"Alerts"),m.a.createElement("small",null,"additional content")),m.a.createElement(p.a,null,m.a.createElement(g.a,{color:"success"},m.a.createElement("h4",{className:"alert-heading"},"Well done!"),m.a.createElement("p",null,"Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content."),m.a.createElement("hr",null),m.a.createElement("p",{className:"mb-0"},"Whenever you need to, be sure to use margin utilities to keep things nice and tidy."))))),m.a.createElement(f.a,{xs:"12",md:"6"},m.a.createElement(d.a,null,m.a.createElement(h.a,null,m.a.createElement("i",{className:"fa fa-align-justify"}),m.a.createElement("strong",null,"Alerts"),m.a.createElement("small",null,"dismissing")),m.a.createElement(p.a,null,m.a.createElement(g.a,{color:"info",isOpen:this.state.visible,toggle:this.onDismiss},"I am an alert and I can be dismissed!"))))))}}]),a}(o.Component);a.default=E},38:function(e,a){e.exports=function(e){var a=typeof e;return!!e&&("object"==a||"function"==a)}},41:function(e,a,t){"use strict";var l=t(1),s=t(6),n=t(0),r=t.n(n),i=t(7),c=t.n(i),o=t(36),m=t.n(o),u=t(37),f={tag:u.p,noGutters:c.a.bool,className:c.a.string,cssModule:c.a.object,form:c.a.bool},d=function(e){var a=e.className,t=e.cssModule,n=e.noGutters,i=e.tag,c=e.form,o=Object(s.a)(e,["className","cssModule","noGutters","tag","form"]),f=Object(u.l)(m()(a,n?"no-gutters":null,c?"form-row":"row"),t);return r.a.createElement(i,Object(l.a)({},o,{className:f}))};d.propTypes=f,d.defaultProps={tag:"div"},a.a=d},42:function(e,a,t){"use strict";var l=t(1),s=t(6),n=t(38),r=t.n(n),i=t(0),c=t.n(i),o=t(7),m=t.n(o),u=t(36),f=t.n(u),d=t(37),h=m.a.oneOfType([m.a.number,m.a.string]),p=m.a.oneOfType([m.a.bool,m.a.number,m.a.string,m.a.shape({size:m.a.oneOfType([m.a.bool,m.a.number,m.a.string]),order:h,offset:h})]),g={tag:d.p,xs:p,sm:p,md:p,lg:p,xl:p,className:m.a.string,cssModule:m.a.object,widths:m.a.array},E={tag:"div",widths:["xs","sm","md","lg","xl"]},b=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},k=function(e){var a=e.className,t=e.cssModule,n=e.widths,i=e.tag,o=Object(s.a)(e,["className","cssModule","widths","tag"]),m=[];n.forEach(function(a,l){var s=e[a];if(delete o[a],s||""===s){var n=!l;if(r()(s)){var i,c=n?"-":"-"+a+"-",u=b(n,a,s.size);m.push(Object(d.l)(f()(((i={})[u]=s.size||""===s.size,i["order"+c+s.order]=s.order||0===s.order,i["offset"+c+s.offset]=s.offset||0===s.offset,i)),t))}else{var h=b(n,a,s);m.push(h)}}}),m.length||m.push("col");var u=Object(d.l)(f()(a,m),t);return c.a.createElement(i,Object(l.a)({},o,{className:u}))};k.propTypes=g,k.defaultProps=E,a.a=k},52:function(e,a,t){"use strict";var l=t(1),s=t(6),n=t(43),r=t(0),i=t.n(r),c=t(7),o=t.n(c),m=t(36),u=t.n(m),f=t(49),d=t(37),h=Object(n.a)({},f.Transition.propTypes,{children:o.a.oneOfType([o.a.arrayOf(o.a.node),o.a.node]),tag:d.p,baseClass:o.a.string,baseClassActive:o.a.string,className:o.a.string,cssModule:o.a.object,innerRef:o.a.oneOfType([o.a.object,o.a.string,o.a.func])}),p=Object(n.a)({},f.Transition.defaultProps,{tag:"div",baseClass:"fade",baseClassActive:"show",timeout:d.e.Fade,appear:!0,enter:!0,exit:!0,in:!0});function g(e){var a=e.tag,t=e.baseClass,n=e.baseClassActive,r=e.className,c=e.cssModule,o=e.children,m=e.innerRef,h=Object(s.a)(e,["tag","baseClass","baseClassActive","className","cssModule","children","innerRef"]),p=Object(d.n)(h,d.c),g=Object(d.m)(h,d.c);return i.a.createElement(f.Transition,p,function(e){var s="entered"===e,f=Object(d.l)(u()(r,t,s&&n),c);return i.a.createElement(a,Object(l.a)({className:f},g,{ref:m}),o)})}g.propTypes=h,g.defaultProps=p,a.a=g}}]);
//# sourceMappingURL=43.589f2327.chunk.js.map