import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

export const addblog = createAsyncThunk("blog/addblog", async (blog) => {
    const response = await axios.post("http://localhost:3000/blog", blog);
    return response.data;
  });
