<!-- Read Inputs Start -->
function getRemChar ()
{
	var c = "# ";
	if (getSelected ('radio', 'quotee_type') == quotee_type[2].name) // Windows
	{
		c = 'rem ';
	}
	return c; 
}
function getScriptExt ()
{
	var c = ".sh";
	if (getSelected ('radio', 'quotee_type') == quotee_type[2].name) // Windows
	{
		c = '.bat';
	}
	return c; 
}
function getSHA()
{
	if ( getSelected("checkbox", "digest_type") == digest_type[1].value)
	{
		return "-sig_alg SHA256WithRSA";
	}
	return '';
}
function getKdbName ()
{
	return document.getElementById(input_type[2].id).value;
}
function getPWstring (create)
{
	var text = '';
	if (getSelected ('checkbox', 'stashe_type') == stashe_type[1].value && create != 1 )
	{
		text = " -stashed ";
	} else
	{
		text = " -pw " + getQuote() + document.getElementById(input_type[3].id).value + getQuote() + ' ';
	}
	return text;
}
function getCommand()
{
	return document.getElementById('gsk').value;
}
function getUser()
{
	return document.getElementById(client_type[2].id).value.toLowerCase();
}
function getHost()
{
	return document.getElementById(client_type[1].id).value.toLowerCase();
}
function getPath()
{
	var text = '';
	if (getSelected ('radio', 'quotee_type') == quotee_type[2].name)
	{
		for (var path in winpath_type[2])
		{
			text += winpath_type[1] + winpath_type[2][path] + ';';
		}
	}
	return (text == "" )? "" : 'set PATH=' + text + '%PATH%';
}
function getLabel ()
{
	// need to check if this a client setup, then the user needs to be in the label.
	var temp = getKdbName().toLowerCase();
	if ( getSelected ('radio', "server_type") == server_type[2].value ) //Cleint
	{
		temp = getUser();
	}
	var text = 'ibmwebspheremq';
	return ' -label ' + getQuote() + text + temp + getQuote() + ' ';
}
function checkClientforDN()
{
	var text = getKdbName();
	if ( getSelected ('radio', "server_type") == server_type[2].value ) //Cleint
	{
		text = text + '-' + getHost();
	}
	return text;
}
function target_pw()
{
	return ' -target_pw ' + getQuote() + document.getElementById(input_type[3].id).value + getQuote();
}

<!-- Read Inputs End -->
