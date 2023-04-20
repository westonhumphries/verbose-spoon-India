$(function () {
  //what radio value did they select?

 


  let userJSON = {
    email: "Weston email address",
  };

  $("#loadData").click(() => {
    console.log("in button click event");

    $("#email").val(userJSON.email);
  });

  $("input[type=radio]").on("change", function () {


    let radioChoice = $("input[type=radio]:checked").val(); 
    let newWordList = getWords(radioChoice);
    console.log(newWordList);

    let optionList = "";

    for (i = 0; i < newWordList.length; i++) {
      optionList += `<option value=" ${newWordList[i]} ">${newWordList[i]} </option>`;
    }
    console.log(optionList);

    $("#letterWordsSelect").empty().append(optionList);
  });

  $("#submitForm").on("click", (e) => {
    e.preventDefault();

    console.log("clicked the button");

    // get data from an input

    let dataStuff = `{ "letterSelected:" " ${$(
      "input[type=radio]:checked"
    ).val()} " }`;

    // display data from that input

    console.log(dataStuff);

    // do that suff 2x
  });
});

function getWords(word) {
  console.log("in f/n getWords, here the paramter: ", word);

  let jediColor = ["Blue 🟦", "Green 🟩", "Purple 🟪"];
  let sithColor = ["Red 🟥", "red 🟥", "Red 🟥 (Come on if you chose sith you knew this was coming.😈) "];
  let other = ["Orange 🟧", "White ⬜", "Black ⬛", "Yellow 🟨"];

  //todo: change to a switch/case ctrl structure.

  if (word === "jedi") {
    return jediColor;
  } else if (word === "sith") {
    return sithColor;
  } else if (word === "other") {
    return other;
  } else {
    return ["please select a letter"];
  }
}

function refreshPage(){
  $("#row").html("");
  var getValue = document.getElementById("loadData");
    if (getValue.value !="") {
      getValue.value = "";
    }}


