document.addEventListener('DOMContentLoaded', () => {

        alert("Copiando conteúdo");
        
        
        // const newDiv = document.createElement('div');

        // newDiv.innerHTML = listadosDiv.innerHTML;

        // newDiv.className = listadosDiv.className;

        // listadosContainer.appendChild(newDiv);
        const listadosContainer = document.getElementById('list-container')
         let url = '../dados/bd.xml'
        $.ajax({
            url: url, 
            method: 'GET',
            dataType: 'xml'
        })
            .done(function (xml) {
            $(xml).find("produto").each(function () {
                let nome = $(this).find("nome").text();
                let quantidade = $(this).find("quantidade").text();
                let cor = $(this).find("cor").text();
                let espessura = $(this).find("espessura").text();
                let marca = $(this).find("marca").text();
                let codigoDeBarras = $(this).find("codigoDeBarras").text();
                $(listadosContainer).append(`
                    <div class="tupac">
                        <p class="is">${nome}</p>
                        <p class="saymyname">Quantidade: ${quantidade}</p>
                        <p class="saymyname">Cor: ${cor}</p>
                        <p class="saymyname">Espessura: ${espessura}</p>
                        <p class="saymyname">Marca: ${marca}</p>
                        <p class="saymyname">Código de Barras: ${codigoDeBarras}</p>
                    </div>
                `);

               
            });
        })
        .fail(function () {
            alert("Erro ao carregar o XML.");
        });
    
    

    })
