// DESAFIO CLASSIFICADOR DE NÍVEL DE HERÓI

let personagem = "ALAMUFI"
let xp = 1001
if (xp < 1000){
    console.log(personagem + " ==== VOCÊ PERTENCE AO RANKING DE FERRO");
}else if (xp >= 1001 && xp <  2000){

    console.log(personagem + " ==== VOCÊ PERTENCE AO RANKING DE BRONZE");
}else if (xp >= 2001 && xp < 5000){ 

    console.log(personagem + " ==== VOCÊ PERTENCE AO RANKING DE PRATA");
}else if (xp >= 5001 && xp <  7000){ 

    console.log(personagem + " ==== VOCÊ PERTENCE AO RANKING DE OURO");
}else if (xp >= 7001 && xp <  8000){ 

    console.log(personagem + " ==== VOCÊ PERTENCE AO RANKING DE PLATINA");
} else if (xp >= 8001 && xp <  9000){ 

    console.log(personagem + " ==== VOCÊ PERTENCE AO RANKING DE ASCENDENTE");
}else if (xp >= 9001 && xp <  10000){ 

    console.log(personagem + " ==== VOCÊ PERTENCE AO RANKING DE IMORTAL");
}else {

    console.log(personagem + " ==== VOCÊ PERTENCE AO RANKING DE RADIANTE");

}