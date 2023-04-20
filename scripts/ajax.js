// $(function() {


$('#btnLoadData').click(function() {
    console.log("clicked");

//     let jsonURL = "https://www.w3schools.com/jquery/demo_ajax_json.js";

//     let jsonURL = "demo.json";

    // let jsonURL = "https://github.com/westonhumphries/verbose-spoon-India/blob/main/demo.json";
    let jsonURL = "https://westonhumphries.github.io/verbose-spoon-India/demo.json";
    //let jsonURL = "../demo.json";

    $.ajax({
        url: jsonURL,
        dataType: "json",
        success: function(data) {
            //can log either the entire data or invoke specific properties data.zipCode...
            console.log(data.email);
            
            //loads first name into my first input box (in example #1)
            
            
            $("#noSpaces").val(data.name);
            console.log(data.language);
            
            $("#pwd").val(data.pwd);
            console.log(data.language);



            $('input[type=checkbox]').each(function () {
                if (data.remember === $(this).val())
                {
                  $(this).prop('checked', true)
                    console.log($(this));
               }

            });

            $('input[type=radio]').each(function () {
                if (data.force === $(this).val())
                {
                  $(this).prop('checked', true)
                    console.log($(this));
               }

            });
            //console.log (sList);

            $.each(data, function (key, val) {
                //step through results
                console.log(key, val);
                //get each data item
                //put it in the right place
                //$("#dataContainer").append(key + " " + val);
                $(`#${key}`).val(val);
                
            });
        }
    });
});



// end of doc ready f/n
// });
