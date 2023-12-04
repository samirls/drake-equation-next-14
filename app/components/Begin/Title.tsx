
function Title() {
  return (
    <>
      <h1
        style={{
          fontSize: "4rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "15px",
          textAlign: "center",
        }}
        className="animate__animated animate__fadeInDown"
        
      >
        The Drake Equation
      </h1>
      <h5
        style={{
          fontSize: "1.5rem",
          display: "flex",
          justifyContent: "center",
          paddingTop: "10px",
        }}
        className="animate__animated animate__fadeInDown"
      >
        Where are everybody?
      </h5>
    </>
  );
}

export default Title;
