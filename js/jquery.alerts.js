




<!DOCTYPE html>
<html class="   ">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    
    
    <title>jquery.alerts/jquery.alerts.js at master · aurels/jquery.alerts · GitHub</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png" />
    <meta property="fb:app_id" content="1401488693436528"/>

      <meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="aurels/jquery.alerts" name="twitter:title" /><meta content="jquery.alerts - pretty alerts, confirms and prompts for jQuery" name="twitter:description" /><meta content="https://avatars1.githubusercontent.com/u/5442?s=400" name="twitter:image:src" />
<meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="https://avatars1.githubusercontent.com/u/5442?s=400" property="og:image" /><meta content="aurels/jquery.alerts" property="og:title" /><meta content="https://github.com/aurels/jquery.alerts" property="og:url" /><meta content="jquery.alerts - pretty alerts, confirms and prompts for jQuery" property="og:description" />

    <link rel="assets" href="https://assets-cdn.github.com/">
    <link rel="conduit-xhr" href="https://ghconduit.com:25035">
    

    <meta name="msapplication-TileImage" content="/windows-tile.png" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="selected-link" value="repo_source" data-pjax-transient />
      <meta name="google-analytics" content="UA-3769691-2">

    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="collector-cdn.github.com" name="octolytics-script-host" /><meta content="github" name="octolytics-app-id" /><meta content="C8A31EC2:6287:1541C95F:53A9CBDC" name="octolytics-dimension-request_id" />
    

    
    
    <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico" />


    <meta content="authenticity_token" name="csrf-param" />
<meta content="bltkad3xvZuO9palTzuGUxqfOeDbfjCaZ2WURQW0InBvP2LoF5onnkq/scFufxfkELl3XtAN2N7anEPjSWQSsA==" name="csrf-token" />

    <link href="https://assets-cdn.github.com/assets/github-f0e5616dfcefd5a22c0554c5085ac35c85bf4ed3.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://assets-cdn.github.com/assets/github2-06b0aa52eb3e575e2d66403272866acf53b604ac.css" media="all" rel="stylesheet" type="text/css" />
    


    <meta http-equiv="x-pjax-version" content="030bb2bfa2a3f62f430be1342523e43d">

      
  <meta name="description" content="jquery.alerts - pretty alerts, confirms and prompts for jQuery" />


  <meta content="5442" name="octolytics-dimension-user_id" /><meta content="aurels" name="octolytics-dimension-user_login" /><meta content="322081" name="octolytics-dimension-repository_id" /><meta content="aurels/jquery.alerts" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="322081" name="octolytics-dimension-repository_network_root_id" /><meta content="aurels/jquery.alerts" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/aurels/jquery.alerts/commits/master.atom" rel="alternate" title="Recent Commits to jquery.alerts:master" type="application/atom+xml" />

  </head>


  <body class="logged_out  env-production windows vis-public page-blob">
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>
    <div class="wrapper">
      
      
      
      


      
      <div class="header header-logged-out">
  <div class="container clearfix">

    <a class="header-logo-wordmark" href="https://github.com/">
      <span class="mega-octicon octicon-logo-github"></span>
    </a>

    <div class="header-actions">
        <a class="button primary" href="/join">Sign up</a>
      <a class="button signin" href="/login?return_to=%2Faurels%2Fjquery.alerts%2Fblob%2Fmaster%2Fjquery.alerts.js">Sign in</a>
    </div>

    <div class="command-bar js-command-bar  in-repository">

      <ul class="top-nav">
          <li class="explore"><a href="/explore">Explore</a></li>
          <li class="features"><a href="/features">Features</a></li>
          <li class="enterprise"><a href="https://enterprise.github.com/">Enterprise</a></li>
          <li class="blog"><a href="/blog">Blog</a></li>
      </ul>
        <form accept-charset="UTF-8" action="/search" class="command-bar-form" id="top_search_form" method="get">

<div class="commandbar">
  <span class="message"></span>
  <input type="text" data-hotkey="s, /" name="q" id="js-command-bar-field" placeholder="Search or type a command" tabindex="1" autocapitalize="off"
    
    
      data-repo="aurels/jquery.alerts"
      data-branch="master"
      data-sha="e67c6ff4ef56a038478dd1f599d40d50c3602e39"
  >
  <div class="display hidden"></div>
</div>

    <input type="hidden" name="nwo" value="aurels/jquery.alerts" />

    <div class="select-menu js-menu-container js-select-menu search-context-select-menu">
      <span class="minibutton select-menu-button js-menu-target" role="button" aria-haspopup="true">
        <span class="js-select-button">This repository</span>
      </span>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container" aria-hidden="true">
        <div class="select-menu-modal">

          <div class="select-menu-item js-navigation-item js-this-repository-navigation-item selected">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" class="js-search-this-repository" name="search_target" value="repository" checked="checked" />
            <div class="select-menu-item-text js-select-button-text">This repository</div>
          </div> <!-- /.select-menu-item -->

          <div class="select-menu-item js-navigation-item js-all-repositories-navigation-item">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" name="search_target" value="global" />
            <div class="select-menu-item-text js-select-button-text">All repositories</div>
          </div> <!-- /.select-menu-item -->

        </div>
      </div>
    </div>

  <span class="help tooltipped tooltipped-s" aria-label="Show command bar help">
    <span class="octicon octicon-question"></span>
  </span>


  <input type="hidden" name="ref" value="cmdform">

</form>
    </div>

  </div>
</div>



      <div id="start-of-content" class="accessibility-aid"></div>
          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    <div id="js-flash-container">
      
    </div>
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">
        

<ul class="pagehead-actions">


  <li>
      <a href="/login?return_to=%2Faurels%2Fjquery.alerts"
    class="minibutton with-count star-button tooltipped tooltipped-n"
    aria-label="You must be signed in to star a repository" rel="nofollow">
    <span class="octicon octicon-star"></span>
    Star
  </a>

    <a class="social-count js-social-count" href="/aurels/jquery.alerts/stargazers">
      8
    </a>

  </li>

    <li>
      <a href="/login?return_to=%2Faurels%2Fjquery.alerts"
        class="minibutton with-count js-toggler-target fork-button tooltipped tooltipped-n"
        aria-label="You must be signed in to fork a repository" rel="nofollow">
        <span class="octicon octicon-repo-forked"></span>
        Fork
      </a>
      <a href="/aurels/jquery.alerts/network" class="social-count">
        16
      </a>
    </li>
</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="repo-label"><span>public</span></span>
          <span class="mega-octicon octicon-repo"></span>
          <span class="author"><a href="/aurels" class="url fn" itemprop="url" rel="author"><span itemprop="title">aurels</span></a></span><!--
       --><span class="path-divider">/</span><!--
       --><strong><a href="/aurels/jquery.alerts" class="js-current-repository js-repo-home-link">jquery.alerts</a></strong>

          <span class="page-context-loader">
            <img alt="" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </span>

        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">
      <div class="repository-with-sidebar repo-container new-discussion-timeline js-new-discussion-timeline  ">
        <div class="repository-sidebar clearfix">
            

<div class="sunken-menu vertical-right repo-nav js-repo-nav js-repository-container-pjax js-octicon-loaders">
  <div class="sunken-menu-contents">
    <ul class="sunken-menu-group">
      <li class="tooltipped tooltipped-w" aria-label="Code">
        <a href="/aurels/jquery.alerts" aria-label="Code" class="selected js-selected-navigation-item sunken-menu-item" data-hotkey="g c" data-pjax="true" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /aurels/jquery.alerts">
          <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

        <li class="tooltipped tooltipped-w" aria-label="Issues">
          <a href="/aurels/jquery.alerts/issues" aria-label="Issues" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-hotkey="g i" data-selected-links="repo_issues /aurels/jquery.alerts/issues">
            <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
            <span class='counter'>1</span>
            <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>

      <li class="tooltipped tooltipped-w" aria-label="Pull Requests">
        <a href="/aurels/jquery.alerts/pulls" aria-label="Pull Requests" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-hotkey="g p" data-selected-links="repo_pulls /aurels/jquery.alerts/pulls">
            <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull Requests</span>
            <span class='counter'>1</span>
            <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>


    </ul>
    <div class="sunken-menu-separator"></div>
    <ul class="sunken-menu-group">

      <li class="tooltipped tooltipped-w" aria-label="Pulse">
        <a href="/aurels/jquery.alerts/pulse" aria-label="Pulse" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="pulse /aurels/jquery.alerts/pulse">
          <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped tooltipped-w" aria-label="Graphs">
        <a href="/aurels/jquery.alerts/graphs" aria-label="Graphs" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="repo_graphs repo_contributors /aurels/jquery.alerts/graphs">
          <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped tooltipped-w" aria-label="Network">
        <a href="/aurels/jquery.alerts/network" aria-label="Network" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-selected-links="repo_network /aurels/jquery.alerts/network">
          <span class="octicon octicon-repo-forked"></span> <span class="full-word">Network</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>
    </ul>


  </div>
