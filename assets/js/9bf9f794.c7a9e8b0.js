"use strict";(self.webpackChunkbacalhau_docs=self.webpackChunkbacalhau_docs||[]).push([[9877],{3905:(e,a,t)=>{t.d(a,{Zo:()=>u,kt:()=>g});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=n.createContext({}),p=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},u=function(e){var a=p(e.components);return n.createElement(s.Provider,{value:a},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},c=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(t),c=r,g=d["".concat(s,".").concat(c)]||d[c]||m[c]||o;return t?n.createElement(g,i(i({ref:a},u),{},{components:t})):n.createElement(g,i({ref:a},u))}));function g(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=c;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},8990:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=t(7462),r=(t(7294),t(3905));const o={sidebar_label:"Onboard WebAssembly Workload",sidebar_position:3},i="Onboarding Your WebAssembly Workloads",l={unversionedId:"getting-started/wasm-workload-onboarding",id:"getting-started/wasm-workload-onboarding",title:"Onboarding Your WebAssembly Workloads",description:"Bacalhau supports running programs that are compiled to WebAssembly (WASM). With Bacalhau client, you can upload WASM programs, retrieve data from public storage, read and write data, receive program arguments and access environment variables.",source:"@site/docs/getting-started/wasm-workload-onboarding.md",sourceDirName:"getting-started",slug:"/getting-started/wasm-workload-onboarding",permalink:"/getting-started/wasm-workload-onboarding",draft:!1,editUrl:"https://github.com/bacalhau-project/docs.bacalhau.org/blob/main/docs/getting-started/wasm-workload-onboarding.md",tags:[],version:"current",lastUpdatedAt:1680561498,formattedLastUpdatedAt:"Apr 3, 2023",sidebarPosition:3,frontMatter:{sidebar_label:"Onboard WebAssembly Workload",sidebar_position:3},sidebar:"documentationSidebar",previous:{title:"Onboard Docker Workload",permalink:"/getting-started/docker-workload-onboarding"},next:{title:"Specifying Hardware Requirements",permalink:"/getting-started/resources"}},s={},p=[{value:"Prerequisites and Limitations",id:"prerequisites-and-limitations",level:2},{value:"Onboarding",id:"onboarding",level:2},{value:"Step 1: Replace network operations with filesystem reads and writes",id:"step-1-replace-network-operations-with-filesystem-reads-and-writes",level:3},{value:"Step 2: Configure your compiler to output WASI-compliant WebAssembly",id:"step-2-configure-your-compiler-to-output-wasi-compliant-webassembly",level:3},{value:"Step 3: Upload the input data",id:"step-3-upload-the-input-data",level:3},{value:"Step 4: Run your program",id:"step-4-run-your-program",level:3},{value:"Program arguments",id:"program-arguments",level:4},{value:"Environment variables",id:"environment-variables",level:4},{value:"Examples",id:"examples",level:2},{value:"Support",id:"support",level:2}],u={toc:p},d="wrapper";function m(e){let{components:a,...t}=e;return(0,r.kt)(d,(0,n.Z)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"onboarding-your-webassembly-workloads"},"Onboarding Your WebAssembly Workloads"),(0,r.kt)("p",null,"Bacalhau supports running programs that are compiled to ",(0,r.kt)("a",{parentName:"p",href:"https://webassembly.org/"},"WebAssembly (WASM)"),". With Bacalhau client, you can upload WASM programs, retrieve data from public storage, read and write data, receive program arguments and access environment variables."),(0,r.kt)("h2",{id:"prerequisites-and-limitations"},"Prerequisites and Limitations"),(0,r.kt)("p",null,"Bacalhau can run compiled WASM programs that expect the WebAssembly System Interface (WASI) Snapshot 1. Through this interface, WebAssembly programs can access data, environment variables and program arguments."),(0,r.kt)("p",null,"All ingress/egress networking is disabled \u2013 you won't be able to pull data/code/weights/etc from an external source. WASM jobs can say what data they need using URLs or CIDs (Content IDentifier) and can then access the data by reading from the filesystem."),(0,r.kt)("p",null,"There is no multi-threading as WASI does not expose any interface for it."),(0,r.kt)("h2",{id:"onboarding"},"Onboarding"),(0,r.kt)("h3",{id:"step-1-replace-network-operations-with-filesystem-reads-and-writes"},"Step 1: Replace network operations with filesystem reads and writes"),(0,r.kt)("p",null,"If your program would normally read and write to network endpoints, you'll need to replace this with filesystem operations."),(0,r.kt)("p",null,"For example, instead of making an HTTP request to ",(0,r.kt)("inlineCode",{parentName:"p"},"example.com"),", instead read from the ",(0,r.kt)("inlineCode",{parentName:"p"},"/inputs")," folder. You can then specify the URL to Bacalhau when you run the job using ",(0,r.kt)("inlineCode",{parentName:"p"},"--input-urls example.com"),"."),(0,r.kt)("p",null,"You can write results to standard out or standard error pipes or to the filesystem into an output mount. For example, WASM jobs by default will have access to a folder at ",(0,r.kt)("inlineCode",{parentName:"p"},"/outputs")," that will be persisted when the job ends."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You can specify more or different output mounts using the ",(0,r.kt)("inlineCode",{parentName:"p"},"-o")," flag.")),(0,r.kt)("h3",{id:"step-2-configure-your-compiler-to-output-wasi-compliant-webassembly"},"Step 2: Configure your compiler to output WASI-compliant WebAssembly"),(0,r.kt)("p",null,"You will need to compile your program to WebAssembly that expects WASI. Check the instructions for your compiler to see how to do this."),(0,r.kt)("p",null,"For example, Rust users can specify the ",(0,r.kt)("inlineCode",{parentName:"p"},"wasm32-wasi")," target to ",(0,r.kt)("inlineCode",{parentName:"p"},"rustup")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"cargo")," to get programs compiled for WASI WebAssembly. See ",(0,r.kt)("a",{parentName:"p",href:"/examples/workload-onboarding/rust-wasm/"},"the Rust example")," for more information on this."),(0,r.kt)("h3",{id:"step-3-upload-the-input-data"},"Step 3: Upload the input data"),(0,r.kt)("p",null,"Data is identified by its content identifier (CID) and can be accessed by anyone who knows the CID. You can use either of these methods to upload your data:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.bacalhau.org/examples/data-ingestion/from-url/"},"Copy data from a URL to public storage")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.bacalhau.org/examples/data-ingestion/pinning/"},"Pin Data to public storage")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.bacalhau.org/examples/data-ingestion/s3-to-ipfs/"},"Copy Data from S3 Bucket to public storage"))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"You can mount your data anywhere on your machine, and Bacalhau will be able to run against that data")),(0,r.kt)("h3",{id:"step-4-run-your-program"},"Step 4: Run your program"),(0,r.kt)("p",null,"You can run a WebAssembly program on Bacalhau using the ",(0,r.kt)("inlineCode",{parentName:"p"},"bacalhau wasm run")," command."),(0,r.kt)("p",null,"To run a locally compiled WASM program, specify it as an argument. For example, running ",(0,r.kt)("inlineCode",{parentName:"p"},"bacalhau wasm run main.wasm")," will upload and execute the ",(0,r.kt)("inlineCode",{parentName:"p"},"main.wasm")," program."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"The program you specify will be uploaded to a Bacalhau storage node and will be publicly available.")),(0,r.kt)("p",null,"Alternatively, you can specify a WASM program by\nusing a CID, like ",(0,r.kt)("inlineCode",{parentName:"p"},"bacalhau wasm run Qmajb9T3jBdMSp7xh2JruNrqg3hniCnM6EUVsBocARPJRQ"),"."),(0,r.kt)("p",null,"Make sure to specify any input data using the ",(0,r.kt)("inlineCode",{parentName:"p"},"--input-volumes")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"--input-urls")," flags."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"--input-urls")," flag can only be used once, and will make the contents of the URL available at the ",(0,r.kt)("inlineCode",{parentName:"p"},"/inputs")," directory.")),(0,r.kt)("h4",{id:"program-arguments"},"Program arguments"),(0,r.kt)("p",null,"You can give the WASM program arguments by specifying them after the program path or CID. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ bacalhau wasm run echo.wasm hello world\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Write your program to use program arguments to specify input and output paths. This makes your program more flexible at handling different configurations of input and output volumes."),(0,r.kt)("p",{parentName:"admonition"},"For example, instead of hard-coding your program to read from ",(0,r.kt)("inlineCode",{parentName:"p"},"/inputs/data.txt"),", accept a program argument that should contain the path and then specify the path as an argument to ",(0,r.kt)("inlineCode",{parentName:"p"},"bacalhau wasm run"),":"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ bacalhau wasm run prog.wasm /inputs/data.txt\n")),(0,r.kt)("p",{parentName:"admonition"},"Your language of choice should contain a standard way of reading program arguments that will work with WASI.")),(0,r.kt)("h4",{id:"environment-variables"},"Environment variables"),(0,r.kt)("p",null,"You can also specify environment variables using the ",(0,r.kt)("inlineCode",{parentName:"p"},"-e")," flag."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ bacalhau wasm run prog.wasm -e HELLO=world\n")),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"/examples/workload-onboarding/rust-wasm/"},"the Rust example")," for a workload that leverages WebAssembly support."),(0,r.kt)("h2",{id:"support"},"Support"),(0,r.kt)("p",null,"If have questions or need support or guidance, please reach out to the ",(0,r.kt)("a",{parentName:"p",href:"https://filecoinproject.slack.com/archives/C02RLM3JHUY"},"Bacalhau team via Slack"),"(#bacalhau channel)"))}m.isMDXComponent=!0}}]);