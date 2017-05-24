function findTimezone(){
    console.log("in");
    var timezone =  $('#first').val() + "/" + $('#second').val() ;
    var date = $('#date').val();
    if(date){
$('#timzone').val(moment(date).utc().tz(timezone.toString().trim()).format('z'));
    }
    else{
$('#timzone').val(moment.utc().tz(timezone.toString().trim()).format('z'));
    }
    
}