function bookingConfirmed(){}
function getCurrentDate(today) {
  var dd = today.getDate();
  var mm = today.getMonth()+1; 
  var yyyy = today.getFullYear();
  if(dd<10) 
  {
      dd='0'+dd;
  } 
  if(mm<10) 
  {
      mm='0'+mm;
  } 
  today = yyyy+"-"+mm+"-"+dd;
  return today;
}

function bookingConfirmedRedirect()
{
  location.href=Settings.base_url+"Redirect/customerProfile";
}

sendEvent = function(sel, step) {
    var sel_event = new CustomEvent('next.m.' + step, {detail: {step: step}});
    window.dispatchEvent(sel_event);
};

var elem;
var timerId;
var active_app_id=null,active_service_id=null,active_type_id=null,app_img=null,setbookdate=null,checkdateselected=null,booking_time=null;
var request_to_apply={

  app_id:null,
  app_name:null,
  app_type:null,
  app_services:{app_service_id:null,app_detail_id:null},
  quantity:null,
  price:null,
  address:null,
  mobile:null,
  book_date:null,
  book_time:null,
  user_name:null,
  email:null,
  locality:null,
  loc_tag:null
};


var booking_request={
  customer_detail:{
    name:null,
    address:null,
    locality:null,
    mobile:null,
    loc_tag:null,
    email:null,
    booking_detail:{

          booking_date:null,
          booking_time:null,
          booking_address:null,
          booking_area:null,
          location:{
            name:null,
            id:null,
            app_detail:[{
                        id:null,
                        name:null,
                        app_services:[
                                    {
                                      name:null,
                                      id:null,
                                      s_id:null,
                                      app_type:[
                                            {
                                              id:null,
                                              name:null,
                                              quantity:null
                                            }
                                          ]
                                    }
                                  ]
                      }]
         }
    }
  },
   resetRequest:function()
  {
    this.customer_detail.booking_detail.location.app_detail=[{
                        id:null,
                        name:null,
                        app_services:[
                                    {
                                      name:null,
                                      id:null,
                                      s_id:null,
                                      app_type:[
                                            {
                                              id:null,
                                              name:null,
                                              quantity:null
                                            }
                                          ]
                                    }
                                  ]
                      }];

  },
  getCurrentAppName:function()
  {
      if(this.customer_detail.booking_detail.location.app_detail[0].name)
      {
          return this.customer_detail.booking_detail.location.app_detail[0].name;
      }else{
        return false;
      }

  },
  addBookingDetail:function(book_date,book_time)
  {

   var a=this.customer_detail.booking_detail;
   a.booking_date=book_date
   a.booking_time=book_time;   
  },
  addCustomer_Detail:function(name,address,locality,tag){
     var a=this.customer_detail;
      a.name=name;
      a.address=address;
      a.locality=locality;
      a.loc_tag=tag;
  },
  addLocation:function(loc_id,loc_name)
  {
   var a=this.customer_detail.booking_detail.location;
   a.id=loc_id;
   a.name=loc_name;   
  },
  addAppliance:function(app_id,app_name)
  {
      var i=0;
      var not_exist=0;
      var a=this.customer_detail.booking_detail.location.app_detail;
      if(a.length>0){
          for(i=0;i<a.length;i++)
          {
              if(a[i].id==app_id){
                return false;
             } else if(a[i].id===null)
              {
                a[i].id=app_id;
                a[i].name=app_name;
                break;    
              }
              else
                not_exist=1;
          }
            if(not_exist){
              a.push({id:app_id,name:app_name});

              // new element
              a[i].app_services=[];
              a[i].app_services.push({id:null,name:null,s_id:null});
            }
      }else{
         a.push({id:app_id,name:app_name});

         // new element
          a[0].app_services=[];
          a[0].app_services.push({id:null,name:null,s_id:null});         
      }
  },
  addService:function(app_id,service_id,sid,service_name)
  {
      var i=0;
      var not_exist=0;
      var a=this.customer_detail.booking_detail.location.app_detail;
      var s;
      var match="";
      var j=0;
      for(i=0;i<a.length;i++)
      {
          if(a[i].id==app_id)
            {
                 s=a[i].app_services;
                  if(s.length>0){
                            for(j=0;j<s.length;j++)
                              {
                               
                                  if(s[j].id==service_id){
                                    not_exist=0;
                                    break;
                                  }
                                  else if(s[j].id===null && match=="")
                                  {
                                    s[i].id=service_id;
                                    s[i].name=service_name;
                                    s[i].s_id=sid;
                                    break;    
                                  }
                                  else
                                    not_exist=1;
                              }
                              if(not_exist==1){
                                s.push({id:service_id,name:service_name,s_id:sid});
                                  // new element
                                  a[i].app_services[j].app_type=[];
                                  a[i].app_services[j].app_type.push({id:null,name:null,quantity:null});
                              }

                  }else{

                    s.push({id:service_id,name:service_name,s_id:sid});
                    // new element
                      a[0].app_services[j].app_type=[];
                      a[0].app_services[j].app_type.push({id:null,name:null,quantity:null});
                  }
            }
      }
  },
  removeappService:function(app_id,service_id)
  {
      var i=0;
      var a=this.customer_detail.booking_detail.location.app_detail;
      var s;
      var j=0;
      for(i=0;i<a.length;i++)
      {
          if(a[i].id==app_id)
            {
                 s=a[i].app_services;
                  if(s.length>0){
                      for(j=0;j<s.length;j++)
                        {
                          if(s[j].id==service_id){
                              s.splice(j,1);
                            }
                        }
                  }
            }
      }
  },
  UpdateAppTypeDetail:function(app_id,service_id,tid,qty)
  {
      var i=0;
      var not_exist=0;
      var a=this.customer_detail.booking_detail.location.app_detail;
      var s;
      var t;
      var j=0,k=0;
      for(i=0;i<a.length;i++)
      {
          if(a[i].id==app_id)
            {
                  s=a[i].app_services;
                  if(s.length>0)
                  {
                    for(j=0;j<s.length;j++)
                      {
                          if(s[j].id==service_id)
                           {
                                 t=a[i].app_services[j].app_type;
                                 if(t.length>0)
                                 {
                                      for(k=0;k<t.length;k++)
                                      {
                                        if(t[k].id==tid){

                                          t[k].id=tid;
                                          t[k].name=null;
                                          t[k].quantity=qty;

                                         not_exist=0;
                                          break;
                                        }
                                        else if(t[k].id==null)
                                        {
                                          t[k].id=tid;
                                          t[k].name=null;
                                          t[k].quantity=qty;
                                          break;    
                                        }
                                        else
                                          not_exist=1;
                                      }
                                      if(not_exist==1)
                                      {
                                           t.push({id:tid,name:null,quantity:qty});
                                      }
                                 }else{
                                      t.push({id:tid,name:null,quantity:qty});
                                 }
                           }
                      }
                  }
            }   
      }
  },
  removeAppType:function(app_id,service_id,tid)
  {
      var i=0;
      var not_exist=0;
      var a=this.customer_detail.booking_detail.location.app_detail;
      var s;
      var t;
      var j=0,k=0;
      for(i=0;i<a.length;i++)
      {
          if(a[i].id==app_id)
            {
                 s=a[i].app_services;
                  if(s.length>0){
                      for(j=0;j<s.length;j++)
                        {
                          if(s[j].id==service_id)
                              {
                          
                                t=a[i].app_services[j].app_type;
                               
                                 if(t.length>0)
                                 {
                                      for(k=0;k<t.length;k++)
                                      {
                                        if(t[k].id==tid){
                                          t.splice(k,1);
                                          }
                                      }
                                  }
                              }
                          }
                  }
            }
      }    
  },
  addAppytype:function(app_id,service_id,type_id,type_name,qty)
  {

      var i=0;
      var not_exist=0;
      var a=this.customer_detail.booking_detail.location.app_detail;
      var s=null;
      var match="";
      var t=null;
      var k=0;
      var j=0;
      for(i=0;i<a.length;i++)
      {
          if(a[i].id==app_id)
            {
                   s=a[i].app_services;
                  if(s.length>0)
                  {
                    for(j=0;j<s.length;j++)
                      {
                          if(s[j].id==service_id)
                           {
                              
                                 t=a[i].app_services[j].app_type;
                                 if(t.length>0)
                                 {
                                      for(k=0;k<t.length;k++)
                                      {
                                        if(t[k].id==type_id){
                                         not_exist=0;
                                          break;
                                        }
                                        else if(t[k].id==null)
                                        {
                                          t[k].id=type_id;
                                          t[k].name=type_name;
                                          t[k].quantity=qty;
                                          break;    
                                        }
                                        else
                                          not_exist=1;
                                      }
                                      if(not_exist==1)
                                      {
                                           t.push({id:type_id,name:type_name,quantity:qty});
                                      }
                                 }else{
                                      t.push({id:type_id,name:type_name,quantity:qty});
                                 }
                           }
                      }
                  }
            }
      }
  }

};
function updateURL(loc=null) {

      if (history.pushState) {
          var newurl = window.location.protocol + "//" + window.location.host + window.location.pathname;
            window.history.pushState(newurl,null,loc);
      }
      
       
      $("#navbar ul.dropdown li.subs a").each(function( index ) {
            var existing_loc=$(this).attr("href").substring($(this).attr("href").lastIndexOf('/') + 1);
           newstr= $(this).attr("href").replace(existing_loc,loc);
           $(this).attr("href",newstr);
        });
        
}

