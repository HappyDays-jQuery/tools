<template>
  <v-app>
    <v-card class="fill-height">
      <v-navigation-drawer expand-on-hover absolute>
        <v-list nav dense>
          <v-list-item link to="/">
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>
          <v-list-item link to="/decode">
            <v-list-item-icon>
              <v-icon>mdi-dog</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Decoder</v-list-item-title>
          </v-list-item>
          <v-list-item link to="/encode">
            <v-list-item-icon>
              <v-icon>mdi-cat</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Encoder</v-list-item-title>
          </v-list-item>
          <v-list-item link to="/about">
            <v-list-item-icon>
              <v-icon>mdi-panda</v-icon>
            </v-list-item-icon>
            <v-list-item-title>About</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-content>
        <v-container>
          <router-view/>
        </v-container>
      </v-content>
    </v-card>

  </v-app>
</template>

<script>
  export default {
    name: 'AppComponent',

    props: {},

    data: () => ({
      drawer: false,
    }),

    mounted() {
    },

    methods: {}
  }
</script>
