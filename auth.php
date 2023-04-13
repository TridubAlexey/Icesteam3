<?php
session_start();
include "db.php";

$login= $_POST['login'];
$password= $_POST['password'];

$query = $dbh -> prepare("SELECT * FROM users WHERE login='$login'");
$query -> execute();
$row = $query->fetch();

if ($row>0)
{
    if (password_verify($password,$row['password'])==true){
            $_SESSION['login'] = $login;
            header("location:index.php");
}
            else{
            echo "Неправильный пароль";
            }
}
?>


