const {fetchCallToAction, updateCallToAction} = require("../services/calltoaction.service.js");

// GET Call to Action section
async function getCallToAction(req, res) {
  try {
    const data = await fetchCallToAction();
    res.json(data);
  } catch (error) {
    console.error("Error fetching Call to Action section:", error);
    res.status(500).json({ message: "Server error" });
  }
}
async function updateCallToActionSection(req, res) {
    try{
        const {content, download_url} = req.body;
         if (!content || !download_url) {
            return res.status(400).json({ message: "Content and download_url are required" });
            }
        await updateCallToAction(content, download_url);
        res.json({message: "Call to Action section updated successfully"});

    }catch(error){
        console.error("Error updating Call to Action section:", error);
        res.status(500).json({ message: "Server error" });
    }
}

module.exports = {
    getCallToAction,
    updateCallToActionSection,
}