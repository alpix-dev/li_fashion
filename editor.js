$('<div id="editor"></div>').insertBefore('body');
$('<div id="editor-menu"><div id="editor_groups"></div></div>').appendTo('#editor');
$('body').wrap('<div id="editor-content"></div>');
$('#editor-content').appendTo('#editor');

var editor = {
    template_settings:[
        {
            label : "<i class='fa fa-font'></i>Textos Informativos",
            fields : {
                "theme.lang.productListDetail" : {
                    label: "[Listagem] Exibir detalhes do produto ",
                    type : "text",
                    result : "js"
                },
                "theme.lang.productListAdd" : {
                    label: "[Listagem] Exibir detalhes do produto ",
                    type : "text",
                    result : "js"
                },
                "theme.lang.sideCartTitle" : {
                    label: "Título do Carrinho Lateral ",
                    type : "text",
                    result : "js"
                },
                "theme.lang.footerTitle1" : {
                    label: "Título do Rodapé #1",
                    type : "text",
                    result : "js"
                },
                "theme.lang.footerTitle2" : {
                    label: "Título do Rodapé #2",
                    type : "text",
                    result : "js"
                },
                "theme.lang.footerTitle3" : {
                    label: "Título do Rodapé #3",
                    type : "text",
                    result : "js"
                },
                "theme.lang.footerTitle4" : {
                    label: "Título do Rodapé #4",
                    type : "text",
                    result : "js"
                },
                "theme.lang.searchTitle" : {
                    label: "Título da Busca Lateral",
                    type : "text",
                    result : "js"
                },
                "theme.lang.filtersTitle" : {
                    label: "Título do Filtro Lateral",
                    type : "text",
                    result : "js"
                },
                "theme.lang.avisoEstoque" : {
                    label: "Aviso de Estoque",
                    tip : "Ex: Aproveite! Apenas [qtde] itens em estoque!",
                    type : "text",
                    result : "js"
                }      
            }          
        },
        {
            label : "<i class='fa fa-picture-o'></i>Ícones",
            fields : {
                "theme.icon.sideCartClose" : {
                    label: "Fechar aba lateral",
                    type : "text",
                    result : "js"
                },
                "theme.icon.cart" : {
                    label: "Carrinho",
                    type : "text",
                    result : "js"
                },
                "theme.icon.wishlist" : {
                    label: "Lista de Desejos",
                    type : "text",
                    result : "js"
                },
                "theme.icon.search" : {
                    label: "Busca",
                    type : "text",
                    result : "js"
                },
                "theme.icon.account" : {
                    label: "Minha Conta",
                    type : "text",
                    result : "js"
                },
                "theme.icon.newsletter" : {
                    label: "Newsletter",
                    type : "text",
                    result : "js"
                },
                "theme.icon.filter" : {
                    label: "Filtros",
                    type : "text",
                    result : "js"
                },
                "theme.icon.seeMore" : {
                    label: "Veja Mais",
                    type : "text",
                    result : "js"
                },
                "theme.icon.close" : {
                    label: "Fechar",
                    type : "text",
                    result : "js"
                },
                
            }
        },
        {
            label : "<i class='fa fa-paint-brush'></i>Cores",
            fields : {
                
            }
        },
        {
            label : "<i class='fa fa-cog'></i>Configurações",
            fields : {
                "theme.settings.whatsappButton" : {
                    label: "Exibir Botão de Whatsapp",
                    type : "boolean",
                    result : "js"
                },
                "theme.settings.instagramFeed" : {
                    label: "Exibir Feed do Instagram",
                    type : "boolean",
                    result : "js"
                },
                "theme.settings.productListImageFill" : {
                    label: "Imagem na listagem de produtos preenche toda a área?",
                    type : "boolean",
                    result : "js"
                },
                "theme.settings.imageSize" : {
                    label: "Proporção da imagem na listagem de produtos",
                    tip:"Ex: Imagem Quadrada = 1",
                    type : "tel",
                    result : "js"
                },
                "theme.settings.avisoEstoque" : {
                    label: "Quantidade de itens no estoque para exibir aviso",
                    tip: "Coloque 0 (zero) para desativar",
                    type : "tel",
                    result : "js"
                },
                 
            }
        }
    ]
}


