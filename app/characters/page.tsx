import fs from "fs";
import path from "path";
import Image from "next/image";
import placeholder from "./placeholder.jpg";
import { TopBanner } from "../src/banner";
import logo from "../logoWhite.png";
import { Footer } from "../src/footer";
export default function Characters() {
  const filePath = path.join(process.cwd(), "app/characters", "characters.txt");
  const info = fs.readFileSync(filePath, "utf-8").split(/\r?\n/);
  const allChars: Character[] = [];
  const picDir = path.join(process.cwd(), "public", "CharacterPhotos");
  const picFiles = fs
    .readdirSync(picDir)
    .filter((f) => f.toLocaleLowerCase().endsWith(".png"));

  info.forEach((curChar) => {
    const line = curChar.trim();
    if (!line) return;
    let type = curChar.charAt(curChar.length - 1);
    let name = curChar.slice(0, -2);
    const match = getPics(picFiles, name);
    console.log(name);
    let temp;
    //let picUrl = `/CharacterPhotos/${encodeURIComponent(match)}`
    switch (type) {
      case "P":
        temp = new Character(name, CharacterType.Princess);
        break;
      case "H":
        temp = new Character(name, CharacterType.Hero);
        break;
      case "M":
        temp = new Character(name, CharacterType.Mascot);
        break;
      case "S":
        temp = new Character(name, CharacterType.Special);
        break;
    }
    if (temp) {
      if (match) {
        temp.picUrl = `/CharacterPhotos/${encodeURIComponent(match[0])}`;
      }
      allChars.push(temp);
    }
  });
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "rgb(44, 5, 46)",
      }}
    >
      <TopBanner />
      <div className="character-statment">
        <h1>Our Characters</h1>
        <p>
          At Lone Star Character Entertainment, our costumes, wigs, and
          performances are of the highest quality and authenticity. Our cast
          members go above and beyond to make every event fun, exciting, and
          believable! All of our cast members have professional experience in
          acting and singing, and will stay in character throughout your event!
        </p>
      </div>
      <div style={{ backgroundColor: "rgb(44, 5, 46)" }}>
        <PrincessList allChars={allChars} />
        <HeroList allChars={allChars} />
        <MascotList allChars={allChars} />
        <SpecialList allChars={allChars} />
      </div>
      <Footer />
    </div>
  );
}

function PrincessList({ allChars }: { allChars: Character[] }) {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h2 className="header-cards">Princess & Fantasy Characters</h2>
      <h3 className="header-cards-h3">
        Click on each Character’s Name for More Photos and Info!
      </h3>
      <ul className="character-list">
        {allChars
          .filter((c) => c.type === CharacterType.Princess)
          .map((curChar, index) => (
            <li key={index}>
              <div>
                <Image
                  src={curChar.picUrl || placeholder}
                  alt={curChar.name}
                  width={200}
                  height={200}
                  className="char-PFP"
                />
                <p className="character-list-name">{`${curChar.name}`}</p>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}

function HeroList({ allChars }: { allChars: Character[] }) {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h2 className="header-cards">Hero & Action Characters</h2>
      <h3 className="header-cards-h3">
        Click on each Character’s Name for More Photos and Info!
      </h3>
      <ul className="character-list">
        {allChars
          .filter((c) => c.type === CharacterType.Hero)
          .map((curChar, index) => (
            <li key={index}>
              <div>
                <Image
                  src={curChar.picUrl || placeholder}
                  alt={curChar.name}
                  width={200}
                  height={200}
                  className="char-PFP"
                />
                <p className="character-list-name">{`${curChar.name}`}</p>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}

function MascotList({ allChars }: { allChars: Character[] }) {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h2 className="header-cards">Mascot Characters</h2>
      <h3 className="header-cards-h3">
        Click on each Character’s Name for More Photos and Info!
      </h3>
      <ul className="character-list">
        {allChars
          .filter((c) => c.type === CharacterType.Mascot)
          .map((curChar, index) => (
            <li key={index}>
              <div>
                <Image
                  src={curChar.picUrl || placeholder}
                  alt={curChar.name}
                  width={200}
                  height={200}
                  className="char-PFP"
                />
                <p className="character-list-name">{`${curChar.name}`}</p>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}

function SpecialList({ allChars }: { allChars: Character[] }) {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h2 className="header-cards">Specialty & Seasonal Characters</h2>
      <h3 className="header-cards-h3">
        Click on each Character’s Name for More Photos and Info!
      </h3>
      <ul className="character-list">
        {allChars
          .filter((c) => c.type === CharacterType.Special)
          .map((curChar, index) => (
            <li key={index}>
              <div>
                <Image
                  src={curChar.picUrl || placeholder}
                  alt={curChar.name}
                  width={200}
                  height={200}
                  className="char-PFP"
                />
                <p className="character-list-name">{`${curChar.name}`}</p>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}
enum CharacterType {
  Hero,
  Princess,
  Mascot,
  Special,
}
class Character {
  name: string;
  type: CharacterType;
  picUrl?: string;
  constructor(name: string, type: CharacterType, picUrl?: string) {
    this.name = name;
    this.type = type;
  }
}

function getPics(picFiles: any[], name: string) {
  return picFiles
    .filter((f) => {
      const base = f.replace(/\.[^.]+$/, ""); //strips .png
      return (
        base &&
        (name.toLocaleLowerCase().includes(base.toLocaleLowerCase()) ||
          base.toLocaleLowerCase().includes(name.toLocaleLowerCase()))
      );
    })
    .sort((a, b) => b.length - a.length);
}
