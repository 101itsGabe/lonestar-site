"use client";
import { TopBanner } from "../src/banner";
import { useState } from "react";
import Image from "next/image";
export default function CorprateCommunity() {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [orgName, setOrgName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [rotateStr, setRotate] = useState([
    "High Quality Characters",
    "Reliable & Professional",
    "Talented Performers",
    "Magicl Moments",
    "Fully Customizable",
  ]);
  return (
    <div className="corprate-community">
      <TopBanner />
      <div className="corprate-header">
        <Image
          src="/WebsitePhotos/lcl-corprate.jpg"
          alt="spin corprate"
          width={600}
          height={400}
        />
        <div>
          <h1>We Make MAGIC for Your Business!</h1>
          <p>
            With our wide array of community event packages and fully
            customizable corporate event plans, we can make your wildest event
            dreams come true!
          </p>
        </div>
      </div>
      <div className="corprate-info">
        <ul>
          {rotateStr.map((str, index) => (
            <li key={index}>
              <p>{str}</p>
              {index <= rotateStr.length - 1 ? <p>☆</p> : null}
            </li>
          ))}
        </ul>
        <button className="button-template">Book your Dream Event!</button>
        <div>
          <div>
            <p style={{ fontSize: 18 }}>
              Turn Your Business into a Storybook Experience!
            </p>
            <h2>The Most Magical Events in Austin TX!</h2>
            <p style={{ fontSize: 24 }}>
              Themed Character Events drive brand new audiences to your space &
              bring your business a new line of revenue! By partnering with us,
              you take the guesswork out of creating new experiences for your
              clients: we know what works, and can create the perfect event for
              you!
            </p>
            <h3>WE OFFER…</h3>
            <p style={{ fontSize: 20, width: "50%" }}>
              Meet & Greets, Singing Performances, Makeovers, Crafts, Dining
              Experiences, Tea Parties, & MORE!
            </p>
          </div>
          <Image
            src="/WebsitePhotos/spin-corprate.jpg"
            alt="spin corprate"
            width={600}
            height={400}
          />
        </div>
      </div>
      <div className="corprate-special">
        <h2>Corporate Events are our SPECIALTY!</h2>
        <p>
          A well-established character entertainment company, Lone Star
          Character Entertainment LLC began making magic in 2020! We believe in
          creating real and memorable experiences for every child we meet! We
          accomplish this by creating seamless and magical events featuring our
          highly trained, talented performers dressed in the highest quality
          costumes to entertain at events and venues across Central Texas! While
          there are many character entertainment companies in our area, Lone
          Star Character Entertainment is YOUR perfect event partner!
        </p>
        <div className="corprate-special-traits">
          <div>
            <h3>Advertising</h3>
            <p>
              Our marketing team will work with you to make your event the talk
              of the town! We have a dedicated base of followers who are always
              looking to attend brand new events with our characters!
            </p>
          </div>
          <div>
            <h3>Talent</h3>
            <p>
              Our performers are highly trained professionals who sing LIVE! All
              of our event staff are experienced event leaders who are dedicated
              to making your event Practically Perfect!
            </p>
          </div>
          <div>
            <h3>Insured</h3>
            <p>
              We are fully licensed and insured. There is nothing to fear when
              you book with us! We can safely perform in any space or venue.
              Just request our COI, and we’ll send it over hassle-free!
            </p>
          </div>
          <div>
            <h3>Convenient</h3>
            <p>
              We work with YOU to create the event of your dreams! From a
              30-minute meet and greet with one character to a 2-hour theatrical
              dining experience with 8+ princesses, we can make your dreams come
              true!
            </p>
          </div>
        </div>
        <button className="button-template">Book Your Dream Event</button>
      </div>
      <div className="corprate-services">
        <div>
          <Image
            src="/WebsitePhotos/superman.jpg"
            alt="superman photo"
            width={300}
            height={100}
          />
          <div>
            <h3>Meet & Greets</h3>
            <p>
              Photos, Autographs, and interactions with every guest, Meet &
              Greets are the perfect way to bring excitement to your event! Add
              on a backdrop or autograph cards for a magical experience!
            </p>
          </div>
        </div>
        <div>
          <Image
            src="/WebsitePhotos/superman.jpg"
            alt="superman photo"
            width={300}
            height={100}
          />
          <div>
            <h3>Story Time Performances</h3>
            <p>
              A special story time performance featuring songs and interactions
              from the character’s story! With audience participation, our
              storytimes are perfect for schools & libraries!
            </p>
          </div>
        </div>
        <div>
          <Image
            src="/WebsitePhotos/superman.jpg"
            alt="superman photo"
            width={300}
            height={100}
          />
          <div>
            <h3>Live Singing Performance</h3>
            <p>
              Our performers can sing live, dance, and put on a magical
              performance for your event guests! Whether it’s a full princess
              concert or a special performance of Let It Go, we can make it
              happen!
            </p>
          </div>
        </div>
        <div>
          <Image
            src="/WebsitePhotos/superman.jpg"
            alt="superman photo"
            width={300}
            height={100}
          />
          <div>
            <h3>Games & Themed Experiences</h3>
            <p>
              From “Royalty Lessons” to our “Super Hero Obstacle Course”, our
              games and themed experiences have everything you need to keep your
              guests entertained and enchanted!
            </p>
          </div>
        </div>
        <div>
          <Image
            src="/WebsitePhotos/superman.jpg"
            alt="superman photo"
            width={300}
            height={100}
          />
          <div>
            <h3>Themed Crafts</h3>
            <p>
              Looking for a creative DIY for your event? Our themed crafts are
              the perfect add-on to any event! From hero masks to princess
              tiaras, our crafts make the perfect keepsake!
            </p>
          </div>
        </div>
        <div>
          <Image
            src="/WebsitePhotos/superman.jpg"
            alt="superman photo"
            width={300}
            height={100}
          />
          <div>
            <h3>Dining Experiences</h3>
            <p>
              Want to attract more families to your restaurant or cafe? Our
              special Dining Experiences are the perfect way to bring in more
              customers and create a magical atmosphere for your guests!
            </p>
          </div>
        </div>
        <div>
          <Image
            src="/WebsitePhotos/superman.jpg"
            alt="superman photo"
            width={300}
            height={100}
          />
          <div>
            <h3>Makeovers & Face Painting</h3>
            <p>
              Our Makeover Fairies and Face Painters bring magic to any event!
              Our makeovers include hair glitter, nail polish, and sparkly
              makeup, perfect for little princesses!
            </p>
          </div>
        </div>
        <div>
          <Image
            src="/WebsitePhotos/superman.jpg"
            alt="superman photo"
            width={300}
            height={100}
          />
          <div>
            <h3>Custom Stage Shows</h3>
            <p>
              There’s no better way to tell your story than having a beloved
              character speak for your brand! Our characters spread messages of
              kindness and bravery, and can bring your story to life!
            </p>
          </div>
        </div>
      </div>
      <div className="corprate-booking">
        <div className="corprate-booking-info">
          <h3>Don't Delay!</h3>
          <h3 style={{ width: "80%" }}>Book your Dream Event Today!</h3>
          <p>
            For Pricing and Info on how we can work with your organization,
            please fill out the form here!{" "}
          </p>
          <p>We can’t wait to bring your event dreams to life!</p>
        </div>
        <div className="corprate-booking-form">
          <p>Name</p>
          <div>
            <div>
              <p>First Name</p>
              <input
                id="fname"
                type="text"
                value={fName}
                onChange={(e) => setFName(e.target.value)}
              />
            </div>
            <div>
              <p>Last Name</p>
              <input
                id="fname"
                type="text"
                value={lName}
                onChange={(e) => setLName(e.target.value)}
              />
            </div>
          </div>

          <p>Organization or Company Name</p>
          <input
            id="fname"
            type="text"
            value={orgName}
            onChange={(e) => setOrgName(e.target.value)}
          />

          <p>Email</p>
          <input
            id="fname"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p>Phone</p>
          <input
            id="fname"
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}
