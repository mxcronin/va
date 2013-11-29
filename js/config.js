/**
 * CONFIG
 */
var Config = (function() {
	'use strict';

	var 
	$configInputFieldCustomer, 
	$configInputFieldPBA, 
	$configInputFieldCustomerId, 
	$configTable, 
	$configMeeting, 
	$configNames, 
	$configType, 
	$configSubtype,
	$configNamesNext, 
	$configMeetingNext, 
	$configNamesBack, 
	$configMeetingBack,  
	subtypeReady = true, 
	typeReady = true, 
	customerNameReady = false, 
	PBANameReady = false, 
	customerIdReady = false, 
	customerName = null, 
	PBAName = null, 
	customerId = null, 
	language = "no", 
	countryCode = "no",
	abbrivitation = "no",
	type, 
	subtype,
	customerType;
 
	var $errorSign;
	var $nextCustomerType;
	var $previousCustomerType;
	var customerTypes;
    
	var isWebKit = !!window.webkitURL;

	var $language;
	var $splashWrapper;
	var $buttonLanguage;
	var currentLanguage = 0;

	var languages = 
		[{
			language: 'Norge',
			abbriviation: 'no',
			countryCode: 'no'
		},
		{
			language: 'Suomi',
			abbriviation: 'fi',
			countryCode: 'fi'
		},
		{
			language: 'Danmark',
			abbriviation: 'da',
			countryCode: 'dk'
		},
		{
			language: 'Sverige',
			abbriviation: 'sv',
			countryCode: 'se'
		}
		];

	/*
	 * Init config
	 */
	function init() {

		$splashWrapper = $('.splashWrapper');
		$buttonLanguage = $splashWrapper.find('.buttonLanguage');
		$language = $buttonLanguage.find('.language');

		$buttonLanguage.disableSelection().unbind().click(nextLanguage);
		$language.html(languages[currentLanguage].language);

		$buttonLanguage.find('.nextLanguage').unbind().click(nextLanguage);
		$buttonLanguage.find('.prevLanguage').unbind().click(previousLanguage);


		if (getURLParameter('q') !== "null")
		{	
			initConfigTemplate();
		}

		$splashWrapper.find('.buttonStart').click(function() {
			initConfigTemplate();
		});

		changeLanguage(languages[currentLanguage]);

		$(document).keypress(onStartKeyPress);
	}

	/**
	 * On pressing that start key
	 **/
	function onStartKeyPress(e) {
		if (e.keyCode === 13)
		{
			initConfigTemplate();
		}
	}

	function initConfigTemplate() {
		Templates.initData();
		Templates.initConfigTemplate();
		$('.splashBackground').fadeOut(function() {
			$('.config').fadeIn();
		});
		$(document).unbind('keypress', onStartKeyPress);

		initConfig();
	}

	function previousLanguage(e) {
		currentLanguage--;
		if (currentLanguage < 0)
			currentLanguage = languages.length-1;

		changeLanguage(languages[currentLanguage]);

		e.stopPropagation();
	}

	function nextLanguage(e) {
		currentLanguage++;
		if (currentLanguage > languages.length -1)
			currentLanguage = 0;

		changeLanguage(languages[currentLanguage]);

		e.stopPropagation();
	}

	function changeLanguage(langObj) {
		Config.language = langObj.abbriviation;
		Config.countryCode = langObj.countryCode;
		Config.abbriviation = langObj.abbriviation;
		Globalize.culture(language);
		$language.html(langObj.language);
		updateLanguageOnStartScreen();
	}

	function updateLanguageOnStartScreen() {
		//$('.splashBackground .logoTitle').text(Templates.localize( "splashLogoTitle"));
		$('.splashBackground .buttonStart').text(Templates.localize( "splashStart"));
		$('.splashBackground .buttonStart').attr('title',Templates.localize( "splashStartTitle"));
		$('.splashBackground .fullscreenInfo').html(Templates.localize( "splashFullscreen"));
		$('.splashBackground .downloadBox').text(Templates.localize("splashDownload"));
	}

	function initConfig() {
		// Make the body go full screen.
		var elem = document.body; 
		requestFullScreen(elem);

		customerTypes = {
			household: [				
				[Templates.localize('configCustomerTypeGold'),"gold"],
				[Templates.localize('configCustomerTypePremium'), "premium"],
				[Templates.localize('configCustomerTypeSilver'),"silver"],
				[Templates.localize('configCustomerTypeBronze'),"bronze"],
				[Templates.localize('configCustomerTypeEntrepreneurs'),"entrepreneurs"],
				[Templates.localize('configCustomerTypeNew'),"new"]], 
			corporate: [
				[Templates.localize('configCustomerTypeLarge'), "large"],
				[Templates.localize('configCustomerTypeMedium'), "medium"],
				[Templates.localize('configCustomerTypeSmall'), "small"],
				[Templates.localize('configCustomerTypeNew'), "new"]]
		};
      
		$('body').css('overflow','hidden');

		$configTable = $('.config table');
		$configType = $('.config .type');
		$configSubtype = $('.config .subtype');
		$configInputFieldCustomer = $('.config input.customerName');
		$configInputFieldCustomerId = $('.config input.customerId');
		$configInputFieldPBA = $('.config input.PBAName');
		$configNames = $('.configNames');
		$configMeeting = $('.configMeeting');
		$configNamesNext = $('.configNames .next');
		$configMeetingNext = $('.configMeeting .next');
		$configNamesBack = $('.configNames .back');
		$configMeetingBack = $('.configMeeting .back');

		type = $('.type.selected').attr('data-type');
		subtype = $('.subtype.selected').attr('data-sub-type');
		changeCustomerType(type, 0);

		$previousCustomerType = $('.config .previousCustomerType');
		$nextCustomerType = $('.config .nextCustomerType');

		$errorSign = $('#errorSign');

		//make table resizable
		adjustConfigLayout();
		window.addEventListener( 'resize', adjustConfigLayout, false );


		//quickstart
		if (getURLParameter('q') !== "null")
		{
			PBAName = "Advisor";
			customerName = "Customer";
			customerId = "123456";
			$configInputFieldCustomer.val(customerName);
			$configInputFieldCustomerId.val(customerId);
			$configInputFieldPBA.val(PBAName);
		}

		//reset ready values
		subtypeReady = true; 
		typeReady = true;
		customerNameReady = customerName === null ? false: true;
		PBANameReady = PBAName === null ? false: true;
		customerIdReady = customerId === null ? false: true;

		$configType.click(function() {
			$configType.removeClass('selected');
			$(this).addClass('selected');
			typeReady = true;
			checkMeetingReady();

			type = $('.type.selected').attr('data-type');
			changeCustomerType(type, 0);
		});

		$configSubtype.click(function() {
			$configSubtype.removeClass('selected');
			$(this).addClass('selected');
			subtypeReady = true;
			checkMeetingReady();

			subtype = $('.subtype.selected').attr('data-sub-type');
		});

		if (customerName === null) $configInputFieldCustomer.val(Templates.localize("configCustomerName"));
		$configInputFieldCustomer.click(function() {
			if ($(this).val() == Templates.localize("configCustomerName")) $(this).val("");
			$(this).keypress(onKeyPress($(this), 'customerName'));
			$configInputFieldCustomer.addClass('touched');
		});

		$configInputFieldCustomer.blur(function() {
			if ($(this).val().length > 2) {
				customerNameReady = true;
				customerName = $(this).val();
			}
			else {
				customerNameReady = false;
				$configInputFieldCustomer.val(Templates.localize("configCustomerName"));
				$configInputFieldCustomer.removeClass('touched');
			}

			checkNamesReady();
		});
		$configInputFieldCustomer.removeClass('touched');

		if (customerId === null) $configInputFieldCustomerId.val(Templates.localize("configCustomerId"));
		$configInputFieldCustomerId.click(function() {
			if ($(this).val() == Templates.localize("configCustomerId")) $(this).val("");
			$(this).keypress(onKeyPress($(this), 'customerId'));
			$configInputFieldCustomerId.addClass('touched');
		});

		$configInputFieldCustomerId.blur(function() {
			if ($(this).val().length > 2) {
				customerIdReady = true;
				customerId = $(this).val();
			}
			else {
				customerIdReady = false;
				$configInputFieldCustomerId.val(Templates.localize("configCustomerId"));
				$configInputFieldCustomerId.removeClass('touched');
			}

			checkNamesReady();
		});
		$configInputFieldCustomerId.removeClass('touched');

		if (PBAName === null) $configInputFieldPBA.val(Templates.localize("configPBAName"));
		$configInputFieldPBA.click(function() {
			if ($(this).val() == Templates.localize("configPBAName")) $(this).val("");
			$(this).keypress(onKeyPress($(this), 'PBA'));
			$configInputFieldPBA.addClass('touched');
		});

		$configInputFieldPBA.blur(function() {
			if ($(this).val().length > 2) {
				PBANameReady = true;
				PBAName = $(this).val();
			}	
			else {
				PBANameReady = false;
				$configInputFieldPBA.val(Templates.localize("configPBAName"));
				$configInputFieldPBA.removeClass('touched');
			}
			checkNamesReady();
		});
		$configInputFieldPBA.removeClass('touched');

		$configNamesBack.click(function() {
			$('.config').fadeOut(function () {
				$('.splashBackground').fadeIn();
				$('.reveal .slides').html('');
				exit()
				reset();
				init();
			});
		});

		$configMeetingBack.click(function() {
			$configMeeting.fadeOut(function () {
				$configNames.fadeIn();
			});
		});

		$(document).keypress(onNextKeyPress);

		$configNamesNext.click(onNamesNext);
		$configMeetingNext.click(onMeetingNext);

		$previousCustomerType.click(onNextCustomerType);
		$nextCustomerType.click(onPreviousCustomerType)
		$('.customerSelection').click(function(e) {
			onNextCustomerType(e);
		});
		$('.customerSelection').disableSelection();

		//init tutorial
		$('.config .info').click(function() {
			$(".tutorial1").colorbox({rel:'tutorial1', transition:"fade", open:"true"});
		});

		checkNamesReady();
		checkMeetingReady();
	}

	function onNextKeyPress(e) {
		if (e.keyCode === 13)
		{
			if ($configNames.is(":visible"))	
				onNamesNext();
			else
				onMeetingNext();
		}
	}

	function onNamesNext() {
		if (!checkNamesReady())
		{
			showErrorSign('Please enter names and customer id.');
			return;
		}

		$configNames.fadeOut(function() {
			$configMeeting.fadeIn();
		});
	}

	function onMeetingNext() {
		if (!checkMeetingReady())
		{
			showErrorSign('Please selecte meeting type.');
			return;
		}

		finishConfig();
	}

	var currentCustomerType = 0;
	function onPreviousCustomerType(e) {
		currentCustomerType--;
		if (currentCustomerType < 0){
			currentCustomerType = customerTypes[type].length -1;
		}
		changeCustomerType(type, currentCustomerType);
		e.stopPropagation();
	}

	function onNextCustomerType(e) {
		currentCustomerType++;
		if (currentCustomerType > customerTypes[type].length -1){
			currentCustomerType = 0;
		}
		changeCustomerType(type, currentCustomerType);
		e.stopPropagation();
	}

	function changeCustomerType(key, index) {
		customerType = customerTypes[key][index][1];
		$('.config .customerType').html(customerTypes[key][index][0]);
	}

	function getURLParameter(name) {
	    return decodeURI(
	        (RegExp(name + '=' + '(.+?)(&|$)').exec(location.search)||[,null])[1]
	    );
	}

	function adjustConfigLayout() {
		$('.config .wrapper').css('height', (window.innerHeight-90-95)+'px');
		$configTable.css('height', (window.innerHeight-90-95)+'px');
	};

	function showErrorSign(text) {

		$errorSign.find('p').text(text);

		var x = window.innerWidth / 2 - $errorSign.width() / 2;
		var y = window.innerHeight / 2 - $errorSign.height() / 2;

		$errorSign.show();
		$errorSign.css('left', x+'px');
		$errorSign.css('top', y+'px');
		$errorSign.fadeOut(3000);
	}

	function onKeyPress($inputField, type) {
		var ready = false;

		return function(e) {
			if (e.keyCode === 8)
			{
				if ($inputField.val().length > 4)
					ready = true;
				else
					ready = false;
			}
			else
			{
				if ($inputField.val().length > 2)
					ready = true;
				else
					ready = false;
			}

			if (type === 'PBA')
				PBANameReady = ready;
			else if (type === 'customerName')
				customerNameReady = ready;
			else
				customerIdReady = ready;

			checkNamesReady();
			checkMeetingReady();

			if (e.keyCode != 13)
				return;

			$inputField.blur();
			e.stopPropagation();
			e.preventDefault();
		};
	}

	function checkNamesReady() {
		if (!customerNameReady || !PBANameReady || !customerIdReady)
		{
			$configNamesNext.addClass('disabled').removeClass('enabled');
			return false;
		}
		$configNamesNext.removeClass('disabled').addClass('enabled');

		return true;
	}

	function checkMeetingReady()
	{
		if (!typeReady || !subtypeReady)
		{
			$configMeetingNext.addClass('disabled').removeClass('enabled');
			return false;
		}
		$configMeetingNext.removeClass('disabled').addClass('enabled');
		return true;
	}

	function requestFullScreen(el) {
		if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
			return;
		}

		// Supports most browsers and their versions.
		var requestMethod = el.requestFullScreen || el.webkitRequestFullScreen || el.mozRequestFullScreen || el.msRequestFullScreen;

		if (isWebKit) {
			requestMethod.call(el, Element.ALLOW_KEYBOARD_INPUT);
		}
		else if (requestMethod) { // Native full screen.
			requestMethod.call(el);
		}
	}

	function setupParameters() {

		//replace all fields with date
		var $date = $('#data .date');
		if ($date !== undefined) $date.text(new Date().toLocaleDateString());

		//replace all fields with customer name
		var $customerName = $('#data .customerName');
		if ($customerName !== undefined) $customerName.text($configInputFieldCustomer.val());

		//replace all fields with PBA name
		var $PBAName = $('#data .PBAName');
		if ($PBAName !== undefined) $PBAName.text($configInputFieldPBA.val());

		var $customerFrames = $('#data .customerFrame');

		if ($customerFrames !== undefined)
		{	
			for (var i = 0; i < $customerFrames.length; i++)
			{
				var $customerFrame = $($customerFrames[i]);
				var href = $customerFrame.attr('href');
				href = href.replace('[customerId]',customerId).replace('[countryCode]', countryCode);
				$customerFrame.attr('href',href);
			}
		}
	}

	function finishConfig() {

		$('.config').fadeOut(function() {
			//setup templates
			Templates.initSlideTemplates();
			setupParameters();
			exit();

			SlideSelector.init(type, subtype, customerType);
		});
		app.animationController.type = type;
	}

	function exit() {
		window.removeEventListener( 'resize', adjustConfigLayout, false );
		$configType.unbind();
		$configInputFieldCustomer.unbind();
		$configInputFieldPBA.unbind();
		$configType.unbind();
		$configNamesNext.unbind();
		$configMeetingNext.unbind();
		$('.config .info').unbind();
		$(document).unbind("keypress", onNextKeyPress);
	}

	function reset() {
		customerName = null;
		customerId = null;
		PBAName = null;

		SlideSelector.setType(null);
		SlideSelector.setSubtype(null);
		SlideSelector.setCustomerType(null);

	}

	return {
		init:init,
		initConfig: initConfig,
		isWebKit: isWebKit,
		PBANameReady: PBANameReady,
		customerNameReady: customerNameReady,
		getURLParameter: getURLParameter,
		language: language,
		countryCode: countryCode,
		abbrivitation: abbrivitation,
		type: type,
		subtype: subtype,
		customerType: customerType
	}
})();