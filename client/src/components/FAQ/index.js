import React, {useState} from "react";



const FAQ = () => { 
      // Define state to track the active accordion item
  const [activeItem, setActiveItem] = useState(null);

  // Function to handle accordion item clicks
  const handleItemClick = (item) => {
    setActiveItem(item === activeItem ? null : item);
  };
    return (
        <section className="d-flex flex-column justify-content-center align-items-center">
            <div>
                <h2>FAQ</h2>
                <h1>Have Questions?</h1>
                <p>Find answers to all of your questions here.</p>
            </div>
            <div className="accordion" id="accordionExample">
      <div className="card">
        <div className="card-header" id="headingOne">
          <h2 className="mb-0">
            <button
              className={`btn btn-link ${activeItem === 'item1' ? '' : 'collapsed'}`}
              onClick={() => handleItemClick('item1')}
            >
              Accordion Item #1
            </button>
          </h2>
        </div>

        <div
          id="collapseOne"
          className={`collapse ${activeItem === 'item1' ? 'show' : ''}`}
          aria-labelledby="headingOne"
          data-parent="#accordionExample"
        >
          <div className="card-body">
            Content for Accordion Item #1
          </div>
        </div>
      </div>
      {/* Add more accordion items as needed */}
    </div>
        </section>
    )
}



export default FAQ;