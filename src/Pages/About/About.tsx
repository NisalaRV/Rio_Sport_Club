import React from "react";
import about1 from "../../assets/images/about1.jpg";
import about2 from "../../assets/images/about2.jpg";
import about3 from "../../assets/images/about3.jpg";
import about4 from "../../assets/images/about4.jpg";

export const About: React.FC = () => {
    return (
        <div  id="about" className="flex justify-center items-center mt-3.5 h-[100vh]">
            <div className="grid grid-cols-2 gap-8 max-w-screen-lg mb-10 ">
                <div className="flex flex-col justify-center ">
                    <h1 className="text-5xl font-bold mb-4  ">About Us</h1>
                    <p className="text-lg mb-9">
                        Established in 2012, the Rio Cricket Club in Ambalangoda. We welcome players of all ages and skill levels, offering expert coaching, exciting matches, and a supportive community. Whether you're a seasoned competitor or new to the game, join us to experience the thrill of cricket and forge lasting relationships. Become a member today and immerse yourself in the vibrant culture of Rio Cricket Club.
                        </p>
                    Since 2012, Rio Cricket Club has united cricket enthusiasts in Amblangoda, offering tailored programs for all ages and abilities. Join us for competitive matches, expert coaching, and camaraderie. Discover the excitement of cricket in a welcoming environment. Join the Rio Cricket Club today!      </div>
                <div className="grid grid-cols-2 gap-4">
                    <img src={about1} alt="About 1" className="w-full h-auto" />
                    <img src={about2} alt="About 2" className="w-full h-auto" />
                    <img src={about3} alt="About 3" className="w-full h-auto" />
                    <img src={about4} alt="About 4" className="w-full h-auto" />
                </div>
            </div>
        </div>
    );
};


