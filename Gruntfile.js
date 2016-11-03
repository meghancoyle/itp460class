/*global module:false*/
module.exports = function (grunt) {
    grunt.initConfig({

      cssmin: {
        target: {
          files: [{
            expand: true,
            cwd: 'stylesheets',
            src: ['*.css', '!*.min.css'],
            dest: 'stylesheets',
            ext: '.min.css'
          }]
        }
     },


    // define source files and their destinations
   //  uglify: {
   //      files: {
   //          src: ['js/*.js', '!js/*.min.js'],  // source files mask
   //          dest: 'js',    // destination folder
   //          expand: true,    // allow dynamic building
   //          flatten: true,   // remove all unnecessary nesting
   //          ext: '.min.js'   // replace .js to .min.js
   //      }
   //  },
});

cssmin: {
  minify: {
    files: [{
      expand: true,
      cwd: '/stylesheets',
      src: ['*.css', '!*.min.css'],
      dest: '/stylesheets',
      ext: '.min.css'
    }]
  }
}

// load plugins
//grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-cssmin');

// register at least this one task
grunt.registerTask('default', [ 'cssmin' ]);


};
