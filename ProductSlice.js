import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


//writing  a function for api call
//createAsynchthiunk is a feature for api calling in reduxtoolkit
export const fetchApi=createAsyncThunk("fetchApi",async()=>{
    const res=await fetch('https://jsonplaceholder.typicode.com/todos');
    const finalResult=await res.json
    return finalResult;

})



const Productslice=createSlice({
    // we need a name and pass reducers with intital state before calling api 

    name:"product",
    initialState:{
        data:null,
        isLoader:false,
        isError:false,// to check if there is any error while api calling 
    },
    // we need to call an api and check if its not pending or an error so we extraReducers
    //making three cases
    //under addCase you need give a state which is a status that it is pending or something

    
    extraReducers:builder=>{
        builder.addCase(fetchApi.pending,(state,action)=>{
            state.isLoader=true


        } );
        builder.addCase(fetchApi.fulfilled,(state,action)=>{
            state.isLoader=false;
            state.data=action.payload;
        })
        builder.addCase(fetchApi.rejected,(state,action)=>{
            state.isError=true;
            state.isLoader=false
        });


    },
});

//now we need to export reducer which are present in the slice
export default Productslice.reducer;