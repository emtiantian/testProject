var gulp = require('gulp');
//引入组件
var jshint = require('gulp-jshint');
gulp.task("lint",function(){
	gulp.src("./main/js/*.js").pipe(jshint()).pipe(jshint.reporter("default"));
});
gulp.task('default', function() {
  // 将你的默认的任务代码放在这
  	gulp.run("lint");
 	console.log("helow word");
});