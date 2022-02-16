import "./style.css";

const About = () => {
  return (
    <section id="about-wrapper">
      <div id="about-content">
        <h1 id="about">ABOUT US</h1>
        <svg
          width="313"
          height="15"
          viewBox="0 0 313 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="underline"
            d="M2 3.5L5.80752 6.55587C12.0695 11.5817 20.8682 11.9639 27.5423 7.5L28.7302 6.7055C34.6974 2.71451 42.564 3.05622 48.1626 7.54961V7.54961C53.7017 11.9952 61.4692 12.3816 67.4221 8.50776L70.3351 6.61219C76.4353 2.64246 84.3672 2.91285 90.183 7.28879L90.7005 7.6782C96.4809 12.0275 104.425 12.0859 110.269 7.82221L111.696 6.78129C117.118 2.82485 124.567 3.1898 129.577 7.65738V7.65738C134.424 11.9803 141.582 12.4776 146.981 8.86674L150.075 6.79735C156.143 2.7387 164.128 3.0218 169.894 7.5V7.5C175.66 11.9782 183.645 12.2613 189.714 8.20265L193.589 5.61063C198.413 2.38419 204.871 3.16599 208.785 7.45041V7.45041C212.739 11.7779 219.279 12.5263 224.109 9.20393L227.706 6.72909C233.566 2.69775 241.333 2.80553 247.079 6.99792L249.138 8.49987C254.395 12.3359 261.571 12.1708 266.647 8.09723L267.812 7.16249C272.888 3.08821 280.219 3.49438 284.814 8.10451V8.10451C288.872 12.1755 295.153 13.0262 300.147 10.1814L311 4"
            stroke="#BC79FF"
            stroke-width="6"
          />
        </svg>

        <div id="about-paragraphs">
          <p>
            TritonHacks is an in-person highschool hackathon aimed at encouraging
            students from underserved and underrepresented communities of San
            Diego to pursue their interests in the computational fields. Many
            such students attend high-schools that don't have the necessary
            resources to support their interests in computing and engineering.
            By organizing this hackathon, we hope to address such issues and
            create a more equitable and inclusive learning environment.
          </p>
          <p>
            For this year's TritonHacks, we have put special effort in catering
            to participants of all experience levels - especially beginners. As
            part of this effort, students will be able to choose a starter kit -
            a barebones, yet highly extensible project - to jumpstart their
            activity with ease. During TritonHacks, students will be able to
            create and join teams to work on a collaborative project, attend
            technical workshops hosted by UCSD students and sponsors that will
            introduce them to new technologies, and spend the rest of their time
            hacking away at a project of their own.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
