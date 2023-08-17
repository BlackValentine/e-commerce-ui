import { apiPOST } from '..';

export const createPaymentIntent = async (total: number) => {
  try {
    const response = await apiPOST({
      url: '/payment/create-payment-intent',
      data: {
        total
      },
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};
