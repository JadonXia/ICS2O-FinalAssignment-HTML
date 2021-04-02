// These are the variables I will need for my loop.
const numb = 3925
let guess = 0

// Below is my while loop for 'guess my age'.
while (guess !== numb) {
  guess = prompt('To ensure you are not a robot, enter in this code: 3925)
  guess = parseInt(guess)
  if (guess === numb) {
    alert('Verified. Please proceed to the maze game.')
  } else if (guess < numb) {
    alert('Try again.')
  } else if (guess > age) {
    alert('Try again')
  } else {
    alert('Please enter the code, or close the site.')
  }
}
