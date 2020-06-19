var html = document.documentElement;
// Если первое посещение выполняем загрузку шрифтов через fontfaceobserver, при повторно добавляем класс к html
if (sessionStorage.fontsLoaded) {
  html.classList.add("webfont-loaded");
} else {
  var script = document.createElement("script");
  script.src = "/js/fontfaceobserver.js"; // Изменить папку темы
  script.async = true;
  // Загрузка подключенных шрифтов (необходимо внести названия шрифтов в переменные)
  script.onload = function () {
  var MontserratRegular = new FontFaceObserver("Montserrat-Regular");
  var MontserratBold = new FontFaceObserver("Montserrat-Bold");
  var YesevaOneRegular = new FontFaceObserver("YesevaOne-Regular");
  var OpenSansRegular = new FontFaceObserver("OpenSans-Regular");
  var MontserratSemiBold = new FontFaceObserver("Montserrat-SemiBold");
    // Загрузка из переменных
    Promise.all([
     MontserratRegular.load(),
     MontserratBold.load(),
     OpenSansRegular.load(),
     YesevaOneRegular.load(),
     MontserratSemiBold.load(),
    ]).then(function () {
      html.classList.add("webfont-loaded");
      sessionStorage.fontsLoaded = true;
      console.log('Шрифты загруженны. Сессия установленна.');
    });
  };
  document.head.appendChild(script);
}
