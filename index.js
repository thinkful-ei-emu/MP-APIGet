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
  $('.form-number').submit(event => {
    event.preventDefault();
    let number = $('.input-class').val();
    if(number === ''){
      number = 3;
    }
    console.log(number);
    getDogImage(number);
  });
}

function displayBreedImage(responseJson){
  $('.results-img').remove();
  //replace the existing image with the new one
  
  $('.results').append(`<img src="${responseJson.message}" class="results-img">`);

  //display the results section
  $('.results').removeClass('hidden');
}

function getBreedImage(breed){
  fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
    .then(response =>{

      if (response.ok){
        return response.Json;
      }
      else{
        throw new Error('Likely not a breed name.');
      }
    })
    .then(responseJson =>{
      displayBreedImage(responseJson);
    })
    .catch(error => alert(`Something went wrong. Error: ${error.message} Try again later.`));
}

function watchForm2() {
  $('.form-breed').submit(event => {
    event.preventDefault();
    let breed = $('.input-breed').val();
    console.log(breed);
    getBreedImage(breed);
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
  watchForm2();
});