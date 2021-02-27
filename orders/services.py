from carts.models import Cart
from orders.models import Order

# CESKA POSTA
# 62011306;Jana;Paulusova;Stare Dobrkovice;Cesky Krumlov;38101;jana.paulusova@gmail.com;732447971;0;"2 ID ";DR;0.5;7000;7+41;FO
def export_order_to_csv(order, static):
        if order.cart.payment == Cart.PaymentOptions.COD:
            total = order.get_total()
        else:
            total = 0

        # Put data into row
        row = [order.id,
               order.customer.first_name,
               order.customer.last_name,
               order.customer.address,
               order.customer.city,
               order.customer.postcode,
               order.customer.email,
               order.customer.phone,
               total,
               order.get_label_for_items()
               ]

        # Add static data
        row.extend(static)

        # Update order status
        order.update_state(state=Order.OrderState.DISPATCHED)

        return row

