//Расчет суммы простых чисел
sum = 0;
n = prompt("Введите число для расчета суммы простых чисел");
nextNumber:
for (i = 2; i <= n; i++){
    for (j = 2; j < i; j++){
        if (i % j == 0) continue nextNumber;
    }
    sum+= i;
}
alert(sum);