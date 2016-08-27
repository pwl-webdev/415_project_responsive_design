'use strict';
(function($){

    var prefix = 'idc-';
    var cardPrefix = prefix+'card-';
    var version = '0.0.2';
    var endpoint = 'https://index.co/api/';

    var makeHoverCardHtml = function(data) {
    	if(!data || !data.profile || !data.info) {
        	throw 'BAD_STRUCTURE';
    	}
    	var $header = $('<div></div>').addClass(cardPrefix+'header');
    	$header.append($('<img></img>').attr({
        	'src': data.profile.avatar,
        	'class': cardPrefix+'header-avatar'
    	}));
    	$header.append($('<h2></h2>').attr({
        	'class': cardPrefix+'header-title'
    	}).text(data.profile.name));

    	var $headerTags = $('<ul></ul>').attr({
        	'class': cardPrefix+'header-tags'
    	})
        if(data.info.market) $headerTags.append($('<li></li>').text(data.info.market));
    	if(data.info.country) $headerTags.append($('<li></li>').text(data.info.country));
    	$header.append($headerTags);

    	var $facts = $('<div></div>').addClass(cardPrefix+'facts');
    	var $factsTags = $('<ul></ul>').attr({
        	'class': cardPrefix+'facts-tags'
    	});
    	if(data.info.founded) $factsTags.append($('<li></li>').text('Founded in ' + data.info.founded));
    	if(data.info.raised) $factsTags.append($('<li></li>').text('Raised ' + data.info.raised));
    	if(data.info.employees) $factsTags.append($('<li></li>').text(data.info.employees + ' employees'));
    	$facts.append($factsTags);

    	var $footer = $('<div></div>').addClass(cardPrefix+'footer').html('<p>Click the icon below to view profile</p>');

    	var $card = $('<div></div>').addClass(prefix+'card').append($header).append($facts).append($footer);
    	return $card;
    }




    var attach = function($element) {

        var parser = document.createElement('a');
        parser.href = $element.attr('href');

        var company = parser.pathname.split('/')[2];
        var rq;
        var hovercard;
        var url = endpoint+'company/'+company+'?version='+version;

        $element.attr('target', '_blank').attr('href', parser.href + '?utm_source=thenextweb.com&utm_medium=referral&utm_campaign=hover-'+company);
		$element.on('mouseover',function(ev){
			if(!$element.data(prefix+'hasIndexPopover') === true) {
				$element.data(prefix+'hasIndexPopover',true);
				rq = $.ajax({
                    dataType: "json",
                    type: 'GET',
    				url: url
                });
				rq.done(function(data){
    				try {
    					hovercard = new app.hovercard({
        					prefix: 'idc-',
    						html: makeHoverCardHtml(data),
    						top: $element.offset().top,
    						left: $element.offset().left + ($element.outerWidth() / 2)
    					});
    					hovercard.onClose(function(){
    						$element.data(prefix+'hasIndexPopover',false);
    					});
    					hovercard.place();
    				} catch(error){
        				console.error('[index hovercards] parsing error ('+error+') loading hovercard for "'+company+'" at endpoint "'+url+'"');
    				}
				})
				rq.fail(function(xhr,error){
    				if(error !== 'abort'){
                        console.error('[index hovercards] http error ('+error+') loading hovercard for "'+company+'" at endpoint "'+url+'"');
                    }
				})
			}
		});
		$element.on('mouseout',function(ev){
			if(rq.state() !== 'resolved'){
				$element.data(prefix+'hasIndexPopover',false);
				rq.abort();
			}
		});

    };




    $(function(){
        $('a.'+prefix+'hasIcon').each(function(){attach($(this))});
    });




})(jQuery);