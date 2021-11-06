import React, { useState } from "react";
import Card from "../Cards";
import Con from "./Service.style";
import { services } from "../../data/services.js";
import Form from "../../components/Form";
import ServiceInfo from "../../components/Form/ServiceInfo";

export default function Services() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [infoModal, setInfoModal] = useState(false);
  return (
    <Con id="services">
      <h1>Services</h1>
      <Con.Cards>
        {services.map((service, index) => (
          <Card
            key={index}
            image={service.src}
            title={service.title}
            description={service.description}
            setIsModalOpen={setIsModalOpen}
            setInfoModal={setInfoModal}
          />
        ))}
      </Con.Cards>
      <Form isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      <ServiceInfo infoModal={infoModal} setInfoModal={setInfoModal} />
    </Con>
  );
}
