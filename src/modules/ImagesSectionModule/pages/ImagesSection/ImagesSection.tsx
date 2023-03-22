import React from "react";
import "./ImagesSection.scss";
import { ImageArticle } from "../../components/ImageArticle";
import img1 from "@/assets/images/img1.jpg";
import avatar1 from "@/assets/images/avatar1.jpg";
import img2 from "@/assets/images/img2.jpg";
import avatar2 from "@/assets/images/avatar2.jpg";
import img3 from "@/assets/images/img3.jpg";
import avatar3 from "@/assets/images/avatar3.jpg";
import img4 from "@/assets/images/img4.jpg";
import avatar4 from "@/assets/images/avatar4.jpg";

export const ImagesSection: React.FC = () => {
  return (
    <section className="image-section">
      <h1 className="image-section__heading">Trending today</h1>
      <div className="image-section__images-wrapper">
        <div className="image-section__image-container show-two-images">
          <ImageArticle
            image={img1}
            autor={"Formula1"}
            icon={avatar1}
            title={"2023 MoneyGram Haas VF23 Livery"}
            description={"Meet the new painting from the formula"}
          />
        </div>
        <div className="image-section__image-container show-two-images">
          <ImageArticle
            image={img2}
            autor={"Minecraft1234"}
            icon={avatar2}
            title={"What would you add to minecraft"}
            description={
              "If there was one thing you could add to Minecraft what would it be?"
            }
          />
        </div>
        <div className="image-section__image-container show-three-images">
          <ImageArticle
            image={img3}
            autor={"Lola"}
            icon={avatar3}
            title={"Miley Cyrus looks different"}
            description={
              "Miley looks like a mix of Cher, Dolly Parton, and Kim Kardashian"
            }
          />
        </div>
        <div className="image-section__image-container show-four-images">
          <ImageArticle
            image={img4}
            autor={"NBA"}
            icon={avatar4}
            title={"LeBron James is less than 100 Points"}
            description={
              "Kareem Abdul-Jabbar is the all-time scorer in the NBA"
            }
          />
        </div>
      </div>
    </section>
  );
};
