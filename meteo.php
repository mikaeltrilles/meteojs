
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
  <link rel="stylesheet" href="./meteo.css">
  <title>Météo</title>
</head>
<body>
  <h1>Météo</h1>

  <div class="container fluid-container meteobox">
  <div class="row meteoville">
    <div class="meteo-form col-md-12">
      <form action="">
        <div class="form-group justify-content-center">
          <label for="inputCity" class="form-label text-light">Entrez une Ville ou un Etat</label>
          <input type="text" class="form-control" id="inputCity" placeholder="Entrez une Ville" />
          <button type="submit" class="btn btn-warning btn-block my-1">
            Rechercher
          </button>
        </div>
      </form>
    </div>
  </div>
  <div class="meteo-result fluid-container box-container justify-content-center my-3">
    <div id="country" class="box"></div>
    <div id="city" class="box">
      <p id="pays"></p>
    </div>
    <div id="wind" class="box"></div>
    <div id="pressure" class="box"></div>
    <div id="temp" class="box"></div>
    <div id="precipitation" class="box"></div>
    <div id="comment" class="box"></div>
    <div id="icone" class="box"></div>
  </div>
</div>
<script src="./meteo.js"></script>
</body>
</html>