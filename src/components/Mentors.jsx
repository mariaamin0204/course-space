import React, { useEffect, useState } from "react";
import mentor1 from "../assets/mentor 1.webp";
import mentor2 from "../assets/mentor 2.webp";
import mentor3 from "../assets/mentor 3.webp";
import mentor4 from "../assets/mentor 4.webp";

const mentors = [
  {
    name: "Jhon Dwirian",
    role: "UI/UX Design",
    image: mentor1,
    company: "Grab",
    companyClass: "grab",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    name: "Leon S Kennedy",
    role: "Machine Learning",
    image: mentor2,
    company: "Google",
    companyClass: "google",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    name: "Nguyễn Thuy",
    role: "Android Development",
    image: mentor3,
    company: "airbnb",
    companyClass: "airbnb",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    name: "Alex Morgan",
    role: "Full Stack Development",
    image: mentor4,
    company: "Google",
    companyClass: "google",
    description:
      "Learn modern web development, responsive interfaces, APIs, and practical techniques for building reliable web applications.",
  },
];

const styles = `
  .mentors-section {
    width: 100%;
    padding: 60px 24px 60px;
    background: #edf5f4;
    color: #252525;
    font-family: inherit;
    box-sizing: border-box;
    overflow: hidden;
  }

  .mentors-container {
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
  }

  .mentors-heading {
    margin: 0 0 36px;
    font-size: clamp(30px, 3vw, 42px);
    font-weight: 800;
    line-height: 1.2;
    color: #1f242e;
  }

  .mentors-viewport {
    width: 100%;
    overflow: hidden;
    padding: 10px 0;
  }

  .mentors-track {
    display: flex;
    align-items: stretch;
    gap: 24px;
    transition: transform 400ms cubic-bezier(0.25, 1, 0.5, 1);
    will-change: transform;
  }

  .mentor-card {
    flex: 0 0 calc((100% - (var(--visible-count) - 1) * 24px) / var(--visible-count));
    min-width: 0;
    padding: 24px;
    border-radius: 28px;
    background: #fff;
    display: flex;
    flex-direction: column;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.02);
  }

  .mentor-photo {
    display: block;
    width: 100%;
    height: 220px;
    object-fit: cover;
    object-position: top center;
    border-radius: 20px;
    background: #e5e7eb;
  }

  .mentor-name {
    margin: 20px 0 4px;
    font-size: 22px;
    line-height: 1.3;
    font-weight: 700;
    color: #1f242e;
  }

  .mentor-role {
    margin: 0;
    color: #828894;
    font-size: 15px;
    line-height: 1.4;
  }

  .mentor-description {
    margin: 18px 0 24px;
    color: #828894;
    font-size: 13.5px;
    line-height: 1.65;
  }

  .mentor-company {
    min-height: 40px;
    margin-top: auto;
    display: flex;
    align-items: center;
    font-size: 26px;
    font-weight: 700;
    line-height: 1;
  }

  .mentor-company.grab {
    color: #00b14f;
    font-style: italic;
    font-weight: 800;
    letter-spacing: -1px;
  }

  .mentor-company.google {
    background: linear-gradient(
      90deg,
      #4285f4 0%,
      #4285f4 25%,
      #ea4335 25%,
      #ea4335 50%,
      #fbbc05 50%,
      #fbbc05 75%,
      #34a853 75%,
      #34a853 100%
    );
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    letter-spacing: -1px;
  }

  .mentor-company.airbnb {
    color: #ff5a5f;
    font-size: 24px;
    font-weight: 700;
    letter-spacing: -0.5px;
  }

  .mentors-controls {
    width: 100%;
    margin-top: 32px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
  }

  .mentors-dots {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .mentor-dot {
    width: 24px;
    height: 6px;
    padding: 0;
    border: 0;
    border-radius: 10px;
    background: #cbd5e1;
    cursor: pointer;
    transition: all 300ms ease;
  }

  .mentor-dot.active {
    width: 32px;
    background: #127c71;
  }

  .mentors-arrows {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .mentor-arrow {
    width: 42px;
    height: 42px;
    padding: 0;
    border: 0;
    border-radius: 50%;
    display: grid;
    place-items: center;
    background: #fff;
    color: #127c71;
    cursor: pointer;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
    transition: all 200ms ease;
  }

  .mentor-arrow:hover {
    background: #127c71;
    color: #fff;
  }

  .mentor-arrow svg {
    width: 20px;
    height: 20px;
    fill: none;
    stroke: currentColor;
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
  }

  @media (max-width: 900px) {
    .mentors-track {
      gap: 16px;
    }
  }

  @media (max-width: 600px) {
    .mentors-section {
      padding: 40px 16px;
    }

    .mentor-card {
      padding: 18px;
    }

    .mentor-photo {
      height: 200px;
    }
  }
`;

export default function Mentors() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const updateVisibleCount = () => {
      const width = window.innerWidth;
      if (width <= 640) {
        setVisibleCount(1);
      } else if (width <= 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  const maxIndex = Math.max(0, mentors.length - visibleCount);

  useEffect(() => {
    setActiveIndex((current) => Math.min(current, maxIndex));
  }, [maxIndex]);

  const goToSlide = (index) => {
    setActiveIndex(Math.max(0, Math.min(index, maxIndex)));
  };

  const nextSlide = () => {
    setActiveIndex((current) => (current >= maxIndex ? 0 : current + 1));
  };

  const previousSlide = () => {
    setActiveIndex((current) => (current <= 0 ? maxIndex : current - 1));
  };

  const offsetPercentage = activeIndex * (100 / visibleCount);
  const gapOffset = activeIndex * (24 / visibleCount);

  return (
    <>
      <style>{styles}</style>

      <section
        className="mentors-section"
        id="mentor"
        aria-labelledby="mentors-heading"
      >
        <div className="mentors-container">
          <h2 id="mentors-heading" className="mentors-heading">
            Our Expert Mentors
          </h2>

          <div className="mentors-viewport">
            <div
              className="mentors-track"
              style={{
                "--visible-count": visibleCount,
                transform: `translateX(calc(-${offsetPercentage}% - ${gapOffset}px))`,
              }}
            >
              {mentors.map((mentor) => (
                <article className="mentor-card" key={mentor.name}>
                  <img
                    className="mentor-photo"
                    src={mentor.image}
                    alt={`${mentor.name} - ${mentor.role}`}
                    loading="lazy"
                  />

                  <h3 className="mentor-name">{mentor.name}</h3>
                  <p className="mentor-role">{mentor.role}</p>
                  <p className="mentor-description">{mentor.description}</p>

                  <div
                    className={`mentor-company ${mentor.companyClass}`}
                    aria-label={mentor.company}
                  >
                    {mentor.company}
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="mentors-controls">
            <div className="mentors-dots" aria-label="Mentor slides">
              {Array.from({ length: maxIndex + 1 }, (_, index) => (
                <button
                  key={index}
                  type="button"
                  className={`mentor-dot ${
                    activeIndex === index ? "active" : ""
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                  onClick={() => goToSlide(index)}
                />
              ))}
            </div>

            <div className="mentors-arrows">
              <button
                type="button"
                className="mentor-arrow"
                aria-label="Previous mentors"
                onClick={previousSlide}
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 12H5m7 7-7-7 7-7" />
                </svg>
              </button>

              <button
                type="button"
                className="mentor-arrow"
                aria-label="Next mentors"
                onClick={nextSlide}
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M5 12h14m-7-7 7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}