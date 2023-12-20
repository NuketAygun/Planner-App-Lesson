
var currentTime = dayjs().hour();
var time = 0;
console.log(currentTime);

function displayDate() {
  var currentDay = dayjs().format('dddd, MMMM, D, YYYY');
  $('#currentDay').text(currentDay);
}

function setBackground() {

  if (currentTime < 9) {
    $('#text09').addClass('future');
  } else if (currentTime === 9) {
    $('#text09').addClass('present');
  } else if (currentTime > 9) {
    $('#text09').addClass('past');
  }

  if (currentTime < 10) {
    $('#text10').addClass('future');
  } else if (currentTime === 10) {
    $('#text10').addClass('present');
  } else if (currentTime > 10) {
    $('#text10').addClass('past');
  }

  if (currentTime < 11) {
    $('#text11').addClass('future');
  } else if (currentTime === 11) {
    $('#text11').addClass('present');
  } else if (currentTime > 11) {
    $('#text11').addClass('past');
  }

  if (currentTime < 12) {
    $('#text12').addClass('future');
  } else if (currentTime === 12) {
    $('#text12').addClass('present');
  } else if (currentTime > 12) {
    $('#text12').addClass('past');
  }

  if (currentTime < 13) {
    $('#text13').addClass('future');
  } else if (currentTime === 13) {
    $('#text13').addClass('present');
  } else if (currentTime > 13) {
    $('#text13').addClass('past');
  }

  if (currentTime < 14) {
    $('#text14').addClass('future');
  } else if (currentTime === 14) {
    $('#text14').addClass('present');
  } else if (currentTime > 14) {
    $('#text14').addClass('past');
  }

  if (currentTime < 15) {
    $('#text15').addClass('future');
  } else if (currentTime === 15) {
    $('#text15').addClass('present');
  } else if (currentTime > 15) {
    $('#text15').addClass('past');
  }

  if (currentTime < 16) {
    $('#text16').addClass('future');
  } else if (currentTime === 16) {
    $('#text16').addClass('present');
  } else if (currentTime > 16) {
    $('#text16').addClass('past');
  }

  if (currentTime < 17) {
    $('#text17').addClass('future');
  } else if (currentTime === 17) {
    $('#text17').addClass('present');
  } else if (currentTime > 17) {
    $('#text17').addClass('past');
  }
}
//click event
$('.saveBtn').on('click', function(){
  var keyVal = $(this).prev().val();
  var keyName = $(this).prev().attr('id');
 localStorage.setItem(keyName, keyVal)
})

displayDate();

setBackground()
