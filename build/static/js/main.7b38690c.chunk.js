(this.webpackJsonpclock=this.webpackJsonpclock||[]).push([[0],[,,,,,,,,function(t,e,a){t.exports=a(16)},,,,,function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){"use strict";a.r(e);var n=a(0),o=a.n(n),c=a(2),i=a.n(c),l=(a(13),a(3)),s=a(4),r=a(6),u=a(5),m=a(7),h=(a(14),a(15),function(t){return o.a.createElement("div",{className:"Clock w3-container"},o.a.createElement("p",{className:"Time"},t.today.toLocaleTimeString()),t.toggleDate&&o.a.createElement("p",{className:"Date"},t.today.toLocaleDateString()))}),g=function(t){function e(t){var a;return Object(l.a)(this,e),(a=Object(r.a)(this,Object(u.a)(e).call(this,t))).state={today:new Date,toggleDate:!0},a}return Object(m.a)(e,t),Object(s.a)(e,[{key:"componentDidMount",value:function(){var t=this;this.timerID=setInterval((function(){return t.tick()}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"tick",value:function(){this.setState({today:new Date})}},{key:"tDate",value:function(){console.log("clicked"),console.log(this.state.toggleDate),this.setState({toggleDate:!this.state.toggleDate})}},{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement("h1",{className:"Header w3-container"},o.a.createElement("i",{className:"fa fa-clock-o"}),"\xa0Clock With React"),o.a.createElement("p",null,o.a.createElement("input",{className:"Button",type:"Submit",onClick:this.tDate.bind(this),value:this.state.toggleDate?"Hide Date":"Show Date"})),o.a.createElement(h,{today:this.state.today,toggleDate:this.state.toggleDate}))}}]),e}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}],[[8,1,2]]]);
//# sourceMappingURL=main.7b38690c.chunk.js.map