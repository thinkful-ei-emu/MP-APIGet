'use strict';

function getDogImage(number) {
  fetch(`https://dog.ceo/api/breeds/image/random/${number}`)
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson))
    .catch(error => alert(`Something went wrong. Error: ${error.message} Try again later.`));
}

function displayResults(responseJson) {
  $('.results-img').remove();
  console.log(responseJson);
  //replace the existing image with the new one
  responseJson.message.forEach(image => {
    $('.results').append(
      `<img src="${image}" class="results-img">`
    );
  });

  //display the results section
  $('.results').removeClass('hidden');
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    let number = $('.input-class').val();
    if(number === ''){
      number = 3;
    }
    console.log(number);
    getDogImage(number);
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});