(window.webpackJsonp=window.webpackJsonp||[]).push([["kP7L"],{kP7L:function(t,e,n){"use strict";n.r(e);var l=n("t3Un");var a={filters:{statusFilter:function(t){return{"在售":"success","未售":"danger","售完":"gray"}[t]||"gray"}},data:function(){return{list:null,listLoading:!0}},created:function(){this.fetchData()},methods:{fetchData:function(){var t=this;this.listLoading=!0,function(t){return Object(l.a)({url:"/table/list",method:"get",params:t})}(this.listQuery).then(function(e){var n=e.data;(n=n.filter(function(t){return"售完"!=t.detail.saleStatus})).sort(function(t,e){return e.price.localeCompare(t.price)}),t.list=n,t.listLoading=!1})},open:function(t){t&&window.open(t)}}},i=n("ZrdR"),r=Object(i.a)(a,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],attrs:{data:t.list,"element-loading-text":"Loading",border:"",fit:"","highlight-current-row":""}},[n("el-table-column",{attrs:{align:"center",label:"ID",width:"80"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(e.row.detail.id)+"\n      ")]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"名称",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(e.row.detail.name)+"\n      ")]}}])}),t._v(" "),n("el-table-column",{attrs:{"class-name":"status-col",label:"状态",width:"80",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-tag",{attrs:{type:t._f("statusFilter")(e.row.detail.saleStatus)}},[t._v(t._s(e.row.detail.saleStatus))])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"价格",width:"110",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(e.row.detail.price)+"\n      ")]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"建筑类型",width:"110",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(e.row.detail.buildingType)+"\n      ")]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"装修状况",width:"90",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(e.row.detail.decorationStatus)+"\n      ")]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"容积率",width:"90",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(e.row.detail.volumeRate)+"\n      ")]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"绿化率",width:"90",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(e.row.detail.greeningRate)+"\n      ")]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"占地面积",width:"120",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(e.row.detail.floorArea)+"\n      ")]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"建筑面积",width:"120",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(e.row.detail.buildingArea)+"\n      ")]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"总户数",width:"80",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(e.row.detail.totalHouses)+"\n      ")]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"车位数",width:"80",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(e.row.detail.carsNumber)+"\n      ")]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"开盘时间",width:"150",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("i",{staticClass:"el-icon-time"}),t._v("\n        "+t._s(e.row.detail.openingTime)+"\n      ")]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"区域",width:"100",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(e.row.detail.region)+"\n      ")]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"地址",width:"130",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(e.row.detail.address)+"\n      ")]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"详情",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{type:"text",size:"medium"},on:{click:function(n){t.open(e.row.detailUrl)}}},[t._v("楼盘详情")]),t._v(" "),n("br"),t._v(" "),n("el-button",{attrs:{type:"text",size:"medium"},on:{click:function(n){t.open(e.row.photolistUrl)}}},[t._v("楼盘相册")]),t._v(" "),n("br"),t._v(" "),n("el-button",{attrs:{type:"text",size:"medium"},on:{click:function(n){t.open(e.row.detailUrl)}}},[t._v("楼盘新闻")])]}}])})],1)],1)},[],!1,null,null,null);r.options.__file="index.vue";e.default=r.exports}}]);