

function accomodation (month, days) {
    let apartment_price = 77;
    let studio_price = 76;
    let total_studio = 0;
    let total_apartment = 0;

    if (typeof month !== 'string'){
        console.log('Please enter a valid string for month')
        return false; 
    }
    if (isNaN(days)) {
        console.log('Please enter a valid number for day(s)')
        return false;
    }
    
    let months = ['May', 'June', 'July', 'August', 'September', 'October']

    if (!months.includes(month)){
        console.log('Please enter a valid month')
        return false;
    }
    
    if (month === 'May' || month === 'October'){
        studio_price = 50;
        apartment_price = 65;

        //total_studio = (days > 7)? (days * studio_price) * 0.05 : days * studio_price

        if (days >7 && days <14) {
            total_studio = (days*studio_price) - ((days * studio_price) * (5/100))
        }else if (days > 14){
            total_studio = (days * studio_price) - ((days * studio_price) * (3/100))
        }
    }
    else if (month === 'June' || month === 'September') {
        studio_price = 75.20;
        apartment_price = 68.70;
    }
    else{

    }
    if (days > 14){
        total_apartment = (days * apartment_price) - ((days* apartment_price) * 10/100)
    }else {
        total_apartment = days * apartment_price
    }
    console.log(`Apartment price: ${total_apartment}NGN`)
    console.log(`Studio price: ${total_studio}NGN`)
}

accomodation('May', 2)