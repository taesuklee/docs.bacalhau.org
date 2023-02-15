"use strict";(self.webpackChunkbacalhau_docs=self.webpackChunkbacalhau_docs||[]).push([[3603],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),m=i,h=c["".concat(l,".").concat(m)]||c[m]||d[m]||o;return n?a.createElement(h,r(r({ref:t},u),{},{components:n})):a.createElement(h,r({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var p=2;p<o;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},6565:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=n(7462),i=(n(7294),n(3905));const o={sidebar_label:"Stable Diffusion - GPU",sidebar_position:2},r="Stable Diffusion on a GPU",s={unversionedId:"examples/model-inference/stable-diffusion-gpu/index",id:"examples/model-inference/stable-diffusion-gpu/index",title:"Stable Diffusion on a GPU",description:"Open In Colab",source:"@site/docs/examples/model-inference/stable-diffusion-gpu/index.md",sourceDirName:"examples/model-inference/stable-diffusion-gpu",slug:"/examples/model-inference/stable-diffusion-gpu/",permalink:"/examples/model-inference/stable-diffusion-gpu/",draft:!1,editUrl:"https://github.com/bacalhau-project/docs.bacalhau.org/blob/main/docs/examples/model-inference/stable-diffusion-gpu/index.md",tags:[],version:"current",lastUpdatedAt:1676454498,formattedLastUpdatedAt:"Feb 15, 2023",sidebarPosition:2,frontMatter:{sidebar_label:"Stable Diffusion - GPU",sidebar_position:2},sidebar:"documentationSidebar",previous:{title:"Stable Diffusion - CPU",permalink:"/examples/model-inference/stable-diffusion-cpu/"},next:{title:"Object Detection - YOLOv5",permalink:"/examples/model-inference/object-detection-yolo5/"}},l={},p=[{value:"TL;DR",id:"tldr",level:3},{value:"1. Development",id:"1-development",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Testing the Code",id:"testing-the-code",level:3},{value:"Prepare a Script",id:"prepare-a-script",level:3},{value:"Further Examples",id:"further-examples",level:3},{value:"Prompt",id:"prompt",level:4},{value:"Number of iterations",id:"number-of-iterations",level:4},{value:"Batch Size (No of images to generate)",id:"batch-size-no-of-images-to-generate",level:4},{value:"2. Running Stable Diffusion on Bacalhau with a GPU",id:"2-running-stable-diffusion-on-bacalhau-with-a-gpu",level:2},{value:"Generating an Image Using Stable Diffusion on a GPU using Bacalhau",id:"generating-an-image-using-stable-diffusion-on-a-gpu-using-bacalhau",level:3}],u={toc:p};function d(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"stable-diffusion-on-a-gpu"},"Stable Diffusion on a GPU"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://colab.research.google.com/github/bacalhau-project/examples/blob/main/model-inference/stable-diffusion-gpu/index.ipynb"},(0,i.kt)("img",{parentName:"a",src:"https://colab.research.google.com/assets/colab-badge.svg",alt:"Open In Colab"})),"\n",(0,i.kt)("a",{parentName:"p",href:"https://mybinder.org/v2/gh/bacalhau-project/examples/HEAD?labpath=model-inference/stable-diffusion-gpu/index.ipynb"},(0,i.kt)("img",{parentName:"a",src:"https://mybinder.org/badge.svg",alt:"Open In Binder"}))),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/CompVis/stable-diffusion"},"Stable Diffusion")," is a state of the art text-to-image model that generates images from text and was developed as an open source alternative to ",(0,i.kt)("a",{parentName:"p",href:"https://openai.com/dall-e-2/"},"DALL\xb7E 2"),". It is based on a ",(0,i.kt)("a",{parentName:"p",href:"https://arxiv.org/abs/2102.09672"},"Diffusion Probabilistic Model")," and uses a ",(0,i.kt)("a",{parentName:"p",href:"https://arxiv.org/abs/1706.03762"},"Transformer")," to generate images from text."),(0,i.kt)("p",null,"This example demonstrates how to use stable diffusion on a GPU and run it on the ",(0,i.kt)("a",{parentName:"p",href:"https://www.bacalhau.org/"},"Bacalhau")," network. The first section describes the development of the code and the container. The section section demonstrates how to run the job using ",(0,i.kt)("a",{parentName:"p",href:"https://www.bacalhau.org/"},"Bacalhau"),"."),(0,i.kt)("p",null,"The following image is an example generated by this model."),(0,i.kt)("h3",{id:"tldr"},"TL;DR"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'bacalhau docker run --gpu 1 ghcr.io/bacalhau-project/examples/stable-diffusion-gpu:0.0.1 -- python main.py --o ./outputs --p "cod swimming through data"\n')),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(1442).Z,width:"512",height:"512"})),(0,i.kt)("h2",{id:"1-development"},"1. Development"),(0,i.kt)("p",null,"This stable diffusion example is based on the Keras/Tensorflow implementation of the model available ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/fchollet/stable-diffusion-tensorflow"},"here"),". You might also be interested in the Pytorch oriented ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/huggingface/diffusers"},"diffusers library"),"."),(0,i.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("p",null,"In order to run this example you need:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A Debian-flavoured Linux (although you ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/fchollet/stable-diffusion-tensorflow/blob/master/requirements_m1.txt"},"might be able")," to get it working on M1 macs)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.docker.com/get-docker/"},"Docker")),(0,i.kt)("li",{parentName:"ul"},"A GPU -- this was developed against a Tesla T4")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\npip install git+https://github.com/fchollet/stable-diffusion-tensorflow --upgrade --quiet\npip install tensorflow tensorflow_addons ftfy --upgrade --quiet\npip install tqdm\napt install --allow-change-held-packages libcudnn8=8.1.0.77-1+cuda11.2\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Looking in indexes: https://pypi.org/simple, https://us-python.pkg.dev/colab-wheels/public/simple/\nRequirement already satisfied: tqdm in /usr/local/lib/python3.7/dist-packages (4.64.1)\nReading package lists...\nBuilding dependency tree...\nReading state information...\nThe following package was automatically installed and is no longer required:\n  libnvidia-common-460\nUse 'apt autoremove' to remove it.\nThe following packages will be REMOVED:\n  libcudnn8-dev\nThe following held packages will be changed:\n  libcudnn8\nThe following packages will be DOWNGRADED:\n  libcudnn8\n0 upgraded, 0 newly installed, 1 downgraded, 1 to remove and 20 not upgraded.\nNeed to get 430 MB of archives.\nAfter this operation, 1,392 MB disk space will be freed.\nGet:1 https://developer.download.nvidia.com/compute/cuda/repos/ubuntu1804/x86_64  libcudnn8 8.1.0.77-1+cuda11.2 [430 MB]\nFetched 430 MB in 6s (66.2 MB/s)\n(Reading database ... 123941 files and directories currently installed.)\nRemoving libcudnn8-dev (8.1.1.33-1+cuda11.2) ...\nupdate-alternatives: removing manually selected alternative - switching libcudnn to auto mode\ndpkg: warning: downgrading libcudnn8 from 8.1.1.33-1+cuda11.2 to 8.1.0.77-1+cuda11.2\n(Reading database ... 123918 files and directories currently installed.)\nPreparing to unpack .../libcudnn8_8.1.0.77-1+cuda11.2_amd64.deb ...\nUnpacking libcudnn8 (8.1.0.77-1+cuda11.2) over (8.1.1.33-1+cuda11.2) ...\nSetting up libcudnn8 (8.1.0.77-1+cuda11.2) ...\n\n\n\nWARNING: apt does not have a stable CLI interface. Use with caution in scripts.\n")),(0,i.kt)("h3",{id:"testing-the-code"},"Testing the Code"),(0,i.kt)("p",null,"Quite often libraries aren't pinned, or code gets updated and breaks the docs, and even the simplest examples don't work. To derisk this, first I will try the code in the README to double check that the code is working as the author expected."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"When you run this code for the first time, it will download the pretrained weights, which may add a short delay.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'from stable_diffusion_tf.stable_diffusion import Text2Image\nfrom PIL import Image\n\ngenerator = Text2Image( \n    img_height=512,\n    img_width=512,\n    jit_compile=False,  # You can try True as well (different performance profile)\n)\nimg = generator.generate(\n    "DSLR photograph of an astronaut riding a horse",\n    num_steps=50,\n    unconditional_guidance_scale=7.5,\n    temperature=1,\n    batch_size=1,\n)\npil_img = Image.fromarray(img[0])\ndisplay(pil_img)\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Downloading data from https://github.com/openai/CLIP/blob/main/clip/bpe_simple_vocab_16e6.txt.gz?raw=true\n1356917/1356917 [==============================] - 0s 0us/step\nDownloading data from https://huggingface.co/fchollet/stable-diffusion/resolve/main/text_encoder.h5\n492456896/492456896 [==============================] - 3s 0us/step\nDownloading data from https://huggingface.co/fchollet/stable-diffusion/resolve/main/diffusion_model.h5\n3439035312/3439035312 [==============================] - 36s 0us/step\nDownloading data from https://huggingface.co/fchollet/stable-diffusion/resolve/main/decoder.h5\n198152112/198152112 [==============================] - 1s 0us/step\n\n\n  0   1: 100%|\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588| 50/50 [01:10<00:00,  1.42s/it]\n")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"png",src:n(5528).Z,width:"512",height:"512"})),(0,i.kt)("p",null,"That's great, it works! But it's used up all the GPU RAM."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"If you're interested, check the GPU RAM usage now you've run the code. You'll see that it's sucked up many GBs and depending on what GPU you're running, it may OOM if you run this again."),(0,i.kt)("p",{parentName:"admonition"},"You can try and reduce RAM usage by playing with batch sizes (although it is only set to 1 above!) or more carefully controlling the tensorflow session.")),(0,i.kt)("p",null,"For now, let's ignore this and clear the GPU memory with numba so it works again next time. This won't be required when running in a single-shot manner."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\npip install numba\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Looking in indexes: https://pypi.org/simple, https://us-python.pkg.dev/colab-wheels/public/simple/\nRequirement already satisfied: numba in /usr/local/lib/python3.7/dist-packages (0.56.3)\nRequirement already satisfied: importlib-metadata in /usr/local/lib/python3.7/dist-packages (from numba) (4.13.0)\nRequirement already satisfied: numpy<1.24,>=1.18 in /usr/local/lib/python3.7/dist-packages (from numba) (1.21.6)\nRequirement already satisfied: setuptools in /usr/local/lib/python3.7/dist-packages (from numba) (57.4.0)\nRequirement already satisfied: llvmlite<0.40,>=0.39.0dev0 in /usr/local/lib/python3.7/dist-packages (from numba) (0.39.1)\nRequirement already satisfied: typing-extensions>=3.6.4 in /usr/local/lib/python3.7/dist-packages (from importlib-metadata->numba) (4.1.1)\nRequirement already satisfied: zipp>=0.5 in /usr/local/lib/python3.7/dist-packages (from importlib-metadata->numba) (3.9.0)\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"# clearing the GPU memory \nfrom numba import cuda \ndevice = cuda.get_current_device()\ndevice.reset()\n")),(0,i.kt)("h3",{id:"prepare-a-script"},"Prepare a Script"),(0,i.kt)("p",null,"You need a script to execute when we submit our job. The code below is functionally the same as above, but it also includes argument parsing to be able to customize the generator. This code is a slightly modified version of the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/fchollet/stable-diffusion-tensorflow/blob/master/text2image.py"},"text2image.py script in the original repository"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'%%writefile main.py\nimport argparse\nfrom stable_diffusion_tf.stable_diffusion import Text2Image\nfrom PIL import Image\nimport os\nparser = argparse.ArgumentParser(description="Stable Diffusion")\nparser.add_argument("--h",dest="height", type=int,help="height of the image",default=512)\nparser.add_argument("--w",dest="width", type=int,help="width of the image",default=512)\nparser.add_argument("--p",dest="prompt", type=str,help="Description of the image you want to generate",default="cat")\nparser.add_argument("--n",dest="numSteps", type=int,help="Number of Steps",default=50)\nparser.add_argument("--u",dest="unconditionalGuidanceScale", type=float,help="Number of Steps",default=7.5)\nparser.add_argument("--t",dest="temperature", type=int,help="Number of Steps",default=1)\nparser.add_argument("--b",dest="batchSize", type=int,help="Number of Images",default=1)\nparser.add_argument("--o",dest="output", type=str,help="Output Folder where to store the Image",default="./")\n\nargs=parser.parse_args()\nheight=args.height\nwidth=args.width\nprompt=args.prompt\nnumSteps=args.numSteps\nunconditionalGuidanceScale=args.unconditionalGuidanceScale\ntemperature=args.temperature\nbatchSize=args.batchSize\noutput=args.output\n\ngenerator = Text2Image(\n    img_height=height,\n    img_width=width,\n    jit_compile=False,  # You can try True as well (different performance profile)\n)\n\nimg = generator.generate(\n    prompt,\n    num_steps=numSteps,\n    unconditional_guidance_scale=unconditionalGuidanceScale,\n    temperature=temperature,\n    batch_size=batchSize,\n)\nfor i in range(0,batchSize):\n  pil_img = Image.fromarray(img[i])\n  image = pil_img.save(f"{output}/image{i}.png")\n\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Writing main.py\n")),(0,i.kt)("p",null,"You should test that your script works! Let's run it again."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\npython main.py\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Process is interrupted.\n")),(0,i.kt)("p",null,"Viewing the outputted image"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'import IPython.display as display\ndisplay.Image("image0.png")\n')),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"png",src:n(1375).Z,width:"512",height:"512"})),(0,i.kt)("p",null,"For reference, here is a full list of arguments that you can pass to the script."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"optional arguments:\n  -h, --help            show this help message and exit\n  --h HEIGHT            height of the image\n  --w WIDTH             width of the image\n  --p PROMPT            Description of the image you want to generate\n  --n NUMSTEPS          Number of Steps\n  --u UNCONDITIONALGUIDANCESCALE\n                        UNCONDITIONALGUIDANCESCALE\n  --t TEMPERATURE       Temparature\n  --b BATCHSIZE         Number of Images to generate\n  --o OUTPUT            Output Folder where to store the Image\n")),(0,i.kt)("h3",{id:"further-examples"},"Further Examples"),(0,i.kt)("p",null,"The following presents some examples that you can try."),(0,i.kt)("h4",{id:"prompt"},"Prompt"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},'python stable-diffusion.py --p "cat with three eyes"')),(0,i.kt)("h4",{id:"number-of-iterations"},"Number of iterations"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'python stable-diffusion.py --p "cat with three eyes" --n 100\n')),(0,i.kt)("h4",{id:"batch-size-no-of-images-to-generate"},"Batch Size (No of images to generate)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'python stable-diffusion.py --p "cat with three eyes" --b 2\n')),(0,i.kt)("h2",{id:"2-running-stable-diffusion-on-bacalhau-with-a-gpu"},"2. Running Stable Diffusion on Bacalhau with a GPU"),(0,i.kt)("p",null,"Now we have a working example, we can convert it into a format that allows us to perform inference in a distributed environment."),(0,i.kt)("p",null,"First we will create a ",(0,i.kt)("inlineCode",{parentName:"p"},"Dockerfile")," to containerize the inference code. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-Dockerfile"},"FROM tensorflow/tensorflow:2.10.0-gpu\n\nRUN apt-get -y update\n\nRUN apt-get -y install --allow-change-held-packages libcudnn8=8.1.0.77-1+cuda11.2 git\n\nRUN python3 -m pip install --upgrade pip\n\nRUN python -m pip install regex tqdm Pillow tensorflow tensorflow_addons ftfy  --upgrade --quiet\n\nRUN pip install git+https://github.com/fchollet/stable-diffusion-tensorflow --upgrade --quiet\n\nADD main.py main.py\n\n# Run once so it downloads and caches the pre-trained weights\nRUN python main.py --n 1\n")),(0,i.kt)("p",null,"The dockerfile leverages the latest official tensorflow GPU image and then installs other dependencies like ",(0,i.kt)("inlineCode",{parentName:"p"},"git"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"CUDA")," packages and other image related necessities. See ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/fchollet/stable-diffusion-tensorflow/blob/master/requirements.txt"},"the original repository")," for the expected requirements."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Note the last line, which runs the script once to trigger the download of the pretrained weights. This is necessary for Bacalhau, because Bacalhau jobs do not allow access to the internet.")),(0,i.kt)("p",null,"Build the container in the usual way. Replace the org/repo with your own if you are pushing to a custom registry."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"docker buildx build --platform linux/amd64 --push -t ghcr.io/bacalhau-project/examples/stable-diffusion-gpu:0.0.1 .\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"!command -v bacalhau >/dev/null 2>&1 || (export BACALHAU_INSTALL_DIR=.; curl -sL https://get.bacalhau.org/install.sh | bash)\npath=!echo $PATH\n%env PATH=./:{path[0]}\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Your system is linux_amd64\nNo BACALHAU detected. Installing fresh BACALHAU CLI...\nGetting the latest BACALHAU CLI...\nInstalling v0.3.3 BACALHAU CLI...\nDownloading https://github.com/filecoin-project/bacalhau/releases/download/v0.3.3/bacalhau_v0.3.3_linux_amd64.tar.gz ...\nDownloading sig file https://github.com/filecoin-project/bacalhau/releases/download/v0.3.3/bacalhau_v0.3.3_linux_amd64.tar.gz.signature.sha256 ...\nVerified OK\nExtracting tarball ...\nNOT verifying Bin\nbacalhau installed into . successfully.\nClient Version: v0.3.3\nServer Version: v0.3.3\nenv: PATH=./:/opt/bin:/usr/local/nvidia/bin:/usr/local/cuda/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/tools/node/bin:/tools/google-cloud-sdk/bin\n")),(0,i.kt)("h3",{id:"generating-an-image-using-stable-diffusion-on-a-gpu-using-bacalhau"},"Generating an Image Using Stable Diffusion on a GPU using Bacalhau"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.bacalhau.org/"},"Bacalhau")," is a distributed computing platform that allows you to run jobs on a network of computers. It is designed to be easy to use and to run on a variety of hardware. In this example, we will use it to run the stable diffusion model on a GPU."),(0,i.kt)("p",null,"To submit a job, you can use the Bacalhau CLI. The following command passes a prompt to the model and generates an image in the outputs directory."),(0,i.kt)("p",null,"The main difference in the example below compared to all the other examples is the addition of the ",(0,i.kt)("inlineCode",{parentName:"p"},"--gpu X")," flag, which tells Bacalhau to only schedule the job on nodes that have ",(0,i.kt)("inlineCode",{parentName:"p"},"X")," GPUs free. You can ",(0,i.kt)("a",{parentName:"p",href:"../../../next-steps/gpu"},"read more about GPU support")," in the documentation. "),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"This will take about 5 minutes to complete and is mainly due to the cold-start GPU setup time. This is faster than the CPU version, but you might still want to grab some fruit or plan your lunchtime run."),(0,i.kt)("p",{parentName:"admonition"},"Furthermore, the container itself is about 10GB, so it might take a while to download on the node if it isn't cached.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'%%bash --out job_id\nbacalhau docker run --id-only --gpu 1 ghcr.io/bacalhau-project/examples/stable-diffusion-gpu:0.0.1 -- python main.py --o ./outputs --p "meme about tensorflow"\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"%env JOB_ID={job_id}\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"env: JOB_ID=f126c9a5-0fd6-41c5-88e2-2d66a64a1317\n")),(0,i.kt)("p",null,"Running the commands will output a UUID that represents the job that was created. You can check the status of the job with the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\nbacalhau list --id-filter ${JOB_ID}\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\x1b[92;100m CREATED  \x1b[0m\x1b[92;100m ID       \x1b[0m\x1b[92;100m JOB                     \x1b[0m\x1b[92;100m STATE     \x1b[0m\x1b[92;100m VERIFIED \x1b[0m\x1b[92;100m PUBLISHED               \x1b[0m\n\x1b[97;40m 10:36:05 \x1b[0m\x1b[97;40m f126c9a5 \x1b[0m\x1b[97;40m Docker ghcr.io/bacal... \x1b[0m\x1b[97;40m Completed \x1b[0m\x1b[97;40m          \x1b[0m\x1b[97;40m /ipfs/QmatWywziRqxTh... \x1b[0m\n")),(0,i.kt)("p",null,'Where it says "',(0,i.kt)("inlineCode",{parentName:"p"},"Completed "),'", that means the job is done, and we can get the results.'),(0,i.kt)("p",null,"To find out more information about your job, run the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\nbacalhau describe ${JOB_ID}\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'APIVersion: V1alpha1\nClientID: 2e9bed59a71d1334f6576e314fa1e3e0fdb6a309396f33381fc5bf9ae1bcbf51\nCreatedAt: "2022-10-19T10:36:05.655553494Z"\nDeal:\n  Concurrency: 1\nExecutionPlan:\n  ShardsTotal: 1\nID: f126c9a5-0fd6-41c5-88e2-2d66a64a1317\nJobState:\n  Nodes:\n    QmRjLYuFU1wAhWh3u94cm7DgbLRBTkUhCTAx77VyXBDgr4:\n      Shards:\n        "0":\n          NodeId: QmRjLYuFU1wAhWh3u94cm7DgbLRBTkUhCTAx77VyXBDgr4\n          PublishedResults:\n            CID: QmatWywziRqxThuovctYRcPXPXJpcAWmJB56WyNwtRorWq\n            Name: job-f126c9a5-0fd6-41c5-88e2-2d66a64a1317-shard-0-host-QmRjLYuFU1wAhWh3u94cm7DgbLRBTkUhCTAx77VyXBDgr4\n            StorageSource: IPFS\n          RunOutput:\n            exitCode: 0\n            runnerError: ""\n            stderr: "0:13,  1.07s/it]\\r 12 241:  74%|\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u258d  | 37/50 [01:07<00:13,\n              \\ 1.07s/it]\\r 12 241:  76%|\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u258c  | 38/50 [01:08<00:12,  1.07s/it]\\r\n              11 221:  76%|\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u258c  | 38/50 [01:08<00:12,  1.07s/it]\\r 11 221:  78%|\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u258a\n              \\ | 39/50 [01:09<00:11,  1.07s/it]\\r 10 201:  78%|\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u258a  | 39/50\n              [01:09<00:11,  1.07s/it]\\r 10 201:  80%|\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588  | 40/50 [01:10<00:10,\n              \\ 1.07s/it]\\r  9 181:  80%|\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588  | 40/50 [01:10<00:10,  1.07s/it]\\r\n              \\ 9 181:  82%|\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u258f | 41/50 [01:11<00:09,  1.07s/it]\\r  8 161:  82%|\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u258f\n              | 41/50 [01:11<00:09,  1.07s/it]\\r  8 161:  84%|\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u258d | 42/50 [01:12<00:08,\n              \\ 1.07s/it]\\r  7 141:  84%|\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u258d | 42/50 [01:12<00:08,  1.07s/it]\\r\n              \\ 7 141:  86%|\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u258c | 43/50 [01:13<00:07,  1.07s/it]\\r  6 121:  86%|\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u258c\n              | 43/50 [01:13<00:07,  1.07s/it]\\r  6 121:  88%|\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u258a | 44/50 [01:14<00:06,\n              \\ 1.07s/it]\\r  5 101:  88%|\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u258a | 44/50 [01:14<00:06,  1.07s/it]\\r\n              \\ 5 101:  90%|\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588 | 45/50 [01:15<00:05,  1.07s/it]\\r  4  81:  90%|\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\n              | 45/50 [01:15<00:05,  1.07s/it]\\r  4  81:  92%|\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u258f| 46/50 [01:16<00:04,\n              \\ 1.08s/it]\\r  3  61:  92%|\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u258f| 46/50 [01:16<00:04,  1.08s/it]\\r\n              \\ 3  61:  94%|\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u258d| 47/50 [01:17<00:03,  1.08s/it]\\r  2  41:  94%|\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u258d|\n              47/50 [01:17<00:03,  1.08s/it]\\r  2  41:  96%|\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u258c| 48/50 [01:19<00:02,\n              \\ 1.08s/it]\\r  1  21:  96%|\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u258c| 48/50 [01:19<00:02,  1.08s/it]\\r\n              \\ 1  21:  98%|\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u258a| 49/50 [01:20<00:01,  1.08s/it]\\r  0   1:  98%|\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u258a|\n              49/50 [01:20<00:01,  1.08s/it]\\r  0   1: 100%|\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588| 50/50 [01:21<00:00,\n              \\ 1.08s/it]\\r  0   1: 100%|\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588| 50/50 [01:21<00:00,  1.62s/it]"\n            stderrtruncated: true\n            stdout: ""\n            stdouttruncated: false\n          State: Completed\n          Status: \'Got results proposal of length: 0\'\n          VerificationResult:\n            Complete: true\n            Result: true\n    QmdMDhqqpkw2cAY1dk45cwL8PsKDexYKewN7thrF2TZeUe:\n      Shards:\n        "0":\n          NodeId: QmdMDhqqpkw2cAY1dk45cwL8PsKDexYKewN7thrF2TZeUe\n          PublishedResults: {}\n          State: Cancelled\n          VerificationResult: {}\nRequesterNodeID: QmXaXu9N5GNetatsvwnTfQqNtSeKAD6uCmarbh3LMRYAcF\nRequesterPublicKey: CAASpgIwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQCehDIWl72XKJi1tsrYM9JjAWt3n6hNzrCA+IVRXixK1sJVTLMpsxEP8UKJI+koAWkAUuY8yi6DMzot0owK4VpM3PYp34HdKi2hTjzM8pjCVb70XVXt6k9bzj4KmbiQTuEkQfvwIRmgxb2jrkRdTpZmhMb1Q7StR/nrGa/bx75Vpupx1EYH6+LixYnnV5WbCUK/kjpBW8SF5v+f9ZO61KHd9DMpdhJnzocTGq17tAjHh3birke0xlP98JjxlMkzzvIAuFsnH0zBIgjmHDA1Yi5DcOPWgE0jUfGlSDC1t2xITVoofHQcXDjkHZE6OhxswNYPd7cnTf9OppLddFdQnga5AgMBAAE=\nSpec:\n  Docker:\n    Entrypoint:\n    - python\n    - main.py\n    - --o\n    - ./outputs\n    - --p\n    - meme about tensorflow\n    Image: ghcr.io/bacalhau-project/examples/stable-diffusion-gpu:0.0.1\n  Engine: Docker\n  Language:\n    JobContext: {}\n  Publisher: Estuary\n  Resources:\n    GPU: "1"\n  Sharding:\n    BatchSize: 1\n    GlobPatternBasePath: /inputs\n  Verifier: Noop\n  outputs:\n  - Name: outputs\n    StorageSource: IPFS\n    path: /outputs\n')),(0,i.kt)("p",null,"If you see that the job has completed and there are no errors, then you can download the results with the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\nrm -rf results && mkdir -p results\nbacalhau get $JOB_ID --output-dir results\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Fetching results of job 'f126c9a5-0fd6-41c5-88e2-2d66a64a1317'...\n\n2022/10/19 10:40:30 failed to sufficiently increase receive buffer size (was: 208 kiB, wanted: 2048 kiB, got: 416 kiB). See https://github.com/lucas-clemente/quic-go/wiki/UDP-Receive-Buffer-Size for details.\n")),(0,i.kt)("p",null,"After the download has finished you should\nsee the following contents in results directory"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\nls results/volumes/outputs\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"image0.png\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'import IPython.display as display\ndisplay.Image("results/volumes/outputs/image0.png")\n')),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"png",src:n(2919).Z,width:"512",height:"512"})))}d.isMDXComponent=!0},1442:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/image0-97d9cc068b5879d6cc88f7ec68535eea.png"},1375:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/index_14_0-cfecae1fe624c50676c9406eb9b637d7.png"},2919:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/index_30_0-98ebebd818f711d58152af5f358c7ab4.png"},5528:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/index_5_2-a39d0673f7df0f6876b192e2aa51f81b.png"}}]);