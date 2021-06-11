const theme = [];

theme.lang = [];
theme.lang.productListDetail = "Ver Mais";
theme.lang.productListAdd = "Comprar Agora";
theme.lang.sideCartTitle = "Meu Carrinho";
theme.lang.footerTitle1 = "Institucional";
theme.lang.footerTitle2 = "Categorias";
theme.lang.footerTitle3 = "Pagamento e Segurança";
theme.lang.footerTitle4 = "Newsletter";
theme.lang.searchTitle = "O que você procura...";
theme.lang.filtersTitle = "Filtrar por";

theme.settings = [];
theme.settings.whatsappButton = false;
theme.settings.instagramFeed = false;
theme.settings.productListImageFill = true;

theme.isLogged = $('.bem-vindo > span').text() != "identifique-se" ? true : false;
theme.logo = $('<div></div>').append($('#cabecalho .logo').clone()).html();
theme.storePhone = $('.barra-inicial .canais-contato .icon-phone').parent().text().replace('Telefone: ','').trim();
theme.storeSkype = $('.barra-inicial .canais-contato .fa-skype').parent().text().replace('Skype: ','').trim();
theme.storeWhatsapp = $('.barra-inicial .canais-contato .fa-whatsapp').parent().text().replace('Whatsapp: ','').trim();
theme.storeMail = "";

theme.primaryColor = $('[name="theme-color"]').attr('content');
if(theme.primaryColor){document.documentElement.style.setProperty('--primaryColor', theme.primaryColor);}

try{theme.secondaryColor = getComputedStyle(document.querySelector('.cor-secundaria')).color;}catch(e){console.log(e)}
if(theme.secondaryColor){document.documentElement.style.setProperty('--secondaryColor', theme.secondaryColor);}

try{theme.buttonColor = getComputedStyle(document.querySelector('.botao.principal.botao-comprar')).backgroundColor;}catch(e){console.log(e)}

theme.currentPage = $('body').attr('class').split(' ')[0].trim();
theme.searchForm = $('<div></div>').append($('#cabecalho .busca #form-buscar').clone()).html();
theme.socialIcons = $('<div></div>').append($('.barra-inicial .lista-redes a').clone()).html();

theme.headerMenu = $('<div></div>').append($('.menu.superior').clone()).html();
theme.footerCategories = $('<div></div>').append($('.links-rodape-categorias > ul').clone()).html();
theme.footerPages = $('<div></div>').append($('.links-rodape-paginas > ul').clone()).html();
theme.footerSeals = $('<div></div>').append($('#rodape .selos ul').clone()).html();
theme.footerPayments = $('<div></div>').append($('#rodape .bandeiras-pagamento').clone()).html();
theme.footerGateways = $('<div></div>').append($('#rodape .gateways-rodape').clone()).html();
theme.headerCart = $('<div></div>').append($('#cabecalho .carrinho').clone()).html();
theme.newsletter = $('<div></div>').append($('#barraNewsletter').clone()).html();



