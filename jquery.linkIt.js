/**
 * Created by jkim on 6/22/2015.
 * Name: LinkIt
 * Version: 0.1.0
 * License: MIT
 */

(function($){
    $.fn.linkIt = function(options){
        // Default settings
        var settings = $.extend({
            href        : null,
            text        : null,
            target      : '_self'
        }, options);

        // Validate
        if (settings.href == null){
            console.log('you need an href option for linkIt to work');
            return this;
        }

        return this.each(function(){
            var object = $(this);

            if (settings.text == null){
                settings.text = object.text();
            }

            console.log('settings.target: ' + settings.target);
            console.log('settings.href: ' + settings.href);
            console.log('settings.text: ' + settings.text);

            object.wrap('<a target="'+settings.target+'" href="'+settings.href+'"></a>').text(settings.text);
        });
    }
}(jQuery));
