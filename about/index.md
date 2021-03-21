---
layout: page
current: about
title: 关于我们
navigation: true
logo: 'assets/images/ghost.png'
class: page-template
subclass: 'post page'
---


“北大附中口述史”人文项目是博雅学院面向附中高中部学生开设的学期课程。这是由一群高中生和指导教师及口述史专业飞行嘉宾组成的口述史团队。我们相信“个体的经验和故事是宝贵的”，我们关心“为什么过去对我们有意义”。

### 项目初衷：

北大附中是学生们口中的霍格沃兹魔法学校，自由精神是附中一脉相承的基因；选课、走班、书院、学院、导师制、学长制等，北大附中教育改革背后的逻辑是什么？而附中的教育在每一个附中人身上会有怎样的影响？北大附中口述史项目希望通过采访附中的老师、校友、学校领导等的故事，还原北大附中的教育改革史，了解与我们同样在这所校园里成长和生活的人的故事。

### 项目年表：
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>

<!-- 引入样式 -->
<link rel="stylesheet" href="https://unpkg.com/element-ui/lib/theme-chalk/index.css">
<!-- 引入组件库 -->
<script src="https://unpkg.com/element-ui/lib/index.js"></script>
<div id="app">
<div >
  <el-steps direction="vertical" v-bind:active="4"  align-center="true" space="200%">
    <el-step title="2019.3-2019.7" description="项目启动 1.0版本累计完成31篇采访作品" status="success"></el-step>
    <el-step title="2019.9-2020.1" description="2.0版本，尝试从生命故事、年刊、纪录片多种方式去呈现附中历史" status="success"></el-step>
    <el-step title="2020.3-2020.7" description="3.0版本，因疫情突发，学期项目调整为“新冠肺炎疫情口述史”项目，累计完成43位普通人的疫情故事，覆盖援鄂医生、留学生、公务员、初高三毕业生、网课市师生、疫情中的出境人、武汉当地人等群体。" status="success"></el-step>
    <el-step title="2020.9-2021.1" description="4.0版本，累计完成20位附中教师的生命故事采写，逐渐梳理出了“北大附中教师图鉴”" status="success"></el-step>
    <el-step title="2021.3-2021.7"  description="5.0版本，“北大附中口述史”网站上线，立体呈现北大附中的故事。" status="process"></el-step>
    
  </el-steps>
</div>
</div>

<style>
  .el-step__title, .el-step__description{
    /* font-size:1.3vw; */
    padding-right:0;

  }
</style>


<script>
  
  new Vue().$mount('#app')
  
</script>

