let glideJS = document.createElement('script');
glideJS.src = "https://cdnjs.cloudflare.com/ajax/libs/Glide.js/3.2.0/glide.min.js";
document.body.append(glideJS);

let glideCSS = document.createElement('link');
glideCSS.href = "https://cdnjs.cloudflare.com/ajax/libs/Glide.js/3.2.0/css/glide.core.css";
glideCSS.rel  = 'stylesheet';
glideCSS.type = 'text/css';
glideCSS.media = 'all';
document.body.append(glideCSS);

    
var theme = [];

theme.info = {};
theme.info.icon = "<img src='https://www.alpix.dev/wp-content/uploads/2021/04/cropped-fav-32x32.png'/>";
theme.info.name = "Tema Fashion";
theme.info.external = "https://www.alpix.dev";

theme.lang = {};
theme.lang.productListDetail = "Ver Mais";
theme.lang.productListAdd = "Comprar Agora";
theme.lang.sideCartTitle = "Meu Carrinho";
theme.lang.footerTitle1 = "Institucional";
theme.lang.footerTitle2 = "Categorias";
theme.lang.footerTitle3 = "Pagamento e Segurança";
theme.lang.footerTitle4 = "Newsletter";
theme.lang.searchTitle = "O que você procura...";
theme.lang.accountTitle = "Minha Conta";
theme.lang.filtersTitle = "Filtrar por";
theme.lang.menuTitle = "Menu";
theme.lang.avisoEstoque = "Aproveite! Apenas [qtde] itens em estoque!";
theme.lang.brandTitle = "Compre por Marca";

theme.settings = {};
theme.settings.whatsappButton = false;
theme.settings.instagramFeed = false;
theme.settings.productListImageFill = true;
theme.settings.imageSize = 1.4;
theme.settings.avisoEstoque = 999;

theme.isLogged = $('.bem-vindo > span').text() != "identifique-se" ? true : false;
theme.logo = $('<div></div>').append($('#cabecalho .logo').clone()).html();
theme.storePhone = $('.barra-inicial .canais-contato .icon-phone').parent().text().replace('Telefone: ','').trim();
theme.storeSkype = $('.barra-inicial .canais-contato .fa-skype').parent().text().replace('Skype: ','').trim();
theme.storeWhatsapp = $('.barra-inicial .canais-contato .fa-whatsapp').parent().text().replace('Whatsapp: ','').trim();
theme.storeMail = "";

//theme.primaryColor = $('[name="theme-color"]').attr('content');
//if(theme.primaryColor){document.documentElement.style.setProperty('--primaryColor', theme.primaryColor);}

//try{theme.secondaryColor = getComputedStyle(document.querySelector('.cor-secundaria')).color;}catch(e){console.log(e)}
//if(theme.secondaryColor){document.documentElement.style.setProperty('--secondaryColor', theme.secondaryColor);}

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

