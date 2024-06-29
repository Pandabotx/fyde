"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2160],{29086:function(e,t,a){var n=a(85893);t.Z=e=>{let{condition:t,wrapper:a,children:i}=e;return t?a(i):(0,n.jsx)(n.Fragment,{children:i})}},93474:function(e,t,a){a.d(t,{Z:function(){return common_Hero}});var n=a(85893),i=a(25675),r=a.n(i),s=a(15861),o=a(83321),l=a(73986);let d=(0,l.Z)()(e=>({heroContainer:{width:"100%",position:"relative"},heroHeading:{width:"100%",maxWidth:"800px",display:"flex",flexDirection:"column",alignItems:"flex-start",justifyContent:"center",minHeight:"30vh",paddingTop:"3rem",lineHeight:"1.2",paddingBottom:"1rem"},heading:{fontSize:"65px",fontWeight:500,justifyContent:"left",position:"relative",margin:"0 5px 0 0",color:e.palette.text.primary,[e.breakpoints.down("md")]:{fontSize:"45px"}},subheading:{width:"100%",[e.breakpoints.down("md")]:{fontSize:"15px"}},buttonSpacing:{width:"100%",maxWidth:"530px",display:"flex",marginTop:"2rem",gap:"50px",[e.breakpoints.down("md")]:{gap:"20px"}},heroButton:{width:"33%",minWidth:"140px",color:"light"===e.palette.mode?"000000":"#FFFFFF",padding:"6px",borderRadius:"8px",fontFamily:"DM Sans",fontSize:"18px",border:"1px solid #E6E6E6","&:hover":{cursor:"pointer"}}}));var c=a(11163),p=a(41248),x=a(94101),h=a(77527),common_Hero=e=>{let{classes:t}=d(),a=(0,c.useRouter)(),i=(0,p.v9)(e=>e.app.darkTheme);return(0,n.jsx)(h.Z,{children:(0,n.jsx)("section",{className:t.heroContainer,children:e.authenticated?null:(0,n.jsx)("div",{children:(0,n.jsxs)("div",{className:t.heroHeading,children:[(0,n.jsx)("p",{className:t.heading,children:"Welcome to Fyde"}),(0,n.jsx)(s.Z,{className:t.subheading,variant:"h6",fontWeight:"300",sx:{mt:3,opacity:.8},color:"text.primary",children:"Deposit eligible tokens to access the Liquid Vault. Beat the market. Skip the stress. Harness AI. Start earning Fyde points today."}),(0,n.jsxs)("div",{className:t.buttonSpacing,children:[(0,n.jsx)(o.Z,{variant:"claim",className:t.heroButton,startIcon:(0,n.jsx)(r(),{src:(0,x.$Z)(i?x.n3.Actions.DepositWhite:x.n3.Actions.DepositBlack),width:20,height:20,alt:"depositButtonIcon"}),sx:{textTransform:"capitalize",width:"130px"},onClick:()=>a.push({pathname:"/invest",query:a.query}),children:"Deposit"}),(0,n.jsx)(o.Z,{variant:"claim",className:t.heroButton,sx:{textTransform:"capitalize",width:"130px"},onClick:()=>window.open("https://fyde.gitbook.io/product-docs/getting-started/fyde-points","_blank"),children:"Fyde Points"})]})]})})})})}},62160:function(e,t,a){a.r(t),a.d(t,{default:function(){return portfolio}});var n=a(85893),i=a(67294),r=a(93474),s=a(44228),o=a(14792),l=a(2734),d=a(98396),c=a(72826),p=a(23324),x=a(71661),h=a(26915),u=a(73986);let m=(0,u.Z)()(e=>({root:{margin:"4rem 0",minHeight:"500px"},table:{borderCollapse:"separate",borderSpacing:"0px 15px",paddingLeft:"10px",paddingRight:"10px",[e.breakpoints.down("sm")]:{paddingLeft:"10px",paddingRight:"10px"}},row:{backgroundColor:"light"===e.palette.mode?"#FCFCFC":"#25252B",outline:"1px solid ".concat("light"===e.palette.mode?"#EFEFF0":"#3F3F3F"),borderRadius:"8px",WebkitBorderRadius:"8px"},subRow:{display:"flex",gap:e.spacing(1)},shadowCell:{width:"0px",paddingInline:"0px"},cell:{minWidth:"140px",[e.breakpoints.down("sm")]:{textAlign:"left"}},subCell:{padding:0,paddingBlock:6,minWidth:"50%",textAlign:"center",[e.breakpoints.down("sm")]:{textAlign:"left"}},iconCell:{paddingLeft:"15px",paddingRight:"0px"},curveLine:{color:"light"===e.palette.mode?"black":"rgba(255, 255, 255, 0.20)"}}));var g=a(15861),f=a(51233),v=a(99226),y=a(85773),b=a(72882),j=a(7906),Z=a(25877),w=a(53816),C=a(53252),T=a(26280),k=a(66799),F=a(13113),A=a(68167),P=a(29086),S=(0,i.memo)(e=>{let{headers:t,orderBy:a,order:i,onRequestSort:r}=e,{classes:s}=m(),o=t&&t.length>0,l=(0,k.C)(),createSortHandler=e=>t=>{r(t,e)};return(0,n.jsx)(Z.s,{children:(0,n.jsx)(w.Z,{children:o&&t.map((e,t)=>(0,n.jsx)(C.Z,{className:0===t?s.shadowCell:"",sx:{width:l?"60%":"150px",textAlign:"left"},children:(0,n.jsx)(P.Z,{condition:void 0!==e.tooltip,wrapper:t=>(0,n.jsx)(A.Z,{title:e.tooltip,children:t}),children:e.sortable?(0,n.jsxs)(T.Z,{active:a===e.id,direction:a===e.id?i:"asc",onClick:createSortHandler(e.id),disabled:!e.sortable,hideSortIcon:!0,children:[e.label,a===e.id?(0,n.jsx)(v.Z,{component:"span",sx:{...F.Z,marginLeft:"8px"},children:"desc"===i?"sorted descending":"sorted ascending"}):null]}):e.label})},t))})})}),D=a(18979),N=a(295),R=a(64290),B=a(83321),W=a(57922),V=a(49990),_=a(75503),L=a(90813),I=a(38844),M=a(90948);let q=(0,u.Z)()(e=>({concentrationContainer:{display:"flex",alignItems:"center",justifyContent:"space-between",width:"90px",borderRadius:"20px",position:"relative",background:"dark"===e.palette.mode?"#4D4B53":e.palette.grey[200],height:"12px"},targetBar:{content:'""',width:"1px",height:"calc(100% - 5px)",background:"dark"===e.palette.mode?"#ffffff3f":"#0000001f",position:"absolute",left:"50%",transform:"translateX(-50%)"},bandWrapper:{position:"relative",display:"flex",width:"90px",height:"100%",overflow:"hidden",borderRadius:"20px"},depositBand:{height:"calc(100%)",position:"absolute",border:"1px solid",borderColor:e.palette.success.main,bottom:"0",borderRadius:"0.3rem",opacity:.7}})),E=(0,M.ZP)(e=>(0,n.jsx)(v.Z,{...e}))(e=>{let{theme:t}=e;return{background:"#ffffff",boxShadow:"0px 4px 8px 0px #00000040",height:"12px",width:"12px",borderRadius:"50%",position:"absolute","&:hover":{cursor:"pointer"}}});var z=a(27036),common_AssetConcentrationBar_AssetConcentrationBar=e=>{let{isOverWeight:t,asset:a,displayTargetBar:i=!0,displayNumericValue:r=!0,type:s,withText:o=!1,sx:l}=e,{classes:d}=q(),c="deposit"===s&&a.bandData.isDepositTaxFreeZone,p="withdraw"===s&&a.bandData.isWithdrawTaxFreeZone,x=c||p;return(0,n.jsxs)(f.Z,{direction:"column",spacing:1,width:"100%",justifyContent:"center",alignItems:"center",sx:l,children:[r&&(0,n.jsxs)(g.Z,{variant:"body2",color:"text.primary",children:[a.currentConc,"%"," ",(0,n.jsx)(v.Z,{component:"span",color:"text.disabled",children:"/"})," ",(0,n.jsxs)(v.Z,{component:"span",children:[a.targetConcentrationFyde,"%"]})]}),(0,n.jsx)(A.Z,{title:"".concat(t?"Overweight":"Underweight"," by ").concat(a.bandData.divergence.toFixed(2),"%"),children:(0,n.jsxs)(v.Z,{component:"div",className:"".concat(d.concentrationContainer),children:[i&&(0,n.jsx)(v.Z,{className:d.targetBar}),s&&(0,n.jsx)(v.Z,{className:d.bandWrapper,children:(0,n.jsx)(v.Z,{className:d.depositBand,width:"deposit"===s?a.bandData.isDepositTaxFreeZone?"".concat(a.bandData.depositBandWith,"%"):"1px":a.bandData.isWithdrawTaxFreeZone?"".concat(a.bandData.withdrawBandWidth,"%"):"1px",left:"deposit"===s?"".concat(a.bandData.isDepositTaxFreeZone?a.bandData.bubblePosition:a.bandData.depositBand,"%"):""})}),(0,n.jsx)(E,{left:"".concat(a.bandData.bubblePosition,"%")})]})}),o&&(0,n.jsxs)(f.Z,{direction:"row",gap:1,justifyContent:"flex-start",alignItems:"center",children:[x&&(0,n.jsx)(z.Z,{color:"success",sx:{width:"15px",height:"15px"}}),(0,n.jsx)(g.Z,{variant:"caption",color:"text.primary",children:x?"Slippage Free ".concat("deposit"===s?"Deposit":"Withdraw"):(0,n.jsx)(n.Fragment,{})})]})]})},H=a(11163),Y=a(65634),G=a(24239),U=a(81519),O=a(94101),$=a(25675),Q=a.n($);let AssetCell=e=>{var t;let{asset:a}=e,{classes:i}=m();return(0,n.jsx)(C.Z,{className:i.cell,children:(0,n.jsx)(f.Z,{direction:"row",spacing:1,alignItems:"center",display:"flex",width:"100%",children:(0,n.jsx)(R.Z,{iconSrc:null===(t=a.image)||void 0===t?void 0:t.src,iconSize:"sm",avatarProps:{variant:"rounded",sx:{overflow:"auto"}},primary:a.name,primaryProps:{variant:"body2"},sx:{gap:1}})})})},WalletBalanceCell=e=>{var t,a;let{asset:i}=e,{address:r}=(0,s.Z)(),{classes:o}=m();return(0,n.jsx)(C.Z,{className:o.cell,sx:{},children:(0,n.jsx)(R.Z,{primary:r?i.price?(0,Y.M)(Number(null===(t=i.balanceFormatted)||void 0===t?void 0:t.replaceAll(",",""))*i.price):NaN:"-",secondary:r?(0,I.rv)(Number(null===(a=i.balanceFormatted)||void 0===a?void 0:a.replaceAll(",",""))).toLocaleString("en-US"):"-",primaryProps:{variant:"body2"},secondaryProps:{variant:"body2",fontWeight:"normal"},sx:{gap:1}})})},TvlTotalCell=e=>{let{asset:t}=e,{classes:a}=m();return(0,n.jsx)(C.Z,{className:a.cell,sx:{textAlign:"start"},children:(0,n.jsx)(R.Z,{primary:t.price>0?(0,Y.M)(t.tvl.total*t.price):NaN,secondary:t.tvl.total.toLocaleString("en-US"),primaryProps:{variant:"body2"},sx:{gap:1},secondaryProps:{variant:"body2",fontWeight:"normal"}})})},ActionCell=e=>{let{asset:t,onClickAction:a,subCell:i=!1}=e,{classes:r}=m(),s=(0,l.Z)();return(0,n.jsx)(C.Z,{className:i?r.subCell:r.cell,sx:{width:"100%",display:"flex",justifyContent:"center",alignItems:"center"},children:(0,n.jsx)(f.Z,{direction:"row",width:"100%",justifyContent:{xs:"center",sm:"center",md:"flex-end"},display:"flex",children:(0,n.jsx)(A.Z,{title:"This asset has been quarantined from further interactions",disabled:!t.isQuarantined,children:(0,n.jsx)(B.Z,{startIcon:(0,n.jsx)(Q(),{src:"dark"===s.palette.mode?(0,O.$Z)(O.n3.Actions.DepositPurple):(0,O.$Z)(O.n3.Actions.DepositBlack),style:{filter:t.isQuarantined?"grayscale(100%)":"none"},height:12,width:12,alt:""}),disabled:t.isQuarantined,variant:"secondary",sx:{padding:"12px",paddingRight:"28px",paddingLeft:"28px",borderRadius:"6px"},onClick:()=>a(t.address,"deposit"),children:"Deposit"})})})})},LiquidGovRatioCell=e=>{let{asset:t}=e,{classes:a}=m(),i=100*t.tvl.standard/t.tvl.total||0,r=100*t.tvl.gov/t.tvl.total||0;return(0,n.jsx)(C.Z,{className:a.cell,children:(0,n.jsx)(f.Z,{direction:"column",spacing:1,sx:{width:"100%"},children:(0,n.jsxs)(g.Z,{variant:"body2",color:"text.primary",children:[i.toLocaleString("en-US",{maximumFractionDigits:0,minimumFractionDigits:0}),"% ",(0,n.jsx)("span",{className:a.curveLine,children:"/"})," ",(0,n.jsxs)("span",{children:[r.toLocaleString("en-US",{maximumFractionDigits:0,minimumFractionDigits:0}),"%"]})]})})})},SlippageFreeCell=e=>{let{asset:t}=e,{classes:a}=m();return(0,n.jsx)(C.Z,{className:a.cell,children:(0,n.jsx)(f.Z,{direction:"row",alignItems:"center",display:"flex",spacing:1,sx:{display:"flex"},children:(0,n.jsx)(g.Z,{variant:"body2",color:"success.main",textAlign:"start",children:t.bandData.isDepositTaxFreeZone&&(0,n.jsx)(z.Z,{})})})})},PerformanceCell=e=>{let{asset:t,subcell:a}=e,{classes:i}=m();return(0,n.jsx)(C.Z,{className:a?i.subCell:i.cell,children:(0,n.jsx)(v.Z,{display:"flex",children:-100===t.percentageChange.weekly?(0,n.jsxs)(g.Z,{variant:"body2",color:"text.secondary",sx:{display:"flex",alignItems:"center"},children:[(0,n.jsx)(G.Z,{fontSize:"small"})," Loading..."]}):(0,n.jsx)(U.Z,{change:t.percentageChange.weekly})})})},CollapsedCell=e=>{let{asset:t,isOpen:a,onClickAction:i}=e,{classes:r}=m();return(0,n.jsx)(C.Z,{sx:{py:0},colSpan:3,children:(0,n.jsx)(W.Z,{in:a,timeout:"auto",unmountOnExit:!0,children:(0,n.jsx)(j.Z,{children:(0,n.jsx)(N.Z,{children:(0,n.jsxs)(w.Z,{className:r.subRow,children:[(0,n.jsx)(C.Z,{className:r.subCell,children:(0,n.jsx)(common_AssetConcentrationBar_AssetConcentrationBar,{type:"deposit",withText:!0,displayTargetBar:!1,isOverWeight:"Overweight"===t.weight,asset:t})}),(0,n.jsx)(ActionCell,{asset:t,onClickAction:i,subCell:!0})]})})})})})};var VaultAssets_VaultAssetTableRow=e=>{let{asset:t,isConnected:a}=e,{classes:r}=m(),s=(0,k.C)(),o=(0,H.useRouter)(),[l,d]=(0,i.useState)(!1),onClickAction=(e,t)=>{o.push({pathname:"invest",query:{...o.query,assetAddress:e,panel:t}})};return s?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(V.Z,{component:w.Z,className:r.row,sx:{display:"table-row"},onClick:()=>d(!l),children:[(0,n.jsx)(C.Z,{className:r.iconCell,children:l?(0,n.jsx)(L.Z,{}):(0,n.jsx)(_.Z,{})}),(0,n.jsx)(AssetCell,{asset:t}),(0,n.jsx)(TvlTotalCell,{asset:t})]}),(0,n.jsx)(CollapsedCell,{asset:t,isOpen:l,onClickAction:onClickAction})]}):(0,n.jsxs)(w.Z,{className:r.row,children:[(0,n.jsx)(C.Z,{className:r.shadowCell}),(0,n.jsx)(AssetCell,{asset:t}),a&&(0,n.jsx)(WalletBalanceCell,{asset:t}),(0,n.jsx)(TvlTotalCell,{asset:t}),(0,n.jsx)(PerformanceCell,{asset:t}),a&&(0,n.jsx)(LiquidGovRatioCell,{asset:t}),(0,n.jsx)(SlippageFreeCell,{asset:t}),(0,n.jsx)(ActionCell,{asset:t,onClickAction:onClickAction})]})};let LoadingRows=()=>(0,n.jsx)(n.Fragment,{children:[void 0,void 0,void 0,void 0,void 0].map((e,t)=>(0,n.jsx)(w.Z,{children:(0,n.jsx)(C.Z,{colSpan:100,children:(0,n.jsx)(D.Z,{variant:"rectangular",height:60})})},t))});var VaultAssets_VaultAssetTableBody=e=>{let{loading:t,assets:a,rows:r,isConnected:s}=e,o=(0,i.useMemo)(()=>a.reduce((e,t)=>(e[t.name]=t,e),{}),[a]);return(0,n.jsxs)(N.Z,{children:[t&&(0,n.jsx)(LoadingRows,{}),null==r?void 0:r.map((e,t)=>(0,n.jsx)(VaultAssets_VaultAssetTableRow,{asset:o[e.name],isConnected:s},e.name))]})},J=a(87149),K=a(42761),X=a(55705);let ee=[{id:"id",label:"",numeric:!1,sortable:!1},{id:"name",label:"Asset",numeric:!1,sortable:!0},{id:"walletBalance",label:"Wallet Balance",numeric:!0,sortable:!0,tooltip:"The number of tokens in your wallet along with the USD value"},{id:"tvlTotal",label:"TVL Total",numeric:!0,sortable:!0,tooltip:"The sum of liquid and governance tokens deposited in the vault"},{id:"weeklyChange",label:"7D Change",numeric:!0,sortable:!0,tooltip:"The percentage change in the asset value over the last 7 days"},{id:"liquidGov",label:"Liquid / Gov",numeric:!0,sortable:!0,tooltip:"The ratio of liquid tokens to tokens deposited with governance rights in the vault"},{id:"slippageFree",label:"Slippage Free?",numeric:!1,sortable:!0,tooltip:"Ability for users to deposit slippage free"},{id:"actions",label:"",numeric:!1,sortable:!1}],et=[ee[0],ee[1],ee[3],ee[4],ee[6],ee[7]],ea=[{id:"id",label:"",numeric:!1,sortable:!1},{id:"name",label:"Asset",numeric:!1,sortable:!0},{id:"tvlTotal",label:"TVL Total",numeric:!0,sortable:!0,tooltip:"The sum of liquid and governance tokens deposited in the vault."}];function descendingComparator(e,t,a){return t[a]<e[a]?-1:t[a]>e[a]?1:0}var VaultAssets_VaultAssetTable=e=>{let{assets:t,loading:a}=e,{isConnected:r}=(0,s.Z)(),o=(0,k.C)(),{classes:l}=m(),[d,c]=i.useState("desc"),[p,x]=i.useState("tvlTotal"),[h,u]=i.useState(0),[g,Z]=i.useState(""),[w,C]=i.useState("overweight"),T=(0,i.useMemo)(()=>o?ea:r?ee:et,[o,r]),handleChangePage=(e,t)=>{u(t)},F=(0,i.useMemo)(()=>t.map((e,t)=>(function(e){let{id:t,name:a,walletBalance:n,tvlTotal:i,liquidGov:r,allocation:s,concentrations:o,actions:l,weeklyChange:d,slippageFree:c}=e;return{id:t,name:a,walletBalance:n,allocation:s,tvlTotal:i,liquidGov:r,concentrations:o,actions:l,weeklyChange:d,slippageFree:c}})({id:t,name:e.name,walletBalance:Number(e.balanceFormatted)*e.price,tvlTotal:Number(e.tvl.total)*e.price,liquidGov:Number(e.tvl.standard)/Number(e.tvl.total),concentrations:Number(e.currentConc)/Number(e.targetConcentrationFyde),actions:"actions",allocation:Number(e.currentConc),weeklyChange:e.percentageChange.weekly,slippageFree:String(e.bandData.isDepositTaxFreeZone)})).filter(e=>{var t;return null==e?void 0:null===(t=e.name)||void 0===t?void 0:t.toLowerCase().includes(g.toLowerCase())}),[t,g]),A=(0,i.useMemo)(()=>(function(e,t){let a=e.map((e,t)=>[e,t]);return a.sort((e,a)=>{let n=t(e[0],a[0]);return 0!==n?n:e[1]-a[1]}),a.map(e=>e[0])})(F,"desc"===d?(e,t)=>descendingComparator(e,t,p):(e,t)=>-descendingComparator(e,t,p)).slice(8*h,8*h+8),[d,p,h,F]);return(0,i.useEffect)(()=>{u(0)},[g,w]),(0,n.jsxs)(J.Z,{sx:{cardContent:{p:0}},children:[(0,n.jsxs)(f.Z,{direction:o?"column":"row",alignItems:"center",spacing:2,px:2,display:"flex",justifyContent:o?"center":"space-between",children:[(0,n.jsx)(v.Z,{minWidth:o?"100%":"50%"}),(0,n.jsx)(y.Z,{label:"Search Asset",variant:"standard",size:"small",color:"secondary",placeholder:"e.g. ETH",fullWidth:o,value:g,onChange:e=>Z(e.target.value),InputProps:{endAdornment:(0,n.jsx)(K.Z,{fontSize:"small"})}})]}),(0,n.jsx)(b.Z,{sx:{minHeight:"560px"},children:(0,n.jsxs)(j.Z,{"aria-label":"Treasury Vault Assets",className:l.table,children:[(0,n.jsx)(S,{headers:T,order:d,orderBy:p,onRequestSort:(e,t)=>{let a=p===t&&"asc"===d;c(a?"desc":"asc"),x(t),u(0)}}),(0,n.jsx)(VaultAssets_VaultAssetTableBody,{loading:a,assets:t,rows:A,isConnected:r})]})}),(0,n.jsx)(X.Z,{totalItems:F.length||1,itemsPerPage:8,page:h+1,onPageChange:e=>handleChangePage({},e-1),count:F.length,disabled:a})]})},VaultAssets_VaultAssets=e=>{let{underWeight:t,overWeight:a,loadingManagePool:i}=e,{classes:r}=m();return(0,n.jsxs)("div",{className:r.root,children:[(0,n.jsx)(g.Z,{variant:"h4",textAlign:"center",sx:{mb:3},color:"text.primary",children:"Assets in the Vault"}),(0,n.jsx)(VaultAssets_VaultAssetTable,{assets:[...a,...t],loading:i})]})},en=a(67720),ei=a(66242),er=a(78445),es=a(44267),eo=a(86886),el={src:"/_next/static/media/fyde_logo_chart.a9a5f24d.png"},ed={src:"/_next/static/media/fydeChartDark.4a957942.png"};let ec=(0,u.Z)()(e=>({root:{margin:"1rem 0"},card:{border:"1px solid ".concat(e.customColors.borderColor),height:"100%",background:e.palette.background.paper},cardcontent:{padding:e.spacing(2),"&:last-child":{paddingBottom:e.spacing(2)}},alertInfo:{display:"flex",justifyContent:"flex-end",marginBottom:"-1rem"},percentage:{display:"flex",gap:"0.5rem","& .volume":{color:"#55E586"},"& .tvl":{color:"#FF614C"}},categories:{paddingTop:"0.5rem",display:"flex",justifyContent:"space-between",cursor:"pointer"},viewAll:{display:"flex",alignItems:"center",gap:"0.5rem"},categoriesImage:{justifyContent:"center",margin:"auto",width:320,height:320,background:"transparent url(".concat("light"===e.palette.mode?el.src:ed.src,") no-repeat center 70px"),[e.breakpoints.down("sm")]:{width:200,height:200,background:"transparent url(".concat("light"===e.palette.mode?el.src:ed.src,") no-repeat center 40px"),backgroundSize:"30% 55%,cover"}},categoriesType:{padding:"0rem 2rem",[e.breakpoints.down("sm")]:{marginTop:"1rem",padding:"0rem 0.5rem"},"& .categoriesTypeInfo":{display:"flex",alignItems:"center",gap:"0.7rem"}},rotate:{transform:"rotate(180deg)"},noRotate:{transform:"rotate(0deg)"}}));var ep=a(9253),ex=a(73604),eh=a(14888),eu=a(46208),em=a(43815);let eg=(0,M.ZP)("div")(e=>{let{theme:t}=e,a="dark"===t.palette.mode;return{color:t.palette.text.primary,backgroundColor:a?"#35353C":"#E4D7FA",padding:"8px",fontSize:"14px",maxWidth:"200px",fontWeight:"500",border:"1px solid ".concat(a?"#4C4C57":"none"),borderRadius:"12px",display:"flex",alignItems:"flex-start",outline:"none"}}),CustomTooltip=e=>{var t,a,i;let{payload:r}=e,[s,o]=(null==r?void 0:null===(i=r[0])||void 0===i?void 0:null===(a=i.payload)||void 0===a?void 0:null===(t=a.text)||void 0===t?void 0:t.split(" "))||[];return s&&o?(0,n.jsx)(eg,{children:(0,n.jsx)(R.Z,{primary:o,secondary:s,primaryProps:{variant:"body2",color:"text.secondary"},secondaryProps:{variant:"body2",color:"text.primary",fontWeight:700}})}):null};var ef=(0,i.memo)(e=>{let{data:t}=e,a=(0,l.Z)(),r=(0,d.Z)(a.breakpoints.down("sm")),s=(0,i.useMemo)(()=>r?{cx:90,cy:90,innerRadius:85,outerRadius:95}:{cx:155,cy:145,innerRadius:128,outerRadius:136},[r]);return(0,n.jsx)(ep.h,{width:"100%",height:"100%",children:(0,n.jsxs)(ex.u,{children:[(0,n.jsx)(eh.u,{wrapperStyle:{outline:"none"},content:(0,n.jsx)(CustomTooltip,{})}),(0,n.jsx)(eu.b,{data:t,...s,fill:"#8884d8",paddingAngle:3,dataKey:"value",children:t.map((e,t)=>(0,n.jsx)(em.b,{fill:e.color,style:{outline:"none"}},"cell-".concat(t)))})]})})}),ev=a(64182),ey=a(8876),eb=a(17840);let FydePerfomanceCart=e=>{let{loading:t,fydePerfomanceData:a,fydePerfomanceTitle:i,chartType:r,type:s,tooltipText:o}=e,{classes:l}=ec(),{underWeight:d,overWeight:p,topPerformingTokens:x}=(0,c.h1)();return(0,n.jsxs)(ei.Z,{className:l.card,children:[(0,n.jsx)(er.Z,{title:i,action:(0,n.jsx)(eb.Z,{title:o})}),(0,n.jsx)(es.Z,{className:l.cardcontent,children:function(e){let{loading:t,fydePerfomanceData:a,fydePerfomanceTitle:i,chartType:r,type:s,tooltipText:o,totalTokens:l,topPerformingTokens:d}=e;switch(i){case"TVL":case"$TRSY Performance":return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(g.Z,{variant:"h4",color:"text.primary",children:t?(0,n.jsx)(D.Z,{variant:"text",width:100}):"percent"===s?a.value.toFixed(0)+"%":(0,Y.M)(a.value,{decimals:"$TRSY Performance"===i?2:0})}),t?(0,n.jsx)(D.Z,{variant:"text",width:30}):(0,n.jsx)(U.Z,{change:a.change,timeframe:"7D"}),t?(0,n.jsx)(D.Z,{variant:"text",height:100}):(0,n.jsx)(v.Z,{height:100,children:(0,n.jsx)(ev.Z,{lineData:a.data,chartType:r})})]});case"Yield APY":return(0,n.jsxs)(v.Z,{display:"flex",flexDirection:"column",gap:1,justifyContent:"space-around",height:"100%",children:[(0,n.jsx)(g.Z,{variant:"h4",color:"text.primary",sx:{background:"linear-gradient(to right, #A866FF 0%, #008FFF 50%, #00DEFE 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",fontWeight:"bold"},children:t?(0,n.jsx)(D.Z,{variant:"text",width:100}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(g.Z,{component:"span",sx:{WebkitTextFillColor:e=>e.palette.text.primary},mr:1,children:["Up to"," "]}),ey.lL.toFixed(0)+"%"]})}),(0,n.jsx)(en.Z,{sx:{my:1}}),(0,n.jsx)(g.Z,{variant:"h6",mb:1.5,children:"Tokens in the Vault"}),(0,n.jsx)(g.Z,{variant:"h4",color:"text.primary",fontWeight:"bold",pb:0,children:t?(0,n.jsx)(D.Z,{variant:"text",width:100}):l})]});case"Top Performers":return(0,n.jsx)(v.Z,{display:"flex",pt:1.5,flexDirection:"column",gap:1.8,children:t?Array.from([,,,].keys()).map(e=>(0,n.jsxs)(v.Z,{width:"100%",display:"flex",flexDirection:"column",gap:0,children:[(0,n.jsx)(D.Z,{variant:"text",width:100,height:40}),2!==e&&(0,n.jsx)(en.Z,{sx:{mt:1}})]},e)):null==d?void 0:d.map((e,t)=>{var a;return(0,n.jsxs)(v.Z,{width:"100%",display:"flex",flexDirection:"column",gap:0,children:[(0,n.jsx)(R.Z,{iconSrc:null==e?void 0:null===(a=e.image)||void 0===a?void 0:a.src,iconSize:"sm",primary:(0,n.jsxs)(f.Z,{direction:"row",spacing:1,alignItems:"center",children:[(0,n.jsx)(g.Z,{variant:"body1",fontWeight:"bold",color:"text.primary",children:e.name}),(0,n.jsx)(U.Z,{change:e.percentageChange.weekly,timeframe:"7D"})]}),primaryProps:{fontSize:"0.9rem"},sx:{gap:1}}),t!==d.length-1&&(0,n.jsx)(en.Z,{sx:{mt:1.8}})]},t)})})}}({loading:t,fydePerfomanceData:a,fydePerfomanceTitle:i,chartType:r,type:s,tooltipText:o,totalTokens:d.length+p.length,topPerformingTokens:x})})]})};var FydePerfomance_FydePerfomance=e=>{let{trsyPricePerformance:t,tvs:a,tvl:i,loading:r}=e,{loading:s}=(0,c.h1)(),{classes:o}=ec(),{categoryData:l}=(0,c.Y_)(),d=l&&l.length>0,p=[{loading:r||s,fydePerfomanceData:i,fydePerfomanceTitle:"TVL",chartType:"TVL",type:"fiat",tooltipText:"The total value locked in the vault"},{loading:r||s,fydePerfomanceData:t,fydePerfomanceTitle:"$TRSY Performance",chartType:"Performance",type:"fiat",tooltipText:"Performance of $TRSY token which is backed by underlying tokens in the vault"},{loading:r||s,fydePerfomanceData:{value:ey.lL,change:0,data:[]},fydePerfomanceTitle:"Yield APY",chartType:"Yield",type:"percent",tooltipText:"Yield generated by assets within the Liquid Vault, and the number of tokens in the vault"},{loading:r||s,fydePerfomanceData:a,fydePerfomanceTitle:"Top Performers",chartType:"Top Performers",type:"fiat",tooltipText:"The top 3 performing tokens in the vault"}];return(0,n.jsx)("div",{className:o.root,children:(0,n.jsxs)(eo.ZP,{container:!0,spacing:2,children:[(0,n.jsx)(eo.ZP,{container:!0,spacing:2,item:!0,lg:6,md:12,sm:12,xs:12,children:p.map((e,t)=>(0,n.jsx)(eo.ZP,{item:!0,lg:6,md:6,sm:12,xs:12,children:(0,n.jsx)(FydePerfomanceCart,{type:e.type,tooltipText:e.tooltipText,fydePerfomanceData:e.fydePerfomanceData,fydePerfomanceTitle:e.fydePerfomanceTitle,chartType:e.chartType,loading:e.loading})},t))}),(0,n.jsx)(eo.ZP,{item:!0,lg:6,md:12,sm:12,xs:12,children:(0,n.jsxs)(ei.Z,{className:o.card,children:[(0,n.jsx)(er.Z,{title:"Categories",action:(0,n.jsx)(eb.Z,{title:"The distribution of assets in the vault"})}),(0,n.jsxs)(es.Z,{children:[(0,n.jsx)("div",{className:o.categoriesImage,children:d?(0,n.jsx)(ef,{data:null!=l?l:[]}):(0,n.jsx)(D.Z,{variant:"rounded",animation:"wave",height:"95%",sx:{borderRadius:"50%",aspectRatio:1,position:"relative",left:"10px",top:"-5px"}})}),(0,n.jsx)("div",{className:o.categoriesType,children:(0,n.jsx)(eo.ZP,{container:!0,spacing:1,mt:1,children:d?null==l?void 0:l.map((e,t)=>(0,n.jsx)(eo.ZP,{item:!0,md:4,sm:4,xs:6,children:(0,n.jsxs)("div",{className:"categoriesTypeInfo",children:[(0,n.jsx)("div",{style:{height:"15px",width:"15px",borderRadius:"12px",background:"".concat(e.color)}}),(0,n.jsx)(g.Z,{variant:"body1",fontWeight:"normal",children:e.text})]})},t)):Array.from(Array(O.bA).keys()).map(e=>(0,n.jsx)(eo.ZP,{item:!0,md:4,sm:4,xs:6,children:(0,n.jsxs)("div",{className:"categoriesTypeInfo",children:[(0,n.jsx)("div",{style:{height:"15px",width:"15px",borderRadius:"12px"}}),(0,n.jsx)(g.Z,{variant:"body1",fontWeight:"normal",children:(0,n.jsx)(D.Z,{variant:"text",width:100})})]})},e))})})]})]})})]})})},ej=a(77527),eZ=a(3281),portfolio=()=>{let{isConnected:e}=(0,s.Z)(),{loading:t,fetchedAssets:a,overWeight:u,underWeight:m,fydePerformance:g,annualPerfomanceChange:f,loadingFydePerformance:v}=(0,c.h1)(),{userTrsyTotal:y,loading:b}=(0,h.cJ)(),{data:j}=(0,eZ.KE)(void 0,{selectFromResult:e=>{var t,a,n;let i={change:(null==e?void 0:null===(t=e.data)||void 0===t?void 0:t.percentage_change)||0,value:(null==e?void 0:null===(a=e.data)||void 0===a?void 0:a.value)||0,data:(null==e?void 0:null===(n=e.data)||void 0===n?void 0:n.data)||[]};return{data:i}}}),Z=(0,l.Z)();(0,d.Z)(Z.breakpoints.down("sm"));let[w,C]=(0,i.useState)(!0),[T,k]=(0,i.useState)(!1),[F,A]=(0,i.useState)(x.C_.portfolio);return(0,i.useMemo)(()=>F===x.C_.manage?p._O:F===x.C_.portfolio?p.P:p.UR,[F]),(0,n.jsxs)(n.Fragment,{children:[e?null:(0,n.jsx)(o.Z,{show:!e,children:(0,n.jsx)(r.Z,{authenticated:e})}),(0,n.jsxs)(ej.Z,{title:"Vault",children:[(0,n.jsx)(FydePerfomance_FydePerfomance,{trsyPricePerformance:g.weekly_performance,tvs:j,tvl:g.weekly_tvl,loading:v}),(0,n.jsx)(VaultAssets_VaultAssets,{underWeight:m,overWeight:u,loadingManagePool:t&&!a})]})]})}},26915:function(e,t,a){a.d(t,{Qc:function(){return useWithdraw},Y1:function(){return useGovernanceVoting},cJ:function(){return useGovernance},vb:function(){return useRebalance},vc:function(){return useUnstake}});var n=a(67294),i=a(44228),r=a(90546),s=a(45808),o=a(41248),l=a(98541),d=a(61769),c=a(92106),p=a(72826),x=a(8729),h=a(8876),u=a(94806),m=a(4326),g=a(9716);let useGovernance=()=>{let{userProxyAddress:e}=(0,o.v9)(e=>e.governance),t=(0,o.v9)(e=>e.portfolio.userTrsy.trsyBalance),a=(0,o.v9)(e=>e.portfolio.trsyBalanceUnformatted),i=(0,o.v9)(e=>e.portfolio.trsyPrice),{stakedTrsy:r,loading:s}=(0,m.z)(),{assets:l,loadingAssets:d,fetchedAssets:c}=(0,p.h1)(),x=(0,n.useMemo)(()=>t+r,[t,r]),h=(0,n.useMemo)(()=>{let e=0;return l.filter(e=>e.isGovernance).forEach(t=>{e+=t.strsyFormatted||0}),e},[l]),u=(0,n.useMemo)(()=>({trsyBalance:r+t+h,trsyValue:(t+h+r)*i}),[t,i,h,r]);return{loading:!c&&d||s,assets:l.filter(e=>e.isGovernance),TRSYBalance:t,totalTrsyBalance:x,totalStrsyBalance:h,userProxyAddress:e,userTrsyTotal:u,TRSYBalanceUnformatted:a}},useRebalance=()=>{let{loadingRebalance:e}=(0,o.v9)(e=>e.governance),{fetch:t,fetchFirst:a}=(0,p.h1)(),n=(0,s.TL)(),{walletClient:l,address:d}=(0,i.Z)(),rebalance=async e=>{let i=await n((0,r.aq)({walletClient:l,assetAddress:e,userAddress:d}));"fulfilled"===i.meta.requestStatus&&(t(),a())};return{rebalance,loadingRebalance:e}},useUnstake=()=>{let[e,t]=(0,n.useState)(!1),{fetch:a,fetchFirst:o}=(0,p.h1)(),l=(0,s.TL)(),{walletClient:d}=(0,i.Z)(),unstake=async(e,n)=>{t(!0);let i=await l((0,r.wo)({walletClient:d,assetAddress:e,amount:n}));return t(!1),"fulfilled"===i.meta.requestStatus&&(a(),o()),!!i.payload};return{unstake,loadingUnstake:e}},useWithdraw=()=>{let[e,t]=(0,n.useState)(!1),{fetch:a,fetchFirst:o}=(0,p.h1)(),l=(0,s.TL)(),{walletClient:d,address:c}=(0,i.Z)(),withdraw=async(e,n)=>{t(!0);let i=await l((0,r.ZB)({walletClient:d,assetAddress:e,amount:n,userAddress:c}));return t(!1),"fulfilled"===i.meta.requestStatus&&(a(),o()),!!i.payload};return{withdraw,loadingWithdraw:e}},useGovernanceVoting=()=>{let[e,t]=(0,n.useState)(!1),{walletClient:a}=(0,i.Z)(),{openVoteSuccessfullyModal:r}=(0,u.eO)(),delegateVotingRight=async(e,n)=>{t(!0);try{let i=(0,l.uN)({address:h.re.governanceModule.address,abi:h.re.governanceModule.abi,client:a}),s=await i.write.delegateVotingRights([e,n]),{receipt:o,hash:d}=await (0,g.es)(s);return t(!1),r(d,"Delegation Submitted!","Make sure to delegate before the vote is initiated"),o}catch(e){console.error(e),t(!1),(0,x.cB)(e.shortMessage||e.message||"Something went wrong!","Please try again");return}},setDelegateVoting=async(e,n)=>{t(!0);try{let i=(0,l.uN)({address:h.re.governanceModule.address,abi:h.re.governanceModule.abi,client:a}),s=(0,d.vk)((0,c.NC)(e)),o=await i.write.setDelegate([s,n]),{receipt:p,hash:x}=await (0,g.es)(o);return t(!1),r(x,"Delegation Submitted!","Make sure to delegate before the vote is initiated"),p}catch(e){console.error(e),t(!1),(0,x.cB)(e.shortMessage||e.message||"Something went wrong!","Please try again");return}};return{loadingVote:e,delegateVotingRight,setDelegateVoting}}}}]);