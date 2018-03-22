'use strict'

const gulp = require('gulp')
const nodemon = require('gulp-nodemon')

gulp.task('default', () => {
  nodemon({
    script: 'server.js', // run this file when ever this task is triggered
    ext: 'js', // look for any changes in the files with these extensions
    env: {
      PORT: 8080 // this is the development version of port you want to listen to, can be different from actual port
    },
    ignore: ['./node_modules']
  })
  .on('restart', () => {
    console.log('Restarting server')
  })
})
