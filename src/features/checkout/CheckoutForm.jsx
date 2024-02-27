import { memo, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  updateSelectedCountry,
  updateSelectedState,
} from "../../redux/checkoutSlice";
import { FaTruck } from "react-icons/fa6";
import { State, City } from "country-state-city";
import styled from "styled-components";

import Heading from "../../ui/Heading";
import Button from "../../ui/Button";
import LoadingCountriesAndCities from "../../ui/LoadingCountriesAndCities";
import Row from "../../ui/Row";
import SpinnerMini from "../../ui/SpinnerMini";
import ErrorMessage from "../../ui/ErrorMessage";

import { useAvailableCountries } from "./useAvailableCountries";
import { getCountryFlagEmoji } from "../../utilis/helpers";
import { useCaptureOrder } from "./useCaptureOrder";
import { useNavigate } from "react-router-dom";
import { updateOrder } from "../../redux/orderSlice";

const StyledForm = styled.form`
  align-self: flex-start;

  flex: 1;
  display: flex;
  flex-direction: column;
  gap: var(--space-11);

  position: sticky;
  top: var(--space-6);

  @media only screen and (max-width: 56.25em) {
    & {
      width: 100%;
      position: static;
      order: 1;
    }
  }

  & h4 {
    margin-left: calc(var(--space-1) + var(--space-4));
    margin-bottom: var(--space-6);
  }

  & input,
  & select {
    width: 100%;
    padding: var(--space-3) var(--space-1);
    border: none;
    border-bottom: 1px solid var(--color-grey-300);
    background-color: transparent;

    position: relative;

    &::after {
      content: "";
      width: 0;
      height: 1px;
      background-color: var(--color-primary-950);

      position: absolute;
      bottom: 0;
      left: 0;
    }

    &:focus::after {
      width: 100%;
    }
  }

  & input::placeholder {
    color: var(--color-grey-400);
  }
`;

const InputContainer = styled.div`
  padding: var(--space-4);
  border: 1px solid var(--color-grey-300);
  border-radius: var(--border-radius-lg);

  display: grid;
  gap: var(--space-6);

  &.customer-information {
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (max-width: 31.25em) {
    &.customer-information {
      grid-template-columns: 1fr;
    }
  }

  /* &.payment-details {
    grid-template-columns: 1fr 20% 20%;

    & input:last-of-type {
      grid-column: 3 / -1;
    }
  } */

  /* & input:first-of-type, */
  /* & select:first-of-type,
  & input:last-of-type {
    grid-column: 1/-1;
  } */

  & .form__full-row {
    grid-column: 1 / -1;
  }

  &.payment--on-delivery {
    & div {
      padding: var(--space-3) var(--space-1);
    }

    & input {
      width: auto;
      accent-color: var(--color-primary-950);
    }

    & label {
      display: flex;
      align-items: center;
      gap: 4px;
    }
  }
`;

