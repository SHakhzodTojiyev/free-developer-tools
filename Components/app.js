function getUser() {
    fetch("./Components/data.json")
   .then(response => response.json())
   .then(data => {
       let output = "";
       data.forEach(user => {
           output += `
           <section class="main-section">
			<div class="image-container">
				<img
					src=${user.image}
					alt="photo"
				/>
			</div>
			<div class="about-container">
				<a target="_blank" href=${user.link} class="about-name">${user.name}</a>
			</div>
		    </section>
           `;
       });
       document.querySelector("body").innerHTML = output;
   }).catch((error) => console.log(error));
}

getUser();