import requests
import json
from django.core import mail
from django.template.loader import render_to_string
from django.utils.html import strip_tags
from orders.models import Order


# Send mail
def send(subject, html_message, from_email, to):
    text_message = strip_tags(html_message)
    return mail.send_mail(subject, text_message, from_email, [to], html_message=html_message)


# New order confirmation
# https://stackoverflow.com/questions/3005080/how-to-send-html-email-with-django-with-dynamic-content-in-it
def send_new_order_confirmation(orderId):
    # Get order details
    order = Order.objects.get(id=orderId)

    # Sending the email
    content = render_to_string('emails/new_order.html', context={
        'total': order.get_total(),
        'items': order.get_items(),
        'order_id': orderId
    })

    return send('Subject', content, 'identcz@herokuapp.com', 'plojharl@gmail.com')
