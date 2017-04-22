;(function ($) {
  FastClick.attach(document.body)
  function gen () {
    $('#container').empty()
    var numberColumn = 8
    for (var i = 0; i < numberColumn; ++i) {
      var numberRows = parseInt(Math.random() * 50) + 5
      var flexValueCol = Math.random() * 10
      var col = $('<div class="col" style="flex:' + flexValueCol + ';"></div>')
      $('#container').append(col)
      for (var j = 0; j < numberRows; ++j) {
        var flexValueRow = Math.random() * 10
        var color = (Math.random() > 0.2) ? 'black' : 'white'
        var borderBottom = (Math.random() > 0.5) ? 1 : 0
        col.append('<div class="item" style="flex:' + flexValueRow + ';background-color:' + color + ';margin-bottom:' + borderBottom + 'px;"></div>')
      }
    }
  }
  function mod () {
    $('.col').each(function () {
      $(this).css('flex-grow', Math.random() * 10)
    })
    $('.item').each(function () {
      var color = (Math.random() > 0.2) ? 'black' : 'white'
      $(this).css('flex-grow', Math.random() * 10)
      // $(this).css('background-color', color)
    })
  }
  $('body').on('click', function () {
    $('#overlay').hide()
    mod()
  })
  gen()
})(window.jQuery)
