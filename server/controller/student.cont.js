import Student from "../model/student.model";
import multer from "multer";

const storage = multer.diskStorage({
    destination: function (req, file, cb) { 
      cb(null, './uploads')
    },
    filename: function (req, file, cb) { 
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9) 
      cb(null, file.fieldname + '-' + uniqueSuffix+'.docx')
    }
  })
  export const upload = multer({ storage: storage })

export const addStudent=(req,res)=>{

 try {
    console.log(req.body);
     let fileStore=multer({storage:storage}).single('Resume');
     fileStore(req,res,(err)=>{
         if (err) {
            res.status(400).json({
                message:err.message
            })
         }

         else{
           let{
            Name,BirthDate,Hobbies,Address,Gender,State
           } = req.body

            let Resume=''
             if (req?.file?.filename) {
                 Resume=req.file.filename
             }
             console.log(Resume);

            let studentData= new Student({
                Name:Name,
                Hobbies: Hobbies,
                BirthDate:BirthDate,
                Address:Address,
                Gender:Gender,
                State:State,
                Resume:Resume
            })

            let saveData = studentData.save()

              if (studentData) {
                 res.status(200).json({
                    success:true,
                    data:studentData,
                    message:'Succesfully Data inserted',
                    path: 'http://localhost:4020/uploads'
                 })
              }

         }
     })
 } 
 
 catch (error) {
     res.status(400).json({
        success:false,
        message:error.message
     })
 }

}