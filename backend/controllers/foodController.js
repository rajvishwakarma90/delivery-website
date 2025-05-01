
import foodModel from '../models/foodModel.js';
import fs from 'fs/promises';


const addFood = async (req, res) => {
    try {
        console.log("req. Body:", req.body);
        console.log("req. File:", req.file);

        if (!req.file) {
            return res.status(400).json({
                success: false,
                message: "Image file is required."
            });
        }

        const image_filename = req.file.filename;

        const food = new foodModel({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            category: req.body.category,
            image: image_filename,
        });

        await food.save();
        res.json({ success: true, message: "Food Added" });
    } catch (error) {
        console.error("Error caught:", error);
        res.status(500).json({
            success: false,
            message: "Error adding food item",
            error: error.message
        });
    }
};
//all food list
const listFood = async (req, res) => {
    try {
        const food = await foodModel.find({});
        res.json({ success: true, data: food })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" })
    }

}

const removeFood = async (req, res) => {

    try {
        const food = await foodModel.findById(req.body.id);
        try {
            await fs.unlink(`uploads/${food.image}`);
        } catch (error) {
            console.warn("Image file not found, skipping deletion.");
        }



        await foodModel.findByIdAndDelete(req.body.id);
        res.json({ success: true, message: "Food Removed" })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" });


    }

}
export { addFood, listFood, removeFood }