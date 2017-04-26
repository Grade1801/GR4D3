const config = require (`./../../config/config.json`);

// the ready function to share in the cli
module.exports = () => {
		console.log(`GR4D3 is now ready on verson ${config.version} and listening for your commands :)`);
};