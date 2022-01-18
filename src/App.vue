<template>
  <div id="app">
    <header class="header">

      <img class="logo" alt="Awardco logo" src="./assets/awardcoLogo.png">
      <h3 class="logo-text"> TEST PLAYGROUND</h3>

    </header>
    <router-view></router-view>
  </div>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
</template>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  box-sizing: border-box;
  background-color: #F3F4F6;
}

h3 {
  margin-block-start: 0;
  margin-block-end: 0;
  font-size: 20px;
}

p {
  color: #4B5563;
  font-size: 14px;
}

a {
  color: inherit;
  text-decoration: none;
}

#app {
  font-family: 'Poppins', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #111827;
  padding-top: 72px;
}

.header {
  position: fixed;
  top: 0;
  left: 0;
  background-color: white;
  width: 100%;
  max-height: 72px;
  padding: 26px;
  padding-left: 24px;
  border-bottom: 1px solid #E5E7EB;
  display: flex;
  align-items: center;
  /* box-shadow: 0px 8px 16px 0px #1111111A; */

}

.logo {
  height: 20px;
  margin-right: 8px;
}

.logo-text {
  font-size: 12px;
  letter-spacing: 1.2px;
  margin-block-start: 0;
  margin-block-end: 0;
}
</style>