theme.icon = {};
theme.icon.sideCartClose = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="arrow-back"><rect width="24" height="24" transform="rotate(90 12 12)" opacity="0"/><path d="M19 11H7.14l3.63-4.36a1 1 0 1 0-1.54-1.28l-5 6a1.19 1.19 0 0 0-.09.15c0 .05 0 .08-.07.13A1 1 0 0 0 4 12a1 1 0 0 0 .07.36c0 .05 0 .08.07.13a1.19 1.19 0 0 0 .09.15l5 6A1 1 0 0 0 10 19a1 1 0 0 0 .64-.23 1 1 0 0 0 .13-1.41L7.14 13H19a1 1 0 0 0 0-2z"/></g></g></svg>';
theme.icon.cart = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 10H21M3 10L5 20H19L21 10M3 10L9 4M21 10L15 4" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';
theme.icon.wishlist = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.3314 12.0474L12 20L19.6686 12.0474C20.5211 11.1633 21 9.96429 21 8.71405C21 6.11055 18.9648 4 16.4543 4C15.2487 4 14.0925 4.49666 13.24 5.38071L12 6.66667L10.76 5.38071C9.90749 4.49666 8.75128 4 7.54569 4C5.03517 4 3 6.11055 3 8.71405C3 9.96429 3.47892 11.1633 4.3314 12.0474Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';
theme.icon.search = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.4697 20.5303C19.7626 20.8232 20.2374 20.8232 20.5303 20.5303C20.8232 20.2374 20.8232 19.7626 20.5303 19.4697L19.4697 20.5303ZM17.25 10.5C17.25 14.2279 14.2279 17.25 10.5 17.25V18.75C15.0563 18.75 18.75 15.0563 18.75 10.5H17.25ZM10.5 17.25C6.77208 17.25 3.75 14.2279 3.75 10.5H2.25C2.25 15.0563 5.94365 18.75 10.5 18.75V17.25ZM3.75 10.5C3.75 6.77208 6.77208 3.75 10.5 3.75V2.25C5.94365 2.25 2.25 5.94365 2.25 10.5H3.75ZM10.5 3.75C14.2279 3.75 17.25 6.77208 17.25 10.5H18.75C18.75 5.94365 15.0563 2.25 10.5 2.25V3.75ZM20.5303 19.4697L16.3428 15.2821L15.2821 16.3428L19.4697 20.5303L20.5303 19.4697Z" fill="black"/></svg>';
theme.icon.account = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 21V19C20 16.7909 18.2091 15 16 15H8C5.79086 15 4 16.7909 4 19V21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';
theme.icon.newsletter = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="email"><rect width="24" height="24" opacity="0"/><path d="M19 4H5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm-.67 2L12 10.75 5.67 6zM19 18H5a1 1 0 0 1-1-1V7.25l7.4 5.55a1 1 0 0 0 .6.2 1 1 0 0 0 .6-.2L20 7.25V17a1 1 0 0 1-1 1z"/></g></g></svg>';
theme.icon.filter = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="funnel"><rect width="24" height="24" opacity="0"/><path d="M13.9 22a1 1 0 0 1-.6-.2l-4-3.05a1 1 0 0 1-.39-.8v-3.27l-4.8-9.22A1 1 0 0 1 5 4h14a1 1 0 0 1 .86.49 1 1 0 0 1 0 1l-5 9.21V21a1 1 0 0 1-.55.9 1 1 0 0 1-.41.1zm-3-4.54l2 1.53v-4.55A1 1 0 0 1 13 14l4.3-8H6.64l4.13 8a1 1 0 0 1 .11.46z"/></g></g></svg>';
theme.icon.seeMore = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="eye"><rect width="24" height="24" opacity="0"/><path d="M21.87 11.5c-.64-1.11-4.16-6.68-10.14-6.5-5.53.14-8.73 5-9.6 6.5a1 1 0 0 0 0 1c.63 1.09 4 6.5 9.89 6.5h.25c5.53-.14 8.74-5 9.6-6.5a1 1 0 0 0 0-1zM12.22 17c-4.31.1-7.12-3.59-8-5 1-1.61 3.61-4.9 7.61-5 4.29-.11 7.11 3.59 8 5-1.03 1.61-3.61 4.9-7.61 5z"/><path d="M12 8.5a3.5 3.5 0 1 0 3.5 3.5A3.5 3.5 0 0 0 12 8.5zm0 5a1.5 1.5 0 1 1 1.5-1.5 1.5 1.5 0 0 1-1.5 1.5z"/></g></g></svg>';
theme.icon.close = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="close"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M13.41 12l4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29-4.3 4.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l4.29-4.3 4.29 4.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z"/></g></g></svg>';


theme.templates = [];
//theme.templates.header = [];
//theme.templates.header[1] = '<div id="theme_header_1"><div class="conteiner-fluid"><div class="row-flex align-items-center"><div class="col" id="theme_header-logo"><button type="button" id="theme_header-menu-trigger"></button></div><div class="col-auto justify-content-center" id="theme_header-menu"></div><div class="col"><ul id="theme_header-functions"></ul></div></div></div><div id="theme_header-search"></div></div>';
theme.templates.header = '<div id="theme_header_1"><div class="conteiner-fluid"><div class="row-flex align-items-center"><div class="col" id="theme_header-logo"><button type="button" id="theme_header-menu-trigger"></button></div><div class="col-auto justify-content-center" id="theme_header-menu"></div><div class="col"><ul id="theme_header-functions"></ul></div></div></div></div>';
theme.templates.search = '<div class="theme_aside theme_search right"><div class="theme_aside-header"><button type="button" class="search-trigger" >'+ theme.icon.sideCartClose +'</button><span>'+ theme.lang.searchTitle +'</span></div><div class="theme_aside-content" id="theme_search"></div></div>';
theme.templates.account = '<div class="theme_aside theme_account right"><div class="theme_aside-header"><button type="button" class="account-trigger" >'+ theme.icon.sideCartClose +'</button><span>'+ theme.lang.accountTitle +'</span></div><div class="theme_aside-content" id="theme_account"></div></div>';
theme.templates.filter = '<div class="theme_aside theme_filter right"><div class="theme_aside-header"><button type="button" class="filter-trigger" >'+ theme.icon.sideCartClose +'</button><span>'+ theme.lang.filtersTitle +'</span></div><div class="theme_aside-content" id="theme_filter"></div></div>';
theme.templates.footer = '<div class="row-flex justify-content-between"><div class="col-auto"><h4>'+ theme.lang.footerTitle1 +'</h4><div id="theme_footer-content1"></div></div><div class="col-auto"><h4>'+ theme.lang.footerTitle2 +'</h4><div id="theme_footer-content2"></div></div><div class="col-auto"><h4>'+ theme.lang.footerTitle3 +'</h4><div id="theme_footer-content3"></div></div><div class="col-auto"><h4>'+ theme.lang.footerTitle4 +'</h4><div id="theme_footer-content4"></div></div></div>';
theme.templates.asideMenu = '<div class="theme_aside theme_menu left"><div class="theme_aside-header"><span>'+ theme.lang.menuTitle +'</span><button type="button" class="theme_menu-trigger" >'+ theme.icon.sideCartClose +'</button></div><div class="theme_aside-content" id="theme_menu-aside"></div></div>';


