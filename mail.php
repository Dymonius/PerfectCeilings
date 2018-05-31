<?php

$recepient = "samsonov.1982@bk.ru";
$recepient1 = "dmitry.dvernikov@gmail.com";
$sitename = "Отличные потолки";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$text = trim($_POST["text"]);
$message = "Имя: $name \nТелефон: $phone \nТекст: $text";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
mail($recepient1, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient1");