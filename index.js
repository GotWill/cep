let busca = document.querySelector('.busca');

busca.addEventListener('submit', async (event) =>{
    event.preventDefault();

    let input = document.querySelector('#searchInput').value;

    if(input !== ''){
        clear()
        aviso('Carregando.....')

        const url = `http://viacep.com.br/ws/${encodeURI( input)}/json/`;

        let result = await fetch(url);
        let json = await result.json()

        showCep(json)

    }else{
        clear()
        aviso('nada encontrado...')
    }
})



function showCep(json){
    aviso('')
    document.querySelector('.bairro').innerHTML = json.bairro;
    document.querySelector('.endereco').innerHTML = json.logradouro;
    document.querySelector('.localidade').innerHTML = json.localidade;
    document.querySelector('.complemento').innerHTML = json.complemento;
    document.querySelector('.uf').innerHTML = json.uf;
    document.querySelector('.ddd').innerHTML = json.ddd;
    document.querySelector('.resultado').style.display = 'block';
}



function aviso(msg){
    document.querySelector('.aviso').innerHTML = msg;
}

function clear(){
    aviso('')
    document.querySelector('.resultado').style.display = 'none';

}