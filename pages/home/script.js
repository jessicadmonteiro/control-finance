const listaFinanceira = document.querySelector(".container_lista_financeiro") 

function criarListaFinanceiro (elemento){    
    let  id       = elemento.id
    let valor     = elemento.value
    let categoria = elemento.category

    let tagLi  = document.createElement("li")
    let tagH3  = document.createElement("h3")
    let tagDiv = document.createElement("div")
    let tagBotaoOpcoes  = document.createElement("button")
    let tagBotaoLixeira = document.createElement("button")

    tagLi.classList.add("container")
    tagDiv.classList.add("container_bts")
    tagBotaoOpcoes.classList.add("bt")
    tagBotaoLixeira.classList.add("bt_lixeira")

    tagH3.innerText     = `R$ ${valor}`
    tagBotaoOpcoes.innerText  = categoria
    if(categoria == "entrada"){
        tagBotaoOpcoes.innerText = "Entrada"
    }else{
        tagBotaoOpcoes.innerText = "Saída"
    }
    
    tagBotaoOpcoes.id   = id
    tagBotaoLixeira.id  = "removerValor"

    tagLi.appendChild(tagH3)
    tagLi.appendChild(tagDiv)
    tagDiv.append(tagBotaoOpcoes, tagBotaoLixeira)

    let arr = []
    const valorInserido = insertedValues.filter((elemento)=>{
        
        let valorInserido = elemento.value
        arr.push(valorInserido)
        
        const valorRecebido = arr.reduce((valorAnterior, valorAtual) =>{
            return  Number(valorAnterior) + Number(valorAtual )
        })

        document.querySelector("#valorTotal").innerHTML = `R$ ${valorRecebido}`


    })
    

    return tagLi
}


listaFinanceira.addEventListener("click", remover)
function remover (event){

    let elemento = event.target
    if(elemento.id === "removerValor"){
        let li = elemento.closest("li")
        li.remove()
    }

}


