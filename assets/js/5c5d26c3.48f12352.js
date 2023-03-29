"use strict";(self.webpackChunkbacalhau_docs=self.webpackChunkbacalhau_docs||[]).push([[6478],{3905:(e,n,a)=>{a.d(n,{Zo:()=>m,kt:()=>c});var t=a(7294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function s(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=t.createContext({}),p=function(e){var n=t.useContext(l),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},m=function(e){var n=p(e.components);return t.createElement(l.Provider,{value:n},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=p(a),d=r,c=u["".concat(l,".").concat(d)]||u[d]||g[d]||i;return a?t.createElement(c,o(o({ref:n},m),{},{components:a})):t.createElement(c,o({ref:n},m))}));function c(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[u]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=a[p];return t.createElement.apply(null,o)}return t.createElement.apply(null,a)}d.displayName="MDXCreateElement"},1365:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>g,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var t=a(7462),r=(a(7294),a(3905));const i={sidebar_label:"Rust - WASM",sidebar_position:15},o="Running Rust programs as WebAssembly (WASM)",s={unversionedId:"examples/workload-onboarding/rust-wasm/index",id:"examples/workload-onboarding/rust-wasm/index",title:"Running Rust programs as WebAssembly (WASM)",description:"Open In Colab",source:"@site/docs/examples/workload-onboarding/rust-wasm/index.md",sourceDirName:"examples/workload-onboarding/rust-wasm",slug:"/examples/workload-onboarding/rust-wasm/",permalink:"/examples/workload-onboarding/rust-wasm/",draft:!1,editUrl:"https://github.com/bacalhau-project/docs.bacalhau.org/blob/main/docs/examples/workload-onboarding/rust-wasm/index.md",tags:[],version:"current",lastUpdatedAt:1680097054,formattedLastUpdatedAt:"Mar 29, 2023",sidebarPosition:15,frontMatter:{sidebar_label:"Rust - WASM",sidebar_position:15},sidebar:"documentationSidebar",previous:{title:"R Script",permalink:"/examples/workload-onboarding/r-hello-world/"},next:{title:"Scripting Bacalhau with Python",permalink:"/examples/workload-onboarding/python-script/"}},l={},p=[{value:"Prerequisites",id:"prerequisites",level:3},{value:"1. Develop a Rust Program Locally",id:"1-develop-a-rust-program-locally",level:2},{value:"2. Running WASM on Bacalhau",id:"2-running-wasm-on-bacalhau",level:2}],m={toc:p},u="wrapper";function g(e){let{components:n,...i}=e;return(0,r.kt)(u,(0,t.Z)({},m,i,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"running-rust-programs-as-webassembly-wasm"},"Running Rust programs as WebAssembly (WASM)"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://colab.research.google.com/github/bacalhau-project/examples/blob/main/workload-onboarding/rust-wasm/index.ipynb"},(0,r.kt)("img",{parentName:"a",src:"https://colab.research.google.com/assets/colab-badge.svg",alt:"Open In Colab"})),"\n",(0,r.kt)("a",{parentName:"p",href:"https://mybinder.org/v2/gh/bacalhau-project/examples/HEAD?labpath=workload-onboarding/rust-wasm/index.ipynb"},(0,r.kt)("img",{parentName:"a",src:"https://mybinder.org/badge.svg",alt:"Open In Binder"}))),(0,r.kt)("p",null,"Bacalhau supports running jobs as a ",(0,r.kt)("a",{parentName:"p",href:"https://webassembly.org/"},"WebAssembly (WASM)")," program rather than using a Docker container. This examples demonstrates how to compile a ",(0,r.kt)("a",{parentName:"p",href:"https://www.rust-lang.org/"},"Rust")," project into WebAssembly and run the program on Bacalhau."),(0,r.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You'll need the latest ",(0,r.kt)("inlineCode",{parentName:"li"},"bacalhau")," client installed by following the ",(0,r.kt)("a",{parentName:"li",href:"../../../getting-started/installation"},"getting started instructions"),"."),(0,r.kt)("li",{parentName:"ul"},"A working Rust installation with the ",(0,r.kt)("inlineCode",{parentName:"li"},"wasm32-wasi")," target. For example, you can use ",(0,r.kt)("a",{parentName:"li",href:"https://rustup.rs/"},(0,r.kt)("inlineCode",{parentName:"a"},"rustup"))," to install Rust and configure it to build WASM targets.")),(0,r.kt)("p",null,"For those using the notebook, these are installed in hidden cells below."),(0,r.kt)("h2",{id:"1-develop-a-rust-program-locally"},"1. Develop a Rust Program Locally"),(0,r.kt)("p",null,"We can use ",(0,r.kt)("inlineCode",{parentName:"p"},"cargo")," (which will have been installed by ",(0,r.kt)("inlineCode",{parentName:"p"},"rustup"),") to start a new project and compile it. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\ncargo init my-program\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"     Created binary (application) package\n")),(0,r.kt)("p",null,"We can then write a Rust program. Rust programs that run on Bacalhau can read and write files, access a simple clock and make use of psudeo-random numbers. They cannot memory-map files or run code on multiple threads."),(0,r.kt)("p",null,"The below program will make use of the Rust ",(0,r.kt)("inlineCode",{parentName:"p"},"imageproc")," create to resize an image through seam carving, based on ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/image-rs/imageproc/blob/master/examples/seam_carving.rs"},"an example from their repository"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'%%writefile ./my-program/src/main.rs \nuse image::{open, GrayImage, Luma, Pixel};\nuse imageproc::definitions::Clamp;\nuse imageproc::gradients::sobel_gradient_map;\nuse imageproc::map::map_colors;\nuse imageproc::seam_carving::*;\nuse std::path::Path;\n\nfn main() {\n    let input_path = "inputs/image0.JPG";\n    let output_dir = "outputs/";\n\n    let input_path = Path::new(&input_path);\n    let output_dir = Path::new(&output_dir);\n\n    // Load image and convert to grayscale\n    let input_image = open(input_path)\n        .expect(&format!("Could not load image at {:?}", input_path))\n        .to_rgb8();\n\n    // Save original image in output directory\n    let original_path = output_dir.join("original.png");\n    input_image.save(&original_path).unwrap();\n\n    // We will reduce the image width by this amount, removing one seam at a time.\n    let seams_to_remove: u32 = input_image.width() / 6;\n\n    let mut shrunk = input_image.clone();\n    let mut seams = Vec::new();\n\n    // Record each removed seam so that we can draw them on the original image later.\n    for i in 0..seams_to_remove {\n        if i % 100 == 0 {\n            println!("Removing seam {}", i);\n        }        \n        let vertical_seam = find_vertical_seam(&shrunk);\n        shrunk = remove_vertical_seam(&mut shrunk, &vertical_seam);\n        seams.push(vertical_seam);\n    }\n\n    // Draw the seams on the original image.\n    let gray_image = map_colors(&input_image, |p| p.to_luma());\n    let annotated = draw_vertical_seams(&gray_image, &seams);\n    let annotated_path = output_dir.join("annotated.png");\n    annotated.save(&annotated_path).unwrap();\n\n    // Draw the seams on the gradient magnitude image.\n    let gradients = sobel_gradient_map(&input_image, |p| {\n        let mean = (p[0] + p[1] + p[2]) / 3;\n        Luma([mean as u32])\n    });\n    let clamped_gradients: GrayImage = map_colors(&gradients, |p| Luma([Clamp::clamp(p[0])]));\n    let annotated_gradients = draw_vertical_seams(&clamped_gradients, &seams);\n    let gradients_path = output_dir.join("gradients.png");\n    clamped_gradients.save(&gradients_path).unwrap();\n    let annotated_gradients_path = output_dir.join("annotated_gradients.png");\n    annotated_gradients.save(&annotated_gradients_path).unwrap();\n\n    // Save the shrunk image.\n    let shrunk_path = output_dir.join("shrunk.png");\n    shrunk.save(&shrunk_path).unwrap();\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Overwriting ./my-program/src/main.rs\n")),(0,r.kt)("p",null,"We also need to install the ",(0,r.kt)("inlineCode",{parentName:"p"},"imageproc")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"image")," libraries and switch off the default features to make sure that multi-threading is disabled."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'%%writefile ./my-program/Cargo.toml\n[package]\nname = "my-program"\nversion = "0.1.0"\nedition = "2021"\n\n[dependencies.image]\nversion = "0.24.4"\ndefault-features = false\nfeatures = ["png", "jpeg", "bmp"]\n\n[dependencies.imageproc]\nversion = "0.23.0"\ndefault-features = false\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Overwriting ./my-program/Cargo.toml\n")),(0,r.kt)("p",null,"We can now build the Rust program into a WASM blob using ",(0,r.kt)("inlineCode",{parentName:"p"},"cargo"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\ncd my-program && cargo build --target wasm32-wasi --release\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"    Updating crates.io index\n   Compiling autocfg v1.1.0\n   Compiling cfg-if v1.0.0\n   Compiling getrandom v0.1.16\n   Compiling bytemuck v1.12.3\n   Compiling wasi v0.9.0+wasi-snapshot-preview1\n   Compiling adler v1.0.2\n   Compiling crc32fast v1.3.2\n   Compiling typenum v1.15.0\n   Compiling ppv-lite86 v0.2.17\n   Compiling miniz_oxide v0.5.4\n   Compiling safe_arch v0.6.0\n   Compiling miniz_oxide v0.6.2\n   Compiling wide v0.7.5\n   Compiling num-traits v0.2.15\n   Compiling num-integer v0.1.45\n   Compiling num-bigint v0.4.3\n   Compiling num-rational v0.4.1\n   Compiling rand_core v0.5.1\n   Compiling num-iter v0.1.43\n   Compiling flate2 v1.0.24\n   Compiling rand_chacha v0.2.2\n   Compiling bitflags v1.3.2\n   Compiling ttf-parser v0.15.2\n   Compiling paste v1.0.9\n   Compiling rawpointer v0.2.1\n   Compiling matrixmultiply v0.3.2\n   Compiling png v0.17.7\n   Compiling num-complex v0.4.2\n   Compiling approx v0.5.1\n   Compiling simba v0.7.3\n   Compiling rand v0.7.3\n   Compiling color_quant v1.1.0\n   Compiling either v1.8.0\n   Compiling byteorder v1.4.3\n   Compiling ab_glyph_rasterizer v0.1.7\n   Compiling jpeg-decoder v0.3.0\n   Compiling custom_derive v0.1.7\n   Compiling owned_ttf_parser v0.15.2\n   Compiling conv v0.3.3\n   Compiling rusttype v0.9.3\n   Compiling image v0.24.5\n   Compiling num v0.4.0\n   Compiling rand_distr v0.2.2\n   Compiling itertools v0.10.5\n   Compiling nalgebra v0.30.1\n   Compiling imageproc v0.23.0\n   Compiling my-program v0.1.0 (/Users/phil/source/bacalhau-project/examples/workload-onboarding/rust-wasm/my-program)\n    Finished release [optimized] target(s) in 17.81s\n")),(0,r.kt)("p",null,"This will generate a WASM file at ",(0,r.kt)("inlineCode",{parentName:"p"},"./my-program/target/wasm32-wasi/my-program.wasm")," which can now be run on Bacalhau."),(0,r.kt)("h2",{id:"2-running-wasm-on-bacalhau"},"2. Running WASM on Bacalhau"),(0,r.kt)("p",null,"Now that we have a WASM binary, we can upload it to IPFS and use it as input to a Bacalhau job."),(0,r.kt)("p",null,"The -v switch allows specifying an IPFS CID to mount as a named volume in the job. There is also a -u switch which can download inputs via HTTP."),(0,r.kt)("p",null,"For this example, we are using an image of the Statue of Liberty that has been pinned to a storage facility."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\nbacalhau wasm run ./my-program/target/wasm32-wasi/release/my-program.wasm _start \\\n    -v bafybeifdpl6dw7atz6uealwjdklolvxrocavceorhb3eoq6y53cbtitbeu:inputs | tee job.txt\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'Uploading "./my-program/target/wasm32-wasi/release/my-program.wasm" to server to execute command in context, press Ctrl+C to cancel\nJob successfully submitted. Job ID: 702cb81f-cf50-4d4f-b60d-b06e62f36de3\nChecking job status... (Enter Ctrl+C to exit at any time, your job will continue running):\n\n           Creating job for submission ... done \u2705\n           Finding node(s) for the job ... done \u2705\n                 Node accepted the job ... done \u2705\n       Job finished, verifying results ... done \u2705\n          Results accepted, publishing ... Job Results By Node:\n\nTo download the results, execute:\n  bacalhau get 702cb81f-cf50-4d4f-b60d-b06e62f36de3\n\nTo get more details about the run, execute:\n  bacalhau describe 702cb81f-cf50-4d4f-b60d-b06e62f36de3\n')),(0,r.kt)("p",null,"We can now get the results. When we view the files, we can see the original image, the resulting shrunk image, and the seams that were removed."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'%%bash\nrm -rf wasm_results && mkdir -p wasm_results\nbacalhau get $(grep "Job ID:" job.txt | cut -f2 -d:) --output-dir wasm_results\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Fetching results of job '702cb81f-cf50-4d4f-b60d-b06e62f36de3'...\nResults for job '702cb81f-cf50-4d4f-b60d-b06e62f36de3' have been written to...\nwasm_results\n\n\n11:05:14.218 | ??? providerquerymanager/providerquerymanager.go:344 > ERROR bitswap Received provider (12D3KooWGE4R98vokeLsRVdTv8D6jhMnifo81mm7NMRV8WJPNVHb) for cid (QmaxyTrc3zSb6ggUVYgXb9yxVJZ9cXv6Y6u55Czm2eqaWD) not requested\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import IPython.display as display\ndisplay.Image("./wasm_results/combined_results/outputs/original.png")\n')),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"png",src:a(4720).Z,width:"1024",height:"910"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'display.Image("./wasm_results/combined_results/outputs/annotated_gradients.png")\n')),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"png",src:a(9844).Z,width:"1024",height:"910"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'display.Image("./wasm_results/combined_results/outputs/shrunk.png")\n')),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"png",src:a(7100).Z,width:"854",height:"910"})))}g.isMDXComponent=!0},4720:(e,n,a)=>{a.d(n,{Z:()=>t});const t=a.p+"assets/images/index_16_0-71638aed0115d5bcc05fe121fce8d93a.png"},9844:(e,n,a)=>{a.d(n,{Z:()=>t});const t=a.p+"assets/images/index_17_0-210fd212e58be3cae39a9debd38a666a.png"},7100:(e,n,a)=>{a.d(n,{Z:()=>t});const t=a.p+"assets/images/index_18_0-220da7754eb4e335100d52c0ac75ce2f.png"}}]);