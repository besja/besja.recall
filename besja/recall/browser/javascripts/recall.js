jQuery(function($){
  //alert("1"); 

  $("#viewlet-above-content-title .catalogOrderButton a").each(function(){
    $(this).attr("href", "/recall_template"); 
    $(this).addClass("recall-form"); 
  })
  $('a.recall-form').prepOverlay({
      subtype: 'ajax',
      filter: common_content_filter,
      formselector: 'form#recall_form',
      noform: 'reload',
      cssclass: 'overlay-recallform',
      closeselector: '#form-hide',
      beforepost: function (overlay, responseText) {
        $(".primeFormClass .success, .primeFormClass .error").remove();
        //$(".primeFormClass").append("<span class='wait review_message'>Минуточку...</span>");
      },
      afterpost: function (overlay, responseText) {
        var portalMessage = $('.portalMessage',overlay).last();
        if(portalMessage.hasClass('info')) {
          portalMessage.css('display','none');
          $("h2",overlay).html("Ваше сообщение отправлено"); 
          $(".form_desc",overlay).html("Мы перезвоним на указанный<br/>номер через 5 минут");
          $("form",overlay).hide(); 
          yaCounter27348218.reachGoal('order'); 

        }
        if(portalMessage.hasClass('error')) {
          $(".primeFormClass",overlay).prepend('<p class="error review_message">'+$('dd',portalMessage).text()+'</prepend>');
          portalMessage.css('display','none'); 
        }
      },
  });

});