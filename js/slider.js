$(document).ready(function() {
    		
	    	$('#rate').slider({
	          	formatter: function(value) {
	            	return 'Current value: ' + value;
	          	}
	        });
}