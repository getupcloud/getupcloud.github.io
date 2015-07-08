var GMaps = function() {};

GMaps.prototype.initialize = function() {
	var _this = this;
	var geocoder = new google.maps.Geocoder();
  
  this.vrt = 0.005 / 1920;
  this.width = function() { return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth; };
  this.lat = -46.6497544;

	this.myLatlng = {
    map: new google.maps.LatLng(-23.5778483,lat + ( this.vrt * this.width() )),
    local: new google.maps.LatLng(-23.5778483,-46.6497544)
  };
  this.mapOptions = {
    center: _this.myLatlng.map,
    zoom: 16,
    maxZoom: 16,
    minZoom: 16,
    disableDefaultUI: true,
    draggable: false,
    disableDoubleClickZoom: true,
    mapTypeControl: false,
    rotateControl: false,
    panControl: false,
    scrollwheel: false
  };
  this.map = new google.maps.Map(document.getElementById('map-canvas'),
    _this.mapOptions);

  this.marker = new google.maps.Marker({
    position: _this.myLatlng.local,
    map: map,
    title: 'Rua Doutor Fláquer, 115/34A'
  });
};

GMaps.prototype.resize = function() {
  this.myLatlng = {
    map: new google.maps.LatLng(-23.5778483,lat + ( this.vrt * this.width() )),
    local: new google.maps.LatLng(-23.5778483,-46.6497544)
  };

	this.map.setCenter(this.myLatlng.map);
};

var ContactForm = function() {
  var _this = this;

  this.form = $('#contact form');
  this.fields = {
    name: _this.form.find('[name="name"]'),
    company: _this.form.find('[name="company"]'),
    email: _this.form.find('[name="email"]'),
    phone: _this.form.find('[name="phone"]'),
    message: _this.form.find('[name="message"]'),
    button: _this.form.find('button')
  };

  this.messageReport = {
    content: this.form.find('.message-report'),
    errorContent: this.form.find('.message-report .lst-error')
  };

  this.validation = {};
  this.validation.exclude  = /[^@\-\.\w]|^[_@\.\-]|[\._\-]{2}|[@\.]{2}|(@)[^@]*\1/;
  this.validation.check    = /@[\w\-]+\./;
  this.validation.checkend = /\.[a-zA-Z]{2,3}$/;

  this.submiting = false;

  $('[data-mask]').each(function() {
    var m = $(this).data('mask');
    $(this).mask(m);
  });

  this.form.on('submit' , function() {
    _this.send();
    return false;
  });
};

ContactForm.prototype.send = function() {
  if (this.submiting) return false;

  var _this = this;
  var valid = true;  

  var emailValue   = this.fields.email.val();
  var emailInvalid = ((emailValue.search(this.validation.exclude) != -1) || (emailValue.search(this.validation.check)) == -1) || (emailValue.search(this.validation.checkend) == -1);

  (this.fields.name.val().length < 1)       ? valid = !this.fields.name.addClass('error')     : this.fields.name.removeClass('error');
  (emailInvalid)                            ? valid = !this.fields.email.addClass('error')    : this.fields.email.removeClass('error');  
  (this.fields.message.val().length < 1)    ? valid = !this.fields.message.addClass('error')  : this.fields.message.removeClass('error');

  if (valid) {
    
    this.submiting = true;
    this.fields.button.addClass('loading');

    var dataFields = {
      name: this.fields.name.val(),
      email: this.fields.email.val(),
      company: this.fields.company.val(),
      phone: this.fields.phone.val(),
      message: this.fields.message.val(),
    };

    var save = $.post('http://127.0.0.1:8080/contact/' , dataFields);
    //var save = $.post('http://broker.getupcloud.com/getup/contato' , dataFields);
    save.done(
      function(transport) {
        _this.messageReport.errorContent.empty();

        if (transport.status == "ok") {
          _this.fields.name.val('').blur();
          _this.fields.email.val('').blur();
          _this.fields.message.val('').blur();
          _this.fields.company.val('').blur();
          _this.fields.phone.val('').blur();
          
          _this.messageReport.content.addClass('active status-ok');
          setTimeout(function() {
            _this.messageReport.content.removeClass('active status-ok');
          },3000);
        }

        _this.submiting = false;
        _this.fields.button.removeClass('loading');
      }
    ).fail(function(transport) {

      if (transport.status == 400) {
        var errors = transport.responseJSON;
        var msg = [];

        _this.messageReport.errorContent.empty();

        for (var field in errors) {
          var value = errors[field][0];
          $('[name=' + field + ']').addClass('error');
          msg.push('<li>' + field + ': ' + value + '</li>');
        }

        _this.messageReport.errorContent.append('<ul>' + msg.join('') + '</ul>');
        _this.messageReport.content.addClass('active status-error');

        setTimeout(function() {
          _this.messageReport.content.removeClass('active status-error');
        },5000);
      }
      else {
        _this.messageReport.errorContent.append('<ul><li>Server error</li></ul>');
        _this.messageReport.content.addClass('active status-error');

        setTimeout(function() {
          _this.messageReport.content.removeClass('active status-error');
        },5000);
      }

      _this.submiting = false;
      _this.fields.button.removeClass('loading');

    }, 'json');
  }  
};


// export
window.GMaps = new GMaps();
window.ContactForm = new ContactForm();

google.maps.event.addDomListener(window, 'load', window.GMaps.initialize);
google.maps.event.addDomListener(window, 'resize', window.GMaps.resize);
