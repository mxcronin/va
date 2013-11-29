/**
 * Manage the agenda
 */
var Agenda = (function() {
	'use strict';

	var $agendaList, $summaryList, $print, $boxes, $yearline, $agenda;

	var touched = [];
    window.onbeforeunload = function(e){
                var message = 'Are you sure you want to close the agenda?';
                return message;
    };

	//init the agenda
	function init() {
		$agendaList = $('.reveal .agendaList');
		$summaryList = $('.reveal .summaryList');
		$agenda = $('.reveal .agenda');

		$print = $('.reveal .print');

		//init print button
		//TODO: move to interactions.js
		if ($print !== undefined) {
			$print.click(function() {
				window.print();
			});	
		}	

		//inits all box clickables
		//TODO: move to interactions.js
		$boxes = $('.reveal .box');

		if ($boxes !== undefined)
		{
			$boxes.click(function() {
				var $info = $(this).find('.info');
				var animateHeight = $info.hasClass('clicked') ? 50 : 175;
				$info.animate({height: animateHeight+'px'});

				$info.toggleClass('clicked');
			});
		}

		//init yearline effect
		//TODO: move to interactions.js
		$yearline = $('.reveal .yearline');
		if (!$yearline.has('div').length)
		{
			$yearline.prepend('<div></div>');
		}	
		
		var $yearbar = $yearline.find('div');
		var $numbers = $yearline.find('p');
		var i;
		$numbers.click(function() {
			$numbers.removeClass('blueish');
			for (i = 0; i < $numbers.length; i++)
			{
				var number = $numbers[i];
				$(number).addClass('blueish');
				if (this === number)
				{
					$yearbar.animate({width:(50+i*187.5)+'px'});
					return;
				}
			}
		});

		//fixes iframes into colorbox
		//TODO: Move to interactions.js
		$(".reveal .uframe").colorbox.remove();
		$(".reveal .uframe").colorbox({iframe:true, width:"100%", height:"100%"}); 

		//inits toggling of nested lists
		//TODO: Move to interactions.js
		$('.reveal .toggleNestedList').unbind();
		$('.reveal .toggleNestedList').click(function() {
			$(this).find('ul').toggle();
		});


		//inits toggling of medium box
		//TODO: Move to interactions.js
		$('.reveal .mediumBox').unbind();
		$('.reveal .mediumBox').click(function() {
			$(this).toggleClass('clicked');
			$(this).find('ul').toggle();
		});

		//init custom images
		//TODO: Move to interactions.js
		$('.reveal .customImages').unbind();
		$('.reveal .customImages').click(function () {
			var nrOfImages = $(this).data().nrOfImages;
			var currentImage = $(this).data().currentImage;
			currentImage = currentImage === undefined ? 1 : currentImage;
			var newImage = (currentImage < nrOfImages) ? currentImage+1 : 1;
			$(this).find('img').attr('src', 'img/custom' + newImage + '.jpg')
			$(this).data().currentImage = newImage;
		});

		//init dynamic agenda
		var $sections = $('.reveal .slides section[data-key-area="Solutions"]');

		$agendaList.html('');
		$agendaList.append('<div class="arrow"></div>');
		$agendaList.append('<ul>');
		var $ul = $agendaList.find('ul');

		for (i = 0; i < $sections.length; i++)
		{
			$ul.append('<li>'+$($sections[i]).data().localName+'</li>');
		}

		//init dynamic summary
		$summaryList.html('');
		$summaryList.append('<div class="arrow"></div>');
		$summaryList.append('<ul>');
		$ul = $summaryList.find('ul');

		for (i = 0; i < $sections.length; i++)
		{
			var data = $($sections[i]).data();
			$ul.append('<li data-key-name="'+data.keyName+'">'+data.localName+'</li>');
		}

		$('.agendaOpener').unbind();
		$('.agendaOpener').click(function() {
			$agendaList.toggle();
			$summaryList.toggle();
		});

		//if agenda is changed through content editable, update all others too!
		$agenda.find('li').on('blur',function() {

			var listElements = $(this).parent().find('li');

			for (var i = 0; i < listElements.length; i++)
			{
				$($agenda[0]).find('li')[i].innerHTML = listElements[i].innerHTML;
				$($agenda[1]).find('li')[i].innerHTML = listElements[i].innerHTML;
			}
			//updateSummary(); 
		});

		//add back touched classes in summary.
		for (var i = 0; i < touched.length; i++)
		{
			var $listElement = $summaryList.find('li[data-key-name="'+touched[i]+'"]');
			if ($listElement !== null) {
				$listElement.addClass('touched');
			}
		}
	}
	function updateSummary() {	
		   var $listElements = $('.editagenda li');
			for (var i = 0; i < 5; i++)
			{		
				$($agenda[1]).find('li')[i].innerHTML = $listElements[i].innerHTML;
			}
	}
	//update whatever dynamic content there is
	function update() {
		var $presentSection = $('.reveal section.present');

		if ($presentSection.data() === null) {
				return;
		}

		var keyName = $presentSection.data().keyName;

		var $listElement = $summaryList.find('li[data-key-name="'+keyName+'"]');
		if ($listElement !== null) {
			$listElement.addClass('touched');
		}

		touched.push(keyName);
	}

	function reset()
	{
		touched = [];
	}

	//remove stuff
	function exit() {
		$print.unbind();
		$boxes.unbind();
		$yearline.unbind();
		$agenda.unbind();
	}


	return {
		init: init,
		exit: exit,
		reset: reset,
		update: update,
		updateSummary: updateSummary
	};
})();