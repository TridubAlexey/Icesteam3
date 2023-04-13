<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <link rel="icon" href="HUD elements/Favicon.svg" type="image/x-icon">
    <link rel="stylesheet" href="auth.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Авторизация</title>
</head>
<body>
<div class="login">
    <form action="auth.php" method="POST" class="form">
        <p>
        <label for="login">Логин:</label>
        <input type="text" class="INPUT" name="login"> <br>
        </p>
        <p>
        <label for="password">Пароль:</label>
        <input type="password" class="INPUT" name="password"> <br>
        </p>
        <p>
        <input type="submit" value="Войти" class="login-button">
        </p>
    </form>
</div>
</body>
</html>