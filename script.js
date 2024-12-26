
function injectScript(file_path, tag) {
    var node = document.getElementsByTagName(tag)[0];
    var script = document.createElement('script');
    script.setAttribute('type', 'text/javascript');
    script.setAttribute('src', file_path);
    node.appendChild(script);
}
injectScript(chrome.runtime.getURL('content.js'), 'body');

function check_all_checkbox(){
    // Select all checkboxes in the document
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const checkboxesArray = Array.from(checkboxes);

    checkboxesArray.forEach((checkbox, index) => {
        checkbox.checked = true;
    });
}

function check_date(date){
    // Select all checkboxes in the document
    const radio_btns = document.querySelectorAll('input[type="radio"]');
    const radio_btnsArray = Array.from(radio_btns);
    console.log(radio_btnsArray)
    try{
        radio_btnsArray[date].checked = true;
    }catch(e){
        radio_btnsArray[0].checked = true;
    }
}

chrome.storage.local.get(["date", "name", "phone", "card", "email", "auto"], (result)=>{
    const { date, name, phone, card, email, auto } = result;
    //同意
    if(document.getElementById("CheckboxGroup1_0")){
        document.getElementById("CheckboxGroup1_0").click();
    }
    //如何得知
    check_all_checkbox();
    //姓名
    var user_name=document.getElementById('a8af1464f0262a436b5a069615e37b9a7');
    user_name.value = name;
    //電話
    var user_phone=document.getElementById('a4ff9e4294fd4c73ed26384c671eb479a')
    user_phone.value = phone;
    //信用卡號
    var card1 = document.getElementById('a1ed44b754af23e66966c3cb59f5fb3d3')
    card1.value = card;
    //Email
    var user_email = document.getElementById('ac0ad1c6d23d27c02f9ccf825d95a653c');
    user_email.value = email;
    //輸入驗證碼
    // if (document.getElementById("checkCode")){
    //     let captcha = document.getElementById("checkCode").innerHTML;
    //     if (document.getElementById("captcha_form")){
    //         document.getElementById("captcha_form").value = captcha;
    //     }
    // }
    try{
        // const day = new Date(date).getDay();
        /* day => 0:星期一 1:星期二 2:星期三 3:星期四 4:星期五 */
        check_date(date)
    } catch(e) {
        var error = "選擇日期出現了問題"
        console.log(error)
    } finally {
        //確認是否開啟auto模式
        if (auto){
            //處理 1. 星巴克登陸頁面  2. 星巴克(隱私權條款)
            // if (document.querySelectorAll('a[onclick="return isChkbox();"]').length > 0){
            //     document.querySelectorAll('a[onclick="return isChkbox();"]')[0].click(); //送出按鈕
            // }
            // if (document.querySelectorAll('button[onclick="shouldConfirm =false;return chk_value();"]').length > 0){
            //     document.querySelectorAll('button[onclick="shouldConfirm =false;return chk_value();"]')[0].click(); //送出按鈕
            // }
            // //下午茶(隱私條款)
            // if (document.querySelector("#form1 > div.visible-xs > a:nth-child(2)")){
            //     document.querySelector("#form1 > div.visible-xs > a:nth-child(2)").click()//button最後一個按鈕:送出
            // }

            // if (document.querySelectorAll("input[type=checkbox]").length > 0){
            //     document.querySelectorAll("input[type=checkbox]")[document.querySelectorAll("input[type=checkbox]").length-1].click()
            // }
            
            //下午茶
            // Select the element using its attributes
            const button = document.querySelector('input[onclick="chk_value();"]');

            // Check if the button exists
            if (button) {
                // Trigger a click event
                setTimeout(button.click(), 800)
                console.log("Button clicked!");
            } else {
                console.error("Button not found!");
            }
            
            // if (document.querySelectorAll("button[type=submit]").length > 0){
            //     let order = function(){
            //         document.querySelector("#form1 > div > div:nth-child(4) > div > div.visible-xs > button > img").click();
            //     }
            //     setTimeout(order, 800)
            // }
        }
    }

})
