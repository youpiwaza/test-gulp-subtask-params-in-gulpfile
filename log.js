// // Files & folders related functions
const {
  task,
} = require('gulp');


module.exports = function(opts) {
  // Warn user when cloning repo
  const logWithArgs = task(`log-with-args-${opts.taskName}`, (done) => {
    console.log('the value is ' + opts.value);
    done();
  });
};
