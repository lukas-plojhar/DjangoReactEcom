import requests
import json

from orders.models import Order

from django.core.mail import send_mail

MAILGUN_API_KEY = '9e778cb988d3fc4e4431068a8c763d3e-4de08e90-025089fb'


def send_new_order_confirmation(orderId):
    # Get order details
    response = requests.get('http://localhost:8000/orders/' + str(orderId))
    data = json.loads(response.content)
    order = Order.objects.get(id=orderId)

    # Process data
    # items = data['items']
    # payment = data['payment']
    # shipping = data['shipping']
    order.get_total()

    return send_mail("It works!", "This will get sent through Mailgun",
          "Anymail Sender <from@example.com>", ["plojharl@gmail.com"])

    # return requests.post(
    #     "https://api.mailgun.net/v3/sandbox6a54d266c7e84716ad7e70065ade3a42.mailgun.org/messages",
    #     auth=("api", "9e778cb988d3fc4e4431068a8c763d3e-4de08e90-025089fb"),
    #     data={"from": "Excited User <mailgun@identcz.herokuapp.com>",
    #           "to": ["plojharl@gmail.com"],
    #           "subject": "Nova objednavka z iDent",
    #           "template": "new_order"})
