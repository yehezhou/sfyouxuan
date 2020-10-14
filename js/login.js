$(function () {
    $("#submit_login").on(
        "click", function () {
            if (/^[a-zA-Z]{1}[a-z0-9A-Z]*$/.test($("#user").val()) && /^.{6,16}$/.test($("#password").val())) {

                if ($("#xieyi").prop("checked") === true) {

                    let username = $("#user").val();
                    $.get(
                        "http://jx.xuzhixiang.top/ap/api/login.php",
                        {
                            "username": username,
                            "password": $("#password").val()
                        }, function (data) {
                            $("#type_text").text(data.msg);
                            if (data.code == 1) {
                                $("#type_text").text("跳转中···");
                                //获取用户购物车
                                localStorage.setItem("UID", data.data.id);//用户id
                                localStorage.setItem("username", username);//用户名
                                localStorage.setItem("loginStatus", 1);//存储登录状态
                                location.href = "mine.html";
                                console.log(data);
                            }
                        }
                    )
                } else {
                    $("#type_text").text("请同意用户协议");
                }
            }

        }
    )
})