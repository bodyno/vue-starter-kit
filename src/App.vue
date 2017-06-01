<template>
  <div id='app'>
    <header class='header'>
      <h1>Vue Starter Kit<a class='link' href='http://bodyno.com' target='_blank'>bodyno</a></h1>
      <nav class='inner'>
        <router-link to='/' exact>Home</router-link>
        <span class='spa'>·</span>
        <router-link to='/zen'>Zen</router-link>
      </nav>
    </header>
    <router-view class='view'></router-view>
  </div>
</template>

<style lang='less'>
body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;;
  font-size: 15px;
  background-color: lighten(#eceef1, 30%);
  margin: 0;
  padding-top: 55px;
  color: #34495e;
  overflow-y: scroll;
}

a {
  color: #07c;
  text-decoration: none;
  &:hover {
    color: #3af;
    text-decoration: underline;
  }
}

.header {
  text-align: center;
  .link {
    margin-left: 10px;
  }
  .router-link-active {
    font-weight: bold;
    text-decoration: underline;
  }
  .spa {
    margin: 0 8px;
    font-weight: bold;
  }
}
</style>
