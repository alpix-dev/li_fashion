$('.menu.superior a, .menu.lateral a').each(function(){
    let url = $(this).attr('href');
    $(this).attr('href', url + '?sort=%2Bnome');
})
if($('.ordenar-listagem .pagination').length > 0){
    var pages = [];
    $('.ordenar-listagem .pagination > ul > li:not(.disabled):not(.active) a').each(function(){
        if(!isNaN(parseInt($(this).text()))){
            pages.push(parseInt($(this).text()));
            
        }
    });

    var uniquePages = pages.filter(function(itm, i, a) {
        return i == pages.indexOf(itm);
    });

    $.each(uniquePages, function(k,v){
        console.log(v);
        $.get(window.location.href + '&pagina=' + v, function( data ) {
            $(data).find('.listagem li.span3').appendTo('#listagemProdutos > ul');
        });
    });

    $('.pagination').hide();
}