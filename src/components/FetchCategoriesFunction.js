import React, { useState, useEffect } from 'react'
import './Categories.css'
export default function Categories() {

  const onTrigger = (event) => {
    props.parentCallback(event.target.innerHTML);
    event.preventDefault();
  }

  const [categories, fetchCategories] = useState([])

  const getData = () => {
    fetch('http://localhost:8080/cat/all')
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
        fetchCategories(res)
      })
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      <ul>
        <li>Choose your challenge:</li>
        {categories.map((item, i) => {
          return <li key={i}  onClick={onTrigger}>{item.categoryText}</li>
        })}
      </ul>
    </>
  )
  }