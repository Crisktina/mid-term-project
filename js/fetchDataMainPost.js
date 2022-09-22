// función asincrona para el post principal de la página projects

async function getData2() {
    const data = ["https://jsonplaceholder.typicode.com/posts?_limit=1"];
    try {
        //llamar info
        let response = await fetch(data); //guardar el fetch
        return await response.json();
    } catch (error) {
        console.log(error);
    }
}

async function renderData2() {
    let dataInfo = await getData2();
    console.log(dataInfo);
    let boxInfo = "";

    dataInfo.forEach((item) => {
        let box = `
        <div class="contact-box-box">
            <h1 class="projects-principal-title">${item.title.slice(0, 1).toUpperCase()}${item.title.slice(1, 9)}</h1>
            <div class="contact-subtitle-box">
            <h4>${item.title.slice(9, 10).toUpperCase()}${item.title.slice(10, 42)}</h4>
            <div class="project-date-box">
                <div class="date-text-1">Completed on</div>
                <div class="date-text-2">${item.id}/${item.id}/${item.id}${item.id}</div>
            </div>
            </div>
        </div>
        <div class="img-box">
            <img class="project-img" src="project-assets/projects-section/${item.id}.jpg" alt="Project image with diferent shapes and colors" />
            <img class="project-img-effect" src="project-assets/projects-section/${item.id}.jpg" />
        </div>
        <div class="text-box">
            <p>
            ${item.title.slice(0, 1).toUpperCase()}${item.title.slice(1, 9)}${item.body.slice(0, 200)}${item.body.slice(0, 200)}.
            </p>
            <p>${item.body.slice(0, 1).toUpperCase()}${item.body.slice(1, 200)}${item.body.slice(0, 200)}${item.body.slice(0, 200)}${item.body.slice(0, 200)}.
            </p>
        </div>`;
        return boxInfo += box
    });


    let container = document.querySelector('.project-1')
    container.innerHTML = boxInfo;
}
renderData2();