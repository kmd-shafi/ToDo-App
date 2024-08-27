<template>
    <v-footer app fixed>
      <v-container>
        <v-row justify="center">
          <v-btn @click="dialog = true">Create Task</v-btn>
          <v-dialog v-model="dialog" max-width="500">
            <v-card>
              <v-card-title>Task Details</v-card-title>
              <v-card-text>
                <v-form>
                  <v-row>
                    <v-col cols="12">
                      <v-text-field label="Title" v-model="title"></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-text-field label="Date" type="date" v-model="date"></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-text-field label="time" type="time" v-model="date"></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-textarea label="Task" v-model="task"></v-textarea>
                    </v-col>
                  </v-row>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn @click="dialog = false">Close</v-btn>
                <v-btn @click="submitForm">Submit</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-row>
      </v-container>
    </v-footer>
  </template>
  
  <script>
  export default {
    data() {
      return {
        dialog: false,
        title: '',
        date: '',
        task: '',
      };
    },
    methods: {
      submitForm() {
        // Handle form submission here
        console.log('Form submitted:', { title: this.title, date: this.date, task: this.task });
        this.dialog = false;
      },
    },
  };
  </script>