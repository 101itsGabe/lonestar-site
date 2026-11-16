"use client";
import { TopBanner } from "../src/banner";
import Image from "next/image";
import { useState } from "react";

export default function PrincessTeaParties() {
  const [ifDeluxeProvide, setDeluxeP] = useState(false);
  const [ifDeluxeCustomer, setDC] = useState(false);
  const [ifDeluxeIternary, setDIbtn] = useState(false);
  const [ifStandardProvide, setSP] = useState(false);
  const [ifStandardCustomer, setSC] = useState(false);
  const [ifStandardIternary, setSI] = useState(false);
  const [deluxeDetails, setDeluxe] = useState([
    "1 Hour of Setup before Party Start Time",
    "Tea Table and Chairs, Table Linens and Table Decor, China, Tea Cups, and Place Settings for up to 16 Participating Children",
    "A Customized Menu of Tea Sandwiches, Fruit, Desserts, and Drinks for Children",
    "A Princess Makeover Station with a Costumed Fairy Godmother to lead princess makeovers",
    "Princess Costume Dress Up Station with dress-up dresses for little princesses to wear for the duration of the party",
    "Princess Costume Dress Up Station with dress-up dresses for little princesses to wear for the duration of the party",
    "Red Carpet",
    "Sound System, Microphones, Crafts, and Games",
  ]);
  const [deluxeItinerary, setDI] = useState([
    "Princess Grand Entrance and Meet & Greet",
    "Makeover Fairy Godmother  to perform makeovers on guests one by one",
    "Tea Party & Etiquette Lessons",
    "Interactive Storytime",
    "Princess Lessons and Princess Parade",
    "Live Singing Performance",
    "Princess Dance Party",
    "Freeze Dance Games",
    "Red Carpet Fashion Show",
    "Themed Pass The Parcel Game",
    "Deluxe Princess Craft",
    "Customized Princess Coloring Pages",
    "Photo Time with the Princess at a themed Photo Backdrop",
    `Singing “Happy Birthday”`,
    "Special Coronation Ceremony Including a Tiara & Official Princess Certificate",
  ]);

  const [standardDetails, setSDetails] = useState([
    "30 Minutes of Setup before Party Start Time",
    "Tea Table Linens and Decor, China, Tea Cups, and Place Settings for up to 12 Participating Children",
    "A Standard Menu of Tea Sandwiches, Fruit, Desserts, and Drinks for Children",
    "Sound System, Microphones, Craft, and Games",
  ]);
  return (
    <div style={{ backgroundColor: "rgb(44, 5, 46)" }}>
      <TopBanner />
      <div className="princess-tea-parties ">
        <h1>Delight Your Little Royal with a Magical Princess Tea Party!</h1>
        <div className="tea-party-info">
          <div>
            <p>
              An enchanting addition to your next celebration, this 75-minute
              experience brings magic and luxury to your front door! Our
              Standard <strong>Princess Tea Party Package</strong> includes a
              beautifully decorated tea table with tea and snacks for up to 12
              children, plus storytime, crafts, and games led by the princess of
              your choice, and a proper Tea Party host to serve tea and lead in
              etiquette lessons!
            </p>
            <p>
              Our <strong>DELUXE Princess Tea Party Package</strong> is a two
              hour experince that includes up to 16 children and covers every
              detail so you can relax and enjoy the celebration! No need to
              worry about tables, chairs, decorations, activities, or
              logistics—we’ve got it covered! Simply tell us your child’s
              favorite Princess, and{" "}
              <strong>
                we’ll handle everything from decor to set-up to clean-up!
              </strong>
            </p>
            <h1>Let the fairytale unfold!</h1>
          </div>
          <Image
            src="/WebsitePhotos/princess-tea-party.png"
            alt="tea party"
            width={500}
            height={600}
          />
        </div>
        <div className="tea-party-packages-outer">
          <h2>Princess Tea Party Packages</h2>
          <div className="tea-party-packages">
            <div>
              <h2>Parties Best For</h2>
              <p>
                <strong>Ages 5 and older</strong>. Parents who want a Perfect
                Princess Tea Party experinces for their child!
              </p>
            </div>
            <div>
              <h2>Party Set Up Time</h2>
              <p>
                We will need to arrive 30 minutes to 1 hour before the party
                start time, depending on the Package Type!
              </p>
            </div>
            <div>
              <h2>Party Reqirements</h2>
              <p>
                Your venue must have open space fpr activities! You may need to
                provide tables and chairs depnding on your package!
              </p>
            </div>
          </div>
        </div>
        <div className="tea-party-details">
          <div className="tea-party-deluxe">
            <h3>DELUXE Princess Tea Party Package</h3>
            <p>Our FULL SERVICE Premium Tea Party Experience!</p>
            <p>Details</p>
            <p>
              <u>Duration:</u> <strong>2 Hours</strong>
            </p>
            <p style={{ width: "50%" }}>
              Includes 1 Princess, 1 Royal Attendant, 1 Costumed Fairy
              Godmother, 1 Tea Party Host, and{" "}
              <strong>up to 16 participating Children</strong>
            </p>
            <p>
              <u>Price: </u> <strong>$1,300</strong>
            </p>
            <p>
              <u>Addtional Princesses: </u>$200
            </p>
            <button
              onClick={() => {
                setDeluxeP(!ifDeluxeProvide);
              }}
            >
              What We Provide
            </button>
            {ifDeluxeProvide ? (
              <ul>
                {deluxeDetails.map((obj, index) => (
                  <li>{obj}</li>
                ))}
              </ul>
            ) : null}
            <button
              onClick={() => {
                setDC(!ifDeluxeCustomer);
              }}
            >
              What you provide
            </button>
            {ifDeluxeCustomer ? (
              <p>
                Space for the tea table, makeover station, photo backdrop, and
                craft table.
              </p>
            ) : null}
            <button
              onClick={() => {
                setDIbtn(!ifDeluxeIternary);
              }}
            >
              Deluxe Tea Party Internary
            </button>
            {ifDeluxeIternary ? (
              <ul>
                {deluxeItinerary.map((obj, index) => (
                  <li key={index}>{obj}</li>
                ))}
              </ul>
            ) : null}
          </div>
          <div className="tea-party-standard">
            <h3>Standard Princess Tea Party Package</h3>
            <p>An Enchanted Tea Party Celebration!</p>
            <p>
              <strong>Details</strong>
            </p>
            <p>
              <u>Duration: </u>
              <strong>75 Minutes</strong>
            </p>
            <p style={{ width: "75%" }}>
              Includes 1 Princess, 1 Royal Attendant, 1 Tea Party Host, and{" "}
              <strong>up to 12 participating Children</strong>
            </p>
            <p>
              <u>Price:</u> <strong>$800</strong>
            </p>
            <p>
              <u>Additional Princesses: </u>{" "}
              <strong>Not available for this package</strong>
            </p>
            <button
              onClick={() => {
                setSP(!ifStandardProvide);
              }}
            >
              What we provide
            </button>
            {ifStandardProvide ? (
              <ul>
                {standardDetails.map((obj, index) => (
                  <li>{obj}</li>
                ))}
              </ul>
            ) : null}
          </div>
        </div>
        <div className="tea-party-compare">
          <h3>Not sure which Package to choose?</h3>
          <p>
            Take a look at our package comparison below to see which Tea Party
            Package would be best for you!
          </p>
        </div>
      </div>
    </div>
  );
}
