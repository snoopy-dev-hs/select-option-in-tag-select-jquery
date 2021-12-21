$(document).ready(function () {
     /// TESTING 1
     $("#btn-jquery").on("click", function () {
          /// REMOVE SELECTED ATTR FROM SELECT TAG
          $("#sel-pro-lan option").attr("selected", false);

          /// ! CODE
          /// CUSTOMIZE SELECT OPTION
          $("#sel-pro-lan option[value='jquery']").attr("selected", true);
     });

     /// TESTING 2
     /// BOOTSTRAP BUTTON FUNCTION
     $("#btn-bootstrap").on("click", function () {
          let bs = $(this).text().toLowerCase().trim();

          /// REMOVE SELECTED ATTR FROM SELECT TAG
          $("#sel-pro-lan option").attr("selected", false);
          
          /// ! CODE
          /// CUSTOMIZE SELECT OPTION
          $("#sel-pro-lan option[value='" + bs +"']").attr("selected", true);
     });
});