//our shorthand doc ready function
//currently everything is nested in here
//todo: define functions and put them outside of this, then only call them from in here.
$(function () {
  //regular expression of only letters
  let alphaRegex = /^[a-zA-Z]*$/;

  //my array of petNames
  //its a nested array, meaning, item 0 "cat" has an array in the item
  //this is used for the "dependent inputs" in example #

  //example #1 code: ensures no spaces on blur
  //blur = when user clicks out of that DOM element (in this case it is a text input)


  $("#noAlpha").keyup(function (e) {
    e.preventDefault();
    this.value = this.value.replace(/[^0-9\.]/g, "");
    // $(this).next().text("remember, no alpha!" + ": " + this.value);


    // $(this).next().text(typeof this.value)); 
    console.log(typeof Number(this.value)); 

    if (Number(this.value) < 1000) {
      // return ["Try again"];
      $(this).next().text("Try again the number is higher than this." + ": " + this.value);
      console.log(`here`, this.value);

    } else if (Number(this.value) > 1000) {
      // return ["You are right. They say it will take 1000 or more to take down a Jedi"];

      console.log(`here in else`, this.value);
      $(this).next().text("You are right. They say it will take 1000 or more to take down a Jedi" + ": " + this.value);

    }
  });

  $("#noNumbers").on("input", function () {
    let inputVal = $(this).val();

    if (alphaRegex.test(inputVal)) {
      $(this).removeClass("error").addClass("success");
      $(this).next().text("Nice creature!");
    } else {
      $(this).removeClass("success").addClass("error");
      $(this).next().text("come on now. Creatures dont have numbers in their name. ");
    }
  });

  //TODO: key down not working, need immediate change?
  $("#noNumbersDown").keydown(function (e) {
    let inputVal = $(this).val();

    // test input value against regular expression
    if (alphaRegex.test(inputVal)) {
      $(this).removeClass("error").addClass("success");
      $(this).next().text("super cool!");
    } else {
      $(this).removeClass("success").addClass("error");
      $(this).next().text("ah, farts!");
    }
  });

  //Example #5 code
  //when user selects species of pet...load in names from array

  // $('#petKind').on('')

  $("#petKind").on("change", function (e) {
    //enables the pet name dropdown
    $("#petName").prop("disabled", false);

    let inputVal = this.value;

    console.log(inputVal);

    //loop though array of pet names
    $.each(petNames, function (key, value) {
      //match pet name to user selected
      if (inputVal === value[0]) {
        console.log(
          "value[0]:" + value[0] + ", key:" + key + "value: " + value
        );
        $.each(value, function (nestKey, nestValue) {
          // console.log(nestKey);

          switch (nestKey) {
            case 0:
              $("label[for=petName]").text(nestValue);
              $("#petName").empty();
              $("#petName").append(
                $("<option>").text(`select a ${nestValue} `)
              );
              break;
            case 1:
              $.each(nestValue, function (nameKey, nameValue) {
                console.log(nameKey, nameValue);

                $("#petName").append(
                  $("<option>").val(nameValue).text(nameValue)
                );
              });
              break;
          }
        });
      }
    });
  });

  //Example #6
  $("input[type=radio][name=entertained]").change(function () {
    //if they say no, display the textbox

    //get value of the thing
    let entertain = $("input[name=entertained]:checked").val();

    //act accordingly
    if (entertain === "No") {
      $("#divExplain").show();
    } else {
      $("#divExplain").hide();
    }
  });

  $("#submitButton").click(function () {
    if ($("#noSpaces").val()) {
      console.log("there is something in this text box");
      $("#noSpaces").removeClass("error");
    } else {
      console.log("there is NOTHING in this text box");
      $("#noSpaces").removeClass("success").addClass("error").focus();
      //bring focus to it
      //change the placeholder text
    }
  });

  
  //         <script type = "text/javascript">
  // $(document).ready( function () {
  // $('#Btn').click( function(){
  // // url from where we want to get the data
  // var ajxReq = $.ajax( { url : 'http://time.jsontest.com',
  // contentType : 'application/json',
  // dataType : 'json',
  // headers: {"Accepts": "text/plain; charset=utf-8"}
  // });
  // ajxReq.success( function ( data, status, jqXhr ) {
  // $( '#p1' ).append( '<h3> The json data details is : </h3>');
  // $( '#p1' ).append( '<p> Dagitte : ' + data.date + '</p>');
  // $( '#p1' ).append( '<p> Milliseconds_since_epoch : ' + data.milliseconds_since_epoch + '</p>');
  // $( '#p1' ).append ('<p> Time: ' + data.time + '</p>');
  // $( '#p1' ).append( '<p> The request status is : ' + status + '</p>');
  // });
  // ajxReq.error( function ( jqXhr, textStatus, errorMessage ) {
  // $( "p" ).append( "The status is :" +textStatus);
  // });
  // });
  // });
  // </script>
  // <

  //     $('#Btn').click(function() {
  //         // url from where we want to get the data
  //         var ajxReq = $.ajax({
  //             url: 'http://time.jsontest.com',
  //             contentType: 'application/json',
  //             dataType: 'json',
  //             headers: { "Accept": "application/json" }
  //         });
  //         ajxReq.success(function(data, status, jqXhr) {
  //             $('#p1').append('<h3> The json data details is : </h3>');
  //             $('#p1').append('<p> Date : ' + data.date + '</p>');
  //             $('#p1').append('<p> Milliseconds_since_epoch : ' + data.milliseconds_since_epoch + '</p>');
  //             $('#p1').append('<p> Time: ' + data.time + '</p>');
  //             $('#p1').append('<p> The request status is : ' + status + '</p>');
  //         });
  //         ajxReq.error(function(jqXhr, textStatus, errorMessage) {
  //             $("p").append("The status is : " + textStatus);
  //         });
  //     });
  // }); <
  // /script>

  // 1.

  // });

  // end of doc ready f/n
});

// some more code to steal...
// div class="container">
//   <input type='text' id='name' placeholder='Enter your name'><br/><br/>
//   <input type='text' id='age' placeholder='Enter your age'>
// </div>

// <!-- Script -->
// <script>
// $(document).ready(function(){
//   $("#age").keypress(function(e){
//     var keyCode = e.which;
//     /*
//     8 - (backspace)
//     32 - (space)
//     48-57 - (0-9)Numbers
//     */
//     if ( (keyCode != 8 || keyCode ==32 ) && (keyCode < 48 || keyCode > 57)) {
//       return false;
//     }
//   });

//   $("#name").keypress(function(e){
//     var keyCode = e.which;

//     /*
//     48-57 - (0-9)Numbers
//     65-90 - (A-Z)
//     97-122 - (a-z)
//     8 - (backspace)
//     32 - (space)
//     */
//     // Not allow special
//     if ( !( (keyCode >= 48 && keyCode <= 57)
//       ||(keyCode >= 65 && keyCode <= 90)
//       || (keyCode >= 97 && keyCode <= 122) )
//       && keyCode != 8 && keyCode != 32) {
//       e.preventDefault();
//     }
//   });
// });
// </script>