theme.icon = [];
theme.icon.sideCartClose = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="arrow-back"><rect width="24" height="24" transform="rotate(90 12 12)" opacity="0"/><path d="M19 11H7.14l3.63-4.36a1 1 0 1 0-1.54-1.28l-5 6a1.19 1.19 0 0 0-.09.15c0 .05 0 .08-.07.13A1 1 0 0 0 4 12a1 1 0 0 0 .07.36c0 .05 0 .08.07.13a1.19 1.19 0 0 0 .09.15l5 6A1 1 0 0 0 10 19a1 1 0 0 0 .64-.23 1 1 0 0 0 .13-1.41L7.14 13H19a1 1 0 0 0 0-2z"/></g></g></svg>';
theme.icon.cart = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="shopping-cart"><rect width="24" height="24" opacity="0"/><path d="M21.08 7a2 2 0 0 0-1.7-1H6.58L6 3.74A1 1 0 0 0 5 3H3a1 1 0 0 0 0 2h1.24L7 15.26A1 1 0 0 0 8 16h9a1 1 0 0 0 .89-.55l3.28-6.56A2 2 0 0 0 21.08 7zm-4.7 7H8.76L7.13 8h12.25z"/><circle cx="7.5" cy="19.5" r="1.5"/><circle cx="17.5" cy="19.5" r="1.5"/></g></g></svg>';
theme.icon.wishlist = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="heart"><rect width="24" height="24" opacity="0"/><path d="M12 21a1 1 0 0 1-.71-.29l-7.77-7.78a5.26 5.26 0 0 1 0-7.4 5.24 5.24 0 0 1 7.4 0L12 6.61l1.08-1.08a5.24 5.24 0 0 1 7.4 0 5.26 5.26 0 0 1 0 7.4l-7.77 7.78A1 1 0 0 1 12 21zM7.22 6a3.2 3.2 0 0 0-2.28.94 3.24 3.24 0 0 0 0 4.57L12 18.58l7.06-7.07a3.24 3.24 0 0 0 0-4.57 3.32 3.32 0 0 0-4.56 0l-1.79 1.8a1 1 0 0 1-1.42 0L9.5 6.94A3.2 3.2 0 0 0 7.22 6z"/></g></g></svg>';
theme.icon.search = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="search"><rect width="24" height="24" opacity="0"/><path d="M20.71 19.29l-3.4-3.39A7.92 7.92 0 0 0 19 11a8 8 0 1 0-8 8 7.92 7.92 0 0 0 4.9-1.69l3.39 3.4a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 11a6 6 0 1 1 6 6 6 6 0 0 1-6-6z"/></g></g></svg>';
theme.icon.account = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="person"><rect width="24" height="24" opacity="0"/><path d="M12 11a4 4 0 1 0-4-4 4 4 0 0 0 4 4zm0-6a2 2 0 1 1-2 2 2 2 0 0 1 2-2z"/><path d="M12 13a7 7 0 0 0-7 7 1 1 0 0 0 2 0 5 5 0 0 1 10 0 1 1 0 0 0 2 0 7 7 0 0 0-7-7z"/></g></g></svg>';
theme.icon.newsletter = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="email"><rect width="24" height="24" opacity="0"/><path d="M19 4H5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm-.67 2L12 10.75 5.67 6zM19 18H5a1 1 0 0 1-1-1V7.25l7.4 5.55a1 1 0 0 0 .6.2 1 1 0 0 0 .6-.2L20 7.25V17a1 1 0 0 1-1 1z"/></g></g></svg>';
theme.icon.filter = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="funnel"><rect width="24" height="24" opacity="0"/><path d="M13.9 22a1 1 0 0 1-.6-.2l-4-3.05a1 1 0 0 1-.39-.8v-3.27l-4.8-9.22A1 1 0 0 1 5 4h14a1 1 0 0 1 .86.49 1 1 0 0 1 0 1l-5 9.21V21a1 1 0 0 1-.55.9 1 1 0 0 1-.41.1zm-3-4.54l2 1.53v-4.55A1 1 0 0 1 13 14l4.3-8H6.64l4.13 8a1 1 0 0 1 .11.46z"/></g></g></svg>';
theme.icon.seeMore = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="eye"><rect width="24" height="24" opacity="0"/><path d="M21.87 11.5c-.64-1.11-4.16-6.68-10.14-6.5-5.53.14-8.73 5-9.6 6.5a1 1 0 0 0 0 1c.63 1.09 4 6.5 9.89 6.5h.25c5.53-.14 8.74-5 9.6-6.5a1 1 0 0 0 0-1zM12.22 17c-4.31.1-7.12-3.59-8-5 1-1.61 3.61-4.9 7.61-5 4.29-.11 7.11 3.59 8 5-1.03 1.61-3.61 4.9-7.61 5z"/><path d="M12 8.5a3.5 3.5 0 1 0 3.5 3.5A3.5 3.5 0 0 0 12 8.5zm0 5a1.5 1.5 0 1 1 1.5-1.5 1.5 1.5 0 0 1-1.5 1.5z"/></g></g></svg>';
theme.icon.close = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="close"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M13.41 12l4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29-4.3 4.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l4.29-4.3 4.29 4.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z"/></g></g></svg>';


