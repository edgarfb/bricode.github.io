var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload;


gulp.task('sass', function(){
    return gulp.src('app/css/style.scss')//lee el archivo
    .pipe(sass())//compila sass
    .pipe(gulp.dest('css'))//guarda en carpeta css
    .pipe(reload({stream : true})); // recarga el navegador
});

gulp.task('html', function(){
    return gulp.src(['app/*.html'])
    .pipe(gulp.dest(''))
    .pipe(reload({stream : true}));
});

gulp.task('htmlArticulos', function(){
    return gulp.src('app/articulos/*.html')
    .pipe(gulp.dest('articulos'))
    .pipe(reload({stream : true}));
});

gulp.task('htmlPruebas', function(){
    return gulp.src('app/pruebas/*.html')
    .pipe(gulp.dest('pruebas'))
    .pipe(reload({stream : true}));
});

gulp.task('js', function(){
    return gulp.src('app/js/script.js')
    .pipe(gulp.dest('js'))
    .pipe(reload({stream : true}));
});

gulp.task('watch', function(){
    gulp.watch(['app/css/style.scss','app/*.html', 'app/pruebas/*.html','app/articulos/*.html', 'app/js/script.js'], ['sass', 'html', 'js', 'htmlArticulos', 'htmlPruebas']);//obsrva cambios en archivo y aplica la tarea 'sass'
});

gulp.task('serve', ['sass', 'html', 'js', 'htmlArticulos', 'htmlPruebas'],function(){
    browserSync({
        server: {
            baseDir: ['','app']
        }
    });
    gulp.start('watch');
});

gulp.task('default', ['serve']); //tarea por defecto
