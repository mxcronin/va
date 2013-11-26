/**
 * Household Motivator
 */
var Motivator = (function() {
	"use strict";

	var UID = '#motivator';
	var dom = null;
	var loaded = false;

	var sliderBoxBuySum, sliderBoxOwnCapital, sliderBoxInterest, 
	sliderBoxBuySum2, sliderBoxOwnCapital2, sliderBoxInterest2,
	scenarioBoxStart, scenarioBoxNew, configScenario1, configScenario2;

	var BUY_DIVISION,
		BUY_MAX_VALUE,
		OWN_CAPITAL_DIVISION,
		INTEREST_MAX_VALUE,
		INTEREST_DIVISION;

		//scenario 1
	var buySumValue1,
		ownCapitalValue1,
		yearsValue1,
		interestRateValue1;

		//scenario2
	var	buySumValue2,
		ownCapitalValue2,
		yearsValue2,
		interestRateValue2;

	var scenario1Selected,
		scenario2Added;

	function init() {
		//load dom and see if exists, if not, then don't load calculator
		dom = $('.reveal '+UID);
		if (dom === null)
			return;

		if (loaded)
		{
			dom.html('');
		}
		else
		{
			reset();
		}

		loaded = true;

		dom.append('<div class="main"></div>');
		dom.append('<div class="config"><div class="scenario" data-scenario="1"></div><div class="scenario" data-scenario="2"></div></div>');

		var main = $(UID+' .main');
		var addButton = $('<button></button>');
		addButton.click(function() {
			scenarioBoxNew.show();
			addButton.hide();
			scenario2Added = true;
		});
		if (!scenario2Added) main.append(addButton);

		var config = $(UID+' .config');

		var compare = $('<div class="compare"></div>');
		main.append(compare);

		scenarioBoxStart = new ScenarioBox(Templates.localize("motivatorScenario1"), 
			Templates.localize("motivatorBuyValue"), 
			Templates.localize("motivatorPerMonth"), 
			Templates.localize("motivatorYears"), 
			Templates.localize("motivatorOwnCapital"), 
			Templates.localize("motivatorLoanAmount"), 1);

		scenarioBoxStart.addTo(compare);
		scenarioBoxStart.setBuySumValue(buySumValue1);
		scenarioBoxStart.setOwnCapital(ownCapitalValue1);
		scenarioBoxStart.setYearsValue(yearsValue1);
		scenarioBoxStart.setInterestRate(interestRateValue1);
		scenarioBoxStart.on('click', function() {
			selectScenario1();
		});
		scenarioBoxStart.on('changed', function(value) {
			selectScenario1();
			sliderBoxOwnCapital.setValue(value*2);
			ownCapitalValue1 = value * buySumValue1;
		});

		scenarioBoxNew = new ScenarioBox(Templates.localize("motivatorScenario2"), 
			Templates.localize("motivatorBuyValue"), 
			Templates.localize("motivatorPerMonth"), 
			Templates.localize("motivatorYears"), 
			Templates.localize("motivatorOwnCapital"), 
			Templates.localize("motivatorLoanAmount"), 2);

		scenarioBoxNew.addTo(compare);
		scenarioBoxNew.setBuySumValue(buySumValue2);
		scenarioBoxNew.setOwnCapital(ownCapitalValue2);
		scenarioBoxNew.setYearsValue(yearsValue2);
		scenarioBoxNew.setInterestRate(interestRateValue2);
		scenarioBoxNew.on('click', function() {
			selectScenario2();
		});
		scenarioBoxNew.on('changed', function(value) {
			selectScenario2();
			sliderBoxOwnCapital2.setValue(value*2);
			ownCapitalValue2 = value * buySumValue2;
		});

		compare.append('<br class="clear" />');

		configScenario1 = $(UID+' .config .scenario[data-scenario="1"]');

		configScenario1.append('<div class="arrow"></div>');

		sliderBoxBuySum = new SliderBox(Templates.localize("motivatorBuyValue"), 0, BUY_MAX_VALUE, BUY_DIVISION, 0);
		sliderBoxBuySum.addTo(configScenario1);
		sliderBoxBuySum.setValue(buySumValue1 / BUY_MAX_VALUE);
		sliderBoxBuySum.on('changed', function(value) {
			buySumValue1 = value * sliderBoxBuySum.maxValue;
			scenarioBoxStart.setBuySumValue(buySumValue1);
			changeRelativeScenarioSize(value);
			sliderBoxOwnCapital.setMaxValue(buySumValue1/2);
			scenarioBoxStart.setOwnCapital(sliderBoxOwnCapital.value * sliderBoxOwnCapital.maxValue);
		});

		sliderBoxOwnCapital = new SliderBox(Templates.localize("motivatorOwnCapital"), 0, buySumValue1/2, OWN_CAPITAL_DIVISION, 0);
		sliderBoxOwnCapital.addTo(configScenario1);
		sliderBoxOwnCapital.setValue(ownCapitalValue1 / (buySumValue1/2));
		sliderBoxOwnCapital.on('changed', function(value) {
			ownCapitalValue1 = value * sliderBoxOwnCapital.maxValue;
			scenarioBoxStart.setOwnCapital(ownCapitalValue1);
		});

		sliderBoxInterest = new SliderBox(Templates.localize("motivatorRate"), 0, INTEREST_MAX_VALUE, INTEREST_DIVISION, 2, '%');
		sliderBoxInterest.addTo(configScenario1);
		sliderBoxInterest.setValue(interestRateValue1 / INTEREST_MAX_VALUE);
		sliderBoxInterest.on('changed', function(value) {
			interestRateValue1 = value * sliderBoxInterest.maxValue;
			scenarioBoxStart.setInterestRate(interestRateValue1);
		});

		var buttons = '<div class="year"><h1>'+yearsValue1+' '+Templates.localize("motivatorYears")+'</h1><h2>'+Templates.localize("motivatorDuration")+'</h2><button>15</button><button>20</button><button>25</button><button>30</button></div>';
		configScenario1.append(buttons);
		configScenario1.append('<br class="clear" />');
		var $buttons = configScenario1.find('.year button');
		for (var i = 0; i < $buttons.length; i++)
		{
			var $button = $($buttons[i]);
			if ($button.text() == yearsValue1)
				$button.addClass('selected');
		}


		configScenario2 = $(UID+' .config .scenario[data-scenario="2"]');

		configScenario2.append('<div class="arrow"></div>');

		sliderBoxBuySum2 = new SliderBox(Templates.localize("motivatorBuyValue"), 0, BUY_MAX_VALUE, BUY_DIVISION, 0);
		sliderBoxBuySum2.addTo(configScenario2);
		sliderBoxBuySum2.setValue(buySumValue2 / BUY_MAX_VALUE);
		sliderBoxBuySum2.on('changed', function(value) {
			buySumValue2 = value * sliderBoxBuySum2.maxValue;
			scenarioBoxNew.setBuySumValue(buySumValue2);
			changeRelativeScenarioSize(value);
			sliderBoxOwnCapital2.setMaxValue(buySumValue2/2);
			scenarioBoxNew.setOwnCapital(sliderBoxOwnCapital2.value * sliderBoxOwnCapital2.maxValue);
		});

		sliderBoxOwnCapital2 = new SliderBox(Templates.localize("motivatorOwnCapital"), 0, buySumValue2/2, OWN_CAPITAL_DIVISION, 0);
		sliderBoxOwnCapital2.addTo(configScenario2);
		sliderBoxOwnCapital2.setValue(ownCapitalValue2 / (buySumValue2/2));
		sliderBoxOwnCapital2.on('changed', function(value) {
			ownCapitalValue2 = value * sliderBoxOwnCapital2.maxValue;
			scenarioBoxNew.setOwnCapital(ownCapitalValue2);
		});

		sliderBoxInterest2 = new SliderBox(Templates.localize("motivatorRate"), 0, INTEREST_MAX_VALUE, INTEREST_DIVISION, 2, '%');
		sliderBoxInterest2.addTo(configScenario2);
		sliderBoxInterest2.setValue(interestRateValue2 / INTEREST_MAX_VALUE);
		sliderBoxInterest2.on('changed', function(value) {
			interestRateValue2 = value * sliderBoxInterest2.maxValue
			scenarioBoxNew.setInterestRate(interestRateValue2);
		});

		buttons = '<div class="year"><h1>'+yearsValue2+' '+Templates.localize("motivatorYears")+'</h1><h2>'+Templates.localize("motivatorDuration")+'</h2><button>15</button><button>20</button><button>25</button><button>30</button></div>';		
		configScenario2.append(buttons);
		configScenario2.append('<br class="clear" />');
		$buttons = configScenario2.find('.year button');
		for (i = 0; i < $buttons.length; i++)
		{
			var $button = $($buttons[i]);
			if ($button.text() == yearsValue2)
				$button.addClass('selected');
		}

		$(UID+' .scenario[data-scenario="1"] .year button').click(function() {
			yearsValue1 = $(this).text();
			$(UID+' .scenario[data-scenario="1"] .year button').removeClass('selected');
			$(this).addClass('selected');
			$(UID+' .scenario[data-scenario="1"] .year h1').text(yearsValue1+' '+Templates.localize("motivatorYears"));
			scenarioBoxStart.setYearsValue(yearsValue1);
		});


		$(UID+' .scenario[data-scenario="2"] .year button').click(function() {
			yearsValue2 = $(this).text();
			$(UID+' .scenario[data-scenario="2"] .year button').removeClass('selected');
			$(this).addClass('selected');
			$(UID+' .scenario[data-scenario="2"] .year h1').text(yearsValue2+' '+Templates.localize("motivatorYears"));
			scenarioBoxNew.setYearsValue(yearsValue2);
		});

		config.append('<p class="disclaimer">'+Templates.localize("disclaimer")+'</p>');

		if (scenario1Selected)
		{
			selectScenario1();
		}
		else if (scenario2Added)
		{
			selectScenario2();
		}
		
		if (!scenario2Added)
		{
			scenarioBoxNew.hide();
		}

		changeRelativeScenarioSize();
	}

	function selectScenario1()
	{
		configScenario1.show();
		configScenario2.hide();
		scenarioBoxStart.setSelected(true);
		scenarioBoxNew.setSelected(false);
		scenario1Selected = true;
	}

	function selectScenario2()
	{
		configScenario2.show();
		configScenario1.hide();
		scenarioBoxNew.setSelected(true);
		scenarioBoxStart.setSelected(false);
		scenario1Selected = false;
	}

	function changeRelativeScenarioSize() {
		var value1 = sliderBoxBuySum.value;
		var value2 = sliderBoxBuySum2.value;

		var factor = value2 / value1;

		if (value1 > value2)
		{
			scenarioBoxNew.changeSize(factor*250);
			scenarioBoxStart.changeSize(250);
		}
		else
		{
			scenarioBoxStart.changeSize((1/factor)*250);
			scenarioBoxNew.changeSize(250);
		}
	}


	function reset() {
		BUY_DIVISION = 50000;
		BUY_MAX_VALUE = 10000000;
		OWN_CAPITAL_DIVISION = 50000;
		INTEREST_MAX_VALUE = 10;
		INTEREST_DIVISION = 0.05;

		buySumValue1 = 2500000;
		ownCapitalValue1 = 1250000;
		yearsValue1 = 15;
		interestRateValue1 = 5;

		buySumValue2 = 2500000;
		ownCapitalValue2 = 1250000;
		yearsValue2 = 15;
		interestRateValue2 = 5; 

		scenario1Selected = true;
		scenario2Added = false;
	}


	return {
		init: init,
		uid: UID,
		BUY_DIVISION: BUY_DIVISION, 
		BUY_MAX_VALUE: BUY_MAX_VALUE,
		OWN_CAPITAL_DIVISION: OWN_CAPITAL_DIVISION,
		INTEREST_MAX_VALUE: INTEREST_MAX_VALUE,
		INTEREST_DIVISION: INTEREST_DIVISION,

		//scenario 1
		buySumValue1: buySumValue1,
		ownCapitalValue1: ownCapitalValue1,
		yearsValue1: yearsValue1,
		interestRateValue1: interestRateValue1,

		//scenario2
		buySumValue2: buySumValue2,
		ownCapitalValue2: ownCapitalValue2,
		yearsValue2: yearsValue2,
		interestRateValue2: interestRateValue2,

		reset: reset
	};
})();


