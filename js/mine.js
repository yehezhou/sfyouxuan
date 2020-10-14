$(function () {
    if (localStorage.getItem("loginStatus") != 1) {
        $("#username_dt").text("请登录");
        $("#username_dd").text("");
        $("#username_dt").click(function () {
            console.log(1);
            location.href = "login.html";
        })
    } else {
        $("#username_dt").text(localStorage.getItem("username"));
        $("#username_dd").text("超级会员");

    }



    $(".logOff").click(function () {
        localStorage.setItem("loginStatus", "0");
        location.reload(true);
    })
})