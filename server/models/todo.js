import mongoose from '../config/mongoose';
import { Schema } from 'mongoose';

const todoSchema = new mongoose.Schema({

  name: { type: String },

},
{
  timestamps: true,
});

export default mongoose.model('todo', todoSchema);
