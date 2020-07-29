// $.ajax(search:data,)
// THIS IS THE HIKING PROJECT.....
// var city = "Seattle, Washington";
// var lat = "";
// var lon = "";
// $.getJSON("https://www.hikingproject.com/data/get-trails?lat=47.60357&lon=-122.32945&maxDistance=10&key=200850912-4921b8432a4db16d916f8038166bb140", 
// function(data){
// console.log(data);


// });

// THIS IS NPS.GOV\.....



// var liExist = false;

// function getParks(states, resultLimit){
//   if (states.replace(/\s/g, '').length){
//   fetch(`https://developer.nps.gov/api/v1/parks?stateCode=${states}&limit=${resultLimit}&api_key=ar4J5Kk8F1fWQGXW0ZyAkQkzTbxOStQJ94fQfKFx`)
//   .then(response => response.json())
//   .then(responseJson => logRenderParks(responseJson))
//   .catch(err => {
//       alert(`Something went wrong: ${err.message}`);
//   })
//   }
//   else {
//     alert('No parks matching criteria, try again');
//   }
// }
// function watchForm(){
//   $('form').submit(event => {
//   event.preventDefault();
//   if(liExist === true){
//   $('li').remove();
//   liExist = false;
//   }

//   let states = $('#park-query').val();
//   console.log(states);
//   let resultLimit = $('#results-limit').val();
//   console.log(resultLimit);

//   if(isNaN(resultLimit) || resultLimit.length == 0 || !resultLimit.replace(/\s/g, '').length){
//     console.log('Not a number')
//     alert('Oops thats not a valid number, max results will be 10');
//     resultLimit = 10;
//   }
  
//   getParks(states,resultLimit);
//   })
// }

// function logRenderParks(responseJson){
//   if(responseJson.total == 0){
//   alert('No parks matching criteria, try again');
//   }
//   console.log(responseJson)
//   console.log(responseJson.data.length)
//   for(let i = 0; i < responseJson.data.length; i++){
//   $('ol').append(`<li><b>Name:</b> ${responseJson.data[i].name}<br><b>Description:</b> ${responseJson.data[i].description}<br><b>URL:</b> <a href="${responseJson.data[i].url}">${responseJson.data[i].url}</a></li>`);
//   }
//   liExist = true;
// }

// $(watchForm())

var states = $('.search-field').val();
var parks = [''];
var APIKey = 'ar4J5Kk8F1fWQGXW0ZyAkQkzTbxOStQJ94fQfKFx'
// var location = 'states'
$('.searchBtn').on('click', function () {
    states = $('.search-field').val();
    $('.search-field').val('');

    var queryUrl = `https://www.hikingproject.com/data/get-trails?lat=47.606&lon=-122.332&key=200855102-ce3f0b2f2ef3cefcfa802afcc897d712`;
$.ajax({
    url: queryUrl, 
    method: 'GET'
})
.then(function (response){
    console.log(response);
    })
}) 

//    Hiking Project api that is lo and location.
// https://www.hikingproject.com/data/get-trails?lat=40.0274&lon=-105.2519&maxDistance=10&key=200855102-ce3f0b2f2ef3cefcfa802afcc897d712  