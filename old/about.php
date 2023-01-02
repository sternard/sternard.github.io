<?php include("header.php");
include("functions.php"); ?>
    <div class="content-container">
        <div class="small-hero-image">
            <h1>About Me</h1>
        </div>
        <div class="about-container">
            <div>
                <img src="images/93719219.jpeg" alt="Self Portrait">
                <p>I'm Stephen Bernard, an aspiring web developer from Oxford, UK.</p>
                <p>My background is in music production and live sound engineering. Between 2017-2021, I worked in Quality Assurance in the professional audio software industry, gleaning invaluable experience in software development environments and familiarising myself with common tools and practises, such as the use of CI/CD pipelines, version control software, large scale issue tracking and working in scrums in an Agile environment.</p>
                <p>Since 2021 I have been part of the <a href="scs_scheme.php">SCS Scheme</a>, expanding my skills in web development with the hope of becoming a full time developer.</p>
            </div>
        </div>
        <div class="mobile-only-container">
            <span>
                <a href="tel:07748371934"><i class="fas fa-phone"></i></a>
            </span>
            <span>
                <a href="mailto:stephen.bernard@netmatters-scs.com"><i class="fas fa-at"></i></a>
            </span>
            <span>
                <a href="https://www.google.com/maps?ll=51.749744,-1.238654&z=15&t=m&hl=en&gl=GB&mapclient=embed&q=Rectory+Rd+Oxford" target="_blank"><i class="fas fa-map-marked-alt"></i></a>
            </span>
        </div>
        <div class="contact-container" id="contact">
            <div>
<?php
    $name = "";
    $email = "";
    $number = "";
    $subject = "";
    $message = "";

    $name_label = "";
    $email_label = "";
    $number_label = "";
    $message_label = "";

    if ($_SERVER['REQUEST_METHOD'] == 'POST') {
        $name = trim(filter_input(INPUT_POST, 'email-name', FILTER_SANITIZE_STRING));
        $email = trim(filter_input(INPUT_POST, 'email-address', FILTER_SANITIZE_STRING));
        $number = trim(filter_input(INPUT_POST, 'phone-number', FILTER_SANITIZE_STRING));
        $subject = trim(filter_input(INPUT_POST, 'email-subject', FILTER_SANITIZE_STRING));
        $message = trim(filter_input(INPUT_POST, 'email-message', FILTER_SANITIZE_STRING));

        $failures = 0;

        if (empty($name) || !validate_name($name)) {
            $failures++;
            $name_label = '<span class="required">*Please provide a <strong>contact name</strong>:</span><br>';
        }
        if (empty($email) || !validate_email($email)) {
            $failures++;
            $email_label = '<span class="required">*Please double check your <strong>email address</strong>:</span><br>';
        }
        if (!empty($number) && !validate_number($number)) {
            $failures++;
            $number_label = '<span class="required">*Please double check your <strong>phone number</strong>:</span><br>';
        }
        if (empty($message)) {
            $failures++;
            $message_label = '<span class="required">*Please let me know what you\'d like to <strong>contact me about</strong>:</span><br>';
        }

        if ($failures === 0) {
            if (submit_contact_form($name,$email,$number,$subject,$message)) {
                echo ("
                    <span class='success-span'>Your email has been sent. Please expect a reply within 1-2 working days.<br><br></span>
                ");
                $name = "";
                $email = "";
                $number = "";
                $subject = "";
                $message = "";
            }else{
                echo ("
                    <span class='success-span required'>PHP Error - couldn't add to database.<br><br></span>
                ");
            }
        }
    }
?>
                <form class="contact-form" action="#" method="post">
                    <label for="email-name"><?php echo $name_label; ?></label>
                    <input type="text" id="email-name" name="email-name" placeholder="Your Name" value="<?php echo $name; ?>"><br>

                    <label for="email-address"><?php echo $email_label; ?></label>
                    <input type="email" id="email-address" name="email-address" placeholder="Your Email" value="<?php echo $email; ?>"><br>

                    <label for="phone-number"><?php echo $number_label; ?></label>
                    <input type="number" id="phone-number" name="phone-number" placeholder="Phone number (optional)" value="<?php echo $number; ?>"><br>

                    <label for="email-subject"></label>
                    <input type="text" id="email-subject" name="email-subject" placeholder="Email Subject (optional)" value="<?php echo $subject; ?>"><br>

                    <label for="email-message"><?php echo $message_label; ?></label>
                    <textarea id="email-message" name="email-message"><?php echo $message; ?></textarea><br>

                    <button type="submit" id="email-submit">Submit <i class="fas fa-arrow-right"></i></button>
                </form>
            </div>
            <div>
                <h5>Get in touch</h5>
                <p>Please reach out if you think I'd be a good fit for your next project.</p>
                <h3><i class="fas fa-phone"></i> <a href="tel:07748371934">07748 371934</a></h3>
                <h4><a href="mailto:stephen.bernard@netmatters-scs.com">stephen.bernard @ netmatters-scs.com</a></h4>
            </div>
        </div>
        <div class="scroll-div">
            <a href="#top"><i class="fas fa-angle-double-up"></i></a>
        </div>
    </div>
<?php include("footer.php"); ?>