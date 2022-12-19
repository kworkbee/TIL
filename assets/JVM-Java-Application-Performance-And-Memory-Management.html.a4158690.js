import{_ as a,r as o,o as n,c as t,b as e,d as r,e as l,a as c}from"./app.afe75d95.js";const s={},u=e("h1",{id:"java-application-performance-memory-management",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#java-application-performance-memory-management","aria-hidden":"true"},"#"),l(" Java Application Performance & Memory Management")],-1),d=e("hr",null,null,-1),m=l("Summarized from "),h={href:"https://www.udemy.com/course/java-application-performance-and-memory-management",target:"_blank",rel:"noopener noreferrer"},p=l("udemy lecture"),f=l("."),g=c('<h2 id="course-overview" tabindex="-1"><a class="header-anchor" href="#course-overview" aria-hidden="true">#</a> Course Overview</h2><ul><li>Aspects of two below: <ul><li>Memory Constraints</li><li>Application Speed</li></ul></li></ul><h2 id="just-in-time-comiler-cache" tabindex="-1"><a class="header-anchor" href="#just-in-time-comiler-cache" aria-hidden="true">#</a> Just-in-time Comiler &amp; Cache</h2><ul><li>JIT Compiler <ul><li>JVM\uC740 bytecode\uB97C interpret\uD55C\uB2E4. <ul><li>bytecode\uB97C \uC9C1\uC811 \uC2E4\uD589\uD574 native code \uC2E4\uD589\uBCF4\uB2E4 \uB290\uB9BC</li><li>interpreter \uC790\uCCB4\uAC00 compiler\uC5D0 \uBE44\uD574 \uB290\uB9BC <ul><li>line by line\uC73C\uB85C \uC2E4\uD589\uD558\uAE30 \uB54C\uBB38\uC5D0 \uC804\uCCB4\uB97C \uBCF4\uBA74\uC11C \uCD5C\uC801\uD654\uD558\uAE30 \uC5B4\uB824\uC6C0</li></ul></li></ul></li><li><strong>JVM\uC740 \uC2E4\uD589\uD658\uACBD\uC744 \uD504\uB85C\uD30C\uC77C\uB9C1\uD558\uBA74\uC11C [\uC790\uC8FC \uC2E4\uD589\uB418\uACE0 \uBCF5\uC7A1\uD558\uBA70 \uC2DC\uAC04\uC774 \uB9CE\uC774 \uAC78\uB9AC\uB294] \uBE14\uB85D\uC744 [bytecode -&gt; native code]\uB85C \uCEF4\uD30C\uC77C\uD558\uBA70 \uCD5C\uC801\uD654\uD55C\uB2E4.</strong> -- \uC131\uB2A5 \uAC1C\uC120 \uB3C4\uBAA8</li><li>\uD504\uB85C\uD30C\uC77C\uB9C1\uACFC \uCEF4\uD30C\uC77C\uC740 JVM\uC758 \uBCC4\uB3C4 \uC2A4\uB808\uB4DC\uB97C \uD1B5\uD574 \uC218\uD589\uB418\uBBC0\uB85C \uCF54\uB4DC \uC2E4\uD589 \uC2A4\uB808\uB4DC\uC5D0 \uC601\uD5A5\uC744 \uC8FC\uC9C0 \uC54A\uC74C</li><li>JIT \uCEF4\uD30C\uC77C\uB7EC\uC758 \uB3D9\uC791\uC5D0 \uB530\uB77C \uC131\uB2A5 \uCC28\uC774\uAC00 \uBC1C\uC0DD <ul><li>\uC5B4\uB5A4 \uBD80\uBD84\uC744 \uC5B8\uC81C/\uC5B4\uB290 \uC218\uC900(Level)\uC73C\uB85C \uCEF4\uD30C\uC77C\uD558\uACE0 \uC5B8\uC81C caching \uD560\uC9C0 <ul><li>\uCEF4\uD30C\uC77C\uD560 \uB54C 4 levels\uAC00 \uC874\uC7AC\uD568 - JVM\uC740 \uD504\uB85C\uD30C\uC77C\uB9C1\uC744 \uD1B5\uD574 \uC5BB\uC740 \uB370\uC774\uD130\uB97C \uAE30\uBC18\uC73C\uB85C \uC774 \uC218\uC900\uC744 \uACB0\uC815</li></ul></li></ul></li><li>Tuning the code cache size <ul><li>Level 4\uB85C \uCEF4\uD30C\uC77C\uB418\uC5B4 \uCE90\uC2F1\uB420 \uC218 \uC788\uB294 \uC694\uC18C\uAC00 \uB9CE\uC740 \uD504\uB85C\uADF8\uB7A8\uC758 \uACBD\uC6B0 caching\uB418\uC5B4 \uC788\uB294 code \uBE14\uB85D\uC774 full\uC774\uBA70 \uC2E4\uD589 \uC911\uC77C \uC218 \uC788\uB294\uB370 \uC774 \uB54C \uB354\uB294 \uC0C8\uB85C\uC6B4 caching \uD6C4\uBCF4\uAC00 \uC788\uC5B4\uB3C4 cache\uD558\uC9C0 \uBABB\uD558\uB294 \uACBD\uC6B0 \uBC1C\uC0DD</li><li>cache max size\uC640 \uC9C0\uAE08 \uC0AC\uC6A9 \uC911\uC778 size\uB97C \uC54C \uC218 \uC788\uC73C\uBA70 \uC9C0\uAE08 \uC0AC\uC6A9\uB418\uACE0 \uC788\uB294 size\uAC00 max\uC5D0 \uADFC\uC811\uD558\uB2E4\uBA74 cache size \uC99D\uAC00\uB97C \uACE0\uB824\uD574\uBCFC\uB9CC\uD568</li><li>cache size, \uCEF4\uD30C\uC77C \uBC1C\uC0DD \uC5EC\uBD80 \uB4F1\uC740 \uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uC2E4\uD589 \uC2DC \uD2B9\uC815 flag \uC804\uB2EC\uC744 \uD1B5\uD574 \uD655\uC778\uD560 \uC218 \uC788\uACE0 \uD544\uC694\uD55C \uACBD\uC6B0 \uC678\uBD80 \uBAA8\uB2C8\uD130\uB9C1 \uD234\uACFC \uC5F0\uB3D9 \uB610\uD55C \uAC00\uB2A5\uD568</li><li><strong>\uC694\uC57D (\uD29C\uB2DD \uC694\uC18C)</strong><ul><li><strong>\uC790\uC8FC \uC2E4\uD589\uB418\uB294 threshold</strong></li><li><strong>\uCEF4\uD30C\uC77C\uC5D0 \uC0AC\uC6A9\uB418\uB294 \uC2A4\uB808\uB4DC \uC218</strong></li><li><strong>code cache\uB97C \uC704\uD55C cache size</strong></li></ul></li></ul></li></ul></li></ul><h2 id="jvm-options" tabindex="-1"><a class="header-anchor" href="#jvm-options" aria-hidden="true">#</a> JVM Options</h2><ul><li>Java command \uC2E4\uD589\uACFC \uD568\uAED8 flag \uC9C0\uC815\uC744 \uD1B5\uD574 \uCEF4\uD30C\uC77C \uC635\uC158 \uBD80\uC5EC \uAC00\uB2A5 (\uD29C\uB2DD \uAC00\uB2A5\uD55C \uC9C0\uC810)</li><li>java -XX:+PrintFlagsFinal <ul><li>java \uC2E4\uD589 \uC2DC \uC9C0\uC815 \uAC00\uB2A5\uD55C flags \uCD9C\uB825</li></ul></li><li>\uC131\uB2A5\uC5D0 \uC601\uD5A5\uC744 \uC904 \uC218 \uC788\uB294 \uC694\uC18C <ul><li>\uCEF4\uD30C\uC77C \uD504\uB85C\uC138\uC2A4 \uC2E4\uD589\uC5D0 \uC0AC\uC6A9\uB418\uB294 \uC2A4\uB808\uB4DC \uC218 <ul><li>CICompilerCount</li><li><code>jinfo -flag CICompilerCount [PID]</code> command \uD1B5\uD574 CICompilerCount default \uAC12\uC744 \uD655\uC778 <ul><li>PID \uD655\uC778 : <code>jps</code></li><li>default value : 3</li><li>[-XX:CICompilerCount=N] flag \uC9C0\uC815\uC73C\uB85C \uC2E4\uD589\uB418\uB294 \uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uCEF4\uD30C\uC77C\uC6A9 \uC2A4\uB808\uB4DC \uC218 \uC9C0\uC815 \uAC00\uB2A5</li></ul></li></ul></li><li>threshold of native compile (\uB3D9\uC77C \uBA54\uC11C\uB4DC\uAC00 \uBA87 \uBC88 \uC218\uD589\uB420 \uB54C \uCEF4\uD30C\uC77C\uD558\uB294 \uAC83\uC73C\uB85C \uD310\uB2E8\uD560 \uAC83\uC778\uAC00) <ul><li>[-XX:CompileThreshold=N] flag \uC9C0\uC815\uC73C\uB85C \uC2E4\uD589\uB418\uB294 \uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uC784\uACC4\uAC12 \uC9C0\uC815 \uAC00\uB2A5 <ul><li>default value = 10000</li></ul></li></ul></li></ul></li></ul>',6);function v(_,C){const i=o("ExternalLinkIcon");return n(),t("div",null,[u,d,e("blockquote",null,[e("p",null,[m,e("a",h,[p,r(i)]),f])]),g])}var M=a(s,[["render",v],["__file","JVM-Java-Application-Performance-And-Memory-Management.html.vue"]]);export{M as default};