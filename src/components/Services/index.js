import React, { useState } from "react";
import Card from "../Cards";
import Con from "./Services.style";
import { services } from "../../data/services.js";
import Form from "../../components/Form";
import ServiceInfo from "../../components/Form/ServiceInfo";
import Subject from './Subject.modal'

export default function Services() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [infoModal, setInfoModal] = useState(false);
  const [infoSubjectModal, setInfoSubjectModal] = useState(false);
  return (
    <Con id="services">
      {/* <h1>Services</h1> */}
      <Con.Services>
        {services.map((service, index) => (
          <Con.Service key={index}>
            <h3>{service.title}</h3>
            <div>
              <img src={service.src} alt={service.title}/>
            </div>
              <p>{service.description}</p>
              <div>
                <button>Register</button>
                <button onClick={()=> setInfoSubjectModal(true)}>See More</button>
              </div>
          </Con.Service>
        ))}
      </Con.Services>
      <Subject modal={infoSubjectModal}/>
      <Form isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      <ServiceInfo infoModal={infoModal} setInfoModal={setInfoModal} />
    </Con>
  );
}
