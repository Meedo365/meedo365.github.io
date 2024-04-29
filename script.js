// let btn = document.getElementById("btn");
// const colors = [
//   "red",
//   "green",
//   "blue",
//   "yellow",
//   "orange",
//   "aliceblue",
//   "maroon",
// ];
// let index = 0;
// setInterval(() => {
//   if (index < colors.length) {
//     index++;
//   } else {
//     index = 0;
//   }
//   btn.style.backgroundColor = colors[index];
// }, 2000);

// function Messages(con) {
//   //codehere
//   let arr = [];
//   for (let i = 0; i < con.length; i++) {
//     let x = con[i].split("");
//     if (!x.includes(" ") && typeof con[i] == "string") {
//       arr.push(con[i]);
//     }
//   }

//   if (arr.length === 0) {
//     return console.log( `No one sent you a message!`);
//   } else if (arr.length === 1) {
//     return console.log( `${arr[0]} sent you a message!`);
//   } else if (arr.length === 2) {
//     return console.log( `${arr[0]} and ${arr[1]}  sent you a message!`);
//   } else {
//    return console.log( `${arr[0]}, ${arr[1]} and ${arr.length - 2} others  sent you a message!`);
//   }

//   //  if (arr.length === 0) {
//   //     return `No one sent you a message!`;
//   // } else if (arr.length === 1) {
//   //     return `${arr[0]} sent you a message!`;
//   // } else if (arr.length === 2) {
//   //     return `${arr[0]} and ${arr[1]} sent you a message!`;
//   // } else {
//   //     return `${arr[0]}, ${arr[1]} and ${arr.length - 2} others sent you a message!`;
//   // }
// }

// function Messages(con) {
//   //codehere
//   let arr = [];
//   for (let i = 0; i < con.length; i++) {
//     let x = con[i].split("");
//     if (
//       x.includes(" ") &&
//       typeof con[i] == "string" &&
//       isNaN(con[i]) &&
//       con[i].charAt(0) === con[i].charAt(0).toUpperCase()
//     ) {
//       arr.push(con[i]);
//     }
//   }

//   if (arr.length === 0) {
//     return console.log(`No one sent you a message!`);
//   } else if (arr.length === 1) {
//     return console.log(`${arr[0]} sent you a message!`);
//   } else if (arr.length === 2) {
//     return console.log(`${arr[0]} and ${arr[1]} sent you a message!`);
//   } else if (arr.length === 3) {
//     return console.log(
//       `${arr[0]}, ${arr[1]} and ${arr[2]} sent you a message!`
//     );
//   } else if (arr.length >= 4) {
//     return console.log(
//       `${arr[0]}, ${arr[1]} and ${arr.length - 2} others  sent you a message!`
//     );
//   }
// }
// Messages(["Stanley", "Geralt", "Triss",'80808']);

function Messages(con) {
  //codehere
  let arr = [];
  for (let i = 0; i < con.length; i++) {
    let x = con[i].split("");
    if (!x.includes(" ") && typeof con[i] == "string" && isNaN(con[i])
    && con[i].charAt(0) === con[i].charAt(0).toUpperCase()
    ) {
      arr.push(con[i]);
    }
  }

  if (arr.length === 0) {
    return console.log(`No one sent you a message!`);
  } else if (arr.length === 1) {
    return console.log(`${arr[0]} sent you a message!`);
  } else if (arr.length === 2) {
    return console.log(`${arr[0]} and ${arr[1]} sent you a message!`);
  } else if (arr.length === 3) {
    return console.log(
      `${arr[0]}, ${arr[1]} and ${arr[2]} sent you a message!`
    );
  } else if (arr.length >= 4) {
    console.log(
      `${arr[0]}, ${arr[1]} and ${arr.length - 2} others sent you a message!`
    );
  }
}

Messages(["Stanley", "Geralt", "Triss", "hh", "80808"]);

// function basicmath(word) {
//   //code here
//   let array = word.split(" ");
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === "minus") {
//       array[i] = "-";
//     } else if (array[i] === "plus") {
//       array[i] = "+";
//     } else if (array[i] === "times") {
//       array[i] = "*";
//     } else if (array[i] === "divided" && array[i + 1] === "by") {
//       array[i] = "/";
//       array[i + 1] = "";
//     }
//   }
//   let x = array.join(" ");
//   return eval(x);
// }

function basicmath(word) {
  let array = word.split(" ");
  let y = "";
  if (
    array.includes("minus") ||
    array.includes("plus") ||
    array.includes("divided") ||
    array.includes("times")
  ) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === "minus") {
        array[i] = "-";
      } else if (array[i] === "plus") {
        array[i] = "+";
      } else if (array[i] === "times") {
        array[i] = "*";
      } else if (array[i] === "divided" && array[i + 1] === "by") {
        array[i] = "/";
        array[i + 1] = "";
        y = ".toFixed(2)";
      }
    }
  } else {
    return console.log(null);
  }
  let x = array.join(" ");
  const result = eval(x);
  console.log(result);
  //   return result.toFixed(2);
}

// basicmath("1 plus  2");

// basicmath("11 minus 44");

// submitted 1
// function basicmath(word) {
//   let array = word.split(" ");
//   let y = "";
//   if (
//     array.includes("minus") ||
//     array.includes("plus") ||
//     array.includes("divided") ||
//     array.includes("times")
//   ) {
//     for (let i = 0; i < array.length; i++) {
//       if (array[i] === "minus") {
//         array[i] = "-";
//       } else if (array[i] === "plus") {
//         array[i] = "+";
//       } else if (array[i] === "times") {
//         array[i] = "*";
//       } else if (array[i] === "divided" && array[i + 1] === "by") {
//         array[i] = "/";
//         array[i + 1] = "";
//       }
//     }

//     let x = array.join(" ");
//     const result = eval(x);
//     return result.toFixed(2);
//   } else {
//     return null;
//   }
// }

// submitted 2
// function basicmath(word) {
//     //code here
//     let array = word.split(" ");
//     for (let i = 0; i < array.length; i++) {
//       if (array[i] === "minus") {
//         array[i] = "-";
//       } else if (array[i] === "plus") {
//         array[i] = "+";
//       } else if (array[i] === "times") {
//         array[i] = "*";
//       } else if (array[i] === "divided" && array[i + 1] === "by") {
//         array[i] = "/";
//         array[i + 1] = "";
//       }
//     }
//     let x = array.join(" ");
//     return eval(x).toFixed(2);
//   }

function sinking(participant, rounds) {
  if (rounds.length === 0) {
    return participant;
  }

  let x = participant - (participant % rounds[0]);
  return sinking(x, rounds.slice(1));
}

const result = sinking(15, [4, 2, 5, 3, 2]);

console.log(result);

// sinking(15, [4, 2, 5, 3, 2]);
