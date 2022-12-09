const logingg = document.querySelector(".contentmid .btn-gg")
const loginfb = document.querySelector(".contentmid .btn-face")
const timacc = document.querySelector(".contentmid .saveacc a")
const thongbao = document.querySelector(".content2")
const input_pass = document.querySelector('.contentmid .passlogin input')
const input_user = document.querySelector('.contentmid .inputlogin input')
const dangnhapbtn = document.querySelector('.contentmid .sub input')
dangnhapbtn.addEventListener("click",() => {
    if(input_pass.value == "" || input_user.value == "")
        alert("Vui lòng nhập đầy đủ user và password");
    else{
        thongbao.innerHTML=`<h5 style="color: red;">bạn đã nhập sai tài khoản!!<br>vui lòng thử lại</h5>
        nếu chưa có tài khoản đăng ký tại <a href="dangky.html">Đây</a>`
    }
})
loginfb.addEventListener("click", ()=>{
    alert("chức năng tạm thời đang bảo trì!")
})
logingg.addEventListener("click", ()=>{
    alert("chức năng tạm thời đang bảo trì!")
})
timacc.addEventListener("click", ()=>{
    alert("chức năng này tạm thời cũng đang bảo trì!")
})