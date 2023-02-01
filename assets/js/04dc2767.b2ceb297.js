"use strict";(self.webpackChunkbacalhau_docs=self.webpackChunkbacalhau_docs||[]).push([[8041],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var r=n.createContext({}),c=function(e){var t=n.useContext(r),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(r.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,r=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(a),m=o,h=d["".concat(r,".").concat(m)]||d[m]||u[m]||i;return a?n.createElement(h,l(l({ref:t},p),{},{components:a})):n.createElement(h,l({ref:t},p))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,l=new Array(i);l[0]=d;var s={};for(var r in t)hasOwnProperty.call(t,r)&&(s[r]=t[r]);s.originalType=e,s.mdxType="string"==typeof e?e:o,l[1]=s;for(var c=2;c<i;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},46:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>r,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=a(7462),o=(a(7294),a(3905));const i={sidebar_label:"Object Detection - YOLOv5",sidebar_position:3},l="Object Detection with YOLOv5 on Bacalhau",s={unversionedId:"examples/model-inference/object-detection-yolo5/index",id:"examples/model-inference/object-detection-yolo5/index",title:"Object Detection with YOLOv5 on Bacalhau",description:"Open In Colab",source:"@site/docs/examples/model-inference/object-detection-yolo5/index.md",sourceDirName:"examples/model-inference/object-detection-yolo5",slug:"/examples/model-inference/object-detection-yolo5/",permalink:"/examples/model-inference/object-detection-yolo5/",draft:!1,editUrl:"https://github.com/bacalhau-project/docs.bacalhau.org/blob/main/docs/examples/model-inference/object-detection-yolo5/index.md",tags:[],version:"current",lastUpdatedAt:1675251198,formattedLastUpdatedAt:"Feb 1, 2023",sidebarPosition:3,frontMatter:{sidebar_label:"Object Detection - YOLOv5",sidebar_position:3},sidebar:"documentationSidebar",previous:{title:"Stable Diffusion - GPU",permalink:"/examples/model-inference/stable-diffusion-gpu/"},next:{title:"EasyOCR",permalink:"/examples/model-inference/EasyOCR/"}},r={},c=[{value:"Prerequisites",id:"prerequisites",level:3},{value:"1. Running Object Detection Jobs on Bacalhau",id:"1-running-object-detection-jobs-on-bacalhau",level:2},{value:"Test Run with Sample Data",id:"test-run-with-sample-data",level:3},{value:"Using custom Images as an input",id:"using-custom-images-as-an-input",level:2}],p={toc:c};function u(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"object-detection-with-yolov5-on-bacalhau"},"Object Detection with YOLOv5 on Bacalhau"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://colab.research.google.com/github/bacalhau-project/examples/blob/main/model-inference/object-detection-yolo5/index.ipynb"},(0,o.kt)("img",{parentName:"a",src:"https://colab.research.google.com/assets/colab-badge.svg",alt:"Open In Colab"})),"\n",(0,o.kt)("a",{parentName:"p",href:"https://mybinder.org/v2/gh/bacalhau-project/examples/HEAD?labpath=model-inference/object-detection-yolo5/index.ipynb"},(0,o.kt)("img",{parentName:"a",src:"https://mybinder.org/badge.svg",alt:"Open In Binder"}))),(0,o.kt)("p",null,"The identification and localization of objects in images and videos is a computer vision task called object detection. Several algorithms have emerged in the past few years to tackle the problem. One of the most popular algorithms to date for real-time object detection is ",(0,o.kt)("a",{parentName:"p",href:"https://towardsdatascience.com/yolo-you-only-look-once-real-time-object-detection-explained-492dc9230006"},"YOLO (You Only Look Once)"),", initially proposed by Redmond et al.",(0,o.kt)("a",{parentName:"p",href:"https://arxiv.org/abs/1506.02640"},"[1]")),(0,o.kt)("p",null,"Traditionally, models like YOLO required enormous amounts of training data to yield reasonable results. People might not have access to such high-quality labelled data. Thankfully, open source communities and researchers have made it possible to utilise pre-trained models to perform inference. In other words, you can use models that have already been trained on large datasets to perform object detection on your own data."),(0,o.kt)("p",null,"In this tutorial you will perform an end-to-end object detection inference, using the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ultralytics/yolov5/wiki/Docker-Quickstart"},"YOLOv5 Docker Image developed by Ultralytics.")),(0,o.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You'll need the latest ",(0,o.kt)("inlineCode",{parentName:"li"},"bacalhau")," client installed by following the ",(0,o.kt)("a",{parentName:"li",href:"../../../getting-started/installation"},"getting started instructions"),".")),(0,o.kt)("h2",{id:"1-running-object-detection-jobs-on-bacalhau"},"1. Running Object Detection Jobs on Bacalhau"),(0,o.kt)("p",null,"Bacalhau is a highly scalable decentralised computing platform and is well suited to running massive object detection jobs. In this example, you can take advantage of the GPUs available on the Bacalhau network."),(0,o.kt)("h3",{id:"test-run-with-sample-data"},"Test Run with Sample Data"),(0,o.kt)("p",null,"To get started, let's run a test job with a small sample dataset that is included in the YOLOv5 Docker Image. This will give you a chance to familiarise yourself with the process of running a job on Bacalhau."),(0,o.kt)("p",null,"In addition to the usual Bacalhau flags, you will also see:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"--gpu 1")," to specify the use of a GPU")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Remember that Bacalhau does not provide any network connectivity when running a job. All assets must be provided at submission time.")),(0,o.kt)("p",null,"The model requires pre-trained weights to run and by default downloads them from within the container. Bacalhau jobs don't have network access so we will pass in the weights at submission time, saving them to ",(0,o.kt)("inlineCode",{parentName:"p"},"/usr/src/app/yolov5s.pt"),". You may also provide your own weights here."),(0,o.kt)("p",null,"The container has its own options that we must specify:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"--input-urls")," to select which pre-trained weights you desire with details on the ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/ultralytics/yolov5/releases"},"yolov5 release page")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"--project")," specifies the output volume that the model will save its results to. Bacalhau defaults to using ",(0,o.kt)("inlineCode",{parentName:"li"},"/outputs")," as the output directory, so we save to there.")),(0,o.kt)("p",null,"For more container flags refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ultralytics/yolov5/blob/master/detect.py#L3-#L25"},(0,o.kt)("inlineCode",{parentName:"a"},"yolov5/detect.py")," file in the YOLO repository"),"."),(0,o.kt)("p",null,"One final additional hack that we have to do is move the weights file to a location with the standard name. As of writing this, Bacalhau downloads the file to a UUID-named file, which the model is not expecting. This is because github 302 redirects the request to a random file in its backend."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"bacalhau docker run \\\n--gpu 1 \\\n--timeout 3600 \\\n--wait-timeout-secs 3600 \\\n--wait \\\n--id-only \\\n--input-urls https://github.com/ultralytics/yolov5/releases/download/v6.2/yolov5s.pt \\\nultralytics/yolov5:v6.2 \\\n-- /bin/bash -c 'find /inputs -type f -exec cp {} /outputs/yolov5s.pt \\; ; python detect.py --weights /outputs/yolov5s.pt --source $(pwd)/data/images --project /outputs'\n")),(0,o.kt)("p",null,"This should output a UUID (like ",(0,o.kt)("inlineCode",{parentName:"p"},"59c59bfb-4ef8-45ac-9f4b-f0e9afd26e70"),"). This is the ID of the job that was created. You can check the status of the job with the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"bacalhau list --id-filter ${JOB_ID}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\x1b[92;100m CREATED  \x1b[0m\x1b[92;100m ID       \x1b[0m\x1b[92;100m JOB                     \x1b[0m\x1b[92;100m STATE     \x1b[0m\x1b[92;100m VERIFIED \x1b[0m\x1b[92;100m PUBLISHED               \x1b[0m\n\x1b[97;40m 15:53:15 \x1b[0m\x1b[97;40m b1e831bb \x1b[0m\x1b[97;40m Docker ultralytics/y... \x1b[0m\x1b[97;40m Completed \x1b[0m\x1b[97;40m          \x1b[0m\x1b[97;40m /ipfs/QmdPzJLDZeepW2... \x1b[0m\n")),(0,o.kt)("p",null,"Where it says ",(0,o.kt)("inlineCode",{parentName:"p"},"Completed"),", that means the job is done, and we can get the results. If it says ",(0,o.kt)("inlineCode",{parentName:"p"},"Error")," you can debug the issue with the ",(0,o.kt)("inlineCode",{parentName:"p"},"bacalhau describe ${JOB_ID}")," command."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"rm -rf results && mkdir results\nbacalhau get ${JOB_ID} --output-dir results\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Fetching results of job 'b1e831bb-2ca0-4663-bc7b-fe3c3cd179d8'...\nResults for job 'b1e831bb-2ca0-4663-bc7b-fe3c3cd179d8' have been written to...\nresults\n")),(0,o.kt)("p",null,"After the download has finished we can see the results:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'import IPython.display as display\ndisplay.Image("results/combined_results/outputs/exp/bus.jpg")\ndisplay.Image("results/combined_results/outputs/exp/zidane.jpg")\n')),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"jpeg",src:a(2206).Z,width:"1280",height:"720"})),(0,o.kt)("p",null,"Football makes people angry!"),(0,o.kt)("h2",{id:"using-custom-images-as-an-input"},"Using custom Images as an input"),(0,o.kt)("p",null,"Now let's use some custom images. First you will need to ingest your images onto IPFS/Filecoin. For more information about how to do that see the ingestion section of the ",(0,o.kt)("a",{parentName:"p",href:"/examples/data-ingestion/"},"getting started guide"),"."),(0,o.kt)("p",null,"This example will use the ",(0,o.kt)("a",{parentName:"p",href:"https://www.kaggle.com/datasets/f445f341fc5e3ab58757efa983a38d6dc709de82abd1444c8817785ecd42a1ac"},"Cyclist Dataset for Object Detection | Kaggle")," dataset."),(0,o.kt)("p",null,"We have already uploaded this dataset to Filecoin under the CID: ",(0,o.kt)("inlineCode",{parentName:"p"},"bafybeicyuddgg4iliqzkx57twgshjluo2jtmlovovlx5lmgp5uoh3zrvpm"),". You can browse to this dataset via ",(0,o.kt)("a",{parentName:"p",href:"https://w3s.link/ipfs/bafybeicyuddgg4iliqzkx57twgshjluo2jtmlovovlx5lmgp5uoh3zrvpm"},"a HTTP IPFS proxy"),"."),(0,o.kt)("p",null,"Let's run a the same job again, but this time use the images above."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"bacalhau docker run \\\n--gpu 1 \\\n--timeout 3600 \\\n--wait-timeout-secs 3600 \\\n--wait \\\n--id-only \\\n--input-urls https://github.com/ultralytics/yolov5/releases/download/v6.2/yolov5s.pt \\\n--input-volumes bafybeicyuddgg4iliqzkx57twgshjluo2jtmlovovlx5lmgp5uoh3zrvpm:/datasets \\\nultralytics/yolov5:v6.2 \\\n-- /bin/bash -c 'find /inputs -type f -exec cp {} /outputs/yolov5s.pt \\; ; python detect.py --weights /outputs/yolov5s.pt --source /datasets --project /outputs'\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"bacalhau list --id-filter ${JOB_ID}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\x1b[92;100m CREATED  \x1b[0m\x1b[92;100m ID       \x1b[0m\x1b[92;100m JOB                     \x1b[0m\x1b[92;100m STATE     \x1b[0m\x1b[92;100m VERIFIED \x1b[0m\x1b[92;100m PUBLISHED               \x1b[0m\n\x1b[97;40m 16:03:34 \x1b[0m\x1b[97;40m 7e2c5c13 \x1b[0m\x1b[97;40m Docker ultralytics/y... \x1b[0m\x1b[97;40m Completed \x1b[0m\x1b[97;40m          \x1b[0m\x1b[97;40m /ipfs/QmYbEH1wkfq9RM... \x1b[0m\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"rm -rf custom-results && mkdir custom-results\nbacalhau get ${JOB_ID} --output-dir custom-results\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Fetching results of job '7e2c5c13-40e6-473d-a76b-229416c3c04e'...\nResults for job '7e2c5c13-40e6-473d-a76b-229416c3c04e' have been written to...\ncustom-results\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"import glob\nfrom IPython.display import Image, display\nfor file in glob.glob('custom-results/combined_results/outputs/exp/*.jpg'):\n    display(Image(filename=file))\n")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"jpeg",src:a(366).Z,width:"2048",height:"1024"})),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"jpeg",src:a(6327).Z,width:"2048",height:"1024"})),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"jpeg",src:a(1908).Z,width:"2048",height:"1024"})),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"jpeg",src:a(130).Z,width:"2048",height:"1024"})),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"jpeg",src:a(1751).Z,width:"2048",height:"1024"})),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"jpeg",src:a(5517).Z,width:"2048",height:"1024"})),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"jpeg",src:a(4388).Z,width:"2048",height:"1024"})),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"jpeg",src:a(958).Z,width:"2048",height:"1024"})),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"jpeg",src:a(3315).Z,width:"2048",height:"1024"})),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"jpeg",src:a(4209).Z,width:"2048",height:"1024"})))}u.isMDXComponent=!0},366:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/index_15_0-40fb6c58df88cfb74f281297d53582a7.jpg"},6327:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/index_15_1-971525b9d0df1fba36591faa9e8c5f06.jpg"},1908:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/index_15_2-8ce07a1639ef6030b25db626854f8aca.jpg"},130:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/index_15_3-4c448feeccbb8393f0c2fc79281f158a.jpg"},1751:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/index_15_4-956a990f82a0a44c7c9a6947d919ec1f.jpg"},5517:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/index_15_5-440b253980106a724a55126ed44ed439.jpg"},4388:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/index_15_6-6882bb5eac5441f7e8aff22753519cdc.jpg"},958:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/index_15_7-c9c254c38e03cbcca34341f7e26af6cc.jpg"},3315:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/index_15_8-eaf6e19673296d321ff180f21df7791d.jpg"},4209:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/index_15_9-b78c2b716564aec687ec4bfe58daedf7.jpg"},2206:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/index_9_0-4937674d965c94f2bb088da521d27a8e.jpg"}}]);