    <script src="js/jquery-3.6.0.min.js"></script>
    <script src="js/typewriter.js"></script>
    <?php
    if (stripos($_SERVER['REQUEST_URI'], 'index.php')){
        echo '<script src="js/indextyper.js"></script>';
    }elseif (stripos($_SERVER['REQUEST_URI'], 'examples.php')){
        echo '<script src="js/examplestyper.js"></script>';
    }elseif (stripos($_SERVER['REQUEST_URI'], 'database-challenge.php')){
        echo '<script src="js/dbchallengetyper.js"></script>';
    }
    ?>
    <script src="js/jquery.flip.min.js"></script>
    <script src="js/script.js"></script>
</body>
</html>