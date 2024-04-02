import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const register = createAsyncThunk('auth/register', async () => {})

export const logIn = createAsyncThunk('auth/login', async () => {})

export const logOut = createAsyncThunk('auth/logout', async () => {})