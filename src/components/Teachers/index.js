import React from "react";
import Con from "./Teachers.style";
import cover from '../../assets/images/cover.jpg'
import Nicopic from '../../assets/teachers_photo/teach1.jpg'


export default function Teachers() {
  const teachers = [
    {
      first_name: "Mylene",
      last_name: "Caruana",
      image: cover,
      credentials: [],
    },
    {
      first_name: "Mylene",
      last_name: "Caruana",
      image: cover,
      credentials: [],
    },
    {
      first_name: "Mylene",
      last_name: "Caruana",
      image: Nicopic,
      credentials: [],
    },
    {
      first_name: " Mylene",
      last_name: "Caruana",
      image: cover,
      credentials: [],
    },
    {
      first_name: "my",
      last_name: "My",
      image: cover,
      credentials: [],
    },
    {
      first_name: "len",
      last_name: "len",
      image: cover,
      credentials: [],
    },
    {
      first_name: "Mylene",
      last_name: "Caruana",
      image: cover,
      credentials: [],
    },
    {
      first_name: "Mylene",
      last_name: "Caruana",
      image: cover,
      credentials: [],
    },
  ];
  return (
    <Con>
      <Con.Title>Royalty Learning Center Teachers</Con.Title>
      <Con.List>
        {teachers.map(
          ({ first_name, last_name, image, credentials }, index) => (
            <Con.List.Item key={index}>
              <Con.ImgCon>
                <Con.ImgCon.Img
                  src={image}
                  alt={`${first_name} ${last_name}`}
                />
              </Con.ImgCon>
              <p>{`${first_name} ${last_name}`}</p>
              <button>Credentials</button>
            </Con.List.Item>
          )
        )}
      </Con.List> 
    </Con>
  );
}
