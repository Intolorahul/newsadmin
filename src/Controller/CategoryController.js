

const categoryGet = async ()=>{
    try {
        const res = await fetch(`${process.env.REACT_APP_API_URL}category`, {
          method: 'get',
          headers: {
            'content-Type': 'application/json',
          },
        });
        const data = await res.json();
        return data;
      } catch (error) {
        console.log(error);
      }
 };

//  const categoryGetParentData = async ()=>{
//   try {
//       const res = await fetch(`${process.env.REACT_APP_API_URL}categoryCountry`, {
//         method: 'get',
//         headers: {
//           'content-Type': 'application/json',
//         },
//       });
//       const data = await res.json();
//       return data;
//     } catch (error) {
//       console.log(error);
//     }
// };

const createCategorypost = async (categoryData)=>{
    try {
        const res = await fetch(`${process.env.REACT_APP_API_URL}category`, {
          method: 'post',
          headers: {
            'content-Type': 'application/json',
          },
          body: JSON.stringify(categoryData),
        });
        const data = await res.json();
        return data;
      } catch (error) {
        console.log(error);
      }
};

const categoryDelete = async id => {
    // console.log('object', id);
    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}category/`+ id, {
        method: 'delete',
        headers: {
          'content-Type': 'application/json',
        },
      });
      const data = await res.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const updateCategory = async (category_id,updaetData) => {
    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}category/`+ category_id, {
        method: 'put',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updaetData),
      });
      const data = await res.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  };

export {
    categoryGet,createCategorypost,categoryDelete, updateCategory
}

//categoryUpdate