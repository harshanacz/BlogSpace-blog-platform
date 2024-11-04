import mongoose, { Schema, Document } from 'mongoose';


interface IBlog extends Document {
    id: number;
    title: string;
    description: string;
    image: string;
    date: Date;
    category: string;
    author: string;
    author_img: string; 
}


const blogSchema: Schema = new Schema({
    id: {
        type: Number,
        required: true,
        unique: true 
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String, 
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    category: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    author_img: {
        type: String, 
        required: true
    }
});

const Blog = mongoose.model<IBlog>('Blog', blogSchema) || mongoose.models.Blog;

export default Blog;
