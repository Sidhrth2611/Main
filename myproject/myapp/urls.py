from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),  # Add this line
    path('tasks/', views.get_tasks, name='get_tasks'),
    path('update_streak/', views.update_streak, name='update_streak'),
]
