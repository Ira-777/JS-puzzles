// Расчет числа линз для циклопов с разной остротой зрения
n = prompt("Введите число циклопов");
diopts = [];
for (i = 1; i <= n; i++) {
number = prompt("Введите диоптрии линз для каждого циклопа");
diopts.push(number);
}
diopts.sort(function(a, b){
    return a - b;
});
console.log(diopts);
pairs = 0;
j = 0;
while (j < n){
    if (diopts[j + 1] - diopts[j] <= 2){
        pairs++;
        j+= 2;
    } else {
        pairs++;
        j++;
    }
};
alert("Число пар линз равно: "+ pairs);