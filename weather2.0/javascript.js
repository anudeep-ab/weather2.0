var site="http://api.openweathermap.org/data/2.5/weather?zip="

var zip="&units=metric&APPID=";

var key="bf41925897a79ff5653e3cbe18a846ce";
var empty=document.getElementById("display");
var table=document.getElementById("table");

var req=new XMLHttpRequest();

$("#button").on("click",function(){

	empty.textContent=" ";
	
	var value=$("#text").val();
	if(value.length===5 || value=== " "){

	var fullSite=site+value+zip+key;

		req.open("GET",fullSite);
		req.onload=function(){
		var data=JSON.parse(req.responseText);
		var temp =data.main.temp;
		var location=data.name;
		display(temp,location);
}
req.send();
}
else{
	alert("please enter 5 digit zip code");
}
	
});


function display(temp,location){
	content="<p>"+temp+"<span>&#8451</span"+"</p>"+
				"<p>"+location+"</p>";
	$("#display").append(content);
}

//GitHUB code

var gitSite="https://api.github.com/users/";

var repos="/repos";

var greq= new XMLHttpRequest();


$("#gbutton").on("click",function(){



				table.textContent=" ";

	
				var value=$("#gtext").val();
				
					if(value != 0){
						console.log(value);


	 			var fullsite=gitSite+value+repos;

				greq.open("GET",fullsite);

			greq.onload=function(){


					var data=JSON.parse(greq.responseText);

			
					var table = "<table class='table table-bordered table-hover table-condensed small'>"+"UserName = "+"<strong>"+value+"</strong>"+"<br>";


					var content = table+"<th>Repositories</th>"+"<th>Repository ID</th>"+"<th>url</th>";
			
			
					for(i=0; i<data.length; i++){
    				content += '<tr scope="row"><td>'  +  data[i].name+ '</td>'+'<td>'+ data[i].id +'</td>'+  '<td>'+data[i].html_url+'</td></tr>';

    				}
					content += "</table>"
			
					$("#table").append(content);
			}	
			greq.send();	
		}
		else{
			alert("please enter a GitHub Username")
		}
		

							

							// '<td>'+data[i].html_url+'</td>

							// '<td>'+'<a href=' +data[i].html_url+ "'"+'> </a>''</td>


					
			});
