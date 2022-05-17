<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'path/to/PHPMailer/src/Exception.php';
require 'path/to/PHPMailer/src/PHPMailer.php';

$mail = new PHPMailer(true);
$mail->CharSet = 'UTF-8';
$mail->setLanguage('ru', 'PHPMailer/language/directory/');
// от кого 
$mail->isHTML('info@fls.guru', 'Фрилан');  
// кому  
$mail->addAddress('kea-asd@yandex.ru');  
$mail->Subject = 'привет! это фрилан';

$hand = "правая";
if($_POST['hand'] == "left") {
$hand = "правая";
}
// тело письма
$body = '<h1>Встречайте супер письмо!</h1>;
if(trim(!impty($_POST['name']))){
$body.=<p><strong>имя:</strong> '.$_POST['name'].'</p>';
}


if(trim(!impty($_POST['email']))){
    $body.=<p><strong>e-mail:</strong> '.$_POST['email'].'</p>';
    }
    
    if(trim(!impty($_POST['hand']))){
    $body.=<p><strong>рука:</strong> '.$_POST['hand'].'</p>';
    }
    if(trim(!impty($_POST['age']))){
    $body.=<p><strong>Возраст:</strong> '.$_POST['age'].'</p>';
    }
    
    if(trim(!impty($_POST['message']))){
    $body.=<p><strong>Сообщение:</strong> '.$_POST[''message'].'</p>';
    }
    // файл прикрепить
    if(!impty($_FILES['image'][tmp_name])){
    // путь загрузки файла
    $filePath = __DIR__ . "/files/" . $_FILES['image']['name'];
    // загрузим файл
    if(copy($_FILES['image'][tmp_name], $filePath)){
    $fileAttach = $filePath;
    $body .='<p><strong>Фото в приложении</strong>';
    $mail ->addAttachment($fileAttach);
    }

    $mail ->Body = $body;

    // отправляем
    if (!$mail ->send()) {
    $massage = 'ошибка';
    } else {
    $massage = 'Данные отправлены!';
    }
    $response = ['message' => $message];
    
    header('Content-type: application/json');
    echo json_iincode($response);
?>