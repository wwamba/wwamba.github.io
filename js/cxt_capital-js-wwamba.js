const cookieBox = document.querySelector(".cookie-consent-banner");
const acceptBtn = document.querySelector("button");

function cxtcapital_wwamba_cookie_OK() { 
  document.getElementById("wwamba_cookie").style.display="none";  
}

function cxtcapital_wwamba_cookie_KO() { 
  document.getElementById("wwamba_cookie").style.display="block";  
}

function cxtcapital_check_cookie(cookie_name) {
  var check_result = false;

  let checkCookie = document.cookie.indexOf(cookie_name);

  if(checkCookie != -1){
    check_result = true;
    console.log(cookie_name + ".cookie_check_success_ok");
  }else{
    check_result = false;
    console.log(cookie_name + ".cookie_check_success_ko");
  }
  return check_result;
}

function cxtcapital_acceptBtn_onclick() {
  
  var expr_date = new Date();
  expr_date.setMonth(expr_date.getMonth() + 9);
  var cookie_date = expr_date.toUTCString();

  document.cookie = "config=wwamba_cookie; expires=" + cookie_date + ";path=" + "domain=.warrenwamba.com; samesite=none; secure=true;";

  if(document.cookie){
    cxtcapital_wwamba_cookie_OK();
    console.log(".cookie_ok");
  }else{
    cxtcapital_wwamba_cookie_KO();
    console.log(".cookie_ko");
  }
}

function cxtcapital_onload_isCookie(){
  let checkCookie = cxtcapital_check_cookie("wwamba_cookie");
  checkCookie != false ? cxtcapital_wwamba_cookie_OK() : cxtcapital_wwamba_cookie_KO();
}
