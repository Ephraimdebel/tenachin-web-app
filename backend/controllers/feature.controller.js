const {
  getAllFeatureSections,
  getFeatureSection,
  updateFeatureSection,
  addListItem,
  updateListItem,
  deleteListItem,
} = require('../services/feature.service.js');

// GET all sections
async function getAll(req, res) {
  try {
    const data = await getAllFeatureSections();
    res.json(data);
  } catch (error) {
    console.error("Error fetching feature sections:", error);
    res.status(500).json({ message: "Server error" });
  }
}

// GET single section
async function getOne(req, res) {
  try {
    const { id } = req.params;
    const data = await getFeatureSection(id);
    res.json(data);
  } catch (error) {
    console.error("Error fetching feature section:", error);
    res.status(500).json({ message: "Server error" });
  }
}

// UPDATE main section content
async function updateSection(req, res) {
  console.log("some changes apeared")
  try {
    const { id } = req.params;
    const { content } = req.body;

    console.log("image",req.body)

    let media_url = null;
    let media_type= null;
    if(req.file){
      media_type = req.file.mimetype.startsWith("video/") ? "video" : "image";
    }

    // If an image is uploaded, multer+cloudinary gives us the URL
    if (req.file) {
      media_url = req.file.path; 
    }
    // console.log(image_url)

    await updateFeatureSection(id, content, media_url,media_type);

    res.json({ message: "Section updated successfully" });

  } catch (error) {
    console.error("Error updating section:", error);
    res.status(500).json({ message: "Server error" });
  }
}


// ADD list item
async function createListItem(req, res) {
  try {
    const {text } = req.body;
    const {section_id } = req.params;

    const result = await addListItem(section_id, text);
    res.json({ insertedId: result.insertId });
  } catch (error) {
    console.error("Error adding list item:", error);
    res.status(500).json({ message: "Server error" });
  }
}

// UPDATE list item
async function editListItem(req, res) {
  try {
    const { id } = req.params;
    const { text } = req.body;

    await updateListItem(id, text);
    res.json({ message: "List item updated" });
  } catch (error) {
    console.error("Error updating list item:", error);
    res.status(500).json({ message: "Server error" });
  }
}

// DELETE list item
async function removeListItem(req, res) {
  try {
    const { id } = req.params;

    await deleteListItem(id);
    res.json({ message: "List item deleted" });
  } catch (error) {
    console.error("Error deleting list item:", error);
    res.status(500).json({ message: "Server error" });
  }
}

module.exports = {
  getAll,
  getOne,
  updateSection,
  createListItem,
  editListItem,
  removeListItem,
};
