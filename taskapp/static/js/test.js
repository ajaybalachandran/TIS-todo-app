// function ajay(){
//   document.getElementById('data').innerHTML='<input type="text" placeholder="Middle Name" id="id_mname">';
// }



// $(document).ready(function() {
//   $('input[type="checkbox"]').click(function() {
//       var inputValue = $(this).attr("value");
//       $("." + inputValue).hide();
//   });
  
// });

$(function () {
  $("#test1").click(function () {
      if ($(this).is(":checked")) {
          $("#first_right").show();
          $("#first_left").hide();



      } else {
          $("#first_right").hide();
          $("#first_left").show();

         
          


      }
  });

  $("#test2").click(function () {
    if ($(this).is(":checked")) {
        $("#second_right").show();
        $("#second_left").hide();
    } else {
        $("#second_right").show();
        $("#second_left").hide();
    }
  });

  $("#test3").click(function () {
    if ($(this).is(":checked")) {
      $("#third_right").show();
      $("#third_left").hide();

    } else {
        $("#third_right").show();
        $("#third_left").hide();
    }
  });

  $("#test4").click(function () {
    if ($(this).is(":checked")) {
        $("#fourth_right").show();
        $("#fourth_left").hide();
    } else {
        $("#fourth_right").show();
        $("#fourth_left").hide();
    }
  });

});