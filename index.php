<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Admin Login</title>
<?php
    include "assets/links/head.php";
?>
<link rel="stylesheet" href="assets/naci/css/naci.css" />
<script src="assets/naci/js/naci.js"></script>
<script src="assets/tailwindcss/3.1.8/tailwind.js"></script>
<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.css">
<link rel="stylesheet" href="../toast/dist/css/iziToast.min.css"> 
<link rel="stylesheet" type="text/css" href="public/css/index.css">
<style>
    html{
         scroll-behavior: smooth;
    }
</style>
</head>
<body>
    <div class="relative bg-opacity-75 bg-green-700">
  <img src="/nacitest/assets/img/icanvi.jpg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260" class="absolute inset-0 object-cover w-full h-full" alt="" />
  <div class="relative">
    <svg class="absolute inset-x-0 bottom-0 text-white" viewBox="0 0 1160 163">
      <path
        fill="currentColor"
        d="M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276 13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196 162.5C76 162.5 -44 162.5 -104 162.5H-164V13Z"
      ></path>
    </svg>
    <div class="relative px-4 py-16 mx-auto overflow-hidden sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div class="flex flex-col items-center justify-between xl:flex-row">
        <div class="rounded-md bg-blue-700 bg-opacity-70 p-3 w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
          <h2 class="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
            For Your Quick Notice
          </h2>
          <p class="max-w-xl mb-4 text-base text-white md:text-lg">
            Please minimize this page and open another page to proceed with your work. To log out, close this page.
          We wish you a fruitful day at work. Remain blessed as you put in your best. 
          </p>
          <a href="/" aria-label="" class="inline-flex items-center font-semibold tracking-wider transition-colors duration-200 text-teal-accent-400 hover:text-teal-accent-700">
            Forgot Password
            <svg class="inline-block w-3 ml-2" fill="currentColor" viewBox="0 0 12 12">
              <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z"></path>
            </svg>
          </a>
        </div>
        <div class="w-full max-w-xl xl:px-8 xl:w-5/12">
          <div class="bg-white rounded shadow-2xl p-7 sm:p-10">
            <h3 class="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
              Sign up for updates
            </h3>
            <div class="form">
                <div class="left-side"> <img src="images/image1.png" height="500" alt="">
                </div>
                <div class="right-side">
                    <form action="" method="POST" class="login__register" id="login-in">
                        <div class="signin_form s_form ">
                            <div class="login">
                                <h2>Existing User</h2>
                            </div>


                        <div class="input_text"> <input type="text" placeholder="username" name="usernamelogin" id="usernamelogin"> <i class="fa fa-user"></i> </div>


                        <div class="input_text"> <input class="signin_pass" type="password" name="password" placeholder="Password" id="loginPassword"> <i class="fa fa-lock"></i> <i class="fa fa-eye-slash"></i> </div>
                        <div class="login_btn"> 
                        <button type="button" class="login_button" 
                            name="login_admin" id="loginBtn">LOGIN</button></div>
                            <div class="forgot">
                                <p> <a href="#">Change Password Here</a> </p>
                            </div>
                            <!-- I disconnect the registration here -->
                            
                            <!-- <div class="create margin"> <a href="#" class="create_acc">Create your Account <i class="fa fa-long-arrow-right"></i></a> </div> -->
                        </div>
                    </form>


                    <div class="signup_form s_form d-none">
                        <div class="login">
                            <h2>New Account</h2>
                        </div>

                        <div>
                            <form class="reister_form" method="POST" id="register">
                        <div class="input_text"> <input type="text" placeholder="Username" name="username" id="username"> <i class="fa fa-user"></i> </div>


                        

                        <div class="input_text"> <input type="email" placeholder="Email" name="email" id="email"> <i class="fa fa-envelope"></i> </div>

                        <div class="input_text"> <input type="text" placeholder="Department" name="department" id="department"> <i class="fa fa-home"></i> </div>

                        <div class="input_text"> <input type="password" placeholder="Password" name="password" class="signup_pass" placeholder="Password" id="password"> <i class="fa fa-lock"></i> <i class="fa fa-eye-slash signup_eye"></i> </div>
                        <div class="login_btn"> <button class="signup_button" 
                      id="register_btn" type="button">Sign Up</button> </div>
                        
                        <div class="create">
                            <p>Already have an account? <a href="#" class="login_acc">Login <i class="fa fa-long-arrow-right"></i></a></p>
                        </div>
                        </form>
                        </div>

                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>



    <script>
        let create_acc = document.querySelector(".create_acc");
        let login_acc = document.querySelector(".login_acc");
        let s_form = document.querySelectorAll(".s_form");
        let login_button = document.querySelector(".login_button");
        let signin_form_input = document.querySelectorAll(".signin_form input");

        let signin_eye_click = document.querySelector(".fa-eye-slash");
        let signin_type = document.querySelector(".signin_pass");
        let set_signin_eye = document.querySelector(".fa-eye-slash");

        let signup_eye_click = document.querySelector(".signup_eye");
        let signup_type = document.querySelector(".signup_pass");
        let set_signup_eye = document.querySelector(".signup_eye");

        let signup_form_input = document.querySelectorAll(".signup_form input");
        let signup_button = document.querySelector(".signup_button");


        let formnumber = 0;

        create_acc.addEventListener('click', function() {
            formnumber++;
            create();
        });

        login_acc.addEventListener('click', function() {
            formnumber--;
            create();
        });



        function create() {
            s_form.forEach((form_num) => {
                form_num.classList.add('d-none');
            });
            s_form[formnumber].classList.remove('d-none');
        };


        login_button.onclick = function() {
            signin_form_input.forEach((e) => {
                if (e.value.length < 1) {
                    e.classList.add('signin_warn');
                }
            });
        };
        signin_form_input.forEach((e) => {
            e.addEventListener('keyup', function() {
                if (e.value.length < 1) {
                    e.classList.add('signin_warn');
                } else {
                    e.classList.remove('signin_warn');
                }
            });
        });
        signup_button.onclick = function() {
            signup_form_input.forEach((signup_e) => {
                if (signup_e.value.length < 1) {
                    signup_e.classList.add('signup_warn');
                }
            });
        };
        signup_form_input.forEach((signup_e) => {
            signup_e.addEventListener('keyup', function() {
                if (signup_e.value.length < 1) {
                    signup_e.classList.add('signup_warn');
                } else {
                    signup_e.classList.remove('signup_warn');
                }
            });
        });
        signin_eye_click.addEventListener('click', function() {
            if (signin_type.type == "password") {
                signin_type.type = "text";
                set_signin_eye.classList.remove('fa-eye-slash');
                set_signin_eye.classList.add('fa-eye');
                signin_type.classList.add('signin_eye_wrn');
            } else {
                signin_type.type = "password";
                set_signin_eye.classList.add('fa-eye-slash');
                set_signin_eye.classList.remove('fa-eye');
                signin_type.classList.remove('signin_eye_wrn');
            }
        });
        signup_eye_click.addEventListener('click', function() {
            if (signup_type.type == "password") {
                signup_type.type = "text";
                set_signin_eye.classList.remove('fa-eye-slash');
                set_signup_eye.classList.add('fa-eye');
                signup_type.classList.add('signup_eye_wrn');
            } else {
                signup_type.type = "password";
                set_signin_eye.classList.add('fa-eye-slash');
                set_signup_eye.classList.remove('fa-eye');
                signup_type.classList.remove('signup_eye_wrn');
            }
        });
    </script>

<script type="text/javascript" src="../thirdparties/jquery/jquery.min.js"></script>
  <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.js"></script>
  <script src="../toast/dist/js/iziToast.js" type="text/javascript"></script> 
  <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>













  
</body>
</html>

