<template>
<nav class="navbar">
    <div class="navbar">
        <div class="navdiv">
            <div class="logo">ToDo</div>
            <ul>
                <li class="li">Welcome</li>
                <li class="li">name</li>
                <button class="logout_btn">Logout</button>
            </ul>
        </div>
    </div>
</nav>
</template>

<script>

</script>

<style>
*{
    text-decoration: none;
}
.navbar{
    background-color: black;
    font-family: 'Courier New', Courier, monospace;
    padding-right: 15px;
    padding-left: 15px;
}
.navdiv{
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.logo{
    font-size: 35px;
    font-weight: 600;
    color: white;
}
.li{
    list-style: none;
    display: inline-block;
    color: white;
    font-size: 18px;
    font-weight: bold;
    margin-right: 25px;
}
.logout_btn{
    background-color: whitesmoke;
    margin-left: 10px;
    border-radius: 10px;
    padding: 10px;
    width: 90px;
}
</style>