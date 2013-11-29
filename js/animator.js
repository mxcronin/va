(function(namespace, $){
		'use strict';
		namespace.animationController ={
			curdataid: null,
            type: null,
            
			init: function() {
				swippers();
				console.log(app.animationController.type);
				
				if($('.multichannel-app').hasClass('init') || $('.multichannel-app').length === 0){
						return
				}
				$('.multichannel-app').addClass('init');
				var $multichannel;

				$('.multichannel').on('click',
				function() {
					$multichannel = $(this);
					if(!Modernizr.csstransitions){			
						$(this).find('.text').animate({left: '450'}, 800, function() {
						    	$multichannel.find('.arrow').animate({left: '400'}, 100);
						  });;
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
				
				Globalize.culture('Danmark');
				function alocalize(key) {
						return Globalize.localize(key, 'multi-da');
					}

				function AppViewModel() {
                        if(app.animationController.type === 'household'){
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
                            this.mobile = ko.observable(alocalize("comobile"));
						    this.home = ko.observable(alocalize("cohome"));
						    this.bank = ko.observable(alocalize("cobank"));

						    this.mobilebullet1 = ko.observable(alocalize("comobilebullet1"));
						    this.mobilebullet2 = ko.observable(alocalize("comobilebullet2"));
						    this.mobilebullet3 = ko.observable(alocalize("comobilebullet3"));
						    this.mobiletitle = ko.observable(alocalize("comobiletitle"));
						    this.mobileintro = ko.observable(alocalize("comobileintro"));

						    this.swippbullet1 = ko.observable(alocalize("coswippbullet1"));
						    this.swippbullet2 = ko.observable(alocalize("coswippbullet2"));
						    this.swippbullet3 = ko.observable(alocalize("coswippbullet3"));
						    this.swipptitle = ko.observable(alocalize("coswipptitle"));
						    this.swippintro = ko.observable(alocalize("coswippintro"));

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

						    
						    this.advicebullet1 = ko.observable(alocalize("coadvicebullet1"));
						    this.advicebullet2 = ko.observable(alocalize("coadvicebullet2"));
						    this.advicebullet3 = ko.observable(alocalize("coadvicebullet3"));
						  	this.adviceintro = ko.observable(alocalize("coadviceintro"));
						    this.advicetitle = ko.observable(alocalize("coadvicetitle"));
                        }
					}	    
				ko.applyBindings(new AppViewModel());
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