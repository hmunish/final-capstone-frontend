import React from 'react';
import { useSelector } from 'react-redux';

const AddCar = () => {
  const { isLoading } = useSelector((state) => state.cars);
  // const { userId } = useSelector((state) => state.login);
  // const dispatch = useDispatch();

  if (isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <section>
      <form>
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
              <input type="number" id="deposit" name="deposit" required placeholder="Deposit" min="0" value={0} />
            </label>
          </li>
          <li>
            <label htmlFor="financeFee">
              Finance Fee:
              <br />
              <input type="number" id="financeFee" name="financeFee" required placeholder="Finance Fee" min="0" value={0} />
            </label>
          </li>
          <li>
            <label htmlFor="optionToPurchaseFee">
              Option to Purchase Fee:
              <br />
              <input type="number" id="optionToPurchaseFee" name="optionToPurchaseFee" required placeholder="Option to Purchase Fee" min="0" value={0} />
            </label>
          </li>
          <li>
            <label htmlFor="totalAmountPayable">
              Total Amount Payable:
              <br />
              <input type="number" id="totalAmountPayable" name="totalAmountPayable" required placeholder="Total Amount Payable" min="0" value={0} />
            </label>
          </li>
          <li>
            <label htmlFor="Duration">
              Duration:
              <br />
              <input type="number" id="duration" name="duration" required placeholder="Duration (Days)" min="0" value={0} />
            </label>
          </li>
          <input type="submit" value="Add Car" />
        </ul>
      </form>
    </section>
  );
};

export default AddCar;