theme.build = [];
theme.build.header = function(template){
    $('#cabecalho').html(theme.templates.header);
    $('#theme_header-logo').append(theme.logo);
    $('#theme_header-menu').html(theme.headerMenu);
    $('#theme_header-functions').append('<li>' + theme.headerCart + '</li>');

    $('#theme_header-functions').prepend('<li><button type="button" class="account-trigger">'+ theme.icon.account +'</button></li>');
    //$('#theme_header-functions').prepend('<li><a href="/conta/favorito/listar">'+ theme.icon.wishlist +'</a></li>');
    $('#theme_header-functions').prepend('<li><button type="button" class="search-trigger">'+ theme.icon.search +'</button></li>');
    
    $('.carrinho .icon-shopping-cart').before(theme.icon.cart);
    $('.carrinho .icon-shopping-cart').remove();
    $('.barra-inicial').remove();
};
theme.build.footer = function(template){
    $('#barraNewsletter, .pagamento-selos').remove();
    $('#rodape .institucional').html(theme.templates.footer);
    $('#theme_footer-content1').append(theme.footerPages);
    $('#theme_footer-content2').append(theme.footerCategories);
    $('#theme_footer-content3').append(theme.footerPayments);
    $('#theme_footer-content3').append(theme.footerGateways);
    $('#theme_footer-content3').append(theme.footerSeals);
    $('#theme_footer-content4').append(theme.newsletter);
};
theme.build.asideMenu = function(template){
    $('body').append(theme.templates.asideMenu);
    $('#theme_menu-aside').append(theme.headerMenu);
    $('#theme_menu-aside .com-filho > a').each(function(){
        let url = $(this).attr('href');
        let submenu = $(this).closest('.com-filho').find('.nivel-dois');
        $('<li><a href="'+ url +'">Ver Todos</a></li>').appendTo(submenu);
        $('<li class="theme_menu-closeSub"><button type="button">Voltar</button></li>').prependTo(submenu);
    });
    $('#theme_menu-aside .com-filho > a').click(function(e){
        e.preventDefault();
        $(this).closest('.com-filho').addClass('open');
    });
    $('.theme_menu-closeSub').click(function(){
        $(this).closest('.com-filho').removeClass('open');
    });
    $('#theme_header-menu-trigger, .theme_menu-trigger').click(function(){   
        $('body').toggleClass('asideMenu-visible');         
    });
};

theme.build.productFilter = function(template){
    if($('.filtro-coluna').length > 0){
        $('body').append(theme.templates.filter);
        $('body').on('click','.filter-trigger', function(){   
            $('body').toggleClass('asideFilter-visible');         
        });
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
        });        
    }
};

theme.build.search = function(template){
    $('body').append(theme.templates.search);
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
};

theme.build.account = function(template){
    $('body').append(theme.templates.account);
    let menu = $('<ul></ul>');
    if(theme.isLogged){
        menu.append('<li><a href="">Minha conta</a></li>');
        menu.append('<li><a href="">Meus pedidos</a></li>');
        menu.append('<li><a href="">Sair</a></li>');
    }else{
        menu.append('<li><a href="">Login</a></li>');
        menu.append('<li><a href="">Cadastre-se</a></li>');
    }
    menu.append('<li class="divider"></li>');
    menu.append('<li><a href="">Preciso de ajuda</a></li>');
    menu.append('<li><a href="">Fale com a gente</a></li>');
    $('#theme_account').append(menu);
    $('.account-trigger').click(function(){   
        $('body').toggleClass('asideAccount-visible');         
    });

}

