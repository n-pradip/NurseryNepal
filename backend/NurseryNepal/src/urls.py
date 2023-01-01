from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include("src.apps.api.urls"))
]


admin.site.site_header = "Nursery Nepal"
admin.site.site_title = "Nursery Nepal"
admin.site.index_title = "Welcome to Nursery Nepal Admin"

