import{_ as r,r as c,o as d,c as a,b as e,d as t,a as o,e as i}from"./app.afe75d95.js";const n={},s=o('<h1 id="spring-filter-interceptor" tabindex="-1"><a class="header-anchor" href="#spring-filter-interceptor" aria-hidden="true">#</a> [Spring] Filter &amp; Interceptor</h1><hr><h2 id="overview" tabindex="-1"><a class="header-anchor" href="#overview" aria-hidden="true">#</a> Overview</h2><ul><li><p>\uC138\uC158 \uCC98\uB9AC, \uAD8C\uD55C \uCCB4\uD06C, XSS \uBC29\uC5B4 \uB4F1 <strong>\uACF5\uD1B5\uC801\uC73C\uB85C \uCC98\uB9AC\uD574\uC57C \uD558\uB294 \uC5C5\uBB34\uB97C \uBCC4\uB3C4\uB85C \uBD84\uB9AC\uD558\uACE0 \uAD00\uB9AC</strong>\uD558\uC5EC \uCF54\uB4DC \uC911\uBCF5 \uBB38\uC81C\uB97C \uD574\uACB0</p><ul><li><code>Filter</code>, <code>Interceptor</code>, <code>AOP</code></li></ul></li></ul>',4),h=e("img",{src:"https://nesoy.github.io/assets/posts/img/2019-02-18-20-20-08.png",alt:"Spring MVC Request Lifecycle"},null,-1),u=i(" [Figure] Spring MVC Request Lifecycle (Refered from "),p={href:"https://nesoy.github.io/articles/2019-02/Spring-request-lifecycle-part-1",target:"_blank",rel:"noopener noreferrer"},_=i("https://nesoy.github.io/articles/2019-02/Spring-request-lifecycle-part-1"),f=i(")"),g=o('<h2 id="filter" tabindex="-1"><a class="header-anchor" href="#filter" aria-hidden="true">#</a> Filter</h2><ul><li>\uC694\uCCAD\uACFC \uC751\uB2F5\uC744 \uC815\uC81C\uD558\uB294 \uC5ED\uD560</li><li>\uC694\uCCAD \uB0B4\uC6A9\uC744 \uBCC0\uACBD\uD558\uAC70\uB098 \uC5EC\uB7EC \uAC00\uC9C0 \uD655\uC778 \uC218\uD589</li><li>\uC751\uB2F5 \uB0B4\uC6A9\uC5D0 \uB300\uD55C \uBCC0\uACBD \uCC98\uB9AC</li></ul><h3 id="methods" tabindex="-1"><a class="header-anchor" href="#methods" aria-hidden="true">#</a> Methods</h3><ul><li><code>init()</code> : \uD544\uD130 \uC778\uC2A4\uD134\uC2A4 \uCD08\uAE30\uD654</li><li><code>doFilter()</code> : \uC2E4\uC81C \uCC98\uB9AC</li><li><code>destroy()</code> : \uD544\uD130 \uC778\uC2A4\uD134\uC2A4 \uC885\uB8CC</li></ul><h2 id="interceptor" tabindex="-1"><a class="header-anchor" href="#interceptor" aria-hidden="true">#</a> Interceptor</h2><ul><li>\uC694\uCCAD\uC5D0 \uB300\uD55C \uC791\uC5C5 \uC804/\uD6C4\uB97C \uAC00\uB85C\uCC48\uB2E4</li><li><code>Filter</code>\uC640 \uC720\uC0AC <ul><li><code>Filter</code>\uB294 \uC2A4\uD504\uB9C1 \uCEE8\uD14D\uC2A4\uD2B8 \uC678\uBD80\uC5D0 \uC874\uC7AC\uD574 \uC2A4\uD504\uB9C1\uACFC \uBB34\uAD00\uD55C \uC790\uC6D0\uC5D0 \uB300\uD574 \uB3D9\uC791</li><li><code>Interceptor</code>\uB294 \uC2A4\uD504\uB9C1 \uCEE8\uD14D\uC2A4\uD2B8 \uB0B4\uBD80\uC5D0\uC11C <code>Handler</code>\uC5D0 \uAD00\uD55C \uC694\uCCAD\uACFC \uC751\uB2F5\uC5D0 \uB300\uD574 \uCC98\uB9AC</li></ul></li><li>\uC5EC\uB7EC \uAC1C\uC758 <code>Interceptor</code> \uC0AC\uC6A9\uC774 \uAC00\uB2A5\uD558\uB2E4</li><li><code>Spring Context</code>\uC5D0 \uB4F1\uB85D\uB428</li><li><code>AOP</code>\uC640 \uC720\uC0AC\uD55C \uAE30\uB2A5 \uC81C\uACF5</li><li><code>\uC778\uC99D</code>, <code>\uB85C\uAE45</code> \uB4F1\uC5D0 \uC0AC\uC6A9</li></ul><h3 id="methdos" tabindex="-1"><a class="header-anchor" href="#methdos" aria-hidden="true">#</a> Methdos</h3><ul><li><code>preHandler()</code> : \uCEE8\uD2B8\uB864\uB7EC \uC2E4\uD589 \uC804</li><li><code>postHandler()</code> : \uCEE8\uD2B8\uB864\uB7EC \uC2E4\uD589 \uD6C4 View \uB80C\uB354\uB9C1 \uC774\uC804</li><li><code>afterCompletion()</code> : View \uB80C\uB354\uB9C1 \uC774\uD6C4</li></ul>',8),m=e("img",{src:"https://media.vlpt.us/images/miscaminos/post/3daf3903-871d-4d90-9825-fb6b52005884/filter_interceptor_aop.jpg",alt:"Filter, Interceptor Flow"},null,-1),b=i(" [Figure] Filter, Interceptor Flow (Refered from "),x={href:"https://velog.io/@miscaminos/Filter-Interceptor",target:"_blank",rel:"noopener noreferrer"},F=i("https://velog.io/@miscaminos/Filter-Interceptor"),v=i(")"),I=o('<h2 id="aop" tabindex="-1"><a class="header-anchor" href="#aop" aria-hidden="true">#</a> AOP</h2><blockquote><p>Aspect Oriented Programming (\uAD00\uC810 \uC9C0\uD5A5 \uD504\uB85C\uADF8\uB798\uBC0D)</p></blockquote><ul><li>\uAC1D\uCCB4\uC9C0\uD5A5 \uD504\uB85C\uADF8\uB798\uBC0D\uC744 \uD560 \uB54C, \uC911\uBCF5\uC744 \uC904\uC77C \uC218 \uC5C6\uB294 \uBD80\uBD84\uC744 \uC904\uC774\uAE30 \uC704\uD574 <code>\uAD00\uC810</code>\uC5D0\uC11C \uBC14\uB77C\uBCF4\uACE0 \uCC98\uB9AC</li><li>\uB85C\uAE45, \uD2B8\uB79C\uC7AD\uC158, \uC5D0\uB7EC \uCC98\uB9AC\uC640 \uAC19\uC774 \uBE44\uC988\uB2C8\uC2A4 \uB2E8 \uBA54\uC11C\uB4DC\uC5D0\uC11C \uC138\uBC00\uD55C \uC870\uC815\uC774 \uC694\uAD6C\uB420 \uB54C \uC0AC\uC6A9</li><li><code>Filter</code>, <code>Interceptor</code>\uC640 \uB2E4\uB974\uAC8C \uBA54\uC11C\uB4DC \uC804\uD6C4 \uC9C0\uC810\uC5D0 \uC790\uC720\uB86D\uAC8C \uC124\uC815 \uAC00\uB2A5</li></ul><h3 id="\u110C\u116E\u110B\u116D-\u1100\u1162\u1102\u1167\u11B7" tabindex="-1"><a class="header-anchor" href="#\u110C\u116E\u110B\u116D-\u1100\u1162\u1102\u1167\u11B7" aria-hidden="true">#</a> \uC8FC\uC694 \uAC1C\uB150</h3><ul><li><code>Aspect</code><ul><li>\uD769\uC5B4\uC9C4 \uAD00\uC2EC\uC0AC\uC758 \uBAA8\uB4C8\uD654 (\uC8FC\uB85C \uBD80\uAC00\uAE30\uB2A5)</li></ul></li><li><code>Advice</code><ul><li>\uACF5\uD1B5 \uAD00\uC2EC \uAE30\uB2A5\uC744 \uD575\uC2EC \uB85C\uC9C1\uC5D0 \uC801\uC6A9\uD558\uB294 \uC2DC\uC810 \uC815\uC758</li><li>\uD0C0\uAC9F\uC5D0 \uC81C\uACF5\uD560 \uBD80\uAC00\uAE30\uB2A5\uC744 \uB2F4\uACE0 \uC788\uB294 \uBAA8\uB4C8</li><li>\uC885\uB958 <ul><li><code>Before</code> : target \uBA54\uC11C\uB4DC \uD638\uCD9C \uC804</li><li><code>After</code> : target \uBA54\uC11C\uB4DC \uD638\uCD9C \uC774\uD6C4 (\uC608\uC678 \uBC1C\uC0DD \uBB34\uAD00)</li><li><code>After-throwing</code> : target \uC608\uC678 \uBC1C\uC0DD \uD6C4</li><li><code>After-returning</code> : target \uBA54\uC11C\uB4DC \uD638\uCD9C \uC774\uD6C4</li><li><code>Around</code> : target \uBA54\uC11C\uB4DC \uD638\uCD9C \uC804\uD6C4 \uBAA8\uB450 \uC801\uC6A9</li></ul></li></ul></li><li><code>Pointcut</code><ul><li>\uC801\uC6A9 \uC704\uCE58</li></ul></li><li><code>Target</code><ul><li>\uC801\uC6A9\uC774 \uB418\uB294 \uB300\uC0C1</li></ul></li><li><code>JoinPoint</code><ul><li><code>Advice</code>\uAC00 \uC801\uC6A9\uB420 \uC704\uCE58</li></ul></li></ul><h3 id="\u1110\u1173\u11A8\u110C\u1175\u11BC" tabindex="-1"><a class="header-anchor" href="#\u1110\u1173\u11A8\u110C\u1175\u11BC" aria-hidden="true">#</a> \uD2B9\uC9D5</h3><ul><li>Proxy \uD328\uD134 \uBC29\uC2DD\uC744 \uD1B5\uD574 \uAD6C\uD604 <ul><li>\uC811\uADFC \uC81C\uC5B4 \uBC0F \uBD80\uAC00 \uAE30\uB2A5 \uCD94\uAC00 \uC704\uD568</li></ul></li><li>\uC2A4\uD504\uB9C1 \uBE48\uC5D0\uB9CC AOP \uC801\uC6A9 \uAC00\uB2A5</li><li>\uC911\uBCF5 \uCF54\uB4DC, \uAC1D\uCCB4 \uAC04 \uAD00\uACC4 \uBCF5\uC7A1\uB3C4 \uC99D\uAC00, \uD504\uB85D\uC2DC \uD074\uB798\uC2A4 \uC791\uC131\uC758 \uBC88\uAC70\uB85C\uC6C0 \uB4F1\uC5D0 \uAD00\uD55C \uD574\uACB0 \uBAA9\uC801</li></ul>',7);function A(y,S){const l=c("ExternalLinkIcon");return d(),a("div",null,[s,e("p",null,[h,u,e("a",p,[_,t(l)]),f]),g,e("p",null,[m,b,e("a",x,[F,t(l)]),v]),I])}var w=r(n,[["render",A],["__file","Filter-Interceptor.html.vue"]]);export{w as default};
