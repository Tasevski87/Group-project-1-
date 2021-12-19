//  we added event listener to start the function when we click search button 
document.querySelector('.btn').addEventListener('click', function () {
    var city = document.getElementById('city-search').value
    getCity(city)
})

var citySearch = document.getElementById('citySearch')

//we created a API key and function thta give us back the city we are looking for
function getCity(city) {
    fetch('https://open.mapquestapi.com/nominatim/v1/search.php?key=sCFiupNXfYSdEqiHE3MpAlyL0c8FzCFs&format=json&q=' + city)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            console.log(data);
// loop that goes through all the citys with same name 
            for (var i = 0; i < data.length; i++) {
                //this paragraf gives us the resault from the search
                var cityName = document.createElement('p')
                cityName.textContent = data[i].display_name
                cityName.setAttribute('data-lat', data[i].lat)
                cityName.setAttribute('data-lon', data[i].lon)
                citySearch.append(cityName)
//event listener on the city we want with his delared lat and lon variables 
                cityName.addEventListener('click', function(event) {
                    var lat = event.target.dataset.lat
                    var lon = event.target.dataset.lon
                    console.log(lat, lon);
                    getParks(lat, lon)
                })
            }
        })
//function where we are using the lat and lon to fetch the nearest park with radius of 10 000meters  in our second api key 
        function getParks(lat, lon) {
            fetch(` https://api.geoapify.com/v2/places?categories=pet.dog_park&limit=20&apiKey=942b98be38294e5db3be6a489376e352&filter=circle:${lon},${lat},10000`)
            .then(res => res.json())
            .then(data => {
                console.log('dog_park data', data);
                for(var i = 0; i < data.features.length; i ++) {
                    var p = document.createElement('p')
                    //this data gives us the address of the park
                    p.textContent = data.features[i].properties.address_line2
                    document.getElementById('dog-parks').append(p)
                }
            })
        }
        
        var storage = JSON.parse(localStorage.getItem("data"));
    }