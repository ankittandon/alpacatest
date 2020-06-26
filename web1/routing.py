from channels.routing import ProtocolTypeRouter, URLRouter
from channels.auth import AuthMiddlewareStack

from django.urls import path
from polls import consumer

websocket_urlPattern = [
    path('ws/StockData/',consumer.StockConsumer),
]

application = ProtocolTypeRouter({
    #'http':
    'websocket':AuthMiddlewareStack(URLRouter(websocket_urlPattern))
})
