// import React, { useEffect, useState } from 'react'
// import "./App.css"
// export default function App() {

//   const [products, setProducts] = useState([]);
//   const [pages, setPages] = useState(1);
//   const fetchProducts = async () => {
//     const response = await fetch("https://dummyjson.com/products?limit=100");
//     const data = await response.json();
//     console.log("data:", data);
//     if (data && data.products)
//       setProducts(data.products)
//   }
//   useEffect(() => {
//     fetchProducts();
//   }, [])
//   function handlePages(selectedPage) {
//     if(selectedPage>=1&&selectedPage<=(products.length / 10)&&selectedPage!=pages)
//     setPages(selectedPage)
//   }
//   console.log([...Array(products.length / 10)]);
//   return (
//     <div>
//       {products.length == 0 ? <div>Loading..</div> : <div className='products'>
//         {products.slice(pages * 10 - 10, pages * 10).map((item, index) => <div className='products__single'>
//           <h2>Title:{item.title}</h2>
//           <img src={item.thumbnail} alt="" />
//         </div>)}
//       </div>}
//       {products.length > 0 && <div className='pagination'>
//         <span onClick={() => handlePages(pages - 1)}  className={pages>1?"":"pagination_disabled"}>prev</span>
//         <span>{[...Array(products.length / 10)].map((_, i) => <span className={pages === i + 1 ? "selected" : ""} onClick={() => handlePages(i + 1)}>{i + 1}</span>)}</span>
//         <span onClick={() => handlePages(pages + 1)}  className={pages<products.length/10?"":"pagination_disabled"} >next</span></div>}
//     </div>
//   )
// }
import React, { useEffect, useState } from 'react'
import "./App.css"
export default function App() {

  const [products, setProducts] = useState([]);
  const [pages, setPages] = useState(1);
  const[totalPages,setTotalPages]=useState(0);
  const fetchProducts = async () => {
    const response = await fetch(`https://dummyjson.com/products?limit=10&skip=${pages*10-10}`);
    const data = await response.json();
    console.log("data:", data);
    if (data && data.products){
      setProducts(data.products);
 setTotalPages(Math.ceil(data.total / 10));
    }

  }
  useEffect(() => {
    fetchProducts();
  }, [pages])
  function handlePages(selectedPage) {
    if(selectedPage>=1&&selectedPage<=totalPages&&selectedPage!=pages)
    setPages(selectedPage)
  }
  console.log([...Array(products.length / 10)],totalPages);
  return (
    <div>
      {totalPages == 0 ? <div>Loading..</div> : <div className='products'>
        {products.map((item, index) => <div className='products__single'>
          <h2>Title:{item.title}</h2>
          <img src={item.thumbnail} alt="" />
        </div>)}
      </div>}
      {totalPages > 0 && <div className='pagination'>
        <span onClick={() => handlePages(pages - 1)}  className={pages>1?"":"pagination_disabled"}>prev</span>
        <span>{[...Array(totalPages)].map((_, i) => <span className={pages === i + 1 ? "selected" : ""} onClick={() => handlePages(i + 1)}>{i + 1}</span>)}</span>
        <span onClick={() => handlePages(pages + 1)}  className={pages<totalPages?"":"pagination_disabled"} >next</span></div>}
    </div>
  )
}