(function($) {
          $(function() {

            $(document).on("change","#home_rb_area",function(){
                var current_location=$(this).val();
                  csrfName = gen_tkn_nm(),csrfHash = gen_tkn_hsh();
                $.ajax({
                    url:Settings.base_url+"Home/changelocation",
                    type: 'post',
                    data:{csrfName: csrfHash,current_aliaslocation:current_location},
                    beforeSend: function(){

                      $("body").css("opacity","0.5");
                        $('.rb-loader').show();

                    },
                    complete: function(){
                        $('.rb-loader').hide();
                        $("body").css("opacity","1");

                    },
                    success:function(data) {
                        $("#data-loading").hide();
                        $("#price-list-applaice-view").html(data);
                        var res=JSON.parse(data);

                        if(res.status)
                          {
                            updateURL(res.name); 
                            $(".rb_cuurent_loc").text(res.name);
                          }
                    },
                     error:function() {
                        $(".rb-loader").hide();
                     }
                 });
            });
            $(document).on("change","#home_rb_area_responsive",function(){
                var current_location=$(this).val();
                  csrfName = gen_tkn_nm(),csrfHash = gen_tkn_hsh();
                $.ajax({
                    url:Settings.base_url+"Home/changelocation",
                    type: 'post',
                    data:{csrfName: csrfHash,current_aliaslocation:current_location},
                    beforeSend: function(){

                      $("body").css("opacity","0.5");
                        $('.rb-loader').show();

                    },
                    complete: function(){
                        $('.rb-loader').hide();
                        $("body").css("opacity","1");

                    },
                    success:function(data) {
                        $("#data-loading").hide();
                        $("#price-list-applaice-view").html(data);
                        var res=JSON.parse(data);

                        if(res.status)
                          {
                            updateURL(res.name); 
                            $(".rb_cuurent_loc").text(res.name);
                          }
                    },
                     error:function() {
                        $(".rb-loader").hide();
                     }
                 });
            });
            
            $(document).on("click",".footer_area_rb",function(){

              var areaname=$(this).attr("data-area-id");

                //var current_location=$(this).val();

                  csrfName = gen_tkn_nm(),csrfHash = gen_tkn_hsh();
                    $.ajax({
                        url:Settings.base_url+"Home/changelocation",
                        type: 'post',
                        data:{csrfName: csrfHash,current_aliaslocation:areaname},
                        beforeSend: function(){

                          $("body").css("opacity","0.5");
                            $('.rb-loader').show();
    
                        },
                        complete: function(){
                            $('.rb-loader').hide();
                            $("body").css("opacity","1");
    
                        },
                        success:function(data) {
                            $("#data-loading").hide();
                            $("#price-list-applaice-view").html(data);
                            var res=JSON.parse(data);
    
                            if(res.status)
                              {
                                updateURL(res.name); 
                              }
                        },
                         error:function() {
                            $(".rb-loader").hide();
                         }
                    });
                });


   $(document).on("click",".rb-price-list-appliance",function(e){
         var app_id=$(this).attr("data-appliance-id");
             csrfName = gen_tkn_nm(),csrfHash = gen_tkn_hsh();

            $.ajax({
                  url:Settings.base_url+"Home/PriceListOfApplianceById",
                  type: 'post',
                  data:{[csrfName]: csrfHash,appliance_id:app_id},
                  beforeSend:function(){
                      $("#data-loading").show();
                  },
                  success:function(data) {
                      $("#data-loading").hide();
                      $("#price-list-applaice-view").html(data);
                  },
                   error:function() {
                      $("#data-loading").hide();
                      $("#price-list-applaice-view").html('No data Available ');
                   }
             });

        e.preventDefault();
   });
      
//  $("form#rb_form_home_search").submit(function(e){

  $("#rb_app_name").change(function(e){
    e.preventDefault();
    var formdata1=$("form.rb_form_home_search_gen").serialize();
    csrfName = gen_tkn_nm(),csrfHash = gen_tkn_hsh();
    $.ajax({
            url: Settings.base_url+'Home/rb_ajax_home_search',
            type: 'POST',
            data: {
                 [csrfName]: csrfHash,rb_home_search_data: formdata1
            },
            dataType: 'json',
            beforeSend: function(){

                      $("body").css("opacity","0.5");
                        $('.rb-loader').show();

                    },
                    complete: function(){
                        $('.rb-loader').hide();
                        $("body").css("opacity","1");

                    },
            success: function(response_data) {
                
                if(!response_data.is_error)
                  { 
                        
                        active_app_id=response_data.success.data.app.app_id;
                        app_img=response_data.success.data.app.image;
                        booking_request.addLocation(response_data.success.data.location.id,response_data.success.data.location.name);
                        booking_request.addAppliance(response_data.success.data.app.app_id,response_data.success.data.app.app_name);
                       model_init();
                       $('#demo-modal-1').modal({
                            backdrop: 'static',
                            keyboard: false
                       });
                        $("#rb_homepage_model_popup .modal-body").eq(0).css("display","block");
                         $("#rb_homepage_model_popup .modal-footer").find("button").eq(0).css("display","block");
                  }else{
                          alert('Please Select location and Service');
                  }
            },
            error:function() {
                        $(".rb-loader").hide();
                     }
        });
  });
  
  // responsive
  $("#rb_app_name_responsive").change(function(e){
    e.preventDefault();
    var formdata1=$("form.rb_form_home_search_res").serialize();
    csrfName = gen_tkn_nm(),csrfHash = gen_tkn_hsh();
    $.ajax({
            url: Settings.base_url+'Home/rb_ajax_home_search',
            type: 'POST',
            data: {
                 [csrfName]: csrfHash,rb_home_search_data: formdata1
            },
            dataType: 'json',
            beforeSend: function(){

                      $("body").css("opacity","0.5");
                        $('.rb-loader').show();

                    },
                    complete: function(){
                        $('.rb-loader').hide();
                        $("body").css("opacity","1");

                    },
            success: function(response_data) {
                
                if(!response_data.is_error)
                  { 
                        
                        active_app_id=response_data.success.data.app.app_id;
                        app_img=response_data.success.data.app.image;
                        booking_request.addLocation(response_data.success.data.location.id,response_data.success.data.location.name);
                        booking_request.addAppliance(response_data.success.data.app.app_id,response_data.success.data.app.app_name);
                       model_init();
                       $('#demo-modal-1').modal({
                            backdrop: 'static',
                            keyboard: false
                       });
                        $("#rb_homepage_model_popup .modal-body").eq(0).css("display","block");
                         $("#rb_homepage_model_popup .modal-footer").find("button").eq(0).css("display","block");
                  }else{
                          alert('Please Select location and Service');
                  }
            },
            error:function() {
                        $(".rb-loader").hide();
                     }
        });
  });
  

  $("#service_page_specifc_button_for_rb_bkg").click(function(e){

    e.preventDefault();
    var rb_area=false,rb_app_name=false;

      if($("#service_page_loc_name").val()!="no")
      {
         rb_area=$("#service_page_loc_name").val();  
      }

      if($("#service_page_app_name").val()!="no")
      {
         rb_app_name=$("#service_page_app_name").val();  
      }
      
       
    csrfName = gen_tkn_nm(),csrfHash = gen_tkn_hsh();          

if(rb_app_name)
{    
    $.ajax({
            url: Settings.base_url+'Home/rb_ajax_home_search',
            type: 'POST',
            data: {
                 [csrfName]: csrfHash,rb_home_search_data:'service_page',rb_area_code:rb_area,rb_app_id:rb_app_name
            },
            dataType: 'json',
            beforeSend: function(){

                      $("body").css("opacity","0.5");
                        $('.rb-loader').show();

                    },
                    complete: function(){
                        $('.rb-loader').hide();
                        $("body").css("opacity","1");

                    },
            success: function(response_data) {
                
                if(!response_data.is_error)
                  { 
                        active_app_id=response_data.success.data.app.app_id;
                        app_img=response_data.success.data.app.image;
                        booking_request.addLocation(response_data.success.data.location.id,response_data.success.data.location.name);
                        booking_request.addAppliance(response_data.success.data.app.app_id,response_data.success.data.app.app_name);
                       model_init();
                       $('#demo-modal-1').modal({
                            backdrop: 'static',
                            keyboard: false
                       });
                        $("#rb_homepage_model_popup .modal-body").eq(0).css("display","block");
                         $("#rb_homepage_model_popup .modal-footer").find("button").eq(0).css("display","block");
                  }else{
                          alert('Please Select location and Service');
                  }
            },
            error:function() {
                        $(".rb-loader").hide();
                     }
        });
  }
  
  });
      
$('#demo-modal-1 .modal-footer a.close').on('click', function (event) {
  
  $(".modal-backdrop .in").hide();
  location.href=Settings.base_url;
 // $('#demo-modal-1').modal('dispose');
  $("#rb_homepage_model_popup .modal-body").css("display","none");
  $("#rb_homepage_model_popup .modal-footer").find("button").css("display","none");
  
});
          //  $('#picker-no-time').dateTimePicker({ showTime: false, dateFormat: 'DD/MM/YYYY'});
         
          $("#demo-modal-1 .modal-footer button.step").on("click",function(e){
                  e.preventDefault();
                  var step_no=$(this).attr("data-step");

                  c=check_step(step_no);
                    if(c==false)
                    {
                       return false;
                    } 
                    csrfName = gen_tkn_nm(),csrfHash = gen_tkn_hsh();

                  $.ajax({
                      type: "POST",
                      url: Settings.base_url+"Enquiry/Bysteps",
                      data:{[csrfName]: csrfHash,'request_step':step_no,'new_data':booking_request.customer_detail,act_sid:active_service_id},
                      beforeSend: function(){

                      $("body").css("opacity","0.5");
                        $('.rb-loader').show();

                    },
                    complete: function(){
                        $('.rb-loader').hide();
                        $("body").css("opacity","1");

                    },
                      success: function(data){

                           $("#demo-modal-1 .modal-content >div.step-"+step_no).html(data);    
                        
                                   if(step_no==5){
                                    
                                            var startdate=new Date();
                                            var startdt=getCurrentDate(startdate);

                                            var enddate = new Date();
                                            enddate.setDate(enddate.getDate() + 10); 
                                            var enddt=getCurrentDate(enddate);

                                            $(document).on("click",".book_btn",function(e){

                                               booking_time=$(this).html();

                                                checkdateselected++;

                                                $(".book_btn").css("background","black");
                                                $(this).css("background","green");
                                                if(checkdateselected==2)
                                                $("button.step-5").removeAttr("disabled");

                                            });
                                         	
                            }
                      },
                    error:function() {
                        $(".rb-loader").hide();
                     }

                  });              
          });

          $(document).on("click",".rb_home_request_app_services_",function(e){

            e.preventDefault();
            
            var k=$(this).attr("data-key");
            var app_serice_dtl_id=$("#rb_app_services_dtl_"+k).val();
            var app_service_id=$("#rb_app_services_"+k).val();
              
              if($("#rb_app_services_dtl_"+k).attr("data-checked")==1)
              {
                  $("#rb_app_services_dtl_"+k).attr("data-checked",0);
                  $("#rb_app_services_dtl_"+k).removeAttr("checked");

              }else{
                  $("#rb_app_services_dtl_"+k).attr("data-checked",1);
                  $("#rb_app_services_dtl_"+k).attr("checked",true);
              }
              if($("#rb_app_services_dtl_"+k).attr("checked")=="checked" || $("#rb_app_services_dtl_"+k).attr("checked")==true)
              {
                  $(this).find(".fa-arrow-circle-o-right").css({color:"blue"});
                  active_service_id=app_serice_dtl_id;
                  $('p[class^=active_service_').html("");
                  $(".active_service_"+k).html("<i style='color:green;font-size:28px;'>&#10004</i>");
                  booking_request.addService(active_app_id,app_serice_dtl_id,app_service_id,null);
                  $("button.step-2").removeAttr("disabled");
                  
                    $("button.step-2").click();
                    
                  
              }else{
                    active_service_id=app_serice_dtl_id;
                    $(this).find(".fa-arrow-circle-o-right").css({color:"#535353"});
                    booking_request.removeappService(active_app_id,active_service_id);
                    $(".active_service_"+k).html("");
                    $("button.step-2").attr("disabled",true);
              }

                request_to_apply.app_services.app_service_id=app_service_id;
                request_to_apply.app_services.app_detail_id=app_serice_dtl_id;
          
          });
          $(document).on("input","#person_name,#person_address,#person_locality",function(e){

              e.preventDefault();
              var regex = new RegExp("^[a-zA-Z ]*$");
              var regex1 = new RegExp("^[a-zA-Z0-9/ ,]*$");
                  
              var person_name=$("#person_name").val();
              var person_address=$("#person_address").val();
              var person_locality=$("#person_locality").val();
              if(person_name.length>0)
              {
                    var str =person_name;
                    if (regex.test(str)) {
                          
                            if(person_address.length>0 && person_address!="" && person_address.trim()!="" &&regex1.test(person_address))
                            {
                                if(person_locality.length>0 && person_locality!="" && person_locality.trim()!="" &&regex1.test(person_locality)){
                                  $("button.step-7").removeAttr("disabled");
                                    request_to_apply.address=person_address;
                                    request_to_apply.user_name=person_name;
                                    request_to_apply.locality=person_locality;
                                    request_to_apply.loc_tag=$("input[name=loc_tag]").val();
                                    tag=$("input[name=loc_tag]").val();
                                    booking_request.addCustomer_Detail(person_name,person_address,person_locality,tag);
                                }
                            }
                     }
              }else{
                      $("button.step-7").attr("disabled",true);
              }
          });

          $(document).on("input","#user_mobile_no",function(){

                var mobile=$(this).val();
                var regex2 = new RegExp("^[0-9]*$");
                
                if(mobile.length==10  && regex2.test(mobile) && mobile.charAt(0)>5)
                {
                       $("button.step-8").removeAttr("disabled");
                      // request_to_apply.mobile=mobile;
                       booking_request.customer_detail.mobile=mobile;

                }else{
                        $("button.step-8").attr("disabled",true);
                }
          });

           $(document).on("click","#mob_confirm",function(e){

            if($(this).is(":checked"))
            {
                var mobile=$("#user_mobile_no").val();
                var regex2 = new RegExp("^[0-9]*$");
                
                if(mobile.length==10  && regex2.test(mobile) && mobile.charAt(0)>5)
                {
                       $("button.step-8").removeAttr("disabled");
                      // request_to_apply.mobile=mobile;
                       booking_request.customer_detail.mobile=mobile;

                }else{
                        $("button.step-8").attr("disabled",true);
                }

            }else{
                  $("button.step-8").attr("disabled",true);
            }
              
          });


           $(document).on("click",".otp_resent_button_rb",function(){ 

               $.ajax({
                        type: "POST",
                        url: Settings.base_url+"event/resentOtp",
                        data:{mobile:booking_request.customer_detail.mobile},
                        success:function(data)
                        {
                          var res=JSON.parse(data);
                           if(res.status=="success")
                              $(".otp_msg").html("OTP Sent");
                          else
                              $(".otp_msg").html("OTP not Sent");
                        }

                      });
           });
          $(document).on("click","#rb_booking_confirm_btn",function(e){
              e.preventDefault()
          });

          $(document).on("input","#rb_request_otp_no",function(){


              var otp=$(this).val();
                var regex4 = new RegExp("^[0-9]*$");
              
              if(otp!=null && otp.trim()!="" && otp.length==6 && regex4.test(otp))
              {
                               csrfName = '<?php echo $this->security->get_csrf_token_name(); ?>',
                                csrfHash = '<?php echo $this->security->get_csrf_hash(); ?>';
   
                    $.ajax({
                            type: "POST",
                            url: Settings.base_url+"event/verifyOtp",
                          data:{[csrfName]: csrfHash,'data':otp},
                            success:function(data)
                            {
                                var res=JSON.parse(data);
                                if(res.status=="verified")
                                {
                                    $("#rb_request_login").removeClass("btn-primary").addClass("btn-success");
                                    $("#rb_booking_confirm_btn").removeClass("btn-primary").addClass("btn-success");
                                    $("#rb_booking_confirm_btn").html("Booking Confirmed");
                                     $("#last_step").html("<h2 align='center' class='success'>Booking Confirmed</h2>");
                                              

                                              setTimeout(function(){
                                                $("#last_step").html("<h2 align='center' class='success'>Booking Confirmed</h2>");
                                                },3000);

                                                setTimeout(function(){
                                                    location.href=Settings.base_url+"Redirect/customerProfile";
                                                   
                                                },3000);
                                }else{
                                     $(".otp_msg").html(res.status);
                                }
                            }
                          });
                    }
          });

          $(document).on("click",".resend_OTPTIME,#rb_request_login",function(e){
              e.preventDefault();
              e.stopImmediatePropagation();
          });
    });
  })(jQuery);
  

