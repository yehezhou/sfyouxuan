$(function () {
    console.log(1);
    var search = location.search;
    if (search) {
        search = search.replace(/^\?/, "");
        var arr = search.split("&")
        for (let index in arr) {
            if (arr[index].split("=")[0] == "pid") {
                var id = arr[index].split("=")[1];//商品id
                $.get(
                    "http://jx.xuzhixiang.top/ap/api/detail.php?id=" + id, function (data) {
                        console.log(data);
                        data = data.data;
                        console.log($(".info :nth-of-type(2)").text());
                        $(".info :nth-of-type(2)").text(data.pname);
                        $(".info :nth-of-type(1) span").text(data.pprice);
                        $(".sliderList :first").text(data.pimg);
                        $(".tuwenxiangqing :first-child span").text(data.pdesc);
                        $("#addCart").click(function(){
                            if(localStorage.getItem("loginStatus") == 1){
                                $.get(
                                    "http://jx.xuzhixiang.top/ap/api/add-product.php",{
                                        uid:localStorage.getItem("UID"),
                                        pid:id,
                                        pnum:1
                                    }
                                )
                            }else{
                                location.href = "login.html";
                            }
                        })
                    }
                )
            } else {
                location.href = "404.html";
            }
        }
    } else {
        location.href = "404.html";
    }



})