import requests
import json
from django.core import mail
from django.template.loader import render_to_string
from django.utils.html import strip_tags

from orders.models import Order

MAILGUN_API_KEY = '9e778cb988d3fc4e4431068a8c763d3e-4de08e90-025089fb'

# Send mail
def send(subject, html_message, from_email, to):
    text_message = strip_tags(html_message)
    return mail.send_mail(subject, text_message, from_email, to, html_message=html_message)

# New order confirmation
# https://stackoverflow.com/questions/3005080/how-to-send-html-email-with-django-with-dynamic-content-in-it
def send_new_order_confirmation(orderId):
    # Get order details
    response = requests.get('http://localhost:8000/orders/' + str(orderId))
    data = json.loads(response.content)
    order = Order.objects.get(id=orderId)

    # Process data
    items = data['items']
    payment = data['payment']
    shipping = data['shipping']
    order.get_total()

    # Sending the email
    content = render_to_string('emails/new_order.html', {'test': 'test variable asd'})

    return send('Subject', content, 'identcz@herokuapp.com', 'plojharl@gmail.com')

    # send_mail("It works!", "This will get sent through Mailgun",
    #           "Anymail Sender <from@example.com>", ["plojharl@gmail.com"])