import { collectMeta } from "next/dist/build/utils";
import { TopBanner } from "../src/banner";
import { Footer } from "../src/footer";
import Image from "next/image";
export default function Packages() {
  let princessDetails = [
    "Grand Entrance and Meet & Greet",
    "Sing-along Performance",
    "Princess Dance Party",
    "Wishing Ceremony",
    "Photo Time with the Character",
    "Empowering Princess Coronation Ceremony",
    "Special Certificate and Tiara for the Child of Honor",
    "Happy Birthday Song led by Character",
  ];

  let heroDetails = [
    "Grand Entrance and Meet & Greet",
    "Themed Superhero Lessons",
    "Hero Obstacle Course",
    "Photo Time with the Hero",
    "Empowering Hero Initiation Ceremony",
    "Special Certificate and Medal for the Child of Honor",
    "Happy Birthday Song led by Hero",
  ];

  let mascotDetails = [
    "Grand Entrance and Meet & Greet",
    "Dance Party",
    "Birthday Parade March",
    "Party Games",
    "Photo Time with the Character",
    "Inspiring Birthday Ceremony",
    "Special Certificate for Child of Honor",
    "Happy Birthday Song led by Character",
  ];

  let specialDetails = [
    "Grand Entrance and Meet & Greet",
    "Dance Party",
    "Character Lessons and Parade March",
    "Bubble Party",
    "Photo Time with the Character",
    "Inspiring Birthday Ceremony",
    "Special Certificate for Child of Honor",
    "Happy Birthday Song led by Character",
  ];
  return (
    <div
      style={{
        backgroundColor: "rgb(44, 5, 46)",
        fontFamily: "Fredoka, sans-serif",
      }}
    >
      <TopBanner />
      <div className="packages-container">
        <h1 style={{ fontSize: 75 }}>Packages & Pricing</h1>
        <button
          style={{
            borderRadius: 20,
            padding: 10,
            backgroundColor: "purple",
            width: "15%",
          }}
        >
          Book Now
        </button>
        <div className="packages-text">
          <h2>Your Party Dream Come True Awaits!</h2>
          <p>
            With our extensive lineup of characters, luxurious costumes, and
            professionally trained performers, a Birthday Party with Lone Star
            Character Entertainment is the MOST MAGICAL Character Experience in
            Austin and Central Texas!
          </p>
          <p>
            Don’t just take our word for it; check out our 200+ Five-Star
            Reviews on Google, Facebook, GigSalad, and Yelp!
          </p>
          <p>
            {" "}
            We can’t wait to make your next celebration magical and memorable!
          </p>
        </div>
        <h2>Princess & Fantasy Packages</h2>
        <div className="packages-row">
          <PackageCard
            name="Royal Celebration"
            price={245}
            numChildren="Unlimited Children"
            time={30}
            staffing="1 Character and 1 Event Assistant"
            addChars={125}
            details={princessDetails}
            picUrl="/WebsitePhotos/cinderella.png"
            color="rgb(197, 109, 202)"
          />
          <PackageCard
            name="Glass Slipper"
            price={295}
            numChildren="Unlimited Children"
            time={45}
            staffing="1 Character and 1 Event Assistant"
            addChars={150}
            details={[
              "Everything in our 30 Minute Package",
              "Royalty Lessons & Princess Parade",
              "Customized Coloring Pages",
            ]}
            picUrl="/WebsitePhotos/elsa.png"
          />
          <PackageCard
            name="Dream Come True"
            price={345}
            numChildren="Up to 20 Children"
            time={60}
            staffing="1 Character and 1 Event Assistant"
            addChars={175}
            details={[
              "Everything in our 45 Minute Package",
              "Interactive Storytime",
              "Your Choice of Deluxe Princess Craft",
            ]}
            picUrl="/WebsitePhotos/ariel.png"
            color="rgb(197, 109, 202)"
          />
        </div>

        <h2>Hero & Action Packages</h2>

        <div className="packages-row">
          <PackageCard
            name="Super Celebration"
            price={245}
            numChildren="Unlimited Children"
            time={30}
            staffing="1 Character and 1 Event Assistant"
            addChars={125}
            details={heroDetails}
            picUrl="/WebsitePhotos/rumi-zoey.png"
            color="rgb(60, 118, 185)"
          />
          <PackageCard
            name="The Marvelous"
            price={295}
            numChildren="Unlimited Children"
            time={45}
            staffing="1 Character and 1 Event Assistant"
            addChars={150}
            details={heroDetails}
            picUrl="/WebsitePhotos/spidey-45min.png"
          />
          <PackageCard
            name="The Ultimate"
            price={345}
            numChildren="Up to 20 Children"
            time={60}
            staffing="1 Character and 1 Event Assistant"
            addChars={175}
            details={heroDetails}
            picUrl="/WebsitePhotos/darth-vader.png"
            color="rgb(60, 118, 185)"
          />
        </div>

        <h2>Mascot Packages</h2>

        <div className="packages-row">
          <PackageCard
            name="Oh Boy"
            price={350}
            numChildren="Unlimited Children"
            time={30}
            staffing="1 Character, 1 Party Host, and 1 Event Assistant"
            addChars={125}
            details={mascotDetails}
            picUrl="/WebsitePhotos/bluey-bingo.png"
            color="rgb(231, 142, 74)"
          />
          <PackageCard
            name="Say Cheers"
            price={450}
            numChildren="Unlimited Children"
            time={45}
            staffing="1 Character, 1 Party Host, and 1 Event Assistant"
            addChars={150}
            details={mascotDetails}
            picUrl="/WebsitePhotos/mickey-minnie.png"
          />
          <PackageCard
            name="Hot Dog"
            price={650}
            numChildren="Up to 20 Children"
            time={60}
            staffing="2 Character, 1 Party Host, and 1 Event Assistant"
            addChars={200}
            details={mascotDetails}
            picUrl="/WebsitePhotos/jack-skellington.png"
            color="rgb(231, 142, 74)"
          />
        </div>

        <h2>Specialty and Seasonal Character Packages</h2>
        <div className="packages-row">
          <PackageCard
            name="Pop in"
            price={245}
            numChildren="Unlimited Children"
            time={30}
            staffing="1 Character and 1 Event Assistant"
            addChars={125}
            details={specialDetails}
            picUrl="/WebsitePhotos/rainbow-princess.png"
            color="rgb(46, 131, 49)"
          />
          <PackageCard
            name="Suprise"
            price={295}
            numChildren="Unlimited Children"
            time={45}
            staffing="1 Character and 1 Event Assistant"
            addChars={150}
            details={specialDetails}
            picUrl="/WebsitePhotos/jack-sparrow.png"
          />
          <PackageCard
            name="Pop in"
            price={245}
            numChildren="Unlimited Children"
            time={30}
            staffing="1 Character and 1 Event Assistant"
            addChars={125}
            details={specialDetails}
            picUrl="/WebsitePhotos/wicked.png"
            color="rgb(46, 131, 49)"
          />
        </div>

        <div className="deluxe-packages-outer">
          <h2>Deluxe Experiences</h2>
          <div className="deluxe-packages-container">
            <div className="deluxe-packages">
              <h2>Better Together</h2>
              <p style={{ fontWeight: "bold" }}>1 Hour - Up to 25 Children</p>
              <h2 style={{ fontSize: 30 }}>$475</h2>
              <p>
                <strong>2 Characters </strong>of your choice and 1 Event
                Assistant
              </p>
              <p>Details</p>
              <ul style={{ listStyleType: "disc", padding: 36 }}>
                <li>Grand Entrance and Meet & Greet</li>
                <li>Sing-along Performance and/or Interactive Storytime</li>
                <li>Freeze Dance Games</li>
                <li>Themed Character Training</li>
                <li>Hero Obstacle Course or Princess Dance Lesson</li>
                <li>Hero Parachute or Princess Games</li>
                <li>Hero Target Practice or Princess Craft</li>
                <li>Photo Time with the Character</li>
                <li>Inspirational Birthday Ceremony</li>
                <li>Special Certificate and Gift for the Child of Honor</li>
                <li>Happy Birthday Song led by Character</li>
              </ul>

              <button className="button-template">Book This Package!</button>
            </div>
            <Image
              src="/WebsitePhotos/lcl-3.png"
              alt="deluxe 1"
              width={500}
              height={250}
            />
          </div>
          <div className="deluxe-packages-container">
            <Image
              src="/WebsitePhotos/lcl-4.png"
              alt="deluxe 2"
              width={500}
              height={250}
            />
            <div className="deluxe-packages">
              <h2>Bibbidi Bobbidi Boo</h2>
              <p>Princess Makeover Party</p>
              <p>
                <strong>90 Minutes - Up to 15 Children*</strong>
              </p>
              <h2>$799</h2>
              <p>
                1 Character of your choice, 1 Event Assistant, 1 Fairy Godmother
              </p>
              <p>
                <strong>Details</strong>
              </p>
              <ul style={{ listStyleType: "disc" }}>
                <li>Everything in our “Dream Come True” Princess Package</li>
              </ul>
              <p>
                <strong>PLUS</strong>
              </p>
              <ul
                style={{
                  listStyleType: "disc",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <li style={{ width: "75%" }}>
                  Makeovers for Each Guest (both Boys & Girls) by a Costumed
                  Fairy Godmother
                  <ul style={{ listStyleType: "disc", paddingLeft: "2.5rem" }}>
                    <li>
                      <em>
                        Makeovers include Eyeshadow, Blush, Lip Gloss, Stick-On
                        Face Gems, & Pixie Dust Glitter for Little Ladies,
                        Temporary Tattoos & Hero Cape and Mask for Little
                        Gentlemen
                      </em>
                    </li>
                  </ul>
                </li>
              </ul>
              <ul style={{ listStyleType: "disc" }}>
                <li>Princess Friendship Bracelet Craft</li>
                <li>
                  *2 hours is recommended for parties with more than 15
                  participating children
                </li>
              </ul>
              <button className="button-template">BOOK THIS PACKAGE</button>
            </div>
          </div>
          <div className="deluxe-packages-container">
            <div className="deluxe-packages">
              <h2>Best Birthday Ever</h2>
              <p>
                <strong>Deluxe Princess Makeover & Craft Party</strong>
              </p>
              <p
                style={{
                  backgroundColor: "rgb(51, 10, 56)",
                  padding: 5,
                  borderRadius: 10,
                }}
              >
                <strong>2 Hours with 2 characters of your choice!</strong>
              </p>
              <h2 style={{ fontSize: 30 }}>Up to 10 Children - $950</h2>
              <h2 style={{ fontSize: 30 }}>Up to 20 Children - $1250</h2>
              <h2 style={{ fontSize: 30 }}>Up to 30 Children - $1550</h2>
              <p>1 Event Assistant & 1 Costumed Fairy Godmother</p>
              <p>
                <strong>Details</strong>
              </p>
              <ul style={{ listStyleType: "disc" }}>
                <li>Everything in our “Dream Come True” Princess Package</li>
              </ul>
              <p>
                <strong>PLUS</strong>
              </p>
              <ul
                style={{
                  listStyleType: "disc",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <li style={{ width: "75%" }}>
                  <em>DELUXE</em> Makeovers for Each Guest (both Boys & Girls)
                  by a Costumed Fairy Godmother
                  <ul style={{ listStyleType: "disc", paddingLeft: "2.5rem" }}>
                    <li>
                      <em>
                        <em>DELUXE</em> Makeovers include Eyeshadow, Blush, Lip
                        Gloss, Stick-On Face Gems, & Pixie Dust Glitter for
                        Little Ladies, Temporary Tattoos & Hero Cape and Mask
                        for Little Gentlemen
                      </em>
                    </li>
                  </ul>
                </li>
              </ul>
              <ul
                style={{
                  maxWidth: "75%",
                  margin: "0 auto",
                  listStyleType: "disc",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {" "}
                <li>Princess Friendship Bracelet Craft</li>
                <li>Themed Pass the Parcel Game</li>
                <li>
                  Costume Dress Up Trunk full of dress-up outfits to wear for
                  the duration of the party
                </li>
              </ul>
              <h2>Addtional Characters: $225</h2>
              <button className="button-template">BOOK THIS PACKAGE</button>
            </div>
            <Image
              src="/WebsitePhotos/moana.jpg"
              alt="deluxe 2"
              width={500}
              height={250}
            />
          </div>
        </div>

        <div className="package-playdates">
          <div className="package-playdates-info">
            <h1>Character Playdates</h1>
            <p>
              Our Character Playdates are intimate, personalized experiences
              designed for meaningful one-on-one connections. Whether you're
              celebrating a special milestone or simply creating a magical
              surprise, these private visits allow your child to spend dedicated
              time with their favorite character in a calm, comfortable setting.
              Our playdates are especially impactful for children who may feel
              overstimulated in larger group environments, as well as families
              navigating medical challenges or hardship who could use a little
              extra joy.
            </p>
            <p>
              <strong>Please Note:</strong> Character Playdates are exclusively
              offered in private homes or hospital rooms and are{" "}
              <strong>NOT</strong> intended to replace a traditional birthday
              party appearance. Rather than following a structured party
              itinerary, our performers focus on genuine connection by allowing
              the child to guide their experience. Your child can choose how
              they’d like to spend their time (reading stories, coloring,
              crafting, singing and dancing, playing outside, or simply sharing
              conversation) while our performers create meaningful,
              heart-centered magic every step of the way.
            </p>
          </div>

          <div className="package-playdate-cards">
            <div>
              <div>
                <Image
                  src="/WebsitePhotos/barbie.jpg"
                  alt="barbie png"
                  width={400}
                  height={200}
                />
                <div>
                  <h3>30 Minutes</h3>
                  <p>Up to 5 Children</p>
                  <h2>$125</h2>
                  <p>1 Character of your choice</p>
                  <p>
                    <strong>Details</strong>
                  </p>
                  <p style={{ width: "75%" }}>
                    <em>
                      Unstructured one-on-one Time with your Child’s favorite
                      character
                    </em>
                  </p>
                  <button className="button-template">Book This Package</button>
                </div>
              </div>
            </div>
            <div>
              <div>
                <Image
                  src="/WebsitePhotos/spidey-playdate2.jpg"
                  alt="barbie png"
                  width={400}
                  height={200}
                />
                <div style={{ backgroundColor: "rgb(59, 28, 75)" }}>
                  <h3>1 Hour</h3>
                  <p>Up to 5 Children</p>
                  <h2>$200</h2>
                  <p>1 Character of your choice</p>
                  <p>
                    <strong>Details</strong>
                  </p>
                  <p style={{ width: "75%" }}>
                    <em>
                      Unstructured one-on-one Time with your Child’s favorite
                      character
                    </em>
                  </p>
                  <button className="button-template">Book This Package</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
type PackageCardProps = {
  name: string;
  price: number;
  numChildren: string;
  time: number;
  staffing: string;
  addChars: number;
  details: string[];
  picUrl?: string;
  color?: string;
};

function PackageCard({
  name,
  price,
  numChildren,
  time,
  staffing,
  addChars,
  details,
  picUrl,
  color,
}: PackageCardProps) {
  return (
    <div className="full-packages">
      <Image
        className="package-images"
        src={picUrl || "/WebsitePhotos/placeholder.jpg"}
        alt="package picturte"
        width={550}
        height={450}
      />
      <div className="packages" style={{ backgroundColor: `${color || ""}` }}>
        <h2>{name}</h2>
        <h3>
          {time} Min - {numChildren}
        </h3>
        <h3 style={{ fontWeight: "bold" }}>${price}</h3>
        <p>{staffing}</p>
        <p>Additional Characters: ${addChars}</p>
        <h2 style={{ fontWeight: "bold", marginTop: 15 }}>Details</h2>
        <ul style={{ padding: 14 }}>
          {details.map((info, index) => (
            <li key={index} style={{ listStyleType: "disc" }}>
              {index === 0 ? (
                <p
                  style={{
                    fontWeight: "bold",
                  }}
                >
                  {info}
                </p>
              ) : (
                <p>{info}</p>
              )}
            </li>
          ))}
        </ul>
        <button className="button-template">Book This Package!</button>
      </div>
    </div>
  );
}