theme.templates = [];
theme.templates.header = [];
theme.templates.header[1] = '<div id="theme_header_1"><div class="conteiner-fluid"><div class="row-flex align-items-center"><div class="col" id="theme_header-logo"></div><div class="col-auto justify-content-center" id="theme_header-menu"></div><div class="col"><ul id="theme_header-functions"></ul></div></div></div><div id="theme_header-search"></div></div>';
theme.templates.header[2] = '<div id="theme_header_1"><div class="conteiner-fluid"><div class="row-flex align-items-center"><div class="col" id="theme_header-logo"></div><div class="col-auto justify-content-center" id="theme_header-menu"></div><div class="col"><ul id="theme_header-functions"></ul></div></div></div></div>';
theme.templates.search = [];
theme.templates.search[1] = '<div class="theme_aside theme_search right"><div class="theme_aside-header"><button type="button" class="search-trigger" >'+ theme.icon.sideCartClose +'</button><span>'+ theme.lang.searchTitle +'</span></div><div class="theme_aside-content" id="theme_search"></div></div>';
theme.templates.filter = [];
theme.templates.filter[1] = '<div class="theme_aside theme_filter right"><div class="theme_aside-header"><button type="button" class="filter-trigger" >'+ theme.icon.sideCartClose +'</button><span>'+ theme.lang.filtersTitle +'</span></div><div class="theme_aside-content" id="theme_filter"></div></div>';
theme.templates.footer = [];
theme.templates.footer[1] = '<div class="row-flex justify-content-between"><div class="col-auto"><h4>'+ theme.lang.footerTitle1 +'</h4><div id="theme_footer-content1"></div></div><div class="col-auto"><h4>'+ theme.lang.footerTitle2 +'</h4><div id="theme_footer-content2"></div></div><div class="col-auto"><h4>'+ theme.lang.footerTitle3 +'</h4><div id="theme_footer-content3"></div></div><div class="col-auto"><h4>'+ theme.lang.footerTitle4 +'</h4><div id="theme_footer-content4"></div></div></div>';


theme.build = [];
theme.build.header = function(template){
    $('#cabecalho').html(theme.templates.header[template]);
    $('#theme_header-logo').html(theme.logo);
    $('#theme_header-menu').html(theme.headerMenu);
    $('#theme_header-functions').append('<li>' + theme.headerCart + '</li>');

    $('#theme_header-functions').prepend('<li><a href="/conta/index">'+ theme.icon.account +'</a>');
    $('#theme_header-functions').prepend('<li><a href="/conta/favorito/listar">'+ theme.icon.wishlist +'</a>');
    $('#theme_header-functions').prepend('<li><button type="button" class="search-trigger">'+ theme.icon.search +'</button>');
    
    $('.carrinho .icon-shopping-cart').before(theme.icon.cart);
    $('.carrinho .icon-shopping-cart').remove();
    $('.barra-inicial').remove();
}
theme.build.footer = function(template){
    $('#barraNewsletter, .pagamento-selos').remove();
    $('#rodape .institucional').html(theme.templates.footer[template]);
    $('#theme_footer-content1').append(theme.footerPages);
    $('#theme_footer-content2').append(theme.footerCategories);
    $('#theme_footer-content3').append(theme.footerPayments);
    $('#theme_footer-content3').append(theme.footerGateways);
    $('#theme_footer-content3').append(theme.footerSeals);
    $('#theme_footer-content4').append(theme.newsletter);
    
}

theme.build.productFilter = function(template){
    if($('.filtro-coluna').length > 0){
        $('body').append(theme.templates.filter[template]);
        $('.filter-trigger').click(function(){   
            $('body').toggleClass('asideFilter-visible');         
        });
        //$('#theme_filter').append(theme.searchForm);

        if($('.atributo-cor').length > 0 ){
            $('.atributo-cor span').each(function(){
                let css = $(this).attr('style').replace('border-color','background-color');
                $(this).attr('style', css);
            })
        }
        $('.filtro-coluna').each(function(){
            let filterName = $(this).find('h4.titulo').text().replace('Filtrar por','').replace('Limpar','').trim();
            $('#theme_filter').append('<h4>' + filterName + '</h4>');
            $('#theme_filter').append($(this).find('h4.titulo').next());
        })
    }
};

