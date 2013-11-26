var Timeline = (function () {
	'use strict';

	var slides, areas, visible = false,
	dom, currentIndex = 0, nrOfUnits, unitWidth,
	timeline, timelineDragArea;

	/**
	 * Populate slides from nordea here,
	 * they are now static inside the HTML
	 */
	function populateSlides() {

		slides = $( '.reveal .slides section' );

		//listen if any slide has changed in reveal
		Reveal.addEventListener("slidechanged", onSlideChanged);

		//Create dom
		dom = document.querySelector('.timeline');
		timeline = $('.timeline');
		timelineDragArea = $('.timeline .dragArea');

		//disable text selection
		timeline.disableSelection();

		//structure areas into [Area 1[], Area2[], Area3[]] etc.
		var currentArea = '';
		areas = [];
		var areaIndex = -1;
		for (var i = 0; i < slides.length; i++)
		{
			var slide = $(slides[i]);
			var data = slide.data();
			if (currentArea !== data.keyArea)
			{
				areas.push([]);
				areaIndex++;
				currentArea = data.keyArea;
			}
			areas[areaIndex].push($(slide));
		}

		//calculate unit width
		unitWidth = 120;
		nrOfUnits = 0;
		var area;
		for (i = 0; i < areas.length; i++)
		{
			area = areas[i];
			nrOfUnits += areas[i].length;
		}
		unitWidth = Math.round((window.innerWidth-120) / nrOfUnits);

		//Make the timeline draggable within the window size
		timelineDragArea.draggable({axis:'x', containment: [-(nrOfUnits*unitWidth) + window.innerWidth,0,120,0]});

		/*
		* Append the HTML into the timeline
		*/
		var subsectionIndex = 0;
		var absolutePositionX = 0;
		for (i = 0; i < areas.length; i++)
		{
			area = areas[i];
			var data0 = area[0].data();
			var title = "<h1>"+data0.localArea+"</h1>";

			if (area.length === 1)
			{
				var topsubsection = '<div style="width:'+(unitWidth-1)+'px;" data-subsection-nr="'+subsectionIndex+'" class="subsection">'+title+'</div>';
				var bottomsubsection = '<div data-key-name="'+data0.keyName+'" title="'+data0.localName+'" style="width:'+(unitWidth-1)+'px;" data-subsection-nr="'+subsectionIndex+'" class="subsection"><p>'+data0.localName+'</p></div>';
				timelineDragArea.append('<section style="left:'+absolutePositionX+'px; width:'+(unitWidth)+'px" data-key-area="'+data0.keyArea+'"><div class="top" style="width:'+unitWidth+'px">'+topsubsection+'</div><div class="bottom">'+bottomsubsection+'</div></section>');
				absolutePositionX += unitWidth;
				subsectionIndex++;
				continue;
			}
			
			var topsubsections = "";
			var bottomsubsections = "";
			var sectionWidth = (unitWidth*(area.length));
			var subSectionWidth = unitWidth;

			for (var j = 0; j < area.length; j++)
			{
				if (j > 0)
					title = "";

				var dataJ = area[j].data();
				var topUnitWidth = j === area.length -1 ? unitWidth-1 : unitWidth;

				topsubsections += '<div style="width:'+topUnitWidth+'px;left:'+(subSectionWidth*j)+'px" data-subsection-nr="'+subsectionIndex+'" class="subsection">'+title+'</div>';
				bottomsubsections += '<div data-key-name="'+dataJ.keyName+'" title="'+dataJ.localName+'" style="width:'+(unitWidth-1)+'px;left:'+(subSectionWidth*j)+'px" data-subsection-nr="'+subsectionIndex+'" class="subsection"><p>'+dataJ.localName+'</p></div>';
				subsectionIndex++;
			}
			timelineDragArea.append('<section style="left:'+absolutePositionX+'px;width:'+(sectionWidth)+'px" data-key-area="'+data0.keyArea+'"><div class="top" style="width:'+sectionWidth+'px">'+topsubsections+'</div><div class="bottom">'+bottomsubsections+'</div></section>');
			absolutePositionX += sectionWidth;
		}

		//show/hides timeline
		$('.timeline button.toggle').click(function(e) {
			visible = visible ? false : true;

			if (visible)
				showTimeline();
			else
				hideTimeline();
		});

		//exits slideshow
		$('.timeline button.exit').click(exit);

		//jump to a specific slide
		$('.timeline .dragArea section').click(onAreaClick);
		$('.timeline .dragArea section .bottom .subsection').click(onUnitClick);

		window.addEventListener( 'resize', onWindowResize, false );
		document.addEventListener( 'keydown', onDocumentKeyDown, false );

		highlightSelected(getAreaIndex(currentIndex), currentIndex);

		hideTimeline();
	}

	/**
	 * adjust layout resize browser
	 */
	function onWindowResize() {
		areas = [];
		//remove slides
		$('.timeline .dragArea section').unbind();
		$('.timeline .dragArea section .bottom .subsection').unbind();
		$('.timeline .dragArea').html('');	
		//unbind any listeners
		$('.timeline button.toggle').unbind();
		$('.timeline button.exit').unbind();
		document.removeEventListener( 'keydown', onDocumentKeyDown, false );
		Reveal.removeEventListener("slidechanged", onSlideChanged);

		populateSlides();
	}

	/**
	 * get the area for this unit index
	 */
	function getAreaIndex(unitIndex) {
		var i;
		var index = 0;
		for (i = 0; i < areas.length; i++)
		{
			if (unitIndex >= index && unitIndex < index + areas[i].length)
				return i;

			index += areas[i].length;
		}
		return index;
	}

	/**
	 * get the first unit index in the area
	 */
	function getUnitIndex(areaIndex) {
		var i;
		var index = 0;
		for (i = 0; i < areaIndex; i++)
		{
			index += areas[i].length;
		}
		return index;
	}

	/**
	 * If area has been clicked
	 */
	function onAreaClick(e) {
		var areas = $('.timeline .dragArea section');
		var areaIndex = areas.index(e.currentTarget);
		var unitIndex = getUnitIndex(areaIndex);
		changeSlide(unitIndex);
		
		if($(e.currentTarget).attr('data-key-area') === 'Summary'){
				Agenda.updateSummary($(e.currentTarget));
		}
		e.stopPropagation();
	}

	/**
	 * If unit has been clicked
	 */
	function onUnitClick(e) {
		var units = $('.timeline .dragArea section .bottom .subsection');
		var unitIndex = units.index(e.currentTarget);

		changeSlide(unitIndex);

		e.stopPropagation();
	}

	/**
	 * Change slide and force reveal to follow
	 */
	function changeSlide(unitIndex) {
		//return if out of range
		if (unitIndex < 0 || unitIndex > nrOfUnits-1)
			return;

		Notes.saveNotes();
		Reveal.slide(unitIndex);
	}
	
	/**
	 * Listen to slide changes in reveal.
	 */
	function onSlideChanged(e) {
		var areaIndex = getAreaIndex(e.indexh);
		var unitIndex = e.indexh;

		highlightSelected(areaIndex, unitIndex);
		adjustDragArea(unitIndex);

		currentIndex = unitIndex;
	}

	/**
	 * Highlight selected slide and area
	 */

	 var oldUnitIndex = -1;
	function highlightSelected(areaIndex, unitIndex) {
		var areas = $('.timeline .dragArea section');
		areas.removeClass('selected');
		var area = $(areas.get(areaIndex));
		area.addClass('selected');

		areas.find('div').removeClass('selected');
		var unit = area.find('div[data-subsection-nr='+unitIndex+']');
		unit.addClass('selected touched');

		Agenda.update();


		var $slide = $($('.reveal section')[unitIndex]);
		var data = $slide.data();

		ga('send', 'event', 'View Slide ' + SlideSelector.type + ' - ' + SlideSelector.subtype, data.keyArea + ' - ' + data.keyName);

		if (data.hideNotes)
			Notes.hide();
		else
			Notes.show();

		var $backgrounds = $('.reveal .backgrounds div');
		var bgrType = data.backgroundType === "" ? Templates.BACKGROUND_TYPE_FULL : data.backgroundType;
		var bgrWidth = '100%';
		var bgrLeftPosition = '0';

		if (bgrType == Templates.BACKGROUND_TYPE_RIGHT)
		{
			bgrLeftPosition = "5%";
		}

		for (var i = 0; i < $backgrounds.length; i++)
		{
			var $background = $($backgrounds[i]);

			if (oldUnitIndex === i)
			{
				if (unitIndex > i)
					$background.animate({left: '-100%'}, 700, 'easeOutSine');
				else if (unitIndex < i)
					$background.animate({left: '100%'}, 700, 'easeOutSine');
			} 
			else if (i === unitIndex)
			{
				$background.animate({left: bgrLeftPosition}, 700, 'easeOutSine');
				$background.css('width', bgrWidth);
			}
			else {
				if (unitIndex > i)
					$background.css('left', '-100%');
				else if (unitIndex < i)
					$background.css('left', '100%');
			}


		}

		oldUnitIndex = unitIndex;

	}

	/**
	 * Adjust drag area depending on what unitindex it is.
	 */
	function adjustDragArea(unitIndex) {
		var offset;
		if (currentIndex < nrOfUnits -4 && currentIndex > 4 && currentIndex < unitIndex)
		{
			offset = timelineDragArea.offset().left - unitWidth < -((nrOfUnits*unitWidth) - window.innerWidth) ? -((nrOfUnits*unitWidth) - window.innerWidth) : timelineDragArea.offset().left - unitWidth;
			timelineDragArea.animate({left: offset}, 200);
		}
		else if (currentIndex < nrOfUnits -4 && currentIndex > 4 && currentIndex > unitIndex)
		{	
			offset = timelineDragArea.offset().left + unitWidth > 120 ? 120 : timelineDragArea.offset().left + unitWidth;
			timelineDragArea.animate({left: offset}, 200);
		}
	}

	/**
	 * Do something when a key is pressed
	 */
	function onDocumentKeyDown( event ) {

		// Check if there's a focused element that could be using
		// the keyboard
		var activeElement = document.activeElement;
		var hasFocus = !!(activeElement && ( activeElement.type || activeElement.href || activeElement.contentEditable !== 'inherit' ) );

		// Disregard the event if there's a focused element or a
		// keyboard modifier key is present
		if( hasFocus || (event.shiftKey && event.keyCode !== 32) || event.altKey || event.ctrlKey || event.metaKey ) return;

		switch( event.keyCode ) {
			//left
			case 37: navigateLeft(); break;
			//right
			case 39: navigateRight(); break;
			//up
			case 38: showTimeline(); break;
			//down
			case 40: hideTimeline(); break;
		}
	}

	/**
	 * Navigate Left
	 */
	function navigateLeft() {
		changeSlide(currentIndex - 1);
	}

	/**
	 * Navigate Left
	 */
	function navigateRight() {
		changeSlide(currentIndex + 1);
	}

	/**
	 * Show timeline
	 */
	function showTimeline() {
		$('.timeline').animate({
			bottom: '0',
			duration: 600
		});

		$('.timeline button.toggle').blur();
	}

	/**
	 * Hide timeline
	 */
	function hideTimeline() {
		$('.timeline').animate({
			bottom: '-76px',
			duration: 600
		});

		$('.timeline button.toggle').blur();
	}

	/**
	 * Exit back to slide selector and remove slides from reveal dom
	 */
	function exit() {
		//display selector elements

		$('.timeline').fadeOut();
		$('.noteblock').fadeOut();
		$('.reveal').fadeOut(function() {
			$('.slideSelector').fadeIn();
			//hide slideshow and turn on scroll
		});
		
		areas = [];

		visible = false;

		//remove slides
		//$('.reveal .slides').html('');	
		$('.timeline .dragArea').html('');	

		//unbind any listeners
		$('.timeline button.toggle').unbind();
		$('.timeline button.exit').unbind();
		Reveal.removeEventListener("slidechanged", onSlideChanged);
		Reveal.removeEventListeners();
		window.removeEventListener( 'resize', onWindowResize, false );
		document.removeEventListener( 'keydown', onDocumentKeyDown, false );

		Notes.exit();
		Agenda.exit();
	}

	function reset() {
		currentIndex = 0;
	}

	return {
		populateSlides: populateSlides,
		reset: reset
	};
})();

