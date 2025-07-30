$(function () {
  $(".card-open").on("click", function () {
    $(".time-schedule__card:nth-child(n+4)").toggleClass("is-open");
    if ($(this).text() === "Read more") {
      $(this).text("Close");
    } else {
      $(this).text("Read more");
    }
  });
});