function model_init() {

   $("#demo-modal-1 .modal-header div#modal-header-headings_title h5").eq(0).html(booking_request.getCurrentAppName()+" Appliaces And Services");
   $("#demo-modal-1 .modal-body.step-1").html("");
  $("#demo-modal-1 .modal-body.step-1").append("<div class='row'><div class='col-md-4'></div><div class='col-md-4'><img src='"+Settings.base_url+"uploads/appliances/photo/"+app_img+"' class='rb_home_img_pop' /></div></div>");   
   $("#demo-modal-1 .modal-body.step-1").append("<h4 align='center' class='rb_model_step1_head'>"+booking_request.getCurrentAppName()+" Repair and Services</h4>");

}

function increaseValue(k) {
  var value = parseInt($(".number_item_for_select_"+k).val(), 10);
  value = isNaN(value) ? 0 : value;
  value++;
  if(value>0)
  {
    $(".rb_home_enquiry_app_type[data-item="+k+"]").attr("checked",true);
    $(".number_item_for_select_"+k).val(value);
    $("button.step-3").removeAttr("disabled");

    var tid=$(".rb_home_enquiry_app_type[data-item="+k+"]").attr("data-item-type");
        var quantity_value=$(".number_item_for_select_"+k).val();
        
        booking_request.UpdateAppTypeDetail(active_app_id,active_service_id,tid,quantity_value);

  }else{

      $("button.step-3").attr("disabled",true);
      $(".rb_home_enquiry_app_type[data-item="+k+"]").removeAttr("checked");
  }
}

