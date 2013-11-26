
function alocalize(key) {
		return Globalize.localize(key, Config.language);
	}

function AppViewModel() {
		    this.bullet1 = ko.observable(alocalize("hhAgendaString1"));
		    this.bullet2 = ko.observable(alocalize("hhAgendaString2"));
		}
    
ko.applyBindings(new AppViewModel());