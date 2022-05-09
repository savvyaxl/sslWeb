function getQuote ()
{
	var text = getSelected("radio", "quotee_type");
	return text; 
}
function getDN ()
{
	var temp = checkClientforDN();
	var CN = 'CN=' + temp.toUpperCase() + ',';
	var OU = 'OU=' + getSelected ('checkbox', 'encryp_type') + ',';
	var O  = 'O='  + getSelected ('radio', 'region_type') + ',';
	var L  = 'L='  + getSelected ('radio', 'server_type') + getSelected ('radio', 'enviro_type') + ',';
	var C  = 'C='  + getSelected ('radio', 'countr_type');
	return ' -dn ' + getQuote() + CN + OU + O + L + C + getQuote() + ' ';	
}
function getDB ()
{
	var text = getKdbName().toUpperCase() + ".kdb";
	text = ' -db ' + getQuote () + text + getQuote () + ' ';
	return text;
}
function getCaDB ()
{
	var text = "CA.kdb";
	text = ' -db ' + getQuote () + text + getQuote () + ' ';
	return text;
}
function getRootDN()
{
	return ' -dn ' + getQuote() + 'CN=RootCA' + getQuote() + ' ';	
} 
function getInterDN()
{
	return ' -dn ' + getQuote() + 'CN=InterCA' + getQuote() + ' ';	
}
function getSize ()
{
	var size = document.getElementById('cert_size').value;
	return ' -size ' + size + ' ';	
}
function getNewCSR()
{
	var text = ' -file ';
	return text + getQuote() + getKdbName() + '.csr' + getQuote() + ' ';
}
function getRecreateCSR()
{
	var text = ' -file ';
	return text + getQuote() + getKdbName() + '_renew.csr' + getQuote() + ' ';
}
function getInterCSR()
{
	var text = ' -file ';
	return text + getQuote() + 'inter.csr' + getQuote() + ' ';
}
function getRootCER()
{
	var text = ' -file ';
	return text + getQuote() + 'root.cer' + getQuote() + ' ';
}
function targetRootCER()
{
	var text = ' -target ';
	return text + getQuote() + 'root.cer' + getQuote() + ' ';
}
function targetNewCER()
{
	var text = ' -target ';
	return text + getQuote() + getKdbName() + '.cer' + getQuote() + ' ';
}
function getRootLabel()
{
	var text = ' -label ';
	return text + getQuote() + 'root' + getQuote() + ' ';
}
function getInterCER()
{
	var text = ' -file ';
	return text + getQuote() + 'inter.cer' + getQuote() + ' ';
}
function targetInterCER()
{
	var text = ' -target ';
	return text + getQuote() + 'inter.cer' + getQuote() + ' ';
}
function getInterLabel()
{
	var text = ' -label ';
	return text + getQuote() + 'inter' + getQuote() + ' ';
}
function getNewCER()
{
	var text = ' -file ';
	return text + getQuote() + getKdbName() + '.cer' + getQuote() + ' ';
}
function getRecreateCER()
{
	var text = ' -file ';
	return text + getQuote() + getKdbName() + '_renew.cer' + getQuote() + ' ';
}
function getP12()
{
	return getQuote() + 'MASTER.p12' + getQuote();
}
function getP12passwd()
{
	return getQuote() + 'p12Passwd' + getQuote();
}
function createKDB (create)
{
	var isStashed = (getSelected ('checkbox', 'stashe_type') == stashe_type[1].value)?' -stash':'';
	var text = getCommand() + " -keydb -create " + getDB() + getPWstring(create) + isStashed;
	return text;
}
function listCerts ()
{
	var text = getCommand() + " -cert -list all " + getDB() + getPWstring();
	return text;
}
function certRequest ()
{
	var text = getCommand() + " -certreq -create " + getDB() + getPWstring() + getLabel() + getDN () + getSize () + getNewCSR() + getSHA();
	return text;
}
function certRequestDetails ()
{
	var text = getCommand() + " -certreq -details " + getDB() + getPWstring() + getLabel();
	return text;
}
function certAddRoot ()
{
	var text = getCommand() + " -cert -add " + getDB() + getPWstring() + getRootCER() + getRootLabel();
	return text;
}
function certAddInter ()
{
	var text = getCommand() + " -cert -add " + getDB() + getPWstring() + getInterCER() + getInterLabel();
	return text;
}
function certReceive ()
{
	var text = getCommand() + " -cert -receive " + getDB() + getPWstring() + getNewCER();
	return text;
}
function certDetails ()
{
	var text = getCommand() + " -cert -details " + getDB() + getPWstring() + getLabel();
	return text;
}
function certRecreate ()
{
	var text = getCommand() + " -certreq -recreate " + getDB() + getPWstring() + getLabel() + getRecreateCSR() + getSHA();
	return text;
}
function certReceiveRenewal ()
{
	var text = getCommand() + " -cert -receive " + getDB() + getPWstring() + getRecreateCER();
	return text;
}
function certExportp12 ()
{
	var text = getCommand() + " -cert -export " + getDB() + getPWstring() + ' -type cms ' + ' -target_pw ' + getP12passwd() + ' -target_type pkcs12 ' + getLabel()
	+ ' -target ' + getP12();
	return text;
}
function certDelete ()
{
	var text = getCommand() + " -cert -delete " + getDB() + getPWstring() + getLabel();
	return text;
}
function certImportp12 ()
{
	var text = getCommand() + " -cert -import -db " + getP12() + ' -pw ' + getP12passwd() + getLabel() + ' -target ' + getDB() 
	+ target_pw() + ' -new_label '
	+ getQuote() + 'ibmwebspheremq' + getKdbName().toLowerCase() + getQuote();
	return text;
}
function certTrust ()
{
	var text = getCommand() + " -cert -modify " + getDB() + getPWstring() + getLabel() + ' -trust enable';
	return text;
}
function createRootCA ()
{
	var text = getCommand() + " -cert -create " + getCaDB() + getPWstring() + getRootLabel() + getRootDN() + " -size 2048 -ca true -expire 7000 " + getSHA();
	return text;
}
function createInterCA ()
{
	var text = getCommand() + " -certreq -create " + getCaDB() + getPWstring() + getInterLabel()  
	+ getInterDN() + " -size 2048 " + getInterCSR() + getSHA();
	return text;
}
function signInterCA ()
{
	var text = getCommand() + " -cert -sign " + getCaDB() + getPWstring() + getRootLabel() + getInterCSR() + targetInterCER() + " -ca true -format ascii -expire 3000 " + getSHA();
	return text;
}
function createCaKDB (create)
{
	var isStashed = (getSelected ('checkbox', 'stashe_type') == stashe_type[1].value)?' -stash':'';
	var text = getCommand() + " -keydb -create " + getCaDB() + getPWstring(create) + isStashed;
	return text;
}
function certReceiveInter ()
{
	var text = getCommand() + " -cert -receive " + getCaDB() + getPWstring() + getInterCER();
	return text;
}
function listCertsCa ()
{
	var text = getCommand() + " -cert -list all " + getCaDB() + getPWstring();
	return text;
}
function extractCa ()
{
	var text = getCommand() + " -cert -extract " + getCaDB() + getPWstring() + getRootLabel() + targetRootCER();
	return text;
}
function singCert ()
{
	var text = getCommand() + " -cert -sign " + getCaDB() + getPWstring() + getInterLabel() + getNewCSR() + targetNewCER() + getSHA();
	return text;
}