theme.functions = [];
theme.functions.createField = function (oObj){
    let field = $('<div class="theme-customInputElement"></div>');    
    field.append('<label>'+oObj.label+'</label>');
    
    if("text,number,password,tel,email,date,color".split(',').includes(oObj.type)){
        field.append('<input type="'+ oObj.type +'" name="theme_field-'+ oObj.id +'"/>');
    }
    if(oObj.type == "textarea"){
        field.append('<textarea rows="4" name="theme_field-'+ oObj.id +'"></textarea>');
    }
    if(oObj.type == "select"){
        let select = $('<select name="theme_field-'+ oObj.id +'"></select>');
        $.each(oObj.list, function(list_, list_value){
            select.append('<option value="'+list_value+'">'+list_value+'</option>');
        });
        field.append(select);
    }
    if(oObj.type == "boolean"){
        let select = $('<select name="theme_field-'+ oObj.id +'"></select>');
        select.append('<option value="true">Sim</option>');
        select.append('<option value="false">Não</option>');
        field.append(select);
    }
    return field;

};
theme.functions.init = function(){
    $('html').attr('alpix-theme','fashion');
    try{
        $(document).ready(function(){
            theme.functions[theme.currentPage]();
        });
    }catch(e){console.log(e)}

    $('body').append('<div class="theme_aside-shadow"></div>');
    
    if($('.carrinho-checkout').length == 0){theme.build.header(2);theme.build.asideMenu();}
    theme.build.footer(1);
    theme.build.search(1);    
    theme.build.account(1);    
    

    theme.functions.sideCartSet();
    theme.functions.sideCartActions();

    theme.functions.resizeBanners();
    
    theme.functions.unwrapProductList();
    theme.functions.flags();    
    theme.functions.productListActions();    
    theme.functions.productListImageSize(theme.settings.imageSize);
    
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

theme.functions.blockPage = function (status){
    if(status){
        $('body').append('<div id="apx_loader"><div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div></div>');
    }else{
        $('#apx_loader').remove();
    }   
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
        theme.functions.productListImageSize(theme.settings.imageSize);
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
        let id = $(this).attr('class').split(' ')[1].replace('prod-id-','').trim();
        let url = $(this).find('.info-produto > a:first-child').attr('href');        
        let block = $('<div id="theme_list-functions"></div>');
        if($(this).find('.preco-a-partir').length == 0){
            block.append($('<a href="/carrinho/produto/'+ id +'/adicionar" class="botao-comprar-ajax-custom" data-loading-text="<i class=\'icon-refresh icon-animate\'></i> Aguarde...">'+ theme.icon.cart +'<span>'+ theme.lang.productListAdd +'</span></a>'));
        }        
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
            if (p.status !== "sucesso") {
                $("#comprar-ajax-status .erro .msg").text(p.mensagem);
                $("#comprar-ajax-status .sucesso").hide();
                $("#comprar-ajax-status .erro").show();
            } else {
                $("#comprar-ajax-status .sucesso").show();
                $("#comprar-ajax-status .erro").hide();
                $("#carrinho-mini").load("/carrinho/mini", function() {})
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
        theme.functions.blockPage(true);
        var n = $(this);
        var o = $(this).attr("href");
        $.ajax({
            url: $(this).attr("href").replace("https:", ""),
            dataType: "json"
        }).done(function(q) {
            $("#carrinho-mini").load("/carrinho/mini", function() {})
        }).fail(function(q) {
            window.location = o
        }).always(function() { theme.functions.blockPage(false); })
    });

    $('#theme_header-functions > li > .carrinho > a').click(function(e){
        e.preventDefault();
        if($('#theme_sideCart #theme_sideCart-content').is(':empty')){
            $("#carrinho-mini").load("/carrinho/mini", function() {})
        }else{
            theme.functions.sideCartToggle();
        }
    })

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
    if($('.marcas').length){
        $('<div class="titulo-categoria cor-principal"><strong>'+ theme.lang.brandTitle +'</strong></div>').prependTo('.marcas');
    }
};

theme.functions['pagina-categoria'] = function(){
    theme.build.productFilter(1);
    if($('.secao-principal > .coluna').length){
        $('.secao-principal > .conteudo').toggleClass('span9 span12');
        $('.secao-principal > .coluna').remove();
    }

    $('<div id="theme_listing"></div>').insertAfter('h1.titulo');
    $('<div id="theme_listing-info"></div>').appendTo('#theme_listing');
    $('<div id="theme_listing-filters"></div>').appendTo('#theme_listing');
    $('#botaoOrdenar + ul').find('a').find('i').remove();
    $('#botaoOrdenar + ul').find('a').appendTo('#theme_listing-filters');
    $('.ordenar-listagem').remove();

    
    $('<button type="button" class="filter-trigger btn-icon">'+ theme.icon.filter +'<span>Filtrar Resultados</span></button>').appendTo('#theme_listing-filters');
    $('#theme_listing-info').html('<span>Página ' + '1 de 99' + ' exibindo ' + $('.listagem-item').length  + ' produtos.</span>' );        

    if($('#theme_filter li.active').length > 0){
        $('.filter-trigger > span').append('<i>'+ $('#theme_filter li.active').length +'</i>');
    }

    if(!theme.isMobile){
        let h = $('#cabecalho').innerHeight() - 1;
        $('#theme_listing').addClass('sticky_this');
        $('#theme_listing').css('top', h + 'px');

    }

    $('#theme_listing-filters a').each(function(){
        if(window.location.href.indexOf($(this).attr('href')) >= 0){
            $(this).css('font-weight','bold');
        }
    })
};

