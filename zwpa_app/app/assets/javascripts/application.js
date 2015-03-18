// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery.turbolinks
//= require jquery_ujs
//= require jquery.ui.datepicker
//= require foundation
//= require turbolinks

//= require_tree .

$(function(){ $(document).foundation(); });

// Datepicker code
$(function() {
  $(".datepicker").datepicker({
  	changeMonth: true,
    changeYear: true,
    format: 'mm/dd/YYYY'
  });


  	// alternate css checkbox groups

	$('.checkbox').change(function(){
		$(this).toggleClass('boxed-checked');
	})

	
	// alternate css radio groups

	$('input:radio').change(function(){
		var theName = this.name;

		$('input:radio').each(function() {
			if(this.name==theName){
				if($(this).is(':checked')){
					if($(this).val()=="Yes"){
						
						$(this).parent().addClass('radio-checked-yes');
					}
					else if($(this).val()=="No"){
						$(this).parent().addClass('radio-checked-no');
						console.log("no");
					}
					else{
						$(this).parent().addClass('radio-checked-dk');
					}



				} 
				else{
					if($(this).val()=="Yes"){
						$(this).parent().removeClass('radio-checked-yes');
					}
					else if($(this).val()=="No"){
						$(this).parent().removeClass('radio-checked-no');
					}
					else{
						$(this).parent().removeClass('radio-checked-dk');
					}
					
				}

			};
		
		});

	});
	


});//end of js

