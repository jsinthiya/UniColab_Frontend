<script lang="ts">
	import { error } from '@sveltejs/kit';
    import { onMount } from 'svelte';
    import type { PageData } from './$types';
    import { superForm } from 'sveltekit-superforms';
    import { toast } from "svelte-sonner";
    import { Toaster } from "$lib/components/ui/sonner";


    export let data;
    export let form;
    $: console.log(form);

    const { form: loginForm, errors: loginErrors,enhance:loginEnhance } = superForm(data.loginForm);
    const { form: registerForm, errors: registerErrors,enhance:registerEnhance } = superForm(data.registerForm);
    


    
    onMount(() => {
 
        // Variable Declaration

    const loginBtn = document.querySelector("#login") as HTMLButtonElement;
    const registerBtn = document.querySelector("#register") as HTMLButtonElement;
    const loginForm = document.querySelector(".login-form") as HTMLDivElement;
    const registerForm = document.querySelector(".register-form")  as HTMLDivElement;
    const col1 = document.querySelector(".col-1") as HTMLDivElement;

// Login button function
loginBtn.addEventListener("click", () => {
    loginBtn.style.backgroundColor = "#21264D";
    registerBtn.style.backgroundColor = "rgba(255,255,255,0.2)";

    loginForm.style.left = "50%";
    registerForm.style.left = "-50%";

    loginForm.style.opacity = "1";
    registerForm.style.opacity = "0";

    col1.style.borderRadius = "0 30% 30% 0";
});

// Register button function

registerBtn.addEventListener("click", () => {
    loginBtn.style.backgroundColor = "rgba(255,255,255,0.2)";
    registerBtn.style.backgroundColor = "#21264D";

    loginForm.style.left = "150%";
    registerForm.style.left = "50%";

    loginForm.style.opacity = "0";
    registerForm.style.opacity = "1";

    col1.style.borderRadius = "0 25% 25% 0";

});
    });
</script>

<style>
    /* POPPINS FONT */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

/* ====== BASE ===== */
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}

/* ====== Body ===== */

main{
    /* background: url("./auth/img/1.jpg"); */
    background: linear-gradient(79deg, rgb(136, 189, 189) 0%, rgb(152, 185, 150) 21%, rgb(159, 166, 196) 48%, rgb(127, 166, 171) 78%, rgb(136, 128, 172) 100%);
    background-position:  center;
    background-size: cover;
    background-attachment: fixed;
    background-repeat: no-repeat;

    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    padding: 0 20px;
}

/* ====== Form container ===== */

.form-container{
    display: flex;
    width: 1000px;
    height: 600px;
    border:  3px solid rgba(255,255,255,0.3);
    border-radius: 30px;
    backdrop-filter: blur(20px);
    overflow: hidden;
}

/* ====== First Column ===== */

.col-1{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 55%;
    background: rgba(255,255,255,0.3);
    backdrop-filter: blur(30px);
    border-radius: 0 30% 30% 0;
    transition: border-radius 0.3s;

}

.image-layer{
    position: relative;

}
.form-image-main{
    width: 400px;
    animation: scale-up 3s ease-in-out alternate infinite;
}
.form-image{
    position: absolute;
    left: 0;
    top: 0;
    width: 400px;
}

.coin{
    animation: scale-down 3s ease-in-out alternate infinite;
}
.rocket{
    animation: up-down 3s ease-in-out alternate infinite;
}
.cloud{
    animation: left-right 3s ease-in-out alternate infinite;
}
.stars{
    animation: right-left 3s ease-in-out alternate infinite;
}

@keyframes left-right{
    to{
        transform: translateX(20px);
    }
}
@keyframes up-down{
    to{
        transform: translateY(20px);
    }
}
@keyframes scale-down{
    to{
        transform: scale(0.95);
    }
}
@keyframes scale-up{
    to{
        transform: scale(1.05);
    }
}
/* ====== Form Image Animation ===== */



/* ====== Featured Words ===== */

.featured-words{
    text-align: center;
    color: #fff;
    width: 300px;
}

.featured-words span{
    font-weight: 600;
    color: #21264D;
}
/* ====== Second Column ===== */

.col-2{
    position: relative;
    width: 45%;
    padding: 20px;
    overflow: hidden;
}
.btn-box{
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-top: 20px;
}
.btn{
    font-weight: 500;
    padding: 5px 20px;
    border: none;
    border-radius: 30px;
    background: rgba(255,255,255,0.2);
    color: #ffffff;
    box-shadow: 0 5px 10px rgba(0,0,0,0.2);
    cursor: pointer;
    transition: .2s;
}

