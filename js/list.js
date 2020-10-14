$.get("http://jx.xuzhixiang.top/ap/api/productlist.php?uid=43404",function (data) {
    data=data.data;
    let str="";
    for (let index in data) {
       str +=`
       <section class="info">
       <a href="details.html?pid=${data[index].pid}"><img src="../${data[index].pimg}" alt=""></a>
       <section class="info_r">
           <p>${data[index].pname}</p>
           <p>¥${data[index].pprice}</p>
           <span>中国内地 | 暂无评论</span>
           <span class="iconfont">&#xe69c;</span>
       </section>
   </section>
       `


    }
    $(".content").html(str);
})