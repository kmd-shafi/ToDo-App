<template>
    <div class="centering-container">
      <v-card width="300" class="pa-4">
        <v-form v-if="!showCreateAccount" @submit.prevent="submitLogin">
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="Email"
            required
          ></v-text-field>
          
          <v-text-field
            v-model="password"
            :rules="passwordRules"
            label="Password"
            type="password"
            required
          ></v-text-field>
          
          <v-btn class="mt-4" type="submit" block color="primary">SUBMIT</v-btn>
          
          <div class="text-center mt-2">
            <a @click.prevent="showCreateAccount = true" href="#">Create Account</a>
          </div>
        </v-form>
  
        <v-form v-else @submit.prevent="submitCreateAccount">
          <h2 class="text-center mb-4">Create Account</h2>
          <v-text-field
            v-model="newEmail"
            :rules="emailRules"
            label="Email"
            required
          ></v-text-field>
          
          <v-text-field
            v-model="newPassword"
            :rules="passwordRules"
            label="Password"
            type="password"
            required
          ></v-text-field>
          
          <v-text-field
            v-model="confirmPassword"
            :rules="confirmPasswordRules"
            label="Confirm Password"
            type="password"
            required
          ></v-text-field>
          
          <v-btn class="mt-4" type="submit" block color="primary">CREATE ACCOUNT</v-btn>
          
          <div class="text-center mt-2">
            <a @click.prevent="showCreateAccount = false" href="#">Back to Login</a>
          </div>
        </v-form>
      </v-card>
    </div>
  </template>
  
  <script>
  export default {
    data: () => ({
      email: '',
      password: '',
      newEmail: '',
      newPassword: '',
      confirmPassword: '',
      showCreateAccount: false,
      emailRules: [
        v => !!v || 'Email is required',
        v => /.+@.+\..+/.test(v) || 'Email must be valid'
      ],
      passwordRules: [
        v => !!v || 'Password is required',
        v => v.length >= 8 || 'Password must be at least 8 characters'
      ],
    }),
    computed: {
      confirmPasswordRules() {
        return [
          v => !!v || 'Please confirm your password',
          v => v === this.newPassword || 'Passwords do not match'
        ]
      }
    },
    methods: {
      submitLogin() {
        // Handle login submission
        console.log('Login submitted')
      },
      submitCreateAccount() {
        // Handle create account submission
        console.log('Create account submitted')
      }
    }
  }
  </script>
  
  <style scoped>
  .centering-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  </style>