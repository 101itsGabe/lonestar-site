import { TopBanner } from "../src/banner";
import Image from "next/image";

export default function About() {
  return (
    <div style={{ backgroundColor: "rgb(44, 5, 46)" }}>
      <TopBanner />
      <div className="about-page">
        <div className="about-page-top">
          <Image
            src="/WebsitePhotos/spidey-background.jpg"
            alt="spidey background"
            width={4000}
            height={2000}
          />
          <h1>About Us</h1>
        </div>
        <div className="our-mission">
          <Image
            src="/WebsitePhotos/spin_ghostie.jpg"
            alt="spin & ghost spidey"
            width={250}
            height={250}
          />
          <div>
            <h1>Our Mission</h1>
            <p>
              Our mission is to empower children to become the princess or hero
              they are inside by bringing their favorite fictional role models
              to life in authentic, meaningful ways that create real, memorable
              magic!
            </p>
            <button className="button-template">Learn More</button>
          </div>
        </div>
        <h2>Our Core Values</h2>
        <p>
          With every interaction and experience we create, we keep our core
          values at the forefront of our plans and actions. We believe that
          every experience with Lone Star Character Entertainment should be:
        </p>

        <h3>Why character entertainment?</h3>
        <p>
          With our birthday party characters, we bring theme park quality magic
          right to your front door! Character parties are more personal and
          tailored than traveling to a theme park to visit your child&apos;s
          hero. Make your child&rsquo;s birthday party in Austin, TX, a magical
          and memorable one!
        </p>

        <div className="about-cast-members">
          <h3>Our Cast Members</h3>
          <p>
            All of our cast members are highly trained and talented actors,
            actresses, singers, dancers, and performers with experience in child
            care, teaching, camp counseling, and more! We know a lot about
            performing and working with children. Additionally, we go to great
            lengths to make sure our cast is trained and fully prepared to
            create exciting experiences and memories that will last for every
            event!
          </p>
          <p style={{ fontWeight: "bold" }}>
            Please note, that while we do our best to accommodate cast member
            requests, we cannot guarantee the availability of any cast member
            for your event. We always cast our performers as close to the
            accurate representation as possible.
          </p>
        </div>
      </div>
    </div>
  );
}
