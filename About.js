import React from "react";

export default function About(props) {
  
  return (
    
    <>
   
    <div className="container" style={{backgroundColor: props.mode === "dark" ? "#36454F" : "white", color:props.mode === "dark" ? "white" : "black"}}>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button style={{backgroundColor: props.mode === "dark" ? "#36454F" : "white", color:props.mode === "dark" ? "white" : "black"}}
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              About TextTool
            </button>
          </h2>
          <div style={{backgroundColor: props.mode === "dark" ? "#36454F" : "white", color:props.mode === "dark" ? "white" : "black"}}
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={{backgroundColor: props.mode === "dark" ? "#36454F" : "white", color:props.mode === "dark" ? "white" : "black"}}>
              <strong style={{backgroundColor: props.mode === "dark" ? "#36454F" : "white", color:props.mode === "dark" ? "white" : "black"}}>
                TextTool is designed and created for the users to easily convert
                their sentences/words into lower or upper cases
              </strong>
              This app can also count the number of characters a sentance
              have,also this app is very helpfull in extracting Gmails/Emails
              from a bunch of any paragraph and sentences.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={{backgroundColor: props.mode === "dark" ? "#36454F" : "white", color:props.mode === "dark" ? "white" : "black"}}>
          <h2 className="accordion-header" id="headingTwo">
            <button style={{backgroundColor: props.mode === "dark" ? "#36454F" : "white", color:props.mode === "dark" ? "white" : "black"}}
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Publisher and Creater
            </button>
          </h2>
          <div style={{backgroundColor: props.mode === "dark" ? "#36454F" : "white", color:props.mode === "dark" ? "white" : "black"}}
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={{backgroundColor: props.mode === "dark" ? "#36454F" : "white", color:props.mode === "dark" ? "white" : "black"}}>
              <strong>
                This App is owned by Mr S Ayaz Rahman created using Bootstrap and
                Powered by React Js.
              </strong>
            </div>
          </div>
        </div>
        <div className="accordion-item" style={{backgroundColor: props.mode === "dark" ? "#36454F" : "white", color:props.mode === "dark" ? "white" : "black"}}>
          <h2 className="accordion-header" id="headingThree">
            <button style={{backgroundColor: props.mode === "dark" ? "#36454F" : "white", color:props.mode === "dark" ? "white" : "black"}}
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Copyrights
            </button>
          </h2>
          <div style={{backgroundColor: props.mode === "dark" ? "#36454F" : "white", color:props.mode === "dark" ? "white" : "black"}}
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={{backgroundColor: props.mode === "dark" ? "#36454F" : "white", color:props.mode === "dark" ? "white" : "black"}}>
              <strong style={{backgroundColor: props.mode === "dark" ? "#36454F" : "white", color:props.mode === "dark" ? "white" : "black"}}>&copy;2022-2023 Go Text.com</strong>
            </div>
          </div>
        </div>
      </div>
   
    </div>
    </>
  );
}
