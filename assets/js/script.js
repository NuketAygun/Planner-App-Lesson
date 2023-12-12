
function displayDate() {

    var currentDay = dayjs().format('dddd, MMMM, D, YYYY');
    $('#currentDay').text(currentDay);
  }
  displayDate(); 
  

  var currentTime = dayjs().hour();
  var time = 0;

  if (currentTime<9){
    $('textarea.col-md-10').addClass('future');
    $('textarea.col-md-10').addClass('bg-success');
  }else if (currentTime === 9 ){
    $('textarea.col-md-10').addClass('present');
    $('textarea.col-md-10').addClass('present');
  }else if (currentTime > 9 ){
    $('textarea.col-md-10').addClass('past');
    $('textarea.col-md-10').addClass('bg-secondary-subtle');
  }
  if (currentTime<10){
    $('textarea.col-md-10').addClass('future');
    $('textarea.col-md-10').addClass('bg-success');
  }else if (currentTime === 10 ){
    $('textarea.col-md-10').addClass('present');
    $('textarea.col-md-10').addClass('present');
  }else if (currentTime.hour() > 10 ){
    $('textarea.col-md-10').addClass('past');
    $('textarea.col-md-10').addClass('bg-secondary-subtle');
  }
  if (currentTime <11){
    $('textarea.col-md-10').addClass('future');
    $('textarea.col-md-10').addClass('bg-success');
  }else if (currentTime === 11 ){
    $('textarea.col-md-10').addClass('present');
    $('textarea.col-md-10').addClass('bg-danger');
  }else if (currentTime > 11 ){
    $('textarea.col-md-10').addClass('past');
    $('textarea.col-md-10').addClass('bg-secondary-subtle');
  }
  if (currentTime <12){
    $('textarea.col-md-10').addClass('future');
    $('textarea.col-md-10').addClass('bg-success');
  }else if (currentTime === 12 ){
    $('textarea.col-md-10').addClass('present');
    $('textarea.col-md-10').addClass('bg-danger');
  }else if (currentTime > 12 ){
    $('textarea.col-md-10').addClass('past');
    $('textarea.col-md-10').addClass('bg-secondary-subtle');
  }
  if (currentTime <13){
    $('textarea.col-md-10').addClass('future');
    $('textarea.col-md-10').addClass('bg-success');
  }else if (currentTime  === 13 ){
    $('textarea.col-md-10').addClass('present');
    $('textarea.col-md-10').addClass('bg-danger');
  }else if (currentTime > 13 ){
    $('textarea.col-md-10').addClass('past');
    $('textarea.col-md-10').addClass('bg-secondary-subtle');
  }
  if (currentTime <14){
    $('textarea.col-md-10').addClass('future');
    $('textarea.col-md-10').addClass('bg-success');
  }else if (currentTime === 14 ){
    $('textarea.col-md-10').addClass('present');
    $('textarea.col-md-10').addClass('bg-danger');
  }else if (currentTime > 14 ){
    $('textarea.col-md-10').addClass('past');
    $('textarea.col-md-10').addClass('bg-secondary-subtle');
  }
  if (currentTime <15){
    $('textarea.col-md-10').addClass('future');
    $('textarea.col-md-10').addClass('bg-success');
  }else if (currentTime === 15 ){
    $('textarea.col-md-10').addClass('present');
    $('textarea.col-md-10').addClass('bg-danger');
  }else if (currentTime > 15 ){
    $('textarea.col-md-10').addClass('past');
    $('textarea.col-md-10').addClass('bg-secondary-subtle');
  }
  if (currentTime <16){
    $('textarea.col-md-10').addClass('future');
    $('textarea.col-md-10').addClass('bg-success');
  }else if (currentTime === 16 ){
    $('textarea.col-md-10').addClass('present');
    $('textarea.col-md-10').addClass('bg-danger');
  }else if (currentTime > 16 ){
    $('textarea.col-md-10').addClass('past');
    $('textarea.col-md-10').addClass('bg-secondary-subtle');
  }
  if (currentTime<17){
    $('textarea.col-md-10').addClass('future');
    $('textarea.col-md-10').addClass('bg-success');
  }else if (currentTime === 17 ){
    $('textarea.col-md-10').addClass('present');
    $('textarea.col-md-10').addClass('bg-danger');
  }else if (currentTime > 17 ){
    $('textarea.col-md-10').addClass('past');
    $('textarea.col-md-10').addClass('bg-secondary-subtle');
  }

 

