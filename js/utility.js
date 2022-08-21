// subtotal
function getTextElementValueById(elementId){
    const phoneTotalElement = document.getElementById('phone-total');
    const currentPhoneTotal = parseInt(phoneTotalElement.innerText);
    return currentPhoneTotal;
    }
    //calculate sub total
    function calculateSubTotal(){
        
        const currentPhoneTotal = getTextElementValueById('phone-total');
        const currentCaseTotal = getTextElementValueById('case-total');
        const currentSubTotal = currentPhoneTotal+currentCaseTotal;
        const subTotalElement =document.getElementById('sub-total');
        subTotalElement.innerText=currentSubTotal;
    }