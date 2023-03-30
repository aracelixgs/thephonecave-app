const router = require("express").Router();
const phones = require("../data/phones.json")

router.get("/", (req, res, next) => {
  res.json("All good in here");
});

router.get("/phones", (req, res, next) => {
    try {
    console.log('FINDED PHONES')
    res.json(phones)
    } catch (error) {
        next(error)
    }
  });
  

router.get("/phones/:id", (req, res, next) => {
  try {
    const { id } = req.params;
    const phoneDetails = phones.find(eachPhone => eachPhone.id == id)
    res.json(phoneDetails)
    console.log(phoneDetails);
  } catch (error) {
    next(error)
}
})


module.exports = router;