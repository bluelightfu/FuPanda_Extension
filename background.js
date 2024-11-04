/* [Received Data]

const data = {
    event: 'onSave',
    user_data : {
        date: date_el.value,
        name: name_el.value,
        phone: phone_el.value,
        card: card_el.value,
        email: email_el.value,
        auto: auto_el.checked
    }
}

*/

//message listener
chrome.runtime.onMessage.addListener(data => {
    const { event , user_data } = data
    switch(event){
        case 'onStop':
            break;
        case 'onSave':
            handleOnSave(user_data)
            break;
        default:
            break;
    }
})

const handleOnSave = (user_data) => {
    console.log('OnSave');
    console.log(user_data)
    chrome.storage.local.set(user_data)
}