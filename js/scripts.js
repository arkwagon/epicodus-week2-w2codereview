$(document).ready(function() {
  $("form#questions").submit(function(event) {
    var score = ["#question1", "#question2", "#question3",
    "#question4", "#question5"];
    alert('Got to beginning of form submit!');
    //
    // var answer1 = $("#question1").val();
    // alert('Got to beginning of form submit!');

    // if (age) {
    //   var quote = (100 - age) * 3;
    //   if (gender === 'male' && age < 26) {
    //     quote += 50;
    // }

    //   $("#rate").empty().append(quote);
    //   $("#quote").show();
    // } else {
    //   alert('Please enter your age.');
    // }

    event.preventDefault();
  });
});
// $(document).ready(function() {
//   $("#questions").submit(function(event) {
//     // alert('Got to beginning of form submit!');
//
//     var answer1 = parseInt("#question1");
//     var answer2 = parseInt("#question2");
//     var answer3 = parseInt("#question3");
//     var answer4 = parseInt("#question4");
//     var answer5 = parseInt("#question5");
    // var answers = ["question1" + "question2", "question3" + "question4" + "question5"];
    //

    // $("#cancun").show();


//     event.preventDefault();
//   });
// });


// $(document).ready(function() {
//   $("#quiz form").submit(function(event) {
//      alert('Got to beginning of form submit!');
//
//     event.preventDefault();
//   })
// });
