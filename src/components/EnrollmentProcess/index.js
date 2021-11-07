import React from 'react'
import { ClipboardCheckmark } from "@styled-icons/fluentui-system-regular";
import { Like, UserPlus } from "@styled-icons/boxicons-regular";
import Con from './EnrollmentProcess.style'

export default function index() {
  return (
    <Con>
        <Con.Title> Request a Tutor via our simple 3-Step Process </Con.Title>
        <Con.List>
          <li>
            <span>Step 1</span>
            <ClipboardCheckmark width={30} height={30} />
            <h3>Request</h3>
            <p>For a suitable tutor Via a 3-min call</p>
          </li>
          <li>
            <span>Step 2</span>
            <Like width={30} height={30} />
            <h3>Receive</h3>
            <p>Tutor recommendations within 24 hrs</p>
          </li>
          <li>
            <span>Step 3</span>
            <UserPlus width={30} height={30} />
            <h3>Select</h3>
            <p>A suitable tutor and start your first lesson</p>
          </li>
        </Con.List>
      </Con>
  )
}
