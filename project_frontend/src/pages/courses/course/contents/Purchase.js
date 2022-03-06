import React from "react";
import { Link } from "react-router-dom";

function Purchase({ course, style }) {
  return (
    <div>
      <div className="coursePurchase grid lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 ">
        <section className="product">
          <div className="product__photo hidden md:block">
            <div
              data-aos="flip-left"
              data-aos-duration="1000"
              className="photo-container"
            >
              <div className="photo-main">
                <div className="controls"></div>
                <img
                  src="https://i0.wp.com/dxminds.com/wp-content/uploads/2021/07/How-Much-Does-it-Cost-to-hire-Mern-stack-developer.jpg"
                  alt="green apple slice"
                />
              </div>
            </div>
          </div>
          <div
            data-aos="flip-up"
            data-aos-duration="1000"
            className="product__info"
          >
            <div className="title">
              <h1>{course.title}</h1>
            </div>
            <div className="price">
              Rs <span>{course.fee}</span>+GST
            </div>

            <div className="description">
              <p>
                Zero cost EMI for 6 months is available from the partner finance
                company.The disbursement of zero cost is subject to the approval
                of our finance partner named Finance Peer.
              </p>

              <ul>
                <p>Important dates</p>
                {course.dates?.map((el) => {
                  return <li>{el}</li>;
                })}
              </ul>
            </div>
            {course.status === "open" ? (
              <Link to={`/course/${course.url}/apply`} state={{ course }}>
                <button type="button" className={style.open}>
                  APPLY NOW
                </button>
              </Link>
            ) : (
              <button className={style.close}>Registration closed</button>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Purchase;
