/**
 * Custom slider that compensates for CSS scaling
 */
var Slider = (function() {
	'use strict';

	var p = Slider.prototype = Object.create(EventEmitter.prototype);
	p.constructor = Slider;

	var __uid = 0;

	var SELECTOR = "slider";

	function Slider(size, handleSize) {
		EventEmitter.call(this);

		this.uid = __uid;
		this._element = null;
		this._handle = null;
		this._bgr = null;
		this._size = size;
		this._handleSize = handleSize;	

		this.value = 1;
		this.restrictValue = 1;

		//setup slider component
		this._element = $('<div class="'+SELECTOR+'" id="'+SELECTOR+this.uid+'"></div>');

		this._bgr = $('<div class="bgr"></div>');
		this._element.append(this._bgr);

		this._element.css('height', this._size + this._handleSize);

		this._handle = $('<div></div>');
		this._element.append(this._handle);

		var that = this;

		//make handle draggable
		this._handle.draggable({
			axis: 'y',
			start: function(event, ui) {
				event.stopPropagation();

				if (Config.isWebKit)
				{
					ui.position.left = 0;
					ui.position.top = 0;
				}
				//UGGLY HAX to make the slider work with touch, don't remove!
				//Remove listeners for touch on reveal
				Reveal.removeEventListeners();
			},
			drag: function(event, ui) {
				event.stopPropagation();

				var changeLeft = ui.position.left - ui.originalPosition.left; // find change in left
				var newLeft = ui.originalPosition.left + changeLeft / Reveal.getScale(); // adjust new left by our zoomScale

				var changeTop = ui.position.top - ui.originalPosition.top; // find change in top
				var newTop = ui.originalPosition.top + changeTop / Reveal.getScale(); // adjust new top by our zoomScale

				ui.position.left = newLeft;
				ui.position.top = newTop;

				var restrictSize = (1-that.restrictValue) * that._size;

				// limit the ui drag handle
				if (ui.position.top < restrictSize)
					ui.position.top = restrictSize;
				else if (ui.position.top > that._size)
					ui.position.top = that._size;

				that._bgr.css('height',(that._size-ui.position.top)+'px');

				that.value = (1-(ui.position.top / that._size));

				that.emit('changed', that.value);
				//return value in callback
				//if (that._sliderCallback !== undefined) that.sliderCallback({value:1-value});
			},
			stop: function(event) {
				event.stopPropagation();

				//UGGLY HAX to make the slider work with touch, don't remove!
				//Add back listeners for touch on reveal
				Reveal.addEventListeners();
			}});
	}

	p.setValue = function(value) {
		if (value < 0 || value > 1) return;

		var posTop = (1-value) * this._size;
		this._handle.css('top',posTop+'px');
		this._bgr.css('height',(this._size-posTop)+'px');

		this.value = value;
	};


	p.addTo = function (element) {
		element.append(this._element);
	};

	return Slider;
})();

/**
 * Custom divider slider that compensates for CSS scaling
 */