theme.functions['pagina-produto'] = function(){
    $('<div class="conteiner theme-bc"></div>').prependTo('#corpo');
    $('.breadcrumbs').appendTo('.theme-bc');
    $('.breadcrumbs > ul > li:first-child > a').html('Página Inicial');
    $('.breadcrumbs > ul').append('<li><strong class="cor-secundaria">'+ $('.info-principal-produto h1.nome-produto.titulo').text() +'</strong></li>');
    $('.parcelas-produto').remove();

    if($('.secao-principal > .coluna').length){
        $('.secao-principal > .produto').toggleClass('span9 span12');
        $('.secao-principal > .coluna').remove();
    }

    if($('.atributo-cor').length > 0 ){
        $('.atributo-cor a span').each(function(){
            let css = $(this).attr('style').replace('border-color','background-color');
            $(this).attr('style', css);
        });
    }    

    if($('meta[name="description"]').attr('content').length > 0){
        $('<p class="theme_excerpt">'+ $('meta[name="description"]').attr('content') +'</p>').insertAfter('.codigo-produto');
    }
    

    $('.produto-thumbs img').each(function(){
        let crop = $(this).attr('src').split('/')[3];
        let removeCrop = $(this).attr('src').replace(crop,'150x150');
        $(this).attr('src',removeCrop);
    });

    let h = $('.thumbs-vertical .produto-thumbs .miniaturas a').first().innerWidth() * theme.settings.imageSize;
    $('.thumbs-vertical .produto-thumbs .miniaturas a').css('height', h + 'px!important');
    
    $('.comprar .icon-shopping-cart').remove();

    $('.lista-favoritos').appendTo('.codigo-produto').attr('class','lista-favoritos adicionar-favorito')
    $('.lista-favoritos .icon-plus').before(theme.icon.wishlist);
    $('.lista-favoritos .icon-plus').remove();

    if(theme.settings.avisoEstoque != undefined){
        $('.qtde_estoque').each(function(){
            let estoque = parseInt($(this).text());
            if(theme.settings.avisoEstoque >= estoque){
                let aviso = theme.lang.avisoEstoque.replace('[qtde]',estoque);
                $('<p class="theme-avisoEstoque">'+ aviso +'</p>').prependTo($(this).closest('.comprar'))
            }
        })
        theme.settings.avisoEstoque != undefined
    }
};

theme.functions['pagina-carrinho'] = function(){
    $('.tabela-carrinho .excluir').each(function(){
        $(this).insertAfter($(this).closest('tr').find('.quantidade'));
    });
    $('.tabela-carrinho thead tr th:last-child').remove();
    $('.tabela-carrinho tbody tr[data-produto-id] td:last-child').remove();
    $('.tabela-carrinho tbody tr:not([data-produto-id]) td[colspan="4"]').attr('colspan',3);
    
    if($('.carrinho-checkout').length > 0){
        $('.tabela-carrinho').insertBefore('#formas-pagamento-wrapper');
        $('.tabela-carrinho').wrap('<div class="caixa-sombreada theme_order-resume"></div>');
        $('<legend class="titulo cor-secundaria"><i class="icon-archive"></i>Itens do pedido</legend>').insertBefore('.tabela-carrinho');
    }
};

theme.functions['pagina-pagina'] = function(){
    if($('.secao-principal > .coluna').length){
        $('.secao-principal > .produto').toggleClass('span9 span12');
        $('.secao-principal > .coluna').remove();
    }
};

theme.functions.flexDestroy = function(oObj){
    var $els = $(oObj);
    $els.each(function() {
        var $el = $(this);
        var $elClean = $el.clone();
    
        $elClean.find('.flex-viewport').children().unwrap();
        $elClean
        .removeClass('flexslider')
        .find('.clone, .flex-direction-nav, .flex-control-nav')
            .remove()
            .end()
        .find('*').removeAttr('style').removeClass(function (index, css) {
            // If element is SVG css has an Object inside (?)
            if (typeof css === 'string') {
            return (css.match(/\bflex\S+/g) || []).join(' ');
            }
        });
    
        $elClean.insertBefore($el);
        $el.remove();
    });
}



