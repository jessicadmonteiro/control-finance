function criarModal () {

    divModal          = document.createElement("div")
    divContainerModal = document.createElement("div")
    divTituloBotao    = document.createElement("div")
    h3TituloModal     = document.createElement("h3")
    botaoRemover      = document.createElement("button")
    tagP              = document.createElement("p")
    formRegistroValor = document.createElement("form")
    h4Valor           = document.createElement("h4")
    inputReceberValor = document.createElement("input")
    divBotoesOpcoes   = document.createElement("div")
    h4TipoValor       = document.createElement("h4")
    inputLabelEntrada = document.createElement("input")
    labelEntrada      = document.createElement("label")
    inputLabelSaida   = document.createElement("input")
    labelSaida        = document.createElement("label")
    divBotoesCancelarInserir = document.createElement("div")
    botaoCancelar     = document.createElement("button")
    botaoInserirValor = document.createElement("button")

    divModal.classList.add("fundo_modal")
    divContainerModal.classList.add("container_modal", "aparecerModal")
    divTituloBotao.classList.add("container_tituloModal_bt", "width_containe_modal")
    h3TituloModal.classList.add("titulo_modal")
    botaoRemover.classList.add("bt_remover_modal")
    tagP.classList.add("p_modal", "width_containe_modal")
    h4Valor.classList.add("h4_modal", "container_valor_modal")
    inputReceberValor.classList.add("width_containe_modal", "input_modal", "container_valor_modal")
    divBotoesOpcoes .classList.add("container_input_saida_entrada_modal", "width_containe_modal")
    h4TipoValor.classList.add("h4_modal")
    inputLabelEntrada.classList.add("input_label")
    labelEntrada.classList.add("label_modal")
    inputLabelSaida.classList.add("input_label")
    labelSaida.classList.add("label_modal" )
    divBotoesCancelarInserir.classList.add("width_containe_modal", "container_bt_cancelar_inserir_modal")
    botaoCancelar.classList.add("bt")
    botaoInserirValor.classList.add("bt_inserir")

    botaoRemover.innerText  = "X"
    botaoRemover.addEventListener("click", () =>{
        divModal.remove()
    })
    
    inputLabelEntrada.id    = "entrada" 
    inputLabelSaida.id      = "saida" 
    h3TituloModal.innerText = "Registro de valor"
    tagP.innerText          = "Digite o valor e em seguida aperte no botão referente ao tipo do valor"
    h4Valor.innerText       = "Valor"
    inputReceberValor.name  = "value"
    inputReceberValor.type  = "Number" 
    inputReceberValor.placeholder ="R$ 00,00"
    h4TipoValor.innerText   = "Tipo de valor"
    inputLabelEntrada.id    = "entrada"
    inputLabelEntrada.name  = "category" 
    inputLabelEntrada.type  = "radio"
    inputLabelEntrada.value = "entrada"
    inputLabelEntrada.checked = true
    labelEntrada.htmlFor    = "entrada"
    labelEntrada.innerText  = "Entrada"
    inputLabelSaida.id      = "saida"
    inputLabelSaida.name    = "category" 
    inputLabelSaida.type    = "radio"
    inputLabelSaida.value   = "saida"
    labelSaida.htmlFor      = "saida"
    labelSaida.innerText    = "Saída"
    botaoCancelar.innerText = "Cancelar"
    botaoCancelar.addEventListener("click", () =>{
        divModal.remove()
    })
    
    botaoInserirValor.innerText = "Inserir valor"
    botaoInserirValor.type  = "submit"

    let valorRecebido = {}

    formRegistroValor.addEventListener("submit", (event)=> {
        event.preventDefault()
        const formSubmit = [...event.target]
        formSubmit.forEach(element => {
            if(element.value && element.type !== "radio"){
                valorRecebido[element.name] = element.value
            }else if(element.checked){
                valorRecebido[element.name] = element.value
            }
        });
        
        insertedValues.push(valorRecebido)
        
    function adicionarNaLista (lista, referenciaHtml){
    referenciaHtml.innerText = ""

    lista.forEach(element => {
        let valorFinanceiro = element
        if(valorFinanceiro.category == "entrada" ||valorFinanceiro.category == "saida"){
            let valorCriado = criarListaFinanceiro(valorFinanceiro)
            referenciaHtml.appendChild(valorCriado)
        }
    })

}
    adicionarNaLista (insertedValues, listaFinanceira)

        divModal.remove()
    })
   
    divModal.append(divContainerModal)
    divContainerModal.append(divTituloBotao, tagP, formRegistroValor)
    divTituloBotao.append(h3TituloModal, botaoRemover)
    formRegistroValor.append(h4Valor, inputReceberValor, divBotoesOpcoes,divBotoesCancelarInserir)
    divBotoesOpcoes.append(h4TipoValor, inputLabelEntrada, labelEntrada, inputLabelSaida, labelSaida)
    divBotoesCancelarInserir.append(botaoCancelar, botaoInserirValor)

    return divModal
}

const abrirModal = document.querySelector("#abrir_modal")

abrirModal.addEventListener("click", () =>{
    const body = document.querySelector("body")

    const modal = criarModal ()

    body.append(modal)
})
