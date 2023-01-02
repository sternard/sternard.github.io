<?php
    function validate_email($email) {
        if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
            return true;
        }else{
            return false;
        }
    }

    function validate_name($name) {
        if (preg_match("/^[a-zA-Z-' ]*$/",$name)) {
            return true;
        }else{
            return false;
        }
    }

    function validate_number($number) {
        if (preg_match("/^((\+44\s?\d{4}|\(?\d{5}\)?)\s?\d{6})|((\+44\s?|0)7\d{3}\s?\d{6})$/",$number)) {
            return true;
        }else{
            return false;
        }
    }
    
    function submit_contact_form($name,$email,$number,$subject,$message) {
        require ("connect.php");

        $sql = "INSERT INTO contact(name, email, number, subject, message)
                VALUES(?,?,?,?,?)";

        try {
            $results = $pdo->prepare($sql);
            $results->bindValue(1, $name, PDO::PARAM_STR);
            $results->bindValue(2, $email, PDO::PARAM_STR);
            $results->bindValue(3, $number, PDO::PARAM_INT);
            $results->bindValue(4, $subject, PDO::PARAM_STR);
            $results->bindValue(5, $message, PDO::PARAM_STR);
            $results->execute();
        } catch (Exception $e) {
            echo $e->getMessage();
            return false;
        }
        return true;
    }
?>