import React from "react";
import Map from "../../assets/images/map.png";
import FootLogo from "../../assets/images/LogoIllustration1.png";
import { Time } from "@styled-icons/boxicons-solid/Time";
import { Email } from "@styled-icons/evaicons-solid/Email";
import { Telephone } from "@styled-icons/foundation/Telephone";
import { Mobile } from "@styled-icons/boxicons-solid/Mobile";
import { Facebook } from "@styled-icons/boxicons-logos/Facebook";
import { Address } from "@styled-icons/entypo/Address";
import { Copyright } from "@styled-icons/boxicons-regular/Copyright";
import Con from "./Contacts.style";

export default function Contacts() {
  return (
    <Con>
      <Con.Column>
        <Con.Bg>
          <img src={FootLogo} alt="bg" />
        </Con.Bg>
        <Con.Head>Leave us a message</Con.Head>
        <div>
          <input
            id="name"
            placeholder="Enter Name:"
            type="text"
            style={{ width: 250 }}
          />
        </div>
        <div>
          <input
            id="email"
            placeholder="Enter Email:"
            type="text"
            style={{ width: 250 }}
          />
        </div>
        <label for="msg" style={{ color: "white" }}>
          Message:
        </label>
        <textarea id="name" type="text" style={{ width: 250 }} />
        <Con.Button type="button" style={{ width: 250 }}>
          Send
        </Con.Button>

        <Con.Texts>
          <Copyright width={15} height={15} />
          2021 RoyaltyLearners Pte Ltd Reg.No.20123789123D All Right Reserved.
        </Con.Texts>
      </Con.Column>
      {/* 2nd Row */}
      <Con.Column>
        <Con.Head>FOR INQUIRIES:</Con.Head>
        <Con.Icons>
          <Email width={30} height={30} />
          contactus@royaltylearners.ph
        </Con.Icons>
        <Con.Icons>
          <Telephone width={30} height={30} />
          (+8) 412-123-1234
        </Con.Icons>
        <Con.Icons>
          <Mobile width={30} height={30} />
          +63 935 415 0784
        </Con.Icons>
        <Con.Icons>
          <Facebook width={30} height={30} />
          www.facebook.com/royaltyleaners
        </Con.Icons>

        <Con.Head>OPERATING HOURS:</Con.Head>
        <Con.Icons>
          <Time width={30} height={30} />
          Monday-Friday 8am - 5pm
        </Con.Icons>

        <Con.Head>FIND US:</Con.Head>
        <Con.Icons>
          <Address width={30} height={30} />
          Blk. 68, Cacawaka Meet Road, Sowicked, PA 15612
        </Con.Icons>
        <Con.Map>
          <img src={Map} alt="Location" />
        </Con.Map>
      </Con.Column>
    </Con>
  );
}
