// Character Counter jQuery plugin version 1.0.2
// (c) 2013 Ville Hellman
//
// http://github.com/efexen/jquery-character-counter
//
// Released under MIT license.
(function ($) {
    $.fn.characterCounter = function (options) {
        var defaults = {
            wrapperElement: 'p',
            invalidClass: 'invalid'
        }

        var options = $.extend(defaults, options);

        return this.each(function () {
            var $this = $(this);
            var max_length = $this.data("max-length");

            if (max_length === undefined) {
                throw "jQuery Character Counter: Couldn't find data-max-length attribute on attached element"
            }

            if ($this.next(".character_counter").length > 0) { return; }
            var counter_label = $(document.createElement(options.wrapperElement));
            counter_label.text(max_length).addClass('character_counter');
            $this.after(counter_label);

            function updateCount(charCount) {
                counter_label.text(max_length - charCount);
                counter_label.toggleClass(options.invalidClass, (max_length - charCount) < 0);
            }

            updateCount($this.val().length);

            $this.on('keyup', function () {
                updateCount($(this).val().length);
            });
        });
    };
})(jQuery);