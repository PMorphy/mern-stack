import mongoose from 'mongoose';

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please add a Name']
    },
    email: {
      type: String,
      required: [true, 'Please add an Email'],
      unique: true
    },
    password: {
      type: String,
      required: [true, 'Please add a Password']
    }
  },
  { timestamps: true }
);

export const User = mongoose.model('User', userSchema);
