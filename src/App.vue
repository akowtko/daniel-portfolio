<template>
  <v-app>
    <v-toolbar app style="background-color: transparent">
      <v-toolbar-title class="headline text-uppercase">
        <span>Daniel Higley</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
              flat
              fab
              href="https://www.linkedin.com/in/dhigley/"
              target="_blank"
      >
        <v-icon color="blue">
          fab fa-linkedin
        </v-icon>
      </v-btn>
    </v-toolbar>

    <v-content>
      <v-card class="text-xs-center pt-4">
        <v-card-media>
          <v-avatar size="85" class="text-xs-center">
            <img :src="require('./assets/scott-webb-272211-unsplash.jpg')">
          </v-avatar>
        </v-card-media>
        <v-card-text>
          Welcome! I'm an Applied Physics researcher at Stanford National Accelerator.
        </v-card-text>
      </v-card>
    </v-content>
  </v-app>
</template>

<script>
  import HelloWorld from './components/HelloWorld'

  export default {
    name: 'App',
    components: {
      HelloWorld
    },
    data () {
      return {
        //
      }
    }
  }
</script>
