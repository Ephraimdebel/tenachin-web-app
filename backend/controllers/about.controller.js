const {
  getAboutSection,
  updateAboutSection,
  addListItem,
  deleteListItem,
  updateListItem
} = require("../services/about.service");

// GET full about section
async function getAbout(req, res) {
  try {
    const data = await getAboutSection();
    res.json(data);
  } catch (error) {
    console.error("Error fetching about section:", error);
    res.status(500).json({ message: "Server error fetching about section" });
  }
}

// UPDATE descriptions only
async function updateAbout(req, res) {
  try {
    const { description_left, description_right } = req.body;
    await updateAboutSection(description_left, description_right);
    res.json({ message: "About content updated successfully" });
  } catch (error) {
    console.error("Error updating about:", error);
    res.status(500).json({ message: "Failed to update about section" });
  }
}

// ADD list item
async function createListItem(req, res) {
  try {
    const { text } = req.body;
    await addListItem(text);
    res.json({ message: "List item added" });
  } catch (error) {
    console.error("Error adding list item:", error);
    res.status(500).json({ message: "Failed to add list item" });
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
    res.status(500).json({ message: "Failed to update list item" });
  }
}

// DELETE list item
async function removeListItem(req, res) {
  try {
    const { id } = req.params;
    await deleteListItem(id);
    res.json({ message: "List item removed" });
  } catch (error) {
    console.error("Error deleting list item:", error);
    res.status(500).json({ message: "Failed to delete list item" });
  }
}

module.exports = {
  getAbout,
  updateAbout,
  createListItem,
  editListItem,
  removeListItem,
};
