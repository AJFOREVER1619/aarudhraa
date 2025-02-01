<?php
if (isset($_POST['login'])) {
    $username=$_POST['username'];
    $password=$_POST['password'];
    if($username=="aarudhraa" && $password=="a@2025"){
        header('Location: ./Edit/company.php');
    }
}

?>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>AARUDHRAA ORGANICS</title>
<style>
    body {
        margin: 0;
        padding: 0;
        font-family: Arial, sans-serif;
        background-image: url('../aaru/logo1.png');
        background-size: cover;
        background-position: center;
        background-blend-mode:hue;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgba(255, 255, 255, 0.5); /* Adjust opacity here */
        
    }

    .login-card {
        background-color: rgba(0, 0, 0, 0.8);
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
        text-align: center;
        width: 300px;
        
    }

    .login-card h2 {
        margin-bottom: 20px;
        color: white;
    }

    .login-card input[type="text"],
    .login-card input[type="password"] {
        width: 100%;
        padding: 10px;
        margin-bottom: 20px;
        border: 1px solid #ccc;
        border-radius: 5px;
        box-sizing: border-box;
    }

    .login-card input[type="submit"] {
        width: 100%;
        padding: 10px;
        border: none;
        border-radius: 5px;
        background-color: #4CAF50;
        color: rgb(255, 255, 255);
        font-weight: bold;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }

    .login-card input[type="submit"]:hover {
        background-color: #45a049;
    }
</style>
</head>
<body>

<div class="login-card">
    <h2>Login</h2>
    <form action="#" method="post">
        <input type="text" name="username" placeholder="Username" >
        <br>
        <input type="password" name="password" placeholder="Password" >
        <br>
        <button type="submit" name="login">Login</button>
        
    </form>
</div>

</body>
</html>
