var states = $('.search-field').val();
var parks = [''];
var APIKey = '7522115a30c44451a2e6f533abbbb3bd';
            
    $('.searchBtn').on('click', function ()
        { states = $('.search-field').val();
          $('.search-field').val('');

          var queryUrl = 'https://api.opencagedata.com/geocode/v1/json?q=' + states + '&key=7522115a30c44451a2e6f533abbbb3bd';
          
                  $.ajax(
                      {url: queryUrl, method: 'GET'}
                  ).then(function (response)
                  {
                      var latitude = response.results[0].geometry.lat;
                      var longitude = response.results[0].geometry.lng;
                    $.ajax(
                        {url: `https://www.hikingproject.com/data/get-trails?lat=${latitude}&lon=${longitude}&maxDistance=10&key=200855102-ce3f0b2f2ef3cefcfa802afcc897d712`, method: 'GET'}
                    ).then(function (response)
                    {
                        

      
            // NOTE: Create a loop to run threw the array. then append array to cards//
            var name = response.trails[0].name;
            var stars = response.trails[0].stars;
            var location = response.trails[0].location;
            var summary = response.trails[0].summary;
            var link = response.trails[0].url;


            var name1 = response.trails[1].name;
            var stars1 = response.trails[1].stars;
            var location1 = response.trails[1].location;
            var summary1 = response.trails[1].summary;
            var link1 = response.trails[1].url;

            var name2 = response.trails[2].name;
            var stars2 = response.trails[2].stars;
            var location2 = response.trails[2].location;
            var summary2 = response.trails[2].summary;
            var link2 = response.trails[2].url;

            var name3 = response.trails[3].name;
            var stars3 = response.trails[3].stars;
            var location3 = response.trails[3].location;
            var summary3 = response.trails[3].summary;
            var link3 = response.trails[3].url;

            var name4 = response.trails[4].name;
            var stars4 = response.trails[4].stars;
            var location4 = response.trails[4].location;
            var summary4 = response.trails[4].summary;
            var link4 = response.trails[4].url;



            $('.name').empty().append(name);
            $('.stars').empty().append(stars + ' stars');
            $('.location').empty().append(location);
            $('.summary').empty().append('Summary: ' + summary);
            $('.link').attr('href', link).text(link);


            $('.name1').empty().append(name1);
            $('.stars1').empty().append(stars1 + ' stars');
            $('.location1').empty().append(location1);
            $('.summary1').empty().append('Summary: ' + summary1);
            $('.link1').attr('href', link1).text(link1);

            $('.name2').empty().append(name2);
            $('.stars2').empty().append(stars2 + ' stars');
            $('.location2').empty().append(location2);
            $('.summary2').empty().append('Summary: ' + summary2);
            $('.link2').attr('href', link2).text(link2);

            $('.name3').empty().append(name3);
            $('.stars3').empty().append(stars3 + ' stars');
            $('.location3').empty().append(location3);
            $('.summary3').empty().append('Summary: ' + summary3);
            $('.link3').attr('href', link3).text(link3);

            $('.name4').empty().append(name4);
            $('.stars4').empty().append(stars4 + ' stars4');
            $('.location4').empty().append(location4);
            $('.summary4').empty().append('Summary: ' + summary4);
            $('.link4').attr('href', link4).text(link4);


            function clearTheCard(card) {
                document.getElementById(searchBtn).on('click')
                document.getElementById(card);
                var defaultValue = card.defaultValue;
                var currentValue = card.value;
                if(currentValue == "") {
                    card.value == defaultValue;
                    return;
                }

                if(currentValue == defaultValue) {
                    card.value === '';
                    return false;

                }
            }


        });


    });
});

