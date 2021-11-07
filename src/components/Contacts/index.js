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
import Con from './Contacts.style';

export default function Contacts() {
  return (
    <Con>
      <div>
        <img src={FootLogo} alt="bg" />
      </div>
      <section>
        <h2>FOR INQUIRIES:</h2>
        <p>
          <Email width={30} height={30} />
          contactus@royaltylearners.ph
        </p>
        <p>
          <Telephone width={30} height={30} />
          (+8) 412-123-1234
        </p>
        <p>
          <Mobile width={30} height={30} />
          +63 935 415 0784
        </p>
        <p>
          <Facebook width={30} height={30} />
          www.facebook.com/royaltyleaners
        </p>
      </section>
      <section>
        <h2>OPERATING HOURS:</h2>
        <p>
          <Time width={30} height={30} />
          Monday-Friday 8am - 5pm
        </p>
        <p>
          <Copyright width={30} height={30} />
          2021 RoyaltyLearners Pte Ltd Reg.No.20123789123D All Right Reserved.
        </p>
      </section>
      <section>
        <p>
          <Address width={30} height={30} />
          Blk. 68, Cacawaka Meet Road, Sowicked, PA 15612
        </p>
        <img src={Map} alt="" />
      </section>

      {/* <div>
        <h2>About Us</h2>
        <p>
          The Royalty Learning Center is a school that is based in the
          Philippines offering educational services for students with
          specialeducation needs.Our school has a team of teachers and medical
          professionals specializing in Special Education to provide a proper
          evaluation and best quality education for our students. Our school
          also has well-designed facilities suited to provide comfort,
          convenience, and productivity boost for the students, parents,
          teachers, and the school staff. We care about the growth of our
          students and we are willing to provide it for them.
        </p>
        <h2>Find Us</h2>
        
      </div> */}
      </Con>
  );
}
