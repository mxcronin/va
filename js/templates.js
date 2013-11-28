var Templates = (function() {
	'use strict';

	var BACKGROUND_TYPE_FULL = "backgroundTypeFull";
	var BACKGROUND_TYPE_RIGHT = "backgroundTypeRight";
	
	var data;

	function initData() {

		data = {
			config: {
			},
			slides: [
			//Household
			//intro
			{
				template: "templateWelcome",
				keyName: "Welcome",
				keyArea: "Welcome",
				tags: "no,fi,sv,da,household,360,theme,introduction,premium,gold",
				backgroundImage: "welcome_hh_"+Config.countryCode+".jpg",
				hideNotes: true,
				locked: true,
				localName: localize("hhWelcomeLocalName"),
				localArea: localize("hhIntroLocalArea"),
				title: localize("hhWelcomeTitle")
			},
			{
				template: "templateAgenda",
				keyName: "Agenda",
				keyArea: "Welcome",
				tags: "no,fi,sv,da,household,360,introduction,premium,gold",
				backgroundImage: "",
				hideNotes: false,
				locked: true,
				localName: localize("hhAgendaLocalName"),
				localArea: localize("hhIntroLocalArea"),
				title: localize("hhAgendaTitle"),
				string1: localize("hhAgendaString1"),
				string2: localize("hhAgendaString2"),
				string3: localize("hhAgendaString3"),
				string4: localize("hhAgendaString4"),
				string5: localize("hhAgendaString5")
			},
			{
				id: 10,
				template: "templateIframe",
				keyName: "Savings & Pension",
				keyArea: "Staus",
				tags: "da,household,360,savingsAndPension,premium,gold",
				backgroundImage: "savings_large.jpg",
				hideNotes: false,
				locked: false,
				localName: localize("hhSavingsPensiondkLocalName"),
				localArea: localize("hhStatusLocalArea"),
				title: localize("hhSavingsPensiondkTitle"),
				paragrafs: [localize("hhSavingsPensiondkString1")],
				url: "https://intservices.sed1.root4.net/fpt_invest/FPTApplication.jsp?customerNumber=[customerId]&locale="+Config.abbriviation+"_"+Config.countryCode.toUpperCase()+"&themeId=2#findcustomer",
				customerFrame: true,
				linkText: localize("hhSavingsPensiondkIframeLink")
			},
			//status
			{
				template: "templateSmallBox",
				keyName: "Future Dreams",
				keyArea: "Status",
				tags: "no,fi,sv,da,household,360,introduction,premium,gold",
				backgroundImage: "",
				hideNotes: false,
				locked: false,
				localName: localize("hhFutureDreamsLocalName"),
				localArea: localize("hhStatusLocalArea"),
				title: localize("hhFutureDreamsTitle"),
				boxes: [{
					string: localize("hhFutureDreamsString1"),
					image: "futureplans.jpg"
				}, 
				{
					string: localize("hhFutureDreamsString2"),
					image: "accomodation.jpg"
				}, 
				{
					string: localize("hhFutureDreamsString3"),
					image: "spareTime.jpg"
				},
				{
					string: localize("hhFutureDreamsString4"),
					image: "family.jpg"
				}, 
				{
					string: localize("hhFutureDreamsString5"),
					image: "safety.jpg"
				}, 
				{
					string: localize("hhFutureDreamsString6"),
					image: "pension.jpg"
				}],
				yearlineString1: localize("hhFutureDreamsYearlineString1"),
				yearlineString2: localize("hhFutureDreamsYearlineString2"),
				yearlineString3: localize("hhFutureDreamsYearlineString3"),
				yearlineString4: localize("hhFutureDreamsYearlineString4")
			},
			{
				template: "templateLeftColumn",
				keyName: "Economy Overview",
				keyArea: "Status",
				tags: "no,household,360,introduction,premium,gold",
				backgroundImage: "",
				hideNotes: false,
				locked: false,
				localName: localize("hhEconomyOverviewLocalName"),
				localArea: localize("hhStatusLocalArea"),
				title: localize("hhEconomyOverviewTitle"),
				byline: localize("hhEconomyOverviewByline"),
				subTitle1: localize("hhEconomyOverviewSubTitle1"),
				nestedLists: [
					{text: localize("hhEconomyOverviewBullet1")},
					{text: localize("hhEconomyOverviewBullet2")},
					{text: localize("hhEconomyOverviewBullet3")}
				],
				subTitle2: localize("hhEconomyOverviewSubTitle2"),
				iframe: true,
				image: "dailye.jpg",
				url: "http://ccd1is0394:81/KundePres/",
				linkText: localize("hhEconomyOverviewIframeLink")
			},
			{
				template: "templateMediumBox",
				keyName: "Advantage Program",
				keyArea: "Status",
				tags: "no,fi,sv,household,360,aboutNordea,premium,gold",
				backgroundImage: "",
				hideNotes: false,
				locked: false,
				localName: localize("hhAdvantageProgramLocalName"),
				localArea: localize("hhStatusLocalArea"),
				title: localize("hhAdvantageProgramTitle"),
				boxes: [{
					bullets: [
						localize("hhAdvantageProgramBox1Bullet1"),
						localize("hhAdvantageProgramBox1Bullet2"),
						localize("hhAdvantageProgramBox1Bullet3")
					],
					image: "child.jpg",
					caption: localize("hhAdvantageProgramBox1Caption")
				},
				{
					bullets: [
						localize("hhAdvantageProgramBox2Bullet1"),
						localize("hhAdvantageProgramBox2Bullet2"),
						localize("hhAdvantageProgramBox2Bullet3")
					],
					image: "teen1.jpg",
					caption: localize("hhAdvantageProgramBox2Caption")
				},
				{
					bullets: [
					 	localize("hhAdvantageProgramBox3Bullet1"),
						localize("hhAdvantageProgramBox3Bullet2"),
						localize("hhAdvantageProgramBox3Bullet3")
					],
					image: "teensummer.jpg",
					caption: localize("hhAdvantageProgramBox3Caption")
				},
				{
					bullets: [
						localize("hhAdvantageProgramBox4Bullet1"),
						localize("hhAdvantageProgramBox4Bullet2"),
						localize("hhAdvantageProgramBox4Bullet3")
					],
					image: "couple.jpg",
					caption: localize("hhAdvantageProgramBox4Caption")
				},
				{
					bullets: [
						localize("hhAdvantageProgramBox5Bullet1"),
						localize("hhAdvantageProgramBox5Bullet2")
					],
					image: "premium.jpg",
					caption: localize("hhAdvantageProgramBox5Caption")
				},
				{
					bullets: [
						localize("hhAdvantageProgramBox6Bullet1")
					],
					image: "meeting.jpg",
					caption: localize("hhAdvantageProgramBox6Caption")
				}]
			},
			{
				template: "templateMediumBox",
				keyName: "Advantage Program",
				keyArea: "Status",
				tags: "da,household,aboutNordea,premium,gold",
				backgroundImage: "",
				hideNotes: false,
				locked: false,
				localName: localize("hhAdvantageProgramLocalName"),
				localArea: localize("hhStatusLocalArea"),
				title: localize("hhAdvantageProgramTitle"),
				boxes: [{
					bullets: [
						localize("hhAdvantageProgramBox1Bullet1"),
						localize("hhAdvantageProgramBox1Bullet2"),
						localize("hhAdvantageProgramBox1Bullet3")
					],
					image: "child.jpg",
					caption: localize("hhAdvantageProgramBox1Caption")
				},
				{
					bullets: [
						localize("hhAdvantageProgramBox2Bullet1"),
						localize("hhAdvantageProgramBox2Bullet2"),
						localize("hhAdvantageProgramBox2Bullet3")
					],
					image: "teen1.jpg",
					caption: localize("hhAdvantageProgramBox2Caption")
				},
				{
					bullets: [
					 	localize("hhAdvantageProgramBox3Bullet1"),
						localize("hhAdvantageProgramBox3Bullet2"),
						localize("hhAdvantageProgramBox3Bullet3")
					],
					image: "teensummer.jpg",
					caption: localize("hhAdvantageProgramBox3Caption")
				},
				{
					bullets: [
						localize("hhAdvantageProgramBox4Bullet1"),
						localize("hhAdvantageProgramBox4Bullet2"),
						localize("hhAdvantageProgramBox4Bullet3")
					],
					image: "couple.jpg",
					caption: localize("hhAdvantageProgramBox4Caption")
				},
				{
					bullets: [
						localize("hhAdvantageProgramBox5Bullet1")
					],
					image: "premium.jpg",
					caption: localize("hhAdvantageProgramBox5Caption")
				},
				{
					bullets: [
						localize("hhAdvantageProgramBox6Bullet1")
					],
					image: "meeting.jpg",
					caption: localize("hhAdvantageProgramBox6Caption")
				}]
			},
				
			{
				template: "templateBox",
				keyName: "Financial Solutions",
				keyArea: "Solutions",
				tags: "no,fi,sv,household,360,aboutNordea,premium,gold",
				backgroundImage: "",
				hideNotes: false,
				locked: false,
				localName: localize("hhFinancialSolutionsLocalName"),
				localArea: localize("hhSolutionsLocalArea"),
				title: localize("hhFinancialSolutionsTitle"),
				boxes: [{
					title: localize("hhFinancialSolutionsBox1Title"),
					lists: [{
						bullets: [localize("hhFinancialSolutionsBox1Bullet1"), localize("hhFinancialSolutionsBox1Bullet2")]
					}],
					image: "dailybusiness.jpg"
				},
				{
					title: localize("hhFinancialSolutionsBox2Title"),
					lists: [{
						bullets: [localize("hhFinancialSolutionsBox2Bullet1"), localize("hhFinancialSolutionsBox2Bullet2")]
					}],
					image: "savings.jpg"
				},
				{
					title: localize("hhFinancialSolutionsBox3Title"),
					lists: [{
						bullets: [localize("hhFinancialSolutionsBox3Bullet1"), localize("hhFinancialSolutionsBox3Bullet2"), localize("hhFinancialSolutionsBox3Bullet3"), localize("hhFinancialSolutionsBox3Bullet4")]
					}],
					image: "balkon.jpg"
				},
				{
					title: localize("hhFinancialSolutionsBox4Title"),
					lists: [{
						bullets: [localize("hhFinancialSolutionsBox4Bullet1"), localize("hhFinancialSolutionsBox4Bullet2"), localize("hhFinancialSolutionsBox4Bullet3")]
					}],
					image: "safe.jpg"
				}]
			}, 
			{
				template: "templateBox",
				keyName: "Financial Solutions",
				keyArea: "Solutions",
				tags: "da,household,aboutNordea,premium,gold",
				backgroundImage: "",
				hideNotes: false,
				locked: false,
				localName: localize("hhFinancialSolutionsLocalName"),
				localArea: localize("hhSolutionsLocalArea"),
				title: localize("hhFinancialSolutionsTitle"),
				boxes: [{
					title: localize("hhFinancialSolutionsBox1Title"),
					lists: [{
						bullets: [localize("hhFinancialSolutionsBox1Bullet1"), localize("hhFinancialSolutionsBox1Bullet2")]
					}],
					image: "dailybusiness.jpg"
				},
				{
					title: localize("hhFinancialSolutionsBox2Title"),
					lists: [{
						bullets: [localize("hhFinancialSolutionsBox2Bullet1"), localize("hhFinancialSolutionsBox2Bullet2")]
					}],
					image: "savings.jpg"
				},
				{
					title: localize("hhFinancialSolutionsBox3Title"),
					lists: [{
						bullets: [localize("hhFinancialSolutionsBox3Bullet1"), localize("hhFinancialSolutionsBox3Bullet2"), localize("hhFinancialSolutionsBox3Bullet3"), localize("hhFinancialSolutionsBox3Bullet4")]
					}],
					image: "balkon.jpg"
				},
				{
					title: localize("hhFinancialSolutionsBox4Title"),
					lists: [{
						bullets: [localize("hhFinancialSolutionsBox4Bullet1"), localize("hhFinancialSolutionsBox4Bullet2"), localize("hhFinancialSolutionsBox4Bullet3")]
					}],
					image: "safe.jpg"
				}]
			}, 
			{
				template: "templateLeftColumn",
				keyName: "Mobile Bank",
				keyArea: "Solutions",
				tags: "no,household,dailyBanking,premium,gold",
				backgroundImage: "",
				hideNotes: false,
				locked: false,
				localName: localize("hhMobileBankLocalName"),
				localArea: localize("hhSolutionsLocalArea"),
				title: localize("hhMobileBankTitle"),
				byline: localize("hhMobileBankByline"),
				subTitle1: localize("hhMobileBankSubTitle1"),
				nestedLists: [
					{text: localize("hhMobileBankBullet1")},
					{text: localize("hhMobileBankBullet2")},
					{text: localize("hhMobileBankBullet3")}
				],
				subTitle2: localize("hhMobileBankSubTitle2"),
				images: ["google-store.svg","iOS-store.svg","wp-store.svg"],
				image: "mobile.png",
				iframe: true,
				url: "http://www.nordea.no/sitemod/upload/root/www_nordea_no/nettbankdemo/mobildemo/demo/iphone-frame.htm",
				linkText: localize("hhMobileBankIframeLink")
			},
			{
				template: "templateLeftColumn",
				keyName: "Mobile Bank",
				keyArea: "Solutions",
				tags: "fi,household,dailyBanking,premium,gold",
				backgroundImage: "",
				hideNotes: false,
				locked: false,
				localName: localize("hhMobileBankLocalName"),
				localArea: localize("hhSolutionsLocalArea"),
				title: localize("hhMobileBankTitle"),
				byline: localize("hhMobileBankByline"),
				subTitle1: localize("hhMobileBankFISubTitle1"),
				nestedLists: [
					{text: localize("hhMobileBankBullet1")},
					{text: localize("hhMobileBankBullet2")},
					{text: localize("hhMobileBankBullet3")}
				],
				subTitle2: localize("hhMobileBankSubTitle2"),
				images: ["google-store.svg","iOS-store.svg","wp-store.svg"],
				image: "mobile.png",
				iframe: true,
				url: "http://www.nordea.fi/Henkilöasiakkaat/Päivittäiset+raha-asiat/Mobiilipalvelut/Uusi+mobiilisovellus+Android+ja+iPhone+puhelimille/1608802.html?lnkID=d-box_katso-video_katso-miten-voit-kayttaa-mobiilisovellusta",
				linkText: localize("hhMobileBankIframeLink")
			},
			{
				template: "templateLeftColumn",
				keyName: "Mobile Bank",
				keyArea: "Solutions",
				tags: "da,household,corporate,dailyBanking,small,premium,gold",
				backgroundImage: "",
				hideNotes: false,
				locked: false,
				localName: localize("hhMobileBankLocalName"),
				localArea: localize("hhSolutionsLocalArea"),
				title: localize("hhMobileBankTitle"),
				byline: localize("hhMobileBankByline"),
				subTitle1: localize("hhMobileBankSubTitle1"),
				nestedLists: [
					{text: localize("hhMobileBankBullet1")},
					{text: localize("hhMobileBankBullet2")},
					{text: localize("hhMobileBankBullet3")}
				],
				subTitle2: localize("hhMobileBankSubTitle2"),
				images: ["google-store.svg","iOS-store.svg","wp-store.svg"],
				image: "mobile.png",
				iframe: true,
				url: "http://www.nordea.dk/Privat/Daglig+%C3%B8konomi/Internet/Mobilbank/1450562.html?WT.svl=mega-menu_daglig-okonomi_product_mobilbank",
				linkText: localize("hhMobileBankIframeLink")
			},
			{
				template: "templateLeftColumn",
				keyName: "FPT SE",
				keyArea: "Solutions",
				tags: "sv,household,360,savingsAndPension,premium,gold",
				backgroundImage: "",
				hideNotes: false,
				locked: false,
				localName: localize("hhFPTseLocalName"),
				localArea: localize("hhSolutionsLocalArea"),
				title: localize("hhFPTseTitle"),
				byline: localize("hhFPTseByline"),
				subTitle1: localize("hhFPTseSubTitle1"),
				nestedLists: [
					{text: localize("hhFPTseBullet1")},
					{text: localize("hhFPTseBullet2")},
					{text: localize("hhFPTseBullet3")}
				],
				subTitle2: localize("hhFPTseSubTitle2"),
				image: "savings1.jpg",
				iframe: true,
				url: "https://intservices.sed1.root4.net/fpt_invest/FPTApplication.jsp?customerNumber=[customerId]&locale="+Config.abbriviation+"_"+Config.countryCode.toUpperCase()+"&themeId=2#findcustomer",
				customerFrame: true,
				linkText: localize("hhFPTseIframeLink")			},
			{
				template: "templateLeftColumn",
				keyName: "CAPITEX SE",
				keyArea: "Solutions",
				tags: "sv,household,360,housing,premium,gold",
				backgroundImage: "",
				hideNotes: false,
				locked: false,
				localName: localize("hhCAPITEXseLocalName"),
				localArea: localize("hhSolutionsLocalArea"),
				title: localize("hhCAPITEXseTitle"),
				byline: localize("hhCAPITEXseByline"),
				subTitle1: localize("hhCAPITEXseSubTitle1"),
				nestedLists: [
					{text: localize("hhCAPITEXseBullet1")},
					{text: localize("hhCAPITEXseBullet2")},
					{text: localize("hhCAPITEXseBullet3")}
				],
				subTitle2: localize("hhCAPITEXseSubTitle2"),
				image: "house2.jpg",
				iframe: true,
				url: "https://intservices.sed1.root4.net/capitex/BoendeKalkyl.WebbGraenssnitt-war/BoKalkGraenssnitt?standalone=1",
				linkText: localize("hhCAPITEXseIframeLink")
			},
			{
				template: "templateLeftColumn",
				keyName: "NPP SE",
				keyArea: "Solutions",
				tags: "sv,household,360,savingsAndPension,premium,gold",
				backgroundImage: "",
				hideNotes: false,
				locked: false,
				localName: localize("hhNPPseLocalName"),
				localArea: localize("hhSolutionsLocalArea"),
				title: localize("hhNPPseTitle"),
				byline: localize("hhNPPseByline"),
				subTitle1: localize("hhNPPseSubTitle1"),
				nestedLists: [
					{text: localize("hhNPPseBullet1")},
					{text: localize("hhNPPseBullet2")},
					{text: localize("hhNPPseBullet3")}
				],
				subTitle2: localize("hhNPPseSubTitle2"),
				image: "pension1.jpg",
				iframe: true,
				url: "https://intservices.sed1.root4.net/fpt_se/fpt_se/fp_tool/findcustomer.do?language=sv&country=se&locale=sv&sessionId=[customerId]",
				linkText: localize("hhNPPseIframeLink")
			},
			{
				template: "templateLeftColumn",
				keyName: "NLT fi",
				keyArea: "Solutions",
				tags: "",
				backgroundImage: "",
				hideNotes: false,
				locked: false,
				localName: localize("hhNLTfiLocalName"),
				localArea: localize("hhSolutionsLocalArea"),
				title: localize("hhNLTfiTitle"),
				byline: localize("hhNLTfiByline"),
				subTitle1: localize("hhNLTfiSubTitle1"),
				nestedLists: [
					{text: localize("hhNLTfiBullet1")},
					{text: localize("hhNLTfiBullet2")},
					{text: localize("hhNLTfiBullet3")}
				],
				subTitle2: localize("hhNLTfiSubTitle2"),
				image: "house2.jpg",
				iframe: true,
				url: "https://intservices.sed1.root4.net/openpages_ns/nordea-openpages-int2/fi/houseloan/houseloan.action?language=fi",
				linkText: localize("hhNLTfiIframeLink")
			},
			{
				template: "templateLeftColumn",
				keyName: "Insurance SE",
				keyArea: "Solutions",
				tags: "sv,household,insurance,premium,gold",
				backgroundImage: "",
				hideNotes: false,
				locked: false,
				localName: localize("hhInsuranceseLocalName"),
				localArea: localize("hhSolutionsLocalArea"),
				title: localize("hhInsuranceseTitle"),
				byline: localize("hhInsuranceseByline"),
				subTitle1: localize("hhInsuranceseSubTitle1"),
				nestedLists: [
					{text: localize("hhInsuranceseBullet1")},
					{text: localize("hhInsuranceseBullet2")},
					{text: localize("hhInsuranceseBullet3")}
				],
				subTitle2: localize("hhInsuranceseSubTitle2"),
				image: "boat1.jpg",
				iframe: false,
				url: "https://intservices.sed1.root4.net/fpt_se/fpt_se/fp_tool/findcustomer.do?language=sv&country=se&locale=sv&sessionId=[customerId]",
				linkText: localize("hhInsuranceseIframeLink")
			},
			{
				template: "templateLeftColumn",
				keyName: "Mobile Bank se",
				keyArea: "Solutions",
				tags: "sv,household,dailyBanking,premium,gold",
				backgroundImage: "",
				hideNotes: false,
				locked: false,
				localName: localize("hhMobileBankseLocalName"),
				localArea: localize("hhSolutionsLocalArea"),
				title: localize("hhMobileBankseTitle"),
				byline: localize("hhMobileBankseByline"),
				subTitle1: localize("hhMobileBankseSubTitle1"),
				nestedLists: [
					{text: localize("hhMobileBankseBullet1")},
					{text: localize("hhMobileBankseBullet2")},
					{text: localize("hhMobileBankseBullet3")}
				],
				subTitle2: localize("hhMobileBankseSubTitle2"),
				images: ["google-store.svg","iOS-store.svg","wp-store.svg"],
				image: "mobile.png",
				iframe: true,
				url: "http://www.nordea.se/Privat/Vardagstj%C3%A4nster/Mobila%2btj%C3%A4nster/Mobilbanken/202044.html?WT.svl=mega-menu_vardagstjanster_product_mobilbanken",
				linkText: localize("hhMobileBankseIframeLink")
			},
			{
				template: "templateLeftColumn",
				keyName: "savings dk",
				keyArea: "Solutions",
				tags: "da,household,360,savingsAndPension,premium,gold",
				backgroundImage: "",
				hideNotes: false,
				locked: false,
				localName: localize("hhSavingsdkLocalName"),
				localArea: localize("hhSolutionsLocalArea"),
				title: localize("hhSavingsdkTitle"),
				byline: localize("hhSavingsdkByline"),
				subTitle1: localize("hhSavingsdkSubTitle1"),
				nestedLists: [
					{text: localize("hhSavingsdkBullet1")},
					{text: localize("hhSavingsdkBullet2")},
					{text: localize("hhSavingsdkBullet3")}
				],
				subTitle2: localize("hhSavingsdkSubTitle2"),
				image: "savings1.jpg",
				iframe: false,
				url: "",
				linkText: localize("hhSavingsdkIframeLink")
			},
			{
				template: "templateLeftColumn",
				keyName: "Insurance DK",
				keyArea: "Solutions",
				tags: "da,household,360,savingsAndPension,premium,gold",
				backgroundImage: "",
				hideNotes: false,
				locked: false,
				localName: localize("hhInsurancedkLocalName"),
				localArea: localize("hhSolutionsLocalArea"),
				title: localize("hhInsurancedkTitle"),
				byline: localize("hhInsurancedkByline"),
				subTitle1: localize("hhInsurancedkSubTitle1"),
				nestedLists: [
					{text: localize("hhInsurancedkBullet1")},
					{text: localize("hhInsurancedkBullet2")},
					{text: localize("hhInsurancedkBullet3")}
				],
				subTitle2: localize("hhInsurancedkSubTitle2"),
				image: "couple1.jpg",
				iframe: false,
				url: "",
				linkText: localize("hhInsurancedkIframeLink")
			},
			{
				template: "templateLeftColumn",
				keyName: "Loan DK",
				keyArea: "Solutions",
				tags: "da,household,360,savingsAndPension,premium,gold",
				backgroundImage: "",
				hideNotes: false,
				locked: false,
				localName: localize("hhLoandkLocalName"),
				localArea: localize("hhSolutionsLocalArea"),
				title: localize("hhLoandkTitle"),
				byline: localize("hhLoandkByline"),
				subTitle1: localize("hhLoandkSubTitle1"),
				nestedLists: [
					{text: localize("hhLoandkBullet1")},
					{text: localize("hhLoandkBullet2")},
					{text: localize("hhLoandkBullet3")}
				],
				subTitle2: localize("hhLoandkSubTitle2"),
				image: "house2.jpg",
				iframe: false,
				url: "",
				linkText: localize("hhLoandkIframeLink")
			},
			{
				id: 8,
				template: "templateMotivator",
				keyName: "House Loan Motivator",
				keyArea: "Solutions",
				tags: "no,household,housing,premium,gold",
				backgroundImage: "",
				hideNotes: false,
				locked: false,
				localName: localize("hhHouseLoanLocalName"),
				localArea: localize("hhSolutionsLocalArea"),
				title: localize("hhHouseLoanTitle"),
				motivatorId: "motivator"
			},
			{
				id: 9,
				template: "templateIframe",
				keyName: "Personal Insurance",
				keyArea: "Solutions",
				tags: "no,household,insurance,premium,gold",
				backgroundImage: "person_insurance_large.jpg",
				hideNotes: false,
				locked: false,
				localName: localize("hhPersonalInsuranceLocalName"),
				localArea: localize("hhSolutionsLocalArea"),
				title: localize("hhPersonalInsuranceTitle"),
				paragrafs: [localize("hhPersonalInsuranceString1"),localize("hhPersonalInsuranceString2")],
				url: "http://nlpn.ccd1.root4.net/cms/LivliVAgenda.asp?pnr=[customerId]",
				customerFrame: true,
				linkText: localize("hhPersonalInsuranceIframeLink")
			},
			{
				id: 9,
				template: "templateIframe",
				keyName: "Insurance FI",
				keyArea: "Solutions",
				tags: "fi,household,insurance,premium,gold",
				backgroundImage: "person_insurance_large.jpg",
				hideNotes: false,
				locked: false,
				localName: localize("hhInsuranceFILocalName"),
				localArea: localize("hhSolutionsLocalArea"),
				title: localize("hhInsuranceFITitle"),
				paragrafs: [localize("hhInsuranceFIString1"),localize("hhInsuranceFIString2")],
				url: "http://www.nordea.fi/Henkilöasiakkaat/Eläke+ja+vakuutus/Vahinkovakuutukset/703464.html",
				customerFrame: true,
				linkText: localize("hhInsuranceFIIframeLink")
			},
			{
				id: 11119,
				template: "templateIframe",
				keyName: "Housing loan tool FI",
				keyArea: "Solutions",
				tags: "fi,household,360,housing,premium,gold",
				backgroundImage: "housecal.jpg",
				hideNotes: false,
				locked: false,
				localName: localize("hhHousingFILocalName"),
				localArea: localize("hhSolutionsLocalArea"),
				title: localize("hhHousingFITitle"),
				paragrafs: [localize("hhHousingFIString1"),localize("hhHousingFIString2")],
				url: "https://intservices.sed1.root4.net/openpages_ns/nordea-openpages-int2/fi/houseloan/houseloan.action?language=fi ",
				customerFrame: true,
				linkText: localize("hhHousingFIIframeLink")
			},
			{
				id: 119,
				template: "templateIframe",
				keyName: "Loancalculator",
				keyArea: "Solutions",
				tags: "no,household,housing,premium,gold",
				backgroundImage: "housecal.jpg",
				hideNotes: false,
				locked: false,
				localName: localize("hhloancalhhLocalName"),
				localArea: localize("hhSolutionsLocalArea"),
				title: localize("hhloancalhhTitle"),
				paragrafs: [localize("hhloancalhhString1"),localize("hhloancalhhString2")],
				url: "http://www.nordea.no/sitemod/upload/root/motivator/loancalculator_no/index.html",
				customerFrame: true,
				linkText: localize("hhPersonalInsurance1IframeLink")
			},
			{
				id: 1119,
				template: "templateIframe",
				keyName: "loanse",
				keyArea: "Solutions",
				tags: "sv,household,housing,premium,gold",
				backgroundImage: "housecal.jpg",
				hideNotes: false,
				locked: false,
				localName: localize("hhloanseLocalName"),
				localArea: localize("hhSolutionsLocalArea"),
				title: localize("hhloanseTitle"),
				paragrafs: [localize("hhloanseString1"),localize("hhloanseString2")],
				url: "https://intservices.sed1.root4.net/capitex/BoendeKalkyl.WebbGraenssnitt-war/BoKalkGraenssnitt?standalone=1",
				customerFrame: true,
				linkText: localize("hhloanseIframeLink")
			},
			{
				id: 111119,
				template: "templateIframe",
				keyName: "NordeaBil",
				keyArea: "Solutions",
				tags: "da,household,corporate,aboutNordea,premium,gold,small",
				backgroundImage: "car1.jpg",
				hideNotes: false,
				locked: false,
				localName: localize("hhNordeaBilLocalName"),
				localArea: localize("hhSolutionsLocalArea"),
				title: localize("hhNordeaBilTitle"),
				paragrafs: [localize("hhNordeaBilString1"),localize("hhNordeaBilString2")],
				url: "http://www.nordea.dk/privat/l%C3%A5n/l%C3%A5n+og+kreditter/nordea+bil/1590062.html",
				customerFrame: true,
				linkText: localize("hhNordeaBilIframeLink")
			},
			{
				id: 11119,
				template: "templateIframe",
				keyName: "Boligberegner",
				keyArea: "Solutions",
				tags: "da,household,corporate,housing,aboutNordea,premium,gold,small",
				backgroundImage: "housecal.jpg",
				hideNotes: false,
				locked: false,
				localName: localize("hhBoligberegnerLocalName"),
				localArea: localize("hhSolutionsLocalArea"),
				title: localize("hhBoligberegnerTitle"),
				paragrafs: [localize("hhBoligberegnerString1"),localize("hhBoligberegnerString2")],
				url: "http://www.nordea.dk/Privat/Ny%2bkunde/Bliv%2bkunde%2b-%2bPrivat/Visuel%2bagenda%2b-%2bBoligberegner/1642792.html",
				customerFrame: true,
				linkText: localize("hhBoligberegnerIframeLink")
			},
			{
				id: 111119,
				template: "templateIframe",
				keyName: "Bokalkyl se",
				keyArea: "Solutions",
				tags: "sv,household,housing,premium,gold",
				backgroundImage: "housecal.jpg",
				hideNotes: false,
				locked: false,
				localName: localize("hhBokalkylSELocalName"),
				localArea: localize("hhSolutionsLocalArea"),
				title: localize("hhBokalkylSETitle"),
				paragrafs: [localize("hhBokalkylSEString1"),localize("hhBokalkylSEString2")],
				url: "http://www.nordea.se/Privat/L%C3%A5n/Boende/Bokalkyl/1440892.html?lnkID=mega-menu_lan_banner_bokalkyl_15-04-2013",
				customerFrame: true,
				linkText: localize("hhBokalkylSEIframeLink")
			},
			{
				id: 7,
				template: "templateSVG",
				keyName: "SVG",
				keyArea: "Solutions",
				tags: "",
				backgroundImage: "",
				hideNotes: false,
				locked: false,
				localName: "svg",
				localArea: localize("hhSolutionsLocalArea"),
				title: "test",
				image: "grafdk.svg"
			},
			{
				id: 10,
				template: "templateIframe",
				keyName: "Savings & Pension",
				keyArea: "Solutions",
				tags: "no,fi,da,household,360,savingsAndPension,premium,gold",
				backgroundImage: "savings_large.jpg",
				hideNotes: false,
				locked: false,
				localName: localize("hhSavingsPensionLocalName"),
				localArea: localize("hhSolutionsLocalArea"),
				title: localize("hhSavingsPensionTitle"),
				paragrafs: [localize("hhSavingsPensionString1")],
				url: "https://intservices.sed1.root4.net/fpt_invest/FPTApplication.jsp?customerNumber=[customerId]&locale="+Config.abbriviation+"_"+Config.countryCode.toUpperCase()+"&themeId=2#findcustomer",
				customerFrame: true,
				linkText: localize("hhSavingsPensionIframeLink")
			},
			{
				id: 110,
				template: "templateIframe",
				keyName: "Savings & Pension",
				keyArea: "Solutions",
				tags: "sv,household,savingsAndPension,premium,gold",
				backgroundImage: "savings_large.jpg",
				hideNotes: false,
				locked: false,
				localName: localize("hhSavingsPensionLocalName"),
				localArea: localize("hhSolutionsLocalArea"),
				title: localize("hhSavingsPensionTitle"),
				paragrafs: [localize("hhSavingsPensionString1")],
				url: "https://intservices.sed1.root4.net/fpt_invest/FPTApplication.jsp?customerNumber=[customerId]&locale="+Config.abbriviation+"_"+Config.countryCode.toUpperCase()+"&themeId=2#findcustomer",
				customerFrame: true,
				linkText: localize("hhSavingsPensionIframeLink")
			},
			{
				id: 110,
				template: "templateIframe",
				keyName: "NPP Pension",
				keyArea: "Solutions",
				tags: "",
				backgroundImage: "oldboat.jpg",
				hideNotes: false,
				locked: true,
				localName: localize("hhNPPpensionSELocalName"),
				localArea: localize("hhSolutionsLocalArea"),
				title: localize("hhNPPpensionSETitle"),
				paragrafs: [localize("hhNPPpensionSEString1")],
				url: "https://intservices.sed1.root4.net/fpt_se/fpt_se/fp_tool/findcustomer.do?language=sv&country=se&locale=sv&sessionId=[customerId]", 
				customerFrame: true,
				linkText: localize("hhNPPpensionSEIframeLink")
			},
			{
				id: 1111110,
				template: "templateIframe",
				keyName: "Livförsäkring SE",
				keyArea: "Solutions",
				tags: "sv,household,insurance,premium,gold",
				backgroundImage: "familylife.jpg",
				hideNotes: false,
				locked: true,
				localName: localize("hhLivFseLocalName"),
				localArea: localize("hhSolutionsLocalArea"),
				title: localize("hhLivFseTitle"),
				paragrafs: [localize("hhLivFseString1")],
				url: "https://intservices.sed1.root4.net/lpp/internal/dispatcher?0&socsec=[customerId]&clearingno=1748", 
				customerFrame: true,
				linkText: localize("hhLivFseIframeLink")
			},
			{
				id: 11110,
				template: "templateIframe",
				keyName: "Savings & Pension",
				keyArea: "Solutions",
				tags: "da,fi,corporate,savingsAndPension,small,medium",
				backgroundImage: "savings_large.jpg",
				hideNotes: false,
				locked: true,
				localName: localize("hhSavingsPensionLocalName"),
				localArea: localize("hhSolutionsLocalArea"),
				title: localize("hhSavingsPensionTitle"),
				paragrafs: [localize("hhSavingsPensionString1")],
				url: "https://intservices.sed1.root4.net/fpt_invest/FPTApplication.jsp?customerNumber=[customerId]&locale="+Config.abbriviation+"_"+Config.countryCode.toUpperCase()+"&themeId=2#findcustomer",
				customerFrame: true,
				linkText: localize("hhSavingsPensionIframeLink")
			},
			{
				id: 11,
				template: "templateIframe",
				keyName: "Tryg Insurance",
				keyArea: "Solutions",
				tags: "no,household,insurance,premium,gold",
				backgroundImage: "insurance_large.jpg",
				hideNotes: false,
				locked: false,
				localName: localize("hhTrygInsuranceLocalName"),
				localArea: localize("hhSolutionsLocalArea"),
				title: localize("hhTrygInsuranceTitle"),
				paragrafs: [localize("hhTrygInsuranceString1"),localize("hhTrygInsuranceString2")],
				url: "https://salgsnokkelen.tryg.no/dopa-web/inputMySimpleSearchAction.do",
				customerFrame: false,
				linkText: localize("hhTrygInsuranceIframeLink")
			},
			{
				id: 12,
				template: "templateLeftColumn",
				keyName: "Change Bank",
				keyArea: "Solutions",
				tags: "no,fi,da,household,aboutNordea,premium,gold",
				backgroundImage: "",
				hideNotes: false,
				locked: false,
				localName: localize("hhChangeBankLocalName"),
				localArea: localize("hhSolutionsLocalArea"),
				title: localize("hhChangeBankTitle"),
				byline: localize("hhChangeBankByline"),
				nestedLists: [
					{text: localize("hhChangeBankBullet1"),
					bullets: [localize("hhChangeBankBullet1Dropdown1")]},
					{text: localize("hhChangeBankBullet2"),
					bullets: [localize("hhChangeBankBullet2Dropdown1")]},
					{text: localize("hhChangeBankBullet3"),
					bullets: [localize("hhChangeBankBullet3Dropdown1")]},
					{text: localize("hhChangeBankBullet4"),
					bullets: [localize("hhChangeBankBullet4Dropdown1")]}
				],
				image: "new_customer.jpg"
			},
			{
				id: 13,
				template: "templateLeftColumn",
				keyName: "Choice of Bank",
				keyArea: "Solutions",
				tags: "no,fi,da,household,aboutNordea,premium,gold",
				backgroundImage: "choice_of_bank_large.jpg",
				backgroundType: BACKGROUND_TYPE_RIGHT,
				hideNotes: false,
				locked: false,
				localName: localize("hhChoiceOfBankLocalName"),
				localArea: localize("hhSolutionsLocalArea"),
				title: localize("hhChoiceOfBankTitle"),
				byline: localize("hhChoiceOfBankByline"),
				nestedLists: [
					{text: localize("hhChoiceOfBankBullet1")},
					{text: localize("hhChoiceOfBankBullet2")},
					{text: localize("hhChoiceOfBankBullet3")},
					{text: localize("hhChoiceOfBankBullet4")}
				]
			},
			{
				id: 14,
				template: "templateRoof",
				keyName: "Housing",
				keyArea: "Solutions",
				tags: "no,sv,household,housing,premium,gold",
				backgroundImage: "",
				hideNotes: false,
				locked: false,
				localName: localize("hhHousingLocalName"),
				localArea: localize("hhSolutionsLocalArea"),
				title: localize("hhHousingTitle"),
				columns: [
					{header: localize("hhHousingHeader1"),
					bullets: [localize("hhHousingHeader1Bullet1"),localize("hhHousingHeader1Bullet2")]},
					{header: localize("hhHousingHeader2"),
					bullets: [localize("hhHousingHeader2Bullet1"),localize("hhHousingHeader2Bullet2")]},
					{header: localize("hhHousingHeader3"),
					bullets: [localize("hhHousingHeader3Bullet1"),localize("hhHousingHeader3Bullet2")]},
					{header: localize("hhHousingHeader4"),
					bullets: [localize("hhHousingHeader4Bullet1"),localize("hhHousingHeader4Bullet2")]}
				],
				images: ["housingLoan.jpg","personalInsurance.jpg","monthlySavings.jpg","Security1.jpg"]
			},
			{
				id: 29,
				template: "templateLeftColumn",
				keyName: "Premium NO",
				keyArea: "Status",
				tags: "no,household,AboutNordea,gold,premium",
				backgroundImage: "",
				hideNotes: false,
				locked: false,
				localName: localize("hhPremiumNOLocalName"),
				localArea: localize("hhSolutionsLocalArea"),
				title: localize("hhPremiumNOTitle"),
				byline: localize("hhPremiumNOByline"),
				nestedLists: [	
					{text: localize("hhPremiumNOBullet1"),
					bullets: [
						localize("hhPremiumNOBullet1Dropdown1"),
						localize("hhPremiumNOBullet1Dropdown2"),
						localize("hhPremiumNOBullet1Dropdown3"),
						localize("hhPremiumNOBullet1Dropdown4")]},
					{text: localize("hhPremiumNOBullet2"),
					bullets: [
						localize("hhPremiumNOBullet2Dropdown1"),
						localize("hhPremiumNOBullet2Dropdown2"),
						localize("hhPremiumNOBullet2Dropdown3"),
						localize("hhPremiumNOBullet2Dropdown4")]},
					{text: localize("hhPremiumNOBullet3"),
					bullets: [
						localize("hhPremiumNOBullet3Dropdown1"),
						localize("hhPremiumNOBullet3Dropdown2"),
						localize("hhPremiumNOBullet3Dropdown3"),
						localize("hhPremiumNOBullet3Dropdown4")]},
					{text: localize("hhPremiumNOBullet4"),
					bullets: [
						localize("hhPremiumNOBullet4Dropdown1"),
						localize("hhPremiumNOBullet4Dropdown2"),
						localize("hhPremiumNOBullet4Dropdown3"),
						localize("hhPremiumNOBullet4Dropdown4")]},
					{text: localize("hhPremiumNOBullet5"),
					bullets: [
						localize("hhPremiumNOBullet5Dropdown1"),
						localize("hhPremiumNOBullet5Dropdown2"),
						localize("hhPremiumNOBullet5Dropdown3"),
						localize("hhPremiumNOBullet5Dropdown4")]},
				],
				image: "boat5.jpg",							
			},
			{
				id: 15,
				template: "templateCustom",
				keyName: "Custom",
				keyArea: "Solutions",
				tags: "no,fi,sv,da,household,aboutNordea,premium,gold",
				backgroundImage: "",
				hideNotes: false,
				locked: false,
				localName: localize("customLocalName"),
				localArea: localize("hhSolutionsLocalArea"),
				title: localize("customTitle"),
				toolTip: localize("customToolTip"),
				header: localize("customHeader"),
				bullet: localize("customBullet"),
				image: "custom1.jpg"
			},
				{
				id: 15,
				template: "templateCustom",
				keyName: "Custom",
				keyArea: "Solutions",
				tags: "da,household,aboutNordea,premium,gold",
				backgroundImage: "",
				hideNotes: false,
				locked: false,
				localName: localize("customLocalName"),
				localArea: localize("hhSolutionsLocalArea"),
				title: localize("customTitle"),
				toolTip: localize("customToolTip"),
				header: localize("customHeader"),
				bullet: localize("customBullet"),
				image: "custom1.jpg"
			},
				{
				id: 15,
				template: "templateCustom",
				keyName: "Custom",
				keyArea: "Solutions",
				tags: "da,household,aboutNordea,premium,gold",
				backgroundImage: "",
				hideNotes: false,
				locked: false,
				localName: localize("customLocalName"),
				localArea: localize("hhSolutionsLocalArea"),
				title: localize("customTitle"),
				toolTip: localize("customToolTip"),
				header: localize("customHeader"),
				bullet: localize("customBullet"),
				image: "custom1.jpg"
			},
			{
				id: 16,
				template: "templateSummary",
				keyName: "Summary",
				keyArea: "Summary",
				tags: "no,fi,sv,da,household,360,introduction,premium,gold",
				backgroundImage: "",
				hideNotes: false,
				locked: false,
				localName: localize("hhSummaryLocalName"),
				localArea: localize("hhSummaryLocalArea"),
				title: localize("hhSummaryTitle"),
				string1: localize("hhAgendaString1"),
				string2: localize("hhAgendaString2"),
				string3: localize("hhAgendaString3"),
				string4: localize("hhAgendaString4"),
				string5: localize("hhAgendaString5")
			},
			{
				id: 17,
				template: "templateActionPoints",
				keyName: "Action Points",
				keyArea: "Summary",
				tags: "no,fi,sv,da,household,360,theme,introduction,premium,gold",
				backgroundImage: "",
				hideNotes: true,
				locked: true,
				localName: localize("actionPointsLocalName"),
				localArea: localize("hhSummaryLocalArea"),
				title: localize("actionPointsTitle")
			},
			{
				id: 18,
				template: "templatePrint",
				keyName: "Print",
				keyArea: "End",
				tags: "no,fi,sv,da,household,360,theme,introduction,premium,gold",
				backgroundImage: "welcome_hh_"+Config.countryCode+".jpg",
				hideNotes: true,
				locked: true,
				localName: localize("printLocalName"),
				localArea: localize("hhPrintLocalArea"),
				title: localize("printTitle"),
				printText: localize("printText")
			},
			{
				id: 19,
				template: "templateSurvey",
				keyName: "Survey",
				keyArea: "End",
				tags: "no,household,360,theme,introduction,premium,gold",
				backgroundImage: "welcome_hh_"+Config.countryCode+".jpg",
				hideNotes: true,
				locked: true,
				localName: localize("surveyLocalName"),
				localArea: localize("hhSurveyLocalArea"),
				title: localize("surveyTitle"),
				links: [
				{url:"https://www.surveyportal.dk/wq8/surveys/04092-90516/survey.html",text: localize("surveyLinkCustomer")},
				{url:"https://www.surveyportal.dk/wq8/surveys/92092-90516/survey.html",text: localize("surveyLinkAdvisor")}
				]
			},
			{
				id: 20,
				template: "templateSurvey",
				keyName: "Survey",
				keyArea: "End",
				tags: "da,household,360,theme,introduction,premium,gold",
				backgroundImage: "welcome_hh_"+Config.countryCode+".jpg",
				hideNotes: true,
				locked: true,
				localName: localize("surveyLocalName"),
				localArea: localize("hhSurveyLocalArea"),
				title: localize("surveyTitle"),
				links: [ 	
				{url:"https://www.surveyportal.dk/wq8/surveys/82313-90516/survey.html",text: localize("surveyLinkCustomer")},
				{url:"https://www.surveyportal.dk/wq8/surveys/61413-90516/survey.html",text: localize("surveyLinkAdvisor")}
				]
			},
			{
				id: 20,
				template: "templateSurvey",
				keyName: "Survey",
				keyArea: "End",
				tags: "sv,household,360,theme,introduction,premium,gold",
				backgroundImage: "welcome_hh_"+Config.countryCode+".jpg",
				hideNotes: true,
				locked: true,
				localName: localize("surveyLocalName"),
				localArea: localize("hhSurveyLocalArea"),
				title: localize("surveyTitle"),
				links: [ 	
				{url:"https://www.surveyportal.dk/wq8/surveys/19503-90516/survey.html",text: localize("surveyLinkCustomer")},
				{url:"https://www.surveyportal.dk/wq8/surveys/84513-90516/survey.html",text: localize("surveyLinkAdvisor")}
				]
			},
				{
				id: 20,
				template: "templateSurvey",
				keyName: "Survey",
				keyArea: "End",
				tags: "fi,household,360,theme,introduction,premium,gold",
				backgroundImage: "welcome_hh_"+Config.countryCode+".jpg",
				hideNotes: true,
				locked: true,
				localName: localize("surveyLocalName"),
				localArea: localize("hhSurveyLocalArea"),
				title: localize("surveyTitle"),
				links: [ 	
				{url:"https://www.surveyportal.dk/wq8/surveys/72413-90516/survey.html",text: localize("surveyLinkCustomer")},
				{url:"https://www.surveyportal.dk/wq8/surveys/15213-90516/survey.html",text: localize("surveyLinkAdvisor")}
				]
			},
			
			//Corporate
			{
				id: 20,
				template: "templateWelcome",
				keyName: "Welcome",
				keyArea: "Welcome",
				tags: "no,fi,corporate,360,theme,introduction,medium,small",
				backgroundImage: "welcome_co_"+Config.countryCode+".jpg",
				hideNotes: false,
				locked: true,
				localName: localize("coWelcomeLocalName"),
				localArea: localize("coWelcomeLocalArea"),
				title: localize("coWelcomeTitle")
			},
			{
				id: 20,
				template: "templateWelcome",
				keyName: "Welcome",
				keyArea: "Welcome",
				tags: "sv,corporate,360,theme,introduction,medium,small,large",
				backgroundImage: "welcome_co_"+Config.countryCode+".jpg",
				hideNotes: false,
				locked: true,
				localName: localize("coWelcomeLocalName"),
				localArea: localize("coWelcomeLocalArea"),
				title: localize("coWelcomeTitle")
			},
			{
				id: 120,
				template: "templateWelcome",
				keyName: "Welcome",
				keyArea: "Welcome",
				tags: "da,corporate,360,theme,introduction,medium,small",
				backgroundImage: "fp_dk_se.jpg",
				hideNotes: false,
				locked: true,
				localName: localize("coWelcomeLocalName"),
				localArea: localize("coWelcomeLocalArea"),
				title: localize("coWelcomeTitle")
			},
			{
				id: 21,
				template: "templateAgenda",
				keyName: "Agenda",
				keyArea: "Welcome",
				tags: "no,fi,da,corporate,360,introduction,medium,small",
				backgroundImage: "",
				hideNotes: false,
				locked: true,
				localName: localize("coAgendaLocalName"),
				localArea: localize("coWelcomeLocalArea"),
				title: localize("coAgendaTitle"),
				string1: localize("coAgendaString1"),
				string2: localize("coAgendaString2"),
				string3: localize("coAgendaString3"),
				string4: localize("coAgendaString4"),
				string5: localize("coAgendaString5")
			},
			{
				id: 21,
				template: "templateAgenda",
				keyName: "Agenda",
				keyArea: "Welcome",
				tags: "sv,corporate,360,introduction,medium,small,large",
				backgroundImage: "",
				hideNotes: false,
				locked: true,
				localName: localize("coAgendaLocalName"),
				localArea: localize("coWelcomeLocalArea"),
				title: localize("coAgendaTitle"),
				string1: localize("coAgendaString1"),
				string2: localize("coAgendaString2"),
				string3: localize("coAgendaString3"),
				string4: localize("coAgendaString4"),
				string5: localize("coAgendaString5")
			},
			//NEW slides and corrections
			
			
			{
				id: 22,
				template: "templateSmallBox",
				keyName: "Status",
				keyArea: "Status",
				tags: "no,fi,sv,corporate,360,medium,small,large",
				backgroundImage: "",
				hideNotes: false,
				locked: false,
				localName: localize("coStatusLocalName"),
				localArea: localize("coStatusLocalArea"),
				title: localize("coStatusTitle"),
				boxes: [{
					string: localize("coStatusString1"),
					image: "management.jpg"
				}, 
				{
					string: localize("coStatusString2"),
					image: "suppliers.jpg"
				}, 
				{
					string: localize("coStatusString3"),
					image: "production.jpg"
				},
				{
					string: localize("coStatusString4"),
					image: "sneakers.jpg"
				}, 
				{
					string: localize("coStatusString5"),
					image: "christiansbro.jpg"
				}, 
				{
					string: localize("coStatusString6"),
					image: "skanska.jpg"
				}],
				yearlineString1: localize("coStatusYearlineString1"),
				yearlineString2: localize("coStatusYearlineString2"),
				yearlineString3: localize("coStatusYearlineString3"),
				yearlineString4: localize("coStatusYearlineString4")
			},
			{
				id: 47,
				template: "templateSmallBox",
				keyName: "Status",
				keyArea: "Status",
				tags: "da,corporate,360,introduction,medium,small",
				backgroundImage: "",
				hideNotes: false,
				locked: false,
				localName: localize("coStatus2LocalName"),
				localArea: localize("coStatus2LocalArea"),
				title: localize("coStatus2Title"),
				boxes: [{
					string: localize("coStatus2String1"),
					image: "production.jpg"
				}, 
				{
					string: localize("coStatus2String2"),
					image: "suppliers.jpg"
				}, 
				{
					string: localize("coStatus2String3"),
					image: "management.jpg"
				},
				{
					string: localize("coStatus2String4"),
					image: "famec.jpg"
				}, 
				{
					string: localize("coStatus2String5"),
					image: "keys.jpg"
				}, 
				{
					string: localize("coStatus2String6"),
					image: "peninv.jpg"
				}],
				yearlineString1: localize("coStatus2YearlineString1"),
				yearlineString2: localize("coStatus2YearlineString2"),
				yearlineString3: localize("coStatus2YearlineString3"),
				yearlineString4: localize("coStatus2YearlineString4")
			},
			{
				id: 29,
				template: "templateLeftColumn",
				keyName: "KYC SE",
				keyArea: "Status",
				tags: "sv,360,corporate,aboutNordea,medium,small,large",
				backgroundImage: "",
				hideNotes: false,
				locked: false,
				localName: localize("cokycSELocalName"),
				localArea: localize("coStatusLocalArea"),
				title: localize("cokycSETitle"),
				byline: localize("cokycSEByline"),
				nestedLists: [	
					{text: localize("cokycSEBullet1"),
					bullets: [
						localize("cokycSEBullet1Dropdown1"),
						localize("cokycSEBullet1Dropdown2"),
						localize("cokycSEBullet1Dropdown3"),
						localize("cokycSEBullet1Dropdown4")]},
					{text: localize("cokycSEBullet2"),
					bullets: [
						localize("cokycSEBullet2Dropdown1"),
						localize("cokycSEBullet2Dropdown2"),
						localize("cokycSEBullet2Dropdown3"),
						localize("cokycSEBullet2Dropdown4")]},
					{text: localize("cokycSEBullet3"),
					bullets: [
						localize("cokycSEBullet3Dropdown1"),
						localize("cokycSEBullet3Dropdown2"),
						localize("cokycSEBullet3Dropdown3"),
						localize("cokycSEBullet3Dropdown4")]},
					{text: localize("cokycSEBullet4"),
					bullets: [
						localize("cokycSEBullet4Dropdown1"),
						localize("cokycSEBullet4Dropdown2"),
						localize("cokycSEBullet4Dropdown3"),
						localize("cokycSEBullet4Dropdown4")]},
					{text: localize("cokycSEBullet5"),
					bullets: [
						localize("cokycSEBullet5Dropdown1"),
						localize("cokycSEBullet5Dropdown2"),
						localize("cokycSEBullet5Dropdown3"),
						localize("cokycSEBullet5Dropdown4")]},
				],
				image: "digogfortag.jpg",
			},
			{
				id: 23,
				template: "templateLeftColumn",
				keyName: "Economy Overview",
				keyArea: "Status",
				tags: "no,fi,da,corporate,360,introduction,medium,small",
				backgroundImage: "",
				hideNotes: false,
				locked: false,
				localName: localize("coEconomyOverviewLocalName"),
				localArea: localize("costatusdkLocalArea"),
				title: localize("coEconomyOverviewTitle"),
				byline: localize("coEconomyOverviewByline"),
				subTitle1: localize("coEconomyOverviewSubTitle1"),
				nestedLists: [
					{text: localize("coEconomyOverviewBullet1"),
					bullets: [localize("coEconomyOverviewBullet1SubBullet1"),
							localize("coEconomyOverviewBullet1SubBullet2"),
							localize("coEconomyOverviewBullet1SubBullet3"),	
							localize("coEconomyOverviewBullet1SubBullet4"),
							localize("coEconomyOverviewBullet1SubBullet5")]},
					{text: localize("coEconomyOverviewBullet2"),
					bullets: [localize("coEconomyOverviewBullet2SubBullet1"),
							localize("coEconomyOverviewBullet2SubBullet2"),
							localize("coEconomyOverviewBullet2SubBullet3")]},
					{text: localize("coEconomyOverviewBullet3"),
					bullets: [localize("coEconomyOverviewBullet3SubBullet1"),
							localize("coEconomyOverviewBullet3SubBullet2"),
							localize("coEconomyOverviewBullet3SubBullet3")]}
				],
				subTitle2: localize("coEconomyOverviewSubTitle2"),
				string1: localize("coEconomyOverviewString1"),
				image: "paper.jpg"
			},
			{
				id: 24,
				template: "templateBox",
				keyName: "Support",
				keyArea: "Solutions",
				tags: "no,fi,sv,corporate,360,aboutNordea,medium,small",
				backgroundImage: "",
				hideNotes: false,
				locked: false,
				localName: localize("coSolutionsLocalName"),
				localArea: localize("coSolutionsLocalArea"),
				title: localize("coSolutionsTitle"),
				boxes: [{
					title: localize("coSolutionsBox1Title"),
					lists: [{
						header: localize("coSolutionsBox1header1"),
						bullets: [localize("coSolutionsBox1Bullet1"), localize("coSolutionsBox1Bullet2"), localize("coSolutionsBox1Bullet3")]
					},
					{
						header: localize("coSolutionsBox1header2"),
						bullets: [localize("coSolutionsBox1Bullet4"), localize("coSolutionsBox1Bullet5")]
					}],
					image: "dailybusiness.jpg"
				},
				{
					title: localize("coSolutionsBox2Title"),
					lists: [{
						header: localize("coSolutionsBox2header1"),
						bullets: [localize("coSolutionsBox2Bullet1"), localize("coSolutionsBox2Bullet2")]
					},
					{
						header: localize("coSolutionsBox2header2"),
						bullets: [localize("coSolutionsBox2Bullet3"),localize("coSolutionsBox2Bullet4"), localize("coSolutionsBox2Bullet5"),localize("coSolutionsBox2Bullet6")]
					}],
					image: "tryck.jpg"
				},
				{
					title: localize("coSolutionsBox3Title"),
					lists: [{
						bullets: [localize("coSolutionsBox3Bullet1"), localize("coSolutionsBox3Bullet2")]
					}],
					image: "buy.jpg"
				},
				{
					title: localize("coSolutionsBox4Title"),
					lists: [{
						bullets: [localize("coSolutionsBox4Bullet1"), localize("coSolutionsBox4Bullet2"), localize("coSolutionsBox4Bullet3")]
					},
					{
						bullets: [localize("coSolutionsBox4Bullet4"), localize("coSolutionsBox4Bullet5"), localize("coSolutionsBox4Bullet6")]
					}],
					image: "reducingrisk.jpg"
				}]
				},
				{
				id: 124,
				template: "templateBox",
				keyName: "CMoverview",
				keyArea: "Solutions",
				tags: "no,corporate,cashManagement,medium,small",
				backgroundImage: "",
				hideNotes: false,
				locked: false,
				localName: localize("coCMoverviewLocalName"),
				localArea: localize("coCMoverviewLocalArea"),
				title: localize("coCMoverviewTitle"),
				boxes: [{
					title: localize("coCMoverviewBox1Title"),
					lists: [{
						bullets: [localize("coCMoverviewBox1Bullet1"), localize("coCMoverviewBox1Bullet2"), localize("coCMoverviewBox1Bullet3"), localize("coCMoverviewBox1Bullet4"), localize("coCMoverviewBox1Bullet5")]
					}],
					image: "adv.jpg"
				},
				{
					title: localize("coCMoverviewBox2Title"),
					lists: [{
						bullets: [localize("coCMoverviewBox2Bullet1"), localize("coCMoverviewBox2Bullet2"), localize("coCMoverviewBox2Bullet3"),localize("coCMoverviewBox2Bullet4"), localize("coCMoverviewBox2Bullet5"),localize("coCMoverviewBox2Bullet6"),localize("coCMoverviewBox2Bullet7")]
					}],
					image: "netbank.jpg"
				},
				{
					title: localize("coCMoverviewBox3Title"),
					lists: [{
						bullets: [localize("coCMoverviewBox3Bullet1"), localize("coCMoverviewBox3Bullet2"), localize("coCMoverviewBox3Bullet3"), localize("coCMoverviewBox3Bullet4")]
					}],
					image: "shopping.jpg"
				},
				{
					title: localize("coCMoverviewBox4Title"),
					lists: [{
						bullets: [localize("coCMoverviewBox4Bullet1"), localize("coCMoverviewBox4Bullet2"), localize("coCMoverviewBox4Bullet3")]
					},
					{
						bullets: [localize("coCMoverviewBox4Bullet4"), localize("coCMoverviewBox4Bullet5"), localize("coCMoverviewBox4Bullet6")]
					}],
					image: "buy.jpg"
				}]
				},
				{
				id: 124,
				template: "templateBox",
				keyName: "nlpNO",
				keyArea: "Solutions",
				tags: "no,corporate,cashManagement,medium,small",
				backgroundImage: "",
				hideNotes: false,
				locked: false,
				localName: localize("conlpNOLocalName"),
				localArea: localize("conlpNOLocalArea"),
				title: localize("conlpNOTitle"),
				boxes: [{
					title: localize("conlpNOBox1Title"),
					lists: [{
						bullets: [localize("conlpNOBox1Bullet1"), localize("conlpNOBox1Bullet2"), localize("conlpNOBox1Bullet3"), localize("conlpNOBox1Bullet4"), localize("conlpNOBox1Bullet5")]
					}],
					image: "savings.jpg"
				},
				{
					title: localize("conlpNOBox2Title"),
					lists: [{
						bullets: [localize("conlpNOBox2Bullet1"), localize("conlpNOBox2Bullet2"), localize("conlpNOBox2Bullet3"),localize("conlpNOBox2Bullet4"), localize("conlpNOBox2Bullet5"),localize("conlpNOBox2Bullet6"),localize("conlpNOBox2Bullet7")]
					}],
					image: "tryck.jpg"
				},
				{
					title: localize("conlpNOBox3Title"),
					lists: [{
						bullets: [localize("conlpNOBox3Bullet1"), localize("conlpNOBox3Bullet2"), localize("conlpNOBox3Bullet3"), localize("conlpNOBox3Bullet4")]
					}],
					image: "woman-mobile.png"
				},
				{
					title: localize("conlpNOBox4Title"),
					lists: [{
						bullets: [localize("conlpNOBox4Bullet1"), localize("conlpNOBox4Bullet2"), localize("conlpNOBox4Bullet3")]
					},
					{
						bullets: [localize("conlpNOBox4Bullet4"), localize("conlpNOBox4Bullet5"), localize("conlpNOBox4Bullet6")]
					}],
					image: "buy.jpg"
				}]
				},
				{
				id: 124,
				template: "templateBox",
				keyName: "Muligheder",
				keyArea: "Solutions",
				tags: "da,corporate,360,aboutNordea,medium,small",
				backgroundImage: "",
				hideNotes: false,
				locked: false,
				localName: localize("coSolutionsLocalName"),
				localArea: localize("coSolutionsLocalArea"),
				title: localize("coSolutionsTitle"),
				boxes: [{
					title: localize("coSolutionsBox1Title"),
					lists: [{
						bullets: [localize("coSolutionsBox1Bullet1"), localize("coSolutionsBox1Bullet2"), localize("coSolutionsBox1Bullet3"), localize("coSolutionsBox1Bullet4"), localize("coSolutionsBox1Bullet5")]
					}],
					image: "adv.jpg"
				},
				{
					title: localize("coSolutionsBox2Title"),
					lists: [{
						bullets: [localize("coSolutionsBox2Bullet1"),localize("coSolutionsBox2Bullet2"),localize("coSolutionsBox2Bullet3"),localize("coSolutionsBox2Bullet4"),localize("coSolutionsBox2Bullet5"),localize("coSolutionsBox2Bullet6"),localize("coSolutionsBox2Bullet7")]
					}],
					image: "netbank.jpg"
				},
				{
					title: localize("coSolutionsBox3Title"),
					lists: [{
						bullets: [localize("coSolutionsBox3Bullet1"),localize("coSolutionsBox3Bullet2"),localize("coSolutionsBox3Bullet3"),localize("coSolutionsBox3Bullet4")]
					}],
					image: "shopping.jpg"
				},
				{
					title: localize("coSolutionsBox4Title"),
					lists: [{
						bullets: [localize("coSolutionsBox4Bullet1"),localize("coSolutionsBox4Bullet2"),localize("coSolutionsBox4Bullet3"),localize("coSolutionsBox4Bullet4")]
					},
					{
						bullets: [localize("coSolutionsBox4Bullet12"),localize("coSolutionsBox4Bullet5"),localize("coSolutionsBox4Bullet6")]
					}],
					image: "buy.jpg"
				}]
				},
			{
				id: 25,
				template: "templateMotivator",
				keyName: "Asset Loan Motivator",
				keyArea: "Solutions",
				tags: "no,da,corporate,aboutNordea,medium,small",
				backgroundImage: "",
				hideNotes: false,
				locked: false,
				localName: localize("coAssetLoanLocalName"),
				localArea: localize("coSolutionsLocalArea"),
				title: localize("coAssetLoanTitle"),
				motivatorId: "motivator2"
				},
			{
				id: 119,
				template: "templateIframe",
				keyName: "Personal Insurance,medium,small",
				keyArea: "Solutions",
				tags: "no,corporate,savingsAndPension",
				backgroundImage: "tp.jpg",
				hideNotes: false,
				locked: false,
				localName: localize("coPersonalInsuranceLocalName"),
				localArea: localize("coSolutionsLocalArea"),
				title: localize("coPersonalInsuranceTitle"),
				paragrafs: [localize("coPersonalInsuranceString1"),localize("coPersonalInsuranceString2")],
				url: "http://nlpn.ccd1.root4.net/cms/LivliVAgenda.asp?pnr=[customerId]",
				customerFrame: true,
				linkText: localize("coPersonalInsuranceIframeLink")
			},
						
			//status
			{
				id: 132,
				template: "templateLeftColumn",
				keyName: "KYC",
				keyArea: "Status",
				tags: "",
				backgroundImage: "",
				hideNotes: false,
				locked: false,
				localName: localize("coKYCLocalName"),
				localArea: localize("coStatusLocalArea"),
				title: localize("coKYCTitle"),
				nestedLists: [	
					{text: localize("coKYCBullet1"),
					bullets: [
						localize("coKYCBullet1Dropdown1"),
						localize("coKYCBullet1Dropdown2")]},
					{text: localize("coKYCBullet2"),
					bullets: [
						localize("coKYCBullet2Dropdown1"),
						localize("coKYCBullet2Dropdown2")]}
				],
				image: "factoring.jpg"
			},
			
			{
				id: 26,
				template: "templateLeftColumn",
				keyName: "Factoring",
				keyArea: "Solutions",
				tags: "no,corporate,nordeaFinance,medium,small",
				backgroundImage: "",
				hideNotes: false,
				locked: false,
				localName: localize("coFactoringLocalName"),
				localArea: localize("coSolutionsLocalArea"),
				title: localize("coFactoringTitle"),
				byline: localize("coFactoringByline"),
				subTitle1: localize("coFactoringSubTitle1"),
				nestedLists: [	
					{text: localize("coFactoringBullet1")},
					{text: localize("coFactoringBullet2")},
					{text: localize("coFactoringBullet3")},
					{text: localize("coFactoringBullet4")}
				],
				image: "corporate_support.jpg",
				iframe: true,
				url: "http://www.app.nordea.no/web/html.nsf/html/factoringkalkulator/$FILE/factoringkalkulator.html",
				linkText: localize("coFactoringIframeLink")
			},
			{
				id: 127,
				template: "templateLeftColumn",
				keyName: "FactoringDK",
				keyArea: "Solutions",
				tags: "da,corporate,nordeaFinance,medium",
				backgroundImage: "",
				hideNotes: false,
				locked: false,
				localName: localize("coFactoringDKLocalName"),
				localArea: localize("coSolutionsLocalArea"),
				title: localize("coFactoringDKTitle"),
				byline: localize("coFactoringDKByline"),
				subTitle1: localize("coFactoringDKSubTitle1"),
				nestedLists: [	
					{text: localize("coFactoringDKBullet1")},
					{text: localize("coFactoringDKBullet2")},
					{text: localize("coFactoringDKBullet3")},
					{text: localize("coFactoringDKBullet4")}
				],
				image: "corporate_support.jpg",
				iframe: false,
				url: "https://weblease.no/kalkulator/FactoringDK/",
				linkText: localize("coFactoringDKIframeLink")
			},		
			{
				id: 27,
				template: "templateLeftColumn",
				keyName: "Leasing",
				keyArea: "Solutions",
				tags: "no,corporate,nordeaFinance,medium,small",
				backgroundImage: "",
				hideNotes: false,
				locked: false,
				localName: localize("coLeasingLocalName"),
				localArea: localize("coSolutionsLocalArea"),
				title: localize("coLeasingTitle"),
				byline: localize("coLeasingByline"),
				subTitle1: localize("coLeasingSubTitle1"),
				nestedLists: [	
					{text: localize("coLeasingBullet1")},
					{text: localize("coLeasingBullet2")},
					{text: localize("coLeasingBullet3")},
					{text: localize("coLeasingBullet4")}
				],
				image: "leasing.jpg",
				iframe: true,
				url: "https://weblease.no/kalkulator/leasing/",
				linkText: localize("coLeasingIframeLink")
			},
			{
				id: 127,
				template: "templateLeftColumn",
				keyName: "Leasing",
				keyArea: "Solutions",
				tags: "da,corporate,nordeaFinance,medium,small",
				backgroundImage: "",
				hideNotes: false,
				locked: false,
				localName: localize("coLeasingLocalName"),
				localArea: localize("coSolutionsLocalArea"),
				title: localize("coLeasingTitle"),
				byline: localize("coLeasingByline"),
				subTitle1: localize("coLeasingSubTitle1"),
				nestedLists: [	
					{text: localize("coLeasingBullet1")},
					{text: localize("coLeasingBullet2")},
					{text: localize("coLeasingBullet3")},
					{text: localize("coLeasingBullet4")}
				],
				image: "coffee.jpg",
				iframe: true,
				url: "http://www.nordea.dk/Erhverv/Finansiering/Anl%C3%A6gsfinansiering/Leasing+beregner/1619162.html?lnkID=d-box_beregner_leasing-beregner_15-03-2013",
				linkText: localize("coLeasingIframeLink")
			},
			{
				id: 28,
				template: "templateLeftColumn",
				keyName: "Car Leasing",
				keyArea: "Solutions",
				tags: "no,corporate,nordeaFinance,medium,small",
				backgroundImage: "",
				hideNotes: false,
				locked: false,
				localName: localize("coCarLeasingLocalName"),
				localArea: localize("coSolutionsLocalArea"),
				title: localize("coCarLeasingTitle"),
				byline: localize("coCarLeasingByline"),
				subTitle1: localize("coCarLeasingSubTitle1"),
				nestedLists: [	
					{text: localize("coCarLeasingBullet1")},
					{text: localize("coCarLeasingBullet2")},
					{text: localize("coCarLeasingBullet3")},
					{text: localize("coCarLeasingBullet4")}
				],
				image: "car_leasing.jpg",
				iframe: true,
				url: "https://weblease.no/kalkulator/billeasing/",
				linkText: localize("coCarLeasingIframeLink")
			},
			{
				id: 128,
				template: "templateLeftColumn",
				keyName: "Car Leasing",
				keyArea: "Solutions",
				tags: "da,corporate,nordeaFinance,medium,small",
				backgroundImage: "",
				hideNotes: false,
				locked: false,
				localName: localize("coCarLeasingLocalName"),
				localArea: localize("coSolutionsLocalArea"),
				title: localize("coCarLeasingTitle"),
				byline: localize("coCarLeasingByline"),
				subTitle1: localize("coCarLeasingSubTitle1"),
				nestedLists: [	
					{text: localize("coCarLeasingBullet1")},
					{text: localize("coCarLeasingBullet2")},
					{text: localize("coCarLeasingBullet3")},
					{text: localize("coCarLeasingBullet4")}
				],
				image: "car_leasing.jpg",
				iframe: true,
				url: "http://www.nordea.dk/Erhverv/Finansiering/Anl%C3%A6gsfinansiering/Leasing+beregner/1619162.html?lnkID=d-box_beregner_leasing-beregner_15-03-2013",
				linkText: localize("coCarLeasingIframeLink")
			},
			{
				id: 29,
				template: "templateLeftColumn",
				keyName: "Interest Exposure",
				keyArea: "Solutions",
				tags: "no,sv,corporate,markets,medium,small",
				backgroundImage: "",
				hideNotes: false,
				locked: false,
				localName: localize("coInterestExposureLocalName"),
				localArea: localize("coSolutionsLocalArea"),
				title: localize("coInterestExposureTitle"),
				byline: localize("coInterestExposureByline"),
				nestedLists: [	
					{text: localize("coInterestExposureBullet1"),
					bullets: [
						localize("coInterestExposureBullet1Dropdown1"),
						localize("coInterestExposureBullet1Dropdown2"),
						localize("coInterestExposureBullet1Dropdown3"),
						localize("coInterestExposureBullet1Dropdown4")]},
					{text: localize("coInterestExposureBullet2"),
					bullets: [
						localize("coInterestExposureBullet2Dropdown1"),
						localize("coInterestExposureBullet2Dropdown2"),
						localize("coInterestExposureBullet2Dropdown3"),
						localize("coInterestExposureBullet2Dropdown4")]},
					{text: localize("coInterestExposureBullet3"),
					bullets: [
						localize("coInterestExposureBullet3Dropdown1"),
						localize("coInterestExposureBullet3Dropdown2"),
						localize("coInterestExposureBullet3Dropdown3"),
						localize("coInterestExposureBullet3Dropdown4")]},
					{text: localize("coInterestExposureBullet4"),
					bullets: [
						localize("coInterestExposureBullet4Dropdown1"),
						localize("coInterestExposureBullet4Dropdown2"),
						localize("coInterestExposureBullet4Dropdown3"),
						localize("coInterestExposureBullet4Dropdown4")]},
					{text: localize("coInterestExposureBullet5"),
					bullets: [
						localize("coInterestExposureBullet5Dropdown1"),
						localize("coInterestExposureBullet5Dropdown2"),
						localize("coInterestExposureBullet5Dropdown3"),
						localize("coInterestExposureBullet5Dropdown4")]},
				],
				image: "ice_skating1.jpg",
			},
			{
				id: 29,
				template: "templateLeftColumn",
				keyName: "NLP NO 1",
				keyArea: "Solutions",
				tags: "no,sv,corporate,markets,medium,small",
				backgroundImage: "",
				hideNotes: false,
				locked: false,
				localName: localize("conlpNO1LocalName"),
				localArea: localize("coSolutionsLocalArea"),
				title: localize("conlpNO1Title"),
				byline: localize("conlpNO1Byline"),
				nestedLists: [	
					{text: localize("conlpNO1Bullet1"),
					bullets: [
						localize("conlpNO1Bullet1Dropdown1"),
						localize("conlpNO1Bullet1Dropdown2"),
						localize("conlpNO1Bullet1Dropdown3"),
						localize("conlpNO1Bullet1Dropdown4")]},
					{text: localize("conlpNO1Bullet2"),
					bullets: [
						localize("conlpNO1Bullet2Dropdown1"),
						localize("conlpNO1Bullet2Dropdown2"),
						localize("conlpNO1Bullet2Dropdown3"),
						localize("conlpNO1Bullet2Dropdown4")]},
					{text: localize("conlpNO1Bullet3"),
					bullets: [
						localize("conlpNO1Bullet3Dropdown1"),
						localize("conlpNO1Bullet3Dropdown2"),
						localize("conlpNO1Bullet3Dropdown3"),
						localize("conlpNO1Bullet3Dropdown4")]},
					{text: localize("conlpNO1Bullet4"),
					bullets: [
						localize("conlpNO1Bullet4Dropdown1"),
						localize("conlpNO1Bullet4Dropdown2"),
						localize("conlpNO1Bullet4Dropdown3"),
						localize("conlpNO1Bullet4Dropdown4")]},
					{text: localize("conlpNO1Bullet5"),
					bullets: [
						localize("conlpNO1Bullet5Dropdown1"),
						localize("conlpNO1Bullet5Dropdown2"),
						localize("conlpNO1Bullet5Dropdown3"),
						localize("conlpNO1Bullet5Dropdown4")]},
				],
				image: "coffee.jpg",
			},
			{
				id: 29,
				template: "templateLeftColumn",
				keyName: "Multi channel FI",
				keyArea: "Solutions",
				tags: "fi,corporate,markets,medium,small",
				backgroundImage: "",
				hideNotes: false,
				locked: false,
				localName: localize("coMultiChannelFILocalName"),
				localArea: localize("coSolutionsLocalArea"),
				title: localize("coMultiChannelFITitle"),
				byline: localize("coMultiChannelFIByline"),
				nestedLists: [	
					{text: localize("coMultiChannelFIBullet1"),
					bullets: [
						localize("coMultiChannelFIBullet1Dropdown1"),
						localize("coMultiChannelFIBullet1Dropdown2"),
						localize("coMultiChannelFIBullet1Dropdown3"),
						localize("coMultiChannelFIBullet1Dropdown4")]},
					{text: localize("coMultiChannelFIBullet2"),
					bullets: [
						localize("coMultiChannelFIBullet2Dropdown1"),
						localize("coMultiChannelFIBullet2Dropdown2"),
						localize("coMultiChannelFIBullet2Dropdown3"),
						localize("coMultiChannelFIBullet2Dropdown4")]},
					{text: localize("coMultiChannelFIBullet3"),
					bullets: [
						localize("coMultiChannelFIBullet3Dropdown1"),
						localize("coMultiChannelFIBullet3Dropdown2"),
						localize("coMultiChannelFIBullet3Dropdown3"),
						localize("coMultiChannelFIBullet3Dropdown4")]},
					{text: localize("coMultiChannelFIBullet4"),
					bullets: [
						localize("coMultiChannelFIBullet4Dropdown1"),
						localize("coMultiChannelFIBullet4Dropdown2"),
						localize("coMultiChannelFIBullet4Dropdown3"),
						localize("coMultiChannelFIBullet4Dropdown4")]},
					{text: localize("coMultiChannelFIBullet5"),
					bullets: [
						localize("coMultiChannelFIBullet5Dropdown1"),
						localize("coMultiChannelFIBullet5Dropdown2"),
						localize("coMultiChannelFIBullet5Dropdown3"),
						localize("coMultiChannelFIBullet5Dropdown4")]},
				],
				image: "Shopping1.jpg",
				iframe: true,
				url: "http://www.nordea.fi/sitemod/upload/root/fi_org/appx/fin/yri/markets_fi/emarkets/emarkets_demo/index.html?lnkid=fi-fi_emarkets_demo_darea",
				linkText: localize("coMultiChannelFIIframeLink")
			},
			{
				id: 29,
				template: "templateLeftColumn",
				keyName: "Financing FI",
				keyArea: "Solutions",
				tags: "fi,corporate,markets,medium,small",
				backgroundImage: "",
				hideNotes: false,
				locked: false,
				localName: localize("coFinancingFILocalName"),
				localArea: localize("coSolutionsLocalArea"),
				title: localize("coFinancingFITitle"),
				byline: localize("coFinancingFIByline"),
				nestedLists: [	
					{text: localize("coFinancingFIBullet1"),
					bullets: [
						localize("coFinancingFIBullet1Dropdown1"),
						localize("coFinancingFIBullet1Dropdown2"),
						localize("coFinancingFIBullet1Dropdown3"),
						localize("coFinancingFIBullet1Dropdown4")]},
					{text: localize("coFinancingFIBullet2"),
					bullets: [
						localize("coFinancingFIBullet2Dropdown1"),
						localize("coFinancingFIBullet2Dropdown2"),
						localize("coFinancingFIBullet2Dropdown3"),
						localize("coFinancingFIBullet2Dropdown4")]},
					{text: localize("coFinancingFIBullet3"),
					bullets: [
						localize("coFinancingFIBullet3Dropdown1"),
						localize("coFinancingFIBullet3Dropdown2"),
						localize("coFinancingFIBullet3Dropdown3"),
						localize("coFinancingFIBullet3Dropdown4")]},
					{text: localize("coFinancingFIBullet4"),
					bullets: [
						localize("coFinancingFIBullet4Dropdown1"),
						localize("coFinancingFIBullet4Dropdown2"),
						localize("coFinancingFIBullet4Dropdown3"),
						localize("coFinancingFIBullet4Dropdown4")]},
					{text: localize("coFinancingFIBullet5"),
					bullets: [
						localize("coFinancingFIBullet5Dropdown1"),
						localize("coFinancingFIBullet5Dropdown2"),
						localize("coFinancingFIBullet5Dropdown3"),
						localize("coFinancingFIBullet5Dropdown4")]},
				],
				image: "savings1.jpg",
				iframe: true,
				url: "http://www.nordea.fi/Yritykset+ja+yhteis%c3%b6t/Rahoitus/Investoinnit/Lainalaskin/706614.html?lnkID=d-box_laskurit_lainalaskuri_10-09-2012",
				linkText: localize("coFinancingFIIframeLink")
			},
			{
				id: 129,
				template: "templateLeftColumn",
				keyName: "Nettbank",
				keyArea: "Solutions",
				tags: "no,corporate,cashManagement,medium,small",
				backgroundImage: "",
				hideNotes: false,
				locked: false,
				localName: localize("coNettbankLocalName"),
				localArea: localize("coSolutionsLocalArea"),
				title: localize("coNettbankTitle"),
				byline: localize("coNettbankByline"),
				nestedLists: [	
					{text: localize("coNettbankBullet1"),
					bullets: [
						localize("coNettbankBullet1Dropdown1"),
						localize("coNettbankBullet1Dropdown2"),
						localize("coNettbankBullet1Dropdown3"),
						localize("coNettbankBullet1Dropdown4")]},
					{text: localize("coNettbankBullet2"),
					bullets: [
						localize("coNettbankBullet2Dropdown1"),
						localize("coNettbankBullet2Dropdown2"),
						localize("coNettbankBullet2Dropdown3"),
						localize("coNettbankBullet2Dropdown4")]},
					{text: localize("coNettbankBullet3"),
					bullets: [
						localize("coNettbankBullet3Dropdown1"),
						localize("coNettbankBullet3Dropdown2"),
						localize("coNettbankBullet3Dropdown3")]},
					{text: localize("coNettbankBullet4"),
					bullets: [
						localize("coNettbankBullet4Dropdown1"),
						localize("coNettbankBullet4Dropdown2"),
						localize("coNettbankBullet4Dropdown3"),
						localize("coNettbankBullet4Dropdown4")]}
				],
				image: "businesswoman.jpg"
			},
			{
				id: 229,
				template: "templateLeftColumn",
				keyName: "paymentsolutions",
				keyArea: "Solutions",
				tags: "no,corporate,cashManagement,medium,small",
				backgroundImage: "",
				hideNotes: false,
				locked: false,
				localName: localize("copaymentsolutionsLocalName"),
				localArea: localize("coSolutionsLocalArea"),
				title: localize("copaymentsolutionsTitle"),
				byline: localize("copaymentsolutionsByline"),
				nestedLists: [	
					{text: localize("copaymentsolutionsBullet1"),
					bullets: [
						localize("copaymentsolutionsBullet1Dropdown1"),
						localize("copaymentsolutionsBullet1Dropdown2"),
						localize("copaymentsolutionsBullet1Dropdown3"),
						localize("copaymentsolutionsBullet1Dropdown3")]},
					{text: localize("copaymentsolutionsBullet2"),
					bullets: [
						localize("copaymentsolutionsBullet2Dropdown1"),
						localize("copaymentsolutionsBullet2Dropdown2"),
						localize("copaymentsolutionsBullet2Dropdown3"),
						localize("copaymentsolutionsBullet2Dropdown4")]},
					{text: localize("copaymentsolutionsBullet3"),
					bullets: [
						localize("copaymentsolutionsBullet3Dropdown1"),
						localize("copaymentsolutionsBullet3Dropdown2"),
						localize("copaymentsolutionsBullet3Dropdown3"),
						localize("copaymentsolutionsBullet3Dropdown4")]},
					{text: localize("copaymentsolutionsBullet4"),
					bullets: [
						localize("copaymentsolutionsBullet4Dropdown1"),
						localize("copaymentsolutionsBullet4Dropdown2"),
						localize("copaymentsolutionsBullet4Dropdown3"),
						localize("copaymentsolutionsBullet4Dropdown4")]}
				],
				image: "shopping1.jpg"
			},
			{
				id: 2229,
				template: "templateLeftColumn",
				keyName: "Trygghet NO",
				keyArea: "Solutions",
				tags: "no,corporate,savingsAndPension,medium,small",
				backgroundImage: "",
				hideNotes: false,
				locked: false,
				localName: localize("coTrygghetnoLocalName"),
				localArea: localize("coSolutionsLocalArea"),
				title: localize("coTrygghetnoTitle"),
				byline: localize("coTrygghetnoByline"),
				nestedLists: [	
					{text: localize("coTrygghetnoBullet1"),
					bullets: [
						localize("coTrygghetnoBullet1Dropdown1"),
						localize("coTrygghetnoBullet1Dropdown2")]},
					{text: localize("coTrygghetnoBullet2"),
					bullets: [
						localize("coTrygghetnoBullet2Dropdown1"),
						localize("coTrygghetnoBullet2Dropdown2"),
						localize("coTrygghetnoBullet2Dropdown3"),
						localize("coTrygghetnoBullet2Dropdown4")]},
					{text: localize("coTrygghetnoBullet3"),
					bullets: [
						localize("coTrygghetnoBullet3Dropdown1"),
						localize("coTrygghetnoBullet3Dropdown2")]},
					{text: localize("coTrygghetnoBullet4"),
					bullets: [
						localize("coTrygghetnoBullet4Dropdown1"),
						localize("coTrygghetnoBullet4Dropdown2"),
						localize("coTrygghetnoBullet4Dropdown3"),
						localize("coTrygghetnoBullet4Dropdown4")]}
				],
				image: "couple1.jpg"
			},
			{
				id: 30,
				template: "templateLeftColumn",
				keyName: "Reduce Currency Risk",
				keyArea: "Solutions",
				tags: "no,sv,corporate,markets,medium,small",
				backgroundImage: "",
				hideNotes: false,
				locked: false,
				localName: localize("coReduceCurrencyRiskLocalName"),
				localArea: localize("coSolutionsLocalArea"),
				title: localize("coReduceCurrencyRiskTitle"),
				nestedLists: [	
					{text: localize("coReduceCurrencyRiskBullet1"),
					bullets: [
						localize("coReduceCurrencyRiskBullet1Dropdown1"),
						localize("coReduceCurrencyRiskBullet1Dropdown2"),
						localize("coReduceCurrencyRiskBullet1Dropdown3"),
						localize("coReduceCurrencyRiskBullet1Dropdown4")]},
					{text: localize("coReduceCurrencyRiskBullet2"),
					bullets: [
						localize("coReduceCurrencyRiskBullet2Dropdown1"),
						localize("coReduceCurrencyRiskBullet2Dropdown2"),
						localize("coReduceCurrencyRiskBullet2Dropdown3"),
						localize("coReduceCurrencyRiskBullet2Dropdown4")]}
				],
				image: "trading.jpg"
			},
			{
				id: 31,
				template: "templateLeftColumn",
				keyName: "Markets",
				keyArea: "Solutions",
				tags: "no,sv,corporate,markets,medium,small",
				backgroundImage: "",
				hideNotes: false,
				locked: false,
				localName: localize("coMarketsLocalName"),
				localArea: localize("coSolutionsLocalArea"),
				title: localize("coMarketsTitle"),
				nestedLists: [	
					{text: localize("coMarketsBullet1"),
					bullets: [
						localize("coMarketsBullet1Dropdown1"),
						localize("coMarketsBullet1Dropdown2"),
						localize("coMarketsBullet1Dropdown3")]},
					{text: localize("coMarketsBullet2"),
					bullets: [
						localize("coMarketsBullet2Dropdown1"),
						localize("coMarketsBullet2Dropdown2"),
						localize("coMarketsBullet2Dropdown3")]},
					{text: localize("coMarketsBullet3"),
					bullets: [
						localize("coMarketsBullet3Dropdown1"),
						localize("coMarketsBullet3Dropdown2"),
						localize("coMarketsBullet3Dropdown3")]},
					{text: localize("coMarketsBullet4"),
					bullets: [
						localize("coMarketsBullet4Dropdown1"),
						localize("coMarketsBullet4Dropdown2"),
						localize("coMarketsBullet4Dropdown3")]}
				],
				image: "custom2.jpg"
			},
			{
				id: 31,
				template: "templateLeftColumn",
				keyName: "Risk FI",
				keyArea: "Solutions",
				tags: "fi,corporate,markets,medium,small",
				backgroundImage: "",
				hideNotes: false,
				locked: false,
				localName: localize("coRiskFILocalName"),
				localArea: localize("coSolutionsLocalArea"),
				title: localize("coRiskFITitle"),
				nestedLists: [	
					{text: localize("coRiskFIBullet1"),
					bullets: [
						localize("coRiskFIBullet1Dropdown1"),
						localize("coRiskFIBullet1Dropdown2"),
						localize("coRiskFIBullet1Dropdown3")]},
					{text: localize("coRiskFIBullet2"),
					bullets: [
						localize("coRiskFIBullet2Dropdown1"),
						localize("coRiskFIBullet2Dropdown2"),
						localize("coRiskFIBullet2Dropdown3")]},
					{text: localize("coRiskFIBullet3"),
					bullets: [
						localize("coRiskFIBullet3Dropdown1"),
						localize("coRiskFIBullet3Dropdown2"),
						localize("coRiskFIBullet3Dropdown3")]},
					{text: localize("coRiskFIBullet4"),
					bullets: [
						localize("coRiskFIBullet4Dropdown1"),
						localize("coRiskFIBullet4Dropdown2"),
						localize("coRiskFIBullet4Dropdown3")]}
				],
				image: "custom2.jpg"
			},
			{
				id: 32,
				template: "templateLeftColumn",
				keyName: "Reduce Interest Risk",
				keyArea: "Solutions",
				tags: "no,sv,corporate,markets,medium,small",
				backgroundImage: "",
				hideNotes: false,
				locked: false,
				localName: localize("coReduceInterestRiskLocalName"),
				localArea: localize("coSolutionsLocalArea"),
				title: localize("coReduceInterestRiskTitle"),
				nestedLists: [	
					{text: localize("coReduceInterestRiskBullet1"),
					bullets: [
						localize("coReduceInterestRiskBullet1Dropdown1"),
						localize("coReduceInterestRiskBullet1Dropdown2")]},
					{text: localize("coReduceInterestRiskBullet2"),
					bullets: [
						localize("coReduceInterestRiskBullet2Dropdown1"),
						localize("coReduceInterestRiskBullet2Dropdown2")]}
				],
				image: "reading.jpg"
			},
			{
				id: 332,
				template: "templateLeftColumn",
				keyName: "innskuddspensjon NO",
				keyArea: "Solutions",
				tags: "no,corporate,savingsAndPension,medium,small",
				backgroundImage: "",
				hideNotes: false,
				locked: false,
				localName: localize("coinnskuddspensjonnoLocalName"),
				localArea: localize("coSolutionsLocalArea"),
				title: localize("coinnskuddspensjonnoTitle"),
				nestedLists: [	
					{text: localize("coinnskuddspensjonnoBullet1"),
					bullets: [
						localize("coinnskuddspensjonnoBullet1Dropdown1"),
						localize("coinnskuddspensjonnoBullet1Dropdown2")]},
					{text: localize("coinnskuddspensjonnoBullet2"),
					bullets: [
						localize("coinnskuddspensjonnoBullet2Dropdown1"),
						localize("coinnskuddspensjonnoBullet2Dropdown2")]}
				],
				image: "pension1.jpg"
			},
			{
				id: 33,
				template: "templateLeftColumn",
				keyName: "Export Risk",
				keyArea: "Solutions",
				tags: "no,corporate,markets,medium,small",
				backgroundImage: "",
				hideNotes: false,
				locked: false,
				localName: localize("coExportRiskLocalName"),
				localArea: localize("coSolutionsLocalArea"),
				title: localize("coExportRiskTitle"),
				nestedLists: [	
					{text: localize("coExportRiskBullet1")},
					{text: localize("coExportRiskBullet2")},
					{text: localize("coExportRiskBullet3")},
					{text: localize("coExportRiskBullet4")}
				],
				image: "iceskate.jpg"
			},
			{
				id: 34,
				template: "templateLeftColumn",
				keyName: "Import Risk",
				keyArea: "Solutions",
				tags: "no,corporate,markets,medium,small",
				backgroundImage: "ship_large.jpg",
				backgroundType: BACKGROUND_TYPE_RIGHT,
				hideNotes: false,
				locked: false,
				localName: localize("coImportRiskLocalName"),
				localArea: localize("coSolutionsLocalArea"),
				title: localize("coImportRiskTitle"),
				nestedLists: [	
					{text: localize("coImportRiskBullet1")},
					{text: localize("coImportRiskBullet2")},
					{text: localize("coImportRiskBullet3")},
					{text: localize("coImportRiskBullet4")}
				]
			},
			{
				id: 35,
				template: "templateLeftColumn",
				keyName: "Return of Investment",
				keyArea: "Solutions",
				tags: "no,corporate,savingsAndPension,medium,small",
				backgroundImage: "",
				hideNotes: false,
				locked: false,
				localName: localize("coReturnOfInvestmentLocalName"),
				localArea: localize("coSolutionsLocalArea"),
				title: localize("coReturnOfInvestmentTitle"),
				subTitle: localize("coReturnOfInvestmentSubTitle"),
				nestedLists: [	
					{text: localize("coReturnOfInvestmentBullet1")},
					{text: localize("coReturnOfInvestmentBullet2")},
					{text: localize("coReturnOfInvestmentBullet3"),
					bullets: [localize("coReturnOfInvestmentBullet3Dropdown1")]}
				],
				image: "phone.jpg"
			},
			{
				id: 290,
				template: "templateLeftColumn",
				keyName: "Finansiering SE",
				keyArea: "Solutions",
				tags: "sv,corporate,aboutNordea,medium,small,large",
				backgroundImage: "",
				hideNotes: false,
				locked: false,
				localName: localize("cofinansSELocalName"),
				localArea: localize("coSolutionsLocalArea"),
				title: localize("cofinansSETitle"),
				byline: localize("cofinansSEByline"),
				nestedLists: [	
					{text: localize("cofinansSEBullet1"),
					bullets: [
						localize("cofinansSEBullet1Dropdown1"),
						localize("cofinansSEBullet1Dropdown2"),
						localize("cofinansSEBullet1Dropdown3"),
						localize("cofinansSEBullet1Dropdown4")]},
					{text: localize("cofinansSEBullet2"),
					bullets: [
						localize("cofinansSEBullet2Dropdown1"),
						localize("cofinansSEBullet2Dropdown2"),
						localize("cofinansSEBullet2Dropdown3"),
						localize("cofinansSEBullet2Dropdown4")]},
					{text: localize("cofinansSEBullet3"),
					bullets: [
						localize("cofinansSEBullet3Dropdown1"),
						localize("cofinansSEBullet3Dropdown2"),
						localize("cofinansSEBullet3Dropdown3"),
						localize("cofinansSEBullet3Dropdown4")]},
					{text: localize("cofinansSEBullet4"),
					bullets: [
						localize("cofinansSEBullet4Dropdown1"),
						localize("cofinansSEBullet4Dropdown2"),
						localize("cofinansSEBullet4Dropdown3"),
						localize("cofinansSEBullet4Dropdown4")]},
					{text: localize("cofinansSEBullet5"),
					bullets: [
						localize("cofinansSEBullet5Dropdown1"),
						localize("cofinansSEBullet5Dropdown2"),
						localize("cofinansSEBullet5Dropdown3"),
						localize("cofinansSEBullet5Dropdown4")]},
				],
				image: "finansiering.jpg",
			},
			{
				id: 291,
				template: "templateLeftColumn",
				keyName: "PB1 SE",
				keyArea: "Solutions",
				tags: "sv,corporate,aboutNordea,medium,small,large",
				backgroundImage: "",
				hideNotes: false,
				locked: false,
				localName: localize("copbSELocalName"),
				localArea: localize("coSolutionsLocalArea"),
				title: localize("copbSETitle"),
				byline: localize("copbSEByline"),
					nestedLists: [	
					{text: localize("copbSEBullet1")},
					{text: localize("copbSEBullet2")},
					{text: localize("copbSEBullet3")},
					{text: localize("copbSEBullet4")}
				],
				image: "pb1.jpg",
			},
			{
				id: 291,
				template: "templateLeftColumn",
				keyName: "FI unit",
				keyArea: "Solutions",
				tags: "fi,corporate,aboutNordea,medium,small",
				backgroundImage: "",
				hideNotes: false,
				locked: false,
				localName: localize("counitFILocalName"),
				localArea: localize("coSolutionsLocalArea"),
				title: localize("counitFITitle"),
				byline: localize("counitFIByline"),
					nestedLists: [	
					{text: localize("counitFIBullet1")},
					{text: localize("counitFIBullet2")},
					{text: localize("counitFIBullet3")},
					{text: localize("counitFIBullet4")}
				],
				image: "pb1.jpg",
			},
			{
				id: 292,
				template: "templateLeftColumn",
				keyName: "PB2 SE",
				keyArea: "Solutions",
				tags: "sv,corporate,aboutNordea,medium,small,large",
				backgroundImage: "",
				hideNotes: false,
				locked: false,
				localName: localize("copb2SELocalName"),
				localArea: localize("coSolutionsLocalArea"),
				title: localize("copb2SETitle"),
				byline: localize("copb2SEByline"),
				nestedLists: [	
					{text: localize("copb2SEBullet1"),
					bullets: [
						localize("copb2SEBullet1Dropdown1"),
						localize("copb2SEBullet1Dropdown2"),
						localize("copb2SEBullet1Dropdown3"),
						localize("copb2SEBullet1Dropdown4"),
						localize("copb2SEBullet1Dropdown5"),
						localize("copb2SEBullet1Dropdown6")]},
					{text: localize("copb2SEBullet2"),
					bullets: [
						localize("copb2SEBullet2Dropdown1"),
						localize("copb2SEBullet2Dropdown2"),
						localize("copb2SEBullet2Dropdown3"),
						localize("copb2SEBullet2Dropdown4"),
						localize("copb2SEBullet2Dropdown5")]},
				],
				image: "pb2.jpg",
			},
			{
				id: 292,
				template: "templateLeftColumn",
				keyName: "pb3 SE",
				keyArea: "Solutions",
				tags: "sv,corporate,aboutNordea,medium,small,large",
				backgroundImage: "",
				hideNotes: false,
				locked: false,
				localName: localize("copb3SELocalName"),
				localArea: localize("coSolutionsLocalArea"),
				title: localize("copb3SETitle"),
				byline: localize("copb3SEByline"),
				nestedLists: [	
					{text: localize("copb3SEBullet1"),
					bullets: [
						localize("copb3SEBullet1Dropdown1"),
						localize("copb3SEBullet1Dropdown2")]},
					{text: localize("copb3SEBullet2"),
					bullets: [
						localize("copb3SEBullet2Dropdown1"),
						localize("copb3SEBullet2Dropdown2")]},
					{text: localize("copb3SEBullet3"),
					bullets: [
						localize("copb3SEBullet3Dropdown1")]},	
				],
				image: "pb3.jpg",
			},
			{
				id: 292,
				template: "templateLeftColumn",
				keyName: "Sparende SE",
				keyArea: "Solutions",
				tags: "sv,corporate,aboutNordea,medium,small,large",
				backgroundImage: "",
				hideNotes: false,
				locked: false,
				localName: localize("cosparendeSELocalName"),
				localArea: localize("coSolutionsLocalArea"),
				title: localize("cosparendeSETitle"),
				byline: localize("cosparendeSEByline"),
				nestedLists: [	
					{text: localize("cosparendeSEBullet1"),
					bullets: [
						localize("cosparendeSEBullet1Dropdown1")]},
					{text: localize("cosparendeSEBullet2"),
					bullets: [
						localize("cosparendeSEBullet2Dropdown1"),
						localize("cosparendeSEBullet2Dropdown2")]},
				],
				image: "sparande.jpg",
			},
			{
				id: 34,
				template: "templateLeftColumn",
				keyName: "Import Risk",
				keyArea: "Solutions",
				tags: "sv,corporate,markets,medium,small,large",
				backgroundImage: "",
				backgroundType: BACKGROUND_TYPE_RIGHT,
				hideNotes: false,
				locked: false,
				localName: localize("coImportRiskLocalName"),
				localArea: localize("coSolutionsLocalArea"),
				title: localize("coImportRiskTitle"),
				nestedLists: [	
					{text: localize("coImportRiskBullet1")},
					{text: localize("coImportRiskBullet2")},
					{text: localize("coImportRiskBullet3")},
				],
				image: "valuta-importer.jpg"
			},
			{
				id: 331,
				template: "templateLeftColumn",
				keyName: "Export Risk",
				keyArea: "Solutions",
				tags: "sv,corporate,markets,medium,small,large",
				backgroundImage: "",
				hideNotes: false,
				locked: false,
				localName: localize("coExportRiskLocalName"),
				localArea: localize("coSolutionsLocalArea"),
				title: localize("coExportRiskTitle"),
				nestedLists: [	
					{text: localize("coExportRiskBullet1")},
					{text: localize("coExportRiskBullet2")},
					{text: localize("coExportRiskBullet3")},
				],
				image: "valuta-export.jpg"
			},
			{
				id: 332,
				template: "templateLeftColumn",
				keyName: "Markets placeringar",
				keyArea: "Solutions",
				tags: "sv,corporate,markets,medium,small,large",
				backgroundImage: "",
				hideNotes: false,
				locked: false,
				localName: localize("coMarketsPlaceringSELocalName"),
				localArea: localize("coSolutionsLocalArea"),
				title: localize("coMarketsPlaceringSETitle"),
				nestedLists: [	
					{text: localize("coMarketsPlaceringSEBullet1"),
					bullets: [
						localize("coMarketsPlaceringSEBullet1Dropdown1")]
					},
					{text: localize("coMarketsPlaceringSEBullet2"),
					bullets: [
						localize("coMarketsPlaceringSEBullet2Dropdown1")]
					},
					{text: localize("coMarketsPlaceringSEBullet3"),
					bullets: [
						localize("coMarketsPlaceringSEBullet3Dropdown1")]
					},
					{text: localize("coMarketsPlaceringSEBullet4")},
					{text: localize("coMarketsPlaceringSEBullet5"),
					bullets: [
						localize("coMarketsPlaceringSEBullet5Dropdown1"),
						localize("coMarketsPlaceringSEBullet5Dropdown2"),
						localize("coMarketsPlaceringSEBullet5Dropdown3"),
						localize("coMarketsPlaceringSEBullet5Dropdown4")]
					},
				],
				image: "placering.jpg"
			},
			{
				id: 333,
				template: "templateLeftColumn",
				keyName: "Ränterisk",
				keyArea: "Solutions",
				tags: "sv,corporate,markets,medium,small,large",
				backgroundImage: "",
				hideNotes: false,
				locked: false,
				localName: localize("coRantriskLocalName"),
				localArea: localize("coSolutionsLocalArea"),
				title: localize("coRantriskTitle"),
				nestedLists: [	
					{text: localize("coRantriskBullet1"),
					bullets: [
						localize("coRantriskBullet1Dropdown1")]
					},
					{text: localize("coRantriskBullet2"),
					bullets: [
						localize("coRantriskBullet2Dropdown1")]
					},
					{text: localize("coRantriskBullet3"),
					bullets: [
						localize("coRantriskBullet3Dropdown1")]
					},
					{text: localize("coRantriskBullet4"),
					bullets: [
						localize("coRantriskBullet4Dropdown1")]
					},
				],
				image: "rantrisk.jpg"
			},
			{
				id: 334,
				template: "templateLeftColumn",
				keyName: "Hantera ranterisk",
				keyArea: "Solutions",
				tags: "sv,360,corporate,markets,medium,small,large",
				backgroundImage: "",
				hideNotes: false,
				locked: false,
				localName: localize("coHandleRantriskLocalName"),
				localArea: localize("coSolutionsLocalArea"),
				title: localize("coHandleRantriskTitle"),
				nestedLists: [	
					{text: localize("coHandleRantriskBullet1"),
					bullets: [
						localize("coHandleRantriskBullet1Dropdown1"),
						localize("coHandleRantriskBullet1Dropdown2")]
					},
				],
				image: "handlerisk.jpg"
			},
			{
				id: 335,
				template: "templateLeftColumn",
				keyName: "Leasing2",
				keyArea: "Solutions",
				tags: "sv,corporate,nordeaFinance,medium,small,large",
				backgroundImage: "",
				hideNotes: false,
				locked: false,
				localName: localize("coLeasing2LocalName"),
				localArea: localize("coSolutionsLocalArea"),
				title: localize("coLeasing2Title"),
				byline: localize("coLeasing2Byline"),
				nestedLists: [
					{text: localize("coLeasing2Bullet1")},
					{text: localize("coLeasing2Bullet2")},
					{text: localize("coLeasing2Bullet3")},
					{text: localize("coLeasing2Bullet4")}
				],
				iframe: "false",
				url: "https://intservices.sed1.root4.net/pccalc/",
				image: "leasing2.jpg",
			    linkText: localize("coLeasing2IframeLink")
			},
			{
				id: 336,
				template: "templateLeftColumn",
				keyName: "Avbetalning",
				keyArea: "Solutions",
				tags: "sv,corporate,nordeaFinance,medium,small,large",
				backgroundImage: "",
				hideNotes: false,
				locked: false,
				localName: localize("coAvbetalningLocalName"),
				localArea: localize("coSolutionsLocalArea"),
				title: localize("coAvbetalningTitle"),
				byline: localize("coAvbetalningByline"),
				nestedLists: [
					{text: localize("coAvbetalningBullet1")},
					{text: localize("coAvbetalningBullet2")},
					{text: localize("coAvbetalningBullet3")},
					{text: localize("coAvbetalningBullet4")}
				],
				iframe: "false",
				url: "https://intservices.sed1.root4.net/pccalc/",
				image: "Avbetalning.jpg"
			},
			{
				id: 337,
				template: "templateLeftColumn",
				keyName: "Fakturabelåning",
				keyArea: "Solutions",
				tags: "sv,corporate,NordeaFinance,medium,small,large",
				backgroundImage: "",
				hideNotes: false,
				locked: false,
				localName: localize("cofakturalaanLocalName"),
				localArea: localize("coSolutionsLocalArea"),
				title: localize("cofakturalaanTitle"),
				byline: localize("cofakturalaanByline"),
				nestedLists: [
					{text: localize("cofakturalaanBullet1")},
					{text: localize("cofakturalaanBullet2")},
					{text: localize("cofakturalaanBullet3")},
					{text: localize("cofakturalaanBullet4")}
				],
				image: "fakturalaan.jpg"
			},
			{
				id: 338,
				template: "templateLeftColumn",
				keyName: "Billeasing",
				keyArea: "Solutions",
				tags: "sv,corporate,NordeaFinance,medium,small,large",
				backgroundImage: "",
				hideNotes: false,
				locked: false,
				localName: localize("cobilleasingLocalName"),
				localArea: localize("coSolutionsLocalArea"),
				title: localize("cobilleasingTitle"),
				byline: localize("cobilleasingByline"),
				nestedLists: [
					{text: localize("cobilleasingBullet1")},
					{text: localize("cobilleasingBullet2")},
					{text: localize("cobilleasingBullet3")},
					{text: localize("cobilleasingBullet4")}
				],
				iframe: "false",
				url: "https://intservices.sed1.root4.net/pccalc/",
				image: "billeasing.jpg"
			},
			{
				id: 339,
				template: "templateLeftColumn",
				keyName: "NF Fleet",
				keyArea: "Solutions",
				tags: "sv,corporate,NordeaFinance,medium,small,large",
				backgroundImage: "",
				hideNotes: false,
				locked: false,
				localName: localize("confFleetLocalName"),
				localArea: localize("coSolutionsLocalArea"),
				title: localize("confFleetTitle"),
				byline: localize("confFleetByline"),
				nestedLists: [
					{text: localize("confFleetBullet1")},
					{text: localize("confFleetBullet2")},
					{text: localize("confFleetBullet3")},
					{text: localize("confFleetBullet4")}
				],
				image: "nfFleet.jpg"
			},
			{
				id: 36,
				template: "templateLeftColumn",
				keyName: "Competence",
				keyArea: "Solutions",
				tags: "no,corporate,savingsAndPension,medium,small",
				backgroundImage: "",
				hideNotes: false,
				locked: false,
				localName: localize("coCompetenceLocalName"),
				localArea: localize("coSolutionsLocalArea"),
				title: localize("coCompetenceTitle"),
				nestedLists: [	
					{text: localize("coCompetenceBullet1"),
					bullets: [localize("coCompetenceBullet1Dropdown1"),localize("coCompetenceBullet1Dropdown2")]},
					{text: localize("coCompetenceBullet2")},
					{text: localize("coCompetenceBullet3")}
				],
				image: "corporate_specialist.jpg"
			},
			{
				id: 37,
				template: "templatePyramid",
				keyName: "",
				keyArea: "Solutions",
				tags: "no,corporate,savingsAndPension,medium,small",
				backgroundImage: "",
				hideNotes: false,
				locked: false,
				localName: localize("coPyramidLocalName"),
				localArea: localize("coSolutionsLocalArea"),
				title: localize("coPyramidTitle"),
				level1: localize("coPyramidLevel1"),
				level2: localize("coPyramidLevel2"),
				level3: localize("coPyramidLevel3"),
				level4: localize("coPyramidLevel4"),
				level5: localize("coPyramidLevel5"),
				level6: localize("coPyramidLevel6"),
				level7: localize("coPyramidLevel7"),
				nestedLists: [
					{text: localize("coPyramidBullet1"),
					bullets: [localize("coPyramidBullet1Dropdown1"),localize("coPyramidBullet1Dropdown2")]},
					{text: localize("coPyramidBullet2"),
					bullets: [localize("coPyramidBullet2Dropdown1"),localize("coPyramidBullet2Dropdown2")]},
					{text: localize("coPyramidBullet3"),
					bullets: [localize("coPyramidBullet3Dropdown1")]}]
			},
			{
				id: 38,
				template: "templateCustom",
				keyName: "Custom",
				keyArea: "Solutions",
				tags: "no,fi,sv,da,corporate,aboutNordea,medium,small",
				backgroundImage: "",
				hideNotes: false,
				locked: false,
				localName: localize("customLocalName"),
				localArea: localize("coSolutionsLocalArea"),
				title: localize("customTitle"),
				toolTip: localize("customToolTip"),
				header: localize("customHeader"),
				bullet: localize("customBullet"),
				image: "custom1.jpg"
			},
			{
				id: 39,
				template: "templateSummary",
				keyName: "Summary",
				keyArea: "Summary",
				tags: "no,fi,sv,da,corporate,360,introduction,medium,small,large",
				backgroundImage: "",
				hideNotes: false,
				locked: true,
				localName: localize("coSummaryLocalName"),
				localArea: localize("coSummaryLocalArea"),
				title: localize("coSummaryTitle"),
				string1: localize("coAgendaString1"),	
				string2: localize("coAgendaString2"),
				string3: localize("coAgendaString3"),
				string4: localize("coAgendaString4"),
				string5: localize("coAgendaString5")
			},
			{
				id: 40,
				template: "templateActionPoints",
				keyName: "Action Points",
				keyArea: "Summary",
				tags: "no,fi,sv,da,corporate,360,theme,introduction,medium,small,large",
				backgroundImage: "",
				hideNotes: true,
				locked: true,
				localName: localize("actionPointsLocalName"),
				localArea: localize("coSummaryLocalArea"),
				title: localize("actionPointsTitle")
			},
			{
				id: 41,
				template: "templatePrint",
				keyName: "Print",
				keyArea: "End",
				tags: "no,fi,sv,corporate,360,theme,introduction,medium,small,large",
				backgroundImage: "welcome_co_"+Config.countryCode+".jpg",
				hideNotes: true,
				locked: true,
				localName: localize("printLocalName"),
				localArea: localize("coPrintLocalArea"),
				title: localize("printTitle"),
				printText: localize("printText")
			},
			{
				id: 141,
				template: "templatePrint",
				keyName: "Print",
				keyArea: "End",
				tags: "da,corporate,360,theme,introduction,medium,small",
				backgroundImage: "lp_dk_se.jpg",
				hideNotes: true,
				locked: true,
				localName: localize("printLocalName"),
				localArea: localize("coPrintLocalArea"),
				title: localize("printTitle"),
				printText: localize("printText")
			},
			
			{
				id: 142,
				template: "templateSurvey",
				keyName: "Survey",
				keyArea: "End",
				tags: "da,corporate,360,theme,introduction,medium,small",
				backgroundImage: "lp_dk_se.jpg",
				hideNotes: true,
				locked: true,
				localName: localize("surveyLocalName"),
				localArea: localize("coSurveyLocalArea"),
				title: localize("surveyTitle"),
				links: [
				{url:"https://www.surveyportal."+Config.countryCode+"/wq8/surveys/86603-90516/survey.html",text: localize("surveyLinkCustomer")},
				{url:"https://www.surveyportal."+Config.countryCode+"/wq8/surveys/97603-90516/survey.html",text: localize("surveyLinkAdvisor")}
				]
			},
			{
				id: 42,
				template: "templateSurvey",
				keyName: "Survey",
				keyArea: "End",
				tags: "fi,corporate,360,theme,introduction,medium,small",
				backgroundImage: "welcome_co_"+Config.countryCode+".jpg",
				hideNotes: true,
				locked: true,
				localName: localize("surveyLocalName"),
				localArea: localize("coSurveyLocalArea"),
				title: localize("surveyTitle"),
				links: [
				{url:"https://www.surveyportal.dk/wq8/surveys/63613-90516/survey.html",text: localize("surveyLinkCustomer")},
				{url:"https://www.surveyportal.dk/wq8/surveys/74613-90516/survey.html",text: localize("surveyLinkAdvisor")}
				]
			},
			{
				id: 42,
				template: "templateSurvey",
				keyName: "Survey",
				keyArea: "End",
				tags: "sv,corporate,360,theme,introduction,medium,small,large",
				backgroundImage: "welcome_co_"+Config.countryCode+".jpg",
				hideNotes: true,
				locked: true,
				localName: localize("surveyLocalName"),
				localArea: localize("coSurveyLocalArea"),
				title: localize("surveyTitle"),
				links: [
				{url:"https://www.surveyportal.dk/wq8/surveys/73513-90516/survey.html",text: localize("surveyLinkCustomer")},
				{url:"https://www.surveyportal.dk/wq8/surveys/62513-90516/survey.html",text: localize("surveyLinkAdvisor")}
				]
			},
			{
				id: 1142,
				template: "templateSurvey",
				keyName: "Survey",
				keyArea: "End",
				tags: "no,corporate,360,theme,introduction,medium,small",
				backgroundImage: "welcome_co_"+Config.countryCode+".jpg",
				hideNotes: true,
				locked: true,
				localName: localize("surveyLocalName"),
				localArea: localize("coSurveyLocalArea"),
				title: localize("surveyTitle"),
				links: [
				{url:"https://www.surveyportal.dk/wq8/surveys/38192-90516/survey.html",text: localize("surveyLinkCustomer")},
				{url:"https://www.surveyportal.dk/wq8/surveys/49192-90516/survey.html",text: localize("surveyLinkAdvisor")}
				]
			},
			{
				id: 44,
				template: "templateCustom",
				keyName: "Custom3",
				keyArea: "Solutions",
				tags: "no,fi,sv,da,corporate,aboutNordea,medium,small",
				backgroundImage: "",
				hideNotes: false,
				locked: false,
				localName: localize("customLocalName"),
				localArea: localize("coSolutionsLocalArea"),
				title: localize("customTitle"),
				toolTip: localize("customToolTip"),
				header: localize("customHeader"),
				bullet: localize("customBullet"),
				image: "custom1.jpg"
			},
			{
				id: 45,
				template: "templateCustom",
				keyName: "Custom4",
				keyArea: "Solutions",
				tags: "no,fi,sv,da,corporate,aboutNordea,medium,small",
				backgroundImage: "",
				hideNotes: false,
				locked: false,
				localName: localize("customLocalName"),
				localArea: localize("coSolutionsLocalArea"),
				title: localize("customTitle"),
				toolTip: localize("customToolTip"),
				header: localize("customHeader"),
				bullet: localize("customBullet"),
				image: "custom1.jpg"
			},
            {
				id: 299,
				template: "templateMultichannel",
				keyName: "Custom12",
				keyArea: "Solutions",
				tags: "da,household,360,dailyBanking,premium,gold",
				backgroundImage: "multi-bg.png",
				hideNotes: false,
				locked: false,
				localName: localize("multiLocalName"),
				localArea: localize("hhSolutionsLocalArea")
			},
				{
				id: 300,
				template: "templateLeftColumn",
				keyName: "CM",
				keyArea: "Solutions",
				tags: "sv,corporate,finance,medium,small,large",
				backgroundImage: "",
				hideNotes: false,
				locked: false,
				localName: localize("cocmSELocalName"),
				localArea: localize("cocmSELocalArea"),
				title: localize("cocmSETitle"),
				byline: localize("cocmSEByline"),
				nestedLists: [	
					{text: localize("cocmSEBullet1"),
					bullets: [
						localize("cocmSEBullet1Dropdown1"),
						localize("cocmSEBullet1Dropdown2"),
						localize("cocmSEBullet1Dropdown3"),
						localize("cocmSEBullet1Dropdown4")]},
					{text: localize("cocmSEBullet2")},
					{text: localize("cocmSEBullet3")},
					{text: localize("cocmSEBullet4")}
				],
				image: "cash-management.jpg",
			}
			]
		};
	}

	function initConfigTemplate() {
		registerHelpers();
		registerPartials();

		//init config template
		$('#templateConfigArea').html('');
		var source = $('#templateConfig').html();
		var template = Handlebars.compile(source, {noEscape: true});
		var html = template(data.config);
		$('#templateConfigArea').html(html);
	}

	function initSlideTemplates() {
		$('#data').empty();
		var html = "";
		var l = data.slides.length;
		for(var i = 0; i < l; i++)
		{
			var slide = data.slides[i];
			slide.id = i;
			var source = getTemplate(slide.template);
			var template = Handlebars.compile(source, {noEscape: true});
			html += template(slide);

			if (slide.backgroundImage == "")
				continue;

			$('<img/>').attr('src', 'img/'+slide.backgroundImage).load(function() {
			   $(this).remove(); // prevent memory leaks as @benweet suggested
			});
		}
		$('#data').append(html);
	}

	var cachedTemplates = {};
	function getTemplate(selector) {
		if (!cachedTemplates[selector])
			return cachedTemplates[selector] = document.getElementById(selector).innerHTML;
		else
			return cachedTemplates[selector];
	}

	function registerPartials() {
    	Handlebars.registerPartial("sectionHeader", $("#partialSectionHeader").html());
    	Handlebars.registerPartial("sectionFooter", $("#partialSectionFooter").html());
    	Handlebars.registerPartial("list", $("#partialList").html());
    	Handlebars.registerPartial("nestedList", $("#partialNestedList").html());
    	Handlebars.registerPartial("bullet", $("#partialBullet").html());
	}

	function registerHelpers() {
		Handlebars.registerHelper('localize', function(data) {
			return localize(data.hash.key);
		});
	}


	function localize(key) {
		return Globalize.localize(key, Config.language);
	}

	return {
		initData: initData,
		BACKGROUND_TYPE_FULL: BACKGROUND_TYPE_FULL,
		BACKGROUND_TYPE_RIGHT: BACKGROUND_TYPE_RIGHT,
		initConfigTemplate: initConfigTemplate,
		initSlideTemplates: initSlideTemplates,
		localize: localize,
		data: data
	};
})();