<template>
    <v-card>
      <v-layout>
        <v-app-bar
          color="primary"
          prominent
        >
          <v-toolbar-title>ToDo App</v-toolbar-title>
          <v-spacer></v-spacer>
          <div class="welcome-text">Welcome</div>
          <div class="name-text">John Doe</div>
          <v-btn @click="logout" variant="contained" color="primary" class="bg-white">Logout</v-btn>
        </v-app-bar>
  
        <v-navigation-drawer
          v-model="drawer"
          :location="$vuetify.display.mobile ? 'bottom' : undefined"
          temporary
        >
          <v-list
            :items="items"
          ></v-list>
        </v-navigation-drawer>
  
        <v-main style="height: 500px;">
          <v-card-text>
            The navigation drawer will appear from the bottom on smaller size screens.
          </v-card-text>
        </v-main>
      </v-layout>
    </v-card>
  </template>
  
  <script>
  export default {
    data: () => ({
      drawer: false,
      group: null,
      items: [
        {
          title: 'Foo',
          value: 'foo',
        },
        {
          title: 'Bar',
          value: 'bar',
        },
        {
          title: 'Fizz',
          value: 'fizz',
        },
        {
          title: 'Buzz',
          value: 'buzz',
        },
      ],
    }),
  
    watch: {
      group () {
        this.drawer = false
      },
    },
  
    methods: {
      logout () {
        // Add your logout logic here
        console.log('Logout button clicked')
      },
    },
  }
  </script>
  <style>
  .welcome-text {
    margin-right: 10px;
    font-size: 16px;
    font-weight: bold;
    color: #fff;
  }
  
  .name-text {
    margin-right: 20px;
    font-size: 16px;
    font-weight: bold;
    color: #fff;
  }
  
  .logout-button {
    margin-left: 10px;
  }
  </style>
  