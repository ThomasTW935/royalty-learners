import React from "react";
import Map from "../../assets/images/map.png";
import FootLogo from "../../assets/images/LogoIllustration1.png";
import { Time } from "@styled-icons/boxicons-solid/Time";
import { Email } from "@styled-icons/evaicons-solid/Email";
import { Telephone } from "@styled-icons/foundation/Telephone";
import { Mobile } from "@styled-icons/boxicons-solid/Mobile";
//import { Facebook } from "@styled-icons/boxicons-logos/Facebook";
import { Address } from "@styled-icons/entypo/Address";
import { Copyright } from "@styled-icons/boxicons-regular/Copyright";
import Con from "./Contacts.style";

export default function Contacts() {
  return (
    <Con>
      <div>
        <Con.Form>
          <Con.Logo>
            <img src={FootLogo} alt="bg" />
          </Con.Logo>
          <Con.Head>Leave us a message</Con.Head>
          <div>
            <label>Name:</label>
            <input id="name" placeholder="Enter Name:" type="text" />
          </div>
          <div>
            <label for="email">Email:</label>
            <input id="email" placeholder="Enter Email:" type="text" />
          </div>
          <div>
            <label for="msg">Message:</label>
            <textarea id="name" type="text" />
          </div>
          <button type="button">Send</button>
        </Con.Form>

        <Con.Icons>
          <span marginTop={205}><Copyright size={16} />
            2021 RoyaltyLearners Pte Ltd Reg.No.20123789123D All Right Reserved.
          </span>
        </Con.Icons>
      </div>
      {/* 2nd Row */}
      <div>
        <Con.Info >
          <Con.Head>FOR INQUIRIES:</Con.Head>
          <div>
            <Con.Icons>
              <Email size={16} />
              <span>contactus@royaltylearners.ph</span>
            </Con.Icons>
            <Con.Icons>
              <Telephone size={16} />
              <span>(+8) 412-123-1234/</span>
            </Con.Icons>
            <Con.Icons>
              <Mobile size={16} />
              <span>+63 935 415 0784</span>
            </Con.Icons>
          </div>

        {/* <section>
          <Con.Icons>
            <Facebook size={16} />
            <span>www.facebook.com/royaltyleaners</span>
          </Con.Icons>
        </section> */}
          <Con.Head>OPERATING HOURS:</Con.Head>
          <div>
            <Con.Icons>
              <Time size={16} />
              <span>Monday-Friday 8am - 5pm</span>
            </Con.Icons>
          </div>
          <Con.Head>FIND US:</Con.Head>
          <div>
            <Con.Icons full={true}>
              <Address size={16} />
              <span>Blk. 68, Cacawaka Meet Road, Sowicked, PA 15612</span>
            </Con.Icons>
          </div>
          <Con.Map>
            <img src={Map} alt="Location" />
          </Con.Map>
        </Con.Info>
      </div>
    </Con>
  );
}
