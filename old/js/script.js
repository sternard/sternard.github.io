//Mobile menu
let $menuOpen = false;
let $mobileWidth = window.matchMedia( "(min-width: 770px)" ); //MUST match $medium-break in sass

const $toggleMenu = function(){
  $('.sidebar-hamburger').toggleClass('open'); //change hamburger to X
  $('.nav-container').toggleClass('open'); //change menu state
  if ($menuOpen === false){ 
    $menuOpen = true;
  }else{ 
    $menuOpen = false; //keep track of state
  }
}

//call toggleMenu function on hamburger tap
$(document).ready(function(){
  $('.sidebar-hamburger').click($toggleMenu);
});

//close toggleMenu if not in mobile view
$mobileWidth.addEventListener("change", () => {
  if ($mobileWidth.matches && $menuOpen) {
    $toggleMenu();
  }
});

//close menu when tapping outside of it
$(document).click((event) => { 
  if (!$(event.target).closest('.nav-container').length && $menuOpen) { //check if tap is outside of menu
    event.preventDefault(); //stop from opening links or interacting with page which is currently dimmed
    $toggleMenu(); //close menu
  }        
});



//Contact form validation
function isLetters(value) {
  const regex = /^[a-zA-Z-' ]*$/;
  return regex.test(value);
}
function isEmail(value) {
  const regex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])+$/;
  return regex.test(value);
}
function isPhone(value) {
  const regex = /^((\+44\s?\d{4}|\(?\d{5}\)?)\s?\d{6})|((\+44\s?|0)7\d{3}\s?\d{6})$/;
  return regex.test(value);
}

$('.contact-form').submit(function( event ) {
  let $emailName = $('#email-name').val();
  let $emailAddress = $('#email-address').val();
  let $emailNumber = $('#phone-number').val();
  let $emailSubject = $('#email-subject').val();
  let $emailMessage = $('#email-message').val();

  let $failure = 0; //if program counts any failures it knows not to send email at end of process

  if ($emailName === "" || !isLetters($emailName)) {
    $("label[for='email-name']").html('<span class="required">*Please provide a <strong>contact name</strong>:</span><br>');
    $failure++;
  }else{
    $("label[for='email-name']").html('<span class="required"></span>');
  }
  
  if ($emailAddress === "" || !isEmail($emailAddress)) {
    $("label[for='email-address']").html('<span class="required">*Please double check your <strong>email address</strong>:</span><br>');
    $failure++;
  }else{
    $("label[for='email-address']").html('<span class="required"></span>');
  }

  if ($emailNumber != "" && !isPhone($emailNumber)) {
    $("label[for='phone-number']").html('<span class="required">*Please double check your <strong>phone number</strong>:</span><br>');
    $failure++;
  }else{
    $("label[for='phone-number']").html('<span class="required"></span>');
  }

  if ($emailMessage === "") {
    $("label[for='email-message']").html('<span class="required">*Please let me know what you\'d like to <strong>contact me about</strong>:</span><br>');
    $failure++;
  }else{
    $("label[for='email-message']").html('<span class="required"></span>');
  }

  if ($failure > 0) {
    $failure = 0; //if any input fails validation, stop from sending email and reset counter
    event.preventDefault();
  }else{
    //client side validation is successful
    //$('.contact-form')[0].reset();
  }
});
