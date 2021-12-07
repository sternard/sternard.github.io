$('.child').click((event) => { //close menu when tap outside of it
  event.preventDefault(); //stop from opening links etc    
});

//Mobile menu
let $menuOpen = false;
let $mobileWidth = window.matchMedia( "(min-width: 768px)" );

const $toggleMenu = function(){
    $('.sidebar-hamburger').toggleClass('open');
    $('.nav-container').toggleClass('open');
    if ($menuOpen === false)
        { $menuOpen = true; } else { $menuOpen = false; }
}

$(document).ready(function(){
	$('.sidebar-hamburger').click($toggleMenu);
});

$mobileWidth.addEventListener("change", () => {
  if ($mobileWidth.matches && $menuOpen) {
    $toggleMenu();
  }
});

$(document).click((event) => { //close menu when tap outside of it
    if (!$(event.target).closest('.nav-container').length && $menuOpen) { //check if menu is open
      event.preventDefault(); //stop from opening links etc
      $toggleMenu(); //close menu
    }        
});



//Contact form validation
function isEmail(email) {
  const regex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
  return regex.test(email);
}
function isPhone(number) {
  const regex = /^((\+44\s?\d{4}|\(?\d{5}\)?)\s?\d{6})|((\+44\s?|0)7\d{3}\s?\d{6})$/;
  return regex.test(number);
}

$('.newsletter-signup').submit(function( event ) {
  event.preventDefault();
  let $emailName = $('#email-name').val();
  let $emailAddress = $('#email-address').val();
  let $emailNumber = $('#phone-number').val();
  let $emailSubject = $('#email-subject').val();
  let $emailMessage = $('#email-message').val();

  if ($emailName === "") {
    $("label[for='email-name']").html('<span class="required">*Please provide a <strong>contact name</strong>:</span><br>');
  }else{
    $("label[for='email-name']").html('<span class="required"></span>');
  }
  
  if ($emailAddress === "" || !isEmail($emailAddress)) {
    $("label[for='email-address']").html('<span class="required">*Please double check your <strong>email address</strong>:</span><br>');
  }else{
    $("label[for='email-address']").html('<span class="required"></span>');
  }

  if ($emailNumber != "" && !isPhone($emailNumber)) {
    $("label[for='phone-number']").html('<span class="required">*Please double check your <strong>phone number</strong>:</span><br>');
  }else{
    $("label[for='phone-number']").html('<span class="required"></span>');
  }

  if ($emailMessage === "") {
    $("label[for='email-message']").html('<span class="required">*Please let me know what you\'d like to <strong>contact me about</strong>:</span><br>');
  }else{
    $("label[for='email-message']").html('<span class="required"></span>');
  }



//   alert(`Name: ${$emailName}
// Address: ${$emailAddress}
// Number: ${$emailNumber}
// Subject: ${$emailSubject}
// Message: ${$emailMessage}`);
});
