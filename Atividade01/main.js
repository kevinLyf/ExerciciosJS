const dataAtual = Date;
const dataNascimento = 2006;
const idade = dataAtual - dataNascimento; // 18

if(idade < 16) {
    console.log(`Você tem ${idade} anos e não pode votar nem dirigir!`);

} else if(idade >= 16 && idade <= 17) {
    console.log(`Você tem ${idade} anos, pode votar,mas não pode tirar carteira de habilitação!`);
    
} else {
    console.log(`Você tem ${idade} anos, pode votar e tirar carteira de habilitação!`);
}