// let script = document.createElement('script');
// script.src = "https://cdn.jsdelivr.net/gh/alpix-dev/li_resources/fixes.js?nocache=2"
// document.head.append(script);
// script.onerror = function() {
//     alert("Error loading " + this.src);
// };

let apx_analytics = document.createElement('script');
apx_analytics.src = "https://www.googletagmanager.com/gtag/js?id=G-V0HB6YB66J"
document.head.append(apx_analytics);
apx_analytics.onload = function() {
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  //ga('create', 'G-V0HB6YB66J');
  //gtag('config', 'G-V0HB6YB66J', {'linker' : { 'domains' : [window.location.hostname] }});
  gtag('config', 'G-V0HB6YB66J', {
    'linker': {
      'domains': [window.location.hostname]
    }
  });
  console.log('Tracking - OK');
};

console.log('Settings and fixes file loaded');

try{
    let url_string = window.location.href;
    let url = new URL(url_string);
    let active_support = url.searchParams.get("support");
    let editor = url.searchParams.get("editor");

    if(editor){
        let script = document.createElement('script');
        //script.src = "https://cdn.jsdelivr.net/gh/alpix-dev/li_resources/editor.js"
        script.src = "http://127.0.0.1:5500/editor.js"
        document.head.append(script);
        script.onload = function() {
            console.log('Theme editor loaded');
        };

        let style = document.createElement('link');
        style.href = "http://127.0.0.1:5500/editor.css";
        style.rel  = 'stylesheet';
        style.type = 'text/css';
        style.media = 'all';
        document.head.append(style);        
    }

    if(active_support){
        let script = document.createElement('script');
        script.src = "http://127.0.0.1:5500/support_script.js"
        document.head.append(script);
        script.onload = function() {
            console.log('Local support script file loaded');
        };
    
        let style = document.createElement('link');
        style.href = "http://127.0.0.1:5500/support_style.css";
        style.rel  = 'stylesheet';
        style.type = 'text/css';
        style.media = 'all';
        document.head.append(style);
        style.onload = function() {
            console.log('Local support style file loaded');
        };
    }
}catch(e){console.log(e)}


theme.worker = {};
theme.worker.run = function(){
    $(window).load(function(){
        $.each(theme.worker, function(k, item){
            if(k != "run"){
                if(theme.worker[k].list.length > 0 && theme.worker[k].match){
                    theme.worker[k].run();
                }            
            }        
        })
    });
};
theme.worker.sizeTable = {};
theme.worker.sizeTable.list = [];
//theme.worker.sizeTable.list.push({identifier: 104378933, src: 'http://127.0.0.1:5500/400x400.png'});
theme.worker.sizeTable.list.push({identifier: 'adidas', src: 'http://127.0.0.1:5500/tabela de medidas.jpg'})
theme.worker.sizeTable.config = {text:"Guia de Medidas", icon:"",backgroundColor: "#000",textColor:"#fff", target:".atributo-comum .cor-secundaria:contains(Tamanho)"};
theme.worker.sizeTable.match = $('.pagina-produto').length > 0;
theme.worker.sizeTable.run = function(el){    
    const sizeTableProduct = parseInt($('.pagina-produto').attr('class').replace('pagina-produto produto-','').trim());
    const sizeTableBrand = $('.pagina-produto [itemprop="brand"] [itemprop="name"]').attr('content').toLowerCase();
    
    var themeSizeTable = theme.worker.sizeTable.list.filter( el => el.identifier == sizeTableProduct);
    if(themeSizeTable.length == 0){
        themeSizeTable = theme.worker.sizeTable.list.filter( el => el.identifier == sizeTableBrand);
    }

    if(themeSizeTable.length > 0){
        $(theme.worker.sizeTable.config.target).append("<a href='"+ themeSizeTable[0].src +"' class='theme_worker-sizeTable' style='"+ (theme.worker.sizeTable.config.textColor != undefined ? "color:" +  theme.worker.sizeTable.config.textColor + ";" : "") + " " + (theme.worker.sizeTable.config.backgroundColor != undefined ? "background-color:" +  theme.worker.sizeTable.config.backgroundColor + ";" : "") + "'>"+ theme.worker.sizeTable.config.icon + "" + theme.worker.sizeTable.config.text +"</a>");
        $(".theme_worker-sizeTable").fancybox();
    }   
    console.log('theme.worker.sizeTable OK');
};


