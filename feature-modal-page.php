<?php

add_action('wp_ajax_feature_modal_page_get', function(){
  feature_modal_page_get();
  exit;
});

add_action('wp_ajax_nopriv_feature_modal_page_get', function(){
  feature_modal_page_get();
  exit;
});

function feature_modal_page_get() {
  if (isset($_POST['target'])) {
    $post = new WP_Query(array(
      'post_type' => array('page'),
      'posts_per_page' => 1,
      'pagename' => strip_tags($_POST['target'])
    ));
    if (!$post || !$post->have_posts()) {
      $post = new WP_Query(array(
        'post_type' => 'any',
        'posts_per_page' => 1,
        'name' => strip_tags($_POST['target'])
      ));
    }
    if ($post->have_posts()) {
      while ($post->have_posts()) {
        $post->the_post();
        $value = isset($_POST['value']) ? urldecode(html_entity_decode(strip_tags($_POST['value']))) : '';
        include_once "feature-modal-page.template.php";
      }
    }
  }
}
