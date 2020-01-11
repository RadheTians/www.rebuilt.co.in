var appl={};

// defininng app properties

appl.app_id=null;
appl.app_name=null;
appl.app_types=Array();
appl.app_services=Array();
appl.app_issues=Array();
appl.app_rates=Array();
// defining app methods
function init(app_name=null,app_id=null,app_issue=null,app_services=null,app_type=null) {

	appl.setApplianceName(app_name);
	appl.setApplianceId(app_id);
	appl.setAppTypes(app_type);
	appl.setAppIssues(app_issue);
	appl.setAppServices(app_services);

}

appl.setApplianceName=function(app_nm)
{
	this.app_name=app_nm;
}

appl.getApplianceName=function()
{
	return this.app_name;
}
appl.setApplianceId=function(app_id)
{
	this.name=app_id;
}

appl.getApplianceId=function()
{
	return this.app_id;
}
appl.setAppTypes=function(app_data=Array())
{
	var i=0;
		for(;i<app_data.length;i++)
		{
				this.app_types[i]={
					id:null,
					nmae:null
				};

				this.app_types[i].id=app_data[i].type_id;
				this.app_types[i].name=app_data[i].type_name;
		}
}
appl.getAppTypes=function()
{
	return this.app_types;
}

appl.setAppIssues=function(app_data=Array())
{
	var i=0;
		for(;i<app_data.length;i++)
		{
			this.app_issues[i]={
					id:null,
					nmae:null
				};
				
				this.app_issues[i].id=app_data[i].issue_id;
				this.app_issues[i].name=app_data[i].issue_name;
		}
}
appl.getAppIssues=function()
{
	return this.app_issues;
}

appl.setAppServices=function(app_data=Array())
{
	var i=0;
		for(;i<app_data.length;i++)
		{
			this.app_services[i]={
					id:null,
					nmae:null
				};
				this.app_services[i].id=app_data[i].service_id;
				this.app_services[i].name=app_data[i].serv_name;
		}
}

appl.getAppServices=function()
{
	return this.app_services;
}
