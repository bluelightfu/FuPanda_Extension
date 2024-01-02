//SELECT
const user_el = document.getElementById('user')
const date_el = document.getElementById('date')

//INPUT
const name_el = document.getElementById('name')
const phone_el = document.getElementById('phone')
const card_el = document.getElementById('card')
const email_el = document.getElementById('email')

//CHECK BOXES
const check_el = document.getElementById('auto')

//BUTTONS
const save = document.getElementById('save')

save.onclick = function(){
    const user_data = {
        date: date_el.value,
        name: name_el.value,
        phone: phone_el.value,
        card: card_el.value,
        email: email_el.value,
        auto: check_el.checked
    }
    chrome.runtime.sendMessage({ event: 'onSave', user_data })
    alert('儲存成功')
}

const toggleCard = document.querySelector('#toggleCard');
const card = document.querySelector('#card');

toggleCard.addEventListener('click', function (e) {
    // toggle the type attribute
    const type = card.getAttribute('type') === 'text' ? 'password' : 'text';
    card.setAttribute('type', type);
    this.innerHTML = this.innerHTML === '顯示卡號' ? '隱藏卡號' : '顯示卡號'
});

//Get Saved Data
chrome.storage.local.get(["date", "name", "phone", "card", "email", "auto"], (result)=>{
    const { date, name, phone, card, email, auto } = result;
    if(date){
        date_el.value = date
    }
    if(name){
        name_el.value = name
    }
    if(phone){
        phone_el.value = phone
    }
    if(card){
        card_el.value = card
    }
    if(email){
        email_el.value = email
    }
    if(auto){
        check_el.checked = auto
    }
})