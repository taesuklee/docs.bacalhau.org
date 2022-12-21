"use strict";(self.webpackChunkbacalhau_docs=self.webpackChunkbacalhau_docs||[]).push([[6063],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=d(n),m=o,h=p["".concat(l,".").concat(m)]||p[m]||c[m]||s;return n?a.createElement(h,r(r({ref:t},u),{},{components:n})):a.createElement(h,r({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,r=new Array(s);r[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,r[1]=i;for(var d=2;d<s;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2887:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var a=n(7462),o=(n(7294),n(3905));const s={sidebar_label:"Oceanography - Data Conversion",sidebar_position:10,description:"Oceanography data conversion with Bacalhau"},r="Oceanography - Data Conversion",i={unversionedId:"examples/data-engineering/oceanography-conversion/index",id:"examples/data-engineering/oceanography-conversion/index",title:"Oceanography - Data Conversion",description:"Oceanography data conversion with Bacalhau",source:"@site/docs/examples/data-engineering/oceanography-conversion/index.md",sourceDirName:"examples/data-engineering/oceanography-conversion",slug:"/examples/data-engineering/oceanography-conversion/",permalink:"/examples/data-engineering/oceanography-conversion/",draft:!1,editUrl:"https://github.com/bacalhau-project/docs.bacalhau.org/blob/main/docs/examples/data-engineering/oceanography-conversion/index.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_label:"Oceanography - Data Conversion",sidebar_position:10,description:"Oceanography data conversion with Bacalhau"},sidebar:"documentationSidebar",previous:{title:"csv-to-avro-or-parquet",permalink:"/examples/data-engineering/csv-to-avro-or-parquet/"},next:{title:"Model Inference",permalink:"/examples/model-inference/"}},l={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"The Data",id:"the-data",level:2},{value:"The Task - Large Scale Data Conversion",id:"the-task---large-scale-data-conversion",level:2},{value:"Upload the Data to IPFS",id:"upload-the-data-to-ipfs",level:3},{value:"Create a Docker Image to Process the Data",id:"create-a-docker-image-to-process-the-data",level:3},{value:"Test the Container Locally",id:"test-the-container-locally",level:3},{value:"Run a Bacalhau Job",id:"run-a-bacalhau-job",level:3},{value:"Get Results",id:"get-results",level:2},{value:"References",id:"references",level:2}],u={toc:d};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"oceanography---data-conversion"},"Oceanography - Data Conversion"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://colab.research.google.com/github/bacalhau-project/examples/blob/main/data-engineering/oceanography-conversion/index.ipynb"},(0,o.kt)("img",{parentName:"a",src:"https://colab.research.google.com/assets/colab-badge.svg",alt:"Open In Colab"})),"\n",(0,o.kt)("a",{parentName:"p",href:"https://mybinder.org/v2/gh/bacalhau-project/examples/HEAD?labpath=data-engineering/oceanography-conversion/index.ipynb"},(0,o.kt)("img",{parentName:"a",src:"https://mybinder.org/badge.svg",alt:"Open In Binder"}))),(0,o.kt)("p",null,"The Surface Ocean CO\u2082 Atlas (SOCAT) contains measurements of the ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Fugacity"},"fugacity")," of CO2 in seawater around the globe. But to calculate how much carbon the ocean is taking up from the atmosphere, these measurements need to be converted to the partial pressure of CO2. We will convert the units by combining measurements of the surface temperature and fugacity.  Python libraries (xarray, pandas, numpy) and the pyseaflux package facilitate this process."),(0,o.kt)("p",null,"The goal of this notebook is to investigate the data and convert dockerize the workload so that it can be executed on the Bacalhau network, to take advantage of the distributed storage and compute resources."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"This example requires Docker. If you don't have Docker installed, you can install it from ",(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/install/"},"here"),". Docker commands will not work on hosted notebooks like Google Colab, but the Bacalhau commands will."),(0,o.kt)("p",null,"Make sure you have the latest ",(0,o.kt)("inlineCode",{parentName:"p"},"bacalhau")," client installed by following the ",(0,o.kt)("a",{parentName:"p",href:"../../../getting-started/installation"},"getting started instructions")),(0,o.kt)("h2",{id:"the-data"},"The Data"),(0,o.kt)("p",null,"The raw data is available on the ",(0,o.kt)("a",{parentName:"p",href:"https://www.socat.info/"},"SOCAT website"),". We will use the ",(0,o.kt)("a",{parentName:"p",href:"https://www.socat.info/index.php/version-2021/"},"SOCATv2021"),' dataset in the "Gridded" format to perform this calculation. First, let\'s take a quick look at some data:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'!command -v docker >/dev/null 2>&1 || { echo >&2 "I require docker but it\'s not installed.  Aborting."; exit 1; }\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"!(export BACALHAU_INSTALL_DIR=.; curl -sL https://get.bacalhau.org/install.sh | bash)\npath=!echo $PATH\n%env PATH=./:{path[0]}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Your system is linux_amd64\nNo BACALHAU detected. Installing fresh BACALHAU CLI...\nGetting the latest BACALHAU CLI...\nInstalling v0.3.15 BACALHAU CLI...\nDownloading https://github.com/filecoin-project/bacalhau/releases/download/v0.3.15/bacalhau_v0.3.15_linux_amd64.tar.gz ...\nDownloading sig file https://github.com/filecoin-project/bacalhau/releases/download/v0.3.15/bacalhau_v0.3.15_linux_amd64.tar.gz.signature.sha256 ...\nVerified OK\nExtracting tarball ...\nNOT verifying Bin\nbacalhau installed into . successfully.\nClient Version: v0.3.15\nServer Version: v0.3.15\nenv: PATH=./:/home/gitpod/.pyenv/versions/3.8.13/bin:/home/gitpod/.pyenv/libexec:/home/gitpod/.pyenv/plugins/python-build/bin:/home/gitpod/.pyenv/plugins/pyenv-virtualenv/bin:/home/gitpod/.pyenv/plugins/pyenv-update/bin:/home/gitpod/.pyenv/plugins/pyenv-installer/bin:/home/gitpod/.pyenv/plugins/pyenv-doctor/bin:/home/gitpod/.pyenv/shims:/ide/bin/remote-cli:/home/gitpod/.nix-profile/bin:/home/gitpod/.local/bin:/home/gitpod/.sdkman/candidates/maven/current/bin:/home/gitpod/.sdkman/candidates/java/current/bin:/home/gitpod/.sdkman/candidates/gradle/current/bin:/workspace/.cargo/bin:/home/gitpod/.rvm/gems/ruby-3.1.2/bin:/home/gitpod/.rvm/gems/ruby-3.1.2@global/bin:/home/gitpod/.rvm/rubies/ruby-3.1.2/bin:/home/gitpod/.pyenv/plugins/pyenv-virtualenv/shims:/home/gitpod/.pyenv/shims:/workspace/go/bin:/home/gitpod/.nix-profile/bin:/ide/bin/remote-cli:/home/gitpod/go/bin:/home/gitpod/go-packages/bin:/home/gitpod/.nvm/versions/node/v16.18.1/bin:/home/gitpod/.yarn/bin:/home/gitpod/.pnpm:/home/gitpod/.pyenv/bin:/workspace/.rvm/bin:/home/gitpod/.cargo/bin:/home/linuxbrew/.linuxbrew/bin:/home/linuxbrew/.linuxbrew/sbin/:/home/gitpod/.local/bin:/usr/games:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/home/gitpod/.nvm/versions/node/v16.18.1/bin:/home/gitpod/.rvm/bin\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir -p inputs\ncurl --output ./inputs/SOCATv2022_tracks_gridded_monthly.nc.zip https://www.socat.info/socat_files/v2022/SOCATv2022_tracks_gridded_monthly.nc.zip\ncurl --output ./inputs/sst.mnmean.nc https://downloads.psl.noaa.gov/Datasets/noaa.oisst.v2/sst.mnmean.nc\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current\n                                 Dload  Upload   Total   Spent    Left  Speed\n100 35.5M  100 35.5M    0     0  34.6M      0  0:00:01  0:00:01 --:--:-- 34.6M\n  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current\n                                 Dload  Upload   Total   Spent    Left  Speed\n100 60.8M  100 60.8M    0     0  14.6M      0  0:00:04  0:00:04 --:--:-- 14.6M\n")),(0,o.kt)("p",null,"Next let's write the requirements.txt and install the dependencies. This file will also be used by the Dockerfile to install the dependencies."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"%%writefile requirements.txt\nBottleneck==1.3.5\ndask==2022.2.0\nfsspec==2022.5.0\nnetCDF4==1.6.0\nnumpy==1.21.6\npandas==1.3.5\npip==22.1.2\npyseaflux==2.2.1\nscipy==1.7.3\nxarray==0.20.2\nzarr>=2.0.0\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Writing requirements.txt\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pip install -r requirements.txt > /dev/null\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"import fsspec # for reading remote files\nimport xarray as xr\nwith fsspec.open(\"./inputs/SOCATv2022_tracks_gridded_monthly.nc.zip\", compression='zip') as fp:\n    ds = xr.open_dataset(fp)\nds.info()\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"xarray.Dataset {\ndimensions:\n    xlon = 360 ;\n    ylat = 180 ;\n    tmnth = 624 ;\n    bnds = 2 ;\n\nvariables:\n    float64 xlon(xlon) ;\n        xlon:units = degrees_east ;\n        xlon:point_spacing = even ;\n        xlon:axis = X ;\n        xlon:modulo = 360.0 ;\n        xlon:standard_name = longitude ;\n    float64 ylat(ylat) ;\n        ylat:units = degrees_north ;\n        ylat:point_spacing = even ;\n        ylat:axis = Y ;\n        ylat:standard_name = latitude ;\n    datetime64[ns] tmnth(tmnth) ;\n        tmnth:axis = T ;\n        tmnth:bounds = tmnth_bnds ;\n        tmnth:time_origin = 01-JAN-1970 ;\n        tmnth:standard_name = time ;\n    datetime64[ns] tmnth_bnds(tmnth, bnds) ;\n    float64 count_ncruise(tmnth, ylat, xlon) ;\n        count_ncruise:long_name = Number of cruises ;\n        count_ncruise:units = count ;\n        count_ncruise:history = From SOCAT_ABCD_data_for_gridding ;\n        count_ncruise:summary = Number of datasets containing observations in the grid cell ;\n    float64 fco2_count_nobs(tmnth, ylat, xlon) ;\n        fco2_count_nobs:long_name = Number of fco2 obs ;\n        fco2_count_nobs:units = count ;\n        fco2_count_nobs:history = From SOCAT_ABCD_data_for_gridding ;\n        fco2_count_nobs:summary = Total number of observations in the grid cell. ;\n    float32 fco2_ave_weighted(tmnth, ylat, xlon) ;\n        fco2_ave_weighted:long_name = fCO2 mean - per cruise weighted ;\n        fco2_ave_weighted:units = uatm ;\n        fco2_ave_weighted:history = From SOCAT_ABCD_data_for_gridding ;\n        fco2_ave_weighted:summary = Mean of fco2 recomputed computed by calculating the arithmetic mean value for each cruise passing through the cell and then averaging these datasets. ;\n    float32 fco2_ave_unwtd(tmnth, ylat, xlon) ;\n        fco2_ave_unwtd:long_name = fCO2 mean - unweighted all obs ;\n        fco2_ave_unwtd:units = uatm ;\n        fco2_ave_unwtd:history = From SOCAT_ABCD_data_for_gridding ;\n        fco2_ave_unwtd:summary = Arithmetic mean of all fco2 recomputed values found in the grid cell. ;\n    float32 fco2_min_unwtd(tmnth, ylat, xlon) ;\n        fco2_min_unwtd:long_name = fCO2 min ;\n        fco2_min_unwtd:units = uatm ;\n        fco2_min_unwtd:history = From SOCAT_ABCD_data_for_gridding ;\n        fco2_min_unwtd:summary = Minimum value of fco2 recomputed observed in the grid cell. ;\n    float32 fco2_max_unwtd(tmnth, ylat, xlon) ;\n        fco2_max_unwtd:long_name = fCO2 max ;\n        fco2_max_unwtd:units = uatm ;\n        fco2_max_unwtd:history = From SOCAT_ABCD_data_for_gridding ;\n    float32 fco2_std_weighted(tmnth, ylat, xlon) ;\n        fco2_std_weighted:long_name = fCO2 std dev - per cruise weighted ;\n        fco2_std_weighted:units = uatm ;\n        fco2_std_weighted:history = From SOCAT_ABCD_data_for_gridding ;\n        fco2_std_weighted:summary = A weighted standard deviation of fco2 recomputed computed to account for the differing \nvariance estimates for each cruise passing through the cell. The statistical technique is \ndescribed at See http://wapedia.mobi/en/Weighted_mean#7. ;\n    float32 fco2_std_unwtd(tmnth, ylat, xlon) ;\n        fco2_std_unwtd:long_name = fCO2 std dev - unweighted all obs ;\n        fco2_std_unwtd:units = uatm ;\n        fco2_std_unwtd:history = From SOCAT_ABCD_data_for_gridding ;\n        fco2_std_unwtd:summary = The standard deviation of fco2 recomputed computed from the unweighted mean. ;\n    float64 sst_count_nobs(tmnth, ylat, xlon) ;\n        sst_count_nobs:long_name = Number of valid sst obs ;\n        sst_count_nobs:units = count ;\n        sst_count_nobs:history = From SOCAT_ABCD_data_for_gridding ;\n        sst_count_nobs:summary = Total number of observations in the grid cell. ;\n    float32 sst_ave_weighted(tmnth, ylat, xlon) ;\n        sst_ave_weighted:long_name = SST mean - per cruise weighted ;\n        sst_ave_weighted:units = degrees C ;\n        sst_ave_weighted:history = From SOCAT_ABCD_data_for_gridding ;\n        sst_ave_weighted:summary = Mean of sst computed by calculating the arithmetic mean value for each cruise passing through the cell and then averaging these datasets. ;\n    float32 sst_ave_unwtd(tmnth, ylat, xlon) ;\n        sst_ave_unwtd:long_name = SST mean - unweighted all obs ;\n        sst_ave_unwtd:units = degrees C ;\n        sst_ave_unwtd:history = From SOCAT_ABCD_data_for_gridding ;\n        sst_ave_unwtd:summary = Arithmetic mean of all sst values found in the grid cell. ;\n    float32 sst_min_unwtd(tmnth, ylat, xlon) ;\n        sst_min_unwtd:long_name = SST min ;\n        sst_min_unwtd:units = degrees C ;\n        sst_min_unwtd:history = From SOCAT_ABCD_data_for_gridding ;\n        sst_min_unwtd:summary = Minimum value of sst observed in the grid cell. ;\n    float32 sst_max_unwtd(tmnth, ylat, xlon) ;\n        sst_max_unwtd:long_name = SST max ;\n        sst_max_unwtd:units = degrees C ;\n        sst_max_unwtd:history = From SOCAT_ABCD_data_for_gridding ;\n    float32 sst_std_weighted(tmnth, ylat, xlon) ;\n        sst_std_weighted:long_name = SST std dev - per cruise weighted ;\n        sst_std_weighted:units = degrees C ;\n        sst_std_weighted:history = From SOCAT_ABCD_data_for_gridding ;\n        sst_std_weighted:summary = A weighted standard deviation of sst computed to account for the differing \nvariance estimates for each cruise passing through the cell. The statistical technique is \ndescribed at See http://wapedia.mobi/en/Weighted_mean#7. ;\n    float32 sst_std_unwtd(tmnth, ylat, xlon) ;\n        sst_std_unwtd:long_name = SST std dev - unweighted all obs ;\n        sst_std_unwtd:units = degrees C ;\n        sst_std_unwtd:history = From SOCAT_ABCD_data_for_gridding ;\n        sst_std_unwtd:summary = The standard deviation of sst computed from the unweighted mean. ;\n    float64 salinity_count_nobs(tmnth, ylat, xlon) ;\n        salinity_count_nobs:long_name = Number of valid salinity obs ;\n        salinity_count_nobs:units = count ;\n        salinity_count_nobs:history = From SOCAT_ABCD_data_for_gridding ;\n        salinity_count_nobs:summary = Total number of observations in the grid cell. ;\n    float32 salinity_ave_weighted(tmnth, ylat, xlon) ;\n        salinity_ave_weighted:long_name = Salinity mean - per cruise weighted ;\n        salinity_ave_weighted:units = PSU ;\n        salinity_ave_weighted:history = From SOCAT_ABCD_data_for_gridding ;\n        salinity_ave_weighted:summary = Mean of salinity computed by calculating the arithmetic mean value for each cruise passing through the cell and then averaging these datasets. ;\n    float32 salinity_ave_unwtd(tmnth, ylat, xlon) ;\n        salinity_ave_unwtd:long_name = Salinity mean - unweighted all obs ;\n        salinity_ave_unwtd:units = PSU ;\n        salinity_ave_unwtd:history = From SOCAT_ABCD_data_for_gridding ;\n        salinity_ave_unwtd:summary = Arithmetic mean of all salinity values found in the grid cell. ;\n    float32 salinity_min_unwtd(tmnth, ylat, xlon) ;\n        salinity_min_unwtd:long_name = Salinity min ;\n        salinity_min_unwtd:units = PSU ;\n        salinity_min_unwtd:history = From SOCAT_ABCD_data_for_gridding ;\n        salinity_min_unwtd:summary = Minimum value of salinity observed in the grid cell. ;\n    float32 salinity_max_unwtd(tmnth, ylat, xlon) ;\n        salinity_max_unwtd:long_name = Salinity max ;\n        salinity_max_unwtd:units = PSU ;\n        salinity_max_unwtd:history = From SOCAT_ABCD_data_for_gridding ;\n    float32 salinity_std_weighted(tmnth, ylat, xlon) ;\n        salinity_std_weighted:long_name = Salinity std dev - per cruise weighted ;\n        salinity_std_weighted:units = PSU ;\n        salinity_std_weighted:history = From SOCAT_ABCD_data_for_gridding ;\n        salinity_std_weighted:summary = A weighted standard deviation of salinity computed to account for the differing \nvariance estimates for each cruise passing through the cell. The statistical technique is \ndescribed at See http://wapedia.mobi/en/Weighted_mean#7. ;\n    float32 salinity_std_unwtd(tmnth, ylat, xlon) ;\n        salinity_std_unwtd:long_name = Salinity std dev - unweighted all obs ;\n        salinity_std_unwtd:units = PSU ;\n        salinity_std_unwtd:history = From SOCAT_ABCD_data_for_gridding ;\n        salinity_std_unwtd:summary = The standard deviation of salinity computed from the unweighted mean. ;\n    float32 lat_offset_unwtd(tmnth, ylat, xlon) ;\n        lat_offset_unwtd:long_name = Latitude average offset from cell center ;\n        lat_offset_unwtd:units = Deg N ;\n        lat_offset_unwtd:history = From SOCAT_ABCD_data_for_gridding ;\n        lat_offset_unwtd:summary = The arithmetic average of latitude offsets from the grid cell center for all observations in \nthe grid cell. The value of this offset can vary from -0.5 to 0.5. A value of zero indicates \nthat the computed fco2 mean values are representative of the grid cell center position. ;\n    float32 lon_offset_unwtd(tmnth, ylat, xlon) ;\n        lon_offset_unwtd:long_name = Longitude average offset from cell center ;\n        lon_offset_unwtd:units = Deg E ;\n        lon_offset_unwtd:history = From SOCAT_ABCD_data_for_gridding ;\n        lon_offset_unwtd:summary = The arithmetic average of longitude offsets from the grid cell center for all observations in \nthe grid cell. The value of this offset can vary from -0.5 to 0.5. A value of zero indicates \nthat the computed fco2 mean values are representative of the grid cell center position. ;\n\n// global attributes:\n    :history = PyFerret V7.63 (optimized) 31-May-22 ;\n    :Conventions = CF-1.6 ;\n    :SOCAT_Notes = SOCAT gridded v2022 26-May-2022 ;\n    :title = SOCAT gridded v2022 Monthly 1x1 degree gridded dataset ;\n    :summary = Surface Ocean Carbon Atlas (SOCAT) Gridded (binned) SOCAT observations, with a spatial \ngrid of 1x1 degree and monthly in time. The gridded fields are computed using only SOCAT \ndatasets with QC flags of A through D and SOCAT data points flagged with WOCE flag values of 2. ;\n    :references = http://www.socat.info/ ;\n    :caution = NO INTERPOLATION WAS PERFORMED. SIGNIFICANT BIASES ARE PRESENT IN THESE GRIDDED RESULTS DUE TO THE \nARBITRARY AND SPARSE LOCATIONS OF DATA VALUES IN BOTH SPACE AND TIME. ;\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"time_slice = slice(\"2010\", \"2020\") # select a decade\nres = ds['sst_ave_unwtd'].sel(tmnth=time_slice).mean(dim='tmnth') # average over time\nres.plot() # plot the result\n\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'---------------------------------------------------------------------------\n\nAttributeError                            Traceback (most recent call last)\n\nCell In [8], line 3\n      1 time_slice = slice("2010", "2020") # select a decade\n      2 res = ds[\'sst_ave_unwtd\'].sel(tmnth=time_slice).mean(dim=\'tmnth\') # average over time\n----\x3e 3 res.plot()\n\n\nFile ~/.pyenv/versions/3.8.13/lib/python3.8/site-packages/xarray/plot/plot.py:862, in _PlotMethods.__call__(self, **kwargs)\n    861 def __call__(self, **kwargs):\n--\x3e 862     return plot(self._da, **kwargs)\n\n\nFile ~/.pyenv/versions/3.8.13/lib/python3.8/site-packages/xarray/plot/plot.py:330, in plot(darray, row, col, col_wrap, ax, hue, rtol, subplot_kws, **kwargs)\n    326     plotfunc = hist\n    328 kwargs["ax"] = ax\n--\x3e 330 return plotfunc(darray, **kwargs)\n\n\nFile ~/.pyenv/versions/3.8.13/lib/python3.8/site-packages/xarray/plot/plot.py:1174, in _plot2d.<locals>.newplotfunc(darray, x, y, figsize, size, aspect, ax, row, col, col_wrap, xincrease, yincrease, add_colorbar, add_labels, vmin, vmax, cmap, center, robust, extend, levels, infer_intervals, colors, subplot_kws, cbar_ax, cbar_kwargs, xscale, yscale, xticks, yticks, xlim, ylim, norm, **kwargs)\n   1170 yplt, ylab_extra = _resolve_intervals_2dplot(yval, plotfunc.__name__)\n   1172 _ensure_plottable(xplt, yplt, zval)\n-> 1174 cmap_params, cbar_kwargs = _process_cmap_cbar_kwargs(\n   1175     plotfunc,\n   1176     zval.data,\n   1177     **locals(),\n   1178     _is_facetgrid=kwargs.pop("_is_facetgrid", False),\n   1179 )\n   1181 if "contour" in plotfunc.__name__:\n   1182     # extend is a keyword argument only for contour and contourf, but\n   1183     # passing it to the colorbar is sufficient for imshow and\n   1184     # pcolormesh\n   1185     kwargs["extend"] = cmap_params["extend"]\n\n\nFile ~/.pyenv/versions/3.8.13/lib/python3.8/site-packages/xarray/plot/utils.py:905, in _process_cmap_cbar_kwargs(func, data, cmap, colors, cbar_kwargs, levels, _is_facetgrid, **kwargs)\n    903 cmap_kwargs.update((a, kwargs[a]) for a in cmap_args if a in kwargs)\n    904 if not _is_facetgrid:\n--\x3e 905     cmap_params = _determine_cmap_params(**cmap_kwargs)\n    906 else:\n    907     cmap_params = {\n    908         k: cmap_kwargs[k]\n    909         for k in ["vmin", "vmax", "cmap", "extend", "levels", "norm"]\n    910     }\n\n\nFile ~/.pyenv/versions/3.8.13/lib/python3.8/site-packages/xarray/plot/utils.py:185, in _determine_cmap_params(plot_data, vmin, vmax, cmap, center, robust, extend, levels, filled, norm, _is_facetgrid)\n    159 def _determine_cmap_params(\n    160     plot_data,\n    161     vmin=None,\n   (...)\n    170     _is_facetgrid=False,\n    171 ):\n    172     """\n    173     Use some heuristics to set good defaults for colorbar and range.\n    174 \n   (...)\n    183         Use depends on the type of the plotting function\n    184     """\n--\x3e 185     mpl = plt.matplotlib\n    187     if isinstance(levels, Iterable):\n    188         levels = sorted(levels)\n\n\nAttributeError: \'NoneType\' object has no attribute \'matplotlib\'\n')),(0,o.kt)("p",null,"We can see that the dataset contains lat-long coordinates, the date, and a series of seawater measurements. Above you can see a plot of the average surface sea temperature (sst) between 2010-2020, where recording buoys and boats have travelled."),(0,o.kt)("h2",{id:"the-task---large-scale-data-conversion"},"The Task - Large Scale Data Conversion"),(0,o.kt)("p",null,"The goal of this notebook is to convert the data from fugacity of CO2 (fCO2) to partial pressure of CO2 (pCO2). This is a common task in oceanography, and is performed by combining the measurements of the surface temperature and fugacity. The conversion is performed by the ",(0,o.kt)("a",{parentName:"p",href:"https://seaflux.readthedocs.io/en/latest/api.html?highlight=fCO2_to_pCO2#pyseaflux.fco2_pco2_conversion.fCO2_to_pCO2"},"pyseaflux")," package."),(0,o.kt)("p",null,"To execute this workload on the Bacalhau network we need to perform three steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Upload the data to IPFS"),(0,o.kt)("li",{parentName:"ol"},"Create a docker image with the code and dependencies"),(0,o.kt)("li",{parentName:"ol"},"Run the docker image on the Bacalhau network using the IPFS data")),(0,o.kt)("h3",{id:"upload-the-data-to-ipfs"},"Upload the Data to IPFS"),(0,o.kt)("p",null,'The first step is to upload the data to IPFS. The simplest way to do this is to use a third party service to "pin" data to the IPFS network, to ensure that the data exists and is available. To do this you need an account with a pinning service like ',(0,o.kt)("a",{parentName:"p",href:"https://web3.storage/"},"web3.storage")," or ",(0,o.kt)("a",{parentName:"p",href:"https://pinata.cloud/"},"Pinata"),". Once registered you can use their UI or API or SDKs to upload files."),(0,o.kt)("p",null,"For the purposes of this example I:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Downloaded the latest monthly data from the ",(0,o.kt)("a",{parentName:"li",href:"https://www.socat.info/"},"SOCAT website")),(0,o.kt)("li",{parentName:"ol"},"Downloaded the latest long-term global sea surface temperature data from ",(0,o.kt)("a",{parentName:"li",href:"https://downloads.psl.noaa.gov/Datasets/noaa.oisst.v2/sst.mnmean.nc"},"NOAA")," - information about that dataset can be found ",(0,o.kt)("a",{parentName:"li",href:"https://psl.noaa.gov/data/gridded/data.noaa.oisst.v2.highres.html"},"here"),"."),(0,o.kt)("li",{parentName:"ol"},"Pinned the data to IPFS")),(0,o.kt)("p",null,"This resulted in the IPFS CID of ",(0,o.kt)("inlineCode",{parentName:"p"},"bafybeidunikexxu5qtuwc7eosjpuw6a75lxo7j5ezf3zurv52vbrmqwf6y"),"."),(0,o.kt)("h3",{id:"create-a-docker-image-to-process-the-data"},"Create a Docker Image to Process the Data"),(0,o.kt)("p",null,"Next we will create the docker image that will process the data. The docker image will contain the code and dependencies needed to perform the conversion. This code originated with ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/lgloege/bacalhau_socat_test"},"lgloege")," via ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/wesfloyd/bacalhau_socat_test/"},"wesfloyd"),". Thank you! \ud83e\udd17"),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"For more information about working with custom containers, see the ",(0,o.kt)("a",{parentName:"p",href:"../../workload-onboarding/custom-containers/"},"custom containers example"),".")),(0,o.kt)("p",null,"The key thing to watch out for here is the paths to the data. I'm using the default bacalhau output directory ",(0,o.kt)("inlineCode",{parentName:"p"},"/outputs")," to write my data to. And the input data is mounted to the ",(0,o.kt)("inlineCode",{parentName:"p"},"/inputs")," directory. But as you will see in a moment, web3.storage has added another ",(0,o.kt)("inlineCode",{parentName:"p"},"input")," directory that we need to account for."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'%%writefile main.py\nimport fsspec\nimport xarray as xr\nimport pandas as pd\nimport numpy as np\nimport pyseaflux\n\n\ndef lon_360_to_180(ds=None, lonVar=None):\n    lonVar = "lon" if lonVar is None else lonVar\n    return (ds.assign_coords({lonVar: (((ds[lonVar] + 180) % 360) - 180)})\n            .sortby(lonVar)\n            .astype(dtype=\'float32\', order=\'C\'))\n\n\ndef center_dates(ds):\n    # start and end date\n    start_date = str(ds.time[0].dt.strftime(\'%Y-%m\').values)\n    end_date = str(ds.time[-1].dt.strftime(\'%Y-%m\').values)\n\n    # monthly dates centered on 15th of each month\n    dates = pd.date_range(start=f\'{start_date}-01T00:00:00.000000000\',\n                          end=f\'{end_date}-01T00:00:00.000000000\',\n                          freq=\'MS\') + np.timedelta64(14, \'D\')\n\n    return ds.assign(time=dates)\n\n\ndef get_and_process_sst(url=None):\n    # get noaa sst\n    if url is None:\n        url = ("/inputs/sst.mnmean.nc")\n\n    with fsspec.open(url) as fp:\n        ds = xr.open_dataset(fp)\n        ds = lon_360_to_180(ds)\n        ds = center_dates(ds)\n        return ds\n\n\ndef get_and_process_socat(url=None):\n    if url is None:\n        url = ("/inputs/SOCATv2022_tracks_gridded_monthly.nc.zip")\n\n    with fsspec.open(url, compression=\'zip\') as fp:\n        ds = xr.open_dataset(fp)\n        ds = ds.rename({"xlon": "lon", "ylat": "lat", "tmnth": "time"})\n        ds = center_dates(ds)\n        return ds\n\n\ndef main():\n    print("Load SST and SOCAT data")\n    ds_sst = get_and_process_sst()\n    ds_socat = get_and_process_socat()\n\n    print("Merge datasets together")\n    time_slice = slice("1981-12", "2022-05")\n    ds_out = xr.merge([ds_sst[\'sst\'].sel(time=time_slice),\n                       ds_socat[\'fco2_ave_unwtd\'].sel(time=time_slice)])\n\n    print("Calculate pco2 from fco2")\n    ds_out[\'pco2_ave_unwtd\'] = xr.apply_ufunc(\n        pyseaflux.fCO2_to_pCO2,\n        ds_out[\'fco2_ave_unwtd\'],\n        ds_out[\'sst\'])\n\n    print("Add metadata")\n    ds_out[\'pco2_ave_unwtd\'].attrs[\'units\'] = \'uatm\'\n    ds_out[\'pco2_ave_unwtd\'].attrs[\'notes\'] = ("calculated using" +\n                                               "NOAA OI SST V2" +\n                                               "and pyseaflux package")\n\n    print("Save data")\n    ds_out.to_zarr("/processed.zarr")\n    import shutil\n    shutil.make_archive("/outputs/processed.zarr", \'zip\', "/processed.zarr")\n    print("Zarr file written to disk, job completed successfully")\n\nif __name__ == "__main__":\n    main()\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'%%writefile Dockerfile\nFROM python:slim\n\nRUN apt-get update && apt-get -y upgrade \\\n    && apt-get install -y --no-install-recommends \\\n    g++ \\\n    && rm -rf /var/lib/apt/lists/*\n\nWORKDIR /project\n\nCOPY ./requirements.txt /project\n\nRUN pip3 install -r requirements.txt\n\nCOPY ./main.py /project\n\nCMD ["python","main.py"]\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# docker buildx build --platform linux/amd64,linux/arm64 --push -t ghcr.io/bacalhau-project/examples/socat:0.0.11 .\n")),(0,o.kt)("h3",{id:"test-the-container-locally"},"Test the Container Locally"),(0,o.kt)("p",null,"Before we upload the container to the Bacalhau network, we should test it locally to make sure it works."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker run \\\n    -v $(pwd)/inputs:/inputs \\\n    -v $(pwd)/outputs:/outputs \\\n    ghcr.io/bacalhau-project/examples/socat:0.0.11\n")),(0,o.kt)("h3",{id:"run-a-bacalhau-job"},"Run a Bacalhau Job"),(0,o.kt)("p",null,"Now that we have the data in IPFS and the docker image pushed, we can run a job on the Bacalhau network."),(0,o.kt)("p",null,"I find it useful to first run a simple test with a known working container to ensure the data is located in the place I expect, because some storage providers add their own opinions. E.g. web3.storage wraps the directory uploads in a top level directory."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"rm -rf stdout stderr volumes shards\nbacalhau docker run \\\n        --download \\\n        --inputs bafybeidunikexxu5qtuwc7eosjpuw6a75lxo7j5ezf3zurv52vbrmqwf6y \\\n        ubuntu -- ls /inputs\n")),(0,o.kt)("p",null,"Then I like to run a simple test with my custom container ..."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"rm -rf stdout stderr volumes shards\nbacalhau docker run \\\n    --inputs bafybeidunikexxu5qtuwc7eosjpuw6a75lxo7j5ezf3zurv52vbrmqwf6y \\\n    --download \\\n    ghcr.io/bacalhau-project/examples/socat:0.0.11 -- ls -la /inputs/\n")),(0,o.kt)("p",null,"And finally let's run the full job. This time I will not download the data immediately, because the job takes around 100s. And it takes another few minutes to download the results. The commands are below, but you will need to wait until the job completes before they work."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"bacalhau docker run \\\n        --inputs bafybeidunikexxu5qtuwc7eosjpuw6a75lxo7j5ezf3zurv52vbrmqwf6y \\\n        --id-only \\\n        --wait \\\n        ghcr.io/bacalhau-project/examples/socat:0.0.11 -- python main.py\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"%env JOB_ID={job_id}\n")),(0,o.kt)("h2",{id:"get-results"},"Get Results"),(0,o.kt)("p",null,"Now let's download and display the result from the results directory. We can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"bacalhau get")," command to download the results from the output data volume. The ",(0,o.kt)("inlineCode",{parentName:"p"},"--output-dir")," argument specifies the directory to download the results to."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"rm -rf results\nmkdir -p ./results # Temporary directory to store the results\nbacalhau get --output-dir ./results ${JOB_ID} # Download the results\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cat ./results/stdout\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"ls ./results/volumes/outputs\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'import shutil\nshutil.unpack_archive("./results/volumes/outputs/processed.zarr.zip", "./results/volumes/outputs/")\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"import xarray as xr\nds = xr.open_dataset(\"./results/volumes/outputs/\", engine='zarr')\nds.info()\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"ds['pco2_ave_unwtd'].mean(dim='time').plot()\n")),(0,o.kt)("h2",{id:"references"},"References"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.socat.info/"},"https://www.socat.info/")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://seaflux.readthedocs.io/en/latest/api.html?highlight=fCO2_to_pCO2#pyseaflux.fco2_pco2_conversion.fCO2_to_pCO2"},"https://seaflux.readthedocs.io/en/latest/api.html?highlight=fCO2_to_pCO2#pyseaflux.fco2_pco2_conversion.fCO2_to_pCO2")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/lgloege/bacalhau_socat_test/blob/main/main.py"},"https://github.com/lgloege/bacalhau_socat_test/blob/main/main.py")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/wesfloyd/bacalhau_socat_test"},"https://github.com/wesfloyd/bacalhau_socat_test"))))}c.isMDXComponent=!0}}]);