var gulp=require('gulp')

const sass = require('gulp-sass')(require('sass'));

gulp.task('merhaba', function () {
    return gulp.src('./scss/main.scss')
    .pipe(sass())//burda bunu scss den gecirmemiz gerekiyor ve bizde gulp-sass dosyasini development sureci icin install ederiz
    .pipe(gulp.dest('./'))//ana dizine cikar bu dosyayi al sass dan gecir ana dosyaya cikar
})
//Burda bizim css kodlarimizi ana dosyamiza otomatik olusturuyor..
gulp.task('izle', function(){
    gulp.watch('./scss/**/*.css',
    gulp.series['merhaba'])
})
//./scss/**/*.main.scss scss in altinda olan tum klasorler alt klasorler de dahil izle, ve adi ne olursa olsun uzantisi scss olan herseyi kontrol et ve buralarda herhangi bir degisiklik olursa merhaba yi calistir diyoruz