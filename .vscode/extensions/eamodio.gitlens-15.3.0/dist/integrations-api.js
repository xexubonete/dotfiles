exports.id=773,exports.ids=[773],exports.modules={1574:(e,r,t)=>{t.r(r),t.d(r,{ProvidersApi:()=>ProvidersApi});var s=t(910),o=t.n(s),u=t(1398),n=t(3459),i=t(7372),a=t(8803),l=t(3166),g=t(1298);let ProvidersApi=class ProvidersApi{constructor(e,r){this.container=e,this.authenticationService=r;let t=(0,n.cQ)(),s=`${e.debugging?"GitLens-Debug":e.prerelease?"GitLens-Pre":"GitLens"}/${e.version} (${u.env.appName}/${u.version}; ${(0,i.uo)()})`,a=async({url:e,...r})=>c(await (0,n.hd)(e,{agent:t,...r,headers:{"User-Agent":s,...r.headers}})),l=o()({request:a});this.providers={[g.Q7.GitHub]:{...g.Mt[g.Q7.GitHub],provider:l.github,getCurrentUserFn:l.github.getCurrentUser.bind(l.github),getPullRequestsForReposFn:l.github.getPullRequestsForRepos.bind(l.github),getPullRequestsForUserFn:l.github.getPullRequestsAssociatedWithUser.bind(l.github),getIssuesForReposFn:l.github.getIssuesForRepos.bind(l.github)},[g.PY.GitHubEnterprise]:{...g.Mt[g.PY.GitHubEnterprise],provider:l.github,getCurrentUserFn:l.github.getCurrentUser.bind(l.github),getPullRequestsForReposFn:l.github.getPullRequestsForRepos.bind(l.github),getPullRequestsForUserFn:l.github.getPullRequestsAssociatedWithUser.bind(l.github),getIssuesForReposFn:l.github.getIssuesForRepos.bind(l.github)},[g.Q7.GitLab]:{...g.Mt[g.Q7.GitLab],provider:l.gitlab,getCurrentUserFn:l.gitlab.getCurrentUser.bind(l.gitlab),getPullRequestsForReposFn:l.gitlab.getPullRequestsForRepos.bind(l.gitlab),getPullRequestsForRepoFn:l.gitlab.getPullRequestsForRepo.bind(l.gitlab),getPullRequestsForUserFn:l.gitlab.getPullRequestsAssociatedWithUser.bind(l.gitlab),getIssuesForReposFn:l.gitlab.getIssuesForRepos.bind(l.gitlab),getIssuesForRepoFn:l.gitlab.getIssuesForRepo.bind(l.gitlab),mergePullRequestFn:l.gitlab.mergePullRequest.bind(l.gitlab)},[g.PY.GitLabSelfHosted]:{...g.Mt[g.PY.GitLabSelfHosted],provider:l.gitlab,getCurrentUserFn:l.gitlab.getCurrentUser.bind(l.gitlab),getPullRequestsForReposFn:l.gitlab.getPullRequestsForRepos.bind(l.gitlab),getPullRequestsForRepoFn:l.gitlab.getPullRequestsForRepo.bind(l.gitlab),getPullRequestsForUserFn:l.gitlab.getPullRequestsAssociatedWithUser.bind(l.gitlab),getIssuesForReposFn:l.gitlab.getIssuesForRepos.bind(l.gitlab),getIssuesForRepoFn:l.gitlab.getIssuesForRepo.bind(l.gitlab)},[g.Q7.Bitbucket]:{...g.Mt[g.Q7.Bitbucket],provider:l.bitbucket,getCurrentUserFn:l.bitbucket.getCurrentUser.bind(l.bitbucket),getPullRequestsForReposFn:l.bitbucket.getPullRequestsForRepos.bind(l.bitbucket),getPullRequestsForUserFn:l.bitbucket.getPullRequestsForUser.bind(l.bitbucket),getPullRequestsForRepoFn:l.bitbucket.getPullRequestsForRepo.bind(l.bitbucket)},[g.Q7.AzureDevOps]:{...g.Mt[g.Q7.AzureDevOps],provider:l.azureDevOps,getCurrentUserFn:l.azureDevOps.getCurrentUser.bind(l.azureDevOps),getCurrentUserForInstanceFn:l.azureDevOps.getCurrentUserForInstance.bind(l.azureDevOps),getAzureResourcesForUserFn:l.azureDevOps.getOrgsForUser.bind(l.azureDevOps),getAzureProjectsForResourceFn:l.azureDevOps.getAzureProjects.bind(l.azureDevOps),getPullRequestsForReposFn:l.azureDevOps.getPullRequestsForRepos.bind(l.azureDevOps),getPullRequestsForRepoFn:l.azureDevOps.getPullRequestsForRepo.bind(l.azureDevOps),getPullRequestsForAzureProjectsFn:l.azureDevOps.getPullRequestsForProjects.bind(l.azureDevOps),getIssuesForAzureProjectFn:l.azureDevOps.getIssuesForAzureProject.bind(l.azureDevOps),getReposForAzureProjectFn:l.azureDevOps.getReposForAzureProject.bind(l.azureDevOps)},[g.tp.Jira]:{...g.Mt[g.tp.Jira],provider:l.jira,getCurrentUserForResourceFn:l.jira.getCurrentUserForResource.bind(l.jira),getJiraResourcesForCurrentUserFn:l.jira.getJiraResourcesForCurrentUser.bind(l.jira),getJiraProjectsForResourcesFn:l.jira.getJiraProjectsForResources.bind(l.jira),getIssueFn:l.jira.getIssue.bind(l.jira),getIssuesForProjectFn:l.jira.getIssuesForProject.bind(l.jira),getIssuesForResourceForCurrentUserFn:l.jira.getIssuesForResourceForCurrentUser.bind(l.jira)},[g.tp.Trello]:{...g.Mt[g.tp.Trello],provider:l.trello}}}providers;getScopesForProvider(e){return this.providers[e]?.scopes}getProviderDomain(e){return this.providers[e]?.domain}getProviderPullRequestsPagingMode(e){return this.providers[e]?.pullRequestsPagingMode}getProviderIssuesPagingMode(e){return this.providers[e]?.issuesPagingMode}providerSupportsPullRequestFilters(e,r){return this.providers[e]?.supportedPullRequestFilters!=null&&r.every(r=>this.providers[e]?.supportedPullRequestFilters?.includes(r))}providerSupportsIssueFilters(e,r){return this.providers[e]?.supportedIssueFilters!=null&&r.every(r=>this.providers[e]?.supportedIssueFilters?.includes(r))}isRepoIdsInput(e){return null!=e&&Array.isArray(e)&&e.every(e=>"string"==typeof e||"number"==typeof e)}async getProviderToken(e,r){let t=null==e.domain||null==e.scopes?void 0:{domain:e.domain,scopes:e.scopes};try{let s=await this.authenticationService.get(e.id);return(await s.getSession(t,{createIfNeeded:r?.createSessionIfNeeded}))?.accessToken}catch{return}}getAzurePATForOAuthToken(e){return(0,l.K3)(`PAT:${e}`)}async ensureProviderTokenAndFunction(e,r,t){let s=this.providers[e];if(null==s)throw Error(`Provider with id ${e} not registered`);let o=t??await this.getProviderToken(s);if(null==o)throw Error(`Not connected to provider ${e}`);if(null==s[r])throw Error(`Provider with id ${e} does not support function: ${r}`);return{provider:s,token:o}}handleProviderError(e,r,t){if(null==this.providers[e])throw Error(`Provider with id ${e} not registered`);if(e===g.tp.Jira&&t?.response?.status!=null){if(401===t.response.status)throw new a.v3(e,a.R.Forbidden,t);if(429===t.response.status){let e;let s=t.response.headers?.["x-ratelimit-reset"];throw null!=s&&Number.isNaN(e=parseInt(s,10))&&(e=void 0),new a.qc(t,r,e)}if(t.response.status>=400&&t.response.status<500)throw new a.Iz(t)}throw t}async getPagedResult(e,r,t,s,o="{}",u=!1){let n;try{n=JSON.parse(o)}catch{n={}}let i=n.value,a=n.type,l={};"page"===a?l={page:i}:"cursor"===a&&(l={cursor:i});let g={...r,...l},c=await t?.(g,{token:s,isPAT:u});if(null==c)return{values:[]};let d=c.pageInfo?.hasNextPage??!1,F="{}";return c.pageInfo?.endCursor!=null?F=JSON.stringify({value:c.pageInfo?.endCursor,type:"cursor"}):c.pageInfo?.nextPage!=null&&(F=JSON.stringify({value:c.pageInfo?.nextPage,type:"page"})),{values:c.data,paging:{cursor:F,more:d}}}async getCurrentUser(e,r){let{provider:t,token:s}=await this.ensureProviderTokenAndFunction(e,"getCurrentUserFn",r?.accessToken);try{return(await t.getCurrentUserFn?.({},{token:s,isPAT:r?.isPAT}))?.data}catch(r){return this.handleProviderError(e,s,r)}}async getCurrentUserForInstance(e,r,t){let{provider:s,token:o}=await this.ensureProviderTokenAndFunction(e,"getCurrentUserForInstanceFn",t?.accessToken);return(await s.getCurrentUserForInstanceFn?.({namespace:r},{token:o,isPAT:t?.isPAT}))?.data}async getCurrentUserForResource(e,r,t){let{provider:s,token:o}=await this.ensureProviderTokenAndFunction(e,"getCurrentUserForResourceFn",t?.accessToken);try{return(await s.getCurrentUserForResourceFn?.({resourceId:r},{token:o}))?.data}catch(r){return this.handleProviderError(e,o,r)}}async getJiraResourcesForCurrentUser(e){let{provider:r,token:t}=await this.ensureProviderTokenAndFunction(g.tp.Jira,"getJiraResourcesForCurrentUserFn",e?.accessToken);try{return(await r.getJiraResourcesForCurrentUserFn?.({token:t}))?.data}catch(e){return this.handleProviderError(g.tp.Jira,t,e)}}async getAzureResourcesForUser(e,r){let{provider:t,token:s}=await this.ensureProviderTokenAndFunction(g.Q7.AzureDevOps,"getAzureResourcesForUserFn",r?.accessToken);try{return(await t.getAzureResourcesForUserFn?.({userId:e},{token:s}))?.data}catch(e){return this.handleProviderError(g.Q7.AzureDevOps,s,e)}}async getJiraProjectsForResources(e,r){let{provider:t,token:s}=await this.ensureProviderTokenAndFunction(g.tp.Jira,"getJiraProjectsForResourcesFn",r?.accessToken);try{return(await t.getJiraProjectsForResourcesFn?.({resourceIds:e},{token:s}))?.data}catch(e){return this.handleProviderError(g.tp.Jira,s,e)}}async getAzureProjectsForResource(e,r){let{provider:t,token:s}=await this.ensureProviderTokenAndFunction(g.Q7.AzureDevOps,"getAzureProjectsForResourceFn",r?.accessToken),o=r?.isPAT?s:this.getAzurePATForOAuthToken(s);try{return this.getPagedResult(t,{namespace:e,...r},t.getAzureProjectsForResourceFn,o,r?.cursor,!0)}catch(e){return this.handleProviderError(g.Q7.AzureDevOps,s,e)}}async getReposForAzureProject(e,r,t){let{provider:s,token:o}=await this.ensureProviderTokenAndFunction(g.Q7.AzureDevOps,"getReposForAzureProjectFn",t?.accessToken);return this.getPagedResult(s,{namespace:e,project:r,...t},s.getReposForAzureProjectFn,o,t?.cursor)}async getPullRequestsForRepos(e,r,t){let{provider:s,token:o}=await this.ensureProviderTokenAndFunction(e,"getPullRequestsForReposFn",t?.accessToken);return this.getPagedResult(s,{...this.isRepoIdsInput(r)?{repoIds:r}:{repos:r},...t},s.getPullRequestsForReposFn,o,t?.cursor)}async getPullRequestsForRepo(e,r,t){let{provider:s,token:o}=await this.ensureProviderTokenAndFunction(e,"getPullRequestsForRepoFn",t?.accessToken);return this.getPagedResult(s,{repo:r,...t},s.getPullRequestsForRepoFn,o,t?.cursor)}async getPullRequestsForUser(e,r,t){let{provider:s,token:o}=await this.ensureProviderTokenAndFunction(e,"getPullRequestsForUserFn",t?.accessToken);return this.getPagedResult(s,{...e===g.Q7.Bitbucket?{userId:r}:{username:r},...t},s.getPullRequestsForUserFn,o,t?.cursor)}async getPullRequestsForAzureProjects(e,r){let{provider:t,token:s}=await this.ensureProviderTokenAndFunction(g.Q7.AzureDevOps,"getPullRequestsForAzureProjectsFn",r?.accessToken),o=r?.isPAT?s:this.getAzurePATForOAuthToken(s);try{return(await t.getPullRequestsForAzureProjectsFn?.({projects:e,...r},{token:o,isPAT:!0}))?.data}catch(e){return this.handleProviderError(g.Q7.AzureDevOps,s,e)}}async mergePullRequest(e,r,t){let{provider:s,token:o}=await this.ensureProviderTokenAndFunction(e,"mergePullRequestFn"),u=r.refs?.head;if(null==u)return!1;try{return await s.mergePullRequestFn?.({pullRequest:{headRef:{oid:u.sha},id:r.id,number:Number.parseInt(r.id,10),repository:{id:r.repository.repo,name:r.repository.repo,owner:{login:r.repository.owner}}},...t},{token:o}),!0}catch(r){return this.handleProviderError(e,o,r)}}async getIssuesForRepos(e,r,t){let{provider:s,token:o}=await this.ensureProviderTokenAndFunction(e,"getIssuesForReposFn",t?.accessToken);return this.getPagedResult(s,{...this.isRepoIdsInput(r)?{repoIds:r}:{repos:r},...t},s.getIssuesForReposFn,o,t?.cursor)}async getIssuesForRepo(e,r,t){let{provider:s,token:o}=await this.ensureProviderTokenAndFunction(e,"getIssuesForRepoFn",t?.accessToken);return this.getPagedResult(s,{repo:r,...t},s.getIssuesForRepoFn,o,t?.cursor)}async getIssuesForAzureProject(e,r,t){let{provider:s,token:o}=await this.ensureProviderTokenAndFunction(g.Q7.AzureDevOps,"getIssuesForAzureProjectFn",t?.accessToken);return this.getPagedResult(s,{namespace:e,project:r,...t},s.getIssuesForAzureProjectFn,o,t?.cursor)}async getIssuesForProject(e,r,t,s){let{provider:o,token:u}=await this.ensureProviderTokenAndFunction(e,"getIssuesForProjectFn",s?.accessToken);try{let e=await o.getIssuesForProjectFn?.({projectKey:r,resourceId:t,...s},{token:u});return e?.data}catch(r){return this.handleProviderError(e,u,r)}}async getIssuesForResourceForCurrentUser(e,r,t){let{provider:s,token:o}=await this.ensureProviderTokenAndFunction(e,"getIssuesForResourceForCurrentUserFn",t?.accessToken);try{let e=await s.getIssuesForResourceForCurrentUserFn?.({resourceId:r},{token:o});return e?.data}catch(r){return this.handleProviderError(e,o,r)}}async getIssue(e,r,t,s){let{provider:o,token:u}=await this.ensureProviderTokenAndFunction(e,"getIssueFn",s?.accessToken);try{let e=await o.getIssueFn?.({resourceId:r,number:t},{token:u});return e?.data}catch(r){return this.handleProviderError(e,u,r)}}};async function c(e){let r=e.headers.get("content-type")||"",t=null;if(r.startsWith("application/json")){let r=await e.text();t=r.trim().length>0?JSON.parse(r):null}else if(r.startsWith("text/")||""===r)t=await e.text();else if(r.startsWith("application/vnd.github.raw+json"))t=await e.arrayBuffer();else throw Error(`Unsupported content-type: ${r}`);let s={body:t,headers:Object.fromEntries(e.headers.entries()),status:e.status,statusText:e.statusText};if(!e.ok){let r=Error(e.statusText);throw Object.assign(r,{response:s}),r}return s}}};