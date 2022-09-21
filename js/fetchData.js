// https://github.com/typicode/json-server
// https://jsonplaceholder.typicode.com/posts?_limit=3
// /posts?_page=7 /
// posts ? _page = 7 & _limit = 20

// 1. función para obtener la data

// 2. función para renderizar la data

// función asincronica

async function getData() {
    const data = ["https://jsonplaceholder.typicode.com/posts?_limit=3"];
    try {
        //llamar info
        let response = await fetch(data); //guardar el fetch
        return await response.json();
    } catch (error) {
        console.log(error);
    }
}

async function renderData() {
    let dataInfo = await getData();
    console.log(dataInfo);
    let boxInfo = "";

    dataInfo.forEach((item) => {
        let box = `
                    <div class="card-project">
                    <div>
                        <img class="card-project-img" src="project-assets/projects-section/${item.id}.jpg" alt="Project image with diferent shapes and colors"/>
                    </div>
                    <div class="card-project-text">
                        <h3>${item.title.slice(0, 15)}</h3>
                        <p>${item.body.slice(0, 35)}</p>
                        <a class="learn-more" href="projects.html">Learn More</a>
                    </div>
                </div>`;
        return boxInfo += box
    });


    let container = document.querySelector('.container-projects-grid')
    container.innerHTML = boxInfo;
}
renderData();