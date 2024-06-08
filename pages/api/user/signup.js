import bcrypt from "bcrypt";
import User from "../../../Models/userModel";
import connectDb from "../../../utils/DbConnect";
import messagehandler from "../../../utils/features";

const SignupHandler = async (req, res) => {
    
    await connectDb();
    if (req.method !== "POST")
      return messagehandler(res, 400, "Only POST Method is allowed");
  
    try {
      const { fullname, username, email, password } = req.body;
      
  
      if (fullname === "" && username === "" && email === "" && password === "") {
        return messagehandler(res, 400, "All Credentials Required!");
      }
  
      
      let user = await User.findOne({ email });
  
      if (user) {
        return messagehandler(res, 400, "User already Exists");
      }
  
      const passCrypt = await bcrypt.hash(password, 10);
      user = await User.create({
        fullname,
        username,
        email,
        password: passCrypt,
      });
      if (user) {
        // const token = await jwt.sign({_id : user._id} , "secretkeykuchbhi")
        res.status(201).json({ message: "User Created Succesfully", user });
      }
    } catch (error) {
      console.log(error);
      messagehandler(res, 500, "Server Error");
    }
  };
  
  export default SignupHandler;