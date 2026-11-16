import Image from "next/image";
import Link from "next/link";
export function Footer() {
  return (
    <div className="footer">
      <Image
        src="/LogoPhotos/3 Primary White.png"
        alt="logo"
        width={300}
        height={300}
      />
      <div className="footer-sections">
        <div>
          <h3>Follow Us</h3>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 20,
              justifyContent: "center",
            }}
          >
            <a
              href="https://www.instagram.com/lonestarcharacters/?hl=en"
              target="_blank"
            >
              <Image
                src="/OtherPhotos/insta.jpg"
                alt="instagram photo"
                width={80}
                height={80}
              />
            </a>

            <a
              href="https://www.facebook.com/lonestarcharacters"
              target="_blank"
            >
              <Image
                src="/OtherPhotos/facebook.jpg"
                alt="instagram photo"
                width={80}
                height={100}
              />
            </a>
          </div>
        </div>
        <div>
          <h3>Office Hours</h3>
          <p>Tuesday - Friday</p>
          <p>9:00 AM - 5:00 PM</p>
        </div>
        <div>
          <h3>Contact</h3>
          <p>
            <u>info@lonestarcharacters.com</u>
          </p>
          <p>Call or Text Us! (361) 494-1301</p>
        </div>
      </div>
      <p>
        Lone Star Character Entertainment, LLC. is an independent company
        providing princess, superhero, and character impersonations to our local
        area only. We do not have the intention of violating any copyright or
        trademark laws. We do not claim to be associated with any other company.
        Our characters are lookalikes based on popular children’s stories and
        media. If you are seeking a licensed, copyrighted character, we
        encourage you to contact the company/copyright holders.
      </p>
      <Link href="/terms-of-service" className="button-template">
        TERMS OF SERVICE
      </Link>
    </div>
  );
}