theme.build.search = function(template){
    $('body').append(theme.templates.search[template]);
    $('#theme_search').append(theme.searchForm);

    $('.search-trigger').click(function(){   
        $('body').toggleClass('asideSearch-visible');         
        $('#theme_search input').val('');
        //$('#theme_search input').autocomplete('destroy');
    });

    $("#theme_search input").autocomplete({
        delay: 300,
        minLength: 5,
        source: function(o, n) {
            $.ajax({
                url: "//api.awsli.com.br/v2/autocomplete/" + LOJA_ID,
                dataType: "json",
                data: {
                    q: o.term,
                    size: 3,
                    ttl: 300
                },
                success: function(p) {
                    n($.map(p.hits, function(q) {
                        if (q.imagens) {
                            return {
                                label: '<span class="img"><img src="' + MEDIA_URL + "80x80/" + q.imagens[0].caminho + '?type=trim" /></span><span>' + q.nome + '</span>',
                                value: q.nome,
                                url: q.url
                            }
                        } else {
                            return {
                                label: '<span class="img"></span><span>' + q.nome + '</span>',
                                value: q.nome,
                                url: q.url
                            }
                        }
                    }))
                }
            })
        },
        open: function(n, o) {
            $(this).autocomplete("widget").css("z-index", 100000);
            $(this).autocomplete("widget").width($(this).parent().width())
        },
        select: function(n, o) {
            window.location = o.item.url
        }
    });
    $("#theme_search input").each(function() {
        $(this).data("ui-autocomplete")._renderItem = function(n, o) {
            return $("<li></li>").data("item.autocomplete", o).append("<a>" + o.label + "</a>").appendTo(n)
        }
    });
}

theme.functions = [];
theme.functions.init = function(){
    try{theme.functions[theme.currentPage]();}catch(e){console.log(e)}

    $('body').append('<div class="theme_aside-shadow"></div>');
    theme.build.header(2);
    theme.build.footer(1);
    theme.build.search(1);    

    theme.functions.sideCartSet();
    theme.functions.sideCartActions();

    theme.functions.resizeBanners();
    
    theme.functions.unwrapProductList();
    theme.functions.flags();    
    theme.functions.productListActions();    
    theme.functions.productListImageSize(1.4);
    
    theme.watch();
    
    const el = document.querySelector("#cabecalho")
    const observerMenu = new IntersectionObserver( 
    ([e]) => e.target.classList.toggle("is-pinned", e.intersectionRatio < 1),
    { threshold: [1] }
    );    
    observerMenu.observe(el);    
};
theme.functions.unwrapProductList = function(){
    $('.listagem > ul > li > ul > li').attr('class','');
    $('.listagem-item').unwrap().unwrap().unwrap().wrap('<li/>');
};
theme.functions.resizeBanners = function(){
    $('.secao-banners img').each(function(){
        let url = $(this).attr('src').replace('400x400/','').replace('1140x1140/','');
        $(this).attr('src',url);

    })
};



// theme.functions.search = function(){
//     $('.search-trigger').click(function(){
//         $(this).toggleClass('open');
//         if($(this).hasClass('open')){
//             $(this).html(theme.icon.close);
//         }else{
//             $(this).html(theme.icon.search);
//         }        
//         $('#theme_header-search').slideToggle();
//     })
// }

