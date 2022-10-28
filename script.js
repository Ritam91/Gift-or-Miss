$(".tile").click(function (e) {
  //   alert("Please");
  $(this).addClass("touched");
});
let chances = 5;
let score = 0;
$(".start").click(function (e) {
  $(".chances").text(chances);
  start();
});

let a = Math.floor(Math.random() * 9) + 1,
  b = Math.floor(Math.random() * 9) + 1,
  c = Math.floor(Math.random() * 9) + 1;
d = Math.floor(Math.random() * 9) + 1;
let giftTile = [a, b, c];
function start() {
  while (true) {
    (a = Math.floor(Math.random() * 9) + 1),
      (b = Math.floor(Math.random() * 9) + 1),
      (c = Math.floor(Math.random() * 9) + 1);
    d = Math.floor(Math.random() * 9) + 1;

    if (a == b || b == c || a == c || a == d || b == d || c == d) {
    } else {
      break;
    }
  }
  $(".tile>span").each(function (tile) {
    console.log($(this));
    if ($(this).hasClass(a) || $(this).hasClass(b) || $(this).hasClass(c)) {
      $(this).text("🎁");
      $(this).addClass("gift");
    } else if ($(this).hasClass(d)) {
      $(this).text("⚠");
      $(this).addClass("danger");
    } else {
      $(this).text("Miss");
      $(this).addClass("miss");
    }
  });

  $(".tile>span").click(function (e) {
    // alert("Please");
    chances = chances - 1;
    $(".chances").text(chances);
    $(this).addClass("touched");
    if ($(this).hasClass("gift")) {
      score = score + 1;
      $(".score").text(score);
    }
    if ($(this).hasClass("danger")) {
      gameover();
    }
    if (chances == 0) {
      gameover();
    }
    if (score == 3) {
      alert("You Won");
      location.reload();
    }
  });
}

function gameover() {
  alert("Game Over!" + " \nYour Score: " + score);
  location.reload();
}
