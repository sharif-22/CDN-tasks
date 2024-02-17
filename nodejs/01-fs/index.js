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

  fs.writeFile(
    `./Districts/${district.district}/README.md`,
    `# ${district.district} 

    \n ### Agriculture in ${district.district}
    
    \n ${district.agricultureCrops.map((crop) => ` **${crop}** `)}
    
    \n ### Famous foods in ${district.district}
    \n ${district.famousFood.map((food) => {
      return `\n - ${food}`;
    })}
    
    \n ### Business culture in ${district.district}
    \n > ${district.businessCulture}
    `,
    () => {}
  );
});
