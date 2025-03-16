function Featured() {
    return (
        <>
            <div class="bg-dark p-2 pb-4">
                <h1 class="text-center text-light m-3">Featured Projects</h1>
                <div class="d-flex px-3 mb-2 justify-content-between">
                <ProjectTile
                    name={"Band Website"}
                    desc={"Solo development of a website Designed with HTML, CSS, JS, and Bootstrap to host my bands live shows and links"}
                    site={"https://customerservice.band"}
                ></ProjectTile>
                <ProjectTile
                    name={"AWS Application"}
                    desc={"Solo development of an application hosted on AWS cloud that _____, using EC2, RDS, RESTful APIs, VPCs, and ..."}
                    site={"https://github.com/maxhayden/aws-simple-api"}
                ></ProjectTile>
                <ProjectTile
                    name={"Barter & Trade App"}
                    desc={"Team based application for android devices that functions as a barter and trading marketplace. "}
                    site={""}
                ></ProjectTile>
                </div>
                
            </div>
        </>
    );
}

function ProjectTile({name, desc, site}) {
    return (
        <>
            <div class="card m-2 w-50">
                    <div class="card-body d-flex flex-column justify-content-between">
                        <h5 class="card-title border-bottom">{name}</h5>
                        <p class="card-text text-start">{desc}</p>
                        <a href={site} target="_blank" class="btn btn-primary ">View</a>
                    </div>
            </div>
        </>
    );
}


export default Featured;