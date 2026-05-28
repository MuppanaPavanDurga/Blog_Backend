
const ContactSchema=new mongoose.Schema(
    {
        email : {
            type:String,
            required:true
        },
        phno : {
            type:Number,
            required:true
        }
    }
)
const Contact=mongoose.model("Contact",ContactSchema)
export default Contact;