theme.watch = function(){
    $(document).ajaxComplete(function(event, xhr, settings) {
        if(settings.url === "/carrinho/mini"){
            $('.modal-comprar-ajax-status').parent().hide();
            $('.fancybox-lock').removeClass('fancybox-lock');
            theme.functions.sideCart(xhr.responseText);
        }
    });
    $(window).resize(function(){
        theme.functions.sideCartScroll();
        theme.functions.productListImageSize(1.4);
    });
    $('#rodape > div:last-child a').attr('href','https://app.lojaintegrada.com.br/public/assinar?utm_source=partners&utm_campaign=399');
    $('#rodape > div:last-child a').before('<a href="https://www.alpix.dev" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" id="Camada_1" style="width: 26px; height: 20px;" viewBox="0 0 245.73 149.51" data-name="Camada 1"><defs><style>.cls-1{fill:#211915;}.cls-2{fill:url(#Gradiente_sem_nome_12);}</style><linearGradient id="Gradiente_sem_nome_12" gradientUnits="userSpaceOnUse" x1="240.57" y1="139.95" x2="198.5" y2="97.88"><stop stop-color="#9400d3" offset="0"></stop><stop stop-color="#40e0d0" offset="1"></stop></linearGradient></defs><title>Code By - www.alpix.dev</title><path class="cls-1" d="M 69.53 149.51 a 65.74 65.74 0 0 1 -35 -9.69 A 70.48 70.48 0 0 1 9.34 113.16 Q 0 96.2 0 74.48 q 0 -21 8.86 -37.86 A 69 69 0 0 1 33.39 9.9 Q 49.07 0 69.53 0 a 77.81 77.81 0 0 1 23.3 3.5 a 62.24 62.24 0 0 1 19.58 10 V 4.4 h 57.16 V 145.11 H 112.41 v -11 a 76.89 76.89 0 0 1 -20.68 11.54 A 64.76 64.76 0 0 1 69.53 149.51 Z m 17.59 -48.37 A 27 27 0 0 0 100.8 97.7 a 24.54 24.54 0 0 0 9.34 -9.41 a 27.11 27.11 0 0 0 3.37 -13.53 a 26.6 26.6 0 0 0 -3.44 -13.61 a 25.36 25.36 0 0 0 -9.34 -9.34 a 26.62 26.62 0 0 0 -13.61 -3.44 a 27 27 0 0 0 -13.6 3.44 A 25.37 25.37 0 0 0 64 61.22 a 26.25 26.25 0 0 0 -3.51 13.54 A 26.64 26.64 0 0 0 63.9 88.29 a 24.84 24.84 0 0 0 9.48 9.41 A 27.32 27.32 0 0 0 87.12 101.14 Z"></path><rect class="cls-2" x="188.56" y="87.95" width="57.17" height="57.17"></rect></svg></a>')
    
}

theme.functions.productListImageSize = function(param){
    if(theme.settings.productListImageFill){
        $('.listagem-item').addClass('theme-imageFill');
    }
    
    let h = $('.listagem-item').first().find('.imagem-produto').innerWidth() * param;
    $('.listagem-item .imagem-produto').css('height',h + 'px');


    $('.listagem-item .imagem-produto').each(function(){
        $(this).find('img').each(function(){
            let url = $(this).attr('src').replace('300x300/','');
            $(this).attr('src',url);
        })
    })
}

theme.functions.flags = function(){
    $('.bandeira-promocao').each(function(){
        let i = $(this).text().replace('Desconto','').trim();
        $(this).text(i);
    });
}

