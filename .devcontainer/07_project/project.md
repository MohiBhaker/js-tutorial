



## project 1 : Color Switcher
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="stylesheet" href="style.css" />
    <link rel="stylesheet" href="../styles.css" />
    <title>JavaScript Background Color Switcher</title>
  </head>
  <body>
    <nav>
      <a href="/" aria-current="page">Home</a>
      <a target="_blank" href="https://www.youtube.com/@chaiaurcode"
        >Youtube channel</a
      >
    </nav>
    <div class="canvas">
      <a
        style="
          background-color: #fff;
          padding: 10px 30px;
          border-radius: 8px;
          color: #212121;
          text-decoration: none;
          border: 2px solid #212121;
        "
        href="../index.html"
        >Back to Home Page</a
      >
      <h1>Color Scheme Switcher</h1>
      <span class="button" id="grey"></span>
      <span class="button" id="white"></span>
      <span class="button" id="blue"></span>
      <span class="button" id="yellow"></span>
      <h2>
        Try clicking on one of the colors above
        <span>to change the background color of this page!</span>
      </h2>
    </div>
    <script src="chaiaurcode.js"></script>
  </body>
</html>


```


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



## project 2 : BMI Calculator
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="stylesheet" href="style.css" />
    <link rel="stylesheet" href="../styles.css" />
    <title>BMI Calculator</title>
  </head>
  <body>
    <nav>
      <a href="/" aria-current="page">Home</a>
      <a target="_blank" href="https://www.youtube.com/@chaiaurcode"
        >Youtube channel</a
      >
    </nav>
    <div class="container">
      <h1>BMI Calculator</h1>
      <form>
        <p><label>Height in CM: </label><input type="text" id="height" /></p>
        <p><label>Weight in KG: </label><input type="text" id="weight" /></p>
        <button>Calculate</button>
        <div id="results"></div>
        <div id="weight-guide">
          <h3>BMI Weight Guide</h3>
          <p>Under Weight = Less than 18.6</p>
          <p>Normal Range = 18.6 and 24.9</p>
          <p>Overweight = Greater than 24.9</p>
        </div>
      </form>
    </div>
  </body>
  <script src="chaiaurcode.js"></script>
</html>

```

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


## project 3 :  digital clock
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="stylesheet" type="text/css" href="../styles.css" />
    <title>Your Local Time</title>
    <style>
      body {
        background-color: #212121;
        color: #fff;
      }
      .center {
        display: flex;
        height: 100vh;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      }
      #clock {
        font-size: 40px;
        background-color: orange;
        padding: 20px 50px;
        margin-top: 10px;
        border-radius: 10px;
      }
    </style>
  </head>
  <body>
    <nav>
      <a href="/" aria-current="page">Home</a>
      <a target="_blank" href="https://www.youtube.com/@chaiaurcode"
        >Youtube channel</a
      >
    </nav>
    <div class="center">
      <div id="banner"><span>Your local time</span></div>
      <div id="clock"></div>
    </div>
    <script src="chaiaurcode.js"></script>
  </body>
</html>

```

```javascript 
const clock = document.querySelector('#clock');

setInterval(function () {
  let date = new Date();

  clock.innerHTML = date.toLocaleString();
}, 1000);

```


## project 4


```javascript 

```