
chrome.storage.local.get(["date", "name", "phone", "card", "email", "auto"], (result)=>{
    const { date, name, phone, card, email, auto } = result;
    //同意
    if(document.getElementById("CheckboxGroup1_0")){
        document.getElementById("CheckboxGroup1_0").click();
    }
    //如何得知
    if(document.getElementById("how2know1")){
        document.getElementById("how2know1").click();
    }
    //姓名
    if(document.getElementById("user_name")){
        document.getElementById("user_name").value = name;
    }
    //電話
    if(document.getElementById("user_phone")){
        document.getElementById("user_phone").value = phone;
    }
    //信用卡號
    if(document.getElementById("card1")){
        document.getElementById("card1").value = card;
    }
    //Email
    if(document.getElementById("user_email")){
        document.getElementById("user_email").value = email;
    }
    //輸入驗證碼
    if (document.getElementById("checkCode")){
        let captcha = document.getElementById("checkCode").innerHTML;
        if (document.getElementById("captcha_form")){
            document.getElementById("captcha_form").value = captcha;
        }
    }
    try{
        // const day = new Date(date).getDay();
        /* day => 0:星期一 1:星期二 2:星期三 3:星期四 4:星期五 */
        document.getElementsByName('ord_date')[date].checked = true
    } catch(e) {
        var error = "選擇日期出現了問題"
        console.log(error)
        document.getElementsByName('ord_date')[0].checked = true
    } finally {
        //確認是否開啟auto模式
        if (auto){
            //處理 1. 星巴克登陸頁面  2. 星巴克(隱私權條款)
            if (document.querySelectorAll('a[onclick="return isChkbox();"]').length > 0){
                document.querySelectorAll('a[onclick="return isChkbox();"]')[0].click(); //送出按鈕
            }
            if (document.querySelectorAll('button[onclick="shouldConfirm =false;return chk_value();"]').length > 0){
                document.querySelectorAll('button[onclick="shouldConfirm =false;return chk_value();"]')[0].click(); //送出按鈕
            }
            //下午茶(隱私條款)
            if (document.querySelector("#form1 > div.visible-xs > a:nth-child(2)")){
                document.querySelector("#form1 > div.visible-xs > a:nth-child(2)").click()//button最後一個按鈕:送出
            }

            // if (document.querySelectorAll("input[type=checkbox]").length > 0){
            //     document.querySelectorAll("input[type=checkbox]")[document.querySelectorAll("input[type=checkbox]").length-1].click()
            // }
            
            //下午茶
            if (document.querySelectorAll("button[type=submit]").length > 0){
                document.querySelector("#form1 > div > div:nth-child(4) > div > div.visible-xs > button > img").click();
            }
        }
    }
    //插入script
    var actualCode = 'chk_cardinfo();';
    var script = document.createElement('script');
    script.textContent = actualCode;
    (document.head||document.documentElement).appendChild(script);
    script.remove();

})
