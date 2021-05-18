(this["webpackJsonpcombinar-pdf-react-app"]=this["webpackJsonpcombinar-pdf-react-app"]||[]).push([[0],{300:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n.n(i),s=n(15),o=n.n(s),l=n(331),r=n(332),c=n(156),d=Object(c.a)({palette:{primary:{light:"#39796b",main:"#004d40",dark:"#00251a",contrastText:"#fff"},secondary:{light:"#484848",main:"#212121",dark:"#000000",contrastText:"#fff"}},typography:{useNextVariants:!0}}),h=n(128),p=n(336),g=n(330),u=n(328),m=n(11),f=n(64),j=n(65),b=n(77),O=n(75),x=n(327),v=n(334),y=n(129),F=n.n(y),L=n(333),w=n(329),N=n(335),M=n(2);function C(){return Math.round(20*Math.random())-10}function S(){var e=50+C(),t=50+C();return{top:"".concat(e,"%"),left:"".concat(t,"%"),transform:"translate(-".concat(e,"%, -").concat(t,"%)")}}var k=function(e){Object(b.a)(n,e);var t=Object(O.a)(n);function n(e){var i;return Object(f.a)(this,n),(i=t.call(this,e)).handleOpen=function(){i.setState({open:!0})},i.handleClose=function(){i.setState({open:!1})},i.handleCloseAfterUpload=function(){i.setState({open:!1,loading:!1,modalQuery:"idle",msg:{err:null,success:null},respMsg:null}),i.filesClearAndRemoveAll()},i.handleLoadingProgress=function(){i.setState({loading:!0,modalQuery:"progress"})},i.handleResponseProgress=function(e,t){i.setState({loading:!1,modalQuery:e,respMsg:t})},i.handleIdleProgress=function(){i.setState({loading:!1,modalQuery:"idle"})},i.state={open:!!e.isOpen&&e.isOpen,loading:e.isLoading,modalQuery:"idle",msg:e.msg,respMsg:null},i.filesClearAndRemoveAll=e.clearModalStatus,i}return Object(j.a)(n,[{key:"componentWillReceiveProps",value:function(e){e.hasOwnProperty("isOpen")&&e.hasOwnProperty("isLoading")&&e.hasOwnProperty("msg")&&(e.isOpen&&this.handleOpen(),e.isLoading?this.handleLoadingProgress():null!=e.msg.err?this.handleResponseProgress("error",e.msg.err):null!=e.msg.success&&this.handleResponseProgress("success",e.msg.success))}},{key:"render",value:function(){var e=this.props.classes;return Object(M.jsx)("div",{children:Object(M.jsx)(L.a,{disableBackdropClick:!0,disableEscapeKeyDown:!0,"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description",open:this.state.open,onClose:this.handleClose,children:Object(M.jsxs)("div",{style:S(),className:e.paper,children:["progress"!==this.state.modalQuery?Object(M.jsxs)(x.a,{container:!0,spacing:32,justify:"center",children:[Object(M.jsx)(x.a,{item:!0,children:Object(M.jsx)(u.a,{children:this.state.respMsg})}),Object(M.jsx)(x.a,{item:!0,children:Object(M.jsx)(v.a,{variant:"contained",color:"primary",onClick:this.handleCloseAfterUpload,children:"New merge"})})]}):Object(M.jsxs)("div",{children:[Object(M.jsx)(N.a,{in:"progress"===this.state.modalQuery,style:{transitionDelay:"progress"===this.state.modalQuery?"800ms":"0ms"},unmountOnExit:!0,children:Object(M.jsx)(w.a,{})}),Object(M.jsx)(u.a,{children:"Merging..."})]}),Object(M.jsx)(A,{})]})})})}}]),n}(a.a.Component),A=Object(m.a)((function(e){return{paper:{position:"absolute",width:50*e.spacing.unit,backgroundColor:e.palette.background.paper,boxShadow:e.shadows[5],padding:4*e.spacing.unit,outline:"none",textAlign:"center"}}}))(k),R=A,P=n(43);var G={mergeBetweenPDF:function(e){var t={pdfFile:null,pdfNotMergedList:[]};if(e.length>0){(new FileReader).onload=function(e){console.log(e.target.result)};var n=P.a.create(),i=P.a.create(),a=[],s=[],o=[];return e.forEach((function(e){a.push(fetch(URL.createObjectURL(e)).then((function(e){return e.arrayBuffer()})))})),Promise.all(a).then((function(a){for(var l=0;l<a.length;l++)try{i=P.a.load(new Uint8Array(a[l])),o=i.getPages(),i=P.a.create(),o.forEach((function(e){i.addPage(e)})),o.forEach((function(e){n.addPage(e)}))}catch(r){console.log(r),s.push(e[l].name)}return t.pdfFile=P.b.saveToBytes(n),t.pdfNotMergedList=s,t})).catch((function(e){return console.log(e),t.pdfFile=null,t.pdfNotMergedList=s,t}))}}},B=n(155),D=function(e){Object(b.a)(n,e);var t=Object(O.a)(n);function n(){var e;Object(f.a)(this,n);for(var i=arguments.length,a=new Array(i),s=0;s<i;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={files:[],hasFiles:!1,modalOpen:!1,modalLoading:!1,modalMsg:{err:null,success:null}},e.onFilesChange=function(t){e.setState({files:t,hasFiles:t.length>0},(function(){}))},e.onFilesError=function(e,t){console.log("[LOG] Error code "+e.code+": "+e.message)},e.filesRemoveOne=function(t){e.refs.files.removeFile(t)},e.filesClearAndRemoveAll=function(){e.setState({modalOpen:!1,modalLoading:!1,modalMsg:{err:null,success:null}},(function(){e.filesRemoveAll()}))},e.filesRemoveAll=function(){e.setState({files:[],hasFiles:!1},(function(){e.refs.files.removeFiles()}))},e.startMerge=function(){var t;e.setState({files:e.state.files,hasFiles:!1,modalOpen:!0,modalLoading:!0},(function(){console.log("[LOG] Starting merge...")})),G.mergeBetweenPDF(e.state.files).then((function(n){if(n&&n.hasOwnProperty("pdfFile")){if(n.pdfFile){if(n.pdfNotMergedList.length!==e.state.files.length){var i="output_merge_"+(new Date).toISOString().replace(":","_").replace("T","_").replace("Z","")+".pdf";Object(B.saveSync)(n.pdfFile,i)}n.pdfNotMergedList.length>0?(t=n.pdfNotMergedList.length>0&&n.pdfNotMergedList.length===e.state.files.length?"No merge PDF output could be done. Following files have problem and need to be merged manually: "+n.pdfNotMergedList.join(", "):"Following files have problem and need to be merged manually: "+n.pdfNotMergedList.join(", "),console.log("[LOG] "+t),e.setState({modalOpen:!0,modalLoading:!1,modalMsg:{err:t,success:null}},(function(){console.log("[LOG] Modal closed.")}))):(t="Merge totally successfull and downloaded!",console.log("[LOG] "+t),e.setState({modalOpen:!0,modalLoading:!1,modalMsg:{err:null,success:t}},(function(){console.log("[LOG] Closed modal")})))}}else t="Internal error at merging! Send this error to the developer in charge.",console.log(t),e.setState({modalOpen:!0,modalLoading:!1,modalMsg:{err:t,success:null}},(function(){console.log("[LOG] Closed modal")}))})).catch((function(e){console.log("[LOG] "+e)})).finally((function(){return e.filesRemoveAll()}))},e}return Object(j.a)(n,[{key:"render",value:function(){var e=this,t=this.props.classes;return Object(M.jsxs)("div",{className:"files",children:[Object(M.jsx)(x.a,{container:!0,spacing:32,justify:"center",children:Object(M.jsx)(x.a,{item:!0,className:t.dropFilesGridZone,children:Object(M.jsx)(F.a,{ref:"files",className:t.dropFilesZone,onChange:this.onFilesChange,onError:this.onFilesError,accepts:[".pdf"],multiple:!0,maxFiles:1e3,maxFileSize:1e7,minFileSize:0,clickable:!0,children:Object(M.jsx)("div",{className:t.dropFilesZoneDiv,children:"Suelta los archivos aqu\xed o haz clic para subir"})})})}),Object(M.jsx)(x.a,{container:!0,spacing:32,justify:"center",children:this.state.files.length>0?Object(M.jsx)(x.a,{item:!0,className:t.dropFilesGridZone,children:Object(M.jsx)("div",{className:"files-list",children:Object(M.jsx)("ul",{children:this.state.files.map((function(t){return Object(M.jsxs)("li",{className:"files-list-item",children:[Object(M.jsxs)("div",{className:"files-list-item-content",children:[Object(M.jsx)("div",{className:"files-list-item-content-item files-list-item-content-item-1",children:t.name}),Object(M.jsx)("div",{className:"files-list-item-content-item files-list-item-content-item-2",children:t.sizeReadable})]}),Object(M.jsx)("div",{id:t.id,className:"files-list-item-remove",onClick:e.filesRemoveOne.bind(e,t)})]},t.id)}))})})}):Object(M.jsx)(x.a,{item:!0,className:t.dropFilesWarningGridZone,children:Object(M.jsx)("div",{className:"files-list",children:"No hay archivos seleccionados!"})})}),Object(M.jsxs)(x.a,{container:!0,spacing:16,justify:"center",children:[Object(M.jsx)(x.a,{item:!0,children:Object(M.jsx)(v.a,{variant:"contained",color:"primary",disabled:!this.state.hasFiles,onClick:this.startMerge,children:"Iniciar combinaci\xf3n"})}),Object(M.jsx)(x.a,{item:!0,children:Object(M.jsx)(v.a,{variant:"outlined",color:"secondary",onClick:this.filesClearAndRemoveAll,children:"Limpiar selecci\xf3n"})})]}),Object(M.jsx)(R,{isOpen:this.state.modalOpen,isLoading:this.state.modalLoading,msg:this.state.modalMsg,clearModalStatus:this.filesClearAndRemoveAll})]})}}]),n}(i.Component),E=Object(m.a)((function(e){return{dropFilesGridZone:{width:"70%"},dropFilesZone:{padding:"2em",border:"2px dashed rgba(0, 0, 0, .1)",color:"rgba(0, 0, 0, .4)",width:"100%",display:"flex",flexWrap:"wrap",boxSizing:"border-box",textAlign:"center"},dropFilesZoneDiv:{width:"100%"},dropFilesWarningGridZone:{width:"70%",textAlign:"center",color:"red",fontWeight:"bold"}}}),{name:"MuiFilesDragDrop"})(D),Z=Object(m.a)((function(e){return{appBar:{position:"relative"},icon:{marginRight:2*e.spacing.unit},heroUnit:{backgroundColor:e.palette.background.paper},heroContent:{maxWidth:600,margin:"0 auto",padding:"".concat(8*e.spacing.unit,"px 0 ").concat(6*e.spacing.unit,"px")},heroButtons:{marginTop:4*e.spacing.unit},layout:Object(h.a)({width:"auto",marginLeft:3*e.spacing.unit,marginRight:3*e.spacing.unit},e.breakpoints.up(1100+3*e.spacing.unit*2),{width:1100,marginLeft:"auto",marginRight:"auto"}),cardGrid:{padding:"".concat(8*e.spacing.unit,"px 0")},card:{height:"100%",display:"flex",flexDirection:"column"},cardMedia:{paddingTop:"56.25%"},cardContent:{flexGrow:1},footer:{backgroundColor:e.palette.background.paper,padding:6*e.spacing.unit}}}))((function(e){var t=e.classes;return Object(M.jsxs)(M.Fragment,{children:[Object(M.jsx)(p.a,{position:"static",className:t.appBar,children:Object(M.jsx)(g.a,{children:Object(M.jsx)(u.a,{variant:"h6",color:"inherit",noWrap:!0,children:"COMBINAR PDFs"})})}),Object(M.jsx)("main",{children:Object(M.jsx)("div",{className:t.heroUnit,children:Object(M.jsxs)("div",{className:t.heroContent,children:[Object(M.jsx)(u.a,{component:"h1",variant:"h2",align:"center",color:"textPrimary",gutterBottom:!0,children:"COMBINA TUS PDFs"}),Object(M.jsx)("div",{className:t.heroButtons,children:Object(M.jsx)(E,{})})]})})})]})})),W=function(){return Object(M.jsxs)(l.a,{theme:d,children:[Object(M.jsx)(r.a,{}),Object(M.jsx)(Z,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(Object(M.jsx)(W,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[300,1,2]]]);
//# sourceMappingURL=main.6a3c21a2.chunk.js.map