"use strict";(self.webpackChunkbacalhau_docs=self.webpackChunkbacalhau_docs||[]).push([[5667],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>b});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(n),h=o,b=d["".concat(u,".").concat(h)]||d[h]||c[h]||r;return n?a.createElement(b,l(l({ref:t},p),{},{components:n})):a.createElement(b,l({ref:t},p))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=h;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[d]="string"==typeof e?e:o,l[1]=i;for(var s=2;s<r;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},4657:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>s});var a=n(7462),o=(n(7294),n(3905));const r={sidebar_label:"Python - Hello World",sidebar_position:1,description:"How to run a Python file in Bacalhau"},l="Python Hello World",i={unversionedId:"examples/workload-onboarding/trivial-python/index",id:"examples/workload-onboarding/trivial-python/index",title:"Python Hello World",description:"How to run a Python file in Bacalhau",source:"@site/docs/examples/workload-onboarding/trivial-python/index.md",sourceDirName:"examples/workload-onboarding/trivial-python",slug:"/examples/workload-onboarding/trivial-python/",permalink:"/examples/workload-onboarding/trivial-python/",draft:!1,editUrl:"https://github.com/bacalhau-project/docs.bacalhau.org/blob/main/docs/examples/workload-onboarding/trivial-python/index.md",tags:[],version:"current",lastUpdatedAt:1679944019,formattedLastUpdatedAt:"Mar 27, 2023",sidebarPosition:1,frontMatter:{sidebar_label:"Python - Hello World",sidebar_position:1,description:"How to run a Python file in Bacalhau"},sidebar:"documentationSidebar",previous:{title:"How To's",permalink:"/examples/workload-onboarding/"},next:{title:"Sparkov-Data-Generation",permalink:"/examples/workload-onboarding/Sparkov-Data-Generation/"}},u={},s=[{value:"TD;LR",id:"tdlr",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Creating a Hello World File",id:"creating-a-hello-world-file",level:2},{value:"Submit the workload",id:"submit-the-workload",level:2},{value:"Checking the State of your Jobs",id:"checking-the-state-of-your-jobs",level:2},{value:"Viewing your Job Output",id:"viewing-your-job-output",level:2},{value:"Need Support?",id:"need-support",level:2}],p={toc:s},d="wrapper";function c(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"python-hello-world"},"Python Hello World"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://colab.research.google.com/github/bacalhau-project/examples/blob/main/workload-onboarding/trivial-python/index.ipynb"},(0,o.kt)("img",{parentName:"a",src:"https://colab.research.google.com/assets/colab-badge.svg",alt:"Open In Colab"})),"\n",(0,o.kt)("a",{parentName:"p",href:"https://mybinder.org/v2/gh/bacalhau-project/examples/HEAD?labpath=workload-onboarding/trivial-python/index.ipynb"},(0,o.kt)("img",{parentName:"a",src:"https://mybinder.org/badge.svg",alt:"Open In Binder"}))),(0,o.kt)("p",null,"This example tutorial serves as an introduction to Bacalhau. Here, you'll be running a Python file hosted on a website on Bacalhau."),(0,o.kt)("h2",{id:"tdlr"},"TD;LR"),(0,o.kt)("p",null,"Running a Python file in Bacalhau"),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"To get started, you need to install the Bacalhau client, see more information ",(0,o.kt)("a",{parentName:"p",href:"https://docs.bacalhau.org/getting-started/installation"},"here")),(0,o.kt)("h2",{id:"creating-a-hello-world-file"},"Creating a Hello World File"),(0,o.kt)("p",null,"We'll be using a very simple Python script which displays the ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/%22Hello,_World!%22_program"},"traditional first greeting"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"%cat hello-world.py\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'print("Hello, world!")\n')),(0,o.kt)("h2",{id:"submit-the-workload"},"Submit the workload"),(0,o.kt)("p",null,"To submit a workload to Bacalhau you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"bacalhau docker run")," command. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash --out job_id\nbacalhau docker run \\\n  --id-only \\\n  --input-urls https://raw.githubusercontent.com/bacalhau-project/examples/151eebe895151edd83468e3d8b546612bf96cd05/workload-onboarding/trivial-python/hello-world.py \\\n  python:3.10-slim -- python3 /inputs/hello-world.py\n")),(0,o.kt)("p",null,"When a job is submitted, Bacalhau prints out the related ",(0,o.kt)("inlineCode",{parentName:"p"},"job_id"),". We store that in an environment variable so that we can reuse it later on."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"%env JOB_ID={job_id}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"env: JOB_ID=c2f245d6-43a6-43ec-9a3b-7ce9b6242c88\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"bacalhau docker run")," command allows to pass input data into the container using ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/multiformats/cid"},"content identifier (CID)")," volumes, we will be using the ",(0,o.kt)("inlineCode",{parentName:"p"},"-u URL:path")," ",(0,o.kt)("a",{parentName:"p",href:"https://docs.bacalhau.org/all-flags#docker-run"},"argument")," for simplicity. This results in Bacalhau mounting a ",(0,o.kt)("em",{parentName:"p"},"data volume")," inside the container. By default, Bacalhau mounts the input volume at the path ",(0,o.kt)("inlineCode",{parentName:"p"},"/inputs")," inside the container."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/filecoin-project/bacalhau/blob/v0.2.3/cmd/bacalhau/docker_run.go#L64"},"Bacalhau overwrites the default entrypoint"),", so we must run the full command after the ",(0,o.kt)("inlineCode",{parentName:"p"},"--")," argument.")),(0,o.kt)("h2",{id:"checking-the-state-of-your-jobs"},"Checking the State of your Jobs"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Job status"),": You can check the status of the job using ",(0,o.kt)("inlineCode",{parentName:"li"},"bacalhau list"),". ")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\nbacalhau list --id-filter=${JOB_ID} --no-style\n")),(0,o.kt)("p",null,"When it says ",(0,o.kt)("inlineCode",{parentName:"p"},"Published")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"Completed"),", that means the job is done, and we can get the results."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Job information"),": You can find out more information about your job by using ",(0,o.kt)("inlineCode",{parentName:"li"},"bacalhau describe"),".")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\nbacalhau describe ${JOB_ID}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'APIVersion: V1beta1\nMetadata:\n  ClientID: 77cf46c04f88ffb1c3e0e4b6e443724e8d2d87074d088ef1a6294a448fa85d2e\n  CreatedAt: "2023-01-20T13:24:59.165644684Z"\n  ID: c2f245d6-43a6-43ec-9a3b-7ce9b6242c88\nSpec:\n  Deal:\n    Concurrency: 1\n  Docker:\n    Entrypoint:\n    - python3\n    - /inputs/hello-world.py\n    Image: python:3.10-slim\n  Engine: Docker\n  ExecutionPlan:\n    ShardsTotal: 1\n  Language:\n    JobContext: {}\n  Publisher: Estuary\n  Resources:\n    GPU: ""\n  Sharding:\n    BatchSize: 1\n    GlobPatternBasePath: /inputs\n  Timeout: 1800\n  Verifier: Noop\n  Wasm: {}\n  inputs:\n  - StorageSource: URLDownload\n    URL: https://raw.githubusercontent.com/bacalhau-project/examples/151eebe895151edd83468e3d8b546612bf96cd05/workload-onboarding/trivial-python/hello-world.py\n    path: /inputs\n  outputs:\n  - Name: outputs\n    StorageSource: IPFS\n    path: /outputs\nStatus:\n  JobState:\n    Nodes:\n      QmUDAXvv31WPZ8U9CzuRTMn9iFGiopGE7rHiah1X8a6PkT:\n        Shards:\n          "0":\n            NodeId: QmUDAXvv31WPZ8U9CzuRTMn9iFGiopGE7rHiah1X8a6PkT\n            PublishedResults: {}\n            State: Cancelled\n            VerificationResult: {}\n      QmVAb7r2pKWCuyLpYWoZr9syhhFnTWeFaByHdb8PkkhLQG:\n        Shards:\n          "0":\n            NodeId: QmVAb7r2pKWCuyLpYWoZr9syhhFnTWeFaByHdb8PkkhLQG\n            PublishedResults: {}\n            State: Cancelled\n            VerificationResult: {}\n      QmXaXu9N5GNetatsvwnTfQqNtSeKAD6uCmarbh3LMRYAcF:\n        Shards:\n          "0":\n            NodeId: QmXaXu9N5GNetatsvwnTfQqNtSeKAD6uCmarbh3LMRYAcF\n            PublishedResults: {}\n            State: Cancelled\n            VerificationResult: {}\n      QmYgxZiySj3MRkwLSL4X2MF5F9f2PMhAE3LV49XkfNL1o3:\n        Shards:\n          "0":\n            NodeId: QmYgxZiySj3MRkwLSL4X2MF5F9f2PMhAE3LV49XkfNL1o3\n            PublishedResults: {}\n            State: Cancelled\n            VerificationResult: {}\n      QmdZQ7ZbhnvWY1J12XYKGHApJ6aufKyLNSvf8jZBrBaAVL:\n        Shards:\n          "0":\n            NodeId: QmdZQ7ZbhnvWY1J12XYKGHApJ6aufKyLNSvf8jZBrBaAVL\n            PublishedResults:\n              CID: QmehTNF6ogbESt26EgrSw9YGrApneSWhPesqw1A5T6ezBe\n              Name: job-c2f245d6-43a6-43ec-9a3b-7ce9b6242c88-shard-0-host-QmdZQ7ZbhnvWY1J12XYKGHApJ6aufKyLNSvf8jZBrBaAVL\n              StorageSource: IPFS\n            RunOutput:\n              exitCode: 0\n              runnerError: ""\n              stderr: ""\n              stderrtruncated: false\n              stdout: |\n                Hello, world!\n              stdouttruncated: false\n            State: Completed\n            VerificationResult:\n              Complete: true\n              Result: true\n  Requester:\n    RequesterNodeID: QmdZQ7ZbhnvWY1J12XYKGHApJ6aufKyLNSvf8jZBrBaAVL\n    RequesterPublicKey: CAASpgIwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQDVRKPgCfY2fgfrkHkFjeWcqno+MDpmp8DgVaY672BqJl/dZFNU9lBg2P8Znh8OTtHPPBUBk566vU3KchjW7m3uK4OudXrYEfSfEPnCGmL6GuLiZjLf+eXGEez7qPaoYqo06gD8ROdD8VVse27E96LlrpD1xKshHhqQTxKoq1y6Rx4DpbkSt966BumovWJ70w+Nt9ZkPPydRCxVnyWS1khECFQxp5Ep3NbbKtxHNX5HeULzXN5q0EQO39UN6iBhiI34eZkH7PoAm3Vk5xns//FjTAvQw6wZUu8LwvZTaihs+upx2zZysq6CEBKoeNZqed9+Tf+qHow0P5pxmiu+or+DAgMBAAE=\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Job download"),": You can download your job results directly by using ",(0,o.kt)("inlineCode",{parentName:"li"},"bacalhau get"),". Alternatively, you can choose to create a directory to store your results. In the command below, we created a directory and downloaded our job output to be stored in that directory.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\nrm -rf results && mkdir results\nbacalhau get ${JOB_ID} --output-dir results\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Fetching results of job 'c2f245d6-43a6-43ec-9a3b-7ce9b6242c88'...\nResults for job 'c2f245d6-43a6-43ec-9a3b-7ce9b6242c88' have been written to...\nresults\n\n\n2023/01/20 13:25:06 CleanupManager.fnsMutex violation CRITICAL section took 43.424ms 43424000 (threshold 10ms)\n")),(0,o.kt)("h2",{id:"viewing-your-job-output"},"Viewing your Job Output"),(0,o.kt)("p",null,"Each job creates 3 subfolders: the ",(0,o.kt)("strong",{parentName:"p"},"combined_results"),",",(0,o.kt)("strong",{parentName:"p"},"per_shard files"),", and the ",(0,o.kt)("strong",{parentName:"p"},"raw")," directory. To view the file, run the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"\n%%bash\ncat results/combined_results/stdout\n\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Hello, world!\n")),(0,o.kt)("h2",{id:"need-support"},"Need Support?"),(0,o.kt)("p",null,"For questions, feedback, please reach out in our ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/filecoin-project/bacalhau/discussions"},"forum")))}c.isMDXComponent=!0}}]);