//判断用户是否登录,未登录直接跳转到提示登录的cart.html
if (localStorage.getItem("loginStatus") != 1) {
    location.href = "cart.html";
}
//获取用户id
$(function () {
    $.get(
        "http://jx.xuzhixiang.top/ap/api/cart-list.php", {
        id: localStorage.getItem("UID")
    }, function (data) {
        console.log(data);
        let str = "";
        for (let i in data.data) {
            str += `
                 <section class="info">
                     <section class="check">√</section>
                     <img src="${data.data[i].pimg}" alt="">
                     <section class="info_r">
                        <p>${data.data[i].pname}</p>
                        <p>${data.data[i].pprice}</p>
                        <span class="minus">-</span>
                        <input type="number" value="${data.data[i].pnum}">
                        <span class="plus">+</span>
                    </section>
                </section>
                 `
        }
        $(".content").html(str);
        count();

        /*   $(".check").click(function(){
             $(this).


          }) */

        //添加 减少商品数量
        $(".minus").click(function () {
            // console.log(1);
            let num = +$(this).siblings().filter("[type=number]").val();
            if (num < 2) {
                $(this).siblings().filter("[type=number]").val(1);
            } else {
                // console.log($(this).siblings().filter("[type=number]"));
                $(this).siblings().filter("[type=number]").val(num - 1);
                count();
            }

        })
        $(".plus").click(function () {

            let num = +$(this).siblings().filter("[type=number]").val();
            $(this).siblings().filter("[type=number]").val(num + 1);
            // console.log();
            // $("#allCount").text(parseInt($(".info_r p:eq(1)").text())*parseInt( $(".info_r input").val()));
            $(".info_r input")

            count();
        })


    }
    )
})
function count() {
    var sum = 0;
    $(".info_r p:nth-child(2)").each(
        function (i) {
            sum += parseInt($(this).text()) * $($(".info_r input")[i]).val()
        }
    )
    $("#allCount").text(sum + "元");
}