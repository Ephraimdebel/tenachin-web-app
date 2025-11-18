// import services
const herosectionService = require('../services/herosection.service');

// Controller to get hero section data
exports.getHeroSection = async (req, res) => {
    try {
        const data = await herosectionService.getHeroSection();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving hero section data', error });
    }
};

// Controller to add hero section data
exports.addHeroSection = async (req, res) => {
    try {
        const { title, description_one, description_two } = req.body;
        const result = await herosectionService.addHeroSection(title, description_one, description_two);
        res.status(201).json({ message: 'Hero section data added successfully', result });
    } catch (error) {
        res.status(500).json({ message: 'Error adding hero section data', error });
    }
};

// Controller to update hero section data
exports.updateHeroSection = async (req, res) => {
    try {
        const { title, description_one, description_two } = req.body;
        const result = await herosectionService.updateHeroSection(title, description_one, description_two);
        res.status(200).json({ message: 'Hero section data updated successfully', data:result });
    } catch (error) {
        res.status(500).json({ message: 'Error updating hero section data', error });
    }
};