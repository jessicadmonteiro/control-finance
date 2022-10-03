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
    
    let arr = []
    
    
    const valorInserido = insertedValues.filter((elemento)=>{
        
        let valorInserido = elemento.value
        arr.push(valorInserido)
        
        const valorRecebido = arr.reduce((valorAnterior, valorAtual) =>{
            return  Number(valorAnterior) + Number(valorAtual )
        })

        document.querySelector("#valorTotal").innerHTML = `R$ ${valorRecebido}`

    })

    // removendo li
    tagBotaoLixeira.addEventListener("click", (event) =>{
        let elemento = event.target.id
        let idElemento = elemento.id
        let id = parseInt(idElemento)
        let elementoEncontrado = insertedValues.find((element)=>{
            return element.id === id
        })

        let index = insertedValues.indexOf(elementoEncontrado)
        insertedValues.splice(index, 1)

        let tagLi = event.path[2]
        tagLi.remove()
        
    })


    tagLi.appendChild(tagH3)
    tagLi.appendChild(tagDiv)
    tagDiv.append(tagBotaoOpcoes, tagBotaoLixeira)
    
    return tagLi
}


const selecionarTodos = document.querySelector("#todos")
selecionarTodos.addEventListener("click", () =>{

    adicionarNaLista(insertedValues, listaFinanceira )

})


const selecionarEntradas = document.querySelector("#entradas")
selecionarEntradas.addEventListener("click", () =>{

    const novoArray = insertedValues.filter((element) => element.category.includes("entrada"))
    
    let arryEntrada = []
    const valorEntrada = novoArray.filter((elemento) =>{
        let valorElemento = elemento.value
        arryEntrada.push(valorElemento)
    })
    let somaEntrada = arryEntrada.reduce((valorAnterior, valorAtual) => {
        return Number(valorAnterior) + Number( valorAtual)
    })
    
    adicionarNaLista(novoArray, listaFinanceira )

    document.querySelector("#valorTotal").innerHTML = `R$ ${somaEntrada}`
})


const selecionarSaidas = document.querySelector("#saidas")
selecionarSaidas.addEventListener("click", () =>{
    
    const novoArray = insertedValues.filter((element) => element.category.includes("saida"))

    let arraySaida = []
    const valorSaida = novoArray.filter((elemento) =>{
        let valorElemento = elemento.value
        arraySaida.push(valorElemento)
    })
    let somaSaida = arraySaida.reduce((valorAnterior, valorAtual) => {
        return Number(valorAnterior) + Number( valorAtual)
    })

    adicionarNaLista(novoArray, listaFinanceira )

    document.querySelector("#valorTotal").innerHTML = `R$ ${somaSaida}`
})

