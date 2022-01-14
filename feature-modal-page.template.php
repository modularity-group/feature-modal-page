<div class="feature-modal-page" data-page="<?= basename(get_the_permalink()); ?>">
  <div class="feature-modal-page__popover">
    <a href="#close"></a>
    <?= str_replace('[value]', $value, do_shortcode(get_the_content())); ?>
    <?php do_action('feature_modal_page_content'); ?>
  </div>
</div>
