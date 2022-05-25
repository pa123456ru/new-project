import React from "react"

const Catg = () => {
  const data = [
    {
      cateImg: "./images/category/cat-1.png",
      cateName: "Fiction",
    },
    {
      cateImg: "./images/category/cat-1.png",
      cateName: "Non-Fiction",
    },
    {
      cateImg: "./images/category/cat-1.png",
      cateName: "Education",
    },
    {
      cateImg: "./images/category/cat-1.png",
      cateName: "Health & Fitness",
    },
    {
      cateImg: "./images/category/cat-1.png",
      cateName: "Sports",
    },
  
  ]
  return (
    <>
      <div className='category'>
        <div className='chead d_flex'>
          <h1>Best Sellers </h1>
        </div>
        {data.map((value, index) => {
          return (
            <div className='box f_flex' key={index}>
              <img src={value.cateImg} alt='' />
              <span>{value.cateName}</span>
            </div>
          )
        })}
        <div className='box box2'>
          <button>View All Books</button>
        </div>
      </div>
    </>
  )
}

export default Catg
