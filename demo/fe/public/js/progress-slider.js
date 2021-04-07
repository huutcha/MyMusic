
/**
 * Xử lý tua và render tiến trình bài hát
 */

let audio = document.getElementById('audio');
let progressNode = document.getElementById('progress')
let progress = document.querySelector('.progress')
audio.ontimeupdate = function() {
    let progressMusic = Math.round((audio.currentTime / audio.duration) * 100);
    progressNode.value = progressMusic;
    progress.style.width = progressNode.value + '%';
}

progressNode.onchange = function() {
    audio.currentTime = Math.round((progressNode.value / 100) * audio.duration);
    progress.style.width = progressNode.value + '%';
}
// $('#progress').on('input',function(){
//     $('.progress').css('width',$(this).val() + '%');
// })