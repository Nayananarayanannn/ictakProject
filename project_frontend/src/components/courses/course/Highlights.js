import React from 'react';

function Highlights({course}) {

  let hilt=course.highlights;
    return (
        <div>
            <div className="highlightHead">
                  <h1>COURSE HIGHLIGHTS</h1>
                </div>
                <div className="courseHighlight">
                  <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-6 m-1">
                    {hilt?.map((el) => {
                      return (
                        <div data-aos= "flip-up"
     data-aos-duration="1000" className="highlightCard">
                          <div className="highlightinfo">
                            <h1>{el}</h1>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
        </div>
    );
}

export default Highlights;