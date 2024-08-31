<template>
  <div class="centering-container">
    <v-card width="300" class="pa-4">
      <v-form v-if="!showCreateAccount" @submit.prevent="submitLogin">
        <v-text-field
          v-model="email"
          :rules="emailRules"
          label="Email"
          required
          :error-messages="emailErrors"
        ></v-text-field>
        
        <v-text-field
          v-model="password"
          :rules="passwordRules"
          label="Password"
          type="password"
          required
          :error-messages="passwordErrors"
        ></v-text-field>
        
        <v-btn class="mt-4" type="submit" block color="primary">SUBMIT</v-btn>
        
        <div class="text-center mt-2">
          <a @click.prevent="showCreateAccount = true" href="#">Create Account</a>
        </div>
        
        <div v-if="loginError" class="text-center mt-2 red--text">
          {{ loginError }}
        </div>
      </v-form>

      <v-form v-else @submit.prevent="submitCreateAccount">
        <h2 class="text-center mb-4">Create Account</h2>
        <v-text-field
          v-model="newEmail"
          :rules="emailRules"
          label="Email"
          required
          :error-messages="emailErrors"
        ></v-text-field>
        
        <v-text-field
          v-model="newPassword"
          :rules="passwordRules"
          label="Password"
          type="password"
          required
          :error-messages="passwordErrors"
        ></v-text-field>
        
        <v-text-field
          v-model="confirmPassword"
          :rules="confirmPasswordRules"
          label="Confirm Password"
          type="password"
          required
          :error-messages="confirmPasswordErrors"
        ></v-text-field>
        
        <v-btn class="mt-4" type="submit" block color="primary">CREATE ACCOUNT</v-btn>
        
        <div class="text-center mt-2">
          <a @click.prevent="showCreateAccount = false" href="#">Back to Login</a>
        </div>
        
        <div v-if="createAccountError" class="text-center mt-2 red--text">
          {{ createAccountError }}
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
    loginError: '',
    createAccountError: '',
    emailErrors: [],
    passwordErrors: [],
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
      this.emailErrors = [];
      this.passwordErrors = [];
      this.loginError = '';
      
      if (!this.email || !this.password) {
        if (!this.email) this.emailErrors.push('Email is required');
        if (!this.password) this.passwordErrors.push('Password is required');
        return;
      }
      
      // Handle login submission
      console.log('Login submitted')
      
      // Example error handling
      if (this.email === 'error@example.com') {
        this.loginError = 'Invalid email or password';
      }
    },
    submitCreateAccount() {
      this.emailErrors = [];
      this.passwordErrors = [];
      this.createAccountError = '';
      
      if (!this.newEmail || !this.newPassword || !this.confirmPassword) {
        if (!this.newEmail) this.emailErrors.push('Email is required');
        if (!this.newPassword) this.passwordErrors.push('Password is required');
        if (!this.confirmPassword) this.passwordErrors.push('Please confirm your password');
        return;
      }
      
      // Handle create account submission
      console.log('Create account submitted')
      
      // Example error handling
      if (this.newEmail === 'error@example.com') {
        this.createAccountError = 'Email already exists';
      }
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

.v-card {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
}
</style>