theme.worker.checkoutExtraFields = {};
theme.worker.checkoutExtraFields.list = [];
theme.worker.checkoutExtraFields.list.push({label : 'De:',id:'de',type: 'text',required : true});
theme.worker.checkoutExtraFields.list.push({label : 'Para:',id:'para',type: 'text',required : true});
theme.worker.checkoutExtraFields.list.push({label : 'Data:',id:'data',type: 'date',required : true});
theme.worker.checkoutExtraFields.match = $('.pagina-carrinho.carrinho-checkout').length > 0;
theme.worker.checkoutExtraFields.run = function(el){
    $('#formularioObservacao').hide();
    
    var themeCheckoutExtraFields = $('<div class="theme_worker-checkoutExtraFields"></div>');
    $.each(theme.worker.checkoutExtraFields.list, function(k,item){
        themeCheckoutExtraFields.append(theme.functions.createField(item));
    });
    themeCheckoutExtraFields.insertBefore('#formularioObservacao');
    
    $('.theme_worker-checkoutExtraFields .theme-customInputElement [name^="theme_field"]').change(function(){
        var themeCheckoutFieldValues = "";
        $('.theme_worker-checkoutExtraFields .theme-customInputElement').each(function(){
            themeCheckoutFieldValues = themeCheckoutFieldValues + $(this).find('label').text() + ' ' +  $(this).find('[name^="theme_field"]').val() + '\n';
        })
        $('[name="cliente_obs"]').val(themeCheckoutFieldValues);
    });
    console.log('theme.worker.checkoutExtraFields OK');
}

theme.worker.productTimer = {};
theme.worker.productTimer.list = [];
theme.worker.productTimer.list.push({product_id : 104378934,date_limit : "30/06/2021"});
theme.worker.productTimer.list.push({product_id : 102680176,date_limit : "30/07/2021"});
theme.worker.productTimer.config = {text:"Já vai acabar!", icon:"",backgroundColor: "#000",textColor:"#fff"};
theme.worker.productTimer.match = $('.listagem-item').length > 0;
theme.worker.productTimer.run = function(el){

};

// theme.worker.testimonials = {};
// theme.worker.testimonials.list = [];
// theme.worker.testimonials.list.push({name : "Mariana",rating: 5, description: "Estou usando a calça desde que chegou e estou muito satisfeito com o produto. Está exatamente como nas fotos, se encaixa perfeitamente, é muito confortável e de boa qualidade. Recomendo a compra sem problemas.", img:"http://127.0.0.1:5500/400x400.png"});
// theme.worker.testimonials.list.push({name : "Gabriela",rating: 5, description: "A calça ficou fabulosa, o acabamento é incrível, achei que ficaria mais curto por ser modelo cropped mas não, ficou perfeito. A entrega foi super rápida, comprei na segunda-feira e chegou no sábado. Recomendo a todos!", img:"http://127.0.0.1:5500/400x400.png"});
// theme.worker.testimonials.list.push({name : "Vanessa",rating: 5, description: "O produto é ótimo, estou usando há dois meses e já perdi 5 quilos. A entrega foi rápida e sem problemas. Recomendo!", img:"http://127.0.0.1:5500/400x400.png"});
// theme.worker.testimonials.list.push({name : "Amanda",rating: 5, description: "A calça preta é a minha preferida de todas! Uma peça clássica que nunca sai de moda, cores variadas, fica linda com camisetas xadrez e com t-shirts básicas.", img:"http://127.0.0.1:5500/400x400.png"});
// theme.worker.testimonials.list.push({name : "Fabíola",rating: 4, description: "A calça é linda, o tecido é de muito boa qualidade e a entrega foi rápida. Estou satisfeita com esse produto.", img:"http://127.0.0.1:5500/400x400.png"});
// theme.worker.testimonials.config = {title:"O que dizem por ai", ratingColor: "#f9d141", nameColor: "#000", descriptionColor:"#666", slidesDesktop: 3, slidesMobile: 1, target: "#blank-home-position3"};
// theme.worker.testimonials.match = $('.pagina-inicial').length > 0;
// theme.worker.testimonials.run = function(el){
//     var themeTestimonials = $('<div class="theme_worker-testimonials"></div>');    
//     themeTestimonials.append('<div class="titulo-categoria cor-principal"><strong>'+ theme.worker.testimonials.config.title +'</strong></div>');    
//     var themeTestimonialsList = $('<ul class="glide__slides" slides-md="'+ theme.worker.testimonials.config.slidesDesktop +'" slides-xs="'+ theme.worker.testimonials.config.slidesMobile +'"></ul>');
//     $.each(theme.worker.testimonials.list, function(k,item){
//         let li_ = $('<li></li>');
//         let li = $('<div></div>');
//         var content = $('<div class="content"></div>');
//         if(item.img != ""){li.append('<img src="'+item.img+'"/>');}
//         if(item.name != ""){content.append('<div><strong style="'+ (theme.worker.testimonials.config.nameColor != "" ? "color:" + theme.worker.testimonials.config.nameColor + ";": "") +'" >'+ item.name +'</strong></div>');}
//         if(item.description != ""){content.append('<div><p style="'+ (theme.worker.testimonials.config.descriptionColor != "" ? "color:" + theme.worker.testimonials.config.descriptionColor + ";": "") +'">'+ item.description +'</p></div>');}
//         if(item.rating != ""){
//             for(let i = 1; i<=5; i++ ){
//                 content.append('<i style="'+ (theme.worker.testimonials.config.ratingColor != "" ? "color:" + theme.worker.testimonials.config.ratingColor + ";": "") +'" class="fa fa-star'+ (i<= item.rating ? '' : '-o') +'"></i>');
//             }            
//         }
//         li.append(content);
//         li_.append(li);        
//         themeTestimonialsList.append(li_);
//     });
//     themeTestimonials.append(themeTestimonialsList);
//     themeTestimonials.appendTo(theme.worker.testimonials.config.target);
//     $('.theme_worker-testimonials .glide__slides').wrap('<div class="glide__track" data-glide-el="track"></div>');
//     $('.theme_worker-testimonials .glide__track').wrap('<div class="glide" data-wait-mutation="false" data-autoplay="4000" data-per-view="'+ theme.worker.testimonials.config.slidesDesktop +'" data-per-view-sm="'+ theme.worker.testimonials.config.slidesMobile +'" ></div>');
    