</div>

              <div class="only-with-full-nav">
                

  

<div class="clone-url open"
  data-protocol-type="http"
  data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone">
  <h3><strong>HTTPS</strong> clone URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="https://github.com/aurels/jquery.alerts.git" readonly="readonly">
    <span class="url-box-clippy">
    <button aria-label="copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="https://github.com/aurels/jquery.alerts.git" data-copied-hint="copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  

<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><strong>Subversion</strong> checkout URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="https://github.com/aurels/jquery.alerts" readonly="readonly">
    <span class="url-box-clippy">
    <button aria-label="copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="https://github.com/aurels/jquery.alerts" data-copied-hint="copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>


<p class="clone-options">You can clone with
      <a href="#" class="js-clone-selector" data-protocol="http">HTTPS</a>
      or <a href="#" class="js-clone-selector" data-protocol="subversion">Subversion</a>.
  <a href="https://help.github.com/articles/which-remote-url-should-i-use" class="help tooltipped tooltipped-n" aria-label="Get help on which URL is right for you.">
    <span class="octicon octicon-question"></span>
  </a>
</p>


  <a href="http://windows.github.com" class="minibutton sidebar-button" title="Save aurels/jquery.alerts to your computer and use it in GitHub Desktop." aria-label="Save aurels/jquery.alerts to your computer and use it in GitHub Desktop.">
    <span class="octicon octicon-device-desktop"></span>
    Clone in Desktop
  </a>

                <a href="/aurels/jquery.alerts/archive/master.zip"
                   class="minibutton sidebar-button"
                   aria-label="Download aurels/jquery.alerts as a zip file"
                   title="Download aurels/jquery.alerts as a zip file"
                   rel="nofollow">
                  <span class="octicon octicon-cloud-download"></span>
                  Download ZIP
                </a>
              </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>
          


<a href="/aurels/jquery.alerts/blob/ff3c402bdfff840498f29a9a257c14ffd5e8f8ca/jquery.alerts.js" class="hidden js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:5eaf9dda9f0b8fa4a6680eded223dac4 -->

<p title="This is a placeholder element" class="js-history-link-replace hidden"></p>

<div class="file-navigation">
  

<div class="select-menu js-menu-container js-select-menu" >
  <span class="minibutton select-menu-button js-menu-target css-truncate" data-hotkey="w"
    data-master-branch="master"
    data-ref="master"
    title="master"
    role="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <span class="octicon octicon-git-branch"></span>
    <i>branch:</i>
    <span class="js-select-button css-truncate-target">master</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-x js-menu-close"></span>
      </div> <!-- /.select-menu-header -->

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
            </li>
          </ul>
        </div><!-- /.select-menu-tabs -->
      </div><!-- /.select-menu-filters -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/aurels/jquery.alerts/blob/master/jquery.alerts.js"
                 data-name="master"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="master">master</a>
            </div> <!-- /.select-menu-item -->
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

    </div> <!-- /.select-menu-modal -->
  </div> <!-- /.select-menu-modal-holder -->
</div> <!-- /.select-menu -->

  <div class="button-group right">
    <a href="/aurels/jquery.alerts/find/master"
          class="js-show-file-finder minibutton empty-icon tooltipped tooltipped-s"
          data-pjax
          data-hotkey="t"
          aria-label="Quickly jump between files">
      <span class="octicon octicon-list-unordered"></span>
    </a>
    <button class="js-zeroclipboard minibutton zeroclipboard-button"
          data-clipboard-text="jquery.alerts.js"
          aria-label="Copy to clipboard"
          data-copied-hint="Copied!">
      <span class="octicon octicon-clippy"></span>
    </button>
  </div>

  <div class="breadcrumb">
    <span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/aurels/jquery.alerts" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">jquery.alerts</span></a></span></span><span class="separator"> / </span><strong class="final-path">jquery.alerts.js</strong>
  </div>
</div>


  <div class="commit file-history-tease">
      <img alt="" class="main-avatar" height="24" src="https://0.gravatar.com/avatar/b32d2ef01e7ae7c399eaf19ece637906?d=https%3A%2F%2Fassets-cdn.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png&amp;r=x&amp;s=140" width="24" />
      <span class="author"><span>aurels</span></span>
      <time datetime="2009-09-30T11:32:30+02:00" is="relative-time">September 30, 2009</time>
      <div class="commit-title">
          <a href="/aurels/jquery.alerts/commit/bf240e1a1a707e7200c9ad83fc507f9aec287fc8" class="message" data-pjax="true" title="initial commit for sure">initial commit for sure</a>
      </div>

    <div class="participation">
      <p class="quickstat"><a href="#blob_contributors_box" rel="facebox"><strong>0</strong>  contributors</a></p>
      
    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list">
      </ul>
    </div>
  </div>

<div class="file-box">
  <div class="file">
    <div class="meta clearfix">
      <div class="info file-name">
        <span class="icon"><b class="octicon octicon-file-text"></b></span>
        <span class="mode" title="File Mode">executable file</span>
        <span class="meta-divider"></span>
          <span>219 lines (189 sloc)</span>
          <span class="meta-divider"></span>
        <span>7.222 kb</span>
      </div>
      <div class="actions">
        <div class="button-group">
            <a class="minibutton tooltipped tooltipped-w"
               href="http://windows.github.com" aria-label="Open this file in GitHub for Windows">
                <span class="octicon octicon-device-desktop"></span> Open
            </a>
              <a class="minibutton disabled tooltipped tooltipped-w" href="#"
                 aria-label="You must be signed in to make or propose changes">Edit</a>
          <a href="/aurels/jquery.alerts/raw/master/jquery.alerts.js" class="minibutton " id="raw-url">Raw</a>
            <a href="/aurels/jquery.alerts/blame/master/jquery.alerts.js" class="minibutton js-update-url-with-hash">Blame</a>
          <a href="/aurels/jquery.alerts/commits/master/jquery.alerts.js" class="minibutton " rel="nofollow">History</a>
        </div><!-- /.button-group -->
          <a class="minibutton danger disabled empty-icon tooltipped tooltipped-w" href="#"
             aria-label="You must be signed in to make or propose changes">
          Delete
        </a>
      </div><!-- /.actions -->
    </div>
      
  <div class="blob-wrapper data type-javascript js-blob-data">
       <table class="file-code file-diff tab-size-8">
         <tr class="file-code-line">
           <td class="blob-line-nums">
             <span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>