function decreaseValue(k) {

  var value = parseInt($(".number_item_for_select_"+k).val(), 10);
  value = isNaN(value) ? 0 : value;
  value--;
  value < 0 ? value = 0 : '';

  if(value>0)
  {
      $("button.step-3").removeAttr("disabled"); 
      $(".rb_home_enquiry_app_type[data-item="+k+"]").attr("checked",true);
      $(".number_item_for_select_"+k).val(value);

        var tid=$(".rb_home_enquiry_app_type[data-item="+k+"]").attr("data-item-type");
        var quantity_value=$(".number_item_for_select_"+k).val();

        booking_request.UpdateAppTypeDetail(active_app_id,active_service_id,tid,quantity_value);
        
  }else{

        $("button.step-3").attr("disabled",true);
        $(".rb_home_enquiry_app_type[data-item="+k+"]").removeAttr("checked");
        $(".number_item_for_select_"+k).val(value);


        var tid=$(".rb_home_enquiry_app_type[data-item="+k+"]").attr("data-item-type");
        var quantity_value=$(".number_item_for_select_"+k).val();
        booking_request.removeAppType(active_app_id,active_service_id,tid);   
  }
}
function check_step(step_no) {

    if(step_no==2)
    {
        $("button.step-2").attr("disabled",true);
    }
    else if(step_no==4)
    {
       request_to_apply.app_type=[];

      $('.rb_home_enquiry_app_type[type=checkbox]').each(function () {
           if (this.checked) {
              var key=$(this).attr("data-item");
              var tid=$(this).attr("data-item-type");
              var quantity_value=$(".number_item_for_select_"+key).val();

                booking_request.addAppytype(active_app_id,active_service_id,tid,null,quantity_value);
           }
      });
    $("button.step-5").attr("disabled",true);

   }else if(step_no==6)
   {
     
   }else if(step_no==7)
   {
      var datetime=setbookdate;

      if(datetime=="" )
      {
         $("button.step-5").attr("disabled",true);
         return false;
      }else{
         $("button.step-5").removeAttr("disabled");
           var bdate=datetime;

         booking_request.addBookingDetail(setbookdate,booking_time);
      }
               $("button.step-7").attr("disabled",true);

   }else if(step_no==8)
   {
          $("button.step-8").attr("disabled",true);

   }else if(step_no==9)
   {
              $("button.step-9").attr("disabled",true);
   }

}

// price-list