var DividerSlider = (function() {
	'use strict';

	var p = DividerSlider.prototype = Object.create(EventEmitter.prototype);
	p.constructor = DividerSlider;

	var __uid = 0;

	var SELECTOR = "dividerSlider";

	function DividerSlider(size, handleSize) {
		EventEmitter.call(this);

		this.uid = ++__uid;

		this.value = 1;

		this._element = $('<div id="'+SELECTOR+this.uid+'" class="'+SELECTOR+'"></div>');
		this._handle = $('<div></div>');
		this._bgr = $('<div class="bgr"></div>');
		this._arrowUp = $('<div class="arrowUp"></div>');
		this._arrowDown = $('<div class="arrowDown"></div>');
		this._infoTop = $('<div class="infoTop"></div>');
		this._infoBottom = $('<div class="infoBottom"></div>');
		this._size = size;
		this._handleSize = handleSize;

		this._element.append(this._bgr);
		this._element.css('height', this._size + this._handleSize);

		this._element.append(this._handle);
		this._element.append(this._infoTop);
		this._element.append(this._infoBottom);
		this._handle.append(this._arrowUp);
		this._handle.append(this._arrowDown);

		var _this = this;

		//make handle draggable
		this._handle.draggable({
			axis: 'y',
			start: function(event, ui) {
				event.stopPropagation();

				if (Config.isWebKit)
				{
					ui.position.left = 0;
					ui.position.top = 0;
				}
				//UGGLY HAX to make the slider work with touch, don't remove!
				//Remove listeners for touch on reveal
				Reveal.removeEventListeners();
			},
			drag: function(event, ui) {
				event.stopPropagation();

				var changeLeft = ui.position.left - ui.originalPosition.left; // find change in left
				var newLeft = ui.originalPosition.left + changeLeft / Reveal.getScale(); // adjust new left by our zoomScale

				var changeTop = ui.position.top - ui.originalPosition.top; // find change in top
				var newTop = ui.originalPosition.top + changeTop / Reveal.getScale(); // adjust new top by our zoomScale

				ui.position.left = newLeft;
				ui.position.top = newTop;

				// limit the ui drag handle
				if (ui.position.top < _this._size/2)
					ui.position.top = _this._size/2;
				else if (ui.position.top > _this._size)
					ui.position.top = _this._size;

				_this._bgr.css('height',(_this._size-ui.position.top)+'px');

				//calculate value
				_this.value = (1-(ui.position.top / _this._size));

				//return value in callback
				_this.emit('changed', _this.value);
				//if (_this.sliderCallback !== undefined) _this.sliderCallback({value:1-value});
			},
			stop: function(event) {
				event.stopPropagation();

				//UGGLY HAX to make the slider work with touch, don't remove!
				//Add back listeners for touch on reveal
				Reveal.addEventListeners();
			}});
	}

	p.setValue = function(value) {
		if (value < 0 || value > 1)
			return;

		var posTop = (1-value) * this._size;
		this._handle.css('top',posTop+'px');
		this._bgr.css('height',(this._size-posTop)+'px');
		this.value = value;
	};

	p.changeSize = function(size) {
		var posTop = (1-this.value)*size;
		this._bgr.css('height', (size*(this.value))+"px");
		this._handle.css('top', posTop+"px");
		this._element.css('height', (size+this._handleSize)+'px');
		this._size = size;
	};

	p.addTo = function (element) {
		element.append(this._element);
	};


	p.hide = function () {
		this._element.hide();
	};

	p.show = function() {
		this._element.show();
	};

	p.addInfoTop = function (value) {
		this._infoTop.html(value);
	};

	p.addInfoBottom = function (value) {
		this._infoBottom.html(value);
	};

	return DividerSlider;

})();


/**
 * Box for slider, uses Slider as base
 */

var SliderBox = (function() {
	'use strict';
	var p = SliderBox.prototype = Object.create(EventEmitter.prototype);
	p.constructor = SliderBox;

	var __uid = 0;

	var SELECTOR = "sliderBox";


	function SliderBox(label, minValue, maxValue, division, decimals, unitLabel) {
		EventEmitter.call(this);

		this.uid = ++__uid;

		this.value = 1;

		this._division = division;
		this._decimals = decimals;
		this._unitLabel = unitLabel === undefined ? "" : unitLabel;

		this._element = $('<div class="'+SELECTOR+'" id="'+(SELECTOR+this.uid)+'"></div>');
		this._minValue = minValue;
		this.maxValue = maxValue;

		this._minTreshold = minValue / maxValue;

		this._valueElement = $('<h1>'+maxValue+'</h1>');
		this._labelElement = $('<h2>'+label+'</h2>');

		this._slider = new Slider(160, 10);	
		this._slider.addTo(this._element);

		this._element.append(this._valueElement);
		this._element.append(this._labelElement);

		var _this = this;

		this._slider.on('changed', function(value) {

			if (value < _this._minTreshold)
				value = _this._minTreshold;

			_this.value = value;


			_this.update();
			_this.emit('changed', value);
		});
	}

	p.setValue = function (value) {
		if (value < 0 || value > 1)
			return;
		this._slider.setValue(value);
		this.value = value;
		this.update();
	};

	p.update = function() {
		var value = this.value;
		var roundedValue = Math.round(value/this._division*this.maxValue)*this._division;

		roundedValue = accounting.formatMoney(roundedValue, "", this._decimals, " ", ",");
	
		this._valueElement.text(roundedValue + this._unitLabel);
	};

	p.addTo = function (element) {
		element.append(this._element);
	};

	p.restrict = function (value) {
		this._slider.restrictValue = value;
	};

	p.setMaxValue = function (maxValue) {

		var currentAmount = this.value * this.maxValue;

		if (currentAmount > maxValue)
			this.value = 1;
		else
			this.value = currentAmount / maxValue;

		this.maxValue = maxValue;

		this._slider.setValue(this.value);
		this.update();
	};

	return SliderBox;
})();


/**
 * Box for slider, uses DividerSlider as base
 */
