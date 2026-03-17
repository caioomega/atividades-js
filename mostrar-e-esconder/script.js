let input = document.getElementById("senha");
let botao = document.getElementById("botaosenha");

botao.addEventListener("click", function() {
    if(input.type === "password") {
        input.type = "text";
        botao.classList.remove("bi-eye-slash-fill");
        botao.classList.add("bi-eye-fill");
    } else {
        input.type = "password";
        botao.classList.remove("bi-eye-fill");
        botao.classList.add("bi-eye-slash-fill");
    }
});