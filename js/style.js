$(function () {
  $(".card-open").click(function () {
    $(this).next().slideToggle(300);
    $(this).toggleClass("not-active");
  });
});
