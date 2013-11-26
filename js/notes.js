/**
 * Store notes for the whole presentation
 */
var Notes = (function() {
	'use strict';

	var notes = "";
	var actionPoints = "";

	var $notes, $finalNotes, $button, $noteBlock, $actionPoints;

	function init() {
		//take a note

		$button = $('.noteblock button');
		$notes = $('.notes');
		$finalNotes = $('.finalNotes');
		$noteBlock = $('.noteblock');
		$actionPoints = $('.actionPoints');

		if (notes === "")
			$finalNotes.html('<h2>'+Templates.localize("notes")+'</h2>');

		if (actionPoints === "")
			$actionPoints.val(Templates.localize("actionNotes"));
		else
			$actionPoints.val(actionPoints);

		$actionPoints.click(function() {
			if ($(this).val() === Templates.localize("actionNotes"))
			{
				$(this).val('');
				$(this).addClass('touched');
			}
		});

		$actionPoints.blur(function() {
			if ($(this).val() === '')
			{
				$(this).val(Templates.localize("actionNotes"));
				$(this).removeClass('touched');
				return;
			}

			actionPoints = $(this).val();

		});

		$button.click(note);
		$notes.focusout(saveNotes);


		Reveal.addEventListener("slidechanged", onSlideChanged);
	}

	var toggleNotes = false;
	function note() {

		if (toggleNotes)
			return;

		$button.addClass('close');

		$button.unbind();

		var $_notes = $notes;

		//$(slide.find('.noteblock')).css('position','absolute');
		$noteBlock.animate({
			right: 0,
		}, 300, function() {
			toggleNotes = true;
			$_notes.focus();
		});
	}

	function hide() {
		$noteBlock.hide();
	}

	function show() {
		$noteBlock.show();
	}
	
	function saveNotes() {
		if (!toggleNotes)
			return;

		var $_notes = $notes;

		$button.removeClass('close');
		$button.click(note);

		$noteBlock.animate({
			right: -490
		}, 300, function() {
			toggleNotes = false;

			$_notes.blur();
		});

		notes = $notes.val().replace(/\n/g,'<br />');

		$finalNotes.html('<h2>'+Templates.localize("notes")+'</h2><p>'+notes+'</p>');
	}

	function onSlideChanged() {

		var $_notes = $notes;

		$button.removeClass('close');
		$noteBlock.animate({
			right: -490
		}, 300, function() {
			toggleNotes = false;
			$_notes.blur();
		});

	}

	function exit() {
		$button.unbind();
		Reveal.removeEventListener("slidechanged", onSlideChanged);
	}

	function reset() {
		notes = "";
		actionPoints = "";
	}

	return {
		init: init,
		saveNotes: saveNotes,
		hide: hide,
		show: show,
		reset: reset,
		exit: exit,
	};
})();