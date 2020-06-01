const course = require("../services/course");
const courseObj = new course.courseClass();
exports.create = async (req,res)=>{
  try {
    let params = {
      name: req.body.name,
      popularity: req.body.popularity,
      author: req.body.author,
      difficulty_level: req.body.difficulty_level,
      createdByUser: req.user.username,
      categoryId: req.body.categoryId
    }
   
    const response = await courseObj.addNewCourse(params);
    return res.json(response);

  } catch (error) {
    return res.status(400).json({message:error.message});
  }
}

exports.updateCourse =async (req,res)=>{
   try {
    let params = {
      categoryId: req.body.categoryId,
      popularity: req.body.popularity,
      author: req.body.author,
      difficulty_level: req.body.difficulty_level,
      updateByUser: req.user.username,
      id: req.body.id
    }
    const result = await courseObj.updateCourseDetails(params);
    return res.status(200).json(result);
   } catch (error) {
    return res.status(400).json({message:error.message});
   }

}

exports.deleteCourse =async (req,res)=>{
    try {
      let params = {
        id: req.body.id
      }
     const result = await courseObj.deleteCourse(params)
     return res.json(result);
     
    } catch (error) {
      return res.status(400).json({error:error});
    }
        
}
  
exports.getAllCourses = async (req, res)=>{
   try {
    let params = {};
    if (req.query.limit && req.query.offset) {
      params = {
        limit: req.query.limit,
        offset: req.query.offset
      }
    }else{
      return res.status(400).json({message:`query paramater is missing`});
    }
    const result = await courseObj.fetchAllCourses(params)
    return res.status(200).json(result);
   } catch (error) {
    return res.status(400).json({error:error});
   }

}

exports.sortCourse = async (req,res)=>{
   try {
    let params = {
      sortingParameter: req.query.keyword,
      sortingType: req.query.type   // asc or dec
    }
   const result = await courseObj.sortCourse(params);
   return res.json(result);
   } catch (error) {
    return res.status(400).json({error:error});
   }
        
}

exports.filterCourseByCategory = async(req,res)=>{
    try {
      let params = {
        categoryId: req.query.categoryId
      }
     const result = await courseObj.filterCourseByCategory(params)
     return res.json(result);
    } catch (error) {
      return res.status(400).json({error:error});
    }
     
}

