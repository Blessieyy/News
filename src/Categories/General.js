// import React, { createContext, useEffect, useState } from "react";
// import axios from "axios";

// export const NewsContext = createContext()

// export const NewsContextProvider = (props) => {
// const [data, setData]= useState([])
// const [category, setCategory] = useState("general");
// const apikey = 'ba70087defb741e09f34a312de19e24a'

// useEffect(()=> {
//     axios.get( `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${apikey}`

//     ).then(response => {
//         // Access the data object and its properties correctly
//         setData(response.data.articles);
//       })
//       .catch(error => {
//         console.error('Error fetching news:', error);
//       });
//   }, [category]);

//   const changeCategory = (newCategory) => {
//     setCategory(newCategory);
//   };
// return <NewsContext.Provider value = {{data, changeCategory}}>{props.children}</NewsContext.Provider>;
// };