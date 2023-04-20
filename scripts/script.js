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



$(function () {
  console.log("ready!");


  $.each(golfGames2, (ind, val) => {

    // console.log("index:", index);
    // console.log("value:", value);

    console.log(golfGames2[ind].game, val.game)

    let link = ''; 
    $.each(val.links, (i) => {
      link += `<a target="_blank" href=" ${ val.links[i] } "class="btn btn-primary"> ${ val.authors[i]} </a>`
      // link += k[i] ;

    })

    $("#gameRow").append(`
    <div class="col-sm-5 mx-auto mt-5">
        <div class="card">
          <h2 class="card-title"> ${val.game} </h2>
          <div class="card-body"> Game Author: ${val.authors[0]}</div>
          <input
              id="noAlpha"
              class="form-control"
              type="text"
              placeholder="Enter Account Number (only numbers)"
              name="noAlpha"
            />
          <div class="card-footer"> ${ link } 
          </div>
        </div>
      </div>
      `);
  });
});


//our shorthand doc ready function
//currently everything is nested in here
//todo: define functions and put them outside of this, then only call them from in here.
$(function () {
  //regular expression of only letters
  let alphaRegex = /^[a-zA-Z]*$/;

  //my array of petNames
  //its a nested array, meaning, item 0 "cat" has an array in the item
  //this is used for the "dependent inputs" in example #5
  let petNames = [
    ["cat", ["Jonas", "Salvador", "Cheezer", "Captain Fluffy"]],
    ["dog", ["Earl", "Pop Tart", "Dawg"]],
    ["mouse", ["Squeakers"]],
    ["hampster", ["Fluffz", "Chubbz"]],
    ["kuola", ["Wally", "Princess Pickles"]],
    ["frog", ["Dennis Hopper", "Frank"]],
    ["bear", ["Barry"]],
  ];

  //example #1 code: ensures no spaces on blur
  //blur = when user clicks out of that DOM element (in this case it is a text input)
  $("#noSpaces").blur(function () {
    //first grab the value from the textbox and put in a variable
    let inputVal = $(this).val();
    //initialize an string variable that represents a space
    let strSpace = " ";
    //found this online, initialize a variable to count number of spaces in a string
    //takes the variable of the input and runs the split() method
    //which is an array method to chop it up whenever it finds the search parameter, in the case a space (" ")
    let spaceCount = inputVal.split(" ").length - 1;

    console.log(spaceCount);
    if (spaceCount === 0) {
      $(this).next().text("all good");
    } else if (spaceCount > 0) {
      $(this).next().text("no spaces allowed in User Name");
    }
  });

  $("#noAlpha").keyup(function (e) {
    e.preventDefault();
    this.value = this.value.replace(/[^0-9\.]/g, "");
    $(this).next().text("remember, no alpha!");

    if (this.value < 1000) {
      return ["Try again"];
    } else (this.value > 1000); {
      return ["You are right. They say it will take 1000 or more to take down a jedi"];
    }
  });

  $("#noNumbers").on("input", function () {
    let inputVal = $(this).val();

    if (alphaRegex.test(inputVal)) {
      $(this).removeClass("error").addClass("success");
      $(this).next().text("super cool!");
    } else {
      $(this).removeClass("success").addClass("error");
      $(this).next().text("ah, farts!");
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

  //loading in JSON data from w3c:https://www.w3schools.com/jquery/ajax_getjson.asp
  $("#DONOTFIRETHISCODE").click(function () {
    console.log("clicked");

    // let jsonURL = "https://www.w3schools.com/jquery/demo_ajax_json.js";

    // let jsonURL = "https://barrycumbie.github.io/376-india-lab/demo.json?callback=?";

    let jsonURL = "../demo.json";

    // #1 failed:
    // let ajxReq = $.ajax({
    //     url: jsonURL,
    //     contentType: 'application/json',
    //     dataType: 'json',
    //     headers: {
    //         "Accept": "application/json",
    //         'Access-Control-Allow-Origin': jsonURL

    //     }
    // });

    // #2 failed
    // $.getJSON(jsonURL, function(result) {
    //     console.log(JSON.stringify(res));

    //     $.each(result, function(i, field) {
    //         console.log(i);
    //         $("#dataContainer").append(field + " ");
    //     });
    // });

    // #3
    // $.getJSON(jsonURL + 'jsonp?callback=?', {}, function(data) {     console.log(data);     }); //get JSON

    // #4
    $.ajax({
      url: jsonURL,

      // The name of the callback parameter, as specified by the YQL service
      jsonp: "callback",

      // Tell jQuery we're expecting JSONP
      dataType: "jsonp",

      // Tell YQL what we want and that we want JSON
      data: {
        format: "json",
      },

      // Work with the response
      success: function (response) {
        console.log(response); // server response
      },
    });

    //end of btn click event
  });

  // https://www.educba.com/jquery-ajax-headers/
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


