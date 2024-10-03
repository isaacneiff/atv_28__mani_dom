const dadosPessoa = {
    "nome": "Isaac neiffola",
    "email": "neiffola@email.com",
    "telefone": "46987654321",
    "cpf": "00123456789",
    "endereco": "Rua da realeza chucuco",
    "numero": 0,
    "complemento": "mojo dojo casa house",
    "cep": 123456789,
    "bairro": "Planaltera",
    "cidade": "Pato Branco",
    "estado": "Paraná",
    "sexo": "Masculino",
    "estadoCivil": "bem casado",
    "profissao": "garoto de programa",
    "dataNascimento": "11/09/2001",
    "urls": [
        {
            "titulo": "linkedin",
            "url": "https://linkedin.com/cezarmezzalira",
        },
        {
            "titulo": "Github",
            "url": "https://github.com/isaacneiff",
        }

    ]
}


const divTitle = document.getElementById("title")

const h1Nome = document.createElement("h1")
h1Nome.textContent = dadosPessoa.nome

divTitle.appendChild(h1Nome)

const spanCargo = document.createElement("span")

spanCargo.textContent = dadosPessoa.profissao
divTitle.appendChild(spanCargo)


const divContact = document.getElementById("contact")

const listaContato = document.createElement("ul")


const itemEmail = document.createElement("li")
itemEmail.textContent = `${dadosPessoa.email}`
listaContato.appendChild(itemEmail)


const itemTelefone = document.createElement("li")
itemTelefone.textContent = `${dadosPessoa.telefone}`
listaContato.appendChild(itemTelefone)

const itemCidade = document.createElement("li")
itemCidade.textContent = `${dadosPessoa.cidade},  ${dadosPessoa.bairro}, ${dadosPessoa.estado} `
listaContato.appendChild(itemCidade)

const itemEndereco = document.createElement("li")
itemEndereco.textContent = `${dadosPessoa.endereco}, ${dadosPessoa.numero}`
listaContato.appendChild(itemEndereco)

for (let enderecoWeb of dadosPessoa.urls) {

    const itemLinks = document.createElement("li")
    const ancora = document.createElement("a")
    ancora.textContent = enderecoWeb.titulo
    ancora.setAttribute("href", enderecoWeb.url)
    itemLinks.appendChild(ancora)

    listaContato.appendChild(itemLinks)

}





//items da lista

divContact.appendChild(listaContato)


//lista não ordenada
//item de lista para o endereço completo
//item da lista para o email
//item da lista para o telefone
//item da lista com os links