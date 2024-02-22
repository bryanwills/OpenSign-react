"use strict";(self.webpackChunkOpenSign_Docs=self.webpackChunkOpenSign_Docs||[]).push([[853],{26636:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var s=t(85893),i=t(11151);const r={sidebar_position:4,title:"Installation instructions"},o="INSTALLATION INSTRUCTIONS",c={id:"contribute/INSTALLATION",title:"Installation instructions",description:"You can use our app as a cloud version from OpenSignLabs",source:"@site/docs/contribute/INSTALLATION.md",sourceDirName:"contribute",slug:"/contribute/INSTALLATION",permalink:"/docs/contribute/INSTALLATION",draft:!1,unlisted:!1,editUrl:"https://github.com/opensignlabs/opensign/tree/feat-docs/docs/docs/contribute/INSTALLATION.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Installation instructions"},sidebar:"contributeSidebar",previous:{title:"Contributing to OpenSign",permalink:"/docs/contribute/intro"},next:{title:"Community at OpenSign\u2122",permalink:"/docs/contribute/COMMUNITY"}},l={},d=[{value:"Localhost(Frontend only)",id:"localhostfrontend-only",level:2},{value:"You will need to create an AWS S3 bucket or digital ocean space in order to store your uploaded documents",id:"you-will-need-to-create-an-aws-s3-bucket-or-digital-ocean-space-in-order-to-store-your-uploaded-documents",level:2},{value:"AWS S3 -",id:"aws-s3--",level:3},{value:"Localhost(Docker)",id:"localhostdocker",level:2}];function a(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"installation-instructions",children:"INSTALLATION INSTRUCTIONS"}),"\n",(0,s.jsxs)(n.p,{children:["You can use our app as a cloud version from ",(0,s.jsx)(n.a,{href:"https://www.opensignlabs.com",children:"OpenSignLabs"})]}),"\n",(0,s.jsx)(n.p,{children:"or follow below instructions to install it on your own infrastructure."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Localhost(Frontend only)"}),"\n",(0,s.jsx)(n.li,{children:"Localhost(Docker)"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"localhostfrontend-only",children:"Localhost(Frontend only)"}),"\n",(0,s.jsx)(n.p,{children:"This is the easiest way to run the frontend application for development or testing purpose without the hassle of installing backend & DB. All the features including document upload, signing, email notifications will work seamlessly from staging backend."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Warning:"})," All data, including user accounts and documents, is stored in the staging backend. This data will be erased every time there is a merge to the main branch. As a result, you may need to recreate user accounts repeatedly. If you find that login attempts are failing, it is likely because the data has been cleared due to a recent merge."]}),"\n",(0,s.jsx)(n.p,{children:"Below are the steps to follow -"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://help.github.com/articles/cloning-a-repository/",children:"Clone the repository"})," to your local machine using below command -","\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"git clone https://github.com/OpenSignLabs/OpenSign.git\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Copy the .env.frontend_dev file to  apps/OpenSign/.env using below command(on mac & linux). For windows use COPY command instead.","\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"cp .env.frontend_dev apps/OpenSign/.env\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Switch to OpenSign directory.","\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"cd apps/OpenSign\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Install NPM packages using","\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"npm install\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Run the project locally using","\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"npm run start-dev\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["You should be able to access the application from ",(0,s.jsx)(n.a,{href:"http://localhost:3000",children:"http://localhost:3000"})," after this.\nCreate an account by signing-up and start contributing."]}),"\n",(0,s.jsx)(n.h2,{id:"you-will-need-to-create-an-aws-s3-bucket-or-digital-ocean-space-in-order-to-store-your-uploaded-documents",children:"You will need to create an AWS S3 bucket or digital ocean space in order to store your uploaded documents"}),"\n",(0,s.jsx)(n.h3,{id:"aws-s3--",children:"AWS S3 -"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Step 1 : Create a S3 bucket","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Login to AWS console"}),"\n",(0,s.jsx)(n.li,{children:"Navigate to S3 under services"}),"\n",(0,s.jsx)(n.li,{children:'Hit "Create Bucket" button on upper right corner'}),"\n",(0,s.jsx)(n.li,{children:'Remove the check from "block all public access" checkbox(we need this in order to provide access to not-logged in users after OTP verification)'}),"\n",(0,s.jsx)(n.li,{children:"Set bucket versioning and tags as per your requirements"}),"\n",(0,s.jsx)(n.li,{children:'Hit "Create bucket" button'}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Step 2 : Create IAM user and provide access to AWS bucket","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:'Search for "IAM" on the search bar in AWS console'}),"\n",(0,s.jsx)(n.li,{children:"On IAM dashboard, click the number of users(count) under IAM resources table"}),"\n",(0,s.jsx)(n.li,{children:'Hit "create user" button on the upper right corner of the page'}),"\n",(0,s.jsx)(n.li,{children:"Enter the user name & click next"}),"\n",(0,s.jsx)(n.li,{children:"Click create policy, search for S3 and provide the Read, Write & list permissions"}),"\n",(0,s.jsx)(n.li,{children:'Click next and click "Create user"'}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"Step 3 : Generate Credentials"}),"\n",(0,s.jsx)(n.li,{children:"Go to IAM/Users in AWS console"}),"\n",(0,s.jsx)(n.li,{children:"Hit the hyperlink for the user created in the previous step"}),"\n",(0,s.jsx)(n.li,{children:'Click the "Security credentials" tab'}),"\n",(0,s.jsx)(n.li,{children:'Scroll down to "Access keys" and hit "Create access key"'}),"\n",(0,s.jsx)(n.li,{children:'In the next step select "Application running outside AWS"'}),"\n",(0,s.jsx)(n.li,{children:'Add a description tag if needed & hit "Create access key"'}),"\n",(0,s.jsx)(n.li,{children:'In the next step you will see "Access key" and "Secret Access key". Copy both the values.'}),"\n",(0,s.jsx)(n.li,{children:'Set the value of "Access key" to "DO_ACCESS_KEY_ID" environment variable'}),"\n",(0,s.jsx)(n.li,{children:'Set the value of "Secret Access key" to "DO_SECRET_ACCESS_KEY" environment variable'}),"\n",(0,s.jsxs)(n.li,{children:["Step 3 : Copy bucket credentials","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:'Visit "Amazon S3 -> Buckets" in aws console'}),"\n",(0,s.jsx)(n.li,{children:"Click the bucket created in previous steps & visit the properties tab"}),"\n",(0,s.jsx)(n.li,{children:'Under "Bucket overview" you will find the value of AWS region(for ex. ap-south-1). Set that value to env variable "DO_REGION"'}),"\n",(0,s.jsx)(n.li,{children:'You can create the value for "DO_ENDPOINT" env variable by appending the region value to amazonaws.com (for ex. s3.ap-south-1.amazonaws.com)'}),"\n",(0,s.jsxs)(n.li,{children:['You can create the value for "DO_BASEURL" by adding the bucketname in front of the endpoint value(for ex. ',(0,s.jsx)(n.a,{href:"https://bucketname.s3.ap-south-1.amazonaws.com",children:"https://bucketname.s3.ap-south-1.amazonaws.com"}),")"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Visit below link if you face any issues while following the above instructions -"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://repost.aws/knowledge-center/create-access-key",children:"https://repost.aws/knowledge-center/create-access-key"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"localhostdocker",children:"Localhost(Docker)"}),"\n",(0,s.jsx)(n.p,{children:"For local Setup we need to need following prerequisite:"}),"\n",(0,s.jsx)(n.p,{children:"Environment Varaibles:"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Environment Varibale"}),(0,s.jsx)(n.th,{children:"Value"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"CI"}),(0,s.jsx)(n.td,{children:"false"}),(0,s.jsx)(n.td,{children:"Set CI to false while running the app locally"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"PUBLIC_URL"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"http://localhost:3000",children:"http://localhost:3000"})}),(0,s.jsx)(n.td,{children:"Set it to the URL form where the app home page will be accessed"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"GENERATE_SOURCEMAP"}),(0,s.jsx)(n.td,{children:"false"}),(0,s.jsx)(n.td,{children:"Set it to true if you want to generate the Sourcemap for debugging"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"REACT_APP_SERVERURL"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"http://localhost:8080/app",children:"http://localhost:8080/app"})}),(0,s.jsx)(n.td,{children:"Set it to the URL from where APIs will be accessible, for local development it should be localhost:3000/api/app (use your local port number instead)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"REACT_APP_APPID"}),(0,s.jsx)(n.td,{children:"opensignstgn"}),(0,s.jsx)(n.td,{children:"A 12 character long random app identifier. The value of this should be same as APP_ID which is a variable used by backend API."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"APP_ID"}),(0,s.jsx)(n.td,{children:"opensignstgn"}),(0,s.jsx)(n.td,{children:"A 12 character long random app identifier. The value of this should be same as REACT_APP_APPID which is a variable used by Frontend React App."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"appName"}),(0,s.jsx)(n.td,{children:"open_sign_server"}),(0,s.jsx)(n.td,{children:"Name of the app. It will be visible in the verification emails sent out."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"MASTER_KEY"}),(0,s.jsx)(n.td,{children:"XnAadwKxxByMr"}),(0,s.jsx)(n.td,{children:"A 12 character long random secret key that allows access to all the data. It is used in Parse dashboard config to view all the data in the database."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"MONGODB_URI"}),(0,s.jsx)(n.td,{children:"mongodb://host.docker.internal:27017/OpenSignDB"}),(0,s.jsx)(n.td,{children:"Mongodb URI to connect to"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"PARSE_MOUNT"}),(0,s.jsx)(n.td,{children:"/app"}),(0,s.jsx)(n.td,{children:"Path on which APIs should be mounted. Do not change this. This variable shall be removed & value hardcoded in the source code in coming versions."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"SERVER_URL"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"http://127.0.0.1:8080/app",children:"http://127.0.0.1:8080/app"})}),(0,s.jsx)(n.td,{children:"Set it to the URL from where APIs will be accessible to the NodeJS functions, for local development it should be localhost:3000/api/app (use your local port number instead)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"DO_SPACE"}),(0,s.jsx)(n.td,{children:"DOSPACENAME"}),(0,s.jsx)(n.td,{children:"Digital ocean space name or AWS S3 bucket name for uploading documents"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"DO_ENDPOINT"}),(0,s.jsx)(n.td,{children:"ams3.digitaloceanspaces.com"}),(0,s.jsx)(n.td,{children:"Digital ocean spaces endpoint or AWS S3 endpoint for uploading documents"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"DO_BASEURL"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"https://DOSPACENAME.ams3.digitaloceanspaces.com",children:"https://DOSPACENAME.ams3.digitaloceanspaces.com"})}),(0,s.jsx)(n.td,{children:"Digital ocean baseurl or AWS S3 base URL"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"DO_ACCESS_KEY_ID"}),(0,s.jsx)(n.td,{children:"YOUR_S3_ACCESS_ID"}),(0,s.jsx)(n.td,{children:"Digital ocean spaces access key ID or AWS s3 Access key ID for uploading the docs"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"DO_SECRET_ACCESS_KEY"}),(0,s.jsx)(n.td,{children:"YOUR_S3_ACCESS_KEY"}),(0,s.jsx)(n.td,{children:"Digital ocean spaces secret access key or AWS s3 secret access key for uploading the docs"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"DO_REGION"}),(0,s.jsx)(n.td,{children:"YOUR_S3_REGION"}),(0,s.jsx)(n.td,{children:"Digital ocean spaces region or AWS s3 region"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"USE_LOCAL"}),(0,s.jsx)(n.td,{children:"FALSE"}),(0,s.jsx)(n.td,{children:"To use local file storage to save file"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"MAILGUN_API_KEY"}),(0,s.jsx)(n.td,{children:"YOUR_MAILGUNAPI_KEY"}),(0,s.jsx)(n.td,{children:"Mailgun API Key"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"MAILGUN_DOMAIN"}),(0,s.jsx)(n.td,{children:"YOUR_MAILGUNAPI_DOMAIN"}),(0,s.jsx)(n.td,{children:"Mailgun API Domain"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"MAILGUN_SENDER"}),(0,s.jsx)(n.td,{children:"-"}),(0,s.jsx)(n.td,{children:"Mailgun Sender Mail ID"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"PFX_BASE64"}),(0,s.jsx)(n.td,{children:"-"}),(0,s.jsxs)(n.td,{children:["Base64 encoded PFX or p12 document signing certificate file. You can generate base64 encoded self sign certificate using the passphrase ",(0,s.jsx)(n.code,{children:"emudhra"})]})]})]})]}),"\n",(0,s.jsx)(n.h1,{id:"steps-to-generate-self-sign-certificate",children:"Steps to Generate Self Sign Certificate"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"# execute below command and use passphrase emudhra\nopenssl genrsa -des3 -out ./cert/local_dev.key 2048\nopenssl req -key ./cert/local_dev.key -new -x509 -days 365 -out ./cert/local_dev.crt\nopenssl pkcs12 -inkey ./cert/local_dev.key -in ./cert/local_dev.crt -export -out ./cert/local_dev.pfx\nopenssl base64 -in ./cert/local_dev.pfx -out ./cert/base64_pfx\n"})}),"\n",(0,s.jsx)(n.h1,{id:"cors-configuration",children:"CORS Configuration"}),"\n",(0,s.jsxs)(n.p,{children:["As document storage is delegated to S3-compatible services that reside in a different host than the OpenSign one, document operations (loading, storing, deleting) are subject to ",(0,s.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Cross-origin_resource_sharing",children:"Cross-Origin Resource Sharing"})," restriction policies; as a consequence, OpenSign app may fail with (browser console) errors like the following:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Access to fetch at 'https://foo.nyc3.digitaloceanspaces.com/exported_file_4627_0000-00-00T00%3A45%3A43.344Z.pdf'\nfrom origin 'http://localhost:3000' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header\nis present on the requested resource. If an opaque response serves your needs, set the request's mode to\n'no-cors' to fetch the resource with CORS disabled.\n"})}),"\n",(0,s.jsx)(n.p,{children:"In order to address this, your document storage system must be instructed to accept requests from other hosts; below the relevant documentation links:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://docs.digitalocean.com/products/spaces/how-to/configure-cors/",children:"How to Configure CORS on DigitalOcean Spaces"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://docs.aws.amazon.com/AmazonS3/latest/userguide/enabling-cors-examples.html",children:"Configuring cross-origin resource sharing on AWS S3"})}),"\n"]}),"\n",(0,s.jsx)(n.h1,{id:"build-local-environment",children:"Build Local Environment"}),"\n",(0,s.jsx)(n.p,{children:"Command to build project -"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Execute ",(0,s.jsx)(n.code,{children:"make build"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Command to run project -"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Execute ",(0,s.jsx)(n.code,{children:"make run"})]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>o});var s=t(67294);const i={},r=s.createContext(i);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);