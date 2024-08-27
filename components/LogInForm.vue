<template>
    <div class="form_div">
<form class="log_in_form" action="/submit" method="post">

  <label class="lable" for="email">Email:</label>
  <input class="input" type="email" id="email" name="email" required>

  <label class="lable" for="password">Password:</label>
  <input class="input" type="password" id="password" name="password" required>

  <button class="log_in_btn" type="submit">Submit</button>
</form>
</div>
</template>

<script>

</script>

<style>
        .form_div{
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .log_in_form {
            background-color: white;
            padding: 20px;
            border-radius: 8px;
            width: 300px;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
        }
        .label {
            margin-bottom: 5px;
        }
        .input {
            width: 100%;
            padding: 8px;
            margin-bottom: 15px;
            border: 1px solid #ddd;
            border-radius: 4px;
            box-sizing: border-box;
        }
        .log_in_btn {
            width: 100%;
            padding: 10px;
            background-color: #007bff;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
        }
        .log_in_btn:hover {
            background-color: #0056b3;
        }
    </style>