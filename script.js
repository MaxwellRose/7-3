let userinput = 0

document.getElementById('button').addEventListener('click', input)
function input () {
  userinput = document.getElementById('num').value
  if (userinput < 5 || userinput > 95) {
    alert('You can get in for free any day')
  } else if (userinput <= 13 && userinput >= 21) {
    alert('You can get a students discount any day')
  } else if (userinput > 13 && userinput < 21 || const === 'tuesday' || const === 'thursday') {
    alert { ('you can go on a students discount')
  }
  else {
    alert('You will need to pay full admission')
  }
}
