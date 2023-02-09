from rest_framework.routers import DefaultRouter
from django.urls.conf import path
from src.apps.blog.api.views.views import BlogpostView, CategoryView

router = DefaultRouter()
router.register(r'posts', BlogpostView, basename='all_blogposts')
router.register(r'category', CategoryView, basename='categories')

urlpatterns = [
    # path('subscribe/', SubscriptionCreateAPIView.as_view(), name='subscription-create'),
]

urlpatterns += router.urls