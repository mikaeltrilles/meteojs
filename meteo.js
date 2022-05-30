
//* RECUPERATION DES INFORMATIONS METEO DE VOTRE VILLE

// https://api.openweathermap.org/data/2.5/weather?q=Beziers&units=metric&lang=fr&appid={API key}

// Ouvrir un compte et mettre votre clé API

const APIKEY = '5aca9dae9e59526a5ff9c19c21167752';

// Appel a l'API openweather avec la ville en parametre
let apiCall = function (city) {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=fr&appid=${APIKEY}`;
    fetch(url)
        .then(response => response.json()
            .then((data) => {
                console.log(data);
                let km = Math.ceil((Number(data.wind.speed) * 3.6), 2);
                let comm = data.weather[0].description;
                let temperature = Math.round(data.main.temp);
                //* recupere le pays en minuscule
                let country = data.sys.country.toLowerCase();
                //* Mettre les premières lettres de chaque mot en majuscule
                let commentaire = comm.replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
                let countryFlag = `<img src="https://flagcdn.com/120x90/${country}.png">`;
                let ville = data.name;
                let cloudiness = data.clouds.all;
                fetch(`https://public.opendatasoft.com/api/records/1.0/search/?dataset=countries-codes&q=${country}`)
                    .then((responseNomPaysFr) => responseNomPaysFr.json()
                        .then((dataNomPaysFr) => {
                            console.log(dataNomPaysFr);
                            let nomPaysFr = dataNomPaysFr.records[0].fields.label_fr;
                            //* Affichage des informations
                            document.querySelector('#city').innerHTML = ville;
                            document.querySelector('#temp').innerHTML = '<i class="bi bi-thermometer-half"></i>' + temperature + '°';
                            document.querySelector('#country').innerHTML = countryFlag;
                            document.querySelector('#wind').innerHTML = '<i class="bi bi-wind"></i>' + km + ' Km/h';
                            document.querySelector('#pressure').innerHTML = data.main.pressure + ' hPa';
                            document.querySelector('#precipitation').innerHTML = '<i class="bi bi-cloud"></i>' + cloudiness + ' %';
                            document.querySelector('#comment').innerHTML = commentaire;
                            document.querySelector('#icone').innerHTML = `<img style="height:190px;width:190px;" src="./ico/${data.weather[0].icon}.svg">`;

                        }))
            })
        )  //* Fin de la requête


        .catch(err => console.log('Erreur : ' + err));

}//* Fin de la fonction

// Ecouteur evenement sur la soumission du formulaire
document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
    let ville = document.querySelector('#inputCity').value;

    apiCall(ville);
});


apiCall('Kiev');
