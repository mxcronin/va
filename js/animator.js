(function(namespace, $){
		'use strict';
		namespace.animationController ={
			curdataid: null,
            type: null,
            lang: null,
            bound: false,
            
			init: function() {
				swippers();
			 
				if (app.animationController.type === 'corporate'){
				    $('.multichannel-app').addClass('corporate');
				}
				
				if($('.multichannel-app').length === 0){
						return;
				}
				$('.multichannel-app').addClass('init');
			
				//Video fix for IE
				// var $video =  document.getElementById('mobileVideo');
				// var $videoimg = $('.video-img');
				// if($video.length !== 0 && $('body').hasClass('lt-ie9')) {
				//     $videoimg.on('click', function(){
				//         $videoimg.hide();
				//         $video.play();
				//     })
				// }
				//KNOCKOUT settings
				if(app.animationController.lang === 'da'){
				    Globalize.culture('Danmark');
				}
				if(app.animationController.lang === 'sv'){
				    Globalize.culture('Sverige');
				}
                if(app.animationController.lang === 'no'){
				    Globalize.culture('Sverige');
				    app.animationController.lang = 'sv';
				}
		
			    if(app.animationController.lang === 'fi'){
				    Globalize.culture('Suomi');
				}
				function alocalize(key) {
						return Globalize.localize(key, 'multi-' + app.animationController.lang);
					}

				function AppViewModel() {
                        if(app.animationController.type === 'household'){
                            this.header = ko.observable(alocalize("header"));
                            
						    this.mobile = ko.observable(alocalize("mobile"));
						    this.home = ko.observable(alocalize("home"));
						    this.bank = ko.observable(alocalize("bank"));

						    this.mobilebullet1 = ko.observable(alocalize("mobilebullet1"));
						    this.mobilebullet2 = ko.observable(alocalize("mobilebullet2"));
						    this.mobilebullet3 = ko.observable(alocalize("mobilebullet3"));
						    this.mobiletitle = ko.observable(alocalize("mobiletitle"));
						    this.mobileintro = ko.observable(alocalize("mobileintro"));
						    //console.log(ko.utils.unwrapObservable(this.mobilebullet1))

						    this.swippbullet1 = ko.observable(alocalize("swippbullet1"));
						    this.swippbullet2 = ko.observable(alocalize("swippbullet2"));
						    this.swippbullet3 = ko.observable(alocalize("swippbullet3"));
						    this.swipptitle = ko.observable(alocalize("swipptitle"));
						    this.swippintro = ko.observable(alocalize("swippintro"));

						    this.momoneybullet1 = ko.observable(alocalize("momoneybullet1"));
						    this.momoneybullet2 = ko.observable(alocalize("momoneybullet2"));
						    this.momoneybullet3 = ko.observable(alocalize("momoneybullet3"));
						    this.momoneytitle = ko.observable(alocalize("momoneytitle"));
						    this.momoneyintro = ko.observable(alocalize("momoneyintro"));

						    this.tlfbankbullet1 = ko.observable(alocalize("tlfbankbullet1"));
						    this.tlfbankbullet2 = ko.observable(alocalize("tlfbankbullet2"));
						    this.tlfbankbullet3 = ko.observable(alocalize("tlfbankbullet3"));
						    this.tlfbanktitle = ko.observable(alocalize("tlfbanktitle"));
						    this.tlfbankintro = ko.observable(alocalize("tlfbankintro"));

						    this.netbankbullet1 = ko.observable(alocalize("netbankbullet1"));
						    this.netbankbullet2 = ko.observable(alocalize("netbankbullet2"));
						    this.netbankbullet3 = ko.observable(alocalize("netbankbullet3"));
						    this.netbanktitle = ko.observable(alocalize("netbanktitle"));
						    this.netbankintro = ko.observable(alocalize("netbankintro"));

						    this.ipadbankbullet1 = ko.observable(alocalize("ipadbankbullet1"));
						    this.ipadbankbullet2 = ko.observable(alocalize("ipadbankbullet2"));
						    this.ipadbankbullet3 = ko.observable(alocalize("ipadbankbullet3"));
						    this.ipadbanktitle = ko.observable(alocalize("ipadbanktitle"));
						    this.ipadbankintro = ko.observable(alocalize("ipadbankintro"));

						    
						    this.advicebullet1 = ko.observable(alocalize("advicebullet1"));
						    this.advicebullet2 = ko.observable(alocalize("advicebullet2"));
						    this.advicebullet3 = ko.observable(alocalize("advicebullet3"));
						  	this.adviceintro = ko.observable(alocalize("adviceintro"));
						    this.advicetitle = ko.observable(alocalize("advicetitle"));
                        }
                        if(app.animationController.type === 'corporate'){
                            this.header = ko.observable(alocalize("header"));
                             
                            this.mobile = ko.observable(alocalize("comobile"));
						    this.home = ko.observable(alocalize("cohome"));
						    this.bank = ko.observable(alocalize("cobank"));

						    this.mobilebullet1 = ko.observable(alocalize("mobilebullet1"));
						    this.mobilebullet2 = ko.observable(alocalize("mobilebullet2"));
						    this.mobilebullet3 = ko.observable(alocalize("mobilebullet3"));
						    this.mobiletitle = ko.observable(alocalize("mobiletitle"));
						    this.mobileintro = ko.observable(alocalize("mobileintro"));
						    
						    this.swippbullet1 = ko.observable(alocalize("swippbullet1"));
						    this.swippbullet2 = ko.observable(alocalize("swippbullet2"));
						    this.swippbullet3 = ko.observable(alocalize("swippbullet3"));
						    this.swipptitle = ko.observable(alocalize("swipptitle"));
						    this.swippintro = ko.observable(alocalize("swippintro"));
						    
						    this.cokortbullet1 = ko.observable(alocalize("cokortbullet1"));
						    this.cokortbullet2 = ko.observable(alocalize("cokortbullet2"));
						    this.cokortbullet3 = ko.observable(alocalize("cokortbullet3"));
						    this.cokorttitle = ko.observable(alocalize("cokorttitle"));
						    this.cokortintro = ko.observable(alocalize("cokortintro"));

						    this.cotelbullet1 = ko.observable(alocalize("cotelbullet1"));
						    this.cotelbullet2 = ko.observable(alocalize("cotelbullet2"));
						    this.cotelbullet3 = ko.observable(alocalize("cotelbullet3"));
						    this.coteltitle = ko.observable(alocalize("coteltitle"));
						    this.cotelintro = ko.observable(alocalize("cotelintro"));

						    this.momoneybullet1 = ko.observable(alocalize("comomoneybullet1"));
						    this.momoneybullet2 = ko.observable(alocalize("comomoneybullet2"));
						    this.momoneybullet3 = ko.observable(alocalize("comomoneybullet3"));
						    this.momoneytitle = ko.observable(alocalize("comomoneytitle"));
						    this.momoneyintro = ko.observable(alocalize("comomoneyintro"));

						    this.tlfbankbullet1 = ko.observable(alocalize("cotlfbankbullet1"));
						    this.tlfbankbullet2 = ko.observable(alocalize("cotlfbankbullet2"));
						    this.tlfbankbullet3 = ko.observable(alocalize("cotlfbankbullet3"));
						    this.tlfbanktitle = ko.observable(alocalize("cotlfbanktitle"));
						    this.tlfbankintro = ko.observable(alocalize("cotlfbankintro"));

						    this.netbankbullet1 = ko.observable(alocalize("conetbankbullet1"));
						    this.netbankbullet2 = ko.observable(alocalize("conetbankbullet2"));
						    this.netbankbullet3 = ko.observable(alocalize("conetbankbullet3"));
						    this.netbanktitle = ko.observable(alocalize("conetbanktitle"));
						    this.netbankintro = ko.observable(alocalize("conetbankintro"));

						    this.ipadbankbullet1 = ko.observable(alocalize("coipadbankbullet1"));
						    this.ipadbankbullet2 = ko.observable(alocalize("coipadbankbullet2"));
						    this.ipadbankbullet3 = ko.observable(alocalize("coipadbankbullet3"));
						    this.ipadbanktitle = ko.observable(alocalize("coipadbanktitle"));
						    this.ipadbankintro = ko.observable(alocalize("coipadbankintro"));

						    this.investmentbullet1 = ko.observable(alocalize("investmentbullet1"));
						    this.investmentbullet2 = ko.observable(alocalize("investmentbullet2"));
						    this.investmentbullet3 = ko.observable(alocalize("investmentbullet3"));
						    this.investmentbullet4 = ko.observable(alocalize("investmentbullet4"));
						    this.investmenttitle = ko.observable(alocalize("investmenttitle"));
						    this.investmentintro = ko.observable(alocalize("investmentintro"));
						    
						    this.coadvicebullet1 = ko.observable(alocalize("coadvicebullet1"));
						    this.coadvicebullet2 = ko.observable(alocalize("coadvicebullet2"));
						    this.coadvicebullet3 = ko.observable(alocalize("coadvicebullet3"));
						    this.coadvicebullet4 = ko.observable(alocalize("coadvicebullet4"));
						  	this.coadviceintro = ko.observable(alocalize("coadviceintro"));
						    this.coadvicetitle = ko.observable(alocalize("coadvicetitle"));
						    
						    this.boxbullet1 = ko.observable(alocalize("boxbullet1"));
						    this.boxbullet2 = ko.observable(alocalize("boxbullet2"));
						    this.boxbullet3 = ko.observable(alocalize("boxbullet3"));
						  	this.boxintro = ko.observable(alocalize("boxintro"));
						    this.boxtitle = ko.observable(alocalize("boxtitle"));
						    this.boxlink =  ko.observable(alocalize("boxlink"));
						    
						    this.valutabullet1 = ko.observable(alocalize("valutabullet1"));
						    this.valutabullet2 = ko.observable(alocalize("valutabullet2"));
						    this.valutabullet3 = ko.observable(alocalize("valutabullet3"));
						  	this.valutaintro = ko.observable(alocalize("valutaintro"));
						    this.valutatitle = ko.observable(alocalize("valutatitle"));
						    this.valutalink =  ko.observable(alocalize("valutalink"));
						    
                        }
					}
				
					var boundElement = $('.multichannel-app')[0];
					ko.cleanNode(boundElement);
				
					ko.applyBindings(new AppViewModel(), boundElement); 
					this.bound = true;
				   
				    this.eventBindings();
			
		},
		eventBindings: function() { 
		    	var $multichannel;
		    	$('.multichannel').on('click',
				function() {
					$multichannel = $(this);
					 $multichannel.find('.text-container').addClass('visible');
					if(!Modernizr.csstransitions){			
						$(this).find('.text').animate({left: '450'}, 200, function() {
						    	$multichannel.find('.arrow').animate({left: '400'}, 100);
						  });
						return
					}
					$(this).find('.arrow').addClass('slide-out');
					$(this).find('.text').addClass('slide-out');
				});
				

				$('.multichannel').on('dblclick',
					function() {
						$multichannel = $(this);
						$(this).find('.inner-card').addClass('flipped');
					
						if(Modernizr.csstransitions){
							setTimeout(function(){$multichannel.addClass('scaled');}, 800);
						} else {
							$multichannel.addClass('scaled');
						}				
						setTimeout(
									function(){
										if($multichannel.hasClass('scaled')){
											$('.multichannel-container.active').find('.info').fadeIn();
											$('.multichannel-container.active').find('.foto-container').fadeIn();
											$('.multichannel-container.active').find('.app-stores').fadeIn();
										} 
									}, 800);
				});
			   
				$('.choice-list li').on('click', 
					function(e){
						var dataid = $(e.currentTarget).attr('data-id');
						app.animationController.curdataid = dataid;
						if(!Modernizr.csstransitions){				
							$('.multichannel-container.'+ dataid).animate({left: '0%'}, 800);
						}
						$('.multichannel-container.'+ dataid).toggleClass('active');
				});
				if(!Modernizr.touch) {
						$('.close-btn').on('click', 
							function(e){
								if(!Modernizr.csstransitions){	
									$('.multichannel-container.'+app.animationController.curdataid).animate({left: '100%'}, 800);
								}
								$('.multichannel-container.'+app.animationController.curdataid).toggleClass('active');
						});

						$('.card-close-btn').on('click', 
							function(e){
								$multichannel = $('.multichannel.scaled');

								$multichannel.find('.inner-card').removeClass('flipped');
								if(!Modernizr.csstransitions){	
									$multichannel.removeClass('scaled');
								}
								if(Modernizr.csstransitions){
									setTimeout(function(){$multichannel.removeClass('scaled');}, 800);
								}
								$('.multichannel-container.active').find('.info').fadeOut();
								$('.multichannel-container.active').find('.foto-container').fadeOut();
								$('.multichannel-container.active').find('.app-stores').fadeOut();
						});
				}
		}
		
		}
})(window.app = window.app || {}, window.jQuery);

            function swippers() {
                if(Modernizr.touch) {
    					
    					$('.multichannel').addSwipeEvents().bind('doubletap', function(evt, touch){
    						$multichannel = $(this);
    						$(this).find('.inner-card').toggleClass('flipped');
    						//$multichannel.toggleClass('scaled');					
    						setTimeout(function(){$multichannel.toggleClass('scaled');}, 800);
    						setTimeout(
    									function(){
    										if($multichannel.hasClass('scaled')){
    											$('.multichannel-container.active').find('.info').fadeIn();
    											$('.multichannel-container.active').find('.foto-container').fadeIn();
    											$('.multichannel-container.active').find('.app-stores').fadeIn();
    										} else {
    											$('.multichannel-container.active').find('.info').fadeOut();
    											$('.multichannel-container.active').find('.foto-container').fadeOut();
    											$('.multichannel-container.active').find('.app-stores').fadeOut();
    										}
    									}, 2000);
    		  				});
    					$('.close-btn').addSwipeEvents().bind('touchstart', 
    						function(evt, touch){
    							$('.multichannel-container.'+app.animationController.curdataid).toggleClass('active');
    					});
    				}
            }
// (function($) {
//      $.fn.doubleTap = function(doubleTapCallback) {
//          return this.each(function(){
// 			var elm = this;
// 			var lastTap = 0;
// 			$(elm).bind('vmousedown', function (e) {
//                                 var now = (new Date()).valueOf();
// 				var diff = (now - lastTap);
//                                 lastTap = now ;
//                                 if (diff < 50) {
// 		                    if($.isFunction( doubleTapCallback ))
// 		                    {
// 		                       doubleTapCallback.call(elm);
// 		                    }
//                                 }      
// 			});
//          });
//     }
// })(jQuery);