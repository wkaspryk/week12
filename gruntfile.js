module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    cssmin: {
	  combine: {
		files: {
     	 'assets/output.css': ['assets/demo.css', 'assets/two.css']
  		  }
	   }
	},
	 markdown: {
    all: {
      files: [
        {
          expand: true,
          src: '*.md',
          dest: 'assets/html/',
          ext: '.html'
        }
      ]
    }
  }
  });

	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-markdown');

  // Default task(s).
  grunt.registerTask('default', ['cssmin', 'markdown']);
  

};