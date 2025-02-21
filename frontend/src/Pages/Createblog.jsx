// import React, { useState } from 'react';
// import ReactQuill from 'react-quill';
// import 'react-quill/dist/quill.snow.css';
// import {uploadFile, createBlog} from '../api/Api';

// const Createblog = () => {
    
//     const blankBlog = {
//         "title":"",
//         "image":"",
//         "post":"<p><br></p>",
//         "category":""
//     }

//     const [newblog,setNewblog] = useState(blankBlog);

//     const handleUpload = async (event) => {
//         let uploadedFile = await uploadFile(event.target.files[0]);
//         if(uploadedFile.path){
//             setNewblog({...newblog,image:uploadedFile.path});
//         }
//     }

//     const handleSubmit = async () => {
//         let createdBlog = await createBlog(newblog);
//         if(createdBlog.desc == 1){
//             setNewblog(blankBlog);
//             // alert("Blog added successfully !");
//         }
//     }

//     const menu = [
//         {text:'Nature',path:'/'},
//         {text:'Travel',path:'/'},
//         {text:'Technology',path:'/'},
//         {text:'Politics',path:'/'},
//     ]
//     return (
//         <div className='flex w-full items-center justify-center'>
//             <div className="bg-slate-200 w-[60%] p-5 rounded-xl">
//                 {/* <small>{JSON.stringify(newblog)}</small> */}
//                 <h1 className='text-2xl mb-5'>Create Blog Post</h1>
//                 <div className="flex flex-col">
//                     <label htmlFor="" className='ml-1 text-gray-500'>Title</label>
//                     <input type="text" value={newblog.title} onChange={(e) => setNewblog({...newblog,title:e.target.value})} className='h-10 border border-gray-300 rounded my-2 p-2' />
//                     <label htmlFor="" className='ml-1 text-gray-500'>Category</label>
//                     <select value={newblog.category} onChange={(e) => setNewblog({...newblog,category:e.target.value})} name="" id="" className='h-10 border border-gray-300 rounded my-2 p-2'>
//                         <option value="" default disabled>Select Category</option>
//                         {menu.map(x => {
//                             return <option value={x.text}>{x.text}</option>
//                         })}
//                     </select>
//                     <label htmlFor="" className='ml-1 text-gray-500'>Image</label>
//                     <input onChange={(e)=> handleUpload(e)} type="file" className='  border-gray-300 rounded my-2 p-2' />
//                     <label htmlFor="" className='ml-1 text-gray-500'>Post</label>
//                     <ReactQuill className='bg-white rounded mb-2 mt-2 editingarea' theme="snow" value={newblog.post} onChange={(e)=>{setNewblog({...newblog,post:e})}} />

//                     <hr />
//                     <button onClick={()=> handleSubmit()} className='bg-slate-500 text-white h-8 w-[100px] mt-2 rounded'>Submit</button>

//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Createblog;
import React, { useState } from 'react';

const CreateBlog = () => {
    const [blog, setBlog] = useState({
        title: "",
        category: "",
        image: null,
        content: ""
    });

    const categories = ["Nature", "Travel", "Technology", "Politics"];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBlog({ ...blog, [name]: value });
    };

    const handleImageUpload = (e) => {
        setBlog({ ...blog, image: e.target.files[0] });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Blog Submitted:", blog);
        setBlog({ title: "", category: "", image: null, content: "" });
    };

    return (
        <div className='flex justify-center items-center min-h-screen bg-gray-100'>
            <div className='bg-white p-6 rounded shadow-md w-2/3'>
                <h2 className='text-2xl font-bold mb-4'>Create Blog Post</h2>
                <form onSubmit={handleSubmit} className='space-y-4'>
                    <input 
                        type='text' 
                        name='title' 
                        value={blog.title} 
                        onChange={handleChange} 
                        placeholder='Enter Blog Title' 
                        className='w-full p-2 border rounded' 
                    />
                    <select 
                        name='category' 
                        value={blog.category} 
                        onChange={handleChange} 
                        className='w-full p-2 border rounded'
                    >
                        <option value='' disabled>Select Category</option>
                        {categories.map((cat, index) => (
                            <option key={index} value={cat}>{cat}</option>
                        ))}
                    </select>
                    <input 
                        type='file' 
                        onChange={handleImageUpload} 
                        className='w-full p-2 border rounded' 
                    />
                    <textarea 
                        name='content' 
                        value={blog.content} 
                        onChange={handleChange} 
                        placeholder='Write your blog here...' 
                        className='w-full p-2 border rounded h-40' 
                    ></textarea>
                    <button 
                        type='submit' 
                        className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'
                    >Submit</button>
                </form>
            </div>
        </div>
    );
};

export default CreateBlog;