/**
 * Coporate Motivator
 */
var Motivator2 = (function() {
	"use strict";

	var UID = '#motivator2';

	var dom = null;
	var loaded = false;

	var sliderBoxBuySum, sliderBoxOwnCapital, sliderBoxInterest, 
	sliderBoxYears, scenarioBoxStart;

	var BUY_DIVISION, 
		BUY_MAX_VALUE,
		OWN_CAPITAL_DIVISION,
		INTEREST_MAX_VALUE,
		INTEREST_DIVISION,
		YEARS_MAX_VALUE,
		YEARS_DIVISION;

		//scenario 1
	var buySumValue1,
		ownCapitalValue1,
		yearsValue1,
		interestRateValue1;

	function init() {
		//load dom and see if exists, if not, then don't load calculator
		dom = $('.reveal '+UID);
		if (dom === null)
			return;

		if (loaded)
		{
			dom.html('');
		}
		else
		{
			reset();
		}

		loaded = true;

		dom.append('<div class="main"></div>');
		dom.append('<div class="config"><div class="scenario" data-scenario="1"></div></div>');

		var main = $(UID+' .main');

		var config = $(UID+' .config');

		var compare = $('<div class="compare"></div>');
		main.append(compare);

		//compare.append('<div class="placeHolderImage"></div>');

		scenarioBoxStart = new ScenarioBox(Templates.localize("motivator2Scenario1"), 
			Templates.localize("motivator2BuyValue"), 
			Templates.localize("motivator2PerMonth"), 
			Templates.localize("motivator2Years"), 
			Templates.localize("motivator2OwnCapital"), 
			Templates.localize("motivator2LoanAmount"), 1);
		scenarioBoxStart.addTo(compare);
		scenarioBoxStart.setBuySumValue(buySumValue1);
		scenarioBoxStart.setOwnCapital(ownCapitalValue1);
		scenarioBoxStart.setYearsValue(yearsValue1);
		scenarioBoxStart.setInterestRate(interestRateValue1);
		scenarioBoxStart.on('changed', function(value) {
			sliderBoxOwnCapital.setValue(value*2);
			ownCapitalValue1 = value * buySumValue1;
		});
		scenarioBoxStart.setSelected(true);

		compare.append('<br class="clear" />');

		var configScenario1 = $(UID+' .config .scenario[data-scenario="1"]');

		configScenario1.append('<div class="arrow"></div>');

		sliderBoxBuySum = new SliderBox(Templates.localize("motivator2BuyValue"), 0, BUY_MAX_VALUE, BUY_DIVISION, 0);
		sliderBoxBuySum.addTo(configScenario1);
		sliderBoxBuySum.setValue(buySumValue1 / BUY_MAX_VALUE);
		sliderBoxBuySum.on('changed', function(value) {
			buySumValue1 = value * sliderBoxBuySum.maxValue;
			scenarioBoxStart.setBuySumValue(buySumValue1);
			sliderBoxOwnCapital.setMaxValue(buySumValue1/2);
			scenarioBoxStart.setOwnCapital(sliderBoxOwnCapital.value * sliderBoxOwnCapital.maxValue);
		});

		sliderBoxOwnCapital = new SliderBox(Templates.localize("motivator2OwnCapital"), 0, buySumValue1/2, OWN_CAPITAL_DIVISION, 0);
		sliderBoxOwnCapital.addTo(configScenario1);
		sliderBoxOwnCapital.setValue(ownCapitalValue1 / (buySumValue1/2));
		sliderBoxOwnCapital.on('changed', function(value) {
			ownCapitalValue1 = value * sliderBoxOwnCapital.maxValue;
			scenarioBoxStart.setOwnCapital(ownCapitalValue1);
		});

		sliderBoxInterest = new SliderBox(Templates.localize("motivator2Rate"), 0, INTEREST_MAX_VALUE, INTEREST_DIVISION, 2, '%');
		sliderBoxInterest.addTo(configScenario1);
		sliderBoxInterest.setValue(interestRateValue1 / INTEREST_MAX_VALUE);
		sliderBoxInterest.on('changed', function(value) {
			interestRateValue1 = value * sliderBoxInterest.maxValue;
			scenarioBoxStart.setInterestRate(value * sliderBoxInterest.maxValue);
		});


		sliderBoxYears = new SliderBox(Templates.localize("motivator2Years"), 1, YEARS_MAX_VALUE, YEARS_DIVISION, 0);
		sliderBoxYears.addTo(configScenario1);
		sliderBoxYears.setValue(yearsValue1 / YEARS_MAX_VALUE);
		sliderBoxYears.on('changed', function(value) {
			yearsValue1 = Math.round(value * sliderBoxYears.maxValue);
			scenarioBoxStart.setYearsValue(yearsValue1);
		});

		configScenario1.append('<br class="clear" />');

		config.append('<p class="disclaimer">'+Templates.localize("disclaimer")+'</p>');
	}

	function reset() {
		BUY_DIVISION = 50000;
		BUY_MAX_VALUE = 10000000;
		OWN_CAPITAL_DIVISION = 50000;
		INTEREST_MAX_VALUE = 12;
		INTEREST_DIVISION = 0.05;
		YEARS_MAX_VALUE = 15,
		YEARS_DIVISION = 1;

		buySumValue1 = 2500000;
		ownCapitalValue1 = 1250000;
		yearsValue1 = 7;
		interestRateValue1 = 5;
	}

	return {
		init: init,
		uid: UID,
		BUY_DIVISION: BUY_DIVISION, 
		BUY_MAX_VALUE: BUY_MAX_VALUE,
		OWN_CAPITAL_DIVISION: OWN_CAPITAL_DIVISION,
		INTEREST_MAX_VALUE: INTEREST_MAX_VALUE,
		INTEREST_DIVISION: INTEREST_DIVISION,

		//scenario 1
		buySumValue1: buySumValue1,
		ownCapitalValue1: ownCapitalValue1,
		yearsValue1: yearsValue1,
		interestRateValue1: interestRateValue1,

		reset: reset
	};
})();