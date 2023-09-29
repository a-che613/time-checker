
// FIRST IDEA(LACK OF TIME TO FURTHER DEVELOP). WORKS, BUT RETURNS
// THE SAME VALUE FOR ALL INPUT FIELDS

// function checkTime() {
//   let inputs = document.querySelectorAll(".input");
//   let results = document.querySelectorAll(".results")
//   let time = "12:00"
//   console.log(inputs)
//   // console.log(inputs.value);
//   inputs.forEach(element => {
//     if(element.value < time) {
//       results.forEach(element => {
//         return element.value = 'Early'
//       });
//     } else {
//       results.forEach(element => {
//         return element.value = 'Late'
//       })
//     }
//   });
// }

// SIMPLIFIED VERSION, TARGETS ONLY ONE INPUT FIELD(THE FIRST).
// (CODE WE FINALLY PRESENTED)

function checkTime() {
  let inputs = document.querySelector(".input").value;
  let results = document.querySelector(".results")
  console.log(inputs)
  // console.log(inputs.value);
  let time = "12:00"
  if (inputs < time){
    return results.value = 'Early';
  } else {
    return results.value = 'Late';
  }

}
