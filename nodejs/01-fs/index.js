const fs = require("fs");
const touristDistricts = require("./data/touristDistricts.json");

fs.mkdir("Districts", () => {});

touristDistricts.map((district) => {
  fs.mkdir(`./Districts/${district.district}`, (err) => {});

  district.mustVisit.map((visit) => {
    fs.writeFile(
      `./Districts/${district.district}/${visit.name}.md`,

      `# ${district.district} \n ## ${visit.name} \n  \n ### History \n > ${visit.history} \n  \n ### Description \n > ${visit.description}`,
      () => {}
    );
  });
});
