/*
 After you have changed the settings at "Your code goes here",
 run this with one of these options:
  "grunt" alone creates a new, completed images directory
  "grunt clean" removes the images directory
  "grunt responsive_images" re-processes images without removing the old ones
*/

module.exports = function(grunt) {

  grunt.initConfig({
    responsive_images: {
      dev: {
        options: {
          engine: 'im',
          sizes: [{
            width: 1024,
            suffix: '_1x',
            quality: 30
          }, {
            width: 640,
            height: 480,
            gravity: 'center',
            suffix: '_medium',
            aspectRatio: false,
            quality: 30            
          }, {
            width: 320,
            gravity: 'center',
            suffix: '_small',
            quality: 30  
          }]
        },        

        /*
        You don't need to change this part if you don't change
        the directory structure.
        */
        files: [{
          expand: true,
          src: ['*.{gif,jpg,png}'],
          cwd: 'public/images_src/',
          dest: 'public/images/'
        }]
      }
    },    

    /* Clear out the images directory if it exists */
    clean: {
      dev: {
        src: ['public/images'],
      },
    },

    /* Generate the images directory if it is missing */
    mkdir: {
      dev: {
        options: {
          create: ['public/images']
        },
      },
    },

    /* Copy the "fixed" images that don't go through processing into the images/directory */
    copy: {
      dev: {
        files: [{
          expand: true,
          flatten: true,
          src: 'public/images_src/fixed/*.{gif,jpg,png}',
          dest: 'public/images/fixed'
        }]
      },
    },
  });
  
  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-mkdir');
  grunt.registerTask('default', ['clean', 'mkdir', 'copy', 'responsive_images']);

};
