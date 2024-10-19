from django.shortcuts import render
from django.http import JsonResponse
from .models import Task, Streak
from django.contrib.auth.decorators import login_required

@login_required
def get_tasks(request):
    tasks = Task.objects.filter(user=request.user)
    return JsonResponse({"tasks": list(tasks.values())})

@login_required
def update_streak(request):
    return JsonResponse({"message": "Streak updated"})

def home(request):
    return render(request, 'myapp/home.html')
