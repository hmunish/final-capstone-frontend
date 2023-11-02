import { useDispatch, useSelector } from "react-redux";
import { Link, useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { getCarById } from "../../redux/cars/carsSlice";
import colorsImg from "../../assets/colors.PNG";
import arrow from "../../assets/arrow.png";

const CarDetail = () => {
  const { car, isLoading } = useSelector((state) => state.cars);
  const { userId } = useSelector((state) => state.login);
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const carId = searchParams.get("carId");

  useEffect(() => {
    dispatch(getCarById({ userId, carId }));
  }, [dispatch, userId, carId]);

  if (isLoading) return <p>Loading Car data</p>;

  if (car) {
    return (
      <section className="car-details">
        <Link to="/" className="back-btn">
          <img src={arrow} alt="Back" />
        </Link>
        <div
          className="car-details-img"
          style={{
            backgroundImage: `url(${car.image})`,
          }}
        />
        <div className="car-details">
          <div className="wrapper">
            <h1>{car.name}</h1>
            <p>
              $
              {car.deposit}
              {' '}
              deposit upon any car purchase
            </p>
            <ul className="car-details-list">
              <li>
                Finance fee
                {' '}
                <span>
                  $
                  {car.finance_fee}
                </span>
              </li>
              <li>
                Option to purchase fee
                {" "}
                <span>
                  $
                  {car.option_to_purchase_fee}
                </span>
              </li>
              <li>
                Total amount payable
                {' '}
                <span>
                  $
                  {car.total_amount_payable}
                </span>
              </li>
              <li>
                Duration
                {' '}
                <span>
                  {car.duration}
                  {' '}
                  Months
                </span>
              </li>
            </ul>
            <h3>
              <span>5.9% APR</span>
              {' '}
              Representative
            </h3>
            <Link to="/" className="discover-more">
              Discover more models
            </Link>
            <img src={colorsImg} alt="ColorsImage" className="colors-img" />
            <br />
            <Link
              to={`/reservation/new?carId=${car.id}`}
              className="reserve-btn"
            >
              Reserve
            </Link>
          </div>
        </div>
      </section>
    );
  }
  return <p>Error Loading Car data</p>;
};

export default CarDetail;