var ScenarioBox = (function() {
	'use strict';

	var p = ScenarioBox.prototype = Object.create(EventEmitter.prototype);
	p.constructor = ScenarioBox;

	var __uid = 0;

	var SELECTOR = "scenarioBox";

	var DIVISION = 50000;


	function ScenarioBox(label, labelBuyValue, labelPerMonth, labelYears, labelOwnCapital, labelLoanAmount, scenarioNumber) {
		EventEmitter.call(this);

		this.uid = ++__uid;

		this._labelBuyValue = labelBuyValue;
		this._labelPerMonth = labelPerMonth;
		this._labelYears = labelYears;
		this._labelOwnCapital = labelOwnCapital;
		this._labelLoanAmount = labelLoanAmount;

		this._element = $('<div class="'+SELECTOR+'" data-scenario="'+scenarioNumber+'" id="'+(SELECTOR+this.uid)+'"></div>');

		this._slider = new DividerSlider(250, 10);	
		this._slider.addTo(this._element);

		this._value = 1;

		this.$_buySum = $('<h1>8 800 200</h1>');
		this.$_perMonth = $('<h1 class="perMonth">7 500</h1>');
		this.$_years = $('<h1>15</h1>');

		this._ownCapital = 0;
		this._buySum = 0;
		this._years = 0;
		this._interestRate = 0;

		var asideElement = this._asideElement = $('<aside></aside>');
		this._element.append(asideElement);

		asideElement.append('<h2 class="name">'+label+'</h2>');
		asideElement.append(this.$_buySum);
		asideElement.append('<h2>'+labelBuyValue+'</h2>');
		asideElement.append(this.$_perMonth);
		asideElement.append('<h2>'+labelPerMonth+'</h2>');
		asideElement.append(this.$_years);
		asideElement.append('<h2>'+labelYears+'</h2>');
		asideElement.append('</aside>');

		this._element.append(this.$_ownCapital);
		this._element.append(this.$_loanAmount);
		
		var _this = this;

		this._slider.on('changed', function(value) {
			_this.emit('changed', value);

			_this._ownCapital = _this._buySum *value;

			_this._value = value;

			_this.update();
		});

		this._element.click(function(e) {
			_this.emit('click', e);
		});
	}

	p.changeSize = function(size) {
		this._slider.changeSize(size);
	};

	p.setBuySumValue = function (value) {
		this._buySum = value;
		this.update();
	};

	p.setOwnCapital = function (value) {
		this._ownCapital = value;
		this.update();
	};

	p.setYearsValue = function (value) {
		this._years = value;
		this.update();
	};

	p.addTo = function (element) {
		element.append(this._element);
	};

	p.setInterestRate = function (value) {
		this._interestRate = value/100;
		this.update();
	};

	p.hide = function () {
		this._element.hide();
	};

	p.show = function() {
		this._element.fadeIn();
	};

	p.update = function () {
		this._value = this._ownCapital / this._buySum;
		this._slider.setValue(this._value);

		var roundedBuySum = Math.round( this._buySum/DIVISION )*DIVISION;
		var roundedOwnCapital = Math.round( this._ownCapital/DIVISION )*DIVISION;

		var loanAmount = (roundedBuySum-roundedOwnCapital);
		loanAmount = loanAmount < 0 ? 0 : loanAmount;

		var months = this._years*12;
		var interestRate = this._interestRate / 12;
		var costPerMonth = 0;

		/*

		A = annuity
		i = interest rate
		P0 = loan amount
		n = payment schedule: 12 for monthly or 4 for quarterly
		A = i*P0/(1-(1+i)^(-n))

		Which is the same as the below.

		A => annuity
		S => loan amount
		p => interest rate
		n => payment schedule: 12 for monthly or 4 for quarterly
		A = S * p(1+p)^n / ((1+p)^n-1) 
		*/

		if (interestRate === 0)
		{
			costPerMonth = loanAmount / months;
		} else {
			costPerMonth = loanAmount * (interestRate*Math.pow((1+interestRate), months) / (Math.pow((1+interestRate),months)-1));
		}

		//format money
		var loanText = loanAmount > 0 ? this._labelLoanAmount+'<br />'+accounting.formatMoney(loanAmount, "", 0, " ", ",") : '';
		var ownCapitalText = roundedOwnCapital > 0 ? this._labelOwnCapital+'<br />'+accounting.formatMoney(roundedOwnCapital, "", 0, " ", ",") : '';

		this.$_buySum.text(accounting.formatMoney(roundedBuySum, "", 0, " ", ","));
		this.$_years.text(accounting.formatMoney(this._years, "", 0, " ", ","));
		this.$_perMonth.text(accounting.formatMoney(Math.round(costPerMonth/500)*500, "", 0, " ", ","));
		this._slider.addInfoTop(loanText);
		this._slider.addInfoBottom(ownCapitalText);
	};

	p.setSelected = function(value) {
		if (value)
			this._element.addClass('selected');
		else
			this._element.removeClass('selected');
	};

	return ScenarioBox;
})();