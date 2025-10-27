console.log('funzia');

const polaroids = []
const url = 'https://lanciweb.github.io/demo/api/pictures/'
const polaroidsContainer = document.getElementById('polaroids-container')


fetch(url)
  .then(Response => Response.json())
  .then(data => {
    data.forEach(polaroid => {
      polaroids.push(polaroid);

      if (polaroids.length === 6) {
        polaroidsContainer.innerHTML = "";
        polaroids.forEach((polaroid) => {
          const elem = document.createElement("div");
          elem.className = "col-4 d-flex";
          elem.innerHTML = `
            <div class=" flex-column polaroid">
            <div class="pin">
              <img src="./assets/img/pin.svg" alt="pin rosso" />
            </div>
            <div class="polaroid-body">
            <div class="polaroid-img">
              <img
                src="${polaroid.url}"
              />
            </div>
           
            <p class="polaroid-date">${polaroid.date}</p>
            <p class="polaroid-caption fw-bold text-uppercase">${polaroid.title}</p>
          </div>
           </div>
            `;
          polaroidsContainer.appendChild(elem);
        });
      }
    })



  })
