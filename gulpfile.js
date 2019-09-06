// // Resources
// Plugins
const {
  series,
  task,
} = require('gulp');


var val = 'Hello there';


// Defines 'log-with-args'
require('./log')({ taskName: 'hello', value: val});
require('./log')({ taskName: 'goodbye', value: "Cya around lel"});


task('default', series('log-with-args-hello', 'log-with-args-goodbye'));















//
