function criptografar()
{
    // Obtendo o texto digitado pelo usuário
    let textoEntrada = document.querySelector(".texto_original").value;

    // Chaves da criptografia
    let textoSaida = textoEntrada
        .replace(/a/g, "ai")
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    // Exibindo o texto cripografado na div de saída
    document.querySelector(".texto_cript").innerHTML = `<p>${textoSaida}</p>`;
    document.querySelector(".texto_original").value = "";


    // Escondendo as infos iniciais da div de saída
    document.getElementById("hideArea1").style.display = "none"; 
    document.getElementById("hideArea2").style.display = "none";
}


function descriptografar()
{
    // Obtendo o texto digitado da div .texto_cript
    let textoSaida = document.querySelector(".texto_original").value;

    let textoEntrada = textoSaida
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    // Exibindo o texto original na div texto_original
    document.querySelector(".texto_cript").innerHTML = `<p>${textoEntrada}</p>`;
}