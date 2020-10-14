
//判断用户是否登录,未登录直接跳转到提示登录的cart.html
if(localStorage.getItem("loginStatus") != 1){
    location.href = "cart.html";
}

$(function(){
    $.get(
        "http://jx.xuzhixiang.top/ap/api/cart-list.php",{
            id:localStorage.getItem("UID")
        },function(data){
            console.log(data);
            let str ="";
            for (let i in data.data) {
                 str +=`
                 <section class="info">
            <section class="check">√</section>
            <img src="${data.data[i].pimg}" alt="">
            <section class="info_r">
                <p>${data.data[i].pname}</p>
                <p>¥${data.data[i].pprice}</p>
                <span class="minus">-</span>
                <input type="number" value="${data.data[i].pnum}">
                <span class="plus">+</span>
            </section>
        </section>
                 `
            }
            $(".content").html(str);

            $(".check").click(function(){
               
            })
        }
    )
})