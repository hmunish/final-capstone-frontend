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
            <input type="text" id="name" maxLength={30} name="name" required placeholder="Car Name" />
          </li>
          <li>
            <input type="file" id="image" name="image" required />
          </li>
          <li>
            <input type="text" id="description" name="description" required placeholder="Model" />
          </li>
          <li>
            <input type="number" id="deposit" name="deposit" required placeholder="Deposit" min="0" value={0} />
          </li>
          <li>
            <input type="number" id="financeFee" name="financeFee" required placeholder="Finance Fee" min="0" value={0} />
          </li>
          <li>
            <input type="number" id="optionToPurchaseFee" name="optionToPurchaseFee" required placeholder="Option to Purchase Fee" min="0" value={0} />
          </li>
          <li>
            <input type="number" id="totalAmountPayable" name="totalAmountPayable" required placeholder="Total Amount Payable" min="0" value={0} />
          </li>
          <li>
            <input type="number" id="duration" name="duration" required placeholder="Duration (Days)" min="0" value={0} />
          </li>
          <input type="submit" value="Add Car" />
        </ul>
      </form>
    </section>
  );
};

export default AddCar;
