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


//got this from kaibry
 //Submit
 $("#submitForm").on("click", (e) => {
  e.preventDefault();
  console.log("clicked the button");
  $("#result").html("<b>The button is pressed and form is submitted.</b>");
  
  // Submit the form
  $("form").submit();
});



function refreshPage(){
  $("#row").html("");
  var getValue = document.getElementById("loadData");
    if (getValue.value !="") {
      getValue.value = "";
    }}


$(function () {
  //regular expression of only letters
  let alphaRegex = /^[a-zA-Z]*$/;


  $("#noAlpha").keyup(function (e) {
    e.preventDefault();
    this.value = this.value.replace(/[^0-9\.]/g, "");
    // $(this).next().text("remember, no alpha!" + ": " + this.value);


    // $(this).next().text(typeof this.value)); 
    console.log(typeof Number(this.value)); 

    if (Number(this.value) < 999) {
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
});




