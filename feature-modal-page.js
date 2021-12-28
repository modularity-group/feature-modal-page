jQuery(function($){

  $('a[href*="#modal-"]').click(function(e){
    e.preventDefault();
    const $this = $(this);
    const pageSlug = $this.attr('href').split('#')[1];
    const replaceValue = $this.attr('data-value');

    $('.is-modal-page-opening').removeClass('is-modal-page-opening');
    $this.addClass('is-modal-page-opening');
    feature_modal_page_open($, pageSlug, replaceValue);
  });

});

function feature_modal_page_close($, $modal) {
  if ($modal) {
    $modal.remove();
    $('body').trigger('modal-page-close');
    $('.is-modal-page-open').removeClass('is-modal-page-open');
  }
}

function feature_modal_page_open($, pageSlug, replaceValue) {
  const $body = $('body');
  $.ajax({
    type: 'POST',
    url: '/wp-admin/admin-ajax.php',
    data: 'action=feature_modal_page_get&target=' + pageSlug + '&value=' + replaceValue,
    success: function(content) {
      $body.append(content);
      const $modal = $body.find('.feature-modal-page');

      $modal.click(function(e){
        if (e.target.className === 'feature-modal-page') {
          feature_modal_page_close($, $modal);
        }
      });

      $(document).keyup(function(e){
        if (e.key === 'Escape') {
          feature_modal_page_close($, $modal);
        }
      });

      $modal.find('a[href="#close"]').click(function(e){
        e.preventDefault();
        feature_modal_page_close($, $modal)
      });

      $modal.find('a[href="#confirm"]').click(function(e){
        e.preventDefault();
        $body.trigger('modal-page-confirm');
        feature_modal_page_close($, $modal)
      });

      $('.is-modal-page-opening').removeClass('is-modal-page-opening').addClass('is-modal-page-open');

      $('body').trigger('modal-page-open');
    }
  });
}
