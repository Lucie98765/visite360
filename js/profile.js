document.getElementById("submit").onclick = event =>{
	event.preventDefault();
	const form = document.querySelector('#form');
	let params = {};
	if(form.name.value)
		params['name'] = form.name.value;
	if(form.password.value)
		params['password'] = form.password.value;
	var body = JSON.stringify(params);
	var request = new XMLHttpRequest();
	request.onreadystatechange=()=>{
		if(request.readyState == 4){
			if(request.status == 200){
				Array.prototype = true;
				var response = JSON.parse(request.responseText);
				document.location.href="admin.php";
			}
			else{
				var error = document.querySelector('#error');
				var response = JSON.parse(request.responseText);
				error.innerHTML = response;
			}
		}
	}

	request.open("POST", "connexion.php",true);
    request.send(body);
};