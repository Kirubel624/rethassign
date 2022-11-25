const express = require ("express")
const {
    createParent,
    editParent,
    getParent,
    getChildren,
    createChildren,
    getGrandChildren

  } = require("../Control/Control");

const router = express.Router();
  
router.route("/createParent").post(createParent)
router.route("/createChildren/:id").post(createChildren)
router.route("/updateParent/:id").put(editParent)
router.route("/updateChildren/:id").put(editParent)
router.route("/getParent/:id").get(getParent)
router.route("/getChildren/:id").get(getChildren)
router.route("/getGrandChildren/:id").get(getGrandChildren)

module.exports = router;
  