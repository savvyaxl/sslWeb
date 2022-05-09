<!-- Veriables Start -->
var types = {
	"0" : {"name" : "types"},
	"1" : {"type" : "radio", "name" : "action_type", "div" : "div_action_type", "create" : "div_action_create"},
	"2" : {"type" : "radio", "name" : "server_type", "div" : "div_server_type", "create" : "div_server_create"},
	"4" : {"type" : "radio", "name" : "enviro_type", "div" : "div_enviro_type", "create" : "div_enviro_create"},
	"5" : {"type" : "checkbox", "name" : "encryp_type", "div" : "div_encryp_type", "create" : "div_encryp_create"},
	"6" : {"type" : "radio", "name" : "region_type", "div" : "div_region_type", "create" : "div_region_create"},
	"7" : {"type" : "radio", "name" : "countr_type", "div" : "div_countr_type", "create" : "div_countr_create"},
//	"8" : {"type" : "checkbox", "name" : "deleca_type", "div" : "div_deleca_type", "create" : "div_deleca_create"},
	"9" : {"type" : "checkbox", "name" : "stashe_type", "div" : "div_stashe_type", "create" : "div_stashe_create"},
	"10" : {"type" : "radio", "name" : "quotee_type", "div" : "div_quotee_type", "create" : "div_quotee_create"},
	"11" : {"type" : "checkbox", "name" : "digest_type", "div" : "div_digest_type", "create" : "div_digest_create"}
};
var action_type = {
	"0" : { "name" : "action_type"},
	"1" : { "value" : "NewRequest", "desc" : "Create a New Request&nbsp;", "other" : "checked=checked"},
	"2" : { "value" : "NewReceive", "desc" : "Recieve a Signed Certificate&nbsp;"},
	"3" : { "value" : "RenewRequest", "desc" : "Renew Request&nbsp;"},
	"4" : { "value" : "RenewReceive", "desc" : "Receive Renewal&nbsp;"},
	"5" : { "value" : "p12", "desc" : "Extract/Import p12&nbsp;"},
	"6" : { "value" : "sign", "desc" : "Sign your own&nbsp;"}
};
var server_type = {
	"0" : { "name" : "server_type"},
	"1" : { "value" : "MQQ", "desc" : "Queue Manager Cert&nbsp;"},
	"2" : { "value" : "MQC", "desc" : "MQ Client Cert&nbsp;"},
	"3" : { "value" : "IHS", "desc" : "IHS CA Cert&nbsp;", "other" : "checked=checked"}
};
var digest_type = {
	"0" : { "name" : "digest_type"},
	"1" : { "value" : "SHA256WithRSA", "desc" : "SHA-2 signing request.&nbsp;", "other" : "checked=checked"}
};
var enviro_type = {
	"0" : { "name" : "enviro_type"},
	"1" : { "value" : "PROD", "desc" : "Production&nbsp;", "other" : "checked=checked"},
	"2" : { "value" : "DEV", "desc" : "Development&nbsp;"},
	"3" : { "value" : "TEST", "desc" : "Testing&nbsp;", "other" : "disabled"},
	"4" : { "value" : "SIT", "desc" : "System Integration Testing&nbsp;"},
	"5" : { "value" : "UAT", "desc" : "User Acceptance Testing&nbsp;"},
	"7" : { "value" : "OAT", "desc" : "Operational Acceptance Testing&nbsp;"},
	"8" : { "value" : "CONT", "desc" : "Contingency / DR&nbsp;", "other" : "disabled"}
}
var encryp_type = {
	"0" : { "name" : "encryp_type"},
	"1" : { "value" : "AUTH", "desc" : "Authorize&nbsp;"},
	"2" : { "value" : "ENC", "desc" : "Encrypt&nbsp;"},
	"3" : { "value" : "INT", "desc" : "International&nbsp;"},
	"4" : { "value" : "NFS&nbsp;SECURE&nbsp;SERVER", "desc" : "NFS&nbsp;International&nbsp;", "other" : "checked=checked"}
}
var region_type = {
	"0" : { "name" : "region_type", "alsoupdate" : "countr_type"},
	"1" : { "value" : "EU", "desc" : "Europian Union&nbsp;", "other" : "checked=checked"},
	"2" : { "value" : "NA", "desc" : "North America&nbsp;"},
	"3" : { "value" : "CA", "desc" : "Central America&nbsp;"},
	"4" : { "value" : "SA", "desc" : "South America&nbsp;"},
	"5" : { "value" : "AP", "desc" : "Asia Pacific&nbsp;"}
}
var countr_type = {
	"0" : { "name" : "countr_type"},
	"1" : { "region" : "EU", "value" : "GB", "desc" : "Grand Britain&nbsp;"},
	"2" : { "region" : "EU", "value" : "FR", "desc" : "France&nbsp;"},
	"3" : { "region" : "SA", "value" : "BR", "desc" : "Brazil&nbsp;", "other" : "checked=checked"},
	"4" : { "region" : "NA", "value" : "MX", "desc" : "Mexico&nbsp;"},
	"5" : { "region" : "AP", "value" : "HK", "desc" : "Hong Kong&nbsp;", "other" : "checked=checked"},
	"6" : { "region" : "NA", "value" : "US", "state" : "New York", "local" : "New York", "desc" : "New York&nbsp;", "other" : "checked=checked"},
	"7" : { "region" : "NA", "value" : "CA", "desc" : "Canada&nbsp;"},
	"8" : { "region" : "EU", "value" : "LX", "state" : "Luxembourg", "local" : "Luxembourg City", "desc" : "Luxenburg&nbsp;", "other" : "checked=checked"},
	"9" : { "region" : "CA", "value" : "KY", "state" : "Grand Cayman", "local" : "George Town", "desc" : "Cayman&nbsp;", "other" : "checked=checked"}
}
var deleca_type = {
	"0" : { "name" : "deleca_type"},
	"1" : { "value" : "N/A", "desc" : "Show Delete CAs&nbsp;"}
}
var stashe_type = {
	"0" : { "name" : "stashe_type"},
	"1" : { "value" : "yes", "desc" : "Use -stashed ( gsk7capicmd or greater only )&nbsp;", "other" : "checked=checked"}
}
var quotee_type = {
	"0" : { "name" : "quotee_type"},
	"1" : { "name" : "single", "value" : "&#39;", "desc" : "For Linux and Power Shell: Single quote ( &#39; )&nbsp;", "other" : "checked=checked"},
	"2" : { "name" : '"', "value" : "&#34;", "desc" : "For Windows Command Prompt: Double quote ( &#34; )&nbsp;"}
}
var input_type = {
	"0" : { "name" : "input_type", "create" : "div_input_create"},
	"1" : { "value" : "gsk8capicmd", "desc" : "The gsk command can be: gsk7capicmd | gsk7capicmd_64 | runmqckm | Linux: JAVA_HOME=/opt/mqm/ssl/jre gsk7cmd | SunOs: JAVA_HOME=/opt/mqm/ssl gsk7cmd | AIX: JAVA_HOME=/opt/mqm/java/jre gsk7cmd&nbsp;"
	,  "onkeyup" : "updateAll();", "id" : "gsk"},
	"2" : { "value" : "QMGRORAPP", "desc" : "kdb_name&nbsp;"
	,  "onkeyup" : "updateAll();", "id" : "kdb_name"},
	"3" : { "value" : "huRH68D", "desc" : "kdb_pass&nbsp;"
	,  "onkeyup" : "updateAll();", "id" : "kdb_pass"},
	"4" : { "value" : "2048", "desc" : "cert_size&nbsp;"
	,  "onkeyup" : "updateAll();", "id" : "cert_size"}
}
var client_type = {
	"0" : { "name" : "input_type", "create" : "div_client_create"},
	"1" : { "value" : "hgtfy6575", "desc" : "MQ Client Host&nbsp;",  "onkeyup" : "updateAll();", "id" : "client_host"},
	"2" : { "value" : "fred", "desc" : "MQ Client User&nbsp;",  "onkeyup" : "updateAll();", "id" : "client_user"}
}
var ihs_type = {
	"0" : { "name" : "input_type", "create" : "div_ihs_create"},
	"1" : { "value" : "APP", "desc" : "For The CN&nbsp;",  "onkeyup" : "updateAll();", "id" : "client_host"},
	"2" : { "value" : "APP", "desc" : "For the Lable&nbsp;",  "onkeyup" : "updateAll();", "id" : "ihs_lable"},
	"3" : { "value" : "NFS Secure Server", "desc" : "OU&nbsp;",  "onkeyup" : "updateAll();", "id" : "ihs_ou"},
	"4" : { "value" : "NFS", "desc" : "O&nbsp;",  "onkeyup" : "updateAll();", "id" : "ihs_o"},
	"5" : { "value" : "Secure Server", "desc" : "L&nbsp;",  "onkeyup" : "updateAll();", "id" : "ihs_l"}
}
var winpath_type = {
	"0" : { "name" : "winpath_type"},
	"1" : "C:\\Program Files (x86)\\IBM\WebSphere MQ\\gskit8",
	"2" : ["\\bin","\\lib"]
}
<!-- Veriables End -->