const CheckoutForm = memo(function CheckoutForm({ checkout }) {
  const navigate = useNavigate();

  const { handleSubmit, register, watch, formState, reset } = useForm();
  const { errors } = formState;

  const { selectedCountry, selectedState } = useSelector(
    (state) => state.checkout
  );
  const dispatch = useDispatch();

  const { captureOrder, isCapturing } = useCaptureOrder();
  const { countries } = useAvailableCountries();

  const currentSelectedCountry = watch("country");
  const currentSelectedState = watch("state");

  const countryStates = State.getStatesOfCountry(selectedCountry);
  const stateCode = countryStates.find(
    (state) => state.isoCode === selectedState
  )?.isoCode;
  const stateCities = City.getCitiesOfState(selectedCountry, stateCode);

  useEffect(
    function () {
      dispatch(updateSelectedCountry(currentSelectedCountry));
    },
    [dispatch, currentSelectedCountry]
  );

  useEffect(
    function () {
      dispatch(updateSelectedState(currentSelectedState));
    },
    [dispatch, currentSelectedState]
  );

  function onSubmit(data) {
    // Line items
    const line_items = checkout.line_items.reduce((itemObj, item) => {
      const variantGroups = item.selected_options.reduce(
        (optionObj, option) => {
          optionObj[option.group_id] = option.option_id;
          return optionObj;
        },
        {}
      );

      itemObj[item.id] = {
        quantity: item.quantity,
        selected_options: variantGroups,
      };
      return itemObj;
    }, {});
    // Customer data
    const customer = {
      firstname: data.first_name,
      lastname: data.last_name,
      email: data.email,
      phone: data.phone_number,
    };
    // Shipping = Billing
    const shipping = {
      name: `${data.first_name} ${data.last_name}`,
      street: data.street,
      town_city: data.city,
      county_state: data.state,
      postal_zip_code: data.postal_zip_code,
      country: data.country,
    };
    // Getting the current shipping method
    const shipping_method = checkout.shipping_methods.find(
      (s) => s.description === selectedCountry
    )?.id;
    const fulfillment = {
      shipping_method: shipping_method,
    };
    // This is used to make the order successfull but the actual payment will be on the delivery
    const payment = {
      gateway: "test_gateway",
      card: {
        number: "4242424242424242",
        expiry_month: "02",
        expiry_year: "24",
        cvc: "123",
        postal_zip_code: "94107",
      },
    };

    const order = {
      line_items,
      customer,
      shipping,
      fulfillment,
      billing: {
        ...shipping,
      },
      payment,
    };

    const captureOrderData = {
      checkoutId: checkout.id,
      order,
    };
    captureOrder(captureOrderData, {
      onSuccess: (data) => {
        // Reset the form fields
        reset();

        // Store the order object
        const { id, customer_reference, created, order, shipping } = data;

        // TODO: UPDATE THE STORED OBJECT
        dispatch(
          updateOrder({ id, customer_reference, created, order, shipping })
        );

        navigate(`/order/${data.customer_reference}`);
      },
    });
  }

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <div>
        <Heading as="h4">Customer Information</Heading>

        <InputContainer className="customer-information">
          <Row $direction="column">
            <input
              type="text"
              id="first_name"
              placeholder="First name..."
              name="first_name"
              {...register("first_name", {
                required: "This field is required",
              })}
            />
            {errors.first_name && (
              <ErrorMessage $padding={1}>
                {errors.first_name.message}
              </ErrorMessage>
            )}
          </Row>

          <Row $direction="column">
            <input
              type="text"
              id="last_name"
              placeholder="last name..."
              name="last_name"
              {...register("last_name", { required: "This field is required" })}
            />
            {errors.last_name && (
              <ErrorMessage $padding={1}>
                {errors.last_name.message}
              </ErrorMessage>
            )}
          </Row>

          <Row $direction="column">
            <input
              type="tel"
              id="phone_number"
              placeholder="Phone number..."
              name="phone_number"
              {...register("phone_number", {
                required: "This field is required",
              })}
            />
            {errors.phone_number && (
              <ErrorMessage $padding={1}>
                {errors.phone_number.message}
              </ErrorMessage>
            )}
          </Row>

          <Row $direction="column">
            <input
              type="email"
              id="email"
              placeholder="Email address..."
              name="email"
              {...register("email", { required: "This field is required" })}
            />
            {errors.email && (
              <ErrorMessage $padding={1}>{errors.email.message}</ErrorMessage>
            )}
          </Row>

          <Row $direction="column" className="form__full-row">
            <select
              id="country"
              disabled={Boolean(!countries)}
              name="country"
              {...register("country", {
                required: "This field is required",
                validate: (value) =>
                  value !== "" || "Please select your country",
              })}
            >
              {countries ? (
                <>
                  <option value="" style={{ color: "var(--color-grey-400)" }}>
                    Select your country
                  </option>
                  {Object.entries(countries).map(([code, country]) => (
                    <option value={code} key={code}>
                      {getCountryFlagEmoji(code)} {country}
                    </option>
                  ))}
                </>
              ) : (
                <LoadingCountriesAndCities type="countries" />
              )}
            </select>
            {errors.country && (
              <ErrorMessage $padding={1}>{errors.country.message}</ErrorMessage>
            )}
          </Row>

          <Row $direction="column">
            <select
              id="state"
              disabled={Boolean(!countries) || selectedCountry === ""}
              name="state"
              {...register("state", {
                required: "This field is required",
                validate: (value) => value !== "" || "Please select your state",
              })}
            >
              {countries ? (
                <>
                  <option value="" style={{ color: "var(--color-grey-400)" }}>
                    Select your state
                  </option>
                  {countryStates.map((state) => (
                    <option value={state.isoCode} key={state.name}>
                      {state.name}
                    </option>
                  ))}
                </>
              ) : (
                <LoadingCountriesAndCities type="states" />
              )}
            </select>
            {errors.city && (
              <ErrorMessage $padding={1}>{errors.city.message}</ErrorMessage>
            )}
          </Row>

          <Row $direction="column">
            <select
              id="city"
              disabled={
                Boolean(!countries) ||
                selectedCountry === "" ||
                selectedState === ""
              }
              name="city"
              {...register("city", {
                required: "This field is required",
                validate: (value) => value !== "" || "Please select your city",
              })}
            >
              {countries ? (
                <>
                  <option value="" style={{ color: "var(--color-grey-400)" }}>
                    Select your city
                  </option>
                  {stateCities.map((city) => (
                    <option value={city.name} key={city.name}>
                      {city.name}
                    </option>
                  ))}
                </>
              ) : (
                <LoadingCountriesAndCities type="cities" />
              )}
            </select>
            {errors.city && (
              <ErrorMessage $padding={1}>{errors.city.message}</ErrorMessage>
            )}
          </Row>

          <Row $direction="column">
            <input
              type="text"
              id="postal_zip_code"
              placeholder="Zip code..."
              name="postal_zip_code"
              {...register("postal_zip_code", {
                required: "This field is required",
              })}
            />
            {errors.postal_zip_code && (
              <ErrorMessage $padding={1}>
                {errors.postal_zip_code.message}
              </ErrorMessage>
            )}
          </Row>

          <Row $direction="column">
            <input
              type="text"
              id="street"
              placeholder="Street..."
              name="street"
              {...register("street", { required: "This field is required" })}
            />
            {errors.address && (
              <ErrorMessage $padding={1}>{errors.address.message}</ErrorMessage>
            )}
          </Row>
        </InputContainer>
      </div>

      <div>
        <Heading as="h4">Payment details</Heading>

        <InputContainer className="payment--on-delivery">
          <Row>
            <input
              type="radio"
              id="payment_method"
              defaultChecked
              name="payment_method"
              value="Pay on delivery"
              {...register("payment_method")}
            />
            <label>
              <FaTruck />
              <span>Pay on delivery</span>
            </label>
          </Row>
        </InputContainer>
      </div>

      {/* STRIPE FORM: LATER */}
      {/* <div>
        <Heading as="h4">Payment details</Heading>

        <InputContainer className="payment-details">
          <input type="text" placeholder="Card holder..." />
          <input type="text" placeholder="Credit Card number..." />
          <input type="text" placeholder="Expiration date..." />
          <input type="text" placeholder="CVC..." />
        </InputContainer>
      </div> */}

      <Button $size="large">
        {isCapturing ? <SpinnerMini /> : "Order it now"}
      </Button>
    </StyledForm>
  );
});

export default CheckoutForm;