<span id="L3" rel="#L3">3</span>
<span id="L4" rel="#L4">4</span>
<span id="L5" rel="#L5">5</span>
<span id="L6" rel="#L6">6</span>
<span id="L7" rel="#L7">7</span>
<span id="L8" rel="#L8">8</span>
<span id="L9" rel="#L9">9</span>
<span id="L10" rel="#L10">10</span>
<span id="L11" rel="#L11">11</span>
<span id="L12" rel="#L12">12</span>
<span id="L13" rel="#L13">13</span>
<span id="L14" rel="#L14">14</span>
<span id="L15" rel="#L15">15</span>
<span id="L16" rel="#L16">16</span>
<span id="L17" rel="#L17">17</span>
<span id="L18" rel="#L18">18</span>
<span id="L19" rel="#L19">19</span>
<span id="L20" rel="#L20">20</span>
<span id="L21" rel="#L21">21</span>
<span id="L22" rel="#L22">22</span>
<span id="L23" rel="#L23">23</span>
<span id="L24" rel="#L24">24</span>
<span id="L25" rel="#L25">25</span>
<span id="L26" rel="#L26">26</span>
<span id="L27" rel="#L27">27</span>
<span id="L28" rel="#L28">28</span>
<span id="L29" rel="#L29">29</span>
<span id="L30" rel="#L30">30</span>
<span id="L31" rel="#L31">31</span>
<span id="L32" rel="#L32">32</span>
<span id="L33" rel="#L33">33</span>
<span id="L34" rel="#L34">34</span>
<span id="L35" rel="#L35">35</span>
<span id="L36" rel="#L36">36</span>
<span id="L37" rel="#L37">37</span>
<span id="L38" rel="#L38">38</span>
<span id="L39" rel="#L39">39</span>
<span id="L40" rel="#L40">40</span>
<span id="L41" rel="#L41">41</span>
<span id="L42" rel="#L42">42</span>
<span id="L43" rel="#L43">43</span>
<span id="L44" rel="#L44">44</span>
<span id="L45" rel="#L45">45</span>
<span id="L46" rel="#L46">46</span>
<span id="L47" rel="#L47">47</span>
<span id="L48" rel="#L48">48</span>
<span id="L49" rel="#L49">49</span>
<span id="L50" rel="#L50">50</span>
<span id="L51" rel="#L51">51</span>
<span id="L52" rel="#L52">52</span>
<span id="L53" rel="#L53">53</span>
<span id="L54" rel="#L54">54</span>
<span id="L55" rel="#L55">55</span>
<span id="L56" rel="#L56">56</span>
<span id="L57" rel="#L57">57</span>
<span id="L58" rel="#L58">58</span>
<span id="L59" rel="#L59">59</span>
<span id="L60" rel="#L60">60</span>
<span id="L61" rel="#L61">61</span>
<span id="L62" rel="#L62">62</span>
<span id="L63" rel="#L63">63</span>
<span id="L64" rel="#L64">64</span>
<span id="L65" rel="#L65">65</span>
<span id="L66" rel="#L66">66</span>
<span id="L67" rel="#L67">67</span>
<span id="L68" rel="#L68">68</span>
<span id="L69" rel="#L69">69</span>
<span id="L70" rel="#L70">70</span>
<span id="L71" rel="#L71">71</span>
<span id="L72" rel="#L72">72</span>
<span id="L73" rel="#L73">73</span>
<span id="L74" rel="#L74">74</span>
<span id="L75" rel="#L75">75</span>
<span id="L76" rel="#L76">76</span>
<span id="L77" rel="#L77">77</span>
<span id="L78" rel="#L78">78</span>
<span id="L79" rel="#L79">79</span>
<span id="L80" rel="#L80">80</span>
<span id="L81" rel="#L81">81</span>
<span id="L82" rel="#L82">82</span>
<span id="L83" rel="#L83">83</span>
<span id="L84" rel="#L84">84</span>
<span id="L85" rel="#L85">85</span>
<span id="L86" rel="#L86">86</span>
<span id="L87" rel="#L87">87</span>
<span id="L88" rel="#L88">88</span>
<span id="L89" rel="#L89">89</span>
<span id="L90" rel="#L90">90</span>
<span id="L91" rel="#L91">91</span>
<span id="L92" rel="#L92">92</span>
<span id="L93" rel="#L93">93</span>
<span id="L94" rel="#L94">94</span>
<span id="L95" rel="#L95">95</span>
<span id="L96" rel="#L96">96</span>
<span id="L97" rel="#L97">97</span>
<span id="L98" rel="#L98">98</span>
<span id="L99" rel="#L99">99</span>
<span id="L100" rel="#L100">100</span>
<span id="L101" rel="#L101">101</span>
<span id="L102" rel="#L102">102</span>
<span id="L103" rel="#L103">103</span>
<span id="L104" rel="#L104">104</span>
<span id="L105" rel="#L105">105</span>
<span id="L106" rel="#L106">106</span>
<span id="L107" rel="#L107">107</span>
<span id="L108" rel="#L108">108</span>
<span id="L109" rel="#L109">109</span>
<span id="L110" rel="#L110">110</span>
<span id="L111" rel="#L111">111</span>
<span id="L112" rel="#L112">112</span>
<span id="L113" rel="#L113">113</span>
<span id="L114" rel="#L114">114</span>
<span id="L115" rel="#L115">115</span>
<span id="L116" rel="#L116">116</span>
<span id="L117" rel="#L117">117</span>
<span id="L118" rel="#L118">118</span>
<span id="L119" rel="#L119">119</span>
<span id="L120" rel="#L120">120</span>
<span id="L121" rel="#L121">121</span>
<span id="L122" rel="#L122">122</span>
<span id="L123" rel="#L123">123</span>
<span id="L124" rel="#L124">124</span>
<span id="L125" rel="#L125">125</span>
<span id="L126" rel="#L126">126</span>
<span id="L127" rel="#L127">127</span>
<span id="L128" rel="#L128">128</span>
<span id="L129" rel="#L129">129</span>
<span id="L130" rel="#L130">130</span>
<span id="L131" rel="#L131">131</span>
<span id="L132" rel="#L132">132</span>
<span id="L133" rel="#L133">133</span>
<span id="L134" rel="#L134">134</span>
<span id="L135" rel="#L135">135</span>
<span id="L136" rel="#L136">136</span>
<span id="L137" rel="#L137">137</span>
<span id="L138" rel="#L138">138</span>
<span id="L139" rel="#L139">139</span>
<span id="L140" rel="#L140">140</span>
<span id="L141" rel="#L141">141</span>
<span id="L142" rel="#L142">142</span>
<span id="L143" rel="#L143">143</span>
<span id="L144" rel="#L144">144</span>
<span id="L145" rel="#L145">145</span>
<span id="L146" rel="#L146">146</span>
<span id="L147" rel="#L147">147</span>
<span id="L148" rel="#L148">148</span>
<span id="L149" rel="#L149">149</span>
<span id="L150" rel="#L150">150</span>
<span id="L151" rel="#L151">151</span>
<span id="L152" rel="#L152">152</span>
<span id="L153" rel="#L153">153</span>
<span id="L154" rel="#L154">154</span>
<span id="L155" rel="#L155">155</span>
<span id="L156" rel="#L156">156</span>
<span id="L157" rel="#L157">157</span>
<span id="L158" rel="#L158">158</span>
<span id="L159" rel="#L159">159</span>
<span id="L160" rel="#L160">160</span>
<span id="L161" rel="#L161">161</span>
<span id="L162" rel="#L162">162</span>
<span id="L163" rel="#L163">163</span>
<span id="L164" rel="#L164">164</span>
<span id="L165" rel="#L165">165</span>
<span id="L166" rel="#L166">166</span>
<span id="L167" rel="#L167">167</span>
<span id="L168" rel="#L168">168</span>
<span id="L169" rel="#L169">169</span>
<span id="L170" rel="#L170">170</span>
<span id="L171" rel="#L171">171</span>
<span id="L172" rel="#L172">172</span>
<span id="L173" rel="#L173">173</span>
<span id="L174" rel="#L174">174</span>
<span id="L175" rel="#L175">175</span>
<span id="L176" rel="#L176">176</span>
<span id="L177" rel="#L177">177</span>
<span id="L178" rel="#L178">178</span>
<span id="L179" rel="#L179">179</span>
<span id="L180" rel="#L180">180</span>
<span id="L181" rel="#L181">181</span>
<span id="L182" rel="#L182">182</span>
<span id="L183" rel="#L183">183</span>
<span id="L184" rel="#L184">184</span>
<span id="L185" rel="#L185">185</span>
<span id="L186" rel="#L186">186</span>
<span id="L187" rel="#L187">187</span>
<span id="L188" rel="#L188">188</span>
<span id="L189" rel="#L189">189</span>
<span id="L190" rel="#L190">190</span>
<span id="L191" rel="#L191">191</span>
<span id="L192" rel="#L192">192</span>
<span id="L193" rel="#L193">193</span>
<span id="L194" rel="#L194">194</span>
<span id="L195" rel="#L195">195</span>
<span id="L196" rel="#L196">196</span>
<span id="L197" rel="#L197">197</span>
<span id="L198" rel="#L198">198</span>
<span id="L199" rel="#L199">199</span>
<span id="L200" rel="#L200">200</span>
<span id="L201" rel="#L201">201</span>
<span id="L202" rel="#L202">202</span>
<span id="L203" rel="#L203">203</span>
<span id="L204" rel="#L204">204</span>
<span id="L205" rel="#L205">205</span>
<span id="L206" rel="#L206">206</span>
<span id="L207" rel="#L207">207</span>
<span id="L208" rel="#L208">208</span>
<span id="L209" rel="#L209">209</span>
<span id="L210" rel="#L210">210</span>
<span id="L211" rel="#L211">211</span>
<span id="L212" rel="#L212">212</span>
<span id="L213" rel="#L213">213</span>
<span id="L214" rel="#L214">214</span>
<span id="L215" rel="#L215">215</span>
<span id="L216" rel="#L216">216</span>
<span id="L217" rel="#L217">217</span>
<span id="L218" rel="#L218">218</span>
<span id="L219" rel="#L219">219</span>

           </td>
           <td class="blob-line-code"><div class="code-body highlight"><pre><div class='line' id='LC1'><span class="c1">// jQuery Alert Dialogs Plugin</span></div><div class='line' id='LC2'><span class="c1">//</span></div><div class='line' id='LC3'><span class="c1">// Version 1.0</span></div><div class='line' id='LC4'><span class="c1">//</span></div><div class='line' id='LC5'><span class="c1">// Cory S.N. LaViska</span></div><div class='line' id='LC6'><span class="c1">// A Beautiful Site (http://abeautifulsite.net/)</span></div><div class='line' id='LC7'><span class="c1">// 29 December 2008</span></div><div class='line' id='LC8'><span class="c1">//</span></div><div class='line' id='LC9'><span class="c1">// This is an altered version form Aurélien Malisart &lt;aurelien.malisart@gmail.com&gt;</span></div><div class='line' id='LC10'><span class="c1">//</span></div><div class='line' id='LC11'><span class="c1">// Visit http://github.com/aurels/jquery.alerts</span></div><div class='line' id='LC12'><span class="c1">// Visit http://abeautifulsite.net/notebook/87 for more information</span></div><div class='line' id='LC13'><span class="c1">//</span></div><div class='line' id='LC14'><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">$</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC15'><br/></div><div class='line' id='LC16'>	<span class="nx">$</span><span class="p">.</span><span class="nx">alerts</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC17'><br/></div><div class='line' id='LC18'>		<span class="c1">// These properties can be read/written by accessing $.alerts.propertyName from your scripts at any time</span></div><div class='line' id='LC19'><br/></div><div class='line' id='LC20'>		<span class="nx">verticalOffset</span><span class="o">:</span> <span class="o">-</span><span class="mi">75</span><span class="p">,</span>                <span class="c1">// vertical offset of the dialog from center screen, in pixels</span></div><div class='line' id='LC21'>		<span class="nx">horizontalOffset</span><span class="o">:</span> <span class="mi">0</span><span class="p">,</span>                <span class="c1">// horizontal offset of the dialog from center screen, in pixels/</span></div><div class='line' id='LC22'>		<span class="nx">repositionOnResize</span><span class="o">:</span> <span class="kc">true</span><span class="p">,</span>           <span class="c1">// re-centers the dialog on window resize</span></div><div class='line' id='LC23'>		<span class="nx">overlayOpacity</span><span class="o">:</span> <span class="p">.</span><span class="mi">01</span><span class="p">,</span>                <span class="c1">// transparency level of overlay</span></div><div class='line' id='LC24'>		<span class="nx">overlayColor</span><span class="o">:</span> <span class="s1">&#39;#FFF&#39;</span><span class="p">,</span>               <span class="c1">// base color of overlay</span></div><div class='line' id='LC25'>		<span class="nx">draggable</span><span class="o">:</span> <span class="kc">true</span><span class="p">,</span>                    <span class="c1">// make the dialogs draggable (requires UI Draggables plugin)</span></div><div class='line' id='LC26'>		<span class="nx">okButton</span><span class="o">:</span> <span class="s1">&#39;&amp;nbsp;OK&amp;nbsp;&#39;</span><span class="p">,</span>         <span class="c1">// text for the OK button (not used anymore in this version)</span></div><div class='line' id='LC27'>		<span class="nx">cancelButton</span><span class="o">:</span> <span class="s1">&#39;&amp;nbsp;Cancel&amp;nbsp;&#39;</span><span class="p">,</span> <span class="c1">// text for the Cancel button (not used anymore in this version)</span></div><div class='line' id='LC28'>		<span class="nx">dialogClass</span><span class="o">:</span> <span class="kc">null</span><span class="p">,</span>                  <span class="c1">// if specified, this class will be applied to all dialogs</span></div><div class='line' id='LC29'><br/></div><div class='line' id='LC30'>		<span class="c1">// Public methods</span></div><div class='line' id='LC31'><br/></div><div class='line' id='LC32'>		<span class="nx">alert</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">message</span><span class="p">,</span> <span class="nx">ok</span><span class="p">,</span> <span class="nx">callback</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC33'>			<span class="nx">$</span><span class="p">.</span><span class="nx">alerts</span><span class="p">.</span><span class="nx">_show</span><span class="p">(</span><span class="nx">message</span><span class="p">,</span> <span class="kc">null</span><span class="p">,</span> <span class="nx">ok</span><span class="p">,</span> <span class="kc">null</span><span class="p">,</span> <span class="s1">&#39;alert&#39;</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">result</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC34'>				<span class="k">if</span><span class="p">(</span> <span class="nx">callback</span> <span class="p">)</span> <span class="nx">callback</span><span class="p">(</span><span class="nx">result</span><span class="p">);</span></div><div class='line' id='LC35'>			<span class="p">});</span></div><div class='line' id='LC36'>		<span class="p">},</span></div><div class='line' id='LC37'><br/></div><div class='line' id='LC38'>		<span class="nx">confirm</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">message</span><span class="p">,</span> <span class="nx">ok</span><span class="p">,</span> <span class="nx">cancel</span><span class="p">,</span> <span class="nx">callback</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC39'>			<span class="nx">$</span><span class="p">.</span><span class="nx">alerts</span><span class="p">.</span><span class="nx">_show</span><span class="p">(</span><span class="nx">message</span><span class="p">,</span> <span class="kc">null</span><span class="p">,</span> <span class="nx">ok</span><span class="p">,</span> <span class="nx">cancel</span><span class="p">,</span> <span class="s1">&#39;confirm&#39;</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">result</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC40'>				<span class="k">if</span><span class="p">(</span> <span class="nx">callback</span> <span class="p">)</span> <span class="nx">callback</span><span class="p">(</span><span class="nx">result</span><span class="p">);</span></div><div class='line' id='LC41'>			<span class="p">});</span></div><div class='line' id='LC42'>		<span class="p">},</span></div><div class='line' id='LC43'><br/></div><div class='line' id='LC44'>		<span class="nx">prompt</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">message</span><span class="p">,</span> <span class="nx">value</span><span class="p">,</span> <span class="nx">ok</span><span class="p">,</span> <span class="nx">cancel</span><span class="p">,</span> <span class="nx">callback</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC45'>			<span class="nx">$</span><span class="p">.</span><span class="nx">alerts</span><span class="p">.</span><span class="nx">_show</span><span class="p">(</span><span class="nx">message</span><span class="p">,</span> <span class="nx">value</span><span class="p">,</span> <span class="nx">ok</span><span class="p">,</span> <span class="nx">cancel</span><span class="p">,</span> <span class="s1">&#39;prompt&#39;</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">result</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC46'>				<span class="k">if</span><span class="p">(</span> <span class="nx">callback</span> <span class="p">)</span> <span class="nx">callback</span><span class="p">(</span><span class="nx">result</span><span class="p">);</span></div><div class='line' id='LC47'>			<span class="p">});</span></div><div class='line' id='LC48'>		<span class="p">},</span></div><div class='line' id='LC49'><br/></div><div class='line' id='LC50'>		<span class="c1">// Private methods</span></div><div class='line' id='LC51'><br/></div><div class='line' id='LC52'>		<span class="nx">_show</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">msg</span><span class="p">,</span> <span class="nx">value</span><span class="p">,</span> <span class="nx">ok</span><span class="p">,</span> <span class="nx">cancel</span><span class="p">,</span> <span class="nx">type</span><span class="p">,</span> <span class="nx">callback</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC53'><br/></div><div class='line' id='LC54'>			<span class="nx">$</span><span class="p">.</span><span class="nx">alerts</span><span class="p">.</span><span class="nx">_hide</span><span class="p">();</span></div><div class='line' id='LC55'>			<span class="nx">$</span><span class="p">.</span><span class="nx">alerts</span><span class="p">.</span><span class="nx">_overlay</span><span class="p">(</span><span class="s1">&#39;show&#39;</span><span class="p">);</span></div><div class='line' id='LC56'><br/></div><div class='line' id='LC57'>			<span class="nx">$</span><span class="p">(</span><span class="s2">&quot;BODY&quot;</span><span class="p">).</span><span class="nx">append</span><span class="p">(</span></div><div class='line' id='LC58'>			  <span class="s1">&#39;&lt;div id=&quot;popup_container&quot;&gt;&#39;</span> <span class="o">+</span></div><div class='line' id='LC59'>			    <span class="s1">&#39;&lt;div id=&quot;popup_content&quot;&gt;&#39;</span> <span class="o">+</span></div><div class='line' id='LC60'>			      <span class="s1">&#39;&lt;div id=&quot;popup_message&quot;&gt;&lt;/div&gt;&#39;</span> <span class="o">+</span></div><div class='line' id='LC61'>				<span class="s1">&#39;&lt;/div&gt;&#39;</span> <span class="o">+</span></div><div class='line' id='LC62'>			  <span class="s1">&#39;&lt;/div&gt;&#39;</span><span class="p">);</span></div><div class='line' id='LC63'><br/></div><div class='line' id='LC64'>			<span class="k">if</span><span class="p">(</span> <span class="nx">$</span><span class="p">.</span><span class="nx">alerts</span><span class="p">.</span><span class="nx">dialogClass</span> <span class="p">)</span> <span class="nx">$</span><span class="p">(</span><span class="s2">&quot;#popup_container&quot;</span><span class="p">).</span><span class="nx">addClass</span><span class="p">(</span><span class="nx">$</span><span class="p">.</span><span class="nx">alerts</span><span class="p">.</span><span class="nx">dialogClass</span><span class="p">);</span></div><div class='line' id='LC65'><br/></div><div class='line' id='LC66'>			<span class="c1">// IE6 Fix</span></div><div class='line' id='LC67'>			<span class="kd">var</span> <span class="nx">pos</span> <span class="o">=</span> <span class="p">(</span><span class="nx">$</span><span class="p">.</span><span class="nx">browser</span><span class="p">.</span><span class="nx">msie</span> <span class="o">&amp;&amp;</span> <span class="nb">parseInt</span><span class="p">(</span><span class="nx">$</span><span class="p">.</span><span class="nx">browser</span><span class="p">.</span><span class="nx">version</span><span class="p">)</span> <span class="o">&lt;=</span> <span class="mi">6</span> <span class="p">)</span> <span class="o">?</span> <span class="s1">&#39;absolute&#39;</span> <span class="o">:</span> <span class="s1">&#39;fixed&#39;</span><span class="p">;</span> </div><div class='line' id='LC68'><br/></div><div class='line' id='LC69'>			<span class="nx">$</span><span class="p">(</span><span class="s2">&quot;#popup_container&quot;</span><span class="p">).</span><span class="nx">css</span><span class="p">({</span></div><div class='line' id='LC70'>				<span class="nx">position</span><span class="o">:</span> <span class="nx">pos</span><span class="p">,</span></div><div class='line' id='LC71'>				<span class="nx">zIndex</span><span class="o">:</span> <span class="mi">99999</span><span class="p">,</span></div><div class='line' id='LC72'>				<span class="nx">padding</span><span class="o">:</span> <span class="mi">0</span><span class="p">,</span></div><div class='line' id='LC73'>				<span class="nx">margin</span><span class="o">:</span> <span class="mi">0</span></div><div class='line' id='LC74'>			<span class="p">});</span></div><div class='line' id='LC75'><br/></div><div class='line' id='LC76'>			<span class="nx">$</span><span class="p">(</span><span class="s2">&quot;#popup_content&quot;</span><span class="p">).</span><span class="nx">addClass</span><span class="p">(</span><span class="nx">type</span><span class="p">);</span></div><div class='line' id='LC77'>			<span class="nx">$</span><span class="p">(</span><span class="s2">&quot;#popup_message&quot;</span><span class="p">).</span><span class="nx">text</span><span class="p">(</span><span class="nx">msg</span><span class="p">);</span></div><div class='line' id='LC78'>			<span class="nx">$</span><span class="p">(</span><span class="s2">&quot;#popup_message&quot;</span><span class="p">).</span><span class="nx">html</span><span class="p">(</span> <span class="nx">$</span><span class="p">(</span><span class="s2">&quot;#popup_message&quot;</span><span class="p">).</span><span class="nx">text</span><span class="p">().</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/\n/g</span><span class="p">,</span> <span class="s1">&#39;&lt;br /&gt;&#39;</span><span class="p">)</span> <span class="p">);</span></div><div class='line' id='LC79'><br/></div><div class='line' id='LC80'>			<span class="nx">$</span><span class="p">(</span><span class="s2">&quot;#popup_container&quot;</span><span class="p">).</span><span class="nx">css</span><span class="p">({</span></div><div class='line' id='LC81'>				<span class="nx">minWidth</span><span class="o">:</span> <span class="nx">$</span><span class="p">(</span><span class="s2">&quot;#popup_container&quot;</span><span class="p">).</span><span class="nx">outerWidth</span><span class="p">(),</span></div><div class='line' id='LC82'>				<span class="nx">maxWidth</span><span class="o">:</span> <span class="nx">$</span><span class="p">(</span><span class="s2">&quot;#popup_container&quot;</span><span class="p">).</span><span class="nx">outerWidth</span><span class="p">()</span></div><div class='line' id='LC83'>			<span class="p">});</span></div><div class='line' id='LC84'><br/></div><div class='line' id='LC85'>			<span class="nx">$</span><span class="p">.</span><span class="nx">alerts</span><span class="p">.</span><span class="nx">_reposition</span><span class="p">();</span></div><div class='line' id='LC86'>			<span class="nx">$</span><span class="p">.</span><span class="nx">alerts</span><span class="p">.</span><span class="nx">_maintainPosition</span><span class="p">(</span><span class="kc">true</span><span class="p">);</span></div><div class='line' id='LC87'><br/></div><div class='line' id='LC88'>			<span class="k">switch</span><span class="p">(</span> <span class="nx">type</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC89'>				<span class="k">case</span> <span class="s1">&#39;alert&#39;</span><span class="o">:</span></div><div class='line' id='LC90'>					<span class="nx">$</span><span class="p">(</span><span class="s2">&quot;#popup_message&quot;</span><span class="p">).</span><span class="nx">after</span><span class="p">(</span><span class="s1">&#39;&lt;div id=&quot;popup_panel&quot;&gt;&lt;input type=&quot;button&quot; value=&quot;&#39;</span> <span class="o">+</span> <span class="nx">ok</span> <span class="o">+</span> <span class="s1">&#39;&quot; id=&quot;popup_ok&quot; /&gt;&lt;/div&gt;&#39;</span><span class="p">);</span></div><div class='line' id='LC91'>					<span class="nx">$</span><span class="p">(</span><span class="s2">&quot;#popup_ok&quot;</span><span class="p">).</span><span class="nx">click</span><span class="p">(</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC92'>						<span class="nx">$</span><span class="p">.</span><span class="nx">alerts</span><span class="p">.</span><span class="nx">_hide</span><span class="p">();</span></div><div class='line' id='LC93'>						<span class="nx">callback</span><span class="p">(</span><span class="kc">true</span><span class="p">);</span></div><div class='line' id='LC94'>					<span class="p">});</span></div><div class='line' id='LC95'>					<span class="nx">$</span><span class="p">(</span><span class="s2">&quot;#popup_ok&quot;</span><span class="p">).</span><span class="nx">focus</span><span class="p">().</span><span class="nx">keypress</span><span class="p">(</span> <span class="kd">function</span><span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC96'>						<span class="k">if</span><span class="p">(</span> <span class="nx">e</span><span class="p">.</span><span class="nx">keyCode</span> <span class="o">==</span> <span class="mi">13</span> <span class="o">||</span> <span class="nx">e</span><span class="p">.</span><span class="nx">keyCode</span> <span class="o">==</span> <span class="mi">27</span> <span class="p">)</span> <span class="nx">$</span><span class="p">(</span><span class="s2">&quot;#popup_ok&quot;</span><span class="p">).</span><span class="nx">trigger</span><span class="p">(</span><span class="s1">&#39;click&#39;</span><span class="p">);</span></div><div class='line' id='LC97'>					<span class="p">});</span></div><div class='line' id='LC98'>				<span class="k">break</span><span class="p">;</span></div><div class='line' id='LC99'>				<span class="k">case</span> <span class="s1">&#39;confirm&#39;</span><span class="o">:</span></div><div class='line' id='LC100'>					<span class="nx">$</span><span class="p">(</span><span class="s2">&quot;#popup_message&quot;</span><span class="p">).</span><span class="nx">after</span><span class="p">(</span><span class="s1">&#39;&lt;div id=&quot;popup_panel&quot;&gt;&lt;input type=&quot;button&quot; value=&quot;&#39;</span> <span class="o">+</span> <span class="nx">ok</span> <span class="o">+</span> <span class="s1">&#39;&quot; id=&quot;popup_ok&quot; /&gt; &lt;input type=&quot;button&quot; value=&quot;&#39;</span> <span class="o">+</span> <span class="nx">cancel</span> <span class="o">+</span> <span class="s1">&#39;&quot; id=&quot;popup_cancel&quot; /&gt;&lt;/div&gt;&#39;</span><span class="p">);</span></div><div class='line' id='LC101'>					<span class="nx">$</span><span class="p">(</span><span class="s2">&quot;#popup_ok&quot;</span><span class="p">).</span><span class="nx">click</span><span class="p">(</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC102'>						<span class="nx">$</span><span class="p">.</span><span class="nx">alerts</span><span class="p">.</span><span class="nx">_hide</span><span class="p">();</span></div><div class='line' id='LC103'>						<span class="k">if</span><span class="p">(</span> <span class="nx">callback</span> <span class="p">)</span> <span class="nx">callback</span><span class="p">(</span><span class="kc">true</span><span class="p">);</span></div><div class='line' id='LC104'>					<span class="p">});</span></div><div class='line' id='LC105'>					<span class="nx">$</span><span class="p">(</span><span class="s2">&quot;#popup_cancel&quot;</span><span class="p">).</span><span class="nx">click</span><span class="p">(</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC106'>						<span class="nx">$</span><span class="p">.</span><span class="nx">alerts</span><span class="p">.</span><span class="nx">_hide</span><span class="p">();</span></div><div class='line' id='LC107'>						<span class="k">if</span><span class="p">(</span> <span class="nx">callback</span> <span class="p">)</span> <span class="nx">callback</span><span class="p">(</span><span class="kc">false</span><span class="p">);</span></div><div class='line' id='LC108'>					<span class="p">});</span></div><div class='line' id='LC109'>					<span class="c1">// $(&quot;#popup_ok&quot;).focus();</span></div><div class='line' id='LC110'>					<span class="nx">$</span><span class="p">(</span><span class="s2">&quot;#popup_ok, #popup_cancel&quot;</span><span class="p">).</span><span class="nx">keypress</span><span class="p">(</span> <span class="kd">function</span><span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC111'>						<span class="k">if</span><span class="p">(</span> <span class="nx">e</span><span class="p">.</span><span class="nx">keyCode</span> <span class="o">==</span> <span class="mi">13</span> <span class="p">)</span> <span class="nx">$</span><span class="p">(</span><span class="s2">&quot;#popup_ok&quot;</span><span class="p">).</span><span class="nx">trigger</span><span class="p">(</span><span class="s1">&#39;click&#39;</span><span class="p">);</span></div><div class='line' id='LC112'>						<span class="k">if</span><span class="p">(</span> <span class="nx">e</span><span class="p">.</span><span class="nx">keyCode</span> <span class="o">==</span> <span class="mi">27</span> <span class="p">)</span> <span class="nx">$</span><span class="p">(</span><span class="s2">&quot;#popup_cancel&quot;</span><span class="p">).</span><span class="nx">trigger</span><span class="p">(</span><span class="s1">&#39;click&#39;</span><span class="p">);</span></div><div class='line' id='LC113'>					<span class="p">});</span></div><div class='line' id='LC114'>				<span class="k">break</span><span class="p">;</span></div><div class='line' id='LC115'>				<span class="k">case</span> <span class="s1">&#39;prompt&#39;</span><span class="o">:</span></div><div class='line' id='LC116'>					<span class="nx">$</span><span class="p">(</span><span class="s2">&quot;#popup_message&quot;</span><span class="p">).</span><span class="nx">append</span><span class="p">(</span><span class="s1">&#39;&lt;br /&gt;&lt;input type=&quot;text&quot; size=&quot;30&quot; id=&quot;popup_prompt&quot; /&gt;&#39;</span><span class="p">).</span><span class="nx">after</span><span class="p">(</span><span class="s1">&#39;&lt;div id=&quot;popup_panel&quot;&gt;&lt;input type=&quot;button&quot; value=&quot;&#39;</span> <span class="o">+</span> <span class="nx">ok</span> <span class="o">+</span> <span class="s1">&#39;&quot; id=&quot;popup_ok&quot; /&gt; &lt;input type=&quot;button&quot; value=&quot;&#39;</span> <span class="o">+</span> <span class="nx">cancel</span> <span class="o">+</span> <span class="s1">&#39;&quot; id=&quot;popup_cancel&quot; /&gt;&lt;/div&gt;&#39;</span><span class="p">);</span></div><div class='line' id='LC117'>					<span class="nx">$</span><span class="p">(</span><span class="s2">&quot;#popup_prompt&quot;</span><span class="p">).</span><span class="nx">width</span><span class="p">(</span> <span class="nx">$</span><span class="p">(</span><span class="s2">&quot;#popup_message&quot;</span><span class="p">).</span><span class="nx">width</span><span class="p">()</span> <span class="p">);</span></div><div class='line' id='LC118'>					<span class="nx">$</span><span class="p">(</span><span class="s2">&quot;#popup_ok&quot;</span><span class="p">).</span><span class="nx">click</span><span class="p">(</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC119'>						<span class="kd">var</span> <span class="nx">val</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="s2">&quot;#popup_prompt&quot;</span><span class="p">).</span><span class="nx">val</span><span class="p">();</span></div><div class='line' id='LC120'>						<span class="nx">$</span><span class="p">.</span><span class="nx">alerts</span><span class="p">.</span><span class="nx">_hide</span><span class="p">();</span></div><div class='line' id='LC121'>						<span class="k">if</span><span class="p">(</span> <span class="nx">callback</span> <span class="p">)</span> <span class="nx">callback</span><span class="p">(</span> <span class="nx">val</span> <span class="p">);</span></div><div class='line' id='LC122'>					<span class="p">});</span></div><div class='line' id='LC123'>					<span class="nx">$</span><span class="p">(</span><span class="s2">&quot;#popup_cancel&quot;</span><span class="p">).</span><span class="nx">click</span><span class="p">(</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC124'>						<span class="nx">$</span><span class="p">.</span><span class="nx">alerts</span><span class="p">.</span><span class="nx">_hide</span><span class="p">();</span></div><div class='line' id='LC125'>						<span class="k">if</span><span class="p">(</span> <span class="nx">callback</span> <span class="p">)</span> <span class="nx">callback</span><span class="p">(</span> <span class="kc">null</span> <span class="p">);</span></div><div class='line' id='LC126'>					<span class="p">});</span></div><div class='line' id='LC127'>					<span class="nx">$</span><span class="p">(</span><span class="s2">&quot;#popup_prompt, #popup_ok, #popup_cancel&quot;</span><span class="p">).</span><span class="nx">keypress</span><span class="p">(</span> <span class="kd">function</span><span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC128'>						<span class="k">if</span><span class="p">(</span> <span class="nx">e</span><span class="p">.</span><span class="nx">keyCode</span> <span class="o">==</span> <span class="mi">13</span> <span class="p">)</span> <span class="nx">$</span><span class="p">(</span><span class="s2">&quot;#popup_ok&quot;</span><span class="p">).</span><span class="nx">trigger</span><span class="p">(</span><span class="s1">&#39;click&#39;</span><span class="p">);</span></div><div class='line' id='LC129'>						<span class="k">if</span><span class="p">(</span> <span class="nx">e</span><span class="p">.</span><span class="nx">keyCode</span> <span class="o">==</span> <span class="mi">27</span> <span class="p">)</span> <span class="nx">$</span><span class="p">(</span><span class="s2">&quot;#popup_cancel&quot;</span><span class="p">).</span><span class="nx">trigger</span><span class="p">(</span><span class="s1">&#39;click&#39;</span><span class="p">);</span></div><div class='line' id='LC130'>					<span class="p">});</span></div><div class='line' id='LC131'>					<span class="k">if</span><span class="p">(</span> <span class="nx">value</span> <span class="p">)</span> <span class="nx">$</span><span class="p">(</span><span class="s2">&quot;#popup_prompt&quot;</span><span class="p">).</span><span class="nx">val</span><span class="p">(</span><span class="nx">value</span><span class="p">);</span></div><div class='line' id='LC132'>					<span class="nx">$</span><span class="p">(</span><span class="s2">&quot;#popup_prompt&quot;</span><span class="p">).</span><span class="nx">focus</span><span class="p">().</span><span class="nx">select</span><span class="p">();</span></div><div class='line' id='LC133'>				<span class="k">break</span><span class="p">;</span></div><div class='line' id='LC134'>			<span class="p">}</span></div><div class='line' id='LC135'><br/></div><div class='line' id='LC136'>			<span class="c1">// Make draggable</span></div><div class='line' id='LC137'>			<span class="c1">// if( $.alerts.draggable ) {</span></div><div class='line' id='LC138'>			<span class="c1">// 				try {</span></div><div class='line' id='LC139'>			<span class="c1">// 					//$(&quot;#popup_container&quot;).draggable({ handle: $(&quot;#popup_title&quot;) });</span></div><div class='line' id='LC140'>			<span class="c1">// 					//$(&quot;#popup_title&quot;).css({ cursor: &#39;move&#39; });</span></div><div class='line' id='LC141'>			<span class="c1">// 				} catch(e) { /* requires jQuery UI draggables */ }</span></div><div class='line' id='LC142'>			<span class="c1">// 			}</span></div><div class='line' id='LC143'>		<span class="p">},</span></div><div class='line' id='LC144'><br/></div><div class='line' id='LC145'>		<span class="nx">_hide</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC146'>			<span class="nx">$</span><span class="p">(</span><span class="s2">&quot;#popup_container&quot;</span><span class="p">).</span><span class="nx">remove</span><span class="p">();</span></div><div class='line' id='LC147'>			<span class="nx">$</span><span class="p">.</span><span class="nx">alerts</span><span class="p">.</span><span class="nx">_overlay</span><span class="p">(</span><span class="s1">&#39;hide&#39;</span><span class="p">);</span></div><div class='line' id='LC148'>			<span class="nx">$</span><span class="p">.</span><span class="nx">alerts</span><span class="p">.</span><span class="nx">_maintainPosition</span><span class="p">(</span><span class="kc">false</span><span class="p">);</span></div><div class='line' id='LC149'>		<span class="p">},</span></div><div class='line' id='LC150'><br/></div><div class='line' id='LC151'>		<span class="nx">_overlay</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">status</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC152'>			<span class="k">switch</span><span class="p">(</span> <span class="nx">status</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC153'>				<span class="k">case</span> <span class="s1">&#39;show&#39;</span><span class="o">:</span></div><div class='line' id='LC154'>					<span class="nx">$</span><span class="p">.</span><span class="nx">alerts</span><span class="p">.</span><span class="nx">_overlay</span><span class="p">(</span><span class="s1">&#39;hide&#39;</span><span class="p">);</span></div><div class='line' id='LC155'>					<span class="nx">$</span><span class="p">(</span><span class="s2">&quot;BODY&quot;</span><span class="p">).</span><span class="nx">append</span><span class="p">(</span><span class="s1">&#39;&lt;div id=&quot;popup_overlay&quot;&gt;&lt;/div&gt;&#39;</span><span class="p">);</span></div><div class='line' id='LC156'>					<span class="nx">$</span><span class="p">(</span><span class="s2">&quot;#popup_overlay&quot;</span><span class="p">).</span><span class="nx">css</span><span class="p">({</span></div><div class='line' id='LC157'>						<span class="nx">position</span><span class="o">:</span> <span class="s1">&#39;absolute&#39;</span><span class="p">,</span></div><div class='line' id='LC158'>						<span class="nx">zIndex</span><span class="o">:</span> <span class="mi">99998</span><span class="p">,</span></div><div class='line' id='LC159'>						<span class="nx">top</span><span class="o">:</span> <span class="s1">&#39;0px&#39;</span><span class="p">,</span></div><div class='line' id='LC160'>						<span class="nx">left</span><span class="o">:</span> <span class="s1">&#39;0px&#39;</span><span class="p">,</span></div><div class='line' id='LC161'>						<span class="nx">width</span><span class="o">:</span> <span class="s1">&#39;100%&#39;</span><span class="p">,</span></div><div class='line' id='LC162'>						<span class="nx">height</span><span class="o">:</span> <span class="nx">$</span><span class="p">(</span><span class="nb">document</span><span class="p">).</span><span class="nx">height</span><span class="p">(),</span></div><div class='line' id='LC163'>						<span class="nx">background</span><span class="o">:</span> <span class="nx">$</span><span class="p">.</span><span class="nx">alerts</span><span class="p">.</span><span class="nx">overlayColor</span><span class="p">,</span></div><div class='line' id='LC164'>						<span class="nx">opacity</span><span class="o">:</span> <span class="nx">$</span><span class="p">.</span><span class="nx">alerts</span><span class="p">.</span><span class="nx">overlayOpacity</span></div><div class='line' id='LC165'>					<span class="p">});</span></div><div class='line' id='LC166'>				<span class="k">break</span><span class="p">;</span></div><div class='line' id='LC167'>				<span class="k">case</span> <span class="s1">&#39;hide&#39;</span><span class="o">:</span></div><div class='line' id='LC168'>					<span class="nx">$</span><span class="p">(</span><span class="s2">&quot;#popup_overlay&quot;</span><span class="p">).</span><span class="nx">remove</span><span class="p">();</span></div><div class='line' id='LC169'>				<span class="k">break</span><span class="p">;</span></div><div class='line' id='LC170'>			<span class="p">}</span></div><div class='line' id='LC171'>		<span class="p">},</span></div><div class='line' id='LC172'><br/></div><div class='line' id='LC173'>		<span class="nx">_reposition</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC174'>			<span class="kd">var</span> <span class="nx">top</span> <span class="o">=</span> <span class="p">((</span><span class="nx">$</span><span class="p">(</span><span class="nb">window</span><span class="p">).</span><span class="nx">height</span><span class="p">()</span> <span class="o">/</span> <span class="mi">2</span><span class="p">)</span> <span class="o">-</span> <span class="p">(</span><span class="nx">$</span><span class="p">(</span><span class="s2">&quot;#popup_container&quot;</span><span class="p">).</span><span class="nx">outerHeight</span><span class="p">()</span> <span class="o">/</span> <span class="mi">2</span><span class="p">))</span> <span class="o">+</span> <span class="nx">$</span><span class="p">.</span><span class="nx">alerts</span><span class="p">.</span><span class="nx">verticalOffset</span><span class="p">;</span></div><div class='line' id='LC175'>			<span class="kd">var</span> <span class="nx">left</span> <span class="o">=</span> <span class="p">((</span><span class="nx">$</span><span class="p">(</span><span class="nb">window</span><span class="p">).</span><span class="nx">width</span><span class="p">()</span> <span class="o">/</span> <span class="mi">2</span><span class="p">)</span> <span class="o">-</span> <span class="p">(</span><span class="nx">$</span><span class="p">(</span><span class="s2">&quot;#popup_container&quot;</span><span class="p">).</span><span class="nx">outerWidth</span><span class="p">()</span> <span class="o">/</span> <span class="mi">2</span><span class="p">))</span> <span class="o">+</span> <span class="nx">$</span><span class="p">.</span><span class="nx">alerts</span><span class="p">.</span><span class="nx">horizontalOffset</span><span class="p">;</span></div><div class='line' id='LC176'>			<span class="k">if</span><span class="p">(</span> <span class="nx">top</span> <span class="o">&lt;</span> <span class="mi">0</span> <span class="p">)</span> <span class="nx">top</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC177'>			<span class="k">if</span><span class="p">(</span> <span class="nx">left</span> <span class="o">&lt;</span> <span class="mi">0</span> <span class="p">)</span> <span class="nx">left</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC178'><br/></div><div class='line' id='LC179'>			<span class="c1">// IE6 fix</span></div><div class='line' id='LC180'>			<span class="k">if</span><span class="p">(</span> <span class="nx">$</span><span class="p">.</span><span class="nx">browser</span><span class="p">.</span><span class="nx">msie</span> <span class="o">&amp;&amp;</span> <span class="nb">parseInt</span><span class="p">(</span><span class="nx">$</span><span class="p">.</span><span class="nx">browser</span><span class="p">.</span><span class="nx">version</span><span class="p">)</span> <span class="o">&lt;=</span> <span class="mi">6</span> <span class="p">)</span> <span class="nx">top</span> <span class="o">=</span> <span class="nx">top</span> <span class="o">+</span> <span class="nx">$</span><span class="p">(</span><span class="nb">window</span><span class="p">).</span><span class="nx">scrollTop</span><span class="p">();</span></div><div class='line' id='LC181'><br/></div><div class='line' id='LC182'>			<span class="nx">$</span><span class="p">(</span><span class="s2">&quot;#popup_container&quot;</span><span class="p">).</span><span class="nx">css</span><span class="p">({</span></div><div class='line' id='LC183'>				<span class="nx">top</span><span class="o">:</span> <span class="nx">top</span> <span class="o">+</span> <span class="s1">&#39;px&#39;</span><span class="p">,</span></div><div class='line' id='LC184'>				<span class="nx">left</span><span class="o">:</span> <span class="nx">left</span> <span class="o">+</span> <span class="s1">&#39;px&#39;</span></div><div class='line' id='LC185'>			<span class="p">});</span></div><div class='line' id='LC186'>			<span class="nx">$</span><span class="p">(</span><span class="s2">&quot;#popup_overlay&quot;</span><span class="p">).</span><span class="nx">height</span><span class="p">(</span> <span class="nx">$</span><span class="p">(</span><span class="nb">document</span><span class="p">).</span><span class="nx">height</span><span class="p">()</span> <span class="p">);</span></div><div class='line' id='LC187'>		<span class="p">},</span></div><div class='line' id='LC188'><br/></div><div class='line' id='LC189'>		<span class="nx">_maintainPosition</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">status</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC190'>			<span class="k">if</span><span class="p">(</span> <span class="nx">$</span><span class="p">.</span><span class="nx">alerts</span><span class="p">.</span><span class="nx">repositionOnResize</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC191'>				<span class="k">switch</span><span class="p">(</span><span class="nx">status</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC192'>					<span class="k">case</span> <span class="kc">true</span><span class="o">:</span></div><div class='line' id='LC193'>						<span class="nx">$</span><span class="p">(</span><span class="nb">window</span><span class="p">).</span><span class="nx">bind</span><span class="p">(</span><span class="s1">&#39;resize&#39;</span><span class="p">,</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC194'>							<span class="nx">$</span><span class="p">.</span><span class="nx">alerts</span><span class="p">.</span><span class="nx">_reposition</span><span class="p">();</span></div><div class='line' id='LC195'>						<span class="p">});</span></div><div class='line' id='LC196'>					<span class="k">break</span><span class="p">;</span></div><div class='line' id='LC197'>					<span class="k">case</span> <span class="kc">false</span><span class="o">:</span></div><div class='line' id='LC198'>						<span class="nx">$</span><span class="p">(</span><span class="nb">window</span><span class="p">).</span><span class="nx">unbind</span><span class="p">(</span><span class="s1">&#39;resize&#39;</span><span class="p">);</span></div><div class='line' id='LC199'>					<span class="k">break</span><span class="p">;</span></div><div class='line' id='LC200'>				<span class="p">}</span></div><div class='line' id='LC201'>			<span class="p">}</span></div><div class='line' id='LC202'>		<span class="p">}</span></div><div class='line' id='LC203'><br/></div><div class='line' id='LC204'>	<span class="p">}</span></div><div class='line' id='LC205'><br/></div><div class='line' id='LC206'>	<span class="c1">// Shortuct functions</span></div><div class='line' id='LC207'>	<span class="nx">jAlert</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">message</span><span class="p">,</span> <span class="nx">ok</span><span class="p">,</span> <span class="nx">callback</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC208'>		<span class="nx">$</span><span class="p">.</span><span class="nx">alerts</span><span class="p">.</span><span class="nx">alert</span><span class="p">(</span><span class="nx">message</span><span class="p">,</span> <span class="nx">ok</span><span class="p">,</span> <span class="nx">callback</span><span class="p">);</span></div><div class='line' id='LC209'>	<span class="p">}</span></div><div class='line' id='LC210'><br/></div><div class='line' id='LC211'>	<span class="nx">jConfirm</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">message</span><span class="p">,</span> <span class="nx">ok</span><span class="p">,</span> <span class="nx">cancel</span><span class="p">,</span> <span class="nx">callback</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC212'>		<span class="nx">$</span><span class="p">.</span><span class="nx">alerts</span><span class="p">.</span><span class="nx">confirm</span><span class="p">(</span><span class="nx">message</span><span class="p">,</span> <span class="nx">ok</span><span class="p">,</span> <span class="nx">cancel</span><span class="p">,</span> <span class="nx">callback</span><span class="p">);</span></div><div class='line' id='LC213'>	<span class="p">};</span></div><div class='line' id='LC214'><br/></div><div class='line' id='LC215'>	<span class="nx">jPrompt</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">message</span><span class="p">,</span> <span class="nx">value</span><span class="p">,</span> <span class="nx">ok</span><span class="p">,</span> <span class="nx">cancel</span><span class="p">,</span> <span class="nx">callback</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC216'>		<span class="nx">$</span><span class="p">.</span><span class="nx">alerts</span><span class="p">.</span><span class="nx">prompt</span><span class="p">(</span><span class="nx">message</span><span class="p">,</span> <span class="nx">value</span><span class="p">,</span> <span class="nx">ok</span><span class="p">,</span> <span class="nx">cancel</span><span class="p">,</span> <span class="nx">callback</span><span class="p">);</span></div><div class='line' id='LC217'>	<span class="p">};</span></div><div class='line' id='LC218'><br/></div><div class='line' id='LC219'><span class="p">})(</span><span class="nx">jQuery</span><span class="p">);</span></div></pre></div></td>
         </tr>
       </table>
  </div>

  </div>
