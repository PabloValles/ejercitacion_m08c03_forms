window.onload = function () {
  let titulo = document.querySelector(".moviesAddTitulo");
  let formulario = document.querySelector("#formulario");
  let article = document.querySelector("article");
  titulo.innerHTML = "AGREGAR PELÍCULA";
  titulo.classList.add("titulo");
  article.classList.add("fondoTransparente");
  formulario.classList.add("fondoCRUD");

  //------DESDE AQUÍ CONTINÚE CON LAS VALIDACIONES DEL FORMULARIO //
  //-------------------DE REGISTRO DE PELÍCULAS------------------//
  let inputTitle = document.querySelector("#title");
  inputTitle.focus();

  let rating = document.querySelector("#rating");
  let awards = document.querySelector("#awards");
  let length = document.querySelector("#length");
  let release_date = document.querySelector("#release_date");
  let genre_id = document.querySelector("#genre_id");

  let arrayInputs = [
    inputTitle,
    rating,
    awards,
    length,
    release_date,
    genre_id,
  ];
  arrayInputs.forEach((input) => {
    input.addEventListener("change", (e) => {
      if (input.value == "") {
        input.classList.add("is-invalid");
      } else {
        input.classList.remove("is-invalid");
      }
    });
  });

  formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    let errores = [];
    if (inputTitle.value == "") {
      inputTitle.classList.add("is-invalid");
    }
    if (rating.value == "") {
      rating.classList.add("is-invalid");
    }
    if (awards.value == "") {
      awards.classList.add("is-invalid");
    }
    if (release_date.value == "") {
      release_date.classList.add("is-invalid");
    }
    if (length.value == "") {
      length.classList.add("is-invalid");
    }
    if (genre_id.value == "") {
      genre_id.classList.add("is-invalid");
    }

    if (errores.length > 0) {
      alert(errores);
    }
  });
};
