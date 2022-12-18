$(".btn").click(function () {
  $(".passiveArea").css("display", "flex");
  $(".activeArea").css("display", "none");
});

$(".shareBtn").click(function () {
  $(".passiveArea").css("display", "none");
  $(".activeArea").css("display", "flex");
});


// I'm having problems with page transitions, unfortunately I couldn't run it properly :(

// $(".btn").click(function () {
//   if (window.innerWidth >= 768) {
//     $(".passiveArea").toggle();
//   } else {
//     $(".btn").click(function () {
//       $(".passiveArea").css("display", "flex");
//       $(".activeArea").css("display", "none");
//     });

//     $(".shareBtn").click(function () {
//       $(".passiveArea").css("display", "none");
//       $(".activeArea").css("display", "flex");
//     });
//   }
// });