$(document).ready(function(){
    $('<div id="editor_info">'+ theme.info.icon +'<div><b>'+ theme.info.name +'</b><a href="'+ theme.info.external+'" target="_blank">Mais informações</a></div><button type="button" id="editor_code"><i class="fa fa-code"></i></button><a href="https://'+ window.location.hostname +'"><i class="fa fa-power-off"></i></a></div>').prependTo('#editor-menu');
    $('<div id="editor_visibility"><button type="button" value="380px"><i class="fa fa-mobile"></i></button><button type="button" value="768px"><i class="fa fa-tablet "></i></button><button type="button" value="1260px"><i class="fa fa-desktop "></i></button><button type="button" value="calc(100% - 30px)"><i class="fa fa-expand "></i></button></div>').appendTo('#editor-menu');
    $.each(editor.template_settings,function(i, item){
        $('#editor_groups').append('<div class="group_header" id="group_'+ i +'">'+ item.label +'</div>').appendTo('#editor_groups');
        $.each(item.fields,function(i_, field){
            createField(i, i_, field);
        })

    });

    $('#editor_visibility > button:not(.active)').click(function(){
        $('#editor_visibility > button').removeClass('active');
        $(this).addClass('active');
        let size = $(this).attr('value');        
        $("#editor-content > body").css('max-width', size);
        
        
        setTimeout(function(){ 
            $(window).trigger('resize');
        }, 1100);
    });

    $('.group_header:not(.open)').click(function(){
        if($(this).hasClass('open')){
            $('.group_header').removeClass('open');
            let id = $(this).attr('id');
            $('.'+ id).hide();
        }else{
            $('.group_header').removeClass('open');
            $(this).addClass('open');
            $('.group_field').hide();
            let id = $(this).attr('id');
            $('.'+ id).css('display','block');
        }
    });
    $.each(theme.lang,function(k,v){
        $('[name="theme.lang.'+k+'"]').val(v.toString());
    })
    $.each(theme.settings,function(k,v){
        $('[name="theme.settings.'+k+'"]').val(v.toString());
    })
    // $('#editor_groups [name]').each(function(){
    //     let name = $(this).attr('name');
    //     //name = ''+ name + '';
    //     name = name.replace('.','"]["').replace('.','"]["');
    //     $(this).val(window['"'+name+'"']);
    //     console.log(name);
    // })
});

function createField(parent_id, id, oObj){
    let field = $('<div class="group_field group_'+parent_id+'"></div>');
    
    if(oObj.tip !== undefined){
        field.append('<label>'+oObj.label+'<br><small>'+ oObj.tip +'</small></label>');
    }else{
        field.append('<label>'+oObj.label+'</label>');        
    }
    
    
    if("text,number,password,tel,email,color,date".split(',').includes(oObj.type)){
        field.append('<input type="'+ oObj.type +'" name="'+ id +'" data-resultType="'+ oObj.result+'"/>');
    }
    if(oObj.type == "textarea"){
        field.append('<textarea rows="4" name="'+ id +'" data-resultType="'+ oObj.result+'"></textarea>');
    }
    if(oObj.type == "select"){
        let select = $('<select data-resultType="'+ oObj.result+'" name="'+ id +'"></select>');
        $.each(oObj.list, function(list_, list_value){
            select.append('<option value="'+list_value+'">'+list_value+'</option>');
        });
        field.append(select);
    }
    if(oObj.type == "boolean"){
        let select = $('<select data-resultType="'+ oObj.result+'" name="'+ id +'"></select>');
        select.append('<option value="true">Sim</option>');
        select.append('<option value="false">Não</option>');
        field.append(select);
    }
    field.insertAfter('#group_'+parent_id);

}