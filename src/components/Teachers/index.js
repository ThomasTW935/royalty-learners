import React from "react";
import Con from "./Teachers.style";
import cover from '../../assets/images/cover.jpg'

export default function Teachers() {
  const teachers = [
    {
      first_name: "Mylene",
      last_name: "Caruana",
      image: cover,
      credentials: [],
    },
    {
      first_name: "Nico",
      last_name: "Nem",
      image: cover,
      credentials: [],
    },
    {
      first_name: "Nico",
      last_name: "Niconi",
      image: cover,
      credentials: [],
    },
    {
      first_name: " My My My",
      last_name: "Delilah",
      image: cover,
      credentials: [],
    },
    {
      first_name: "Daryl",
      last_name: "Thomas",
      image: cover,
      credentials: [],
    },
    {
      first_name: "Daryl",
      last_name: "Thomas",
      image: cover,
      credentials: [],
    },
    {
      first_name: "Daryl",
      last_name: "Thomas",
      image: cover,
      credentials: [],
    },
    {
      first_name: "Daryl",
      last_name: "Thomas",
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
