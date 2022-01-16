# feature-modal-page

This module builds on WordPress, Modularity and jQuery.

Lets you open any page or post in a modal window just with a link to `#modal-page-slug`.

---

Version: 1.2.8

Author: Ben @ https://modularity.group

License: MIT

---

For simple usage name your page or post with a slug beginning with `modal-`.  
Then insert a link to it: `<a href="#modal-my-page">Go</a>`

You can add a data-value to your link to be replaced with `[value]` in content.

You can open a modal manually with JS: `feature_modal_page_open(jQuery, 'page-slug', 'value-to-replace')`

You can hook custom content in the modal with the PHP action: `feature_modal_page_content`

You can react to modal `open`, `close`, `confirm` with jQuery: `$('body').on('modal-page-confirm', ...`

Let the user interact with the modal with this links targets: `#confirm` | `#close`

---

1.2.8 | fix hang-up on non-existing targets

1.2.7 | do_shortcode on modal page content

1.2.6 | rename state classes and action names

1.2.5 | consume core style variables

1.2.4 | adjust consumed css variables

1.2.3 | manage trigger state classes `is-modal-page-opening` and `is-modal-page-open`

1.2.2 | enable any post_type, do action feature_modal_page_content

1.2.1 | add jquery action `feature-modal-page-open` and decode htmlentities and url for [value]

1.2.0 | tweak styles and code

1.1.5 | add hidden close link and fix click event propagation

1.1.4 | enable custom modals trigger for page or post links

1.1.3 | add close by ESC and add page slug as data attribute

1.1.2 | also keep default hook with prefix `wp_ajax_` to work if logged in

1.1.1 | prefix hook with `wp_ajax_nopriv_` to also work if logged out

1.1.0 | enhance with public pages for modals and generalize styles

1.0.0 | initial release
