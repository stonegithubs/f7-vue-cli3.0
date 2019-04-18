<template>
  <f7-page>
    <f7-navbar>
      <f7-nav-title>f7-vue</f7-nav-title>
      <f7-nav-right>
        <f7-link href="/login/" icon-if-ios="f7:menu" icon-if-md="material:menu"></f7-link>
      </f7-nav-right>
    </f7-navbar>
      <f7-block class="text-align-center"><h1>Framework7-vue </h1></f7-block>
      <f7-block-title>我的应用</f7-block-title>
    <f7-block strong class="f7cont">
      <f7-row>
        <f7-col width="33">
          <f7-link onclick="window.location.href='/PageA/index.html'">
            <span class="icon-box bg-color-blue">
              <i class="f7-icons">folder_fill</i>
            </span>
            <span class="icon-name">folder_fill </span>
          </f7-link>
        </f7-col>
        <f7-col width="33">
          <f7-link onclick="window.location.href='/PageB/index.html'">
             <span class="icon-box bg-color-red">
              <i class="f7-icons">home_fill</i>
            </span>
            <span class="icon-name">home_fill</span>
          </f7-link>
        </f7-col>
        <f7-col width="33">
          <f7-link href="/about/">
           <span class="icon-box">
            <i class="f7-icons">keyboard_fill</i>
          </span>
          <span class="icon-name">keyboard_fill</span>
          </f7-link>
        </f7-col>
        <f7-col width="33">
          <f7-link href="/about/">
          <span class="icon-box bg-color-yellow">
            <i class="f7-icons">layers_alt_fill</i>
          </span>
          <span class="icon-name">layers_alt_fill</span>
          </f7-link>
        </f7-col>
        <f7-col width="33">
          <f7-link href="/about/">
           <span class="icon-box bg-color-teal">
            <i class="f7-icons">lock_fill</i>
          </span>
          <span class="icon-name">lock_fill</span>
          </f7-link>
        </f7-col>
        <f7-col width="33">
          <f7-link href="/about/">
           <span class="icon-box bg-color-green">
            <i class="f7-icons">favorites_alt_fill</i>
          </span>
          <span class="icon-name">favorites_alt_fill</span>
          </f7-link>
        </f7-col>
      </f7-row>
    </f7-block>

  </f7-page>
</template>
<script>
import F7Col from "framework7-vue/components/col";
import F7Link from "framework7-vue/components/link";

export default {
    components: {
        F7Link,
        F7Col}
}
</script>
