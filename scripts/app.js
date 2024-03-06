// const heroDescription = document.getElementById('hero-description')
// // console.log(heroDescription)


async function loadData() {
    const res = await fetch(`https://openapi.programming-hero.com/api/course/curriculum`);
    const data = await res.json();
    const milestoneData = data.data;

    displayModulesData(milestoneData)
}

loadData()

function displayModulesData(data) {
    console.log(data)
    const milestoneContainer = document.querySelector('.milestone-container')
    milestoneContainer.innerHTML = `${data.map(function (milestone) {
        return `
            <div class="milestone">
                <div class="milestone-heading">
                    <i class="fa-solid fa-square"></i>
                    <h3>${milestone.name} <i class="fa-solid fa-square-plus" style="color: #B197FC;"></i></h5>
                </div>
                <div class="modules ">
                    ${milestone.modules.map(function(module){
                        return `<div class="module-container">
                                    <p>${module.name} <i class="fa-solid fa-chevron-down"></i></p>
                                </div>`
                    }).join("")}
                </div>
            </div>
        `
    }).join("")}`
}