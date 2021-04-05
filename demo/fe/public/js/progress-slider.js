console.log($('.progress'))

$('#progress').on('input', function(e) {
    // console.log($(this).val());
    $('.progress').css('width',$(this).val() + '%');
    
})