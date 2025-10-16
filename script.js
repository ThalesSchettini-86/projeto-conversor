// Declaração de variáveis para cada elemento usado
const temp = document.getElementById("temp");
const CF = document.getElementById("CF");
const CK = document.getElementById("CK");
const FC = document.getElementById("FC");
const FK = document.getElementById("FK");
const KC = document.getElementById("KC");
const KF = document.getElementById("KF");
const KFC = document.getElementById("KFC");
const res = document.getElementById("res");
const res2 = document.getElementById("res2");
const res3 = document.getElementById("res3");

document.getElementById("calcula").onclick = function(){
    const thermo = Number(temp.value);
    const resultado = document.getElementById("resultado");
    switch(true){ //Switch case com cada conversão possível
        case CF.checked:
            res.textContent = (thermo * (9 / 5)) + 32 + "°F";
            res2.textContent = "";
            res3.textContent = "";
            resultado.classList.add("show"); //Linha para expandir o container
            break;
        case CK.checked:
            res.textContent = thermo + 273.15 + "°K";
            res2.textContent = "";
            res3.textContent = "";
            resultado.classList.add("show");
            break;
        case FC.checked:
            res.textContent = (thermo - 32) * (5 / 9) + "°C";
            res2.textContent = "";
            res3.textContent = "";
            resultado.classList.add("show");
            break;
        case FK.checked:
            res.textContent = (thermo - 32) * (5 / 9) + 273.15 + "°K";
            res2.textContent = "";
            res3.textContent = "";
            resultado.classList.add("show");
            break;
        case KC.checked:
            res.textContent = thermo - 273.15 + "°C";
            res2.textContent = "";
            res3.textContent = "";
            resultado.classList.add("show");
            break;
        case KF.checked:
            res.textContent = (thermo - 273.15) * (9 / 5) + 32 + "°F";
            res2.textContent = "";
            res3.textContent = "";
            resultado.classList.add("show");
            break;
        case KFC.checked:
            res.textContent = thermo + "°C";
            res2.textContent = (thermo * (9 / 5)) + 32 + "°F";
            res3.textContent = thermo + 273.15 + "°K";
            resultado.classList.add("show");
            break;
        default:
            res.textContent = "Selecione um método de conversão!";
            resultado.classList.add("show");
    }
}

temp.oninput = function(){
    //Diminui o tamanho do container quando o usuário altera o texto na caixa
    resultado.classList.remove("show");
}