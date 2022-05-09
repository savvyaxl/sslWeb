function createInputDivs ()
{
	document.write("<div id='"+input_type[0].create+"' >&nbsp;</div>");
	var text = "";
	for ( var input in input_type )
	{
		if ( input == 0 ) continue;
		text += "<input type=\"text\" id=\""+input_type[input].id+"\" onkeyup=\""+input_type[input].onkeyup+"\" value=\""+input_type[input].value+"\">"+input_type[input].desc;
		text += "<BR />";
	}
	document.getElementById(input_type[0].create).innerHTML = text;
}
function createClientDivs ()
{
	document.write("<div id='"+client_type[0].create+"' >&nbsp;</div>");
	var text = "";
	for ( var i in client_type )
	{
		if ( i == 0 ) continue;
		text += client_type[i].desc+"<input type=\"text\" id=\""+client_type[i].id+"\" onkeyup=\""+client_type[i].onkeyup+"\" value=\""+client_type[i].value+"\">";
		text += "<BR />";
	}
	document.getElementById(client_type[0].create).innerHTML = text;
}

function createExtraDivs (this_type)
{
	document.write("<div id='"+this_type[0].create+"' >&nbsp;</div>");
	var text = "";
	for ( var i in this_type )
	{
		if ( i == 0 ) continue;
		text += this_type[i].desc+"<input type=\"text\" id=\""+this_type[i].id+"\" onkeyup=\""+this_type[i].onkeyup+"\" value=\""+this_type[i].value+"\">";
		text += "<BR />";
	}
	document.getElementById(this_type[0].create).innerHTML = text;
}

function createDivs ()
{
	for ( var type in types )
	{
		if ( type == 0 ) continue;
		document.write("<div id='"+types[type].create+"' >&nbsp;</div>");
		document.getElementById(types[type].create).innerHTML = create(types[type].type, eval(types[type].name));
	}
}

function create (type, variable)
{
	var text = "";
	var tmp = "";
	var name =  variable[0].name;
	var alsoupdate =  "";
	if ( typeof variable[0].alsoupdate !== 'undefined' )
	{
		alsoupdate = "update('"+type+"', 'div_"+variable[0].alsoupdate+"', '"+variable[0].alsoupdate+"');";
	}
	for (var v in variable){
		if ( v == 0 ) continue;
		if ( name == "countr_type" && variable[v].region != getSelected ("radio", "region_type") ) continue;
		var isChecked = "";
		if ( typeof variable[v].other !== 'undefined' )
		{
			isChecked = variable[v].other;
		}
		text += "<input onClick=\"update('"+type+"', 'div_"+name+"', '"+name+"');"+alsoupdate+"\" type=\""+type+"\" name='"+name+"' value="+variable[v].value+" "+isChecked+">" + variable[v].desc;
	}
	return text;
}
function theCountryInTheRegion(region_in, countr_in) // returns country
{
	for (var countr in countr_type)
	{
		if ( countr_type[countr].value != countr_in ) continue;
		if ( countr_type[countr].region == region_in )
		{
			return countr_in;
		}
	}
	return ""; // returns the country if found
}
function updateCountr (region_in, countr_in)
{
	var text = "";
	for (var countr in countr_type)
	{
		if ( countr_type[countr].region != region_in ) continue;
		var isChecked = "";
		if ( countr_type[countr].value == countr_in && theCountryInTheRegion(region_in, countr_in) == countr_in )
		{
			isChecked = "checked=checked";
		} else 
		{
			if ( typeof countr_type[countr].other !== 'undefined' )
			{
				isChecked = countr_type[countr].other;
			}
		}
		text += "<input onClick=\"update ('radio','div_countr_type', 'countr_type');\" type=\"radio\" name=\"countr_type\" value="+countr_type[countr].value+" "+isChecked+">" + countr_type[countr].desc;
	}
	return text;
}

function to_hide ()
{
	if ( getSelected ('radio', "server_type") == server_type[2].value )
	{
		document.getElementById("div_client_create").style.visibility = 'visible';
		document.getElementById("div_client_create").style.display = ''; 
		document.getElementById("div_ihs_create").style.visibility = 'hidden';
		document.getElementById("div_ihs_create").style.display = 'none'; 
	} 
	else if (getSelected ('radio', "server_type") == server_type[1].value )
	{
		document.getElementById("div_client_create").style.visibility = 'hidden';
		document.getElementById("div_client_create").style.display = 'none';
		document.getElementById("div_ihs_create").style.visibility = 'hidden';
		document.getElementById("div_ihs_create").style.display = 'none'; 
	} 
	else if (getSelected ('radio', "server_type") == server_type[3].value )
	{
		document.getElementById("div_ihs_create").style.visibility = 'visible';
		document.getElementById("div_ihs_create").style.display = ''; 
		document.getElementById("div_client_create").style.visibility = 'hidden';
		document.getElementById("div_client_create").style.display = 'none';
	} 
	else
	{
		alert("error")
	}
}

function update (type, element, what)
{
	document.getElementById("div_countr_create").innerHTML = updateCountr(getSelected('radio',"region_type"),getSelected('radio',"countr_type"));
	to_hide ();
	writeScriptOut();
}
function updateAll ()
{
	to_hide ();
	writeScriptOut();
}
function getSelected (type, what)
{
	var radios = document.getElementsByTagName('input');
	var returnValue = '';
	for ( var i = 0; i < radios.length; i++ ) {
		if (radios[i].type === type && radios[i].name === what && radios[i].checked ) {
			if( type == 'radio' )
			{
				returnValue = radios[i].value;
			} else if ( type == 'checkbox')
			{
				returnValue += radios[i].value;
			} else
			{
				alert("error")
			}
		}
	}
	return returnValue;
}
