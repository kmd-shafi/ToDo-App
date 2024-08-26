<template>
<nav class="navbar">
    <nav class="navbar">
        <div class="navdiv">
            <div class="logo">ToDo</div>
            <ul>
                <li>
                    Welcome
                </li>
                <li>
                    name
                </li>
                <button>Logout</button>
            </ul>
        </div>
</nav>
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
li{
    list-style: none;
    display: inline-block;
}
</style>