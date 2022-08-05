//This is for getting todays day in words.

exports.getDate = function (){

const today = new Date(); // to get today's date
const options = {
 weekday:"long",
 day:"numeric",
 month:"long"
};

return today.toLocaleDateString("en-US",options); // to get the day instead of no 
}

exports.getDay = function (){
    const today = new Date(); // to get today's date

    const options = {
     weekday:"long",
    };
    return today.toLocaleDateString("en-US",options); // to get the day instead of no 
  
}