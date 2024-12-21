let phonenumber =document.querySelector("#phone_number")
let password =document.querySelector("#password");
let eye =document.querySelector('.eye');
let btn =document.querySelector("#btn");

btn.addEventListener('click' , function(e){
    e.preventDefault();
    let data = new FormData()
    data.append('phone_number',phonenumber?.value)
    data.append('password' , password?.value)
    fetch('https://realauto.limsa.uz/api/auth/signin',{ 
        method: 'POST',
        body: data
    }).then(res=>{
        if(res.ok){
            Swal.fire({
                title: "Good job!",
                text: "You clicked the button!",
                icon: "success"
              });
        } else{
            Swal.fire({
                title: "Error",
                text: "You clicked the button!",
                icon: "error"
              });
        }
    }).catch(err=>{
        alert('Error')
    });
});


eye.addEventListener('click', function(e){
    if (password.type == "password"){
        password.type = "text"
        eye.classList.remove('fa-eye');
        eye.classList.add('fa-eye-slash');
    } else{
        password.type = "password"
        eye.classList.remove('fa-eye-slash');
        eye.classList.add('fa-eye');
    }

})