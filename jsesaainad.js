
// commande REGULATEUR 
function n_reg() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "on", true);
    xhttp.send();
}

function n_relais() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "off", true);
    xhttp.send();
}

// commande RELAIS 
function n_reg1() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "on1", true);
    xhttp.send();
}

function n_relais1() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "off1", true);
    xhttp.send();
}



// affichage des capteur de tension pv
setInterval(function getData()
{
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function()
    {
        if(this.readyState == 4 && this.status == 200)
        {
            document.getElementById("valeurtension").innerHTML = this.responseText;
            
        }
    };

    xhttp.open("GET", "liretensionpv", true);
    xhttp.send();
    
    
}, 2000);

/// affichage capteur courant pv
setInterval(function getData()
{
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function()
    {
        if(this.readyState == 4 && this.status == 200)
        {
           
            document.getElementById("n_courantpv").innerHTML = this.responseText;
            
        }
    };

    xhttp.open("GET", "lirecourantpv", true);
    xhttp.send();
    
    
}, 2000);

/// affichage capteur tension bat
setInterval(function getData()
{
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function()
    {
        if(this.readyState == 4 && this.status == 200)
        {
           
            document.getElementById("n_tensionbat").innerHTML = this.responseText;
            
        }
    };

    xhttp.open("GET", "liretensionbat", true);
    xhttp.send();
    
    
}, 2000);

/// affichage capteur courant bat

setInterval(function getData()
{
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function()
    {
        if(this.readyState == 4 && this.status == 200)
        {
           
            document.getElementById("n_courantbat").innerHTML = this.responseText;
            
        }
    };

    xhttp.open("GET", "lirecourantbat", true);
    xhttp.send();
    
    
    
}, 2000);

/// affichage capteur temperature
setInterval(function getData()
{
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function()
    {
        if(this.readyState == 4 && this.status == 200)
        {
           
            document.getElementById("n_temp").innerHTML = this.responseText;
            
        }
    };

    xhttp.open("GET", "liretemp", true);
    xhttp.send();
    
    
}, 2000);


/// affichage capteur de luminositè
setInterval(function getData()
{
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function()
    {
        if(this.readyState == 4 && this.status == 200)
        {
           
            document.getElementById("n_lum").innerHTML = this.responseText;
            
        }
    };

    xhttp.open("GET", "lirelum", true);
    xhttp.send();
    
    
    // xhttp.open("GET", "!µ
}, 2000);