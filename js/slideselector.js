var SlideSelector = (function () {
	'use strict';

	var type, subtype, customerType, maxColumns = 10, width = 100, height = 100;

	var $slideSelector, $selectedSlides, $allSlides, $sorting, $sortingButtons, $allButton;

	var allSlidesArray = [], selectedSlidesArray = [], notSelectedSlidesArray = [], $sectionsArray = [];

	var sortingTags = {"household" : [
						["all","All"],
						["dailyBanking","Daily Banking"],
						["savingsAndPension","Savings & Pension"],
						["news","News"],
						["insurance","Insurance"],
						["introduction","Intro/follow-up"],
						["housing","Housing"],
						["aboutNordea","Other/Nordea"]], 
						"corporate": [
						["all","All"],
						["markets","Markets"],
						["nordeaFinance","Nordea Finance"],
						["cashManagement","Cash Management"],
						["savingsAndPension","Savings and Pension"],
						["news","News"],
						["introduction","Intro/follow-up"],
						["aboutNordea","Other/Nordea"]]};

	/**
	 * Init slide selector and load json data
	 */
	function init(_type, _subtype, _customerType) {

		$slideSelector = $('.slideSelector');
		$selectedSlides = $('.selectedSlides');
		$allSlides = $('.allSlides');
		$sorting = $('.sorting');

		if (_type != type || _subtype != subtype || _customerType != customerType)
		{
			type = _type;
			subtype = _subtype;
			customerType = _customerType;

			reset();
		}


		$slideSelector.fadeIn(1200);

		$('.reveal').hide();
		$('.timeline').hide();

		$(document).keypress(onKeyPress);

		//listen for launch button
		$slideSelector.find('.next').click(function() {
			$('html, body').animate({
				scrollTop: 0
			}, 200);
			launch();
		});

		$slideSelector.find('.clearData').click(function() {
			resetSlideCache();
		});

		$slideSelector.find('.back').click(function() {
			back();
		});

		$sortingButtons = $slideSelector.find('.sorting button');
		$sortingButtons.click(function() {
			var $this = $(this);
			var sortTag = $this.data().sortTag;
			$this.toggleClass('selected');


			var sortTags = [];

			for (var i = 0; i < $sortingButtons.length; i++)
			{
				var $sortingButton = $($sortingButtons[i]);
				if ($sortingButton.hasClass('selected'))
					sortTags.push($sortingButton.data().sortTag);
			}

			if (sortTag === "all" || sortTags.length === 0)
			{
				$sortingButtons.removeClass('selected');
				$allButton.addClass('selected');
				$allSlides.find('section').show();
				return;
			}

			$allButton.removeClass('selected');

			var $allSlidesTemp = $allSlides.find('section');
			for (i = 0; i < $allSlidesTemp.length; i++)
			{
				var $slide = $($allSlidesTemp[i]);
				$slide.hide();

				for (var j = 0; j < sortTags.length; j++)
				{
					sortTag = sortTags[j];
					if ($slide.data().tags.search(sortTag) > -1)
					{ 
						$slide.show();
						break;
					}
				}
			}
		}).trigger('change');

		//init tutorial
		$slideSelector.find('.info').click(function() {
			$(".tutorial2").colorbox({rel:'tutorial2', transition:"fade", open: "true"});
		});

		//if resized, adjust layout
		window.addEventListener( 'resize', adjustLayout, false );

		$('.titleHeader h2').html("<span>"+Templates.localize("config"+subtype.capitalize())+"</span> - "+Templates.localize("config"+type.capitalize()));
	}

	function onKeyPress(e) {
		if (e.keyCode === 13)
			launch();
	}

	/**
	 * Layout slides after filtering
	 */
	function layoutSlides() {
		
		var i, $slide, $content, data, html = "";

		//add content from generated templates
		var l = selectedSlidesArray.length;
		for (i = 0; i < l; i++)
		{
			$slide = $(selectedSlidesArray[i]);
			data = $slide.data();
			$content = $('<section class="sortableSlide"><h1>'+data.localArea+'</h1><p>'+data.localName+'</p></section>');
			$content.attr('data-local-name', data.localName);
			$content.attr('data-local-area', data.localArea);
			$content.attr('data-key-area', data.keyArea);
			$content.attr('data-key-name', data.keyName);
			$content.attr('data-locked', data.locked);
			$content.attr('data-tags', data.tags);
			$content.attr('data-content', $slide.outerHTML());
			$content.attr('data-id', data.id);

			if (data.locked) 
			{
				$content.find('p').append('<i class="icon-lock"></i>');
				$content.addClass('locked');
			}
			else 
			{
				$content.find('p').append('<span class="eye icon-eye-open"></span>');
			}

			html += $content.outerHTML();
		}
		
		$selectedSlides.html(html);
		//adjust size of selected slides
		var columns = selectedSlidesArray.length > maxColumns ? maxColumns : selectedSlidesArray.length;
		var rows = Math.floor(selectedSlidesArray.length / maxColumns) +1;
		$selectedSlides.css('width','100%');
		$selectedSlides.css('height','102px');
		
		//add content from JSON to all slides
		html = "";

		l = notSelectedSlidesArray.length;
		for (i = 0; i < l; i++)
		{
			$slide = $(notSelectedSlidesArray[i]);
			data = $slide.data();
			html += '<section class="sortableSlide" data-key-area="'+data.keyArea+'" data-key-name="'+data.keyName+'" data-local-area="'+data.localArea+'" data-local-name="'+data.localName+'" data-locked="'+data.locked+'" data-content="'+escapeHtml($slide.outerHTML())+'" data-tags="'+data.tags+'" data-id="'+data.id+'"><h1>'+data.localArea+'</h1><p>'+data.localName+'<span class="eye  icon-eye-open"></span></p></section>';
		}

		$allSlides.html(html);

		$slideSelector.find('.eye').mouseenter(function(event) {
			var $this = $(this);
			var content = $this.parent().parent().data().content; 
			var top = ($this.offset().top+20);
			var left = ($this.offset().left + 20);
			top = top > 500 ? top - 205 : top;
			left = left > 800 ? left - 290 : left;
			$('body').append('<div style="display:none;top:'+top+'px;left:'+left+'px" class="reveal preview">'+content + '</div>');
			$('body .reveal.preview').fadeIn(1000);
		}).mouseleave(function() {
			$('body .reveal.preview').remove();
		});

		//set slides to be sortable
		$allSlides.sortable({
				connectWith: ".connectedSortable",
				cancel: 'section.locked',
				cursorAt: { left: 5 },
				receive: function(event, ui) {
						ui.item.css('width',width+'px');
						$(ui.item.find('h1')).text(ui.item.data().localArea);
					}
		}).disableSelection();

		$selectedSlides.sortable({
			connectWith: ".connectedSortable",
				cancel: 'section.locked',
				cursorAt: { left: 5 },
			receive: function(event, ui) {
					adjustLayout();
			},
				stop: function(event, ui) {
					adjustLayout();
				}
		}).disableSelection();

		adjustLayout();
	}
	
	var entityMap = {
	    "&": "&amp;",
	    "<": "&lt;",
	    ">": "&gt;",
	    '"': '&quot;',
	    "'": '&#39;',
	    "/": '&#x2F;'
	  };

	  function escapeHtml(string) {
	    return String(string).replace(/[&<>"'\/]/g, function (s) {
	      return entityMap[s];
	    });
	  }

	/**
	 * Adjust the layout of selected slides.
	 */
	function adjustLayout() {
		var $sortableSlides = $('.selectedSlides section.sortableSlide');
		var nrOfSlides = $sortableSlides.length;

		var ww = window.innerWidth / nrOfSlides;
		$sortableSlides.css('width',ww+'px');

		var w = (nrOfSlides+1) * ww;
		$selectedSlides.css('width',w+'px');

		var $sectionsArray = $('.selectedSlides section');

		var currentArea = '';

		var l = $sectionsArray.length;
		for (var i = 0; i < l; i++)
		{
			var $section = $($sectionsArray[i]);
			var sectionArea = $section.data().keyArea;
			var $title = $section.find('h1');
			if (currentArea !== sectionArea)
			{
				$title.text($section.data().localArea);
				$title.addClass('first');

				currentArea = sectionArea;
			}
			else
			{
				$title.text('');
				$title.removeClass('first');
			}
		}

		$allSlides.css('height',(window.innerHeight - 400 - 90)+'px');
	}

	/**
	 * Launch slide show
	 */
	function launch()
	{
		//hide selector elements
		//display slideshow and turn off scroll
		var $loadingBarBgr = $('#loadingOverlay .bgr');
		$loadingBarBgr.css('width', '0');
		
		$(document).unbind('keypress', onKeyPress);
		
		$('#loadingOverlay').fadeIn(function() {

			$slideSelector.hide();
			populateSlides();
			
			$('.reveal').show();
			$('.timeline').show();
			$('.noteblock').show();
			
			//DONT REMOVE! scroll to top before entering slideshow
			window.scrollTo(0,0);

			// Full list of configuration options available here:
			// https://github.com/hakimel/reveal.js#configuration
			Reveal.initialize({
				controls: false,
				progress: false,
				history: true,
				center: false,
				keyboard: false,
				maxScale: 2,
				minScale: 0.2,
				rollingLinks: false,

				theme: Reveal.getQueryHash().theme, // available themes are in /css/theme
				transition: Reveal.getQueryHash().transition || 'linear', // default/cube/page/concave/zoom/linear/fade/none
				transitionSpeed: 'slow',

				// Optional libraries used to extend on reveal.js
				dependencies: [
					{ src: 'lib/js/classList.js', condition: function() { return !document.body.classList; } },
					{ src: 'plugin/markdown/marked.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
					{ src: 'plugin/markdown/markdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
					//{ src: 'plugin/highlight/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } },
					{ src: 'plugin/zoom-js/zoom.js', async: true, condition: function() { return !!document.body.classList; } },
					{ src: 'plugin/notes/notes.js', async: true, condition: function() { return !!document.body.classList; } }
					// { src: 'plugin/search/search.js', async: true, condition: function() { return !!document.body.classList; } }
					// { src: 'plugin/remotes/remotes.js', async: true, condition: function() { return !!document.body.classList; } }
				]
			});

			Notes.init();
			Agenda.init();
			Motivator.init();
			Motivator2.init();
			Timeline.populateSlides();
			app.animationController.init();


			$(document).unbind('keypress', launch);

			$('.clearData').show();

			$loadingBarBgr.animate({width: '10%'}, 200, 'linear',function() {
				$loadingBarBgr.animate({width: '35%'}, 600, 'swing',function() {
					$loadingBarBgr.animate({width: '43%'}, 800, 'linear', function() {
						$loadingBarBgr.animate({width: '100%'}, 400, 'linear',function() {
							$('#loadingOverlay').fadeOut(400, function() {
							});
						});
					});
				});
			});
		});
	}

	/**
	 * Populate slides and backgrounds in reveal DOM
	 */
	function populateSlides(callback) {

		var $slides = $('.reveal .slides');
		var $backgrounds = $('.reveal .backgrounds')

		var newSlidesArray = "";
		var newBackgrounds = "";

		var $dataSlides = $('#data');

		var $startSlides = $selectedSlides.find('section.sortableSlide');
		var n = $startSlides.length;
		for (var i = 0; i < n; i++)
		{
			var $slide = $($startSlides[i]);
			var data = $slide.data();
			var sourceSlideHTML;
			var $sourceSlide;

			var $existingSlide = $slides.find('[data-id="'+data.id+'"]');
			if ($existingSlide.length)
			{
				sourceSlideHTML = $existingSlide.outerHTML();
			}
			else
			{
				sourceSlideHTML = $dataSlides.find('[data-id="'+data.id+'"]').outerHTML();
			}

			$sourceSlide = $(sourceSlideHTML);
			newSlidesArray += sourceSlideHTML;
			var sourceData = $sourceSlide.data();
			var backgroundImage = sourceData.backgroundImage;
			var attachment = sourceData.backgroundType == Templates.BACKGROUND_TYPE_RIGHT ? '' : 'fixed';
			if (backgroundImage != "img/")
				newBackgrounds += '<div data-id="'+data.id+'" style="background: url('+backgroundImage+') no-repeat center center '+attachment+'; background-size: cover"></div>';
			else
				newBackgrounds += '<div></div>';
		}		

		$slides.html(newSlidesArray);
		$backgrounds.html(newBackgrounds);
	}

	/**
	 * Go back to config
	 */
	function back() {
		Config.initConfig();

		//hide selector elements
		$slideSelector.fadeOut(function() {
			//display slideshow and turn off scroll
			$('.config').fadeIn();
		});

		exit();
	}

	/**
	 * Filter slides on tag
	 */
	function filterSlides(slideArray, filterTag) {

		var filteredSlides = [];
             
		var l = slideArray.length;
		for (var i = 0; i < l; i++)
		{
			var $slide = $(slideArray[i]);

			var tags = $slide.data().tags.split(',');
			var n = tags.length;
			for (var j = 0; j < n; j++)
			{
				var tag = tags[j];

				if (filterTag === tag)
				{
					filteredSlides.push($slide);
					break;
				}
			}
		}

		return filteredSlides;
	}

	/**
	 * Remove listeners and empty html
	 */
	function exit() {

		$slideSelector.find('.next').unbind();
		$slideSelector.find('.back').unbind();
		$slideSelector.find('.clearData').unbind();
		$slideSelector.find('.info').unbind();
		$(document).unbind('keypress', onKeyPress);

		window.removeEventListener( 'resize', adjustLayout, false );
	}

	function reset()
	{
		allSlidesArray = [];
		selectedSlidesArray = [];
		notSelectedSlidesArray = [];

		$selectedSlides.html('');
		$allSlides.html('');
		$sorting.html('');
     
		var sortingTypeTags = sortingTags[type];

		for (var i = 0; i < sortingTypeTags.length; i++)
		{
			var tags = sortingTypeTags[i];
			$sorting.append('<button data-sort-tag="'+tags[0]+'">'+tags[1]+'</button>');
		}

		$allButton = $slideSelector.find('.sorting button[data-sort-tag="all"]');
		$allButton.addClass('selected');

		$slideSelector.find('.selectedSlidesTitle h2').text(subtype + ' meeting - ' + type);

		//Load from innerHtml
		$sectionsArray = $('#data section');
		
		allSlidesArray = filterSlides($sectionsArray, Config.language);
		allSlidesArray = filterSlides(allSlidesArray, customerType);
		allSlidesArray = filterSlides(allSlidesArray, type);
		selectedSlidesArray = filterSlides(allSlidesArray, subtype);
         
		var l = allSlidesArray.length;
		var n = selectedSlidesArray.length;
		for (var i = 0; i < l; i++)
		{
			var selected = false;

			for (var j = 0; j < n; j++)
			{
				if (allSlidesArray[i][0] === selectedSlidesArray[j][0])
				{
					selected = true;
					break;
				}
			}

			if (!selected)
			{
				notSelectedSlidesArray.push(allSlidesArray[i]);
			}
		}

		layoutSlides();

		resetSlideCache();

		//reset any hash parameters to make sure the slideshow starts on slide 0
		window.location.hash = '/';
	}

	function resetSlideCache() {
		Agenda.reset();
		Timeline.reset();
		Notes.reset();
		Motivator.reset();
		Motivator2.reset();

		$('.reveal .slides').html('');


		if (!$('.clearData').is(":visible"))
			return;

		$('.clearData').text('Cleared!');
		$('.clearData').fadeOut(800, function() {
			$('.clearData').text('Clear Data');
		});

		window.location.hash = '/';
	}

	return {
		init: init,
		type: type,
		subtype: subtype,
		setType: function(value) {
			type = value;
		},
		setSubtype: function(value) {
			subtype = value;
		},
		setCustomerType: function(value) {
			customerType = value;
		}
	};
})();
