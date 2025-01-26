import slugify from "slugify";
import categoryModels from "../models/categoryModels.js";

export const createCategoryController = async (req,res) => {
    try {
        const {name} = req.body
        if(!name){
            return res.status(401).send({message:'name is required'});
        }
        const existingCategory = await categoryModels.findOne({name});
        if(existingCategory){
            return res.status(200).send({
                success:true,
                message: "category already exists"
            })
        }
        const category = await new categoryModels({name, slug: slugify(name)}).save()
        res.status(201).send({
            success:true,
            message:"new category created",
            category
        })

    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            error,
            message:"error in category"
        })
    }
}


export const updateCategoryController = async (req,res) => {
    try {
        const {name} = req.body
        const {id} = req.params
        const category = await categoryModels.findByIdAndUpdate(id, {name, slug: slugify(name)}, {new:true})
        res.status(200).send({
            success:true,
            message:'category updated successfully',
            category
        });
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            error,
            message:'error while updating category '
        })
    }
}

export const categoryControlller = async (req, res) => {
    try {
      const category = await categoryModels.find({});
      res.status(200).send({
        success: true,
        message: "All Categories List",
        category,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        error,
        message: "Error while getting all categories",
      });
    }
};

export const singleCategoryController = async (req, res) => {
    try {
      const category = await categoryModels.findOne({ slug: req.params.slug });
      res.status(200).send({
        success: true,
        message: "Get SIngle Category SUccessfully",
        category,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        error,
        message: "Error While getting Single Category",
      });
    }
};

export const deleteCategoryCOntroller = async (req, res) => {
    try {
      const { id } = req.params;
      await categoryModels.findByIdAndDelete(id);
      res.status(200).send({
        success: true,
        message: "Categry Deleted Successfully",
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "error while deleting category",
        error,
      });
    }
};