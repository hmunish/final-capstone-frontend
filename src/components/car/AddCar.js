import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCar } from '../../redux/cars/carsSlice';

const AddCar = () => {
  const { isLoading } = useSelector((state) => state.cars);
  const { userId } = useSelector((state) => state.login);
  const dispatch = useDispatch();

  const handleAddCar = (e) => {
    e.preventdefault();
    const name = e.target.name.value;
    const image = e.target.image.value;
    const description = e.target.description.value;
    const deposit = e.target.deposit.value;
    const financeFee = e.target.financeFee.value;
    const optionToPurchaseFee = e.target.optionToPurchaseFee.value;
    const totalAmountPayable = e.target.totalAmountPayable.value;
    const duration = e.target.duration.value;

    dispatch(
      addCar({
        userId,
        name,
        image,
        description,
        deposit,
        financeFee,
        optionToPurchaseFee,
        totalAmountPayable,
        duration,
      }),
    );
  };

  if (isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <section>
      <form onSubmit={(e) => handleAddCar(e)}>
        <ul>
          <li>
            <label htmlFor="name">
              Name:
              <br />
              <input type="text" id="name" maxLength={30} name="name" required placeholder="Car Name" />
            </label>
          </li>
          <li>
            <label htmlFor="image">
              Image:
              <br />
              <input type="file" id="image" name="image" required />
            </label>
          </li>

          <li>
            <input type="text" id="description" name="description" required placeholder="Model" />
          </li>
          <li>
            <label htmlFor="deposit">
              Deposit:
              <br />
              <input type="number" id="deposit" name="deposit" required placeholder="Deposit" min="0" />
            </label>
          </li>
          <li>
            <label htmlFor="financeFee">
              Finance Fee:
              <br />
              <input type="number" id="financeFee" name="financeFee" required placeholder="Finance Fee" min="0" />
            </label>
          </li>
          <li>
            <label htmlFor="optionToPurchaseFee">
              Option to Purchase Fee:
              <br />
              <input type="number" id="optionToPurchaseFee" name="optionToPurchaseFee" required placeholder="Option to Purchase Fee" min="0" />
            </label>
          </li>
          <li>
            <label htmlFor="totalAmountPayable">
              Total Amount Payable:
              <br />
              <input type="number" id="totalAmountPayable" name="totalAmountPayable" required placeholder="Total Amount Payable" min="0" />
            </label>
          </li>
          <li>
            <label htmlFor="Duration">
              Duration:
              <br />
              <input type="number" id="duration" name="duration" required placeholder="Duration (Days)" min="0" />
            </label>
          </li>
          <input type="submit" value="Add Car" />
        </ul>
      </form>
    </section>
  );
};

export default AddCar;
