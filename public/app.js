var socket = io();

function updateJob() {
    let job = document.getElementById('job').value;
    emitUpdateJob(job);
    document.getElementById('job').value = null;
}

function updateJobFromPredefined(event) {
    event = event || window.event;
    job = event.target.dataset.job;
    emitUpdateJob(job);
}

function emitUpdateJob(job) {
    socket.emit('updateJob', job);
    alert(`Job is changed! Current: ${job}`);
}