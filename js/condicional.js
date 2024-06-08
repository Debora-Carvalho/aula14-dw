document.getElementById('confirm').addEventListener("click",
    function (){
        let v1, v2
        //recuperando os valores do input
        v1 = document.getElementById('inpt1')
        v2 = document.getElementById('inpt2')

        //exibindo os valores
        console.log(v1,v2)
        
        //verificando os valores com uma condicional
        if (v1 == null || v1 == ""){
            alert("Campo de entrada 1 vazio ")
        }else if (v2 == null || v2 == ""){
            alert ("Campo de entrada 2 vazio ")
        }else {
            alert(v1+" "+v2)
        }

        //verificando conteúdo e tipagem
        if (v1 === "1"){
            alert ("é texto")
        }else if (v1 === 1){
            alert ("é número")
        }

        //verificando conteúdo e tipagem
        if (v1 == "1"){
            alert ("é texto")
        }else if (v1 == 1){
            alert ("é número")
        }       
    }
)


document.getElementById("lista_fruta").addEventListener("change",
    function(){
        let fruta = document.getElementById("lista_fruta").value

        switch(fruta){
            case "Banana":
                alert ("Você escolheu a Banana 1kg - R$ 10,00")
                break;
            case "Laranja":
                alert ("Você escolheu a Laranja 1kg - R$ 7,00")
                break;
            case "Uva":
                alert ("Você escolheu a Laranja 1kg - R$ 20,00")
                break;
            case "Melância":
                alert ("Você escolheu a Melância 1kg - R$ 50,00")
                break;
            default:
                alert("Nenhuma fruta selecionada")
                break;
        }
    }
)