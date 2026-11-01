const rand = Math.random() * 1;
let businessName = "";
if (rand < 0.2) {
    businessName = "Aryan Industries";
}
else if (rand < 0.4){
    businessName = "Aryan Tech Solutions";
}
else if( rand < 0.6){
    businessName = "Aryan Enterprises";
}
else if (rand < 0.8) {
    businessName = "Aryan Labs";
}
else{
    businessName = "Aryan Innovations";
}
console.log(businessName);
 