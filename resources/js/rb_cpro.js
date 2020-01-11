(function($) {
  	$(function(){

  		$(".rb_creq").on("click",function(e){
  			e.preventDefault();
  			var req=$(this).attr("data-value");

		  	$.ajax({
	                url: Settings.base_url+'Home/rb_customer_request',
	                type: 'POST',
	                data: {
	                    request: req
	                },
	                success: function(response_data) {

	                		$("#user-profile-content_section").html(response_data);
                	}
            });
  		});

  	
        $(document).on("click",".add-address",function(e){
  				e.preventDefault();
  				var newaddress_field="<input type='text' class='form-control' id='address-field' name='new_address'/><span class='error-msg'></span>";
	  				var a=$(this).html();
	  			if(a=='Save')
  				{
  					 	var regex1 = new RegExp("^[a-zA-Z0-9 ./_\s]*$");
  					 	var person_address=$("#address-field").val();
 						if(person_address.length>0 && person_address!="" && person_address.trim()!="" && regex1.test(person_address))
                            {
                            		$.ajax({
								                url: Settings.base_url+'Home/update_customer_address',
								                type: 'POST',
								                data: {
								                    newaddress: person_address
								                },
								                success: function(response_data) {

								                	var data=JSON.parse(response_data);
								                		if(data.error){
          								                			$("div.address-block .error-msg").html(response_data.msg);
          								                			$(".address_value").html(person_address);
          									                		$(".address-block").html("");
          	  														     $(".add-address").html("Change Address");
          														}else{
          																    $("div.address-block .error-msg").html(response_data.msg);
          														}
							                	}
							                 });

                            }else{
                            	$("div.address-block .error-msg").html("Enter a valid address");
                            }
  				}else{
  					
  					$(this).html("Save");
	  				$(".address-block").html(newaddress_field);
  				}
  		});

      // password set

          $(document).on("click",".add-password",function(e){

          e.preventDefault();
          var newaddress_field="<input type='password' class='form-control' id='password-field' name='new_password'/><span class='error-msg'></span>";
            var a=$(this).html();
          if(a=='Save')
          {
              var regex1 = new RegExp("^[a-zA-Z0-9 ./_\s]*$");
              //&& regex1.test(person_password)

              var person_password=$("#password-field").val();
            if(person_password.length>0 && person_password!="" && person_password.trim()!="" )
                            {
                                $.ajax({
                                url: Settings.base_url+'Home/update_customer_password',
                                type: 'POST',
                                data: {
                                    newpassword: person_password
                                },
                                success: function(response_data) {

                                  var data=JSON.parse(response_data);
                                    if(data.error){
                                                $("div.password-block .error-msg").html(response_data.msg);
                                                $(".password_value").html('password updated');
                                                $(".password-block").html("");
                                               $(".add-password").html("Change Password");
                                      }else{
                                              $("div.password-block .error-msg").html(response_data.msg);
                                      }
                                }
                               });

                            }else{
                              $("div.password-block .error-msg").html("Enter a valid password");
                            }
          }else{
            
            $(this).html("Save");
            $(".password-block").html(newaddress_field);
          }
      });

      // get booking detail

      $(document).on("click","button.rb_usr_book_dtl_btn",function(e){

          var bid=$(this).attr("data-booking-id");
          if($(this).attr("data-value")=="invoice")
          {
            $.ajax({
                url: Settings.base_url+'Home/customer_requestforbookingdetail',
                type: 'POST',
                data: {
                    booking_id: bid,getBookingDetail:'book_detail'
                },
                success: function(response_data) {
                    $("#myModal_booking_detail .modal-header .modal-title").html("Booking Detail");
                    $("#myModal_booking_detail").css("display","block");
                    $("#myModal_booking_detail").css("opacity","1");
                    $("#myModal_booking_detail .modal-body").html(response_data);
                    $("#myModal_booking_detail").modal();
                    //$(".modal-backdrop").remove();
                }
              });
          }else if($(this).attr("data-value")=="technician")
          {
             $.ajax({
                url: Settings.base_url+'Home/customer_requestforAssigned_technicianDetail',
                type: 'POST',
                data: {
                    booking_id: bid,getBookingDetail:'tech_detail'
                },
                success: function(response_data) {
                    $("#myModal_booking_detail .modal-header .modal-title").html("Technician Detail");
                    $("#myModal_booking_detail").css("display","block");
                    $("#myModal_booking_detail").css("opacity","1");
                    $("#myModal_booking_detail .modal-body").html(response_data);
                    $("#myModal_booking_detail").modal();
                    //$(".modal-backdrop").remove();
                }
              });

          }else if($(this).attr("data-value")=="booking_cancel")
          {
              
              $.ajax({
                url: Settings.base_url+'Home/customer_requestforbookingCancel',
                type: 'POST',
                data: {
                    booking_id: bid,getBookingDetail:'book_cancel'
                },
                success: function(response_data) {
                    $("#myModal_booking_detail .modal-header .modal-title").html("Cancel & ReSchedule Booking");
                    $("#myModal_booking_detail").css("display","block");
                    $("#myModal_booking_detail").css("opacity","1");
                    $("#myModal_booking_detail .modal-body").html(response_data);
                    $("#myModal_booking_detail").modal();
                    //$(".modal-backdrop").remove();
                }
              });

          }
      });

      $(document).on("click",".modal-footer button,.modal-header .close_button",function(e){
          $("#myModal_booking_detail").css("display","none");
      });

    $(document).on("click","#cancel_booking",function(e){

              var bid=$(this).attr("data-booking-id");

              var reason=$("#booking_reason").val();
              if(reason!="" && reason!=null && reason!=0)
              {
                     $.ajax({
                              url: Settings.base_url+'Home/customer_requestCancelBooking',
                              type: 'POST',
                              data: {
                                  booking_id: bid,reason_tocancel:reason,cancel_by:"customer"
                              },
                            success: function(response_data) {
                                  var res=JSON.parse(response_data);
                                  if(res.status=="updated" && res.error=="no")
                                  {
                                    $("#myModal_booking_detail .modal-header .modal-title").html("Booking Status");
                                    $("#myModal_booking_detail").css("display","block");
                                    $("#myModal_booking_detail").css("opacity","1");
                                    $("#myModal_booking_detail .modal-body").html("<h1 align='center' class='txt'>Booking Canceled</h1>");
                                    $("#myModal_booking_detail").modal();
                                  }

                             }
                        });

              }else{
                        $("#myModal_booking_detail .modal-header .modal-title").html("Alert !!");
                        $("#myModal_booking_detail").css("display","block");
                        $("#myModal_booking_detail").css("opacity","1");
                        $("#myModal_booking_detail .modal-body").html("<p style='color:Red;font-size:22px;font-weight:600px'>Please choose a reason to Cancel</p>");
                        $("#myModal_booking_detail").modal();
                        $("#myModal_booking_detail").fadeOut(5000,function(){

                            $("#booking_reason").focus();
                        

                        });

              }
    });

     $(document).on("click",".book_btn",function(e){
            var booking_time=$(this).text();
            $("#reschdule_time").val(booking_time);
            $(".book_btn").removeClass("booking_time_selected");
            $(this).addClass("booking_time_selected");
    });

    $(document).on("click","#reschedule_booking",function(){
            
            var bd=$("#reschdule_date").val();
            var bt=$("#reschdule_time").val();
            if(bt!="" && bd!="")
            {
              var bid=$(this).attr("data-booking-id");
              $.ajax({
                      url: Settings.base_url+'Home/customer_requestRescheduleBooking',
                      type: 'POST',
                      data: {
                              booking_id: bid,booking_date:bd,booking_time:bt,reschedule:"reschdeule"
                    },
                    success: function(response_data) {

                          var res=JSON.parse(response_data);
                          if(res.status=="updated" && res.error=="no")
                          {
                            $("#myModal_booking_detail .modal-header .modal-title").html("Booking Status");
                            $("#myModal_booking_detail").css("display","block");
                            $("#myModal_booking_detail").css("opacity","1");
                            $("#myModal_booking_detail .modal-body").html("<h1 align='center' class='txt'>Booking Reschduled</h1>");
                            $("#myModal_booking_detail").modal();
                            
                          }

                     }
                });
            }
    });

  });

})(jQuery);