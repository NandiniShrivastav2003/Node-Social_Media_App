const queue = require('../config/kue');

const commentmailers = require('../mailers/comments_mailer');

queue.process('emails', function (job, done) {
    console.log('emails worker is processing a job', job.data);
    commentmailers.newComment(job.data);
    done();
});