//     new Glide('.theme_worker-testimonials .glide', {            
//         type: 'carousel',
//         gap:20,
//         autoplay: 4000,
//         perView: theme.worker.testimonials.config.slidesDesktop,
//         breakpoints: {
//             800: {
//                 perView: theme.worker.testimonials.config.slidesMobile
//             }
//         }        
//     }).mount();
    
//     console.log('theme.worker.testimonials OK');
// };

// theme.worker.instaFeed = {};
// theme.worker.instaFeed.list = [];
// theme.worker.instaFeed.list.push({tokenFile:"https://ig.instant-tokens.com/users/b2ae8781-bac2-4194-b176-124cbc43e9d6/instagram/17841418540152784/token.js?userSecret=mz89bzc1jmbrdgcy52wwh"});
// theme.worker.instaFeed.config = {title:"Siga nosso Instagram",itemsToLoad: 8,itemsDesktop: 4, itemsMobile: 2, target:"#blank-home-position3"};
// theme.worker.instaFeed.match = $('.pagina-inicial').length > 0;
// theme.worker.instaFeed.run = function(el){
//     let script = document.createElement('script');
//     script.src = theme.worker.instaFeed.list.shift().tokenFile;
//     document.body.append(script);
//     script.onload = function() {
//         var themeInstafeed = $('<div class="theme_worker-instafeed"></div>');
//         themeInstafeed.append('<div class="titulo-categoria cor-principal"><strong>'+ theme.worker.instaFeed.config.title +'</strong></div>');
//         $.getJSON('https://graph.instagram.com/me/media?access_token='+ InstagramToken +'&fields=media_url,media_type,caption,permalink', function(arr){
//             var images = "";
//             for (let i = 0; i < theme.worker.instaFeed.config.itemsToLoad; i++) {
//                 if(arr.data[i].media_type == "IMAGE"){
//                     images = images + "<div><a href='"+ arr.data[i].permalink +"'>" +
//                         "<img src='"+ arr.data[i].media_url +"'/>" + 
//                         //"<span>"+ arr.data[i].caption.substring(0,75) +"...</span>" +
//                     "</a></div>";
//                 }
//             }
//             let css = "#instafeed > div{flex:0 0 "+ 100/theme.worker.instaFeed.config.itemsDesktop +"%;}@media(max-width:768px){#instafeed > div{flex:0 0 "+ 100/theme.worker.instaFeed.config.itemsMobile +"%;}}";
//             let style = document.createElement('style');
//             document.body.appendChild(style);
//             style.type = 'text/css';
//             if (style.styleSheet){
//                 style.styleSheet.cssText = css;
//               } else {
//                 style.appendChild(document.createTextNode(css));
//               }
            
            


//             let feed = $('<div id="instafeed" mobile="'+ theme.worker.instaFeed.config.itemsMobile +'" desktop="'+ theme.worker.instaFeed.config.itemsDesktop +'"></div>');
//             feed.append(images);
//             themeInstafeed.append(feed);
//             themeInstafeed.appendTo(theme.worker.instaFeed.config.target);
//         });        
//     };
//     console.log('theme.worker.instaFeed OK');
// };

theme.functions.init();
theme.worker.run();





