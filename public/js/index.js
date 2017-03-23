var socket = io();

jQuery('#room').hide();

socket.emit('loadRooms', function (rooms) {
  rooms.forEach((room) => {
    console.log(room);
    var template = jQuery('#room-option-template').html();
    var option = Mustache.render(template, {
      room: room
    });
    
    jQuery('#room-select').append(option);
  });
});

jQuery('#room-select').on("change", function (e) {
  var value = $(this).find("option:selected").attr("value");

  switch (value){
    case "create":
      console.log("create room selected");
      jQuery('#room').show();
      break;
    case "default":
      console.log("default room selected");
      jQuery('#room').val('').hide();
      break;
    default:
      jQuery('#room').val(value);
  }
});