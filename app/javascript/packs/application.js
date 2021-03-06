// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"
import "jquery"
Rails.start()
Turbolinks.start()
ActiveStorage.start()


$(document).ready(function() {
  $('#match_search').on('input',function(e){
    var value = $(this).val();
    $("#show_names tr").remove()
    $.ajax({
    type: 'POST',
    data: {name: value},
    url: '/matcher.json',
    success: (response) => {
      if (response.length > 0) {
        for (var i = 0; i < response.length; i++) {
          console.log(response[i]);
          $("#show_names").append('<tr><td>'+response[i]+'</td><tr>');
          // $('#m-compare .container-products').append(template_modal_products(product));
        }
      }


      }
    });

  });
});
