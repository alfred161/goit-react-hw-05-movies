"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[674],{713:function(e,t,r){r.d(t,{E3:function(){return s},Hx:function(){return v},Y5:function(){return o},uV:function(){return f},wr:function(){return c}});var n=r(861),a=r(757),u=r.n(a),i=r(16);i.Z.defaults.baseURL="https://api.themoviedb.org/3/",i.Z.defaults.params={api_key:"dd6550ecf9adce48a233515c99fe191a"};var c=function(){var e=(0,n.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("trending/movie/day");case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),s=function(){var e=(0,n.Z)(u().mark((function e(t){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("search/movie?query=".concat(t));case 2:return r=e.sent,e.abrupt("return",r.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(u().mark((function e(t){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("movie/".concat(t));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(u().mark((function e(t){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("movie/".concat(t,"/credits?"));case 2:return r=e.sent,e.abrupt("return",r.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,n.Z)(u().mark((function e(t){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("movie/".concat(t,"/reviews?"));case 2:return r=e.sent,e.abrupt("return",r.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},639:function(e,t,r){r.d(t,{O:function(){return o}});var n={},a={movieItem:"MovieListItemComponent_movieItem__MmPt7",movieItemTitle:"MovieListItemComponent_movieItemTitle__SynR8"},u=r(87),i=r(689),c=r(184),s=function(e){var t=e.id,r=e.title,n=(0,i.TH)();return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)("li",{className:a.movieItem,children:(0,c.jsx)(u.rU,{to:"/movies/".concat(t),state:{from:n,movieTitle:{title:r}},className:a.movieLink,children:(0,c.jsx)("h4",{className:a.movieItemTitle,children:r})})},t)})},o=function(e){var t=e.movies;return(0,c.jsx)(c.Fragment,{children:t?(0,c.jsx)("ul",{className:n.movieList,children:t.map((function(e){var t=e.id,r=e.title;return(0,c.jsx)(s,{id:t,title:r},t)}))}):(0,c.jsx)("p",{children:"Movie not found."})})}},674:function(e,t,r){r.r(t),r.d(t,{default:function(){return l}});var n=r(861),a=r(439),u=r(757),i=r.n(u),c=r(713),s=r(639),o=r(791),f=r(455),v=r(694),m="HomePage_h2__YVX0O",p=r(184),l=function(){var e=(0,o.useState)([]),t=(0,a.Z)(e,2),r=t[0],u=t[1],l=(0,o.useState)(!1),d=(0,a.Z)(l,2),h=d[0],x=d[1],w=function(){var e=(0,n.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return x(!0),e.prev=1,e.next=4,(0,c.wr)();case 4:if(0!==(t=e.sent).length){e.next=8;break}return v.Notify.failure("Sorry, no trending movies available."),e.abrupt("return");case 8:u(t),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),v.Notify.error(e.t0);case 14:return e.prev=14,x(!1),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[1,11,14,17]])})));return function(){return e.apply(this,arguments)}}();return(0,o.useEffect)((function(){w()}),[]),(0,p.jsxs)(p.Fragment,{children:[h&&(0,p.jsx)(f.Z,{}),(0,p.jsx)("h2",{className:m,children:"Trending Today"}),r.length>0&&(0,p.jsx)(s.O,{movies:r})]})}}}]);
//# sourceMappingURL=674.46d4ec99.chunk.js.map