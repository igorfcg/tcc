document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('meth');
    const listadosDiv = document.getElementById('listados');
    const listadosContainer = document.getElementById('list-container')

    function ler_xml() {
        let url = "bd.xml"
        $.ajax(url)
            .done(function(xml) {
                $(xml).find("produtos").each(function() {
                    $("#list-container").append('<div class= "produtos">    <p class = "kak"> $ { $(this).find("").text() } </p></div>');

                })
            })
            .fail(function() {
                alert("erro ao xml");
            })
    }

    listadosContainer.addEventListener('DOMContentLoaded', ler_xml);

    function mamas() {
        alert("Copiando conteúdo");

        const newDiv = document.createElement('div');

        newDiv.innerHTML = listadosDiv.innerHTML;

        newDiv.className = listadosDiv.className;

        listadosContainer.appendChild(newDiv);
    }
    btn.addEventListener('click', mamas);
});