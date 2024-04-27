// function fibonacci(n) {
//   if (n === 0 || n === 1) {
//     return n;
//   } else {
//     return fibonacci(n - 2) + fibonacci(n - 1);
//   }
// }
// console.log(fibonacci(10));

// bài 1 sử dụng đệ quy
var n = 10;

function Fibonacci(n, a = 0, b = 1) {
  if (n === 0) {
    return;
  }
  document.write("<p>" + b + "</p>");
  Fibonacci(n - 1, b, a + b);
}

if (n <= 0) {
  document.write("mời nhập lại");
} else {
  document.write(`Bài 1: <br> ${n} số Fibonacci đầu tiên:`);
  Fibonacci(n);
}

// bài 2
var n = 1234;
if (typeof n === "number") {
  function reverseNumber(n) {
    return Number(n.toString().split("").reverse().join(""));
  }
  document.write("Bài 2: số " + n + " đảo ngược thành: " + reverseNumber(n));
} else {
  document.write("Bài 2: Mời nhập lại");
}

// bài 3
function convertNumToStr(n) {
  var number = [
    "",
    "một",
    "hai",
    "ba",
    "bốn",
    "năm",
    "sáu",
    "bảy",
    "tám",
    "chín",
    "mười",
  ];
  if (n === 0) {
    return "không";
  } else if (n <= 10) {
    return number[n];
  } else if (n > 10 && n < 20) {
    return "mười " + number[n - 10];
  } else if (n >= 20 && n < 100) {
    return number[Math.floor(n / 10)] + " mươi " + number[n % 10];
    //   } else if (n === 100) {
    //     return "một trăm";
    //   } else if (n > 100 && n < 110) {
    //     return "một trăm linh " + number[n % 100];
    //   } else if (n >= 110 && n < 120) {
    //     return "một trăm mười " + number[(n % 100) % 10];
    //   } else if (n >= 120 && n < 1000) {
    //     return (
    //       number[Math.floor(n / 100)] +
    //       " trăm " +
    //       number[Math.floor((n % 100) / 10)] +
    //       " mươi " +
    //       number[(n % 100) % 10]
    //     );
    //   } else if (n === 1000) {
    //     return "một nghìn";
    //   } else if (n > 1000 && n < 1010) {
    //     return "";
    //   }
  }
}
// console.log(convertNumToStr(203));
