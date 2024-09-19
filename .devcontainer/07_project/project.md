



## project 1

```javascript 
const body = document.querySelector('body');
const button = document.querySelectorAll('.button');

button.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    // if (e.target.id != '') {
    //   body.style.backgroundColor = e.target.id;
    // }

    // 2nd way
    switch (e.target.id) {
      case e.target.id:
        body.style.backgroundColor = e.target.id;
        break;
      default:
        body.style.backgroundColor = '';
    }
  });
});


```



## project 2


```javascript 
const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    result.innerHTML = `<h6>Please enter a valid height:- ${height}</h6>`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    result.innerHTML = `<h6>Please enter a valid weight:- ${weight}</h6>`;
  } else {
    const bmi = (weight / ((height * weight) / 10000)).toFixed(2);
    // result.innerHTML = `<h6>Your Bmi:- ${bmi}</h6>`;

    // Further cases:-
    // Convert BMI to a number for comparison
    const bmiValue = parseFloat(bmi);
    switch (true) {
      case bmiValue < 18.6:
        result.innerHTML = `<h6>Under weight with Bmi: ${bmi}</h6>`;
        break;
      case bmiValue >= 18.6 && bmiValue <= 24.9:
        result.innerHTML = `<h6>Normal Range with Bmi: ${bmi}</h6>`;
        break;
      case bmiValue > 24.9:
        result.innerHTML = `<h6>Over weight with Bmi: ${bmi}</h6>`;
        break;
      default:
        result.innerHTML = `<h6>Your Bmi: ${bmi}</h6>`;
    }
  }
});

```


## project 3


```javascript 

```


## project 4


```javascript 

```