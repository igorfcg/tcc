document.addEventListener('DOMContentLoaded', () => {
    const newProduct = document.getElementById('list-container');

    function createDiv(parentId, newDivId, newDivContent = '') {
        var parentElement = document.getElementById(parentId);
        if (parentElement) {
            var newDiv = document.createElement('div');
            newDiv.id = newDivId;
            newDiv.innerHTML = newDivContent;
            parentElement.appendChild(newDiv);
        } else {
            console.error('Elemento pai não encontrado com o ID:', parentId);
        }
    }

    window.onload = function() {
        createDiv('container', 'newDiv', 'Este é o conteúdo da nova div');
    };

document.getElementById('add-product-button').addEventListener('click', function() {
    const productContainer = document.getElementById('product-container');

    // Cria uma nova div para o produto
    const newProduct = document.createElement('div');
    newProduct.classList.add('product');

    // Adiciona conteúdo à nova div de produto
    newProduct.innerHTML = `
        <h3>Produto Novo</h3>
        <p>Descrição do produto</p>
    `;

    // Adiciona a nova div de produto ao container
    productContainer.appendChild(newProduct);
});

});