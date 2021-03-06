// Making a static map is really long - this is a handy helper function to make one
const fs = require('fs');
const promisify = require('es6-promisify');
const readP = promisify(fs.readFile);
exports.registerHelpers = (hbs) => {

  hbs.registerHelper('staticMap', ([lng, lat]) =>
    `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=14&size=800x150&key=${process.env.MAP_KEY}&markers=${lat},${lng}&scale=2`)

  hbs.registerHelper('dump', (obj) => JSON.stringify(obj, null, 2))
  hbs.registerHelper('icon', (name) => fs.readFileSync(`./public/images/icons/${name}.svg`))
}








// const fs = require('fs');
// exports.moment = require('moment');

// // Dump is a handy debugging function we can use to sort of "console.log" our data
// exports.dump = (obj) => JSON.stringify(obj, null, 2);


// // inserting an SVG
// exports.icon = (name) => fs.readFileSync(`./public/images/icons/${name}.svg`);

// // Some details about the site
// exports.siteName = `Où sont les magasins`;

// exports.menu = [
//   { slug: '/magasins', title: 'Magasins', icon: 'store', },
//   { slug: '/tags', title: 'Tags', icon: 'tag', },
//   { slug: '/top', title: 'Top', icon: 'top', },
//   { slug: '/add', title: 'Add', icon: 'add', },
//   { slug: '/map', title: 'Map', icon: 'map', },
// ];
