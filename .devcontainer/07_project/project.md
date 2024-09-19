



## project 1

```javascript 
const body = document.querySelector('body');
const button = document.querySelectorAll('.button');

button.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    if (e.target.id != '') {
      body.style.backgroundColor = e.target.id;
    }
  });
});

```