$(document).ready(function(){
	
	var config = {
		siteURL		: 'tutorialzine.com',	// Change this to your site
		searchSite	: true,
		type		: 'web',
		append		: false,
		perPage		: 8,			// A maximum of 8 is allowed by Google
		page		: 0				// The start page
	}
	
	// The small arrow that marks the active search icon:
	
		
	
		$('#more').fadeOut();

	
	
	
	// Focusing the input text box:
	$('#s').focus();

	$('.loader').hide();

		
	});
	
	$('#searchSite,#searchWeb').change(function(){
		// Listening for a click on one of the radio buttons.
		// config.searchSite is either true or false.
		
		config.searchSite = this.id == 'searchSite';
	});
	
	
	
	

