 Trails
This websites was created to allow the user simple access to the top 5 hikes within a certian area. The user simply put in the name of a city, (USA, state may need to be included if there are multiple cities with that name) then the top 5 hikes near that city will be shown. THe user will see the name of the trail, a 1 to 5 star rating of that trail the location and the summary of the trail. Lastly there is a link to hiking project.com that shows a map of the trail.

We used a geolocation api http://api.positionstack.com to pass the location of the user input of our search bar into the other api we leveraged

We took the the geolocation and passed it into our hiking api https://www.hikingproject.com/data and that allowed us to call up the hikes near that city based on its latitude and longitude.

<img src='Trails.png' width= 700px 500px>
