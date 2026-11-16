"use client";
import Image from "next/image";
import { TopBanner } from "./src/banner";
import { Footer } from "./src/footer";
import { useRouter } from "next/navigation";
import spideyCow from "../public/spidey-cow.png";
import { Boldonse } from "next/font/google";
import Link from "next/link";
import { useState } from "react";
export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [zip, setZip] = useState("");
  const [date, setDate] = useState("");
  return (
    <div style={{ backgroundColor: "rgb(44, 5, 46)" }}>
      <TopBanner />
      <div className="home-page">
        <h1>Austin's Premier Character Entertainment Company</h1>
        <p>
          Elevated & Professional Princess, Superhero Appearances, and Mascot
          Events with a purpose!
        </p>
        <p>
          We offer <strong>Traveling Character Parties</strong> and{" "}
          <strong>Corporate Event Appearances</strong> throughout{" "}
          <strong>Greater Austin and Central Texas!</strong>
        </p>
        <div className="home-experinces">
          <div className="home-experinces-info">
            <h2>Character Experiences that inspire and empower!</h2>
            <p>
              Families across Greater Austin choose Lone Star Character
              Entertainment for more than just a party; they choose an
              immersive, professionally crafted experience that delights,
              inspires, and empowers children!
            </p>
            <p>
              {" "}
              From royal princess coronations to action-packed superhero
              lessons, our performers are trained actors who bring characters to
              life with authenticity, polish, and heart!
            </p>
            <p>
              {" "}
              We believe magic should uplift and inspire. That’s why we’re
              dedicated to empowering children to be the princesses or heroes
              they are inside so that they can make a difference in their
              communities through kindness, bravery, and leadership!
            </p>
          </div>
          <Image src={spideyCow} alt="spidey-cow" width={300} height={300} />
        </div>
        <button className="button-template">Discorver Our Experinces</button>
        <h1>Our Signature Experinces</h1>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            padding: 10,
            gap: 75,
            maxWidth: "70%",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: 15,
              backgroundColor: "rgb(60, 118, 185)",
              borderRadius: 15,
              padding: 30,
            }}
          >
            <h2 style={{ fontSize: 30 }}>Private Celebrations</h2>
            <p>
              Elevated, story-driven character experinces designed for birthdays
              and intimate celebrations!
            </p>
            <Link href="/packages" className="button-template">
              Explore Private Events
            </Link>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: 15,
              backgroundColor: "rgb(60, 118, 185)",
              borderRadius: 15,
              padding: 30,
            }}
          >
            <h2 style={{ fontSize: 30 }}>Coporate & Community Partnerships</h2>
            <p>
              Professional character entertainment, trusted by Central Texas
              organizations for polished, high-quality entertainment!
            </p>
            <button
              style={{
                borderRadius: 30,
                backgroundColor: "rgb(171, 99, 174)",
                padding: 15,
              }}
            >
              Explore Community Partnerships
            </button>
          </div>
        </div>

        <div className="magic-mission">
          <Image
            src="/WebsitePhotos/black-panther.jpg"
            alt="mission background"
            width={800}
            height={600}
          />
          <div>
            <h2>Magic with a Mission!</h2>
            <p>
              At Lone Star Character Entertainment, we believe in meaningful
              magic that empowers children to be leaders. We also believe in
              being community leaders and making a difference. That’s why we
              give back through weekly children’s hospital visits, quarterly
              charity appearances, and accessible birthday celebrations for
              families who may not otherwise have one. We’re committed to
              spreading joy where it’s needed most.
            </p>
            <Link href="/about" className="button-template">
              See Our Mission
            </Link>
          </div>
        </div>

        <div className="home-character-options">
          <h2>Our Character Offerings</h2>
          <p>
            Each character is portrayed by a professionally trained performer
            committed to authenticity, integrity, and immersive storytelling,
            ensuring every guest experiences true magic!
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 20,
              padding: 20,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="home-character-offers">
              <Image
                src="/WebsitePhotos/alicePic.jpg"
                alt="button photo"
                width={600}
                height={400}
              />
              <Link className="button-template" href="/princess-tea-parties">
                Princess & Fantasy
              </Link>
            </div>
            <div className="home-character-offers">
              <Image
                src="/WebsitePhotos/ironman.jpg"
                alt="button photo"
                width={200}
                height={100}
              />
              <Link className="button-template" href="/characters">
                Heros & Action
              </Link>
            </div>
            <div className="home-character-offers">
              <Image
                src="/WebsitePhotos/mickey-minnie2.jpg"
                alt="button photo"
                width={200}
                height={100}
              />
              <Link className="button-template" href="/characters">
                Mascot & Specialty
              </Link>
            </div>
          </div>
        </div>

        <div className="home-standards">
          <h2>The LoneStar Characters Standard</h2>
          <div>
            <div>
              <h3>ELEVATED</h3>
              <p>
                <strong>
                  Every detail of our character experiences is designed with
                  intention!
                </strong>{" "}
                From professionally trained performers and high-quality
                costuming to immersive storytelling that maintains true
                character integrity. We don’t believe in rushed itineraries or
                generic entertainment. We create elevated celebrations worthy of
                your most magical moments.
              </p>
            </div>
            <div>
              <h3>CHILD FOCUSED</h3>
              <p>
                <strong>Children are at the heart of everything we do!</strong>{" "}
                Every interaction with our characters is tailored to honor each
                child’s personality, comfort level, and imagination. We
                prioritize inclusivity and emotional intelligence, striving to
                ensure that every child feels seen, celebrated, and empowered.
              </p>
            </div>
            <div>
              <h3>PURPOSE DRIVEN</h3>
              <p>
                <strong>We believe in magic with a purpose! </strong> Every As a
                locally owned company, we are proud to give back to Central
                Texas families in need through weekly hospital visits and
                quarterly charity appearances. We also support local teachers,
                nurses, first responders, and community heroes through
                appreciation programs and meaningful giveback initiatives.
              </p>
            </div>
          </div>
        </div>
        <div className="home-founder">
          <h1>The Founder Behind the Magic</h1>
          <div>
            <div>
              <h2>Hi, I'm Lucinda, Founder & Creative Director</h2>
              <p>
                I created Lone Star Character Entertainment with a lifelong
                dedication to performance, storytelling, and creating meaningful
                moments for children and families! With a BA in Theatre from St.
                Edward’s University and professional experience as a former
                theme park Cast Member, I founded Lone Star Characters with one
                goal: to bring theme park-quality magic to Central Texas
                families from all walks of life.
              </p>
              <p>
                Every performer on our team is carefully selected and trained to
                uphold the highest standards of character integrity,
                professionalism, and child-centered engagement. Because your
                celebration deserves much more than standard entertainment, you
                deserve a fully themed experience that inspires and empowers.
              </p>
              <p>
                At Lone Star Characters, we don’t just do parties. We create
                lasting memories, based on quality, intention, and heart!
              </p>

              <button className="button-template">MEET THE CAST</button>
            </div>
            <Image
              src="/WebsitePhotos/lucinda.png"
              alt=""
              width={500}
              height={450}
            />
          </div>
        </div>
        <div>
          <h2>Client Reviews</h2>
          <div>
            <p>Bleh client reviews</p>
          </div>
        </div>

        <div className="home-party-planning">
          <h2>Get Our Party Planning Guide</h2>
          <div>
            <Image
              src="/WebsitePhotos/batman2.png"
              alt="Party Planing Photos"
              width={600}
              height={400}
            />
            <div>
              <h3>Need help planning a party?</h3>
              <p>
                Download our FREE Party Planning Guide and make your next party
                extra magical!{" "}
              </p>
              <input
                id="name"
                type="text"
                value={name}
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
              />
              <input
                id="email"
                type="text"
                value={email}
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                id="zip"
                type="text"
                value={zip}
                placeholder="Zip"
                onChange={(e) => setZip(e.target.value)}
              />
              <input
                id="date"
                type="text"
                value={date}
                placeholder="mm/dd/yyyy"
                onChange={(e) => setDate(e.target.value)}
              />
              <button className="button-template">
                {" "}
                Get My Free Party Planning Guide
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