.btn-1{
    background: #21264D;
}
.btn:hover{
    opacity: 0.85;
}
.login-form{
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 0 4vw;
    transition: .3s;
}
.register-form{
    position: absolute;
    left: -50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 0 4vw;
    transition: .3s;
}
.register-form .form-title{
    margin-block: 40px 20px;
}
.form-title{
    margin: 40px 0;
    color: #21264d;
    font-size: 28px;
    font-weight: 600;
}
.form-inputs{
    width: 100%;
}
.input-box{
    position: relative;
}
.input-field{
    width: 100%;
    height: 55px;
    padding: 0 15px;
    margin: 10px 0;
    color: #21264d;
    background: rgba(255, 255, 255, 0.2);
    border: none;
    border-radius: 10px;
    outline: none;
    backdrop-filter: blur(20px);
    box-shadow: 0 0 10px rgba(0,0,0,0.2);
}
::placeholder{
    color: #21264d;
    font-size: 15px;
}
.input-box .icon{
    position: absolute;
    top: 50%;
    right: 15px;
    transform: translateY(-50%);
    color: #21264d;
}
.forget-pass {
    color: #21264d;
    text-decoration: none;
    font-size: 14px;
}
.forget-pass:hover{
    text-decoration: underline;
}
.input-submit{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    width: 100%;
    height: 55px;
    padding: 0 15px;
    margin: 10px 0;
    color: #fff;
    background: #21264D;
    border: none;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0,0,0,0.2);
    cursor: pointer;
    transition: .2s; 
}
.input-submit:hover{
    gap:15px;
}
.social-login{
    display: flex;
    gap: 20px;
    margin-top: 20px;
}
.social-login i{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    width: 40px;
    color: #21264d;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    cursor: pointer;
    box-shadow: 0 0 10px rgba(0,0,0,0.2);
    transition: .2s;
}

.social-login i:hover{
    transform: scale(0.9);
}
/*  ======= Login Form ========  */


/*  ======= Register Form ========  */


/* ======== Responsive ======== */

@media (max-width: 892px){
    .form-container{
        width: 400px;
    }
    .col-1{
        display: none;
    }
    .col-2{
        width: 100%;
    }
}
</style>
<Toaster richColors closeButton position="top-center" />

<main>
    <!-- Form Container -->
    <div class="form-container">
        <div class="col col-1">
            <div class="w-[70%] rounded-lg backdrop-blur-lg flex flex-col items-center ">
                <img src="./logo-dark.png" width="100px" alt="">
                <p class="text-gray-600 font-extralight text-xs"><span class="text-[#0d6e6e]">Unite</span>, <span class="text-[#d06c98]">Innovate</span> , <span class="text-[#2e4fc6]">Succeed</span></p>
            </div>
            <div class="image-layer">
                <img src="./auth/img/white-outline.png" class="form-image-main">
                <img src="./auth/img/2.png" class="form-image rocket">
                <img src="./auth/img/cloud.png" class="form-image cloud">
                <img src="./auth/img/stars.png" class="form-image stars">
            </div>
            <!-- <p class="featured-words">You Are Few Minutes Way to boost your skills with <span>UniColab</span></p> -->
        </div>
        <div class="col col-2">
            <div class="btn-box">
                <button class="btn btn-1" id="login">Sign In</button>
                <button class="btn btn-2" id="register">Sign Up</button>
            </div>
          <!-- Login Form Container -->

            <div class="login-form">
                <div class="form-title">
                    <span>Sign In</span>
                </div>
                <form method="POST" action="?/login" use:loginEnhance on:submit={
                    async (e) => {
                        
                        if(form?.error && form?.status === 401)
                        {
                            toast.error(form?.error?.message);
                        }
                        
                    }
                
                } class="form-inputs">
                    <div class="input-box">
                        <input type="text" name="email" bind:value={$loginForm.email}  class="input-field" placeholder="Email Address">
                        <i class="bx bx-user icon"></i>
                    </div>
                    {#if $loginErrors.email}
                        <small class="text-red-400">{$loginErrors.email}</small>
                    {/if}
                    <div class="input-box">
                        <input type="password" name="password" bind:value={$loginForm.password} class="input-field" placeholder="Password">
                        <i class="bx bx-lock-alt icon"></i>
                    </div>
                    {#if $loginErrors.password}
                        <small class="text-red-400">{$loginErrors.password}</small>
                    {/if}
                    <div class="forget-pass">
                        <a href="#">Forget Password?</a>
                    </div>
                    <div class="input-box">
                        <button type="submit" class="input-submit">
                            <span>Sign In</span>
                            <i class="bx bxx-right-arrow-alt"></i>
                        </button>
                    </div>
                
                </form>
                <div class="social-login">
                    <i class="bx bxl-google"></i>
                    <i class="bx bxl-github"></i>
                  
                </div>
            </div>

          <!-- Register Form Container -->

          <div class="register-form">
            <div class="form-title">
                <span>Create Account</span>
            </div>
            <form method="POST" action="?/register" use:registerEnhance class="form-inputs">
                <div class="input-box">
                    <input type="text" name="name" bind:value={$registerForm.name} class="input-field" placeholder="Name">
                    <i class="bx bx-user icon"></i>
                </div>
                {#if $registerErrors.name}
                    <small class="text-red-400">{$registerErrors.name}</small>
                {/if}
                <div class="input-box">
                    <input type="text" name="email" bind:value={$registerForm.email}  class="input-field" placeholder="Email Address">
                    <i class="bx bx-envelope icon"></i>
                </div>
                {#if $registerErrors.email}
                    <small class="text-red-400">{$registerErrors.email}</small>
                {/if}
                <div class="input-box">
                    <input type="password" name="password" bind:value={$registerForm.password} class="input-field" placeholder="Password">
                    <i class="bx bx-lock-alt icon"></i>
                </div>
                {#if $registerErrors.password}
                    <small class="text-red-400">{$registerErrors.password}</small>
                {/if}
                <div class="input-box">
                    <button type="submit" class="input-submit">
                        <span>Sign Up</span>
                        <i class="bx bxx-right-arrow-alt"></i>
                    </button>
                </div>
            
            </form>
            <div class="social-login">
                <i class="bx bxl-google" ></i>
                <i class="bx bxl-github"></i>
            </div>
        </div>
        </div>
    </div>
</main>