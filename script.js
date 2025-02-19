
function injectScript(file_path, tag) {
    var node = document.getElementsByTagName(tag)[0];
    var script = document.createElement('script');
    script.setAttribute('type', 'text/javascript');
    script.setAttribute('src', file_path);
    node.appendChild(script);
}
injectScript(chrome.runtime.getURL('content.js'), 'body');

//如何得知 全打勾
function check_all_checkbox(){
    // Select all checkboxes in the document
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const checkboxesArray = Array.from(checkboxes);

    checkboxesArray.forEach((checkbox, index) => {
        checkbox.checked = true;
    });
}

//選填日期
function check_date(date){
    // Select all checkboxes in the document
    const radio_btns = document.querySelectorAll('input[type="radio"]');
    const radio_btnsArray = Array.from(radio_btns);
    try{
        radio_btnsArray[date].checked = true;
    }catch(e){
        radio_btnsArray[0].checked = true;
    }
}

function check_if_robot_check_done(){
    while(true){
        if (window.check_card_result){
            break;
        }
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
    var input_text_list = document.querySelectorAll('input[type="text"]');
    for (let i = 0; i < input_text_list.length; i++){
        console.log(i == 0)
        switch (Number(i)){
            case 0:
                input_text_list[i].value = name;
                console.log(input_text_list[i].value)
                break;
            case 1:
                input_text_list[i].value = phone;
                break;
            case 2:
                input_text_list[i].value = card;
                input_text_list[i].click();
                break;
            case 3:
                input_text_list[i].value = email;
                break;
            default:
                break;
        }
        
    }
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
            setTimeout(() => {
                document.querySelector('#form1 > div > div:nth-child(4) > div.FORM-confirm.btn-a > button').click();
            }, 4200);
        }
    }

})
