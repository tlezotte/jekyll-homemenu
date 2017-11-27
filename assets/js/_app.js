/**
 * Open and eModal with iframe link
 *
 * @example $('.modal').on("click", iframeModal);
 * @param {String} title Title for eModal window.
 * @param {String} url URL to display in iframe.
 * @return {Object} eModal.iframe(url, title);
 * @public
 */
function iframeModal() {
    var title = $(this).attr('data-title');
    var url = $(this).attr('data-url');

    return eModal
        .iframe(url, title);
}

/**
 * Store users option to open links in same or new window
 *
 * @example $('#link-status').on("change", linkStatus);
 * @public
 */
function linkStatus() {
    var link_status = $(this).prop('checked');
    $.cookie('link_status', link_status, {
        expires: 365
    });

    if (link_status) {
        $('a').removeAttr('target');
        $(this).bootstrapToggle('on');
    } else {
        $('a:not([href="#"])').attr('target', '_blank');
        $(this).bootstrapToggle('off');
    }
}
// -- toggle the links --
// function linkToggle() {
//     if (cookie_link_status === "false") {
//         $('#link-status').bootstrapToggle('off');
//         $('a:not([href="#"])').attr('target', '_blank');
//     } else {
//         $('a').removeAttr('target');
//         $(this).bootstrapToggle('on');
//     }
// }




/**
 * The jQuery namespace.
 * @external "$"
 * @see {@link http://jquery.com/|jQuery homepage}
 */
$(function () {
    /**
     * A jQuery plugin to access browser cookies.
     * @external "$.cookie"
     * @example $.cookie('name', 'value', {expires: 365});
     * @see {@link https://github.com/carhartl/jquery-cookie|jquery-cookies homepage}
     * @property {string} cookie_link_status Get cookie value for link_status.
     */
    var cookie_link_status = $.cookie('link_status');
    // var targetBlank = (cookie_link_status === "false") ? 'target="_blank"' : '';

    /**
     * fullpage.js Create Beautiful Fullscreen Scrolling Websites.
     * @external "$.fullpage"
     * @see {@link https://alvarotrigo.com/fullPage/|fullpage homepage}
     */
    $('#homepage').fullpage({
        anchors: ['one_apps', 'two_apps'],
        sectionsColor: ['#FFFFFF', '#FFFFFF'],
        navigation: true,
        verticalCentered: false,
        paddingTop: '5em',
        navigationPosition: 'right',
        navigationTooltips: ['ONE', 'TWO']
    });


    /**
     * jQuery mouse event trigger.
     * @function external:"$".on
     * @see {@link https://api.jquery.com/on/|jQuery .on howto}
     */
    $('li').on({
        mouseenter: function () {
            var item_env = '#' + $(this).attr('id') + 'ItemEnv';
            $(item_env).css("visibility", "visible");
        },
        mouseleave: function () {
            var item_env = '#' + $(this).attr('id') + 'ItemEnv';
            $(item_env).css("visibility", "hidden");
        }
    });

    /**
     * Bootstrap popovers adds small overlays of content.
     * @external "$.popover"
     * @see {@link http://getbootstrap.com/javascript/#popovers|Bootstrap popovers howto}
     */
    $('[data-toggle="popover"]').popover({
        trigger: "hover focus"
    });

    /**
     * Bootstrap tooltips adds small hover of content.
     * @external "$.popover"
     * @see {@link http://getbootstrap.com/javascript/#tooltips|Bootstrap tooltips howto}
     */
    $('[data-toggle="tooltip"]').tooltip();

    /**
     * Open modal window on "click".
     * @function external:"$".on
     * @see {@link https://api.jquery.com/on/|jQuery .on howto}
     */
    $('.modal').on("click", iframeModal);

    /**
     * jQuery event trigger.
     * @function external:"$".on
     * @see {@link https://api.jquery.com/on/|jQuery .on howto}
     */
    $('#link-status').on("change", linkStatus);

    /**
     * jQuery hover event menu.
     * @function external:"$".on
     * @see {@link https://api.jquery.com/hover/|jQuery .hover howto}
     */
    $('a.hover-menu').hover(function () {
        $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
    }, function () {
        $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
    });
});
