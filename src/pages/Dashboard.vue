<template>
  <v-container fluid fill-height>
    <v-layout justify-center align-center>
      <v-jumbotron
        :gradient="gradient"
        dark
        src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg"
      >
        <v-container fill-height>
          <v-layout align-center>
            <v-flex text-xs-center>
              <h3 class="display-2">
              <img src="/public/n2.png" id="logo">
              Nexus &middot; Redefining Client Acquisition
              </h3>
            </v-flex>
          </v-layout>
        </v-container>
      </v-jumbotron>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      gradient: 'to top right, rgba(245,56,68, .7), rgba(66,55,143, .7)'
    })
  }
</script>

<style scoped>
  #logo {
    width: 40px;
  }
</style>