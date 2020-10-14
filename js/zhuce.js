$(function () {
    $("#submit_login").on(
        "click", function () {
            if (/^[a-zA-Z]{1}[a-z0-9A-Z]*$/.test($("#user").val()) && /^.{6,16}$/.test($("#password").val())) {

                if ($("#xieyi").prop("checked") === true) {

                    let username = $("#user").val();
                    $.get(
                        "http://jx.xuzhixiang.top/ap/api/reg.php",
                        {
                            "username": username,
                            "password": $("#password").val()
                        }, function (data) {
                            $("#type_text").text(data.msg);
                            if (data.code == 1) {
                                $("#type_text").text("跳转中···");
                                //获取用户购物车


                                location.href = "login.html";
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