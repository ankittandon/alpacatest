from django.conf.urls import url
from . import views

urlpatterns = [
	url('us_stocks', views.index,name="us_stocks"),
    ]
