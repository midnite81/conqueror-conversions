(function(e){function i(i){for(var r,l,s=i[0],a=i[1],o=i[2],M=0,p=[];M<s.length;M++)l=s[M],Object.prototype.hasOwnProperty.call(n,l)&&n[l]&&p.push(n[l][0]),n[l]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r]);P&&P(i);while(p.length)p.shift()();return m.push.apply(m,o||[]),t()}function t(){for(var e,i=0;i<m.length;i++){for(var t=m[i],r=!0,s=1;s<t.length;s++){var a=t[s];0!==n[a]&&(r=!1)}r&&(m.splice(i--,1),e=l(l.s=t[0]))}return e}var r={},n={app:0},m=[];function l(i){if(r[i])return r[i].exports;var t=r[i]={i:i,l:!1,exports:{}};return e[i].call(t.exports,t,t.exports,l),t.l=!0,t.exports}l.m=e,l.c=r,l.d=function(e,i,t){l.o(e,i)||Object.defineProperty(e,i,{enumerable:!0,get:t})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,i){if(1&i&&(e=l(e)),8&i)return e;if(4&i&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(l.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&i&&"string"!=typeof e)for(var r in e)l.d(t,r,function(i){return e[i]}.bind(null,r));return t},l.n=function(e){var i=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(i,"a",i),i},l.o=function(e,i){return Object.prototype.hasOwnProperty.call(e,i)},l.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],a=s.push.bind(s);s.push=i,s=s.slice();for(var o=0;o<s.length;o++)i(s[o]);var P=a;m.push([0,"chunk-vendors"]),t()})({0:function(e,i,t){e.exports=t("56d7")},1616:function(e,i,t){},"56d7":function(e,i,t){"use strict";t.r(i);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("2b0e"),n=function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("div",{attrs:{id:"app"}},[t("calculate-distances")],1)},m=[],l=function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("div",{staticClass:"calculate-distances-root px-2 md:px-0"},[e._m(0),t("div",{staticClass:"mt-2 sm:mx-auto sm:w-full sm:max-w-md"},[t("div",{staticClass:"bg-white py-8 px-4 shadow md:shadow-xl sm:rounded-lg sm:px-10 border border-gray-200",class:{"active-shadow":e.active}},[t("div",{staticClass:"mb-4"},[t("label",{staticClass:"block text-sm font-medium text-gray-700",attrs:{for:"activity"}},[e._v(" Activity ")]),t("select",{directives:[{name:"model",rawName:"v-model",value:e.selectedActivity,expression:"selectedActivity"}],staticClass:"mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none\n                            focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md",attrs:{id:"activity",name:"activity"},on:{change:function(i){var t=Array.prototype.filter.call(i.target.options,(function(e){return e.selected})).map((function(e){var i="_value"in e?e._value:e.value;return i}));e.selectedActivity=i.target.multiple?t:t[0]}}},e._l(e.activities,(function(i){return t("option",{key:i.id,domProps:{value:i.id}},[e._v(" "+e._s(i.type)+" ")])})),0)]),t("div",[t("label",{staticClass:"block text-sm font-medium text-gray-700",attrs:{for:"duration"}},[e._v(" Duration (in mins) ")]),t("div",{staticClass:"mt-1"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.duration,expression:"duration"}],staticClass:"appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md\n                               shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500\n                               focus:border-indigo-500 sm:text-sm",attrs:{id:"duration",name:"duration",type:"text",pattern:"\\d*",maxlength:"5",required:""},domProps:{value:e.duration},on:{keyup:e.checkIsNumber,input:function(i){i.target.composing||(e.duration=i.target.value)}}})])]),t("div",[t("div",{staticClass:"mt-10"},[t("dl",{staticClass:"grid grid-cols-2 gap-x-4 gap-y-8"},[t("div",{staticClass:"border-t-2 border-gray-100 pt-6"},[t("dt",{staticClass:"text-base font-medium text-gray-500"},[e._v("Miles")]),t("dd",{staticClass:"text-3xl font-extrabold tracking-tight",class:{"text-gray-200":e.result.isGrayed,"text-gray-900":!e.result.isGrayed}},[e._v(" "+e._s(e.result.miles)+" ")])]),t("div",{staticClass:"border-t-2 border-gray-100 pt-6"},[t("dt",{staticClass:"text-base font-medium text-gray-500"},[e._v("Kilometres")]),t("dd",{staticClass:"text-3xl font-extrabold tracking-tight",class:{"text-gray-200":e.result.isGrayed,"text-gray-900":!e.result.isGrayed}},[e._v(" "+e._s(e.result.km)+" ")])]),t("div",{staticClass:"border-t-2 border-gray-100 pt-6"},[t("dt",{staticClass:"text-base font-medium text-gray-500"},[e._v("Duration")]),t("dd",{staticClass:"text-3xl font-extrabold tracking-tight",class:{"text-gray-200":e.result.isGrayed,"text-gray-900":!e.result.isGrayed}},[e._v(" "+e._s(e.result.duration)+" ")])]),t("div",{staticClass:"border-t-2 border-gray-100 pt-6"},[t("dt",{staticClass:"text-base font-medium text-gray-500"},[e._v("Activity")]),t("dd",{staticClass:"text-3xl font-extrabold tracking-tight",class:{"text-gray-200":e.result.isGrayed,"text-gray-900":!e.result.isGrayed}},[e._v(" "+e._s(e.result.activity)+" ")])])]),e.active?t("button",{staticClass:"flex items-center justify-center mt-2 px-3 py-2 border border-transparent shadow-sm text-sm\n                        leading-4 font-medium rounded-md text-white bg-green-600 hover:bg-green-700\n                        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 w-full\n                        text-center",attrs:{type:"button"},on:{click:e.resetForm}},[t("svg",{staticClass:"h-5 w-5 ",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[t("path",{attrs:{"fill-rule":"evenodd",d:"M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002\n                                  5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0\n                                  011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2\n                                  0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z","clip-rule":"evenodd"}})]),e._v(" Reset ")]):e._e()])])])]),e._m(1)])},s=[function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("div",{staticClass:"bg-white"},[t("div",{staticClass:"max-w-7xl mx-auto py-1 px-1 sm:py-8 sm:px-6 lg:px-8"},[t("div",{staticClass:"text-center"},[t("p",{staticClass:"mt-1 text-xl font-semibold text-gray-600 sm:text-3xl sm:tracking-tight lg:text-4xl"},[e._v(" Conqueror Challenges ")]),t("p",{staticClass:"mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl"},[e._v(" Activity Conversion Calculator ")]),t("p",{staticClass:"max-w-xl mt-5 mx-auto text-lg text-gray-500"},[e._v(" Use the form below to convert time spent exercising into miles and km ")])])])])},function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("div",{staticClass:"mt-8 w-full sm:mx-auto text-center"},[t("p",{staticClass:"max-w-xl mt-5 mx-auto text-sm text-gray-400 text-bold"},[e._v(" Converter made by "),t("a",{staticClass:"text-blue-400",attrs:{href:"https://midnite.uk/",target:"_blank"}},[e._v("Simon Rogers")]),e._v(", a "),t("a",{staticClass:"text-blue-400",attrs:{href:"https://github.com/midnite81",target:"_blank"}},[e._v("software engineer")]),e._v(", from the United Kingdom. ")]),t("p",{staticClass:"max-w-xl mt-1 mx-auto text-sm text-gray-400 text-bold"},[e._v(" The "),t("a",{staticClass:"text-blue-400",attrs:{href:"https://github.com/midnite81/conqueror-conversions",target:"_blank"}},[e._v(" source code ")]),e._v(" can be viewed on github ")]),t("p",{staticClass:"max-w-xl mt-1 mx-auto text-sm text-gray-400 text-bold"},[e._v(" This is not an official Conqueror Challenges application. ")]),t("div",{staticClass:"max-w-xl mt-1 mb-3 mx-auto text-sm text-gray-400 text-normal"},[e._v(" Icons made by "),t("a",{attrs:{href:"https://www.flaticon.com/authors/google",title:"Google"}},[e._v("Google")]),e._v(" from "),t("a",{staticClass:"text-blue-400",attrs:{href:"https://www.flaticon.com/",title:"Flaticon",target:"_blank"}},[e._v("www.flaticon.com")])])])}],a=(t("7db0"),t("b680"),t("ac1f"),t("5319"),[{id:0,type:"Please select an activity",shortType:"Please select an activity"},{id:1,type:"Aerobics, low intensity",shortType:"Aerobics",milePerMin:.064,milePer10Min:.64,kmPerMin:.102,kmPer10Min:1.02},{id:2,type:"Aerobics, high intensity",shortType:"Aerobics",milePerMin:.091,milePer10Min:.91,kmPerMin:.146,kmPer10Min:1.46},{id:3,type:"Aerobics, step",shortType:"Aerobics",milePerMin:.077,milePer10Min:.77,kmPerMin:.123,kmPer10Min:1.23},{id:4,type:"Badminton",shortType:"Badminton",milePerMin:.066,milePer10Min:.66,kmPerMin:.105,kmPer10Min:1.05},{id:5,type:"Ballet dancing",shortType:"Ballet",milePerMin:.06,milePer10Min:.6,kmPerMin:.097,kmPer10Min:.97},{id:6,type:"Baseball",shortType:"Baseball",milePerMin:.065,milePer10Min:.65,kmPerMin:.105,kmPer10Min:1.05},{id:7,type:"Basketball",shortType:"Basketball",milePerMin:.065,milePer10Min:.65,kmPerMin:.105,kmPer10Min:1.05},{id:8,type:"Bicycling, easy (8.7mi/h or 14km/h)",shortType:"Bicycling",milePerMin:.065,milePer10Min:.65,kmPerMin:.105,kmPer10Min:1.05},{id:9,type:"Bicycling, moderate (15mi/h - 24km/h)",shortType:"Bicycling",milePerMin:.085,milePer10Min:.85,kmPerMin:.137,kmPer10Min:1.37},{id:10,type:"Bicycling, vigorous (20mi/h - 32km/h)",shortType:"Bicycling",milePerMin:.1,milePer10Min:1,kmPerMin:.161,kmPer10Min:1.61},{id:11,type:"Bowling",shortType:"Bowling",milePerMin:.036,milePer10Min:.36,kmPerMin:.057,kmPer10Min:.57},{id:12,type:"Boxing",shortType:"Boxing",milePerMin:.111,milePer10Min:1.11,kmPerMin:.179,kmPer10Min:1.79},{id:13,type:"Calisthenics",shortType:"Calisthenics",milePerMin:.053,milePer10Min:.53,kmPerMin:.085,kmPer10Min:.85},{id:14,type:"Canoeing",shortType:"Canoeing",milePerMin:.046,milePer10Min:.46,kmPerMin:.073,kmPer10Min:.73},{id:15,type:"Cheerleading",shortType:"Cheerleading",milePerMin:.05,milePer10Min:.5,kmPerMin:.08,kmPer10Min:.8},{id:16,type:"Circuit training (squats, lunges, pushups, burpees, situps etc)",shortType:"Circuit training",milePerMin:.1,milePer10Min:1,kmPerMin:.16,kmPer10Min:1.6},{id:17,type:"Climbing, indoor/outdoor",shortType:"Climbing",milePerMin:.135,milePer10Min:1.35,kmPerMin:.217,kmPer10Min:2.17},{id:18,type:"Croquet",shortType:"Croquet",milePerMin:.038,milePer10Min:.38,kmPerMin:.061,kmPer10Min:.61},{id:19,type:"CrossFit",shortType:"CrossFit",milePerMin:.125,milePer10Min:1.25,kmPerMin:.201,kmPer10Min:2.01},{id:20,type:"Dancing",shortType:"Dancing",milePerMin:.055,milePer10Min:.55,kmPerMin:.088,kmPer10Min:.88},{id:21,type:"Elliptical trainer",shortType:"Elliptical trainer",milePerMin:.102,milePer10Min:1.02,kmPerMin:.163,kmPer10Min:1.63},{id:22,type:"Fencing",shortType:"Fencing",milePerMin:.091,milePer10Min:.91,kmPerMin:.146,kmPer10Min:1.46},{id:23,type:"Fishing",shortType:"Fishing",milePerMin:.046,milePer10Min:.46,kmPerMin:.073,kmPer10Min:.73},{id:24,type:"Football/soccer",shortType:"Football/soccer",milePerMin:.1,milePer10Min:1,kmPerMin:.16,kmPer10Min:1.6},{id:25,type:"Gardening / yard work",shortType:"Gardening",milePerMin:.04,milePer10Min:.4,kmPerMin:.064,kmPer10Min:.64},{id:26,type:"Golf (carrying clubs)",shortType:"Golf",milePerMin:.055,milePer10Min:.55,kmPerMin:.088,kmPer10Min:.88},{id:27,type:"Grocery shopping",shortType:"Grocery shopping",milePerMin:.034,milePer10Min:.34,kmPerMin:.054,kmPer10Min:.54},{id:28,type:"Gymnastics",shortType:"Gymnastics",milePerMin:.061,milePer10Min:.61,kmPerMin:.097,kmPer10Min:.97},{id:29,type:"Handball",shortType:"Handball",milePerMin:.174,milePer10Min:1.74,kmPerMin:.28,kmPer10Min:2.8},{id:30,type:"HIIT",shortType:"HIIT",milePerMin:.125,milePer10Min:1.25,kmPerMin:.201,kmPer10Min:2.01},{id:31,type:"Hiking / orienteering",shortType:"Hiking",milePerMin:.116,milePer10Min:1.16,kmPerMin:.187,kmPer10Min:1.87},{id:32,type:"Hockey, field and ice",shortType:"Hockey",milePerMin:.12,milePer10Min:1.2,kmPerMin:.193,kmPer10Min:1.93},{id:33,type:"Horseback riding",shortType:"Horseback riding",milePerMin:.045,milePer10Min:.45,kmPerMin:.072,kmPer10Min:.72},{id:34,type:"Housework",shortType:"Housework",milePerMin:.036,milePer10Min:.36,kmPerMin:.058,kmPer10Min:.58},{id:35,type:"Ice skating",shortType:"Ice skating",milePerMin:.042,milePer10Min:.42,kmPerMin:.068,kmPer10Min:.68},{id:36,type:"In-line skating/Rollerblading",shortType:"Rollerblading",milePerMin:.095,milePer10Min:.95,kmPerMin:.153,kmPer10Min:1.53},{id:37,type:"Jumping rope (skipping), fast",shortType:"Jumping rope",milePerMin:.15,milePer10Min:1.5,kmPerMin:.241,kmPer10Min:2.41},{id:38,type:"Jumping rope (skipping), moderate",shortType:"Jumping rope",milePerMin:.125,milePer10Min:1.25,kmPerMin:.201,kmPer10Min:2.01},{id:39,type:"Kayaking",shortType:"Kayaking",milePerMin:.076,milePer10Min:.76,kmPerMin:.122,kmPer10Min:1.22},{id:40,type:"Kickboxing / MMA",shortType:"Kickboxing",milePerMin:.145,milePer10Min:1.45,kmPerMin:.233,kmPer10Min:2.33},{id:41,type:"Lacrosse",shortType:"Lacrosse",milePerMin:.121,milePer10Min:1.21,kmPerMin:.195,kmPer10Min:1.95},{id:42,type:"Martial Arts",shortType:"Martial Arts",milePerMin:.118,milePer10Min:1.18,kmPerMin:.19,kmPer10Min:1.9},{id:43,type:"Mowing lawn",shortType:"Mowing lawn",milePerMin:.06,milePer10Min:.6,kmPerMin:.097,kmPer10Min:.97},{id:44,type:"Pilates",shortType:"Pilates",milePerMin:.046,milePer10Min:.46,kmPerMin:.073,kmPer10Min:.73},{id:45,type:"Punching bag",shortType:"Punching bag",milePerMin:.09,milePer10Min:.9,kmPerMin:.145,kmPer10Min:1.45},{id:46,type:"Raking lawn/leaves",shortType:"Raking lawn",milePerMin:.061,milePer10Min:.61,kmPerMin:.097,kmPer10Min:.97},{id:47,type:"Racquetball",shortType:"Racquetball",milePerMin:.091,milePer10Min:.91,kmPerMin:.146,kmPer10Min:1.46},{id:48,type:"Rowing",shortType:"Rowing",milePerMin:.074,milePer10Min:.74,kmPerMin:.118,kmPer10Min:1.18},{id:49,type:"Rowing machine",shortType:"Rowing machine",milePerMin:.106,milePer10Min:1.06,kmPerMin:.171,kmPer10Min:1.71},{id:50,type:"Rugby",shortType:"Rugby",milePerMin:.152,milePer10Min:1.52,kmPerMin:.244,kmPer10Min:2.44},{id:51,type:"Running, 12min/mi = 7min/km",shortType:"Running",milePerMin:.089,milePer10Min:.89,kmPerMin:.143,kmPer10Min:1.43},{id:52,type:"Running, 10min/mi = 5.35min/km",shortType:"Running",milePerMin:.111,milePer10Min:1.11,kmPerMin:.179,kmPer10Min:1.79},{id:53,type:"Running, 8min/mi = 4.28min/km",shortType:"Running",milePerMin:.139,milePer10Min:1.39,kmPerMin:.224,kmPer10Min:2.24},{id:54,type:"Sailing, boat and board",shortType:"Sailing",milePerMin:.046,milePer10Min:.46,kmPerMin:.073,kmPer10Min:.73},{id:55,type:"Shoveling snow",shortType:"Shoveling snow",milePerMin:.073,milePer10Min:.73,kmPerMin:.117,kmPer10Min:1.17},{id:56,type:"Skateboarding",shortType:"Skateboarding",milePerMin:.051,milePer10Min:.51,kmPerMin:.082,kmPer10Min:.82},{id:57,type:"Skiing, light/moderate",shortType:"Skiing",milePerMin:.055,milePer10Min:.55,kmPerMin:.088,kmPer10Min:.88},{id:58,type:"Skiing, cross-country",shortType:"Skiing",milePerMin:.057,milePer10Min:.57,kmPerMin:.092,kmPer10Min:.92},{id:59,type:"Sledding",shortType:"Sledding",milePerMin:.079,milePer10Min:.79,kmPerMin:.127,kmPer10Min:1.27},{id:60,type:"Snowboarding/snowshoeing",shortType:"Snowboarding",milePerMin:.091,milePer10Min:.91,kmPerMin:.146,kmPer10Min:1.46},{id:61,type:"Snowmobiling",shortType:"Snowmobiling",milePerMin:.053,milePer10Min:.53,kmPerMin:.085,kmPer10Min:.85},{id:62,type:"Softball",shortType:"Softball",milePerMin:.076,milePer10Min:.76,kmPerMin:.122,kmPer10Min:1.22},{id:63,type:"Spinning",shortType:"Spinning",milePerMin:.1,milePer10Min:1,kmPerMin:.161,kmPer10Min:1.61},{id:64,type:"Squash",shortType:"Squash",milePerMin:.174,milePer10Min:1.74,kmPerMin:.28,kmPer10Min:2.8},{id:65,type:"Stair climbing, machine",shortType:"Stair climbing",milePerMin:.1,milePer10Min:1,kmPerMin:.161,kmPer10Min:1.61},{id:66,type:"Stair climbing, down stairs",shortType:"Stair climbing",milePerMin:.036,milePer10Min:.36,kmPerMin:.057,kmPer10Min:.57},{id:67,type:"Stair climbing, up stairs",shortType:"Stair climbing",milePerMin:.091,milePer10Min:.91,kmPerMin:.146,kmPer10Min:1.46},{id:68,type:"Surfing",shortType:"Surfing",milePerMin:.046,milePer10Min:.46,kmPerMin:.073,kmPer10Min:.73},{id:69,type:"Swimming, butterfly",shortType:"Swimming",milePerMin:.136,milePer10Min:1.36,kmPerMin:.219,kmPer10Min:2.19},{id:70,type:"Swimming, freestyle/breaststroke",shortType:"Swimming",milePerMin:.091,milePer10Min:.91,kmPerMin:.146,kmPer10Min:1.46},{id:71,type:"Swimming, treading/leisure",shortType:"Swimming",milePerMin:.058,milePer10Min:.58,kmPerMin:.093,kmPer10Min:.93},{id:72,type:"Table tennis",shortType:"Table tennis",milePerMin:.06,milePer10Min:.6,kmPerMin:.097,kmPer10Min:.97},{id:73,type:"Tae Bo",shortType:"Tae Bo",milePerMin:.125,milePer10Min:1.25,kmPerMin:.201,kmPer10Min:2.01},{id:74,type:"Tai Chi",shortType:"Tai Chi",milePerMin:.02,milePer10Min:.2,kmPerMin:.032,kmPer10Min:.32},{id:75,type:"Tennis",shortType:"Tennis",milePerMin:.1,milePer10Min:1,kmPerMin:.161,kmPer10Min:1.61},{id:76,type:"Trampoline",shortType:"Trampoline",milePerMin:.045,milePer10Min:.45,kmPerMin:.072,kmPer10Min:.72},{id:77,type:"Volleyball",shortType:"Volleyball",milePerMin:.046,milePer10Min:.46,kmPerMin:.073,kmPer10Min:.73},{id:78,type:"Walking, stroll",shortType:"Walking",milePerMin:.031,milePer10Min:.31,kmPerMin:.049,kmPer10Min:.49},{id:79,type:"Walking, average",shortType:"Walking",milePerMin:.042,milePer10Min:.42,kmPerMin:.068,kmPer10Min:.68},{id:80,type:"Walking, power",shortType:"Walking",milePerMin:.078,milePer10Min:.78,kmPerMin:.126,kmPer10Min:1.26},{id:81,type:"Washing a car",shortType:"Washing a car",milePerMin:.036,milePer10Min:.36,kmPerMin:.057,kmPer10Min:.57},{id:82,type:"Water aerobics",shortType:"Water aerobics",milePerMin:.058,milePer10Min:.58,kmPerMin:.093,kmPer10Min:.93},{id:83,type:"Water polo",shortType:"Water polo",milePerMin:.152,milePer10Min:1.52,kmPerMin:.244,kmPer10Min:2.44},{id:84,type:"Water skiing",shortType:"Water skiing",milePerMin:.073,milePer10Min:.73,kmPerMin:.117,kmPer10Min:1.17},{id:85,type:"Weight lifting, light",shortType:"Weight lifting",milePerMin:.034,milePer10Min:.34,kmPerMin:.054,kmPer10Min:.54},{id:86,type:"Weight lifting, heavy",shortType:"Weight lifting",milePerMin:.087,milePer10Min:.87,kmPerMin:.14,kmPer10Min:1.4},{id:87,type:"Wrestling",shortType:"Wrestling",milePerMin:.073,milePer10Min:.73,kmPerMin:.117,kmPer10Min:1.17},{id:88,type:"Yoga",shortType:"Yoga",milePerMin:.023,milePer10Min:.23,kmPerMin:.036,kmPer10Min:.36}]),o={name:"CalculateDistances",computed:{active:function(){return"undefined"!==typeof this.currentActivity&&0!==this.currentActivity.id&&this.duration.length>0&&!isNaN(this.duration)},currentActivity:function(){var e=this;return a.find((function(i){return i.id===e.selectedActivity}))},result:function(){var e=this.currentActivity,i=isNaN(this.duration)?"":this.duration.substr(0,4)+(1===parseInt(this.duration)?" minute":" minutes");return"undefined"!==typeof e&&e.id>0?{isGrayed:!1,miles:(e.milePerMin*this.duration).toFixed(2).substr(0,10),km:(e.kmPerMin*this.duration).toFixed(2).substr(0,10),duration:i,activity:this.currentActivity.shortType}:{isGrayed:!0,miles:"-",km:"-",duration:"-",activity:"-"}}},data:function(){return{activities:a,selectedActivity:0,duration:""}},methods:{resetForm:function(){this.duration="",this.selectedActivity=0},checkIsNumber:function(){this.duration=this.duration.replace(/\D/g,"")}}},P=o,M=(t("6e97"),t("2877")),p=Object(M["a"])(P,l,s,!1,null,"1a01ff50",null),d=p.exports,c={name:"App",components:{CalculateDistances:d}},y=c,u=Object(M["a"])(y,n,m,!1,null,null,null),k=u.exports;t("a766"),t("ba8c");r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(k)}}).$mount("#app")},"6e97":function(e,i,t){"use strict";t("1616")},a766:function(e,i,t){},ba8c:function(e,i,t){}});
//# sourceMappingURL=app.54929239.js.map