import "./style.css";

const About = () => {
  return (
    <section id="about-wrapper">
      <div id="about-content">
        <h1 id="about">ABOUT US</h1>
        <div id="about-paragraphs">
          <p>
            TritonHacks is a 30 hour high school hackathon hosted at UCSD that provides students
            with the tools and opportunities to pursue interests in computational fields.
          </p>
          <p>
            We support participants of all skill level and heavily encourage beginners to
            participate! During the event, hackers have access to starter kits - highly extensible
            projects meant to teach a new topic to jumpstart your ideas. You will be able to join
            teams of 4 and collaborate on projects while attending workshops and receiving
            mentorship from UCSD students and industry professionals.
            {/* For this year's TritonHacks, we have put special effort in catering
            to participants of all experience levels - especially beginners. As
            part of this effort, students will be able to choose a starter kit -
            a barebones, yet highly extensible project - to jumpstart their
            activity with ease. During TritonHacks, students will be able to
            create and join teams to work on a collaborative project, attend
            technical workshops hosted by UCSD students and sponsors that will
            introduce them to new technologies, and spend the rest of their time
            hacking away at a project of their own. */}
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
