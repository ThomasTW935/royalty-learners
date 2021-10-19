import React, { useState } from "react";
import Card from "../../components/Cards";
import Con from "./Service.style";
import { services } from "../../data/services.js";
import Form from "../../components/Form";

export default function Services() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <Con id="services">
      <h1>Services</h1>
      <Con.Cards>
        {services.map((service) => (
          <Card
            image={service.src}
            description={service.description}
            setIsModalOpen={setIsModalOpen}
          />
        ))}
      </Con.Cards>
      <Form isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </Con>
  );
}
