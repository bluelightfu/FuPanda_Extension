var user_list = []
var select = document.querySelector('#user_list_id');
chrome.storage.sync.get(['user_list'], function(result) {
    console.log('init')
    console.log(`[init] user_list : `)
    console.log(result.user_list)
    if(result.user_list.length !== 0){
        user_list = result.user_list
        let option = document.createElement('option');
        console.log(option)
        for (user of result.user_list) {
            option.value = user;
            option.text = user.name;
            console.log(option)
            select.appendChild(option);
            console.log(`append ${option.text}`)
            console.log(select)
        }
    }
    console.log(select)
});

document.getElementById('save').addEventListener('click',function(e){
    var name = document.querySelector('#name').value
    var phoneNum = document.querySelector('#phoneNum').value
    var card = document.querySelector('#card').value
    var email = document.querySelector('#email').value

    var user = {
        'name':name,
        'phoneNum':phoneNum,
        'card':card,
        'email':email
    }

    user_list.push(user)
    console.log(`user_list add :`)
    console.log(user,'to', user_list)
    //save
    chrome.storage.sync.set({ 'user_list': user_list }, function() {
        console.log('儲存成功');
        console.log(user_list);
    });
    //get
    chrome.storage.sync.get(['user_list'], function(result) {
        console.log(result.user_list)
        let option = document.createElement('option');
        for (let i = 0; i < result.user_list.length; i++) {
            console.log(result.user_list.length)
            option.value = result.user_list[i];
            option.text = result.user_list[i].name;
            select.appendChild(option);
            console.log(select)
        }
    });
})