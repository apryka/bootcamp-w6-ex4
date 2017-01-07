const gulp = require('gulp');
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');
const browserSync = require('browser-sync');
const server = browserSync.create();


gulp.task('build', ()=>{

    gulp.src('./src/**/*.mp4')
      .pipe(gulp.dest('./dist/'))

    gulp.src(['./src/**/*.js'])
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(uglify())
        .pipe( gulp.dest('./dist/'))

})

gulp.task('serve',['build'], ()=>{
    server.init({
        server:{
            baseDir: '.'
        },
        port:8080
    })

    gulp.watch(['./src/**/*.js'],['build'])
    gulp.watch(['./dist/**/*.js'], ()=>{
        server.reload();
    })
})

gulp.task('watch', ()=>{

    gulp.watch(['./src/**/*.js'],['build'])
})
