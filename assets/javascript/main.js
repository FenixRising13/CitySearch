// Initialize Firebase
var config = {
    apiKey: "AIzaSyDhKRBd0iL_eQoi_scJv_Dm_lY5naOoptM",
    authDomain: "citysearch-d5115.firebaseapp.com",
    databaseURL: "https://citysearch-d5115.firebaseio.com",
    projectId: "citysearch-d5115",
    storageBucket: "",
    messagingSenderId: "1045769801777"
};
firebase.initializeApp(config);

var cityData = firebase.database();

var cityArray = [];

$('#submit').click(function (event) {
    event.preventDefault();

    var city = $('#city').val().trim();

    cityArray.push(city);
    console.log("City Array: " + cityArray);

    var newCity = {
        city: city.toLowerCase(),
    };
    cityData.ref().push(newCity);
    alert("You searched: " + city);
})

cityData.ref().on("child_added", function (snapshot) {
    snapshot = snapshot.val().city
    console.log("Snapshot: " + snapshot);
});