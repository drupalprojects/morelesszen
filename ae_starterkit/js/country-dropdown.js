(function($) {
Drupal.behaviors.country_dropdown = {};
Drupal.behaviors.country_dropdown.attach = function(context, settings) {
  var $switcher = $(context).find('.language-switcher-locale-url');
  $switcher.hide();
  var $active = $switcher.find('a.active');
  var default_text = Drupal.t('Choose country');
  if ($active.length > 0) {
    default_text = $active.html();
  }
  var $trigger = $('<a href="#" class="language-switcher-trigger">' + default_text + '</a>')
  .insertBefore($switcher)
  .click(function(e) {
    $switcher.toggle();
    return false;
  });
  var $all = $switcher.find('li, a');
  $switcher.find('a').click(function(event) {
    var $target = $(event.delegateTarget);
    $all.removeClass('active');
    $target.addClass('active').parent().addClass('active');
    $trigger.html($target.html());
    $switcher.hide();
  });
  $('body').click(function(e) {
    $all.removeClass('active');
    $switcher.hide();
  });
};

})(jQuery);
