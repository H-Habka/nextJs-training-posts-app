import {postsModel} from '../../../backend/postsModel.js'
import {sequelizeORM} from '../../../backend/createConnection.js'
import {Sequelize} from 'sequelize'

export default async function handler(req,res){
    if (req.method === "POST") {
        const { title, image, date, excerpt } = req.body;

        if (!title || !image || !date || !excerpt )
            return res
                .status("400")
                .json({ message: "some Data is missing! " });

        const isAlreadyExists = await postsModel.findOne({where : {
            title,
        } });

        if (isAlreadyExists) return res.status("409").json({message: "Post Exists"});


        const response = await postsModel.create({ title,image,date,excerpt  });

        res.status(200).json({ message: "Done" });
    } else if(req.method === "GET") {

        const AllPosts = await postsModel.findAll();

        res.status(200).json({ message: "success", AllPosts});
    }else{
        res.status(405).json({ message: "this method not allowed" });
    }
}