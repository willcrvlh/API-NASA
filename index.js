function inicio() {
    let data = $('#data').val();
    $.ajax({
        url:`https://api.nasa.gov/planetary/apod?api_key=SXNBClotpHaB1PHeYERRZLnPu53JQ9AhyjSfZv36&date=${data}`,
        success: function (dados){
            inserirDados(dados)
        },
        error:function(request){
            alert(request.responseText);
        }
    })
}

function inserirDados(dado) {
    console.log(dado);
    let imagem = $('#imagem');
    let video = $('#video');
    let urlMidia = dado.url;
    let tipoMidia = JSON.stringify(dado.media_type);
    $('#tituloRequisicao').text(dado.title);
    $('#explicacao').text(dado.explanation);
    if (tipoMidia == '"image"') {
        $('#video').hide();
        imagem.attr('src',urlMidia);
        $('#imagem').show();
    }else{
        $('#video').show();
        video.attr('src',urlMidia)
         $('#imagem').hide();
    }
    console.log(dado);
}

document.addEventListener('DOMContentLoaded',function(e){
    inicio()
})