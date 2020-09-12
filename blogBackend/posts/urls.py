from django.urls import path, include
from . import views

urlpatterns=[
    path("all/", views.all_posts),
    path("<int:pk>/",views.post),
    path("delete/<int:pk>",views.delete_post),
    path("add/",views.add_post),
]