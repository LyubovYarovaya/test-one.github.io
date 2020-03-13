

$(window).on("load",function(){
    $('.count').each(function() {
        let elem = $('<select name="select"></select>');
        $(this).append(elem);
        for (let i = 1; i <= 50; i++) {
            let option = $('<option></option>');;
                option.val(i);
                option.text(i);
                elem.append(option);
            }
            $("select:first").attr("selected", "selected");
    });

    $('select').each(function(){
        let $this = $(this), 
            numberOfOptions = $(this).children('option').length;
            console.log(numberOfOptions)
      
            $this.addClass('select-hidden'); 
            $this.wrap('<div class="select"></div>');
            $this.after('<div class="select-styled"></div>');
    
            let $styledSelect = $this.next('div.select-styled');
            $styledSelect.text($this.children('option').eq(0).text());
            
      
            let $list = $('<ul />', {
            'class': 'select-options'
        }).insertAfter($styledSelect);
      
        for (let i = 0; i < numberOfOptions; i++) {
            $('<li />', {
                text: $this.children('option').eq(i).text(),
                rel: $this.children('option').eq(i).val()
            }).appendTo($list);
        }
      
        let $listItems = $list.children('li');
      
        $styledSelect.click(function(e) {
            e.stopPropagation();
            $('div.select-styled.active').not(this).each(function(){
                $(this).removeClass('active').next('ul.select-options').hide();
            });
            $(this).toggleClass('active').next('ul.select-options').toggle();
        });
        
      
        $listItems.click(function(e) {
            e.stopPropagation();
            $styledSelect.text($(this).text()).removeClass('active');
            $this.val($(this).attr('rel'));
            $list.hide();
            
        });
      
        $(document).click(function() {
            $styledSelect.removeClass('active');
            $list.hide();
        });
    });
 
});
$(window).on("load",function(){
    $(".select-options").mCustomScrollbar({
      theme:"dark",
      scrollInertia: 400,
    });

});
$(window).on("load",function(){
    $('.select-styled').bind( 'DOMSubtreeModified',function() {
        let $this = $(this)
            coun = $this.text();
        if (coun > 1 ) {
            cost = $this.closest('.quantity').find('.cart_price').text();
            $this.closest('.quantity').find('.not_spesial').text((19 * coun) + '$');
            $this.closest('.quantity').find('.cart_price').text('$' + (8.5 * coun))
            console.log(cost * coun);
        }
        
        
    })
});
console.log('Hello');
