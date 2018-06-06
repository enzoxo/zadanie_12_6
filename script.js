var url = 'https://restcountries.eu/rest/v1/name/';
var countriesList = $('#countries');

$('#search').click(searchCountries);

function searchCountries() {
	//val() metoda  pobiera wartosc wpisana do uzytkownika
	var countryName = $('#country-name').val();
	//Sprawdzamy czy pole nie jest puste, jeśli tak to wstawiamy tam Poland
if(!countryName.length) countryName = 'Poland';
$.ajax({
	url: url + countryName,
	method: 'GET',
	success: showCountriesList
});

}

function showCountriesList(resp) {
	countriesList.empty();
	resp.forEach(function(item) {
		$('<li>').text(item.name).appendTo(countriesList);
	});
}
