<template>
  <v-footer app fixed>
    <v-container>
      <v-row justify="center">
        <v-btn @click="dialog = true">Create Task</v-btn>
        <v-dialog v-model="dialog" max-width="500">
          <v-card>
            <v-card-title>Task Details</v-card-title>
            <v-card-text>
              <v-form ref="form" v-model="isValid">
                <v-row>
                  <v-col cols="12">
                    <v-text-field 
                      label="Title" 
                      v-model="title" 
                      :rules="[required('Title')]" 
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field 
                      label="Date" 
                      type="date" 
                      v-model="date" 
                      :rules="[required('Date')]" 
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field 
                      label="Time" 
                      type="time" 
                      v-model="time" 
                      :rules="[required('Time')]" 
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-textarea 
                      label="Task" 
                      v-model="task" 
                      :rules="[required('Task')]" 
                    ></v-textarea>
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
      time: '',
      task: '',
      isValid: false,
    };
  },
  methods: {
    required(field) {
      return (v) => !!v || `${field} is required`;
    },
    submitForm() {
      if (this.$refs.form.validate()) {
        console.log('Form submitted:', { 
          title: this.title, 
          date: this.date, 
          time: this.time, 
          task: this.task 
        });
        this.dialog = false;
      } else {
        console.log('Form validation failed');
      }
    },
  },
};
</script>