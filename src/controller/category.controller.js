const category = require("../services/category");
var categoryObj = new category.categoryClass();
exports.getCategory = ()=>{
    
    categoryObj.fetchAllCategories()
    .then(result => {
      let response = {
        data: result
      };
      res.json(response);
    })
    .catch(err => {
      return res.status(400).json(err);
    })
}
exports.category = (req,res)=>{
    let params = {
        categoryName: req.body.categoryName
      }
      categoryObj.addCategories(params)
        .then(result => {
          let response = {
            data: result
          };
         return res.json(response);
        })
        .catch(err => {
          return res.status(400).json(err);
        })
}

