let itens = [];
let info = document.querySelector('[list-item]');
let exibir = document.querySelector('[exibir-itens]');
let btn = document.querySelector('[btn-inserir]');
let removeitem = document.querySelector('[btn-remover]');
let apagarlista = document.querySelector('[btn-apagar]');
let btnimprimir = document.querySelector('[btn-imprimir]');
let titulo = "<p><kbd>LISTA ATUAL</kbd></p>";

const inserir = () =>{

              let lista = "<ol>";

              if(info.value == ""){
                exibir.innerHTML = "coloque um item";
              }else{
              itens.push(info.value);
              

              for(let i = 0; i<itens.length; i++){

              lista +="<li class='alert alert-light'>" + itens[i] + '</li>';

              exibir.innerHTML = titulo + lista;
              info.value = "";
          }; 
        };

          lista += "</ol>";
};


const removerItem =() =>{
        itens.pop();
        let lista = "<ol>";

        for(let i = 0; i<itens.length; i++){

              lista +='<li class="alert alert-info">' + itens[i] + '</li>';
              info.value = "";
          };
          exibir.innerHTML = titulo + lista;
};


const apagarLista = () =>{
        itens.splice(0,itens.length);
        exibir.innerHTML =  itens;
};

const imprimirLista = () =>{
        print();
}
     

btn.addEventListener('click',inserir);

removeitem.addEventListener('click',removerItem);

apagarlista.addEventListener('click',apagarLista);

btnimprimir.addEventListener('click',imprimirLista);
