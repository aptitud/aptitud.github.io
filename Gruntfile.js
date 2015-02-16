// howto enable livereload
//
// install node
// npm install grunt
// cd .; npm install
// grunt server
// open browser http://localhost:8080/?local=true
// change a file and watch the browser
module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        watch: {
            options: {livereload: true},
            all: {
                files: ['**/*.html', 'js/*.js', '**/*.css', '**/*.json']
                //files: ['**/*.js', '**/*.html', '**/*.css'],
            }
        },


        // grunt-contrib-connect will serve the files of the project
        // on specified port and hostname
        connect: {
            all: {
                options: {
                    port: 8080,
                    hostname: "0.0.0.0",
                    livereload: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');

    // Default task(s).
    grunt.registerTask('default', []);

    grunt.registerTask('server', ['connect', 'watch']);

};