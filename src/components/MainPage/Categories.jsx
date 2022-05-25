import React from "react"

const Categories = () => {
  const data = [
    {
      cateImg: "./images/category/cat1.png",
      cateName: "Arts & Photography",
    },
    {
      cateImg:  "./images/category/cat1.png",
      cateName: "Biographies & Memoir",
    },
    {
      cateImg:  "./images/category/cat1.png",
      cateName: "Dictionary & Language",
    },
    {
      cateImg: "./images/category/cat1.png",
      cateName: "Literature & Literary Studies",
    },
    {
      cateImg: "./images/category/cat1.png",
      cateName: "Fiction",
    },
    {
      cateImg: "./images/category/cat1.png",
      cateName: "History & Humanities",
    },
    {
      cateImg: "./images/category/cat1.png",
      cateName: "Health & Beauty",
    },
    {
      cateImg: "./images/category/cat1.png",
      cateName: "Business & Economics",
    },
    
  ]

  return (
    <>
      <div className='category'>
        {data.map((value, index) => {
          return (
            <div className='box f_flex' key={index}>
              <img src={value.cateImg} alt='' />
              <span>{value.cateName}</span>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Categories
