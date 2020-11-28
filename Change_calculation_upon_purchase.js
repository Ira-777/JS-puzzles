// Расчет сдачи при покупке
price = prompt("Введите стоимость покупки без копеек");
purchase = prompt("Введите сумму для оплаты без копеек");
change = purchase - price;
if(change == 0){
alert("Без сдачи")
}
else if (change < 0){
alert("Неверный ввод");
};

sum = change;
nom5000 = 0;
while(sum != 0){
    if(sum < 5000)
        break;
    sum = sum - 5000;
    nom5000++;        
}
nom2000 = 0;
while(sum != 0){
    if(sum < 2000)
        break;
    sum = sum - 2000;
    nom2000++;    
    
}
nom1000 = 0;
while(sum != 0){
    if(sum < 1000)
        break;
    sum = sum - 1000;
    nom1000++;        
}
nom500 = 0;
while(sum != 0){
    if(sum < 500)
        break;
    sum = sum - 500;
    nom500++;      
}
nom200 = 0;
while(sum != 0){
    if(sum < 200)
        break;
    sum = sum - 200;
    nom200++;        
}
nom100 = 0;
while(sum != 0){
    if(sum < 100)
        break;
    sum = sum - 100;
    nom100++;       
}
nom50 = 0;
while(sum != 0){
    if(sum < 50)
        break;
    sum = sum - 50;
    nom50++;        
}
nom10 = 0;
while(sum != 0){
    if(sum < 10)
        break;
    sum = sum - 10;
    nom10++;       
}
nom5 = 0;
while(sum != 0){
    if(sum < 5)
        break;
    sum = sum - 5;
    nom5++;       
}
nom2 = 0;
while(sum != 0){
    if(sum < 2)
        break;
    sum = sum - 2;
    nom2++;        
}
nom1 = 0;
while(sum != 0){
    if(sum < 1)
        break;
    sum = sum - 1;
    nom1++;        
}
nom1 += " шт. по 1 руб. \n";
nom2 += " шт. по 2 руб. \n";
nom5 += " шт. по 5 руб. \n";
nom10 += " шт. по 10 руб. \n";
nom50 += " шт. по 50 руб. \n";
nom100 += " шт. по 100 руб. \n";
nom200 += " шт. по 200 руб. \n";
nom500 += " шт. по 500 руб. \n";
nom1000 += " шт. по 1000 руб. \n";
nom2000 += " шт. по 2000 руб. \n";
nom5000 += " шт. по 5000 руб. \n";
nominals = [nom5000, nom2000, nom1000, nom500, nom200, nom100, nom50, nom10, nom5, nom2, nom1];

newNominals = nominals.map(
    function( el ) {
        if (el.indexOf('0') == 0){
        return el = "";
        } else {
            return el;
        } 
    } 
);

nominalsFinal = "Сдача: ";
newNominals.forEach(
    function ( el ) {    
    nominalsFinal += el;
    }
);
if (change > 0)
alert(nominalsFinal);
