$(document).ready(function() {

    "use strict";

	if( $('.has-datetimepicker').length ) 
	{
		$('.has-datetimepicker').datetimepicker();
	}

	if( $('.has-datepicker').length )
	{
		$('.has-datepicker').datetimepicker({format: 'DD/MM/YYYY'});
	} 	

});

(function($){
	"use strict";
	$(function() {
		
		 $('#area_masterTbl').DataTable();

		 $('#appliance_masterTbl').DataTable();
		 
		 $('#appliance_category_tbl').DataTable();

		 $('#appliance_service_detail_tbl').DataTable();

		 $('#appliance_service_header_tbl').DataTable();

		 $("#Appliance_type_tbl").DataTable();

		 $("#servicemaster_tbl").DataTable();

		 $("#Partner_enquiry_master_tbl").DataTable();

		 $("#customer_signup_masterTbl").DataTable();

		 $("#vendormaster_Tbl").DataTable();
		 
		 $("#appliance_SparePartTbl").DataTable();
		 $("#issue_table").DataTable();
		 $("#RateTable").DataTable();
		 $("#BrandTbl").DataTable();
		 $("#invoiceTable").DataTable();
		 $("#bookingTable").DataTable();

	    	// More code using $ as alias to jQuery
	  });


/* Adminstratior location master page */



})(jQuery); 