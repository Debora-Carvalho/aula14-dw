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
    }
)