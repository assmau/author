$(function() {

	$('a.page-scroll').click(function() {
 		var $anchor = $(this);
 			$('body').animate({
             	scrollTop: ($($anchor.attr('href')).offset().top - 100)
         	}, 600);
         event.preventDefault();
 	});

  	$('.bxslider').bxSlider();

  	$('.content-item').mouseover(function() {
  		$(this).find('.sub-item.content, .sub-item.link a').addClass('hover');
  	});

    $('.content-item').mouseout(function() {
  		$(this).find('.sub-item.content, .sub-item.link a').removeClass('hover');
  	});

    $('.toggle-menu .btn-toggle').on('click', function() {
      $('.main-menu').toggleClass('expended');
    });




    $(function(x,y,z,w) {
    var email = ["@mail.ru", "@yandex.ru", "@gmail.com", "@rambler.ru", "@mail.ua", "@bk.ru", "@list.ru", "@inbox.ru"];
    
    $('input, textarea').on('blur', function() {
      
      var lnEl = $(this).val().length;
      var fldTxt = "Поле " + $(this).prev().text();
      switch (true) {
        case (lnEl === 0):
          $(this)
            .css('border', '2px red solid')
            .next()
            .text(fldTxt + ' не может быть пустым!');
          break;
        case (lnEl < 5 && lnEl > 0):
          $(this)
            .css('border', '2px red solid')
            .next()
            .text(fldTxt + ' должно содержать более 4-х символов!');
          break;

        case (lnEl > 40):
          $(this)
            .css('border', '2px solid #ff0000')
            .next()
            .text(fldTxt + ' не должно превышать более 40-ка символов!');
          break;

        case (lnEl <= 40 && lnEl > 4):
          if ($(this).attr('name') == 'email') {
            if ($(this).val().match(/[^a-zA-Z0-9_.-@]/)) {
              $(this)
                .css('border', '2px solid #ff0000')
                .next()
                .text(fldTxt + ' может содержать только латинские буквы, цифры и символы:"- _ ."');
            } else {
              if ($(this).val().match(/[@][a-zA-Z.]{2,6}/) &&
                email.toString().indexOf($(this).val().match(/@.*/).toString()) > -1) {
                w = !!1;
                $(this)
                  .css('border', '2px solid #008000')
                  .next()
                  .text('');
                
              } else {
                $(this)
                  .css('border', '2px solid #ff0000')
                  .next()
                  .text('Не верно указано ' + fldTxt + '!');

              }
            }
          } else if ($(this).attr('name') == 'username') {
            if ($(this).val().match(/[^a-zA-Z0-9_.-]/)) {
              $(this)
                .css('border', '2px solid #ff0000')
                .next()
                .text(fldTxt + ' может содержать только латинские буквы и символы: "-", "_", "."');
            } else {
              y = !!1;
              $(this)
                .css('border', '2px solid #008000')
                .next()
                .text('');
            }

           } 
           else if ($(this).attr('name') == 'textarea') {
            if ($(this).val().match(/[^a-zA-Z0-9_.-]/)) 
              $(this)
                .css('border', '2px solid #ff0000')
                .next()
                .text(fldTxt + ' может содержать только латинские буквы и символы: "-", "_", "."');
             else {
              y = !!1;
              $(this)
                .css('border', '2px solid #008000')
                .next()
                .text('');
            }

           }
          break;

        default:
          alert('Что то пошло не так :(');
          break;
      }
    });
    $('button').on('click', function(){$('form[name=form]').trigger('submit');});
    
    $('form[name=form]').on('submit', function(){
      $('input, textarea').blur();
      if (w && y && z) {
      return true;
      } else {
        return false;
      }
      
    });
    
  });
});