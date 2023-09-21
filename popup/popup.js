//SELECT
const user_el = document.getElementById('user')
const date_el = document.getElementById('date')

//INPUT
const name_el = document.getElementById('name')
const phone_el = document.getElementById('phone')
const card_el = document.getElementById('card')
const email_el = document.getElementById('email')

//BUTTONS
const save = document.getElementById('save')

save.onclick = function(){
    const user_data = {
        date: date_el.value,
        name: name_el.value,
        phone: phone_el.value,
        card: card_el.value,
        email: email_el.value
    }
    chrome.runtime.sendMessage({ event: 'onSave', user_data })
}

chrome.storage.local.get(["date", "name", "phone", "card", "email"], (result)=>{
    const { date, name, phone, card, email } = result;
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
})