from django.conf.urls import url

from . import views
from . import sendGo

urlpatterns = [
    url(r'^manage/go/$', views.manage_go),
    url(r'^manage/stop/$', views.manage_stop),
    url(r'^manage/autoMotion/$', views.autoMotion),
    url(r'^manage/emerStop/$', views.emerStop),
    url(r'^manage/camera/$', views.camera_view),
	url(r'^home$', views.home, name='home'),
]