</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" class="js-jump-to-line" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <form accept-charset="UTF-8" class="js-jump-to-line-form">
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" autofocus>
    <button type="submit" class="button">Go</button>
  </form>
</div>

        </div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div><!-- /.container -->
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer">
    <ul class="site-footer-links right">
      <li><a href="https://status.github.com/">Status</a></li>
      <li><a href="http://developer.github.com">API</a></li>
      <li><a href="http://training.github.com">Training</a></li>
      <li><a href="http://shop.github.com">Shop</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/about">About</a></li>

    </ul>

    <a href="/">
      <span class="mega-octicon octicon-mark-github" title="GitHub"></span>
    </a>

    <ul class="site-footer-links">
      <li>&copy; 2014 <span title="0.04720s from github-fe129-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="/site/terms">Terms</a></li>
        <li><a href="/site/privacy">Privacy</a></li>
        <li><a href="/security">Security</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
  </div><!-- /.site-footer -->
</div><!-- /.container -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-fullscreen-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="fullscreen-contents js-fullscreen-contents" placeholder="" data-suggester="fullscreen_suggester"></textarea>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped tooltipped-w" aria-label="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped tooltipped-w"
      aria-label="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-x close js-ajax-error-dismiss" aria-label="Dismiss error"></a>
      Something went wrong with that request. Please try again.
    </div>


      <script crossorigin="anonymous" src="https://assets-cdn.github.com/assets/frameworks-da035ae604a3a09f5c4cbeb7c8868b713262875f.js" type="text/javascript"></script>
      <script async="async" crossorigin="anonymous" src="https://assets-cdn.github.com/assets/github-f92d49cb0619e2060af322349fe2acfbc9e011fc.js" type="text/javascript"></script>
      
      
        <script async src="https://www.google-analytics.com/analytics.js"></script>
  </body>
</html>

