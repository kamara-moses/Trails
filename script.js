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
// if (states.replace(/\s/g, '').length){
// fetch(`https://developer.nps.gov/api/v1/parks?stateCode=${states}&limit=${resultLimit}&api_key=ar4J5Kk8F1fWQGXW0ZyAkQkzTbxOStQJ94fQfKFx`)
// .then(response => response.json())
// .then(responseJson => logRenderParks(responseJson))
// .catch(err => {
//       alert(`Something went wrong: ${err.message}`);
// })
// }
// else {
//     alert('No parks matching criteria, try again');
// }
// }
// function watchForm(){
// $('form').submit(event => {
// event.preventDefault();
// if(liExist === true){
// $('li').remove();
// liExist = false;
// }

// let states = $('#park-query').val();
// console.log(states);
// let resultLimit = $('#results-limit').val();
// console.log(resultLimit);

// if(isNaN(resultLimit) || resultLimit.length == 0 || !resultLimit.replace(/\s/g, '').length){
//     console.log('Not a number')
//     alert('Oops thats not a valid number, max results will be 10');
//     resultLimit = 10;
// }

// getParks(states,resultLimit);
// })
// }

// function logRenderParks(responseJson){
// if(responseJson.total == 0){
// alert('No parks matching criteria, try again');
// }
// console.log(responseJson)
// console.log(responseJson.data.length)
// for(let i = 0; i < responseJson.data.length; i++){
// $('ol').append(`<li><b>Name:</b> ${responseJson.data[i].name}<br><b>Description:</b> ${responseJson.data[i].description}<br><b>URL:</b> <a href="${responseJson.data[i].url}">${responseJson.data[i].url}</a></li>`);
// }
// liExist = true;
// }

// $(watchForm())

var states = $('.search-field').val();
var parks = [''];
var APIKey = '902b8f90e56be9c604839ab2c7f3b692';
// var location = 'states'
$('.searchBtn').on('click', function ()
{
    states = $('.search-field').val();
    $('.search-field').val('');

    var queryUrl = 'http://api.positionstack.com/v1/forward?query=' + states + '&access_key=902b8f90e56be9c604839ab2c7f3b692';
    $.ajax(
        {url: queryUrl, method: 'GET'}
    ).then(function (response)
    {
        var latitude = response.data[0].latitude;
        var longitude = response.data[0].longitude;
        $.ajax(
            {url: `https://www.hikingproject.com/data/get-trails?lat=${latitude}&lon=${longitude}&maxDistance=10&key=200855102-ce3f0b2f2ef3cefcfa802afcc897d712`, method: 'GET'}
        ).then(function (response)
        {
            console.log(response);
            // NOTE: Create a loop to run threw the array. then append array to cards//
            var name = response.trails[0].name;
            var stars = response.trails[0].stars;
            var location = response.trails[0].location;
            var summary = response.trails[0].summary;
            // event.preventDefault();


            $('.name').append(name);
            $('.stars').append(stars + ' stars');
            $('.location').append(location);
            $('.summary').append(summary);

            console.log(response);
            console.log(name);
            console.log(stars);
            console.log(location);
            console.log(summary);
        });

// function states(){
//     let lat = position.coords.latitude;
//     let long = position.coords.longitude;
// }
// then(function (response){
//     console.log(response);
// var name = data[0].name;
// console.log(name);
// })


        // $.getJSON(`https://www.hikingproject.com/data/get-trails?lat=${latitude}&lon=${longitude}&maxDistance=10&key=200855102-ce3f0b2f2ef3cefcfa802afcc897d712`, function (data)
        // {

        //     var name = data.data[0].name;
        //     var stars = data.data[0].stars;
        //     var location = data.data[0].location;
        //     var summary = data.data[0].summary;
        //     event.preventDefault();


        //     $('.name').append(name);
        //     $('.stars').append(stars);
        //     $('.location').append(location);
        //     $('.summary').append(summary);

        //     console.log(data);
        //     console.log(name);
        //     console.log(stars);
        //     console.log(location);
        //     console.log(summary);

        // });
    });
});
//    Hiking Project api that is lo and location.
// https://www.hikingproject.com/data/get-trails?lat=40.0274&lon=-105.2519&maxDistance=10&key=200855102-ce3f0b2f2ef3cefcfa802afcc897d712

// positionstack geocoding API key
// 902b8f90e56be9c604839ab2c7f3b692

// positionstack API
// http://api.positionstack.com/v1/forward?access_key=902b8f90e56be9c604839ab2c7f3b692&query=Seattle
