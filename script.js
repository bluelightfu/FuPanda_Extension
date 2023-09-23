function displayResult() {
    var x = document.getElementById("ord_date");
    var txt = "目前可選日期: ";
    var i;
    for (i = 1; i < x.length; i++) {
        dateMsg = dateMsg + "\n" + x.options[i].text;
    }
    console.log(dateMsg)
    var newDateMsg = "目前幫你暫選: "+x.option[1]
    console.error(newDateMsg)
}


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
        /* day => 0:請選擇日期 1:星期一 2:星期二 3:星期三 4:星期四 5:星期五 */
        document.getElementById("ord_date").options[date].selected=true
    } catch(e) {
        var error = "選擇日期出現了問題"
        console.log(error)
        document.getElementById("ord_date").options[1].selected=true
    } finally {
        //確認是否開啟auto模式
        if (auto){
            //星巴克
            if (document.getElementsByClassName('btn btn-primary').length >= 2){
                document.getElementsByClassName('btn btn-primary')[1].click(); //JCB他們網頁送出的函式庫
            }
            //下午茶
            if (document.querySelectorAll("button[type=submit]").length > 0){
                document.querySelectorAll("button[type=submit]")[0].click();
            }
        }
    }


})
