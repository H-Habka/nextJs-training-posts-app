import { contactModel } from "../../backend/contactsModel.js";

export default async function handler(req, res) {
    if (req.method === "POST") {
        const { name, message, email } = req.body;

        if (!name || !message || !email)
            return res
                .status("400")
                .json({ message: "some Data is missing! " });

        const isAlreadyExists = await contactModel.findOne({where : {
            email,
            name,
            message
        } });

        if (isAlreadyExists) return res.status("409").json({message: "Data Exists"});


        const response = await contactModel.create({ name, email, message });

        res.status(200).json({ message: "Done" });
    } else {
        res.status(405).json({ message: "this method not allowed" });
    }
}