theme.functions.productListActions = function(){
    $('.listagem-item .acoes-produto, .listagem-item .acoes-produto-responsiva').remove();
    $('.listagem-item').each(function(){
        let id = $(this).attr('class').replace('listagem-item prod-id-','').trim();
        let url = $(this).find('.info-produto > a:first-child').attr('href');        
        let block = $('<div id="theme_list-functions"></div>');
        block.append($('<a href="/carrinho/produto/'+ id +'/adicionar" class="botao-comprar-ajax-custom" data-loading-text="<i class=\'icon-refresh icon-animate\'></i> Aguarde...">'+ theme.icon.cart +'<span>'+ theme.lang.productListAdd +'</span></a>'));
        block.append($('<a href="'+ url +'">'+ theme.icon.seeMore +'<span>'+ theme.lang.productListDetail +'</span></a>'));
        $(this).find('.imagem-produto').prepend(block);        
    });

    $(document).on("click", ".botao-comprar-ajax-custom", function(o) {
        o.preventDefault();
        var n = $(this);
        $(".botao-comprar-ajax-custom").button("loading");
        $.ajax({
            url: $(this).attr("href").replace("https:", ""),
            dataType: "json"
        }).done(function(p) {
            //$.fancybox.showLoading();
            //$.fancybox.helpers.overlay.open();
            if (p.status !== "sucesso") {
                $("#comprar-ajax-status .erro .msg").text(p.mensagem);
                $("#comprar-ajax-status .sucesso").hide();
                $("#comprar-ajax-status .erro").show();
                //$.fancybox.helpers.overlay.close();
                //$.fancybox({
                    //type: "inline",
                    //href: "#comprar-ajax-status"
                //})
            } else {
                $("#comprar-ajax-status .sucesso").show();
                $("#comprar-ajax-status .erro").hide();
                $("#carrinho-mini").load("/carrinho/mini", function() {
                    //$.fancybox.helpers.overlay.close();
                    //$.fancybox({
                        //type: "inline",
                        //href: "#comprar-ajax-status",
                        //maxWidth: 800
                    //});
                    //atualizarCarrinhoMini()
                })
            }
        }).fail(function(p) {
            window.location = n.attr("href")
        }).always(function() {
            $(".botao-comprar-ajax-custom").button("reset")
        })
    });
}
theme.functions.sideCartScroll = function(){
    if($("#theme_sideCart-content .scroll").length){
        let h = $('#theme_sideCart-header').innerHeight() + $('#theme_sideCart-content .table-footer').innerHeight() + $('#theme_sideCart-footer').innerHeight();
        $('#theme_sideCart-content .scroll').css('height','calc(100vh - ' + h + 'px');
    }
}
theme.functions.sideCartActions = function(html){
    $(document).on("click", "#theme_sideCart .table-body .excluir a, #theme_sideCart .table-body .quantidade a:not(.atualizar-quantidade), #theme_sideCart .cupom-sucesso a", function(p) {
        p.preventDefault();
        //$.fancybox.showLoading();
        var n = $(this);
        var o = $(this).attr("href");
        $.ajax({
            url: $(this).attr("href").replace("https:", ""),
            dataType: "json"
        }).done(function(q) {
            $("#carrinho-mini").load("/carrinho/mini", function() {
                //$.fancybox.hideLoading();
                //atualizarCarrinhoMini()
            })
        }).fail(function(q) {
            window.location = o
        }).always(function() {})
    });

    $('body').on('click','#theme_sideCart [for="usarCupom"]',function(){
        $(this).next('.controls').toggle();
        theme.functions.sideCartScroll();
    });
}
theme.functions.sideCartSet = function(){
    $('body').append('<div id="theme_sideCart-shadow"></div><div id="theme_sideCart"><div id="theme_sideCart-header"><button type="button" onclick="theme.functions.sideCartToggle()">'+ theme.icon.sideCartClose +'</button><span>'+ theme.lang.sideCartTitle +'</span></div><div id="theme_sideCart-content"></div><div id="theme_sideCart-footer"><a href="/carrinho/index" class="botao">Finalizar Compra</div></div></div>');    
}
theme.functions.sideCart = function(html){
    $('#theme_sideCart-content').html(html);
    $('body').addClass('sideCart-visible');  
    theme.functions.sideCartScroll();  
}

theme.functions.sideCartToggle = function(){
    if($('#theme_sideCart-content:empty').length){
        $("#carrinho-mini").load("/carrinho/mini", function() {});
    }
    $('body').toggleClass('sideCart-visible');
}

theme.functions['pagina-inicial'] = function(){
    if($('.secao-principal > .coluna').length){
        $('.secao-principal > .conteudo').toggleClass('span9 span12');
        $('.secao-principal > .coluna').remove();
    }
};

theme.functions['pagina-categoria'] = function(){
    theme.build.productFilter(1);
    if($('.secao-principal > .coluna').length){
        $('.secao-principal > .conteudo').toggleClass('span9 span12');
        $('.secao-principal > .coluna').remove();
    }
};



theme.functions.init();

