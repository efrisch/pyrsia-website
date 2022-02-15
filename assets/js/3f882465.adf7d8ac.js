"use strict";(self.webpackChunkpyrsia_website=self.webpackChunkpyrsia_website||[]).push([[3157],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),u=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=u(r),d=n,m=h["".concat(l,".").concat(d)]||h[d]||p[d]||a;return r?o.createElement(m,i(i({ref:t},c),{},{components:r})):o.createElement(m,i({ref:t},c))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var u=2;u<a;u++)i[u]=r[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}h.displayName="MDXCreateElement"},3614:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return c},default:function(){return h}});var o=r(7462),n=r(3366),a=(r(7294),r(3905)),i=["components"],s={},l="Contributing to Pyrsia",u={unversionedId:"developer/contributing",id:"developer/contributing",title:"Contributing to Pyrsia",description:"We like to pronounce it /p\u0259rs\u0113\u0259/ or  pir-see-ah ]. \ud83d\ude09 [Listen here.",source:"@site/docs/developer/contributing.md",sourceDirName:"developer",slug:"/developer/contributing",permalink:"/pyrsia-website/docs/developer/contributing",editUrl:"https://github.com/prince-chrismc/pyrsia-website/edit/main/docs/developer/contributing.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"code-of-conduct",permalink:"/pyrsia-website/docs/developer/code-of-conduct"},next:{title:"Pyrsia Bootstrap Governance",permalink:"/pyrsia-website/docs/developer/governance"}},c=[{value:"Code of Conduct",id:"code-of-conduct",children:[],level:2},{value:"Dev-flow",id:"dev-flow",children:[{value:"Pull Requests",id:"pull-requests",children:[{value:"Approval Processes",id:"approval-processes",children:[],level:4}],level:3},{value:"Project Board",id:"project-board",children:[{value:"Labels",id:"labels",children:[],level:4}],level:3}],level:2},{value:"Legal",id:"legal",children:[],level:2}],p={toc:c};function h(e){var t=e.components,r=(0,n.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"contributing-to-pyrsia"},"Contributing to Pyrsia"),(0,a.kt)("p",null,"We like to pronounce it ",(0,a.kt)("inlineCode",{parentName:"p"},"/p\u0259rs\u0113\u0259/")," or ",(0,a.kt)("em",{parentName:"p"},"[ pir-see-ah ]"),". \ud83d\ude09 ",(0,a.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=yvFiJGMqM_Q&t=77s"},"Listen here"),"."),(0,a.kt)("p",null,"The following summarizes the process for contributing to the Pyrsia project."),(0,a.kt)("h2",{id:"code-of-conduct"},"Code of Conduct"),(0,a.kt)("p",null,"We follow the OpenSSF's \ud83d\udee1\ufe0f (Open Source Security Foundation) ",(0,a.kt)("a",{parentName:"p",href:"https://openssf.org/community/code-of-conduct/"},"code of conduct"),"."),(0,a.kt)("h2",{id:"dev-flow"},"Dev-flow"),(0,a.kt)("p",null,"Pyrsia follows the ",(0,a.kt)("a",{parentName:"p",href:"https://blog.devgenius.io/git-forking-workflow-bbba0226d39c"},'"Forking Workflow"'),". You can see GitHub's\n",(0,a.kt)("a",{parentName:"p",href:"https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/getting-started/about-collaborative-development-models#fork-and-pull-model"},"About collaborative development models")," for more details."),(0,a.kt)("p",null,"To contribute follow the next steps:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Comment in the corresponding issue that you want to contribute. If there is no open issue, we strongly suggest\nopening one to gather feedback from the team."),(0,a.kt)("li",{parentName:"ol"},"Fork the ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/pyrsia/pyrsia/fork"},"Pyrsia repository")," and ",(0,a.kt)("a",{parentName:"li",href:"https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-and-deleting-branches-within-your-repository#creating-a-branch"},"create a branch"),"\nfrom the ",(0,a.kt)("inlineCode",{parentName:"li"},"main")," branch and develop your fix and/or feature as discussed in previous step. See\n",(0,a.kt)("a",{parentName:"li",href:"https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/about-forks"},"About forks")," for help."),(0,a.kt)("li",{parentName:"ol"},"Try to keep your branch updated with the ",(0,a.kt)("inlineCode",{parentName:"li"},"main")," branch to avoid conflicts. See\n",(0,a.kt)("a",{parentName:"li",href:"https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/syncing-a-fork"},"Syncing a fork"),"."),(0,a.kt)("li",{parentName:"ol"},"Please make sure to ",(0,a.kt)("a",{parentName:"li",href:"https://docs.github.com/en/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue"},"link any related issue"),"\nto the PR, referring to the issue of step 1.")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"pyrsia")," organization maintainers will review and help with merge accepted changes. Simply request reivew from ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/orgs/pyrsia/teams/collaborators"},(0,a.kt)("inlineCode",{parentName:"a"},"@pyrsia/collaborators"))," and two members will be selected."),(0,a.kt)("h3",{id:"pull-requests"},"Pull Requests"),(0,a.kt)("p",null,'PRs are a great way to share what you are working on and get early feedback. Make sure to open as a draft so other know the state.\nBefore opening a pull request it\'s recommended to "clean your commit history", this makes it easier to review by breaking down the work\nand removing some of the cluter and noise of regular development. Check out ',(0,a.kt)("a",{parentName:"p",href:"https://medium.com/@catalinaturlea/clean-git-history-a-step-by-step-guide-eefc0ad8696d"},"this article")," and ",(0,a.kt)("a",{parentName:"p",href:"https://about.gitlab.com/blog/2018/06/07/keeping-git-commit-history-clean/"},"this guide")," to learn more."),(0,a.kt)("p",null,'When PRs are "read for review", there\'s a few house keeping \ud83e\uddf9 items to keep in mind:'),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Make sure to give your PRs a ",(0,a.kt)("strong",{parentName:"li"},"great title"),". These will be the commit messages and should be treated as such."),(0,a.kt)("li",{parentName:"ul"},"Do ",(0,a.kt)("em",{parentName:"li"},"not")," worry about squashing, that is done automatically by GitHub.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"It's ideal to clean up any commit messages before confirming the merge to reduce the noise."))),(0,a.kt)("li",{parentName:"ul"},"Try to avoid force pushing you branch. GitHub forces reviewers to restart since it loses their progress."),(0,a.kt)("li",{parentName:"ul"},"When syncronizing your branch, prefer using merge. Check out ",(0,a.kt)("a",{parentName:"li",href:"https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/syncing-a-fork"},"Syncing a fork")," for more details and guidance.")),(0,a.kt)("h4",{id:"approval-processes"},"Approval Processes"),(0,a.kt)("p",null,"Request reviews from the @pyrsia/collaborators team to select team members for the PR."),(0,a.kt)("p",null,"All pull requests require:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"2 approvals"),(0,a.kt)("li",{parentName:"ul"},"All required checks passing")),(0,a.kt)("p",null,"If there are optional checks that fail, it's best to ask the reviewers and bring up the failure at the next team meeting."),(0,a.kt)("h3",{id:"project-board"},"Project Board"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://docs.github.com/en/issues/organizing-your-work-with-project-boards/managing-project-boards/about-project-boards"},"Learn more")),(0,a.kt)("p",null,"All open tickets related to ongoing work are tracked in a ",(0,a.kt)("a",{parentName:"p",href:"https://docs.github.com/en/issues/organizing-your-work-with-project-boards"},"project board"),".\nUpcomming, future and completed work ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/orgs/pyrsia/projects/2"},"here"),"."),(0,a.kt)("h4",{id:"labels"},"Labels"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://docs.github.com/en/issues/using-labels-and-milestones-to-track-work/managing-labels#applying-a-label"},"Learn how")),(0,a.kt)("p",null,"Labels are used to sort and describe issues and pull requests. Some labels are usually reserved for one or the other, though most labels may be applied to both."),(0,a.kt)("p",null,"They may be used to:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'highlight the state of completion, such as "Triage" or "Blocked"'),(0,a.kt)("li",{parentName:"ul"},'organizing according to the source code relevant to issues or the source code changed by pull requests, such as "Blockchain", "Discovery", or "Network"')),(0,a.kt)("h2",{id:"legal"},"Legal"),(0,a.kt)("p",null,"You will need to complete a Contributor License Agreement (CLA) before your pull request can be accepted. This agreement testifies that you are granting us permission to use the source code you are submitting, and that this work is being submitted under appropriate license that we can use it."),(0,a.kt)("p",null,"For each pull request, all commit authors are required to sign the CLA. A copy can be found ",(0,a.kt)("a",{parentName:"p",href:"https://jfrog.com/cla/"},"here"),". We are using ",(0,a.kt)("a",{parentName:"p",href:"https://cla-assistant.io/"},"CLA Assistant")," which requires commit email to match your GitHub account. You can view signed CLAs through their site."))}h.isMDXComponent=!0}}]);