//obtiene datos de una API
const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
//al ser un querrySelector debe de llevar un .name/blog al ser una clase
const $n = document.querySelector('.name');
const $b = document.querySelector('.blog');
const $l = document.querySelector('.location');
//al usar await debe ser una funcion asincrona (async)
async function displayUser(username) {
  $n.textContent = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`);
  //definimos data, debera obtener lo que venga de response por lo
  //tanto agregamos el await e insertarlo en el html
  const data =  await response.json();
  console.log(data);
  //como queremos insertar lo que viene de la API quitamos las comillas y ${}
  //ya que son datos
  $n.textContent = data.name;
  $b.textContent = data.blog;
  $l.textContent = data.location;
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  n.textContent = `Algo salió mal: ${err}`
}

displayUser('stolinski').catch(handleError);