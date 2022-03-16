const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const autoprefixer = require("gulp-autoprefixer");
//Sass dosyami olusturmustuk, app.scss diye ama bir tane de css dosyamiz olmasi gerekiyordu sass dosyamizi compile edip css e cevirmek icin cunku tarayici scsss den anlamaz, sadece html-css den anlar





   async function css() {
        return gulp
          .src("scss/app.scss")
          .pipe(
            autoprefixer({
              Browserslist: ["last 2 versions"], //css fonksiyonu da bize browser larin kullanacgimiz bazi css kodlarini destekleyecekleri webkit kodlarini  otomatik uygulamasini istiyor
            })
          )
          .pipe(sass({ outputStyle: "expanded" })) //Bu sass dosyami benim tarayicimin ihtyaci olacak sekilde genislet ve bunu yaparken de css isminde klasorumun icerisine yerlestir
          .pipe(gulp.dest("css"));
      }
     async function watchFiles() {
        gulp.watch("scss/*.scss", css); //Uzantisi scss olan tum dosyalari izle, bunlarin hepsine aninda css fonksiyonunu uygula
        gulp.watch("index.html"); //index.html icindeki degisiklikleri de anlik olarak takip et diyoruz
      }
      //Komut satirindas gulp ile kullancagimiz komutlari olusturuyoruz
      gulp.task("css", css); //komut satirinda css yazarsak sen bu dosya icindeki css fonksiyonunu calistir demis oluyoruz
      gulp.task("watch", gulp.parallel(watchFiles)); //Bu bizim izlemesini istedgimiz dosyalarin yollarini
      gulp.task("js", function () {
        return gulp
          .src([
            "node_modules/@fortawesome/fontawesome-free/js/all.min.js",
            "node_modules/jquery/dist/jquery.min.js",
          ])
          .pipe(gulp.dest("js"));
      });

   
   

