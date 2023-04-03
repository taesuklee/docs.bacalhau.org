"use strict";(self.webpackChunkbacalhau_docs=self.webpackChunkbacalhau_docs||[]).push([[4048],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),u=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=u(e.components);return i.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},g=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=u(n),g=a,m=p["".concat(s,".").concat(g)]||p[g]||c[g]||o;return n?i.createElement(m,r(r({ref:t},d),{},{components:n})):i.createElement(m,r({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,r[1]=l;for(var u=2;u<o;u++)r[u]=n[u];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}g.displayName="MDXCreateElement"},1480:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var i=n(7462),a=(n(7294),n(3905));const o={sidebar_label:"GPU Support",sidebar_position:160,description:"How to enable GPU support on your Bacalhau node."},r="GPU Support",l={unversionedId:"running-node/gpu",id:"running-node/gpu",title:"GPU Support",description:"How to enable GPU support on your Bacalhau node.",source:"@site/docs/running-node/gpu.md",sourceDirName:"running-node",slug:"/running-node/gpu",permalink:"/running-node/gpu",draft:!1,editUrl:"https://github.com/bacalhau-project/docs.bacalhau.org/blob/main/docs/running-node/gpu.md",tags:[],version:"current",lastUpdatedAt:1680561498,formattedLastUpdatedAt:"Apr 3, 2023",sidebarPosition:160,frontMatter:{sidebar_label:"GPU Support",sidebar_position:160,description:"How to enable GPU support on your Bacalhau node."},sidebar:"documentationSidebar",previous:{title:"Test Network Locally",permalink:"/running-node/test-network"},next:{title:"Windows Support",permalink:"/running-node/windows-support"}},s={},u=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Unofficial GPU Node Setup",id:"unofficial-gpu-node-setup",level:3},{value:"GPU Node Configuration",id:"gpu-node-configuration",level:2},{value:"Adding Global GPU Limits",id:"adding-global-gpu-limits",level:3},{value:"Adding Job GPU Limits",id:"adding-job-gpu-limits",level:3},{value:"Limitations",id:"limitations",level:2}],d={toc:u},p="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"gpu-support"},"GPU Support"),(0,a.kt)("p",null,"Bacalhau supports GPUs out of the box, and defaults to allowing execution on all GPUs installed on the node."),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"Bacalhau makes the assumption that you have installed all the necessary NVIDIA drivers on your node. The Bacalhau client requires:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://get.docker.com/"},"Docker")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.nvidia.com/datacenter/tesla/tesla-installation-notes/index.html"},"cuda-drivers for your GPU")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/install-guide.html"},"NVIDIA Container Toolkit (nvidia-docker2)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.docker.com/engine/install/linux-postinstall/#manage-docker-as-a-non-root-user"},"permission to access Docker"))),(0,a.kt)("p",null,"You can test whether you have a working GPU setup with the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker run --rm --gpus all nvidia/cuda:11.0.3-base-ubuntu20.04 nvidia-smi\n")),(0,a.kt)("h3",{id:"unofficial-gpu-node-setup"},"Unofficial GPU Node Setup"),(0,a.kt)("p",null,"You should review the documented links above for official install instructions. For a quickstart, you can use:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt update\nsudo apt-get install -y linux-headers-$(uname -r)\ndistribution=$(. /etc/os-release;echo $ID$VERSION_ID | sed -e 's/\\.//g') && wget https://developer.download.nvidia.com/compute/cuda/repos/$distribution/x86_64/cuda-keyring_1.0-1_all.deb && sudo dpkg -i cuda-keyring_1.0-1_all.deb\nsudo apt-get update && sudo apt-get -y install cuda-drivers\ncurl https://get.docker.com | sh \\\n  && sudo systemctl --now enable docker\ndistribution=$(. /etc/os-release;echo $ID$VERSION_ID) \\\n      && curl -fsSL https://nvidia.github.io/libnvidia-container/gpgkey | sudo gpg --dearmor -o /usr/share/keyrings/nvidia-container-toolkit-keyring.gpg \\\n      && curl -s -L https://nvidia.github.io/libnvidia-container/$distribution/libnvidia-container.list | \\\n            sed 's#deb https://#deb [signed-by=/usr/share/keyrings/nvidia-container-toolkit-keyring.gpg] https://#g' | \\\n            sudo tee /etc/apt/sources.list.d/nvidia-container-toolkit.list\ndistribution=$(. /etc/os-release;echo $ID$VERSION_ID) \\\n      && curl -fsSL https://nvidia.github.io/libnvidia-container/gpgkey | sudo gpg --dearmor -o /usr/share/keyrings/nvidia-container-toolkit-keyring.gpg \\\n      && curl -s -L https://nvidia.github.io/libnvidia-container/experimental/$distribution/libnvidia-container.list | \\\n         sed 's#deb https://#deb [signed-by=/usr/share/keyrings/nvidia-container-toolkit-keyring.gpg] https://#g' | \\\n         sudo tee /etc/apt/sources.list.d/nvidia-container-toolkit.list\nsudo apt-get update\nsudo apt-get install -y nvidia-docker2\nsudo systemctl restart docker\nsudo groupadd docker && sudo usermod -aG docker $USER && newgrp docker \ndocker run --rm --gpus all nvidia/cuda:11.0.3-base-ubuntu20.04 nvidia-smi\n")),(0,a.kt)("p",null,"This was tested on a VM in GCP, in ",(0,a.kt)("inlineCode",{parentName:"p"},"europe-west1-b"),", of type ",(0,a.kt)("inlineCode",{parentName:"p"},"n1-highmem-4"),", with ",(0,a.kt)("inlineCode",{parentName:"p"},"1 x NVIDIA Tesla T4"),"."),(0,a.kt)("h2",{id:"gpu-node-configuration"},"GPU Node Configuration"),(0,a.kt)("p",null,"The following settings refer to the ",(0,a.kt)("inlineCode",{parentName:"p"},"bacalhau serve")," command. To see all settings, please refer to the ",(0,a.kt)("a",{parentName:"p",href:"/all-flags"},"CLI documentation"),"."),(0,a.kt)("h3",{id:"adding-global-gpu-limits"},"Adding Global GPU Limits"),(0,a.kt)("p",null,"To limit the number of GPUs that Bacalhau has access to, use the ",(0,a.kt)("inlineCode",{parentName:"p"},"limit-total-gpu")," flag."),(0,a.kt)("h3",{id:"adding-job-gpu-limits"},"Adding Job GPU Limits"),(0,a.kt)("p",null,"To limit the number of GPUs that individual jobs can use, use the ",(0,a.kt)("inlineCode",{parentName:"p"},"limit-job-gpu")," flag."),(0,a.kt)("h2",{id:"limitations"},"Limitations"),(0,a.kt)("p",null,"For limitations, see ",(0,a.kt)("a",{parentName:"p",href:"/next-steps/gpu#limitations"},"the GPU page in the getting started guide"),"."))}c.isMDXComponent=!0}}]);