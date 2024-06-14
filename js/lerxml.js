// document.addEventListener('DOMContentLoaded', () => {
//     let url = "./bd.xml";
//     const btn = document.getElementById('meth');
//     const listadosDiv = document.getElementById('listados');
//     const listadosContainer = document.getElementById('list-container')
    
//     function ler_xml() {
     

//         $.ajax({
//             type: "GET",
//             url: url,
//             dataType: "xml",
//             success: function (xml) {
//                 $(xml).find("produto").each(function () {
                   
//                     alert('roloai')
//                     let nome = $(this).find("nome").text();
//                     let quantidade = $(this).find("quantidade").text();
//                     let cor = $(this).find("cor").text();
//                     let espessura = $(this).find("espessura").text();
//                     let marca = $(this).find("marca").text();
//                     let codigoDeBarras = $(this).find("codigoDeBarras").text();
                

                  
//                 });
//             },
//             error: function () {
//                 alert("Erro ao carregar o XML.");
//             }
//         });
//     }

//     // btn.addEventListener('click', ler_xml);
// });
