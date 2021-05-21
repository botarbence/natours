import axios from "axios";
import { showAlert } from "./alerts";
const stripe = Stripe(
  "pk_test_51ItBDxD50Et7nKzYP9lFUfur5VsqL3t66pPHr8fsvnF9zapaUESjofNNUYwTPAm8UzciQdWqBqBBrrpFJ28bJzMZ00ddXpdwBz"
);

export const bookTour = async (tourId) => {
  try {
    const session = await axios.get(
      `http://localhost:3000/api/v2/bookings/checkout-session/${tourId}`
    );
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id,
    });
  } catch (err) {
    showAlert("error", err);
  }
};
