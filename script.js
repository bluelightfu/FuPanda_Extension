// document.getElementById("how2know1").click();
// document.getElementById("user_name").value = "陳少甫";
// document.getElementById("user_phone").value = "0927989721";
// document.getElementById("card1").value = "356964";
// document.getElementById("card4").value = "3109";
// document.getElementById("user_email").value = "abcdmarcus@gmail.com";
// document.getElementById("CheckboxGroup1_0").click();
// let captcha = document.getElementById("checkCode").innerHTML;
// document.getElementById("captcha_form").value = captcha;
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


chrome.storage.local.get(["date", "name", "phone", "card", "email"], (result)=>{
    const { date, name, phone, card, email } = result;
    console.log(date, name, phone, card, email)
    document.getElementById("how2know1").click();
    document.getElementById("user_name").value = name;
    document.getElementById("user_phone").value = phone;
    document.getElementById("card1").value = card;
    document.getElementById("user_email").value = email;
    document.getElementById("CheckboxGroup1_0").click();
    let captcha = document.getElementById("checkCode").innerHTML;
    document.getElementById("captcha_form").value = captcha;
    try{
        /*0:請選擇日期 1:星期一 2:星期二 3:星期三 4:星期四 5:星期五*/
        document.getElementById("ord_date").options[date].selected=true
        }catch(e){
        var error = "選擇日期出現了問題"
        console.error(error)
        document.getElementById("ord_date").options[1].selected=true
    }
})
