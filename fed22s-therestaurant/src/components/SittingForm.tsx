import { MouseEvent } from "react";

export const SittingForm = () => {
  const handleClick = (e: MouseEvent) => {
    console.log(e.target);
    console.log("make bold");
  };
  return (
    <>
      <h4>Lediga sittningar</h4>
      <section
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "0.3rem",
          fontSize: "large",
        }}
      >
        <article
          style={{ paddingLeft: "0.5rem" }}
          onClick={(e) => handleClick(e)}
        >
          18:00
        </article>
        <article
          style={{ paddingLeft: "0.5rem" }}
          onClick={(e) => handleClick(e)}
        >
          21:00
        </article>
      </section>
    </>
  );
};
