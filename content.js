// window.check_card_result = true;
// console.log(window.check_card_result)
//拿掉blockUI 晚餐
document.querySelectorAll('.blockUI.blockOverlay').forEach( el =>{
    el.style.display = 'none';
    el.style.cursor = 'pointer';
})
try {
    document.querySelector('.blockUI.blockMsg.blockPage').style.display = 'none';
} catch (error) {
    
}
    
