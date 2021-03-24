let userinput = 0

document.getElementById('button').addEventListener('click', input)
function input () {
  userinput = document.getElementById('num').value
  if  (userinput >= 17) {
    alert('you can watch any movie')
  } else if (userinput >= 13) {
    alert('You can watch a pg 13 or a G movie')
  } else if (userinput >= 5) {
    alert('You can watch a G or PG movie')
  } else {
    alert('you are too young')
  }
}
