import "./About.css";
import Navbar from "./Navbar";

const About = () => {
  return (
    <>
      <Navbar />
      <section id="about" class="about section">
        <div className="container">
          <div className="container">
            <div className="row">
              <h1>About Me</h1>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <div className="col-lg-12 text">
                <h3>
                  I'm <b>Alyssa Jane </b>and<span className="ms-2"><b>Web Developer</b></span>
                </h3>
                <p>
                  As a recent graduate from Central Philippines State University with a degree in Information Technology.
                  I am eager to apply my academic knowledge and technical skills to real-world challenges. My education has
                  provided me with a solid foundation in programming and network administration, as well as hands-on experience
                  with various IT projects. During my internship at College of Computer Studies, I developed and implemented 
                  software solution and network security protocols. I am a dedicated problem-solver with a keen eye for details
                  and a passion for innovation. 
                </p>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <div className="personal-info">
                    <div className="row">
                      <div className="info-item">
                        <p>
                          Birthday : <span>09 May 2000</span>
                        </p>
                      </div>
                      <div className="info-item padd-15">
                        <p>
                          Age : <span>24</span>
                        </p>
                      </div>
                      <div className="info-item padd-15">
                        <p>
                          Website : <span>www.domain.com</span>
                        </p>
                      </div>
                      <div className="info-item padd-15">
                        <p>
                          Email : <span>vicentinojane23@gmail.com</span>
                        </p>
                      </div>
                      <div className="info-item ">
                        <p>
                          Degree : <span>BS Information Technology</span>
                        </p>
                      </div>
                      <div className="info-item padd-15">
                        <p>
                          Phone : <span>+63 994 862 1505</span>
                        </p>
                      </div>
                      <div className="info-item padd-15">
                        <p>
                          City : <span>Kabankalan City</span>
                        </p>
                      </div>
                      <div className="info-item padd-15">
                        <p>
                          Freelance : <span>Available</span>
                        </p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="buttons">
                        <a href="#" className="btn">
                          Download CV
                        </a>
                        <a href="/contact" className="btn hire-me">
                          Hire Me
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="skills padd-15">
                    <div className="row">
                      <div className="skill-item padd-15">
                        <h5>JS</h5>
                        <div className="skill-percent">86%</div>
                        <span class="bar">
                          <span class="javascript"></span>
                        </span>
                      </div>

                      <div className="skill-item padd-15">
                        <h5>PHP</h5>
                        <div className="skill-percent2">66%</div>
                        <span class="bar">
                          <span class="php"></span>
                        </span>
                      </div>

                      <div className="skill-item padd-15">
                        <h5>HTML</h5>
                        <div className="skill-percent3">96%</div>
                        <span class="bar">
                          <span class="html"></span>
                        </span>
                      </div>

                      <div className="skill-item padd-15">
                        <h5>Bootstrap</h5>
                        <div className="skill-percent4">76%</div>
                        <span class="bar">
                          <span class="bootstrap"></span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row mt-5 pt-5 mb-5">
                <h3 className="text-center fw-bold">Education</h3>
                <div className="col-lg-6 edu">
                  <div className="education">
                    <div className="row">
                      <div className="timeline-box mb-3">
                        <div className="timeline shadow-dark">
                          <div className="timeline-item">
                            <div className="circle-dot"></div>
                            <h3 className="timeline-date">
                              <i className="fa fa-calendar"></i> 2013
                            </h3>
                            <h4 className="timeline-title">
                              Inayawan Elementary School
                            </h4>
                            <p className="timeline-text">
                            Elementary education days are often filled with excitement and discovery as young learners embark on their academic journey. 
                            These foundational years typically encompass kindergarten through fifth or sixth grade, where students develop essential skills in reading, writing, mathematics, and social studies. 
                            Classrooms are vibrant with interactive activities, colorful displays, and a variety of learning tools designed to engage young minds. Teachers play a crucial role in fostering a love 
                            for learning, encouraging curiosity, and nurturing each child's unique abilities. Friendships are formed, and important social skills are developed through collaborative projects and play. 
                            These early experiences lay the groundwork for a lifelong educational adventure.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="timeline-box mb-3">
                        <div className="timeline shadow-dark">
                          <div className="timeline-item">
                            <div className="circle-dot"></div>
                            <h3 className="timeline-date">
                              <i className="fa fa-calendar"></i> 2017
                            </h3>
                            <h4 className="timeline-title">
                              Junior High School
                            </h4>
                            <p className="timeline-text">
                            Junior high school education days are a dynamic and transformative period in a student's life, typically encompassing grades six through eight. 
                            These years mark the transition from elementary school to high school, bringing new academic challenges and social experiences. Students are introduced to 
                            a more structured and diverse curriculum, including subjects like science, history, mathematics, and language arts, often taught by different specialized teachers. 
                            Extracurricular activities, such as sports, clubs, and music, become more prominent, offering opportunities for personal growth and the development of new interests. 
                            Socially, junior high school is a time of significant change, as students navigate friendships, peer relationships, and their emerging identities. Teachers and school staff play 
                            a vital role in supporting students through this critical stage, helping them build confidence and prepare for the academic and personal demands of high school.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 exp">
                  <div className="experience">
                    <div className="row">
                      <div className="timeline-box mb-3">
                        <div className="timeline shadow-dark">
                          <div className="timeline-item">
                            <div className="circle-dot"></div>
                            <h3 className="timeline-date">
                              <i className="fa fa-calendar"></i> 2019
                            </h3>
                            <h4 className="timeline-title">
                              Cauayan National High School
                            </h4>
                            <p className="timeline-text">
                            Senior high school education days are a pivotal and enriching phase in a student's academic journey, usually encompassing grades nine through twelve. 
                            During these years, students delve deeper into a wide range of subjects, with opportunities to take advanced placement (AP) or honors courses, and explore 
                            electives that align with their interests and potential career paths. The academic rigor increases as students prepare for college entrance exams, build their resumes, 
                            and make decisions about their post-secondary education or vocational training. Extracurricular activities, such as sports teams, debate clubs, theater productions, and volunteer organizations, 
                            play a significant role in shaping students' experiences and helping them develop leadership and teamwork skills.  
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="timeline-box mb-3">
                        <div className="timeline shadow-dark">
                          <div className="timeline-item">
                            <div className="circle-dot"></div>
                            <h3 className="timeline-date">
                              <i className="fa fa-calendar"></i> 2024
                            </h3>
                            <h4 className="timeline-title">
                              BS Information Technology
                            </h4>
                            <p className="timeline-text">
                            College education days are characterized by intellectual exploration, personal growth, and independence. Students embark on a journey of higher learning, typically pursuing a bachelor's degree over four years, 
                            although this can vary based on the program and individual goals. Colleges offer a diverse array of courses across various disciplines, allowing students to deepen their knowledge in areas of interest and discover new passions. 
                            Classrooms are dynamic spaces where lively discussions, critical thinking, and research-driven projects are encouraged. Beyond academics, college life includes opportunities for involvement in campus activities, clubs, and organizations that 
                            foster leadership skills and community engagement. Students also navigate newfound responsibilities, such as managing their schedules, finances, and balancing academic demands with social life. Throughout this period, professors serve as mentors, 
                            guiding students in their academic pursuits.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer id="footer" className="footer_section pt-2 pb-2">
        <div className="container">
          <div className="footer-info">
            <p>
              &copy; Copyright By:
              <a href="/" className="ms-2">
                <span>Alyssa jane Vicentino</span>
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default About;
