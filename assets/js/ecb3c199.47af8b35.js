"use strict";(self.webpackChunkbacalhau_docs=self.webpackChunkbacalhau_docs||[]).push([[9716],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(n),h=r,m=d["".concat(s,".").concat(h)]||d[h]||p[h]||o;return n?a.createElement(m,l(l({ref:t},c),{},{components:n})):a.createElement(m,l({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4062:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_label:"csv-to-avro-or-parquet",sidebar_position:10},l="Convert CSV To Parquet Or Arrow",i={unversionedId:"examples/data-engineering/csv-to-avro-or-parquet/index",id:"examples/data-engineering/csv-to-avro-or-parquet/index",title:"Convert CSV To Parquet Or Arrow",description:"Open In Colab",source:"@site/docs/examples/data-engineering/csv-to-avro-or-parquet/index.md",sourceDirName:"examples/data-engineering/csv-to-avro-or-parquet",slug:"/examples/data-engineering/csv-to-avro-or-parquet/",permalink:"/examples/data-engineering/csv-to-avro-or-parquet/",draft:!1,editUrl:"https://github.com/bacalhau-project/docs.bacalhau.org/blob/main/docs/examples/data-engineering/csv-to-avro-or-parquet/index.md",tags:[],version:"current",lastUpdatedAt:1676454498,formattedLastUpdatedAt:"Feb 15, 2023",sidebarPosition:10,frontMatter:{sidebar_label:"csv-to-avro-or-parquet",sidebar_position:10},sidebar:"documentationSidebar",previous:{title:"Ethereum Blockchain Analysis",permalink:"/examples/data-engineering/blockchain-etl/"},next:{title:"Oceanography - Data Conversion",permalink:"/examples/data-engineering/oceanography-conversion/"}},s={},u=[{value:"Introduction",id:"introduction",level:2},{value:"Running Locally\u200b",id:"running-locally",level:2},{value:"Building a Docker container (Optional)",id:"building-a-docker-container-optional",level:3},{value:"Dockerfile",id:"dockerfile",level:3},{value:"Running on Bacalhau",id:"running-on-bacalhau",level:2}],c={toc:u};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"convert-csv-to-parquet-or-arrow"},"Convert CSV To Parquet Or Arrow"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://colab.research.google.com/github/bacalhau-project/examples/blob/main/data-engineering/csv-to-avro-or-parquet/index.ipynb"},(0,r.kt)("img",{parentName:"a",src:"https://colab.research.google.com/assets/colab-badge.svg",alt:"Open In Colab"})),"\n",(0,r.kt)("a",{parentName:"p",href:"https://mybinder.org/v2/gh/bacalhau-project/examples/HEAD?labpath=data-engineering/csv-to-avro-or-parquet/index.ipynb"},(0,r.kt)("img",{parentName:"a",src:"https://mybinder.org/badge.svg",alt:"Open In Binder"}))),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"Converting from csv to parquet or avro reduces the size of file and allows for faster read and write speeds, using bacalhau you can convert your csv files stored on ipfs or on the web without\nThe need to download files and install dependencies locally"),(0,r.kt)("p",null,"In this example we will convert a csv file from a url to parquet format and save the converted parquet file to IPFS"),(0,r.kt)("h2",{id:"running-locally"},"Running Locally\u200b"),(0,r.kt)("p",null,"Installing dependencies"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\ngit clone https://github.com/js-ts/csv_to_avro_or_parquet/\npip3 install -r csv_to_avro_or_parquet/requirements.txt\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"%cd csv_to_avro_or_parquet\n")),(0,r.kt)("p",null,"Downloading the test dataset"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"!wget https://raw.githubusercontent.com/js-ts/csv_to_avro_or_parquet/master/movies.csv  \n")),(0,r.kt)("p",null,"Running the conversion script"),(0,r.kt)("p",null,"arguments"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"python converter.py path_to_csv path_to_result_file extension\n")),(0,r.kt)("p",null,"Running the script"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\npython3 src/converter.py ./movies.csv  ./movies.parquet parquet\n")),(0,r.kt)("p",null,"viewing the parquet file"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"import pandas as pd\npd.read_parquet('./movies.parquet').head()\n")),(0,r.kt)("p",null,"title\trating\tyear\truntime\n0\tAlmost Famous\tR\t2000\t122\n1\tAmerican Pie\tR\t1999\t95\n2\tBack to the Future\tPG\t1985\t116\n3\tBlade Runner\tR\t1982\t117\n4\tBlood for Dracula\tR\t1974\t106"),(0,r.kt)("h3",{id:"building-a-docker-container-optional"},"Building a Docker container (Optional)"),(0,r.kt)("p",null,"Note* you can skip this section entirely and directly go to running on bacalhau"),(0,r.kt)("p",null,"To use Bacalhau, you need to package your code in an appropriate format. The developers have already pushed a container for you to use, but if you want to build your own, you can follow the steps below. You can view a ",(0,r.kt)("a",{parentName:"p",href:"https://docs.bacalhau.org/examples/workload-onboarding/custom-containers/"},"dedicated container example")," in the documentation."),(0,r.kt)("h3",{id:"dockerfile"},"Dockerfile"),(0,r.kt)("p",null,"In this step, you will create a ",(0,r.kt)("inlineCode",{parentName:"p"},"Dockerfile")," to create an image. The ",(0,r.kt)("inlineCode",{parentName:"p"},"Dockerfile")," is a text document that contains the commands used to assemble the image. First, create the ",(0,r.kt)("inlineCode",{parentName:"p"},"Dockerfile"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"FROM python:3.8\n\nRUN apt update && apt install git\n\nRUN git clone https://github.com/js-ts/Sparkov_Data_Generation/\n\nWORKDIR /Sparkov_Data_Generation/\n\nRUN pip3 install -r requirements.txt\n")),(0,r.kt)("p",null,"To Build the docker container run the docker build command"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"docker build -t hub-user/repo-name:tag .\n")),(0,r.kt)("p",null,"Please replace"),(0,r.kt)("p",null,"hub-user with your docker hub username, If you don\u2019t have a docker hub account Follow these instructions to create docker account, and use the username of the account you created"),(0,r.kt)("p",null,"repo-name This is the name of the container, you can name it anything you want"),(0,r.kt)("p",null,"tag This is not required but you can use the latest tag"),(0,r.kt)("p",null,"After you have build the container, the next step is to test it locally and then push it docker hub"),(0,r.kt)("p",null,"Now you can push this repository to the registry designated by its name or tag."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"}," docker push hub-user/repo-name:tag\n")),(0,r.kt)("p",null,"After the repo image has been pushed to docker hub, we can now use the container for running on bacalhau"),(0,r.kt)("h2",{id:"running-on-bacalhau"},"Running on Bacalhau"),(0,r.kt)("p",null,"After the repo image has been pushed to docker hub, we can now use the container for running on bacalhau"),(0,r.kt)("p",null,"This command is similar to what we have run locally but we change the output directory to the outputs folder so that the results are saved to IPFS"),(0,r.kt)("p",null,"we will show you how you can mount the script from a IPFS as we as from an URL"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\ncurl -sL https://get.bacalhau.org/install.sh | bash\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Your system is linux_amd64\nNo BACALHAU detected. Installing fresh BACALHAU CLI...\nGetting the latest BACALHAU CLI...\nInstalling v0.3.11 BACALHAU CLI...\nDownloading https://github.com/filecoin-project/bacalhau/releases/download/v0.3.11/bacalhau_v0.3.11_linux_amd64.tar.gz ...\nDownloading sig file https://github.com/filecoin-project/bacalhau/releases/download/v0.3.11/bacalhau_v0.3.11_linux_amd64.tar.gz.signature.sha256 ...\nVerified OK\nExtracting tarball ...\nNOT verifying Bin\nbacalhau installed into /usr/local/bin successfully.\nClient Version: v0.3.11\nServer Version: v0.3.11\n")),(0,r.kt)("p",null,"Mounting the csv file from IPFS"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash --out job_id\nbacalhau docker run \\\n-i QmTAQMGiSv9xocaB4PUCT5nSBHrf9HZrYj21BAZ5nMTY2W  \\\n--wait \\\n--id-only \\\n jsacex/csv-to-arrow-or-parquet \\\n-- python3 src/converter.py ../inputs/transactions.csv  ../outputs/transactions.parquet parquet\n")),(0,r.kt)("p",null,"Mounting the csv file from an URL"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"bacalhau docker run \\\n-u https://raw.githubusercontent.com/js-ts/csv_to_avro_or_parquet/master/movies.csv   jsacex/csv-to-arrow-or-parquet \\\n-- python3 src/converter.py ../inputs/movies.csv  ../outputs/movies.parquet parquet\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"%env JOB_ID={job_id}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"env: JOB_ID=94774248-1d07-4121-aac8-451aca4a636e\n")),(0,r.kt)("p",null,"Running the commands will output a UUID that represents the job that was created. You can check the status of the job with the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\nbacalhau list --id-filter ${JOB_ID}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\x1b[92;100m CREATED  \x1b[0m\x1b[92;100m ID       \x1b[0m\x1b[92;100m JOB                     \x1b[0m\x1b[92;100m STATE     \x1b[0m\x1b[92;100m VERIFIED \x1b[0m\x1b[92;100m PUBLISHED               \x1b[0m\n\x1b[97;40m 10:19:19 \x1b[0m\x1b[97;40m 94774248 \x1b[0m\x1b[97;40m Docker jsacex/csv-to... \x1b[0m\x1b[97;40m Completed \x1b[0m\x1b[97;40m          \x1b[0m\x1b[97;40m /ipfs/QmdHJaMmQHs9fE... \x1b[0m\n")),(0,r.kt)("p",null,'Where it says "',(0,r.kt)("inlineCode",{parentName:"p"},"Completed "),'", that means the job is done, and we can get the results.'),(0,r.kt)("p",null,"To find out more information about your job, run the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\nbacalhau describe ${JOB_ID}\n")),(0,r.kt)("p",null,"If you see that the job has completed and there are no errors, then you can download the results with the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\nrm -rf results && mkdir -p results\nbacalhau get $JOB_ID --output-dir results\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Fetching results of job '94774248-1d07-4121-aac8-451aca4a636e'...\nResults for job '94774248-1d07-4121-aac8-451aca4a636e' have been written to...\nresults\n\n\n2022/11/12 10:20:09 failed to sufficiently increase receive buffer size (was: 208 kiB, wanted: 2048 kiB, got: 416 kiB). See https://github.com/lucas-clemente/quic-go/wiki/UDP-Receive-Buffer-Size for details.\n")),(0,r.kt)("p",null,"After the download has finished you should\nsee the following contents in results directory"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\nls results/combined_results/outputs\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"transactions.parquet\n")),(0,r.kt)("p",null,"Viewing the output"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"import pandas as pd\nimport os\npd.read_parquet('results/combined_results/outputs/transactions.parquet')\n")))}p.isMDXComponent=!0}}]);